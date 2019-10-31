//-------------------------------------------------------------------------------------------------
// Declare
// 
// Set the Project's requirement and declare the .js files to be loaded
//
//------------------------------------------------------------------------------------------------- 
//gobal var
//------------------------------------------------------------------------------------------------- 
var mStageSize;
var mFPS;

//------------------------------------------------------------------------------------------------- 
// PIXEL_RATIO for resizing purpose
//------------------------------------------------------------------------------------------------- 
var PIXEL_RATIO = (function () 
{
	var ctx = document.createElement("canvas").getContext("2d"),
		dpr = window.devicePixelRatio || 1,
		bsr = ctx.webkitBackingStorePixelRatio ||
			ctx.mozBackingStorePixelRatio ||
			ctx.msBackingStorePixelRatio ||
			ctx.oBackingStorePixelRatio ||
			ctx.backingStorePixelRatio || 1;	
	return dpr / bsr;
})();
	
window.MAIN = (function() {
	
function MAIN() {}	

//-------------------------------------------------------------------------------------------------
// Project's setting
//------------------------------------------------------------------------------------------------- 
mFPS = 12;
//mStageSize = new createjs.Point(800, 600);  
mStageSize = new createjs.Point(1024, 768);  
  
MAIN.fInit = function(
) 
{	
	SYS.fInit();
	
	// fAddDefinition for the js class to be loaded
	SYS.fAddDefinition("src/Engine.js");
	SYS.fAddDefinition("src/Questions.js");
	SYS.fAddDefinition("src/QuitPopup.js");
	SYS.fAddDefinition("src/LevelMenu.js");
	SYS.fAddDefinition("src/Introduction.js");
	SYS.fAddDefinition("src/Title.js");
}

MAIN.fModule = function(
)
{
	SYS.fStartModule("canvasjs/MazeGame_Canvas.js", "Engine", "Engine");
	SYS.fStartModule("canvasjs/Questions_Canvas.js", "Questions", "Questions");

	SYS.fStartModule("canvasjs/Introduction_Canvas.js", "Introduction", "Introduction");
	SYS.fStartModule("canvasjs/LevelMenu_Canvas.js", "LevelMenu", "LevelMenu");
	SYS.fStartModule("canvasjs/QuitPopup_Canvas.js", "QuitPopup", "QuitPopup");
	SYS.fStartModule("canvasjs/Title_Canvas.js", "Title", "Title");
}
	
//-------------------------------------------------------------------------------------------------
//	create custom Text border here, and when setting textfield to input, set 2nd var to true
//	example textfield.SetInput(true, true);
//-------------------------------------------------------------------------------------------------
MAIN.fTextBorderStyle = function(
)
{
	var vBorder; 
	vBorder = new createjs.Shape();
	vBorder.graphics.beginStroke("#000");
	vBorder.graphics.setStrokeStyle(1);
	
	return vBorder;
}
 
//----------------------------------------------------------------------------------------------------
return MAIN;
})();
 
 
 
 
 
 
 
 
 
 
