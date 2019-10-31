//-------------------------------------------------------------------------------------------------
//cTextButton
//-------------------------------------------------------------------------------------------------
function 
cTextButton(
	vTarget
) 
{		
	var vhitArea;
	var o, p, q;
	
	cSprite(vTarget);
	
	vTarget.cursor = "pointer";	
	vTarget.mouseChildren = false;
	
	vTarget.mDefaultColor = vTarget.color;
	vTarget.mOverColor = "#FF0000";
	vTarget.mDownColor = "#0000FF";
	
	vTarget.vOffset = 0;
	if(parseInt((vTarget.font).match(/\d+/g))>0)
		vTarget.vOffset = parseInt((vTarget.font).match(/\d+/g))/3;

/*	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox)
	{
		vTarget.y = vTarget.y + vTarget.vOffset + 2;
		vTarget.vOffset = -2;
	}	
*/	
	
	vhitArea = new createjs.Shape(); 			
	vhitArea.graphics.beginFill("#000");
	vhitArea.graphics.drawRect(0 - vTarget.lineWidth / 2, vTarget.vOffset, vTarget.lineWidth, vTarget.lineHeight + 2);				
	vTarget.hitArea = vhitArea;
	
	vTarget.Selected = false;
	vTarget.fSelect = function(vData)
	{		
		if (vData)
		{
			this.Selected = true;
			this.fEnable(false);
			
			for (var i = 0; i < this.parent.numChildren; i++)
				if (this.parent.getChildAt(i).prefix == this.prefix && this.parent.getChildAt(i) != this)
				{
					this.parent.getChildAt(i).fEnable(true);
					this.parent.getChildAt(i).Selected = false;
					//this.parent.getChildAt(i).color = this.mDefaultColor;
					this.parent.getChildAt(i).fRender("rollout");
				}
			this.fRender("click");	
		}
		else
		{
			this.Selected = false;
			this.fEnable(true);			
			this.fRender("rollout");
		}		
	};

	//--------------------------------------		
	vTarget.fSetColor = function(vData){
		this.mDefaultColor = vData;
	};

	//--------------------------------------		
	vTarget.fSetOverColor = function(vData){
		this.mOverColor = vData;
	};

	//--------------------------------------		
	vTarget.fSetDownColor = function(vData){
		this.mDownColor = vData;
	};

	//--------------------------------------
	vTarget.fRender = function(vData) 
	{ 	
		if (!this.Enabled)
			return;

		switch (vData)
		{
		case "rollover": 
			this.color = this.mOverColor;
			break;
		case "mousedown": 
			this.color = this.mDownColor;
			break;
		case "rollout": 
			this.color = this.mDefaultColor;
			break;
		default:
			break;
		}
	};
}

	
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
