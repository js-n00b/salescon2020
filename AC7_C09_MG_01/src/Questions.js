//-------------------------------------------------------------------------------------------------

window.Questions = (function() {

//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function Questions() {}	

var mThisVars = {};
var mState = "";

var mCaller = null;

var mQuestionList = [];
var mQuestion = null;
var mSubQuestion = null;

var mInputList = [];
var mAnswerList = [];
var mChoice = null;
var mChoiceList = [];
var mPosList = [];
var mDragList = [];
var mDrag = null;

var mNAttempts = 2;
var mAttemptN = 0;
var mIsCorrect = true;

var mGroupList = [];

Questions.fModuleLoaded = function(
	vId
)
{
	mThisVars.id = vId;
	cQuestions();
}

function
cQuestions(
) 
{
	mScene[mThisVars.id].visible = false;
	mScene[mThisVars.id].fEnable(false);
		
	var vList = mScene[mThisVars.id].fGetChildList("mcQuestion_");
	for (var i = 0; i < vList.length; i++)
	{
		vList[i] = mScene[mThisVars.id].fGetChild("mcQuestion_" + i);
		vList[i].visible = false;
		mQuestionList.push({vQn: vList[i], vSubQnList: []});
		mQuestionList[i].vSubQnList = vList[i].fGetChildList("mcSubQn_");
		for (var j = 0; j < mQuestionList[i].vSubQnList.length; j++)
			mQuestionList[i].vSubQnList[j].visible = false;
		//cArray.fRandomize(mQuestionList[i].vSubQnList);
	}
	//cArray.fRandomize(mQuestionList);
	fDbg(mQuestionList);
}

//------------------------------------------------------------------------------------------------- 
Questions.fStartLevel = function(vLevelN)
{
	cArray.fRandomize(mQuestionList[vLevelN].vSubQnList);
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Questions.fStartQuestion = function(vCaller, vLevelN, vSubQnN)
{
	var i;
	var vList;
	
	mCaller = vCaller;
	mNAttempts = 2;
	
	mQuestion = mQuestionList[vLevelN].vQn;
	mSubQuestion = mQuestionList[vLevelN].vSubQnList[vSubQnN];

	mInputList = [];
	mAnswerList = [];
	mChoice = null;
	mChoiceList = [];
	mPosList = [];
	mDragList = [];
	mGroupList = [];

	fDbg("Questions::"+mQuestion.name + ", " + mSubQuestion.name);
	
//FIB
	vList = mSubQuestion.fGetChildList("tfNumber");
	vList = vList.concat(mSubQuestion.fGetChildList("tfDigit"));
	vList = vList.concat(mSubQuestion.fGetChildList("tfDecimal"));
	vList = vList.concat(mSubQuestion.fGetChildList("tfInput"));
	if (vList.length > 0)
	{
		for (i = 0; i < vList.length; i++)
		{
			var vType = xfGetInputType(vList[i].prefix);
			fDbg("input type::"+vType+"***");
//			mInputList.push({"vInput": vList[i], "vType": vList[i].prefix, "vAnswer": vList[i].text, "vGroup": fPrefix(vList[i].suffix), "vMarked": false, "vCorrect": true, "vUserAnswer": ""});
			mInputList.push({"vInput": vList[i], "vType": vType, "vAnswer": vList[i].text, "vGroup": vList[i].prefix, "vMarked": false, "vCorrect": true, "vUserAnswer": ""});
			vList[i].color = "#000000";
			vList[i].SetInput(true);
			vList[i].SetMaxChar(String(vList[i].text).length + ((vType != "Digit") ? 2 : 0));
			if (vType != "Input")
				vList[i].ShowKeyboard = "num";
			vList[i].text = "";
			vList[i].fEnable(true);
			if (parseInt(vList[i].suffix) == 0)
				SYS.fChangeFocusTarget(vList[i]);
		}
		mSubQuestion.pQnType = "FIB";

		for (i = 0; i < vList.length; i++)
			if (mGroupList.indexOf(vList[i].prefix) == -1)
				mGroupList.push(vList[i].prefix);
		fDbg("FIB Groups::"+ mGroupList);
	}
//---------

//MCQ	
	vList = mSubQuestion.fGetChildList("tbChoice");
	for (i = 0; i < vList.length; i++)
	{
		vList[i].fSetColor("#999999");
		vList[i].fSetOverColor("#0000FF");
		vList[i].fSetDownColor("#0000FF");
	}
	vList = vList.concat(mSubQuestion.fGetChildList("rbChoice"));
	if (vList.length > 0)
	{
		for (i = 0; i < vList.length; i++)
			vList[i].fSelect(false);
		mSubQuestion.pQnType = "MCQ";

		for (i = 0; i < vList.length; i++)
		{
			var vIdx = cArray.fFind(mGroupList, "vGroup", vList[i].prefix);
			if (vIdx == -1)
				mGroupList.push({"vGroup": vList[i].prefix, "vChoices": [vList[i]], "vCorrect": false, "vUserAnswer": null});
			else
				mGroupList[vIdx].vChoices.push(vList[i]);
		}
		
		for (i = 0; i < mGroupList.length; i++)
			mNAttempts = Math.min(mNAttempts, (mGroupList[i].vChoices.length <= 2) ? 1 : 2);
	}
//---------

//MAQ	
	mChoiceList = mSubQuestion.fGetChildList("cbChoice_");
	if (mChoiceList.length > 0)
	{
		for (i = 0; i < mChoiceList.length; i++)
			mChoiceList[i].fSelect(false);
		mSubQuestion.pQnType = "MAQ";
	}
//---------

//HS_SCRAMBLE	
	vList = mSubQuestion.fGetChildList("hsScramble_");
	if (vList.length > 0)
	{
		for (i = 0; i < vList.length; i++)
		{
			mDragList.push(mSubQuestion.fGetChild("hsScramble_" + i));
			mPosList.push(new createjs.Point(mDragList[i].x, mDragList[i].y));
			mAnswerList.push(i);
		}
		var vScrambleList = [];
		if (mSubQuestion.fGetChild("tfScrambleList", false) != null)
			vScrambleList = mSubQuestion.fGetChild("tfScrambleList").text.split("|");
		if (vScrambleList.length > 0)
			for (i = 0; i < mDragList.length; i++)
				mDragList[i].fSetText(vScrambleList[i]);

		if (mDragList.length > 0)
			cArray.fRandomize(mAnswerList);
		for (i = 0; i < vList.length; i++)
		{
			vList[i] = mSubQuestion.fGetChild("hsScramble_" + mAnswerList[i]);
			vList[i].x = mPosList[i].x;
			vList[i].y = mPosList[i].y;
		}
		mSubQuestion.pQnType = "SCRAMBLE";
	}
//---------

	vList = mSubQuestion.fGetChildList("mcResult");
	for (i = 0; i < vList.length; i++)
		vList[i].visible = false;

	if (mSubQuestion.fGetChild("mcAnswer", false) != null)
		mSubQuestion.fGetChild("mcAnswer").visible = false;
	//if (mSubQuestion.fGetChild("mcQnPanel", false) != null)
		//mSubQuestion.fGetChild("mcQnPanel").fStop(1);
	
	mSubQuestion.visible = true;
	mSubQuestion.fEnable(true);
	mQuestion.visible = true;

	mScene[mThisVars.id].fGetChild("pbSubmit").fEnable(false);
	mScene[mThisVars.id].fGetChild("pbNext").visible = false;
	
	mAttemptN = 0;

	mScene[mThisVars.id].fEnable(true);
	mScene[mThisVars.id].visible = true;
}

//------------------------------------------------------------------------------------------------- 
// State
//------------------------------------------------------------------------------------------------- 
function 
pState(
	vData
)
{
	var i;
	var j;
	var vStr;
	var vList;
	var vList1;
	
fDbg("pState == "+vData);
	mState = vData;

	switch(vData)
	{
	case "State_Evaluate":		
		mSubQuestion.fEnable(false);
		mAttemptN++;
		
		mIsCorrect = true;
		switch (mSubQuestion.pQnType)
		{
		case "FIB":
			for (i = 0; i < mInputList.length; i++)
			{
				fDbg("answer::"+mInputList[i].vAnswer);
				
				if (mInputList[i].vMarked)
					continue;
					
				//to handle interchangable answers
				if (mInputList[i].vAnswer.indexOf("@") > -1)
				{
					vList1 = cArray.fFindArray(mInputList, "vAnswer", mInputList[i].vAnswer);
					var vAnswerList = mInputList[i].vAnswer.split("@");
					for (j = 0; j < vList1.length; j++)
					{
						fDbg("vAns::"+vAnswerList+"***");
						vStr = xfClean(vList1[j].vInput.text, vList1[j].vType);
						fDbg("UserInput::"+vStr+"***");
						var vIdx = vAnswerList.indexOf(vStr);
						if (vIdx == -1)
						{
							vList1[j].vCorrect = false;
							mIsCorrect = false;
						}
						else
							vAnswerList.splice(vIdx, 1);
							
						vList1[j].vMarked = true;
					}
					continue;
				}
				//
				
				vStr = xfClean(mInputList[i].vInput.text, mInputList[i].vType);
				fDbg("UserInput::"+vStr+"***");
				
				vList = mInputList[i].vAnswer.split("|");
				for (j = 0; j < vList.length; j++)
					vList[j] = xfClean(vList[j], mInputList[i].vType);
				
				if (vList.indexOf(vStr) == -1)
				{
					mInputList[i].vCorrect = false;
					mIsCorrect = false;
				}
				
				mInputList[i].vMarked = true;
			}
			for (i = 0; i < mInputList.length; i++)
			{
				if (mInputList[i].vCorrect)
				{
					mInputList[i].vInput.color = "#0000FF";
					mInputList[i].vInput.fEnable(false);
				}
				else
					mInputList[i].vInput.color = "#FF0000";
				
				if (mSubQuestion.fGetChild("mcResult_" + mInputList[i].vInput.suffix, false) != null)
				{
					mSubQuestion.fGetChild("mcResult_" + mInputList[i].vInput.suffix).fStop(mInputList[i].vCorrect ? "Correct" : "Wrong");
					mSubQuestion.fGetChild("mcResult_" + mInputList[i].vInput.suffix).visible = true;
				}
			}

			for (i = 0; i < mGroupList.length; i++)
				if (mSubQuestion.fGetChild("mcResult_" + mGroupList[i], false) != null)
				{
					vList1 = cArray.fFindArray(mInputList, "vGroup", mGroupList[i]);
					if (vList1.length > 0 && cArray.fFind(vList1, "vCorrect", false) >= 0)
						mSubQuestion.fGetChild("mcResult_" + mGroupList[i]).fStop("Wrong");
					else
						mSubQuestion.fGetChild("mcResult_" + mGroupList[i]).fStop("Correct");
					
					mSubQuestion.fGetChild("mcResult_" + mGroupList[i]).visible = true;
				}
			break;
			
		case "MCQ":
			mIsCorrect = true;
			for (i = 0; i < mGroupList.length; i++)
			{
				if (mGroupList[i].vCorrect)
					continue;
					
				if (mGroupList[i].vUserAnswer.name.indexOf("Answer") > -1)
				{
					mGroupList[i].vCorrect = true;
					for (j = 0; j < mGroupList[i].vChoices.length; j++)
						mGroupList[i].vChoices[j].fEnable(false);
				}
				else
					mIsCorrect = false;
				if (mSubQuestion.fGetChild("mcResult_" + i, false) != null)
				{
					mSubQuestion.fGetChild("mcResult_" + i).fStop(mGroupList[i].vCorrect ? "Correct" : "Wrong");
					mSubQuestion.fGetChild("mcResult_" + i).x = mGroupList[i].vUserAnswer.x + 20;;
					mSubQuestion.fGetChild("mcResult_" + i).y = mGroupList[i].vUserAnswer.y + 20;;
					mSubQuestion.fGetChild("mcResult_" + i).visible = true;
				}
				if (mSubQuestion.fGetChild("mcResult_" + mGroupList[i].vGroup, false) != null)
				{
					mSubQuestion.fGetChild("mcResult_" + mGroupList[i].vGroup).fStop(mGroupList[i].vCorrect ? "Correct" : "Wrong");
					mSubQuestion.fGetChild("mcResult_" + mGroupList[i].vGroup).visible = true;
				}
			}
			break;
			
		case "MAQ":
			for (i = 0; i < mChoiceList.length; i++)
			{
				if (mChoiceList[i].Selected && mChoiceList[i].name.indexOf("Answer") == -1)
					mIsCorrect = false;
				if (!mChoiceList[i].Selected && mChoiceList[i].name.indexOf("Answer") > -1)
					mIsCorrect = false;
				if (mSubQuestion.fGetChild("mcResult_" + i, false) != null)
				{
					mSubQuestion.fGetChild("mcResult_" + i).fStop(mIsCorrect ? "Correct" : "Wrong");
					mSubQuestion.fGetChild("mcResult_" + i).x = mChoiceList[i].x + 20;;
					mSubQuestion.fGetChild("mcResult_" + i).y = mChoiceList[i].y + 20;;
					mSubQuestion.fGetChild("mcResult_" + i).visible = true;
				}
			}
			break;
			
		case "SCRAMBLE":
			for (i = 0; i < mDragList.length; i++)
			{
				if (mAnswerList[i] != i)
				{
					mIsCorrect = false;
					break;
				}
			}
			break;
		}
		
		if (mSubQuestion.fGetChild("mcResult", false) != null)
		{
			mSubQuestion.fGetChild("mcResult").fStop(mIsCorrect ? "Correct" : "Wrong");
			mSubQuestion.fGetChild("mcResult").visible = true;
		}
		
		pState(mIsCorrect ? "State_Correct" : "State_Wrong");
		break;

	case "State_Correct":
		SYS.fStartSound(mScene[mThisVars.id], Signal_Done, "Correct_" + Math.floor(Math.random() * 3), 1);
		break;

	case "State_Wrong":
		if (mAttemptN < mNAttempts)
			SYS.fStartSound(mScene[mThisVars.id], Signal_Done, ["Wrong_" + Math.floor(Math.random() * 3), "Retry_" + Math.floor(Math.random() * 3)], 1);
		else
			SYS.fStartSound(mScene[mThisVars.id], Signal_Done, "Wrong_" + Math.floor(Math.random() * 3), 1);
		break;

	case "State_TryAgain":
		switch (mSubQuestion.pQnType)
		{
		case "FIB":
			var j = 999;
			for (i = 0; i < mInputList.length; i++)
			{
				if (!mInputList[i].vCorrect)
				{
					mInputList[i].vCorrect = true;
					mInputList[i].vInput.text = "";

					if (parseInt(mInputList[i].vInput.suffix) <= j)
						SYS.fChangeFocusTarget(mInputList[i].vInput);
					
					mInputList[i].vInput.color = "#000000";
					if (mSubQuestion.fGetChild("mcResult_" + mInputList[i].vInput.suffix, false) != null)
						mSubQuestion.fGetChild("mcResult_" + mInputList[i].vInput.suffix).visible = false;
					mInputList[i].vMarked = false;
				}
			}
			
			break;
		
		case "MCQ":
			for (i = 0; i < mGroupList.length; i++)
			{
				if (!mGroupList[i].vCorrect)
				{
					mGroupList[i].vUserAnswer.fSelect(false);
					mGroupList[i].vUserAnswer = null;
					
					if (mSubQuestion.fGetChild("mcResult_" + i, false) != null)
						mSubQuestion.fGetChild("mcResult_" + i).visible = false;

					if (mSubQuestion.fGetChild("mcResult_" + mGroupList[i].vGroup, false) != null)
						mSubQuestion.fGetChild("mcResult_" + mGroupList[i].vGroup).visible = false;
				}
			}
			break;
		
		case "MAQ":
			for (i = 0; i < mChoiceList.length; i++)
			{
				mChoiceList[i].fSelect(false);
				if (mSubQuestion.fGetChild("mcResult_" + i, false) != null)
					mSubQuestion.fGetChild("mcResult_" + i).visible = false;
			}
			break;
		
		case "SCRAMBLE":
			break;
		}
		
		if (mSubQuestion.fGetChild("mcResult", false) != null)
			mSubQuestion.fGetChild("mcResult").visible = false;
		
		mSubQuestion.fEnable(true);
		break;

	case "State_ShowAnswer":
		SYS.fStartSound(mScene[mThisVars.id], Signal_Done, "ShowAnswer_" + Math.floor(Math.random() * 3), 1);
		break;

	case "State_Answer":
		if (mSubQuestion.fGetChild("mcAnswer", false) != null)
			mSubQuestion.fGetChild("mcAnswer").visible = true;
		//if (mSubQuestion.fGetChild("mcQnPanel", false) != null)
			//mSubQuestion.fGetChild("mcQnPanel").fStop(2);
		mScene[mThisVars.id].fGetChild("pbNext").visible = true;
		break;
	}
}
	
//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Questions.fOnSignal = function(
	vTarget, 				//	original target for signal
	vSignal, 				//	signal received
	vData					//	extra data along with signal
)
{
	var i;
	var vPos;
	
	switch (vSignal)
	{
	case Signal_MouseUp:
		if (mDrag != null)
		{
			for (i = 0; i < mDragList.length; i++)
			{
				vPos = mDragList[i].globalToLocal(SYS.pMousePos().x, SYS.pMousePos().y);
				if (mDragList[i].hitTest(vPos.x, vPos.y))
				{
					mDrag.x = mDragList[i].x;
					mDrag.y = mDragList[i].y;
					
					mDragList[i].x = mOldPos.x;
					mDragList[i].y = mOldPos.y;
					
					var vIdx1 = mAnswerList.indexOf(parseInt(mDrag.suffix));
					var vIdx2 = mAnswerList.indexOf(parseInt(mDragList[i].suffix));
					mAnswerList[vIdx2] = parseInt(mDrag.suffix);
					mAnswerList[vIdx1] = parseInt(mDragList[i].suffix);
					break;
				}
			}
			fDbg("mAnswerList::"+mAnswerList);
			if (i == mDragList.length)
			{
				mDrag.x = mOldPos.x;
				mDrag.y = mOldPos.y;
			}
			mDragList.push(mDrag);
			mDrag = null;
			mScene[mThisVars.id].fGetChild("pbSubmit").fEnable(true);
		}
		break;

	case Signal_MouseDown:	
		fDbg("down::"+vTarget.name);
		switch (vTarget.prefix)
		{
		case "hsScramble":
			mOldPos = new createjs.Point(vTarget.x, vTarget.y);
			mDrag = vTarget;
			mAnswerN = mAnswerList.indexOf(parseInt(mDrag.suffix));
			mDrag.fRaiseToTop(mDragList);
			vPos = mDrag.parent.globalToLocal(SYS.pMousePos().x, SYS.pMousePos().y);
			mDragOffset = new createjs.Point(vPos.x - vTarget.x, vPos.y - vTarget.y);
			cArray.fRemove(mDragList, mDrag);
			break;
		}
		break;

	case Signal_Drag:
		if (mDrag != null)
		{
			vPos = mDrag.parent.globalToLocal(SYS.pMousePos().x, SYS.pMousePos().y);
			mDrag.x = vPos.x - mDragOffset.x;	
			mDrag.y = vPos.y - mDragOffset.y;
		}
		break;

	case Signal_Change:
		if ((vTarget.name.substr(0, 2) == "tf") && (xfGetInputType(vTarget.name) != ""))
		{
			for (i = 0; i < mInputList.length; i++)
				if (mInputList[i].vInput.text == "")
					break;
			
			mScene[mThisVars.id].fGetChild("pbSubmit").fEnable(i == mInputList.length);
			break;
		}
		break;

	case Signal_Click:
		var vStr = vTarget.name.substr(0, 2);
		if (vStr == "rb" || vStr == "tb")
		{
			var vIdx = cArray.fFind(mGroupList, "vGroup", vTarget.prefix);
			if (vIdx > -1)
				mGroupList[vIdx].vUserAnswer = vTarget;
			
			for (i = 0; i < mGroupList.length; i++)
				if (mGroupList[i].vUserAnswer == null)
					break;
			mScene[mThisVars.id].fGetChild("pbSubmit").fEnable(i == mGroupList.length);
		}
		else if (vStr == "cb")
		{
			for (i = 0; i < mChoiceList.length; i++)
				if (mChoiceList[i].Selected)
					break;
			
			mScene[mThisVars.id].fGetChild("pbSubmit").fEnable(i < mChoiceList.length);
		}

		switch (vTarget.name)
		{
		case "pbSubmit":
			vTarget.fEnable(false);
			pState("State_Evaluate");
			break;

		case "pbNext":
			mSubQuestion.visible = false;
			mQuestion.visible = false;

			for (i = 0; i < mInputList.length; i++)
				mInputList[i].vInput.text = mInputList[i].vAnswer;

			mScene[mThisVars.id].visible = false;
			mScene[mThisVars.id].fEnable(false);

			SYS.fDispatch(mCaller, Signal_Done, mIsCorrect);
			break;
		}
		break;
	
	case Signal_Done:
		fDbg(vSignal + "::" + mState);
		switch (mState)
		{
		case "State_Wrong":
			pState((mAttemptN < mNAttempts) ? "State_TryAgain" : "State_ShowAnswer");
			break;

		case "State_Correct":
		case "State_ShowAnswer":
			pState("State_Answer");
			break;
		}
		break;
	}

	return false;
}

//----------------------------------------------------------------------------------------------------
//	clean answer/input
//----------------------------------------------------------------------------------------------------
function
xfClean(
	s,
	type
)
{
	
	var i;
	var vList;
	
fDbg("xfClean");
	//	remove extranous spaces
	s = s.replace(/^\s+|\s+$/g, "");
	s = s.replace(/\s+/g, " ");

	//	remove spaces around ,+-*/():
	s = s.replace(/\s*(,|\+|\-|\*|\/|:|\(|\))\s*/g, "$1");

	//	remove spaces between digits and letters
	s = s.replace(/(\d+)\s+([a-zA-Z])/g, "$1$2");

	if (type == "Input")
		s = s.toLowerCase();

	if (type == "Number" || type == "Digit")
		return xfCleanNumber(s);
	
	if (type == "Decimal")
		return xfCleanDecimal(xfCleanNumber(s));

	return s;
}

//----------------------------------------------------------------------------------------------------
//	clean answer/input
//----------------------------------------------------------------------------------------------------
function
xfCleanNumber(
	s
)
{
	s = s.replace(/\s+/g, "");
	s = xfTrimPreceedingZero(s);
	
	//remove "," if it is in correct position, eg 1,000 to 1000
	var vList = s.split(",");
	if (vList.length > 1)
	{
		for (var i = 1; i < vList.length; i++)
			if (vList[i].length % 3 != 0)
				break;
		if (i == vList.length)
			s = s.replace(/,/g, "");		
	}
	//change 0.xxx to .xxx
	vList = s.split(".");
	if (vList.length > 1 && vList[0] == "0")
		s = s.substring(1);

	return s;
}

//----------------------------------------------------------------------------------------------------
//	clean answer/input
//----------------------------------------------------------------------------------------------------
function
xfTrimPreceedingZero(
	s
)
{
	for (var i = 0; i < s.length; i++)
		if (s.substr(i, 1) != "0")
			break;

	return s.substring(i);
}

//----------------------------------------------------------------------------------------------------
//	clean answer/input
//----------------------------------------------------------------------------------------------------
function
xfCleanDecimal(
	s
)
{
	var vIdx;
	
	if ((vIdx = s.indexOf(".")) == -1)
		return s;
	
	//remove extra 0 eg .x0000 to .x
	for (var i = s.length - 1; i > vIdx + 1; i--)
	{
		if (s.substr(i, 1) != "0")
			break;
	}
	s = s.substr(0, i + 1);
	
	return s;
}

//----------------------------------------------------------------------------------------------------
//	get input type
//----------------------------------------------------------------------------------------------------
function
xfGetInputType(
	s
)
{
	var vTypes = ["Input", "Number", "Digit", "Decimal"];
	
	for (var i = 0; i < vTypes.length; i++)
		if (s.indexOf(vTypes[i]) > -1)
			return vTypes[i];

	return "";
}

//----------------------------------------------------------------------------------------------------
return Questions;
})();
