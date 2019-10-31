//-------------------------------------------------------------------------------------------------

window.QuitPopup = (function() {

//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function QuitPopup() {}	

var mThisVars = {};

QuitPopup.fModuleLoaded = function(
	vId
)
{
	mThisVars.id = vId;
	cQuitPopup();
}

function
cQuitPopup(
) 
{
	mScene[mThisVars.id].visible = false;
	mScene[mThisVars.id].fEnable(false);
	fDbg("cQuitPopup");
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
QuitPopup.fStart = function(vCode)
{
	fDbg("cQuitPopup.fStart");
	mScene[mThisVars.id].fEnable(true);
	mScene[mThisVars.id].visible = true;

	mScene[mThisVars.id].fGetChild("tfCode").text = vCode;
}

//------------------------------------------------------------------------------------------------- 
//handle signal. //todo. return true to bubble signal to parent, false (default) to stop.
//-------------------------------------------------------------------------------------------------
QuitPopup.fOnSignal = function(
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
		case "pbYes":
			self.parent.close();
			self.close();
			break;

		case "pbNo":
			mScene[mThisVars.id].visible = false;
			mScene[mThisVars.id].fEnable(false);
			LevelMenu.fStart();
			break;
		}
		break;
	}
	
	return false;
}

//----------------------------------------------------------------------------------------------------
return QuitPopup;
})();
