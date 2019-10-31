// set to mIsMenuLocked = false if to test all levels without completing previous level
var mIsMenuLocked = true;  

// for this maze, max 3 enemies, 3 obstacles, 5 tasks
var	mLevelData = 
[
	{"Enemy": 0, "Obstacle": 0, "Task": 5}, 	//level 1
	{"Enemy": 0, "Obstacle": 1, "Task": 5},		//level 2
	{"Enemy": 0, "Obstacle": 2, "Task": 5},		//level 3
	{"Enemy": 0, "Obstacle": 2, "Task": 5},		//level 4
	{"Enemy": 0, "Obstacle": 3, "Task": 5}		//level 5
];

var mIsHelpDone = [false, false, true, true, true];

// pos vary for diff type of maze, x = across/col, y = down/row
var mCapturePos =
{
	"Enemy": [{x: 7, y: 0}, {x: 9, y: 3}, {x: 11, y: 8}],
	"Obstacle": [{x: 0, y: 4}, {x: 3, y: 11}, {x: 15, y: 8}],
	"Task": [{x: 4, y: 3}, {x: 6, y: 7}, {x: 7, y: 11}, {x: 17, y: 0}, {x: 22, y: 9}]
};

//var mIsCaptureMode = true;  	// to capture video
var mIsCaptureMode = false;		// to play game 
