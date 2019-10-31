//-------------------------------------------------------------------------------------------------

window.Introduction = (function() {

//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function Introduction() {}	

var mThisVars = {};

var mcLoadGame;

Introduction.fModuleLoaded = function(
	vId
)
{
	mThisVars.id = vId;
	cIntroduction();
}

function
cIntroduction(
) 
{
	mScene[mThisVars.id].fEnable(false);
	mScene[mThisVars.id].visible = false;

	mScene[mThisVars.id].fGetChild("mcHelp").visible = false;
	
	mcLoadGame = mScene[mThisVars.id].fGetChild("mcLoadGame");
	mcLoadGame.visible = false;
	mcLoadGame.fGetChild("tfCode").SetInput(true);

	fDbg("cIntroduction::");
	Introduction.fStart();
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Introduction.fStart = function()
{
	mScene[mThisVars.id].fEnable(true);
	mScene[mThisVars.id].visible = true;
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Introduction.fOnSignal = function(
	vTarget, 				//	original target for signal
	vSignal, 				//	signal received
	vData					//	extra data along with signal
)
{
	switch (vSignal)
	{
	case Signal_Click:
		switch (vTarget.name)
		{
		case "pbHelp":
			mScene[mThisVars.id].fGetChild("mcHelp").visible = true;
			break;
		case "mcHelp":
			vTarget.visible = false;
			break;

		case "tfCode":
			vTarget.text = "";
			break;

		case "pbLoadGame":
			vTarget.fEnable(false);
			mcLoadGame.visible = true;
			break;
			
		case "pbOk":
			var vTxt = mcLoadGame.fGetChild("tfCode").text;
			if (vTxt.length == 0)
			{
				mcLoadGame.fGetChild("tfCode").text = "Key in your code here.";
				break;
			}
			var decodeData = "";
			try 
			{
				decodeData = window.atob(vTxt.trim());
			}
			catch(err) {
				fDbg(err.message);
			}			
			if (decodeData != "")
			{
				var vArray = Array.from(decodeData);
				for (var i = 0; i < vArray.length; i++)
					if (isNaN(parseInt(vArray[i])))
						break;
				if (i >= vArray.length)
				{
					mScene[mThisVars.id].visible = false;
					mScene[mThisVars.id].fEnable(false);
					LevelMenu.fStart(vArray.splice(i - 5));
					break;
				}
			}
			mcLoadGame.fGetChild("tfCode").text = "Invalid Code.";
			break;

		case "pbNewGame":
			mScene[mThisVars.id].visible = false;
			mScene[mThisVars.id].fEnable(false);
			LevelMenu.fStart([0, 0, 0, 0, 0]);
			break;
		}

		if (createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid)
		{
			for (i = 0; i < SYS.pSoundList().length; i++)
			{
				if (SYS.pSoundList()[i].id != "Instructions")
					createjs.Sound.play(SYS.pSoundList()[i].id);
			}
			createjs.Sound.stop();
		}
		break;
	}
	
	return false;
}

//----------------------------------------------------------------------------------------------------
return Introduction;
})();
