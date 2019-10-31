//-------------------------------------------------------------------------------------------------

window.LevelMenu = (function() {

//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function LevelMenu() {}	

var mThisVars = {};
var mGameLevels = [];

LevelMenu.fModuleLoaded = function(
	vId
)
{
	mThisVars.id = vId;
	cLevelMenu();
}

function
cLevelMenu(
) 
{
	mScene[mThisVars.id].visible = false;
	mScene[mThisVars.id].fEnable(false);
	
	mScene[mThisVars.id].fGetChild("mcHelp").visible = false;
	
	fDbg("cLevelMenu");
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
LevelMenu.fStart = function(v)
{
	var i;
	
	if (v != undefined)
		mGameLevels = v;
		
	for (i = 0; i < mGameLevels.length; i++)
		mGameLevels[i] = parseInt(mGameLevels[i]);
	
	fDbg("LevelMenu::"+ mGameLevels);

	mScene[mThisVars.id].fEnable(true);
	mScene[mThisVars.id].visible = true;

	if (mGameLevels[0] >= 1)
		mScene[mThisVars.id].fGetChild("mcHelp").fStop(2);

	mScene[mThisVars.id].fGetChild("pbLevel_" + 0).fEnable(true);	
	for (i = 1; i < v.length; i++)
	{
		if (mIsMenuLocked)
			mScene[mThisVars.id].fGetChild("pbLevel_" + i).fEnable(mGameLevels[i - 1] >= 1);	
		else 
			mScene[mThisVars.id].fGetChild("pbLevel_" + i).fEnable(true);	
	}
	var vList = mScene[mThisVars.id].fGetChildList("mcScore_");
	for (i = 0; i < vList.length; i++)
		mScene[mThisVars.id].fGetChild("mcScore_" + i).fStop(mGameLevels[i] + 1);
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
LevelMenu.fOnSignal = function(
	vTarget, 				//	original target for signal
	vSignal, 				//	signal received
	vData					//	extra data along with signal
)
{
	switch (vSignal)
	{
	case Signal_Click:
		switch (vTarget.prefix)
		{
		case "pbLevel":
			mScene[mThisVars.id].visible = false;
			mScene[mThisVars.id].fEnable(false);
			Engine.fStart(parseInt(vTarget.suffix), mGameLevels);
			break;
		}

		switch (vTarget.name)
		{
		case "pbHelp":
			mScene[mThisVars.id].fGetChild("mcHelp").visible = true;
			break;
		case "mcHelp":
			vTarget.visible = false;
			break;

		case "pbQuit":
			mScene[mThisVars.id].fEnable(false);
			var vDate = new Date();
			fDbg(window.btoa(vDate.getMilliseconds().toString() + mGameLevels.join("")));
			QuitPopup.fStart(window.btoa(vDate.getMilliseconds().toString() + mGameLevels.join("")));
			break;
		}
		break;
	}
	
	return false;
}

//----------------------------------------------------------------------------------------------------
return LevelMenu;
})();
