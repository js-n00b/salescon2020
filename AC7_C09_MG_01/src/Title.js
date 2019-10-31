//-------------------------------------------------------------------------------------------------

window.Title = (function() {

//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function Title() {}	

var mThisVars = {};

Title.fModuleLoaded = function(
	vId
)
{
	mThisVars.id = vId;
	cTitle();
}

function
cTitle(
) 
{
	fDbg("cTitle::");
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
Title.fOnSignal = function(
	vTarget, 				//	original target for signal
	vSignal, 				//	signal received
	vData					//	extra data along with signal
)
{
	switch (vSignal)
	{
	case Signal_Click:
		if (createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid)
		{
			for (i = 0; i < SYS.pSoundList().length; i++)
			{
				if (SYS.pSoundList()[i].id != "Instructions")
					createjs.Sound.play(SYS.pSoundList()[i].id);
			}
			createjs.Sound.stop();
		}
		mScene[mThisVars.id].visible = false;
		Introduction.fStart();
		break;
	}
	
	return false;
}

//----------------------------------------------------------------------------------------------------
return Title;
})();
