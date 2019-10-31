//-------------------------------------------------------------------------------------------------
//	DrawPad: each DrawPad will Create a new canvas on the stage which shows up on Element inspect
//	To create a drawpad, call "new DrawPad.fInit()" which will returns a DrawPad object, and you
//	can access the function directly through it.
//	Note:
// 	DrawPad will not block the main canvas objects, so do disable the main canvas if required.
//	As DrawPad is a new canvas Element it will only be of the same size as stage, no custom size
//	and the DrawPad is of the highest Element level each time it's create, not index level
//-------------------------------------------------------------------------------------------------
window.DrawPad = (function() {
	
function DrawPad() {}

//-------------------------------------------------------------------------------------------------
// var o = new DrawPad.fInit() , returns DrawPad object
//-------------------------------------------------------------------------------------------------
DrawPad.fInit = function()
{
	var o;
	var p;
	var ctx;
	var mMemoryCanvas;
	var mMemoryctx;
	
	o = {};
	
	o.mMode = "draw";
	o.mToDraw = false;
	o.mPenSize = 1;
	o.strokeStyle = "black";
	
	//Create display DrawPad
	o.mDrawPadCanvas = document.createElement('canvas');	
	o.mDrawPadCanvas.width = stage.canvas.width;
	o.mDrawPadCanvas.height = stage.canvas.height;
	
	o.mDrawPadCanvas.style.left =  canvas.style.left;
	o.mDrawPadCanvas.style.position = "absolute";		
	o.mDrawPadCanvas.style.visibility='visible'
	
	document.body.appendChild(o.mDrawPadCanvas);	
	
	ctx = o.mDrawPadCanvas.getContext("2d");	
		
	//create memory DrawPad, drawing is done here
	mMemoryCanvas = document.createElement('canvas');
	mMemoryCanvas.width = stage.canvas.width;
	mMemoryCanvas.height = stage.canvas.height;
	
	mMemoryctx = mMemoryCanvas.getContext("2d");
	
	o.lastX = null;
	o.lastY = null;	
	
	//------------------------------------------------
	// event for drawing
	//------------------------------------------------
	o.DrawPadTick = function(event)
	{			
		var p;
		var q;	
		var imgData;
		
		p = mMemoryCanvas.width / o.mDrawPadCanvas.width;
		q = mMemoryCanvas.height / o.mDrawPadCanvas.height;	

		if(o.mToDraw)
			if (((o.lastX * p) != (SYS.pMousePos().x * p)) || ((o.lastY * q) != (SYS.pMousePos().y * q)))
			{			
				mMemoryctx.beginPath();
				if(o.mMode == "draw")
				{
					mMemoryctx.globalCompositeOperation = "source-over";		//for draw
					mMemoryctx.lineWidth = o.mPenSize;	
				}
				else
				{
					mMemoryctx.globalCompositeOperation = "destination-out";	//for erase
					mMemoryctx.lineWidth = 10;	
				}				
				mMemoryctx.strokeStyle = o.strokeStyle;	
				mMemoryctx.moveTo(o.lastX * p, o.lastY * q);
				mMemoryctx.lineTo(SYS.pMousePos().x * p, SYS.pMousePos().y * q);
				mMemoryctx.stroke();   		

				if(o.lastX != SYS.pMousePos().x)
					o.lastX = SYS.pMousePos().x;
				if(o.lastY != SYS.pMousePos().y)	
					o.lastY = SYS.pMousePos().y;
				
				ctx.clearRect(0, 0, o.mDrawPadCanvas.width, o.mDrawPadCanvas.height);	
				ctx.drawImage(mMemoryCanvas, 0, 0, mMemoryCanvas.width, mMemoryCanvas.height, 0, 0, o.mDrawPadCanvas.width, o.mDrawPadCanvas.height);	
		}			
	}  	
	
	//------------------------------------------------
	// to start drawing, use on MouseDown
	//------------------------------------------------
	o.fStart = function(
	)
	{
		if ((o.lastX == null) && (o.lastY == null))
		{
			o.lastX = SYS.pMousePos().x;
			o.lastY = SYS.pMousePos().y;
			createjs.Ticker.addEventListener("tick", o.DrawPadTick);
		}		
		o.mToDraw = true;   
	}
	
	o.fResize = function(
	)
	{				
		o.mDrawPadCanvas.width = stage.canvas.width;
		o.mDrawPadCanvas.height = stage.canvas.height;
		//ctx was auto cleared due to changing of width/height		
		
		o.mDrawPadCanvas.style.left = canvas.style.left;
		
		ctx.drawImage(mMemoryCanvas, 0, 0, mMemoryCanvas.width, mMemoryCanvas.height, 0, 0, o.mDrawPadCanvas.width, o.mDrawPadCanvas.height);
	}
	
	//------------------------------------------------
	// to pause drawing, use on MouseUp
	//------------------------------------------------
	o.fPause = function(
	)
	{
		createjs.Ticker.removeEventListener("tick", o.DrawPadTick); 
		o.lastX = null;
		o.lastY = null;
		o.mToDraw = false; 
	}
	
	//------------------------------------------------
	// Set visible of drawing
	//------------------------------------------------
	o.pVisible = function(
		vBool
	)
	{
		if ((vBool == undefined) || (vBool == null))
		{
			if(o.mDrawPadCanvas.style.visibility == "visible")
				return true;
			else
				return false;
		}
		else
		{		
			if(vBool)
				o.mDrawPadCanvas.style.visibility='visible';
			else
				o.mDrawPadCanvas.style.visibility='hidden';
		}
	}
	
	//------------------------------------------------
	// destory the drawpad
	// returns imagedata, able to store and display 
	//	later 
	//------------------------------------------------
	o.fDtor = function(			
	)
	{
		createjs.Ticker.removeEventListener("tick", o.DrawPadTick); 
		o.mDrawPadCanvas.parentNode.removeChild(o.mDrawPadCanvas);
	}
	
	//------------------------------------------------
	// returns imagedata of canvas 
	//------------------------------------------------
	o.fGetImageData = function(			
	)
	{
		var vimgData;
		vimgData = ctx.getImageData(0, 0, o.mDrawPadCanvas.width, o.mDrawPadCanvas.height);
		return vimgData;
	}
	
	//------------------------------------------------
	// to change the mode, draw / erase
	//------------------------------------------------
	o.fMode = function(
		vMode
	)
	{
		if((vMode == null) || (vMode == undefined))
			return o.mMode;
		else
			o.mMode = vMode;
	}	
	
	//------------------------------------------------
	// to change the line size, int default 1
	//------------------------------------------------
	o.fDrawSize = function(
		vSize
	)
	{
		if((vSize == null) || (vSize == undefined))
			return o.mPenSize;
		else
			o.mPenSize = vSize;
	}	
	
	//------------------------------------------------
	// to change the color, sting/hex default "black"
	//------------------------------------------------
	o.fDrawColor = function(
		vColor
	)
	{
		if((vColor == null) || (vColor == undefined))
			return o.strokeStyle;
		else
			o.strokeStyle = vColor;
	}
	
	//------------------------------------------------
	// to clear drawing, default whole canvas
	//------------------------------------------------
	o.fClear = function(
		vX,
		vY,
		vW,
		vH
	)
	{
		var mClearRect = {};		
		
		if((vX == undefined) || (vX == null))
			mClearRect.x = 0;
		else
			mClearRect.x = vX;
			
		if((vY == undefined) || (vY == null))
			mClearRect.y = 0;
		else
			mClearRect.y = vY;	
			
		if((vW == undefined) || (vW == null))
			mClearRect.width = mMemoryCanvas.width;
		else
			mClearRect.width = vW;	
			
		if((vH == undefined) || (vH == null))
			mClearRect.height = mMemoryCanvas.height;
		else
			mClearRect.height = vH;				
		
		mMemoryctx.clearRect(mClearRect.x, mClearRect.y, mClearRect.width, mClearRect.height);		
		o.fResize();
	}
	
	o.fResize();
	
	return o;
}

//----------------------------------------------------------------------------------------------------
return DrawPad;
})();

	
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
