//-------------------------------------------------------------------------------------------------

window.Engine = (function() {

//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function Engine() {}	

var mEngine = {};

var mLevelN;
var mGameLevels = [];

var mState = "";
var mcMessages = null;
var mScoreText = null;
var mScore = 0;

var mNTasks = 0;
var mTaskN = 0;

var mcRoute = null;
var mGridList = [];

var mStartPosList = [];
var mPathList = [];
var mCastList = [];
var mCast = null;

var mDirOffsets = [{x: -1, y: 0}, {x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}];
var mDirections = ["Left", "Up", "Right", "Down", "Still"];
var mKeyDownList = [false, false, false, false];

var mUser = null;
var mTaskList = [];
var mObstacleList = [];
var mEnemyList = [];
var mTrapList = [];

var mcLife = null;

var mNCol = 25;
var mNRow = 16;
var mGridSize = 40;
var mNormalSpeed = 8;

var mStartPos;

var mIsCorrect;
var mcFeedback;

var mSoftKey = null;

Engine.fModuleLoaded = function(
	vId
)
{
	mEngine.id = vId;
	cEngine();
}

function
cEngine(
) 
{
	mScene[mEngine.id].visible = false;
	mScene[mEngine.id].fEnable(false);
	
	mcMessages = mScene[mEngine.id].fGetChild("mcMessages");
	mcMessages.visible = false;
	
	var i, j;
	
	mcRoute = mScene[mEngine.id].fGetChild("mcRoute");
	mcLife = mScene[mEngine.id].fGetChild("mcLife");
	
	mSoftKey = mScene[mEngine.id].fGetChild("mcSoftKey");
	//mSoftKey.visible = mIsMobilePlatform;
	
	mStartPos = new createjs.Point(mcRoute.x, mcRoute.y);

	mNCol = Math.floor((mStageSize.x - mcRoute.x) / mGridSize);
	mNRow = Math.floor((mStageSize.y - mcRoute.y) / mGridSize);

	mGridList = [];
	var vLeftMost = mNCol;
	for (i = 0; i < mNCol; i++)
	{
		mGridList.push([]);
		for (j = 0; j < mNRow; j++) 
		{
			mGridList[i][j] = mcRoute.hitTest(mGridSize / 2 + mGridSize * i, mGridSize / 2 + mGridSize * j);
			if (mGridList[i][j])
				vLeftMost = Math.min(i, vLeftMost);
		}
	}

	mStartPosList = [];
	for (j = 0; j < mNRow; j++)
	{
		if (mGridList[vLeftMost][j])
		{
			mStartPosList.push({x: vLeftMost, y: j});
			break;
		}
	}
	
	mPathList = [];
	for (i = vLeftMost + 1; i < mNCol; i++)
		for (j = 0; j < mNRow; j++) 
			if (mGridList[i][j])
				mPathList.push({x: i, y: j});

	var vList = mScene[mEngine.id].fGetChildList("mcCast");
	for (i = 0; i < vList.length; i++)
	{
		vList[i].vName = vList[i].prefix.substr(8);
		vList[i].vMovable = (vList[i].prefix.substr(6, 2) == "Mi");
		vList[i].visible = false;
	}

	mUser = mScene[mEngine.id].fGetChild("mcCastSiUser");
	mEnemyList = mScene[mEngine.id].fGetChildList("mcCastMiEnemy_");
	mObstacleList = mScene[mEngine.id].fGetChildList("mcCastSiObstacle_");
	if (mObstacleList[0].fGetChild("mcItem", false) != null && mObstacleList[0].fGetChild("mcItem").pTotalFrames() > 1)
		for (i = 0; i < mObstacleList.length; i++)
			mObstacleList[i].fGetChild("mcItem").fStop(parseInt(mObstacleList[i].suffix) + 1);
	mTaskList = mScene[mEngine.id].fGetChildList("mcCastSiTask_");
	if (mTaskList[0].fGetChild("mcItem", false) != null && mTaskList[0].fGetChild("mcItem").pTotalFrames() > 1)
		for (i = 0; i < mTaskList.length; i++)
			mTaskList[i].fGetChild("mcItem").fStop(parseInt(mTaskList[i].suffix) + 1);
	mTrapList = mScene[mEngine.id].fGetChildList("mcCastSiTrap_");

	if (mScene[mEngine.id].fGetChild("mcDirections", false) != null)
		mScene[mEngine.id].fGetChild("mcDirections").visible = (createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid);
	
	mVideoDom = document.getElementById('HelpVideo');
	mVideoDom.style.position = "absolute";
	mVideoDom.style.visibility = "hidden";
	mVideoDom.controls = true;
	
	fDbg("cEngine::MazeGame::");
	//Engine.fStart(0, [0, 0, 0, 0, 0]);
}

//------------------------------------------------------------------------------------------------- 
function
fResizeVideo()
{
	var cx = stage.canvas.width / mStageSize.x;
	mVideoDom.width = cx * 560;
	mVideoDom.height = mVideoDom.width * mStageSize.y / mStageSize.x;

	mVideoDom.style.left = ((window.innerWidth  - stage.canvas.width) / 2 + 232 * cx) + "px";
	mVideoDom.style.top = (280 * cx) + "px";
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Engine.fStart = function(vLevelN, vLevels)
{
	mLevelN = vLevelN;
	mGameLevels = vLevels;	

	SYS.fStartSound(mScene[mEngine.id], "Signal_BgMusic", "BgMusic", 0);
	
	fDbg("Engine.fStart()::"+vLevelN);
	if (mLevelN < 1)
		mVideoDom.src = "media/media1.mp4";
	else
		mVideoDom.src = "media/media2.mp4";

	fResizeVideo();

	for (var i = 0; i < mGameLevels.length; i++)
	{
		if (mGameLevels[i] > 0)
			mIsHelpDone[i] = true;
	}
	
	fInitActivity();

	mScene[mEngine.id].fGetChild("mcExit").visible = false;
	mScene[mEngine.id].fEnable(true);
	mScene[mEngine.id].visible = true;
	
	fStartGame();
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fInitActivity()
{
	var i;
	
	for (i = 0; i < mTaskList.length; i++)
		mTaskList[i].visible = false;

	for (i = 0; i < mCastList.length; i++)
		mCastList[i].visible = false;
	
	mCastList = [];

	cArray.fRandomize(mEnemyList);
	for (i = 0; i < mLevelData[mLevelN].Enemy; i++)
	{
		mEnemyList[i].vStartX = mCapturePos["Enemy"][i].x;
		mEnemyList[i].vStartY = mCapturePos["Enemy"][i].y;
		mCastList.push(mEnemyList[i]);
	}
	cArray.fRandomize(mObstacleList);
	for (i = 0; i < mLevelData[mLevelN].Obstacle; i++)
	{
		mObstacleList[i].vStartX = mCapturePos["Obstacle"][i].x;
		mObstacleList[i].vStartY = mCapturePos["Obstacle"][i].y;
		mCastList.push(mObstacleList[i]);
	}
	cArray.fRandomize(mTaskList);
	for (i = 0; i < mLevelData[mLevelN].Task; i++)
	{
		mTaskList[i].vStartX = mCapturePos["Task"][i].x;
		mTaskList[i].vStartY = mCapturePos["Task"][i].y;
		if (mTaskList[i].pTotalFrames() > 1)
			mTaskList[i].fStop(1);
			
		if (mTaskList[i].fGetChild("mcResult", false) != null)
			mTaskList[i].fGetChild("mcResult").fStop(1);
		
		if (mTaskList[i].fGetChild("mcItem", false) != null)
			mTaskList[i].fGetChild("mcItem").visible = true;
		
		mTaskList[i].fGetChild("mcCorrect").visible = false;
		mTaskList[i].fGetChild("mcWrong").visible = false;

		mCastList.push(mTaskList[i]);
	}
	
	if (!mIsCaptureMode)
	{
		cArray.fRandomize(mPathList);
		for (i = 0; i < mCastList.length; i++)
		{
			mCastList[i].vStartX = mPathList[i].x;
			mCastList[i].vStartY = mPathList[i].y;
		}
	}
	
	mCastList.push(mUser);
	cArray.fRandomize(mStartPosList);
	mUser.vStartX = mStartPosList[0].x;
	mUser.vStartY = mStartPosList[0].y;
	
	//fDbg("there is no traps::"+(mLevelData[mLevelN].Trap!=undefined));
/*	cArray.fRandomize(mTrapList);
	for (var i = 0; i < mLevelData[mLevelN].Trap; i++)
		mCastList.push(mTrapList[i]);
*/	
	mcLife.fStop(1);

	mScore = 0;
	mTaskN = 0;
	mNTasks = mLevelData[mLevelN].Task;
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fStartGame()
{
	for (var i = 0; i < mCastList.length; i++)
	{
		mCastList[i].x = mStartPos.x + mGridSize / 2 + mGridSize * mCastList[i].vStartX;
		mCastList[i].y = mStartPos.y + mGridSize / 2 + mGridSize * mCastList[i].vStartY;
		mCastList[i].vGridX = mCastList[i].vStartX;
		mCastList[i].vGridY = mCastList[i].vStartY;

		mCastList[i].vSpeed = mNormalSpeed;
		mCastList[i].vSpeedChange = 1;
		mCastList[i].vSuspended = false;
		mCastList[i].vCurrentDir = mDirOffsets.length;
		if (mCastList[i].vMovable)
			mCastList[i].fStop("Still");
		mCastList[i].vStepN = 0;
		
		mCastList[i].vOffset = {x:0, y:0};
		mCastList[i].visible = true;
	}

	mUser.vMovable = false;
	mUser.fStop("Still");
	
	mScene[mEngine.id].fGetChild("pbHelp").fEnable(true);
	mScene[mEngine.id].fGetChild("pbBack").fEnable(true);

	if (!mIsHelpDone[mLevelN])
		pState("Help");
	else
		fResumeGame();
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fResumeGame()
{
	fDbg("fResumeGame()::"+mUser.vMovable);

	mSoftKey.fEnable(true);
	createjs.Ticker.addEventListener("tick", fOnEnterFrame);
	this.addEventListener("keydown", fOnKeyDown);		
	this.addEventListener("keyup", fOnKeyUp);
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fPauseGame()
{
	fDbg("Pause Game");

	mSoftKey.fEnable(false);
	createjs.Ticker.removeEventListener("tick", fOnEnterFrame);
	this.removeEventListener("keydown", fOnKeyDown);		
	this.removeEventListener("keyup", fOnKeyUp);
	
	mKeyDownList = [false, false, false, false];
	mUser.vMovable = false;
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fEndGame(vSaveScore)
{
	SYS.fEndSound(mScene[mEngine.id], "Signal_BgMusic");
	mUser.fStop("Still");

	mSoftKey.fEnable(false);
	mScene[mEngine.id].visible = false;
	mScene[mEngine.id].fEnable(false);
	Questions.fStartLevel(mLevelN);

	if (vSaveScore)
	{
		mGameLevels[mLevelN] = Math.max(mGameLevels[mLevelN], mScore);
		LevelMenu.fStart(mGameLevels);
	}
	else
		LevelMenu.fStart();
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function 
fOnEnterFrame(event)
{
	for (var i = 0; i < mCastList.length; i++)
		if (mCastList[i].vMovable && !mCastList[i].vSuspended)
			fMoveCast(mCastList[i]);
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function 
fOnKeyDown(event)
{
	//fDbg("fOnKeyDown::"+event.keyCode);
	if (event.keyCode >= 37 && event.keyCode <= 40)
	{
		mUser.vMovable = true;
		mKeyDownList[event.keyCode - 37] = true;
	}
}

//-------------------------------------------------------------------------------------------------
function 
fOnKeyUp(event)
{
	//fDbg("fOnKeyUp");
	if (event.keyCode >= 37 && event.keyCode <= 40)
		mKeyDownList[event.keyCode - 37] = false;
}

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fCheckMovableStep(
	vCast,
	vDir
)
{
	//fDbg("fCheckMovableStep::"+vDir);
	var vNextStepX = vCast.vGridX + mDirOffsets[vDir].x;
	var vNextStepY = vCast.vGridY + mDirOffsets[vDir].y;

	if (vNextStepX < 0 || vNextStepX == mNCol || vNextStepY < 0 || vNextStepY == mNRow)
		return false;
	
	return mGridList[vNextStepX][vNextStepY];
}

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fGetMovableStep(
	vCast
)
{
	var vOppDir = (vCast.vCurrentDir == 4) ? vCast.vCurrentDir : (vCast.vCurrentDir + 2) % 4;
	var vDirList = [];
	for (var i = 0; i < mDirOffsets.length; i++)
	{
		if (i == vOppDir)
			continue;
		
		var vNextStepX = vCast.vGridX + mDirOffsets[i].x;
		var vNextStepY = vCast.vGridY + mDirOffsets[i].y;
		
		if (vNextStepX < 0 || vNextStepX == mNCol || vNextStepY < 0 || vNextStepY == mNRow)
			continue;
			
		if (mGridList[vNextStepX][vNextStepY])
			vDirList.push(i);
	}
	
	if (vDirList.length == 0)
		return vOppDir;

	return vDirList[Math.floor(Math.random() * vDirList.length)];
}

//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fMoveCast(
	vCast
)
{
//	fDbg("fMoveCast::"+vCast.name);
	if (vCast.vStepN == 0)
	{
		if (vCast.vName == "User")
		{
			for (var i = 0; i < mKeyDownList.length; i++)
				if (mKeyDownList[i])
					break;
			
			if (i < mKeyDownList.length && fCheckMovableStep(vCast, i))
				vCast.vCurrentDir = i;
			else
			{
				mUser.vMovable = false;
				vCast.vCurrentDir = mDirOffsets.length;
				vCast.fStop(mDirections[vCast.vCurrentDir]);
				return;
			}
		}
		else
			vCast.vCurrentDir = fGetMovableStep(vCast);
		
		vCast.fStop(mDirections[vCast.vCurrentDir]);
		vCast.vSpeed = mNormalSpeed * vCast.vSpeedChange;
		vCast.vOffset.x = mDirOffsets[vCast.vCurrentDir].x * mGridSize / vCast.vSpeed;
		vCast.vOffset.y = mDirOffsets[vCast.vCurrentDir].y * mGridSize / vCast.vSpeed;
	}

	vCast.vStepN++;
	vCast.x += vCast.vOffset.x;
	vCast.y += vCast.vOffset.y;
	if (vCast.vStepN == vCast.vSpeed)
	{
		vCast.vStepN = 0;
		vCast.fStop(mDirections[vCast.vCurrentDir]);
		vCast.vGridX += mDirOffsets[vCast.vCurrentDir].x;
		vCast.vGridY += mDirOffsets[vCast.vCurrentDir].y;
		
		fCheckCollision(vCast);
	}
}

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fDoCollision(
	vCast
)
{
	fPauseGame();
	
	vCast.fStop("Hurt");

	mScene[mEngine.id].fGetChild("pbHelp").fEnable(false);
	mScene[mEngine.id].fGetChild("pbBack").fEnable(false);
	SYS.fStartTimer(mScene[mEngine.id], "CollisionDone", 1000);
}	

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fDoTask(
	vCast
)
{
	fPauseGame();
	
	mIsCorrect = false;
	
	mCast = vCast;
	mUser.fStop("Still");
	
	Questions.fStartQuestion(Engine, mLevelN, mTaskN);
}	

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fDoTaskEnd(
	v
)
{
	if (mCast.fGetChild("mcItem", false) != null)
		mCast.fGetChild("mcItem").visible = true;

	if (mCast.fGetChild("mcResult", false) != null)
		mCast.fGetChild("mcResult").fStop(v ? "Correct" : "Wrong");
	else
		mCast.fStop(v ? "Correct" : "Wrong");

	mCast.vGridX = 0;
	mCast.vGridY = 0;
	mCast.x = mScene[mEngine.id].fGetChild("mcResult_" + mTaskN).x;
	mCast.y = mScene[mEngine.id].fGetChild("mcResult_" + mTaskN).y;

	cArray.fRemove(mCastList, mCast);

	if (v)
		mScore++;
	
	if (++mTaskN < mNTasks)	
		fResumeGame();
	else
		pState("Finale");
}	

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fLostLife()
{
	mcLife.fStop(mcLife.pCurrentFrame() + 1);
	if (mcLife.pCurrentFrame() < mcLife.pTotalFrames())
		fStartGame();
	else
		pState("Finale");
}

//----------------------------------------------------------------------------------------------------
//	
//----------------------------------------------------------------------------------------------------
function
fCheckCollision(
	vCast
)
{
fDbg("fCheckCollision()");
	for (var i = 0; i < mCastList.length; i++)
	{
		if ((mCastList[i].vName != vCast.vName) && (mCastList[i].vGridX == vCast.vGridX && mCastList[i].vGridY == vCast.vGridY))
//		if ((mCastList[i].vName != vCast.vName) && mCastList[i].visible && (mCastList[i].vGridX == vCast.vGridX && mCastList[i].vGridY == vCast.vGridY))
		{
			switch (vCast.vName)
			{
			case "User":
				switch (mCastList[i].vName)
				{
				case "Enemy":
				case "Hunter":
					fDoCollision(mUser);
					return;

				case "Obstacle":
					if (vCast.vSpeedChange != 1)
						return;
					
					mUser.vSpeedChange = 2;
					SYS.fStartTimer(mScene[mEngine.id], "SpeedChangeDone", 4000);
					return;

				case "Trap":
					mCast = mCastList[i];
					mUser.vSuspended = true;
					SYS.fStartTimer(mScene[mEngine.id], "TrapDone", 2000);
					return;

				case "Power":
					if (vCast.vSpeedChange != 1)
						return;

					mCast = mCastList[i];
					mCast.visible = false;
					cArray.fRemove(mCastList, mCast);
					mUser.vSpeedChange = 0.5;
					fDbg("Power::"+parseInt(mCast.suffix));
					SYS.fStartTimer(mScene[mEngine.id], "SpeedChangeDone", parseInt(mCast.suffix) * 1000);
					return;

				case "Task":
					fDoTask(mCastList[i]);
					pState("State_Task");
					return;
				}
				return;

			case "Enemy":
			case "Hunter":
				switch (mCastList[i].vName)
				{
				case "User":
					fDoCollision(mUser);
					break;
				}
				break;
			}
		}
	}
}

/*
//------------------------------------------------------------------------------------------------- 
//
//-------------------------------------------------------------------------------------------------
function
fEnableItems(v)
{
	mScene[mEngine.id].fGetChild("pbHelp").fEnable(v);

	for (i = 0; i < mTaskList.length; i++)
	{
		mTaskList[i].fEnable(v);
		mTaskList[i].fGetChild("hsItem").fEnable(v);
	}
}
*/
//------------------------------------------------------------------------------------------------- 
// State
//------------------------------------------------------------------------------------------------- 
function 
pState(
	vData
)
{
fDbg("pState == "+vData);
	mState = vData;
	
	switch(vData)
	{
	case "Help":		
		mIsHelpDone[mLevelN] = true;
		fPauseGame();
		mcMessages.fStop(mState + "_" + mLevelN);
		mVideoDom.style.visibility = "visible"; 
		mcMessages.visible = true;
		break;

	case "Finale":		
		//fEnableItems(false);
		mUser.visible = false;
		fDbg(mState + "_" + mScore);
		mcMessages.fStop(mState + "_" + mScore);
		mcMessages.visible = true;
		//SYS.fStartSound(mScene[mEngine.id], Signal_Done, vAudio, 1);
		break;
	}
}
	
//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Engine.fOnSignal = function(
	vTarget, 				//	original target for signal
	vSignal, 				//	signal received
	vData					//	extra data along with signal
)
{
	var i;
	var vPos;
	
	switch (vSignal)
	{
	case Signal_Resize:
		fResizeVideo();
		break;
	
	case "SpeedChangeDone":
		mUser.vSpeedChange = 1;
		break;
	
	case "TrapDone":
		mUser.vSuspended = false;
		mCast.visible = false;
		cArray.fRemove(mCastList, mCast);
		break;
	
	case "Signal_TaskDone":
		mcFeedback.visible = false;
		fDoTaskEnd(mIsCorrect);
		break;
	
	case "CollisionDone":
		mUser.fStop("Still");
		fLostLife();
		break;
	
	case Signal_Done:
		fDbg(vSignal + "::" + mState);
		switch (mState)
		{
		case "State_Task":
			if (vData != null)
			{
				mIsCorrect = vData;
				if (mCast.fGetChild("mcItem", false) != null)
					mCast.fGetChild("mcItem").visible = false;
				mcFeedback = mIsCorrect ? mCast.fGetChild("mcCorrect") : mCast.fGetChild("mcWrong");
				mcFeedback.fStop(1);
				mcFeedback.visible = true;
				SYS.fStartPlayer(mScene[mEngine.id], null, "Signal_TaskDone", mcFeedback, 1, -1, 1);
			}
			break;

		case "Help":
			mVideoDom.pause();
			mVideoDom.style.visibility = "hidden"; 
			mcMessages.visible = false;
			fResumeGame();
			break;

		case "Finale":
			mcMessages.visible = false;
			fEndGame(true);
			break;
		}
		break;

	case Signal_MouseUp:
		mKeyDownList = [false, false, false, false];
		break;

	case Signal_MouseDown:	
		switch (vTarget.prefix)
		{
		case "pbDirection":
			mUser.vMovable = true;
			mKeyDownList[parseInt(vTarget.suffix) - 37] = true;
			break;
		}
		break;

	case Signal_Click:
fDbg("Click::"+vTarget.name);
		switch (vTarget.name)
		{
		case "cbVideoHelp":
			if (vTarget.Selected)
				mVideoDom.play();
			else
				mVideoDom.pause();
			break;

		case "pbBack":
			fPauseGame();
			vTarget.fEnable(false);
			mScene[mEngine.id].fGetChild("pbHelp").fEnable(false);
			mScene[mEngine.id].fGetChild("mcExit").visible = true;
			break;

		case "pbYes":
			vTarget.parent.visible = false;
			mScene[mEngine.id].fGetChild("pbHelp").fEnable(true);
			mScene[mEngine.id].fGetChild("pbBack").fEnable(true);

			fEndGame(false);
			break;

		case "pbNo":
			vTarget.parent.visible = false;
			mScene[mEngine.id].fGetChild("pbHelp").fEnable(true);
			mScene[mEngine.id].fGetChild("pbBack").fEnable(true);
			
			fResumeGame();
			break;

		case "pbHelp":
			pState("Help");
			break;

		case "mcMessages":
			SYS.fEndSound(mScene[mEngine.id], Signal_Done);
			SYS.fDispatch(mScene[mEngine.id], Signal_Done);
			break;
		}
		break;
	}

	return false;
}

//----------------------------------------------------------------------------------------------------
return Engine;
})();
