(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.mcObstacle = function() {
	this.initialize();

	// Item
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB41E","#B60000","#7E0000"],[0.008,0.62,1],4.3,-7.4,0,4.3,-7.4,15.3).s().p("AgmApQgPgPgLgRIAAgCQAAgPANgkQAJgYAKgUIgBARQAABHA3AzIAOANIAHAGIAVAPQgKACgLABQgsgLglgkg");
	this.shape.setTransform(-8.8,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFDB09","#FFA8B1"],[0.008,1],16.5,-9.5,0,16.5,-9.5,16.7).s().p("AADAFQgSgBgSgEQALAAAKgCIAFgCIAVAEIAUAEIgXABIgIAAg");
	this.shape_1.setTransform(-1,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEC19","#FFBBB8"],[0.008,1],13.6,-8.6,0,13.6,-8.6,16.7).s().p("AgNAKIgXgHQARgEAQgMIADACQAUAMARAFQgQAGgRABIgRgDg");
	this.shape_2.setTransform(1.9,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFEC19","#FFBBB8"],[0.008,1],-8.4,-6.6,0,-8.4,-6.6,17.5).s().p("AgkgJQAkgpBBgOQABASAFAQQhQAXgnApQgMANgKASQAFgrAdgfg");
	this.shape_3.setTransform(-5,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFF5B","#FFE7B4"],[0.008,1],2.7,3.4,0,2.7,3.4,16.7).s().p("AgmBZQgDgGgBgFQABgGAEgFQAEgCAGAAQALAAAAAMQABAKgHAGQgFADgEAAQgEAAgDgHgAgQAtIALgxQAJguAAgSIgBgNQAMgBAJgGIAMgHIABACQAFARABAWQgBAkgUAkQgVAjgMAAQgFAAAAgIg");
	this.shape_4.setTransform(12.8,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFF00","#FFCDBD"],[0.008,1],5.6,2.3,0,5.6,2.3,16.7).s().p("AhQBgIgDgCQAZgTAWgjQAohAAAg2IgCgPIAVABIAIgBIABAOQAAARgKAvIgLAwQAAAIAEAAQAPAAAUgjQAVgjAAgkQAAgXgFgQIgBgDIALgHQAIAaAAAfQAABJg1A2QgfAhgpAMQgRgFgWgOgAgIA3QgFAGAAAFQAAAGADAGQAEAHAEAAQACAAAFgEQAGgFAAgLQAAgLgLAAQgEAAgEABg");
	this.shape_5.setTransform(9.9,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#87FA9C","#1DB5D1","#0B5C9F"],[0.008,0.459,1],-2.3,-7.7,0,-2.3,-7.7,9.8).s().p("AgNACQgFgKgDgEIAGgCQAHgCAIAAQAOAAAIATIgMAIQgJAFgKABIgEgPg");
	this.shape_6.setTransform(14.2,-5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#87E58E","#00A3E0","#002380"],[0.008,0.459,1],2,-5.7,0,2,-5.7,9.8).s().p("AADAlQghgFgWgVQgRgNgGgVQAngOAuAAQAYAAAPAEIABAAQARAXAJAaIgKAHQgJgVgQAAQgIAAgHACIgGACQADAEAFAMIAEAPIgJABIgUgBg");
	this.shape_7.setTransform(9.9,-7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFD91E","#E50000","#990000"],[0.008,0.62,1],-6.2,-1.4,0,-6.2,-1.4,15.3).s().p("AgwBXIgHgJQgGgGgGgIQgJgTgDgGQgHgcAAgUQAAhIBHgiIAUgJQAGAVARAPQAWAUAjAGIACAPQAAA0gqBCQgWAjgYATQgkgWgLgQg");
	this.shape_8.setTransform(1.7,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FBBD1A","#D90000","#800000"],[0.008,0.62,1],0.5,-2.3,0,0.5,-2.3,15.3).s().p("AAGB5IgGgGIgOgNQg5g1ABhFIAAgRQAKgSAMgNQAngrBQgXIABABIgWAJQhFAiAABIQAAAUAHAcQADAGAJASQAEAJAGAGIAHAJQALAQAkAWQgPALgRAHIgFABIgVgOg");
	this.shape_9.setTransform(-5,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFDB09","#FFA8B1"],[0.008,1],-5.8,-9.1,0,-5.8,-9.1,17.5).s().p("AhnAqQAAhKA1g1QA0g2BMAAQANAAANACQgDADgDAJQgHAOAAATIAAADQhDAPgiAoQgdAhgFAqQgKATgIAYQgNAkAAASIAAACQgcgsAAg2g");
	this.shape_10.setTransform(-7.6,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#72A383","#006BE5","#000020"],[0.004,0.459,1],5,2.6,0,5,2.6,9.8).s().p("AgzAUQAAgSAGgNQAEgJADgDQAxAHApAiIgSgDQguAAgnAIIAAgDg");
	this.shape_11.setTransform(6.8,-15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#72BB87","#0080DE","#000279"],[0.004,0.459,1],3.6,-1.1,0,3.6,-1.1,9.8).s().p("Ag8AUQgFgPAAgRQAmgIAvAAIARACIALAKQAKAIAIALIAAAAQgQgEgYAAQguAAgnAOIgBgBg");
	this.shape_12.setTransform(8.2,-11.9);

	// bg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.004)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.mcHelp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5FAA0").ss(3,1,1).p("ANCxfI6DAAQjIAAAADIIAAcvQAADIDIAAIaDAAQDIAAAAjIIAA8vQAAjIjIAAg");
	this.shape.setTransform(171,254);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(515.4,385.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.749)").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape_2.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Girleye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAADQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAAAIAAgBQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQADAAAAADIAAACg");
	this.shape.setTransform(7.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAQQgEgGAAgIQAAgIAPgOIAAgBQgUAFgIAMIgBAAQABgFAJgHQAJgFALgDQAQACAJALQAGAHAAAIQAAAGgHAHQgIAIgLAAQgKAAgHgJgAgJgDIAAACQAAABAAAAQAAAAAAAAQAAAAABABQAAAAABAAIAFAAIAAgBQAAgEgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_1.setTransform(8,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADAAQAEAAAAAEQAAADgEAAQgDAAAAgEg");
	this.shape_2.setTransform(-9.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAQQgEgHAAgGQAAgJAPgOIAAgBQgUAFgIAMIgBAAQABgFAJgHQAJgFALgDQAQABAJAMQAGAIAAAHQAAAGgHAHQgIAIgLAAQgKAAgHgJgAgIAAQAAAEAEAAQAEAAAAgEQAAgEgEABIgBgBQgDAAAAAEg");
	this.shape_3.setTransform(-8.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhhANIgJgDQgGgCgBgDIABgCIABAAIAAAAIADABIADABIARACIAFAAIADAAQAPgCAHgFIACgFQAAAAABgBQAAAAAAAAQABAAABAAQAAABABAAQAEAEAAACQAAAHgbAFIgGAAgABSAHIgFgBQgcgEAAgGQAAgDAEgEQABgBAAAAQABAAABAAQAAAAAAAAQABAAAAABIACAEQAIAHAOAAIADABIAFAAQAHAAAKgBIACAAIAFgCIgBABIABAAIABABQAAABgHADIgKADg");
	this.shape_4.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},16).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-2.9,23.2,6.1);


(lib.Girl_hand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],0,0,0,0,0,3).s().p("AgGATIgDgDIgGgGIgFgEIAXgWQAXgNgGAWQgNAQgJANIgEgDg");
	this.shape.setTransform(-1.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-1.4,3.4,0,-1.4,3.4,3.7).s().p("AACgIIAGAFIADADIgFAEIgDgBQgEAAgFADIgEADQAGgKAGgHg");
	this.shape_1.setTransform(-3.1,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,3.7).s().p("AgUASQAAgGAFgHQAEgEAGgCQAFgMADgKIAEgDQAEgDAHAAIADABIgEAFQgIANgGAMQAEADAAAEQAAAVgSgBQgJAAAAgLg");
	this.shape_2.setTransform(-4.6,6.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-0.7,7.7,10.7);


(lib.Girl_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],-0.4,-2.6,0,-0.4,-2.6,5.1).s().p("Ag0A4IALhvIAIAAIABAMIAEAHIABABQAEAFAHAAQAIAAAGgEQAEgDABgGIAAgBIABgLIAIAAIApBvg");
	this.shape.setTransform(-1,-4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.2,0.9,0,0.2,0.9,2).s().p("AgRACIgBgKIAIAAQAEABAGgBIATAAIgBAJIAAABIgEAAIgGAAQgIABgHAEIgGACIgEgHg");
	this.shape_1.setTransform(-2.5,-9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,2).s().p("AgOABIgBgBIAGgBQAJgDAGgBIAGAAIAEAAQgBAFgGACQgGAEgGAAQgHAAgEgFg");
	this.shape_2.setTransform(-2.3,-8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.6).s().p("AgXASQgDgFAAgGQABgGAEgFQAFgHAIgFIAIgFIABAAQAEgBAEABIABAAIABABIACAAQAJADAEAGQABADgBADIgBAEIgCACIgEAEIgJAHIgIAGQgFAEgFAAIgIAAIgBAAQgEAAgCgEg");
	this.shape_3.setTransform(-4.1,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,1.8).s().p("AgGgGIAAgCIAHABIAAACQAAAEACADIAEAHIgBAAQgEgBgCABIgBAAQgFgJAAgGg");
	this.shape_4.setTransform(-3.8,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.2,0.9,0,0.2,0.9,1.8).s().p("AgEADQAAgDACgCIAHAAIgCAGg");
	this.shape_5.setTransform(-3.9,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,2.7).s().p("AgEgUIAHABIACAlIgFAAIgEADg");
	this.shape_6.setTransform(0.2,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.7).s().p("AgCAQIgMgDIgFgBIgEgCIgDgCQgCgCAAgDQAAgFAGgGIACgCIABgBIABgBIAGgCIAFgBIAHAAQAHAAAIADQAIAEADAEQADAEAAAEQAAAFgEABIgHAEQgFACgHAAIgIAAg");
	this.shape_7.setTransform(1.6,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.1,2,0,0.1,2,2.7).s().p("AgDADIAAgFIAHAAIAAAFg");
	this.shape_8.setTransform(0.1,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],0.6,-3.2,0,0.6,-3.2,4.9).s().p("AAUA/IgIAAIgZgCIgEAAIgIgBQgRgCgJgEQAEgMAVhmIAAgCIAPAAQAFABAGgBIAbAAIAFAlIAJAhQALAnAAAJQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgDABIgIADIgJABIgJgBg");
	this.shape_9.setTransform(-1.6,-3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.7).s().p("AgRAOIgHgEQgEgBAAgFQAAgEADgEQADgEAIgEQAIgDAGAAIAIAAIAFABIAGACIABABIABABIACACQAGAGAAAFQAAADgCACIgDACIgEACIgFABIgMADIgIAAQgHAAgFgCg");
	this.shape_10.setTransform(-4.9,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,2.7).s().p("AAAASIgEAAIACglIAHgBIAAApIgFgDg");
	this.shape_11.setTransform(-3.5,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.1,2,0,-0.1,2,2.7).s().p("AgCgCIAGAAIAAAFIgHAAg");
	this.shape_12.setTransform(-3.4,2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.6).s().p("AARAWIgIAAQgFAAgFgEIgIgGIgJgHIgEgEIgCgCIgBgEQgBgDABgDQAEgGAJgDIACAAIABgBIABAAQAEgBAEABIAAABQADABAGADQAIAFAFAHQAEAFABAGQAAAGgDAFQgCAEgEAAIgBAAg");
	this.shape_13.setTransform(0.8,7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,1.8).s().p("AABAJQgCgBgEABIgBAAIADgHQADgDAAgFIAAgBIAHgBIAAACQAAAGgFAJIgBAAg");
	this.shape_14.setTransform(0.5,3.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.1,0.9,0,-0.1,0.9,1.8).s().p("AgEgBIAHgBQACACAAADIgHABQAAgEgCgBg");
	this.shape_15.setTransform(0.6,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],-0.6,-3.2,0,-0.6,-3.2,4.9).s().p("AglA/IgIgDIgDgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgJALgnIAJghIAFglIAbAAQAGABAFgBIAPAAIAAACQAVBmAEAMQgJAEgRACIgJABIgDAAIgZACIgIAAIgJABIgJgBg");
	this.shape_16.setTransform(-1.7,-3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0.8,-1.2,0,0.8,-1.2,4.8).s().p("AgIAQIgJgBIAAAAIgCAAIgKgDIgCgBQgKgEAAgHQAAAAAEgFIABgBIABgCIAAAAIABAAIABgBIABgBIAHgCIACgBIAFgBIAIgBIADAAQAHgBAFACIAJADIAGABQAWAIAAAMIAAABIgNADIgCAAIgSACIgCABIgPgBg");
	this.shape_17.setTransform(1.3,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,-0.2,0,0,-0.2,2.1).s().p("AgZgEQAAgIAOAAIANABIAAATIgEACIgCABIgHACQgOgMAAgFgAAMAHIAAgLIAPANQgIgCgHAAg");
	this.shape_18.setTransform(-0.8,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],1.8,-2.2,0,1.8,-2.2,5.1).s().p("AABBAQgrAAAAgKIAKguIAHgoIAEgbIABgBIAEgEIALAAQABAFAEAFIAGAGIACABQAJAFAHACIAAACIAAAAIACAHIAEAXQANAsAAAUQAAAEgQADIgKABIgHAAIgEAAIgDABIgCgBg");
	this.shape_19.setTransform(-0.7,-3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0,1.6,0,0,1.6,2.6).s().p("AgDADIAAgEIADAAIAEAAIAAAAIAAADIgEABIgDAAg");
	this.shape_20.setTransform(-0.1,3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.2,0.8,0,0.2,0.8,1.9).s().p("AgDAAIAAgBIAFAAIABABIABAAIgFACIgCgCg");
	this.shape_21.setTransform(0.8,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,1.9).s().p("AgFABQADgCABgDIgCgFIAFgCQAEAHAAADQAAABgGAHIgFAFg");
	this.shape_22.setTransform(1,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.5,0,0,-0.5,2.6).s().p("AgDgBIAAgQIADAAIAEgBIAAALIABAKIAAABIAAANIgDAAIgGABg");
	this.shape_23.setTransform(-0.1,5.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#EDD9C2","#00FFCC","#0099CC"],[0,0.455,1],1.6,1.3,0,1.6,1.3,5.1).s().p("AAYACIABAGIADARIgEgXgAgYgWIABgCIgEAag");
	this.shape_24.setTransform(-0.5,-7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],1.2,0.5,0,1.2,0.5,1.8).s().p("AADAHIgGgHQgEgCgCgFIAQAAIACACIABAAQgDABgCACQgDACAAABQAAADADAEIgCgBg");
	this.shape_25.setTransform(-0.3,-9.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,1.8).s().p("AgFADQgDgDAAgBQAAgDADgDQACgCADAAQADAHAFAKIAAACQgGgBgHgGg");
	this.shape_26.setTransform(0.9,-9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],-1,-1.4,0,-1,-1.4,4.4).s().p("AgcAdIgDgIIgBgBIAAgCIAAAAIAAgBIAAgBQABgEACgFIABgBIADgFIAEgEIACgCQAHgJALgHIADgDQAUgLALAJQgBAFgFAHIgBACIgKANIgCABIgLANIgEAGIgBAAIgBABIgJAGIgCABQgFACgDAAQgEAAgCgCg");
	this.shape_27.setTransform(7.5,5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0.8,-1.1,0,0.8,-1.1,5.2).s().p("AAVAYIgCgBIgQgGIgCgBIgNgJIgHgEIgCgBIgIgGIgBgBQgHgJADgFQABgDAGgCIABgBIACgBIABAAIAAAAIABAAIAJABIACAAIAFACIAGADIADABQAKAGAIAIIAEAEQAQAPgHAMIAAABIgNgDg");
	this.shape_28.setTransform(-5.7,6.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],1.6,-2.1,0,1.6,-2.1,5.1).s().p("AgWA9IgMgCQgPgCAAgDIAGgNIADgRIAEgKIADgNIAJg6IABgCIAEgDIALAAQACAFADAEIAHAGIABABQAIAFAHACIABAAIAAACIAAAAIABAEIABADIADALIAGAVQAIAlAJAMIgSAHIgBgBIgCACIgCAAIgFACQgLADgJAAIgXgDg");
	this.shape_29.setTransform(-0.4,-3.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],1.3,1.6,0,1.3,1.6,2.7).s().p("AgCAAIADAAIACAAIgEABg");
	this.shape_30.setTransform(2.1,2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.8,0.7,0,-0.8,0.7,2.4).s().p("AAAACIgHgCIAEgDIALACIgIAFIAAgCg");
	this.shape_31.setTransform(-3.5,2.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.1,-0.1,0,-0.1,-0.1,2.7).s().p("AgQgOIAFgDIADgCIAAABIAZAdIgCACIgEAHg");
	this.shape_32.setTransform(3.6,3.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0.5,-0.3,0,0.5,-0.3,2.4).s().p("AgHAIIgGgCIASgPIAHADIACABIgRAPIgEgCg");
	this.shape_33.setTransform(-4.9,3.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,1.8).s().p("AAHAKQgGgCgGgFQgDgDAAgBQAAgDADgDQACgCADAAQADAHAFAKIAAACIgBAAg");
	this.shape_34.setTransform(0.9,-9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,5.2).s().p("AgkAWQgBgDAAgGIAAgCIAAgBIAAAAIAAgBIABgBQABgDADgDIABgBIABgBIABAAIAEgEIABgCIADgCQAKgIAMgEIAGgBQAWgHAJALIAAAAIgIAKIgCACIgNAKIgCABIgNAJIgHAEIAAAAIgBABIgLAEIgCAAIgGABQgGAAgDgDg");
	this.shape_35.setTransform(6,7.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,4.8).s().p("AAZAbIgFgBIgFgCIgFgEQgJgDgEgFIgFgEQgMgIgLgNIgBgDQgBgEAEgEQADgEAPAEIAIACQALAEALAJIAFAFIACACIAFAFIAAACIABAAIAAACIABADQACAKgEAFQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgBAAg");
	this.shape_36.setTransform(-8.8,6.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],-0.2,-2.9,0,-0.2,-2.9,5).s().p("AgWBAIgJgBQgMgCgJgFQAIgUADgPIALhUIAHAAIAAAMQACAEACADIABABQAEAFAHAAQAHAAAEgEQAHgDABgGIAAgBIACgLIAIAAIAFAeIABAHQAEAWAGAPQAEAOAMAVIgNAHIgFACIgFABIgEACIgBAAIAAABIgHACIgBAAQgOAEgRAAIgJgBg");
	this.shape_37.setTransform(-1.5,-3.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.6,1.9,0,-0.6,1.9,2.9).s().p("AgDAAIABAAIAGAAIgBABIgGgBg");
	this.shape_38.setTransform(-4.4,2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.9,2,0,0.9,2,3.1).s().p("AgFgCIABAAIAFgDIAFAIIgHACg");
	this.shape_39.setTransform(1,2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0.1,-0.3,0,0.1,-0.3,2.9).s().p("AgEAVIgFgHIgBgCIANghIAIABIgOAqIgBgBg");
	this.shape_40.setTransform(-5.2,5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.2,-0.5,0,-0.2,-0.5,3.1).s().p("AAEARIgQgjIAJgCIAQAgIgCABIgDAEIgCABIgBACIAAABg");
	this.shape_41.setTransform(2.1,5.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.1,0.9,0,0.1,0.9,2.2).s().p("AgSACIAAgKIAIAAQAFABAFgBIATAAIgCAJIAAABIgEAAIgGAAQgHABgIAEIgGACQgDgDgBgEg");
	this.shape_42.setTransform(-2,-9.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,2.2).s().p("AgPABIAAgBIAGgBQAJgDAGgBIAGAAIAEAAQgBAFgHACQgGAEgFAAQgIAAgEgFg");
	this.shape_43.setTransform(-1.9,-8.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#0000FF","#000000"],[0,1],-3.5,-2.8,0,-3.5,-2.8,5.4).s().p("AACAAIAAAAIgDABIADgBg");
	this.shape_44.setTransform(2.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_34},{t:this.shape_25},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-10.3,10.7,11.4);


(lib.SymbolHelp = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrDiQgPgPgCgVQACgWAPgOQANgPAWgBQAUACAOANQAPAOABAWQgBAWgPAPQgOAOgTABQgWgBgOgOgAgqBXQgNgMAAgTIgBhAQACgTAQgGQAPgGAWgEQALgDAKgHQANgGAIgMQAGgKABgUQAAgNgIgLQgIgMgMgHQgMgFgMAAQgVAAgMAKQgPAKgKAMQgKANgNALQgJAIgPABQgTAAgLgMQgKgOgBgWQABgaAOgUQAOgVAXgOQAVgLAZgJQAZgGAXgBQAqABAiARQAkARAVAeQAVAgABArQgBA3gfAgQgeAgg0AMIAAAYQAAATgMANQgOAMgSAAIgCAAQgVAAgMgMg");
	this.shape.setTransform(40,40.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.9,16.3,30.2,48.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5D4BC").s().p("AicEoIAApPQAYgKAXAXID5D6QAhAgghAgIj5D7QgQAQgQAAQgHAAgIgDg");
	this.shape.setTransform(15.7,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC800").s().p("AicEoIAApPQAYgKAXAXID5D6QAhAgghAgIj5D7QgQAQgQAAQgHAAgIgDg");
	this.shape_1.setTransform(15.7,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.4,60);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#673895").s().rr(-69.05,-69.05,138.1,138.1,18);
	this.shape.setTransform(58.7,58.7,0.85,0.85);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117.4,117.4);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C5CB").s().p("AgXSHIhDgDQhcgHhWgTIgPgEQhHgRhEgbIgBAAIgNgFIgMgFIgagLIgLgFIgLgGIgHgDQgqgUgogYQgYgPgYgQQgngagmgeIgCgCIgvgnIgvgrIAAAAIgGgHIgHgGIgCgCIgQgRIgGgGIgKgKIAAAAQgXgZgUgYIgLgOIgVgaIgHgKIgCgCQgUgbgSgaIgJgOIgRgcIgHgNIgVglIgBAAIgHgPIgQghQgRgjgOglIAAAAIgEgMIgBgDIgBgCIgFgOIgJgcQgMgjgIgjIgHgdIgCgNIAAgCQgHgcgDgdIgBAAIgBgKIgBgFIgEgeIgBgMIAAgDIgFg6IgBgTIgBgXIAAgDIAAgPIAAgKIABgzIAAgKIACgeIACgPQACgeAEgeIAAgCIACgNIABgCIADgaIABgCIACgPIABAAQAGgfAHgeIAAAAIACgLIAGgTIAFgTIACgHIAAgBIAJgcIANgjIAJgZQAPgmASglIAQggIACgDIAHgMIACgEQAVglAYglIAEgGIAZgiIAMgSIAAAAQAegnAiglIgBgBIAPgPIAeggIAFgFIAAAAIAGgGIAIgIQBCg/BGgzIAMgIIAkgYIAhgVIACgCIAFgCIAKgHIAqgWIANgHQDWhsD9gJIAPAAIAigBQAsAAAsADQA1AEAzAIQBOAMBJAWIAfAKIAEABQBVAdBRArIAMAGQBPAsBLA7IAWASIADACIAjAfIADACIACADIACACIAHAFIAAABIAjAiIAiAjIAHAIIAHAHIAAAAIAGAHIASAVIADADQAdAjAbAlIAUAcIAKAPQAbApAWArIAPAdIAHANIAAABQANAbALAcIACAEIAEAKIAHASIAEALIAEALIABADIAQAxIACAIIAKAmIADAPIAMA2IABAHIABACIABAHIAAAAIAGAlIgBAAIACAPIAFA2IABAJIAAAGIADAkIAAAJIAAABIAAAFIAAAgIAAATIAAAFIAAAKIgBASIAAASIgBAAQgBAhgEAhIgBALIgBAEIABAAIgGAjIgCAPIgJAyIgDAPIgIAjIgBAAQgIAfgJAeIgDAIIgDAHIABAAIgGARIgGARIgGAOIgVAzIgHAOIgRAiIgHAOIgaAuIgIANIABAAIgIAMIgIALIgFAJIgJANIgCADQgWAggZAgIgQATIgZAeIgGAHQgZAbgbAbIgEAFIgEADIgHAHIgdAcIgBAAIgPANQggAcggAaIgMAJIAAAAIgJAGIgaATIgKAHIgHAFQgrAcgtAYIghARIgPAIIgFACIgEACQgrAUgtAQIgOAFIgFACIgUAGIgbAJIgHACIgJACIgMADQhIAThNAKIgDAAIgCAAIgCABIgIAAQhFAIhHAAIgXAAg");
	this.shape.setTransform(132.2,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.702)").s().p("AgaToIhJgEQhigHhegVIgQgEQhOgThJgdIgBAAIgNgFIgOgGIgbgMIgNgFIgMgHQgxgXgvgcIg0ghQgsgdgrgiIgygqIgygvIgBAAIgGgHIgIgHIgCgCIgSgSIgFgHIgMgLIABAAQgZgagXgbIgLgPIgYgcQgCgGgFgEIgBgDIgpg6IgKgPQgKgPgJgPQgFgGgDgIIgWgoIgBAAIgIgQIgRgkQgSgngPgnIgBAAIgFgNIgBgEIAAgCIgGgPIgLgeQgLglgJgmQgFgQgCgQIgDgOIgLhBIgBAAIgCgKIAAgGIgFggIgBgNIAAgEQgEgegBggIgBgUIAAgaIAAgCIgBgRIAAgLIABg4IABgKQAAgRABgQIABgQIAIhBIAAgCIABgOIABgCIAFgeIABgCIACgPIABAAQAGgiAIggIgBAAIADgMIAGgUIAFgVIADgIQADgPAHgQIAMgmIAIgRQARguAWguIASgiIACgEIAHgNIACgEQAXgpAagnIAFgGIAaglIAOgUIABAAQAfgqAlgoIAAgBQAHgJAIgIIAhghIAFgGIAAgBIAHgHIAJgHQBHhFBMg3IANgJIAmgaIAkgXIADgCIAFgDIALgGIAtgYQDth8EcgLIAQAAIAlgBQAvAAAvAEQA7AEA3AIQBUAOBPAXQARAFARAGIAEABQBdAfBXAvIAOAHQBVAvBQBAIAZAUIADACIAmAhIACADIAEADIACACIAIAGIAAAAIAlAlIAlAmQAEAEADAFIAIAIIABAAIAGAHIAUAXIADAEQAfAlAdAoIAVAfIALAQQAeAsAYAuIAQAgIAHAOIAAACQAPAcAMAfIACAEIAEALIAHAUIAFAMIAFALIABAEIATA9IAKApIAEAQIANA8IABAHIABABIABAJIAGAnIgBAAIACARIAHA6IAAALIABAGIACAnIABAKIAAABIAAAFIAAAjIAAAUIAAAHIgBAJIgBAVIAAATIgBAAQgBAjgFAkIgBAMIgBAEIABAAQgDATgCATIgDARIgKA3IgEAPIgIAmIAAAAQgJAigLAhQgCADgBAFIgCAHIABAAIgHASIgHATIgGAQIgdBGIgUAkQgCAIgFAIIgcAyIgJAOIAAAAIgIAMIgIANIgGAJIgJAOIgCADQgZAkgbAiIgRAVIgbAgIgGAHQgbAegeAdIgEAFIgFAFIgHAHIgfAeIgBAAIgQAOQgjAegjAcIgOAKIAAAAIgJAHIgbATIgMAJIgHAGQgvAdgxAbIgkASIgQAIIgFADIgGACQguAWgwASIgPAFIgFABIgWAIIgdAJIgIACIgJACIgOADQhOAUhTAMIgEAAIgCAAIgBABIgJAAQhLAJhNAAIgaAAg");
	this.shape_1.setTransform(131.9,132.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.3,7.2,251.3,251.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AgoCQIAAhIIAAgyIgMgKIgJgHQgZgXAAgkQAAgmAZgZQAagaAjAAQAkAAAaAaQAZAZAAAmQAAAkgZAXQgHAHgJAGIgEAEIAAAyQAAAlgBAjg");
	this.shape.setTransform(54,83.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AiIE5QhSAAAAhSIAAnmQAAhSBSAAIFjAAIAAKjQiuAAi1gZg");
	this.shape_1.setTransform(32.5,79.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE480").s().p("AjYFSIAAqjIFdAAQBUAAAABSIAAHmQAABShUAAQimAZiwAAIgHAAg");
	this.shape_2.setTransform(76.3,79.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(12,1,1).p("AEICcQAEjIhTg9Qg4gqhPgIIhjAAQhQAIg3AqQhTA9AEDI");
	this.shape_3.setTransform(54.5,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACuhwQg0gmhHgIQgDAAgCAAIhbAAQgCAAgDAAQhIAIgyAlQgBAAAAABQgFACgDAEQhCA3gBClQAAASANANIAAAAQANAOATAAIGXAAQATAAANgOIABAAQAMgNAAgSQgBiohFg3QgBAAAAgBQgCgBgCgBg");
	this.shape_4.setTransform(54.5,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("AABHTQioAAizgXIgIgBQglAAAAgmIAAnlQAAgmAlAAIAhAAQASAAAOgMIAAgBQANgNAAgTIAAAAQACi8BRg9IABAAIACgCQA5gsBUgIIAEgBIBfAAIAEABQBTAIA6AsIADABIAAABQBSA7ABC/QAAASAOANQANANASAAIAbAAQAnAAAAAmIAAHlQAAAmgnAAIgGABIgBAAQilAYitAAIgHgBgAjJh2IGXAAQATAAANgNIABAAQAMgOAAgSQgBiphFg3IgBgBIgEgCIAAgBQg0glhHgIIgFgBIhbAAIgFABQhIAIgyAlIgBAAQgFADgDADQhCA4gBCmQAAASANAOIAAAAQANANATAAg");
	this.shape_5.setTransform(54.3,61.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AABJLQitAAi4gYQibgBAAidIAAnlQAAiJB3gSQARjLBvhGIABgBIACgBIACgCIABgBIABAAIAAgBQBQg7BygMIAQgCIBjAAQAIAAAKACIgBAAQBzAMBSA+QBzBFASDQQByAVgBCFIAAHlQABCcibACQisAZiyAAIgHgBgAmHhQIAAHlQAAAmAlAAIAIABQCzAXCoAAQCxABCogYIABAAIAGgBQAnAAAAgmIAAnlQAAgmgnAAIgbAAQgSAAgNgNQgOgNAAgSQgBi/hSg7IAAgBIgDgBQg6gshTgIIgEgBIhfAAIgEABQhUAIg5AsIgCACIgBAAQhRA9gCC8IAAAAQAAATgNANIAAABQgOAMgSAAIghAAQglAAAAAmgAjJh2QgTAAgNgNIAAAAQgNgOAAgSQABimBCg4QADgDAFgDIABAAQAyglBIgIIAFgBIBbAAIAFABQBHAIA0AlIAAABIAEACIABABQBFA3ABCpQAAASgMAOIgBAAQgNANgTAAgAhgkoQgQAUgHAmID0AAQgHgmgPgUQgbgQgjgFIhMAAQglAFgYAQg");
	this.shape_6.setTransform(54.3,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AABJpQitAAi4gYQi5gBAAi7IAAnlQAAiWB5geQAXjFBvhJIAmgaQBOgwBogLIABAAQAJgCAJAAIBjAAIASACIACAAQB8ANBYBDQB3BHAYDOQB0AggBCSIAAHlQABC6i4ACQitAZiyAAIgHgBgAhLkRIgDAFICjAAIgDgFQgSgKgXgEIhIAAQgaADgSALgAkJoNIABAAIAAgBgAg1o+IgBABIADgCg");
	this.shape_7.setTransform(54.3,61.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108.6,123.6);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AB5DaIgGAAIgIgCIgMgEIgDAAIgSgGQgsgOgegRQgdAQgsAPQgLAEgHABIgDABIgNADIgIACIgFAAIgSABIgIgBQgKgCgFgHIgCgHIAAgIIgCgMIAAgCIAAgFQAAgGABgGIgBgDIAEgRQAHgpALgfIABgCQgdgVghgfQgIgJgGgEIgCgDIgIgIIgGgGIgCgEQgFgIgDgHIgDgHQAAgIAFgHIAHgEIAHgDQAGgBAHgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAGgBIAMgDIADgBQAJgBALgDQAugGAlABQAMgjAXgoIAKgSIABgCIAIgLQABgEADgBIACgDIAJgLIAFgEQADgDADgCIADgBQAGgDAHAEIAHAFQAHAFAGAHQABAAAAABQABAAAAABQABAAAAAAQAAABAAABQADACADAEIAIAMIABADIAKARIAMAVQAOAdAIAZQAlAAAvAGIATAEQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABIAMACIAGABIAEACIAMAEIAGACIAHAFQAHAGgCAIIgCAHIgIAPIgDAFIgFAFIgJAIIgBACIgPAOQggAggeAVIABABQALAfAHAoQADALAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQgBAGABAGIABAFQAAABAAAAQgBAAAAABQABAAAAAAQAAABAAAAQgCAGAAAGIgBAGIgDAHQgEAJgJACIgIABIgSgBg");
	this.shape.setTransform(24.8,21.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5FAA0").s().p("AAtBQIgBABIgEgBIgEgBIgCgBIgHgCQgQgGgLgGQgJAGgQAFIgIADIgBABIgEABIgEABIgBgBIgHABIgDAAQgEgBgBgDIgBgDIAAgCIgBgFIAAgBIABgCIAAgEIAAgCIABgGQACgPAEgMIABAAIgYgTIgFgGIAAAAQgCgBgCgBIgCgEIAAAAIgEgFIgBgDQgBgDADgDIADgBIACgBIAFgCIACgBQAAAAAAAAQAAABABgBQAAAAAAAAQAAAAAAAAIAFgBIABgBIAHAAQASgDANAAQAEgNAKgPIADgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIADgEIABgBIABgBIADgDIACgCIADgDQACgBADACIACACIAFAEIACACIABABIADAFIAAABQADADACADIAEAJIAJAUQANAAARABIAIABIABABIAFABIACAAIABABIAFACIACAAIACACQACACAAAEIgBACIgCAGIgCACIgBABIgEADIgBABIgFAEQgMAMgLAIIAAABIAHAaIABAGIAAACIABAEIgBACIAAABIgBAFIABADIgBACQgCADgDABIgDAAIgHgBg");
	this.shape_1.setTransform(21.3,21.9,1,1,0,0,0,0.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("ABiCxIgEAAIgHgCIgKgDIgDAAQgGgDgIgCQgkgNgYgNQgYAOgjAMIgPAFIgCAAIgKADQgEABgDAAIgDABIgQAAIgGgBQgIgCgDgGIgDgGIAAgGIgBgKIAAgCIAAgEIABgJIAAgCQAAgGACgIQAGgiAJgYIABgCQgYgRgbgaIgLgLIgCgBIgHgHIgEgEIgCgDIgGgNQAAgDgCgDQgCgHAGgEIAEgEIAGgCIAKgEIADgBIAEgBIAKgCIADAAIAPgDQAmgFAeABQAKgcASgiIAIgOIACgDIAGgJIADgEIABgBIAJgJIACgDIAGgFQAHgDAFAFQADAAADACIALAKIADADIAEAGIAGAJIABACIAIAOIAKASQALAXAIAVQAfgBAkAFIAPACIAEACIAKACIADABIADAAQAFADAFABIAGACIAEAEQAGAFgBAGIgCAGIgGANIgCADIgEAFQgFAEgCACIgDACIgLAKQgZAagaAQIACADQAJAZAGAhIACANIAAADIABAJIAAAFIAAACIgCAKQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAEgCACQgDAHgIABIgGABIgPAAg");
	this.shape_2.setTransform(24.8,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AB5DaIgGAAIgIgCIgMgEIgDAAIgSgGQgsgOgegRQgdAQgsAPQgLAEgHABIgDABIgNADIgIACIgFAAIgSABIgIgBQgKgCgFgHIgCgHIAAgIIgCgMIAAgCIAAgFQAAgGABgGIgBgDIAEgRQAHgpALgfIABgCQgdgVghgfQgIgJgGgEIgCgDIgIgIIgGgGIgCgEQgFgIgDgHIgDgHQAAgIAFgHIAHgEIAHgDQAGgBAHgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAGgBIAMgDIADgBQAJgBALgDQAugGAlABQAMgjAXgoIAKgSIABgCIAIgLQABgEADgBIACgDIAJgLIAFgEQADgDADgCIADgBQAGgDAHAEIAHAFQAHAFAGAHQABAAAAABQABAAAAABQABAAAAAAQAAABAAABQADACADAEIAIAMIABADIAKARIAMAVQAOAdAIAZQAlAAAvAGIATAEQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABIAMACIAGABIAEACIAMAEIAGACIAHAFQAHAGgCAIIgCAHIgIAPIgDAFIgFAFIgJAIIgBACIgPAOQggAggeAVIABABQALAfAHAoQADALAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQgBAGABAGIABAFQAAABAAAAQgBAAAAABQABAAAAAAQAAABAAAAQgCAGAAAGIgBAGIgDAHQgEAJgJACIgIABIgSgBgABiC2IAPABIAGgBQAIgCADgGQACgDABgEQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAIACgKIAAgCIAAgFIgBgKIAAgCIgCgOQgGghgJgZIgCgCQAagQAZgaIALgKIADgCQACgFAFgCIAEgFIACgDIAGgNIACgFQABgGgGgGIgEgDIgGgCQgFgBgFgDIgDgBIgDgBIgKgCIgEgBIgPgCQgkgGgfABQgIgUgLgYIgKgRIgIgPIgBgCIgGgJIgEgGIgDgCIgLgKQgDgCgDgBQgFgEgHADIgGAEIgCAEIgJAIIgBACIgDAEIgGAJIgCACIgIAPQgSAhgKAcQgegBgmAGIgPACIgDABIgKACIgEABIgDABIgKAEIgGACIgEAEQgGAEACAHQACACAAADIAGANIACADIAEAEIAHAHIACABIALAMQAbAZAYARIgBADQgJAXgGAiQgCAIAAAGIAAACIgBAKIAAAEIAAACIABAKIAAAFIADAGQADAHAIACIAGABIAQgBIADgBQADABAEgCIAKgDIACAAIAPgFQAjgLAYgOQAYANAkANQAIACAGADIADgBIAKAEIAHABIACAAIACAAg");
	this.shape_3.setTransform(24.8,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.7,43.9);


(lib.frame01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85B8DC").s().p("AtRKPIAA0dIakAAIAAUdg");
	this.shape.setTransform(94.1,75.8,1,1,0,0,0,-1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-112,-112,224,224,20);
	this.shape_1.setTransform(94.5,94.6,0.844,0.844);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,189.2);


(lib.pbLevel_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(93.1,92.6,0.799,0.799,0,0,0,54.3,61.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().rr(-112,-112,224,224,20);
	this.shape.setTransform(94.5,94.5,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

	// txt
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8DxIAYhxIiWgFIAKjGIDdiwICNA9Ij1C4IA7AGIAFghICJAQIgKAgIA3gDIgYCJIg1gGIgUBtg");
	this.shape_1.setTransform(148.6,152.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// Graphic
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47B957").s().p("AFIDcQhbhbAAiBQAAiABbhbQBchcCCAAQCAAABbBcQBcBbAACAQAACBhcBbQhbBciAAAQiCAAhchcgAtchAIB4gRIgKDfIBigUIAFBwIjSAWgABnhGIBagHIgDFAIhUAHgAhYDxQgXgKgRgQQgQgQgJgVQgKgVAAgYQAAgeALgYQAJgXAQgRQARgQAWgJQAVgIAZAAQAogBAcAVQAdAUAOAiIh2BaQAFACAHABIAOABQARAAALgGQANgHALgJIAnBBQgZASgZAHQgYAIghAAQgbAAgWgJgAg6BOQgGADgEAGQgFAGgDAGQgDAIABAIIABAKIACAGIA8gtQgHgHgGgCQgGgDgJAAQgIAAgHAEgAoyDxQgXgKgQgQQgRgQgJgVQgJgVAAgYQgBgeALgYQAJgXARgRQAPgQAXgJQAVgIAZAAQAogBAeAVQAdAUAPAiIh5BaQAFACAIABIAMABQATAAANgGQAMgHAKgJIAoBBQgZASgZAHQgaAIghAAQgbAAgWgJgAoUBOQgGADgFAGQgEAGgDAGQgCAIgBAIIABAKIADAGIA7gtQgFgHgGgCQgIgDgIAAQgIAAgHAEgAmIAMIBWgGIAXCdIABAAIAaidIBXAGIg3DnIhzAHg");
	this.shape_2.setTransform(95.1,151.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

	// BG
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,9.9).s().p("AhXAZIAKAAQBVgCA8gOIAEgJQAGgSABgOIAAgHIAJgDIAAAvIAAAQIgZAFQhEAOhSADg");
	this.shape_3.setTransform(107.8,133.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0,0.4,0,0,0.4,9.9).s().p("AhKAPQADgMAGgJQBBgEBPgSQgBAOgHAQIgEALQg7AOhWACQABgFADgJg");
	this.shape_4.setTransform(107.8,133.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.4,0.7,0,0.4,0.7,9.9).s().p("AhTAhIAAgwQBjgCBEgPIAAAHQhPAThBAEQgGAJgDALQgDAJgBAGIgKAAg");
	this.shape_5.setTransform(107.3,133.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,0.3,0,0.4,0.3,9.9).s().p("AAuAYQhCgCg3gFIgBgEQAAgMAKgYQA8AJBCADIARABIgEAOIgGAUIgVAAg");
	this.shape_6.setTransform(89.5,134);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,0,0,0.1,0,2.2).s().p("AAAARIgDgNIgGgVQAJAAAJACIAAAVIAAAMQgEgBgFAAg");
	this.shape_7.setTransform(108.3,108.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,0.1,0,0.4,0.1,7.9).s().p("AgmgHIAKgDIBJgWIgDALIgDAVQgnASggALIgMAEQABgRAFgXg");
	this.shape_8.setTransform(122.1,130.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,0,0,0.1,0,7.9).s().p("Ag5AiIAJgCIAMgEQAigLAlgRIAEgWIACgLIABgKIAPgGIAAAmIAAAVIgVAJQgrATgyAMg");
	this.shape_9.setTransform(122.5,130.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,0.4,0,0.8,0.4,7.9).s().p("AgxgHIASgEIABAAQAwgOAggNIgBAKIhJAWIgKADQgFAXgBARIgJACg");
	this.shape_10.setTransform(121.7,130.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.5,-1.8,0,0.5,-1.8,8.3).s().p("AgXAPIABgKIADgGQAagMARgLIAAAFIgFASIgCACIgnAYIgBgKg");
	this.shape_11.setTransform(131.4,126.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,1.1,0,0.6,1.1,8.3).s().p("AAuAWQgjgLhOgLIAAgXQBBAJAzAOIATAGIgNASIgJgCg");
	this.shape_12.setTransform(116.1,109.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,0,0,0.1,0,8.3).s().p("AgjAuIAIgEIAngXIACgFIAFgPIABgFIACgbQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAJgRIACgKIABgDIgGBVQgVAbgsAXg");
	this.shape_13.setTransform(131.9,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,-0.6,0,0.8,-0.6,8.3).s().p("AgcABIAVgJIAUgQQALgJAFgGIgCAbQgRALgbAJIgDAJIgBAJIABAKIgIAEg");
	this.shape_14.setTransform(131.2,125.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,1.6,0,0.6,1.6,5.5).s().p("AgeAAIAAgWQAsAQARATIgDADIgIAHQgZgOgZgJg");
	this.shape_15.setTransform(127.3,113);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-1.2,0,0,-1.2,5.5).s().p("AgjgPIAAgMQAYAKAaAOIAIgHIADgDQAJAKABAJIAAAFQAAAJgEAIQgOgZg1gSg");
	this.shape_16.setTransform(127.8,115.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,-1.1,0,0.1,-1.1,8.3).s().p("AAsANQgzgOhCgJIAAgMQBPANAiAJIAJACIANgQIAMAEIAAAWIAAALQgOgGgQgEg");
	this.shape_17.setTransform(116.7,111.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,-0.5,0,0.1,-0.5,9.9).s().p("AA8AhQhSAAhDgJIAAgRIAKABQA4AGBBACIAWAAIAFgSIAFgRIACgNIAOAAIAAAwIAAARIgeAAg");
	this.shape_18.setTransform(89.9,134.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.1,-0.8,0,0.1,-0.8,8.5).s().p("AgjgBIAMgjQANANAKAHQAMAHAYAKIgJAXIgFANQgggTgZgTg");
	this.shape_19.setTransform(59.1,126.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,-0.1,0,0.4,-0.1,10.9).s().p("AghAPIgngPIACgQIAHgVQAkAPBMAQIAYAFIgFAaIgDANQg5gIgpgPg");
	this.shape_20.setTransform(71.7,131.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,3,0,0.8,3,10.9).s().p("AhNAbIAAg5IARAJIAFACQAQAHAMAEIAVAHQAmALAuAJIgBAJIgYgFQhMgQglgNIgHAUIgCARIgIgEg");
	this.shape_21.setTransform(71.4,128.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,1.2,0,0.8,1.2,9.9).s().p("AhSAZIAAgyQBDAKBPABIATAAIgCANIgRAAQhCgDg9gJQgJAYgBAMIABADIgKgBg");
	this.shape_22.setTransform(89.2,133);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-2.5,0,0,-2.5,10.9).s().p("AgjAJIgygSIAAgSIAIAEIAnAQQAqANA4AIIAEgNIAFgaIACgKIAPADIAAAyIAAASQhIgJgxgSg");
	this.shape_23.setTransform(72.2,133.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-3.4,0,0,-3.4,8.6).s().p("AgqgSIAAgQIAGAHQAZAVAgAQIAFgKIAJgYIAFgNIADACIAAA4IAAARQg6gbgbgdg");
	this.shape_24.setTransform(59.2,128.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.2,3.2,0,0.2,3.2,8.5).s().p("AABAVQgKgGgNgNIgMAjIgGgHIAAhGQAMAWAiAWIAjAXIgEANQgYgLgMgIg");
	this.shape_25.setTransform(59,122.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFBB10","#AADE1E","#7EBD28","#75A02B"],[0.008,0.486,0.863,1],-13.1,-8.9,0,-13.1,-8.9,46.6).s().p("AjGAdQhOgXgTgbQA3gVAugEQAsgGAhAAIACAAQgHAdgIAPIgKgHIgNgLIAAAAQAFAFAFAQQAEAMAAAJQAEgGAAgDIAeAlQADgCAJgQIALgTQAJAKAIARIAPgOQAMgLACgCQAEACAGAMQAHAMADACQAOgEARgPIAKAPIAJANQAKgCANgTQAJgPAFgKQAIADANAPQAMAPADABQABgGAGgLIAHgPQAGAJAVAZIAKgOQAIgLAAgEIACAAIAAgDQAEADAHAUQAEgBAYgXQAagXAIgNQgGAGgYAQIgEADQgLgVgJgbIAUAAQA0APAQAOQAaAVgGAnQhlAciOAAQiRAAhpgeg");
	this.shape_26.setTransform(90.7,121.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.5,0.5,0,0.5,0.5,5.7).s().p("AgfAdQAAggA/gcIgFAQIgFAOIg1AhIAAgDg");
	this.shape_27.setTransform(63.7,114);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,5.7).s().p("AgkAbIA1ghIAFgOIAFgQIAKgFIAAAVIAAAPQg2AUgOAaQgEgGgBgIg");
	this.shape_28.setTransform(64.2,114.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.8,0.5,0,0.8,0.5,6.5).s().p("AgvADIAegIQAegLAjgHIgLAXQgvAEglATg");
	this.shape_29.setTransform(72.8,110);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFA110","#9BC21E","#66AD1C","#569120"],[0.008,0.486,0.863,1],-18.3,-5.8,0,-18.3,-5.8,46.6).s().p("AgaA+IgJgPQgUAPgNAFQgEgDgGgMQgHgLgEgDQgCADgLAKIgPAOQgJgRgIgKIgLAUQgKAQgCABIgfglQABADgEAGQAAgJgFgNQgEgQgFgFIAAgBIANALIAKAHQALAKATAOQAAgGAJgPQAJgOAGgGIANAhIATgPIAWgPIAJATIAEALIAqghIAOAkQAFgEAGgSQAGgRAAgFQAGgDAdAjIACABIAOgaIAIgLIAOAbQAGAPAJADQAAgHAHgNQAJgOAGgDIABAAQAGAeAAAEQAFgCAVgNIAEgDQAYgQAGgEQgIAMgbAZQgXAWgFACQgGgVgEgCIgBACIgBAAQAAAEgIAMIgKANQgVgZgGgJIgHAPQgGAMgCAFQgCgBgMgPQgNgPgJgFQgEAMgJAPQgLATgLACIgJgNgADfAAQgRgLg0gQIgTAAQgHgVgGgaQAGAAAFABQBBAJA1AQQAQAEAOAGQA3AVAOAXQgRAfhTAXIgHACQAFgpgZgVgAldAGQAOgYA4gXIAegKQAngNArgIIAMgBIgGAYIgEAWIgCAGIgCAAQghAAgsAGQguAEg4ATIgBgCg");
	this.shape_30.setTransform(96,118);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,6.5).s().p("Ag2ASQAkgSAvgGIALgWIAPgEIAAAYIAAAJQgrAIgkANIgeAKg");
	this.shape_31.setTransform(73.5,110.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],282,-152.7,0,282,-152.7,0).s().p("AgFgEIALAAIgBAIIgKABg");
	this.shape_32.setTransform(79.8,110.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],282.2,-154.6,0,282.2,-154.6,0).s().p("AgHAMIAAgVIAPgDIgEAYIgLAAg");
	this.shape_33.setTransform(79.9,108.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],-16.5,-13.7,0,-16.5,-13.7,56.5).s().p("Ah7B3IgxgGQhCgKgjgQQgggOgZgOIgXgNQgigUABgjQgBglBpgrQA4gWBEgKIABgGIgCAXIgQACIgPAEQgjAGggALIgeAKIgJAEQhCAcAAAiIABADQAAAGAEAHIABACQAUAeBOAWQBoAeCTAAQCNAABlgcIAHgCQBTgXARgfQAFgJAAgHIAAgEQgCgLgJgKQgRgVgugRIgMgEIgSgGQg1gQhBgJQgJgCgLAAIgEgPQBSAIBVAbQApANAkAPQAnAdADAhIAAABIgBADIgBAKIgJARQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgFAGgLAJQgbAMgdALQgzASg8ANQibARgcACIgBAAIgGAAQgdAAhfgJg");
	this.shape_34.setTransform(96.8,117.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],-13.4,-13.8,0,-13.4,-13.8,56.5).s().p("AAmCKIgTAAQhPgBhDgKIgQgDQgugJgogNIgVgHQgMgEgQgHIgFgCIgRgJIgDgCIgkgWQgkgYgMgWIAAgGQgHglBagnQBagnBYgOIAAAEIgBAGQhEAKg4AWQhpArAAAlQAAAjAhAUIAYANQAZAOAgAOQAjAQBBAKIAyAGQBmAKAcgBIAAAAQAdgCCbgRQA8gNAygSQAegLAbgMIgXAQIgVALIgPAHQgfANgzAOIgBAAIgSAEIgJACQhEAPhkACIgOAAgAErhWQhVgbhSgIIgDgQQBmAKBJAeQAtASAbAVQglgPgogNg");
	this.shape_35.setTransform(93.7,117.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#CCC631","#A45332","#402032"],[0,0.604,1],4.7,-1.3,0,4.7,-1.3,20.1).s().p("AgWBnIAFgYIABgKIAEgaIACgWIAAgEQABgYAAgaIAAgTIAAgYIgDgpIABgGIAAgBQALARAAArQAAAuAAASIAcgfIAAAIQgGAUgNAdQgJAaAAAEQAPArAAAVIAAABQgFgJgRgRQgCACgNAVIgFAHIAFgWg");
	this.shape_36.setTransform(82.1,102.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.1,-3.6,0,-1.1,-3.6,20.1).s().p("AhmCZQAHgPAIgdIACgGIAEgIQAOgVACgBQATARAEAJIAAgCQAAgUgRgsQAAgEALgaQANgdAGgUIAAgIIgcAfQgCgRACgvQgBgqgMgSIAAABIgBAGQgBgHAAgJIAHgDQAVgHAFgKQAEAOAIAFQAFADAOABIADAkIAAAwIACApQAAAngIA5IACAAQAJg/AAgkIgBgjIgDhXIADAAIAOgBIAKgJIALAJIgGAuQgGAkAAAXQAEAiAGAhQAKAvAMAOQgUAsgWAjIgJgTIgTAPIgTAPIgOghQgFAGgJAOQgJAPAAAGQgTgOgLgKgAAjAKQgHgjgCgnQAAgOAJhLQAIAFAJAAQAKAAAJgEQAFgEADgDIAKAHQAJAFAFgBIAAAmIAAAcIgHA0IgDgnQgGg0gOAAQgMAAgEAqIgBArIAAAaQACAPAIAFQgHgYAAgWIABgpQADgnALAAQAKAAAFAwIAEAzQgHAWgTAuIgLAZQgNgPgIgzg");
	this.shape_37.setTransform(88,104.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#BD8E2E","#7A3732","#000033"],[0,0.604,1],-4.8,-0.2,0,-4.8,-0.2,20.1).s().p("AAWCpIgoAiIgEgLQAVgjASgsQAGAHAHAAQAHAAAJgWQAGgPADgPQAEgYAAgdIAAgNIAHgyIABgcIAAgmQgGABgJgFIgKgIQgDAEgFAEQgIAEgLAAQgJAAgGgFIAAgHIAAgJIAAAAIgBAPIgLgJIgKAJIgQABIgDAAIgEgsIgBAAIAAAEIABAoQgOgBgFgEQgHgEgFgOQgEAKgWAGIgHADIgCgOIgCgdIAJgIQAPgNAFgGQAKARAVAAQAKAAAGgGQAGgGAAgIIAAAAIALAHQAIAGAHAAQAXgBALgVQADAJAKAJQANANAPAAQAIAAAFgGIABAAQgDAJAPAPIAKBKQAIA8AAA9QABBGgCAMQAAAPgHAhIgOAaIgCgBQgdglgGADQAAAGgGASQgHASgGAEgAATBuIALgZQATguAHgYQAAAfgEATQgDARgGAPQgHATgGAAQgGAAgFgGg");
	this.shape_38.setTransform(91.7,101.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#B97333","#682233","#000033"],[0,0.604,1],-8.6,2.5,0,-8.6,2.5,20.1).s().p("ABZDUIgNgdIgIANQAGggAAgQQACgMAAhGQAAg/gIg6IgKhKQgQgOADgKIgBAAQgEAGgIAAQgPAAgNgMQgIgJgEgKQgKAWgaAAQgGAAgJgGIgLgGIAAAAQAAAHgFAGQgGAGgKAAQgWAAgKgRQgFAHgPAMIgJAIIgCgZQgBgEgBgEIgDgOQAPAAAMgPQAGgEABgFIACgEIACACQALANAVAAQAVAAAJgWIADgIIACAAQAIAGANAAQASAAALgGIAAADQALAVASAAQAMAAAMgJIACAGIADAJQANAVAZAAIAGgBIgBAIQgCAfAAAgIAAAFQAAAXACAZIAAAOQAEAmAIApIACAMIADAQIADAPIAGAXIADANQAHAaAHAVQAIAcAMAUQgVANgFACQAAgEgHgeIgBAAQgGADgIAOQgIANABAHQgKgDgGgPgAgTCMQgMgOgKgvQgHgjgDgiQAAgVAGgkIAGguIABgOIABAAIAAAIIgBAHQgJBLAAAOQACAlAHAlQAIAzAMAPQAFAHAGAAQAGAAAGgUQAFgPAEgRQADgTAAgfIgDgxQgFgwgJAAQgLAAgCAnIgCAnQABAWAGAaQgHgFgDgRIAAgaIABgpQAEgqANAAQAMAAAFA0IADAlIAAANQAAAdgEAYQgCAPgHAPQgHAWgHAAQgHAAgFgHgAhWCBQAHg5AAgpIgCgnIAAgwIgCgkIgBgnIAAgFIABAAIADAsIADBXIACAhQAAAmgJA/g");
	this.shape_39.setTransform(95.5,98.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#ECE75D","#A1DB4A","#7DAD29","#6D772F"],[0,0.298,0.635,1],-0.5,12.9,0,-0.5,12.9,80.1).s().p("AgWCxQgKgMAAgSQAAgJACgOIADgOQgGAWgkAYQgnAZgjAAQgQAAgNgHQgQgHAAgQQABgPAHgNQAEgGAPgQIgCAAQgJADgIAAIgKAAQgIgBgBgKQABgOARgUQAPgPASgLQgIAAgJAFQgLADgFAAQgaAAgQgJQgVgLAAgVQABgbAOgYIAAAAQAPgWARgPQAXgTAjgXQAWgNAOgEIBHgYQAZgJAtgEIAXgCIAHAAIAOAFQAQAJAAAMQAAAPgKAHQgFAEgaAQIABAAQADgCAPgDQARgFAMAAQAqAAARAJQASAIABAaQAAAYgTAUQgUAXgjAGQASgCANAJQAPAJAAAUQAAAXgQAUQgUAbglAAQgTAAgIgJQAKAcgPAkQgSAngegBQgNABgLgLgAiUAhIAEgBIAAgCIgEADIAAAAgAC5BKQgDgGABgLIAAgMQACgFAVgLQALgHAMAAQAKAAAEAOIACAOQAAAgguAAQgLgBgDgHg");
	this.shape_40.setTransform(74.7,31.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#ECD451","#A1CD38","#648C12","#645633"],[0,0.298,0.635,1],-6,4,0,-6,4,80.1).s().p("AjnDjIgCABQgXAVgGADQgKAGgWAAQgfAAgUgLQgbgNAAgcQAAgFAEgIQADgEABgFQALgHALgEIgbgaQgNgPAAgSQAAgTARgTQAQgSAVgHQgGgLgPgPQgJgIAAgOQAAgUAPgPQAOgOAYgFQgHgFgCgDIAAgRQAAgZAdgnQgOAYAAAcQAAAWAUALQARAKAZAAQAGAAALgEQAIgFAIAAQgSALgOAQQgSATAAAMQAAAKAJACIAKAAQAHAAAJgEIACAAQgPARgDAFQgIANAAAQQAAAPAQAIQAMAGAQAAQAjAAAngZQAkgYAHgWIgDAPQgDANAAAJQAAATAKALQALALAPAAQAfAAARgnQAOgjgKgaQAHAGATAAQAlAAAUgZQAQgUAAgXQAAgUgPgLQgNgJgSADQAjgHAUgXQATgUAAgYQAAgZgTgJQgQgIgqAAQgMAAgRAEQgPAEgDACIgCAAQAbgQAEgEQAKgIAAgPQAAgMgQgIIgNgGIAYgCQBeAAA/ApQA/AoAFA8IACAAQAFgXANgJIACAAQAVAIANAIQAcATAAAdQAAAKgEAHIgFAHQAJgCAIAAIAEAAQgCAPgHAJQgMANgbACQAaAAAWAOQAZARAAAWQAAAWgMAUQgQAbgeAAQgNAAgJgJQgDgDgIgOQAFAQgRATQgQARgRAAQgQAAgSgMQgIgFgIgJQAEANAAAKQAAAMgKAHQgOALgaAAQgfAAgMgNIAAACQAIAHAAARQAAALgGAPQgJAUgRAAQgJAAgHgJIgEgJQgCALgMANQgTAWgVAAIgBAAQgOgBgJgFQgLgJgNgHQgCAjgJAQQgOAbgjAAQgTAAgFgLIgKgeQgLAUgHAIQgPAQgTAAQgtAAgCgzgACXg6QgWALgCAFIAAANQAAALACAFQADAIALAAQAuAAAAgfIgCgPQgEgOgKAAQgMAAgKAHgAjIg5IAAACIgEABIAEgDgAjZjNIAWgOQgjAXgWATQAQgQATgMgAAHkVIAGACIgIAAIACgCg");
	this.shape_41.setTransform(80.2,40.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#F5C646","#95CD38","#588C12","#644335"],[0,0.298,0.635,1],-38.2,17,0,-38.2,17,80.1).s().p("AAVApQAEgIAAgJQAAgbgbgTQgMgJgWgHQALgIAZgBQAAAEAAAEIAAAFQAAACgFABQALAEAOATQARAVAAAXIgBAKIgEgBQgHABgJACIAFgHg");
	this.shape_42.setTransform(112.4,27.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FF9538","#729C23","#43741E","#4A2A3F"],[0,0.298,0.635,1],-14.8,-19,0,-14.8,-19,80.1).s().p("Ah+E0IgHgIQgTATghAAQgaAAgPgcQgIgPgCgSQgKABgNAHQgNAJgLAAQgcAAgNgSQgNgPACgXIgCAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgjAEQg9AAglgrIgMgSQgXglAAgyIAAgUQAGAlAbAaQAjAhAsAAQAOAAAXgKQgBANAGALQAHANANgBQAHAAAIgEQAKgGADgKQgDAVAOANQANAJARABQAMAAAFgGQAEgDALgMIAAgDQAEAWAHAIQAHAKAQAAQARAAAEgOQADgFABgWQAJAHAJALQAHAHAKAAQAOAAAEgGQAFgGADgSQALAHAMACQABAEAAAEIADAZIACAdIACAPQAAAJACAIIADAoIAAAYQgdgCgTgagACiEnQgDgYAAgYIAAgEQAAghADgfIABgHIgGABQgZgBgNgVIgDgJQAHgHAHgLIAOAMQAFACAIABQAiAAAVgmQASgggDgWQADAFAJADQAIADAFAAQAbAAAIgVQADgKgBgXQAFACAIAHQADADAKAAQAOABAIgJQAIgIAAgNQAAgKgBgDIgCgKQADAEAZADIgCgCQAYgJAMgSQAJgRAAgVQAAgSgEgJQgGgNgLgBQArgIAcgmIAEgEQgBgbgLgPQgMgQgNADQAGgDACgLIAAgVQAAgQgGgJQgKgPgcgIIgPgEIAIgDQAHgDAHgBQAqAAAeA1QAKAQAGASQAHATADAWIABAAQAEABAAALQAAADgCAHIAAAQQAAAwgNAXQgFAKgfAfIAAACQAcAHAQAaQANAUAAAZQAAAUgIAHQgRAMgQAOIAOAVQAHAMgBARQAAALgIAPQgUAfgjAAQgOAAgWgKQANAJgRAgQgSAigZgBQgHAAgNgEQgMgEgGgEQAKAWgdAcQgfAegmABQgiAAgVgUg");
	this.shape_43.setTransform(89,63.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#F5AA3A","#8EB12A","#588C12","#644335"],[0,0.298,0.635,1],-12.7,-9.3,0,-12.7,-9.3,80.1).s().p("AjKEuQgHgIgEgWIAAADQgLAMgDADQgGAFgMAAQgRAAgMgKQgPgNAEgUQgEAKgJAGQgIAEgIAAQgNAAgHgNQgFgKAAgOQgXALgOAAQgsAAgighQgbgagGglQAEggAOgaQAIgOALgLQAKgKAKgHQgCAFgDAEQgDAIAAAFQAAAcAaANQAVALAeAAQAXAAAJgGQAGgDAXgVIACgBQADAzAtAAQATAAAPgQQAHgIALgUIAJAeQAGALATAAQAjAAANgbQAJgQACgjQANAHALAJQAJAFARABIABAAQAUAAATgWQAMgNACgLIADAJQAGAJAKAAQAQAAAJgUQAHgPAAgLQAAgPgJgHIAAgCQANANAeAAQAbAAANgLQALgHAAgMQAAgKgFgNQAIAJAIAFQASAMAQAAQARAAARgRQARgTgFgQQAHAOAEADQAIAJAOAAQAdAAAQgbQANgUAAgWQAAgYgZgRQgWgOgaAAQAbgCALgNQAIgJABgPIABgKQAAgWgRgYQgOgTgNgDQAGgCAAgCIAAgFQAAgEgBgEIAEAAQAeAAALAnIATgMQAOgIAVAAQAfAAAMAbQAFAOAAATIAQAEQAcAIAKAPQAFAIAAARIAAAVQgBALgHADQAOgEALAQQAMAQAAAaIgDAFQgcAlgrAJQAKAAAHANQAEAKAAARQAAAUgKAQQgMATgYAIIADADQgZgDgEgEIADAKQABADAAAJQAAAPgJAJQgIAIgOAAQgJAAgDgDQgJgHgEgDQAAAYgDAJQgHAWgbAAQgFAAgIgDQgKgEgDgEQADAWgRAfQgVAmgjAAQgIAAgEgCIgOgMQgHALgIAHIgCgGQgMAJgMAAQgSAAgNgVIAAgDQgLAGgRAAQgNAAgJgGIgCAAIgDAIQgIAWgUAAQgVAAgLgNIgCgCIgCAEQgBAFgFAEQgNAPgOAAIACAOQgLgCgLgHQgDASgFAGQgFAFgNAAQgKAAgHgGQgJgLgJgIQgCAWgCAGQgFAOgRAAQgQAAgHgKg");
	this.shape_44.setTransform(86.9,53.8);

	this.instance_1 = new lib.frame01("synched",0);
	this.instance_1.setTransform(94.5,94.5,1,1,0,0,0,94.5,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(4));

	// Layer 2
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFCC00").ss(3,0,1).p("AtgtCIAAgBQh9AzAFCLIAAYQQAAABAAABQAAAAAAABQABAWAFAWQAeClCsgDIYQAAQArAAAqgPQACAAABgBQCAgzgHiQIAA4OQAAgtgQgpQgBgBAAgBQgwh3iBgCQg6gihJAAQgchLg+gsIAAAAQgLgIgMAAQgMAAgLAHIABAAQg+AogdBJQgBADgCAEQAAAAgBAAQhIgBg5AjIgxAAQAGgIAEgIQANgcgHgfQgDgMgIgIIgBgBQgJgKgMgBIABAAIh4gVQgchQhBgtIABAAQgLgIgNAAQgJAAgKAGIgBAAQhAAqgdBPQhOAAg+AnQgLAHgFAOQgFAMAFAOQADAJAEAKQAHAOAIANIg3gBQg7gdhEgBQgBAAgBAAQgCgHgDgHQgchCg5goIAAAAQgLgIgNAAQgNAAgLAIIABAAIggAXQAAAAAAABQgIAFgEAIIABAAIgrBSQhOgDg7AmQgmAEgjAPg");
	this.shape_45.setTransform(94.6,81.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AvSO6QgFgWgBgWIAAgBIAAgCIAA4QQgFiLB9gzIAAABQAjgPAmgEQA7gmBOADIArhSIgBAAQAEgIAIgFIAAgBIAggXIgBAAQALgIANAAQANAAALAIIAAAAQA5AoAcBCIAFAOIACAAQBEABA7AdIA3ABQgIgNgHgOIgHgTQgFgOAFgMQAFgOALgHQA+gnBOAAQAdhPBAgqIABAAQAKgGAJAAQANAAALAIIgBAAQBBAtAcBQIB4AVIgBAAQAMABAJAKIABABQAIAIADAMQAHAfgNAcQgEAIgGAIIAxAAQA5gjBIABIABAAIADgHQAdhJA+goIgBAAQALgHAMAAQAMAAALAIIAAAAQA+AsAcBLQBJAAA6AiQCBACAwB3IABACQAQApAAAtIAAYOQAHCQiAAzIgDABQgqAPgrAAI4QAAIgHAAQilAAgeiig");
	this.shape_46.setTransform(94.6,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,189.2);


(lib.pbLevel_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(93.1,92.6,0.799,0.799,0,0,0,54.3,61.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().rr(-112,-112,224,224,20);
	this.shape.setTransform(94.5,94.5,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

	// txt
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADECQgmgGg0gZQgygZg/g1IBmhzQAnAkAaAMQAaANAMABQAQABAGgFIAGgFIADgHQADgGAAgKQgBgJgHgJQgHgKgWgHQgSgHgnAAIAShjQAmAIASgEQASgEAEgIQAFgIgCgIIgDgIIgGgGQgFgIgQgCQgOgEgZAFQgbAEgqAXIguhzQA/gjA0gIQAxgIAmAHQAlAHAaAOQAZAPAMAMIANANIAHAMQAIALAHAVQAFATgCAYQgBAXgSAZQgRAYgoAUQAjAaAPAfQAPAfABAcQAAAcgIAYQgHAYgIANIgIAOIgJAKQgKALgTAMQgTAMgdAIQgRAEgUAAQgPAAgSgCg");
	this.shape_1.setTransform(147.4,152.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// Graphic
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_2.setTransform(156.8,91,0.866,0.66,0,10.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_3.setTransform(131.1,66.1,0.866,0.66,0,10.9,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_4.setTransform(103.6,83.2,0.866,0.66,0,10.9,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_5.setTransform(116.7,86,0.866,0.66,0,10.9,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_6.setTransform(115.6,79.8,0.866,0.66,0,10.9,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_7.setTransform(129.4,84.2,0.866,0.66,0,10.9,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_8.setTransform(105.3,103.1,0.866,0.66,0,10.9,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_9.setTransform(149.8,103,0.866,0.66,0,10.9,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_10.setTransform(131,77.3,0.866,0.66,0,10.9,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_11.setTransform(103,94.9,0.866,0.66,0,10.9,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_12.setTransform(150.5,98,0.866,0.66,0,10.9,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_13.setTransform(126,74.7,0.866,0.66,0,10.9,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_14.setTransform(128.4,71.4,0.866,0.66,0,10.9,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_15.setTransform(149.7,97.2,0.866,0.66,0,10.9,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_16.setTransform(103.4,87.2,0.866,0.66,0,10.9,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_17.setTransform(129.8,68.8,0.866,0.66,0,10.9,2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],7.8,-10.7,0,7.8,-10.7,54).s().p("AgmgKQAZACAbAAIAZAAIgUATIg5gVg");
	this.shape_18.setTransform(82.1,120.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-14.7,-9.3,0,-14.7,-9.3,40.4).s().p("AAQAsIg9gZIiNg/QBHAdBgAWQB+AeBQAHg");
	this.shape_19.setTransform(75.9,135.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.4,-5.8,0,-11.4,-5.8,40.4).s().p("AEBBPQgHgMABAFIACAHIghAAQhQgHiAgfQhegXhHgbIg9gbIgPgGIgEgCIgEgFQgJgIgHgMIgDgGIgBgDIADABIABACQAhATCbAxQCcAxBPgGQA9gEgKggQgDgIgJgNIAjANIAAAIQAAAHADgJIgBAKIgBAcQACALALAgg");
	this.shape_20.setTransform(72.6,132.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-9.8,1.2,0,-9.8,1.2,40.4).s().p("AgwA9QibgxgigRIgBgjQgBgmACgZIANgDQAvAOC4BJQCfA+BIAaQAJAhg8AEIgQABQhPAAiMgug");
	this.shape_21.setTransform(71,125.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-7.6,5.1,0,-7.6,5.1,40.4).s().p("AAcASQi3hHgvgOIgNADQgDAZACAmIABAhIgBgBIgDgCQgQgfgQg9IgFgfIgCgNIAAAAQA7ARDsBfQB2AxBcAhQAJAMADAJQhHgaighAg");
	this.shape_22.setTransform(68.8,121.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],11.9,-5.9,0,11.9,-5.9,54).s().p("AA3AmQgdAAgZgCIhDgZQhFgXgWgMIAPgNIAHAAIBXAFQANAXBQgVIACAAQADADABACQABAFgFAEQgJAIgXAFIgCABQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIACADIADAAIAVgEQARgKAEgFQADgFgCgGIAAgDQA0gCAugFIgGAFIhIBGIgZAAg");
	this.shape_23.setTransform(78,115.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-7.7,0.5,0,-7.7,0.5,38.5).s().p("AgTAHIBzhNIBIgzIAFAJIgPAhQg5AbhEAoQhRAvh8BXQA/g1Bag+g");
	this.shape_24.setTransform(122.3,112.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-1.3,-6.6,0,-1.3,-6.6,54).s().p("AA7CXIgigNQhbggh2gxQjuhfg6gRQgBgEAJgLIBVAaQBmAeAsARQAtAVBEAFIA6AYIAVgVQBkgCBygeQBQgUBXgrQBhgwAtgwIAIACIgCABIhIAzIh1BPQhaA8g/A1QgrAjgdAfIgEADIAAAAIAAABIgDADIAAgJg");
	this.shape_25.setTransform(91.1,116);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-1.3,0.7,0,-1.3,0.7,54).s().p("AAUAhIAGgGQAygGAqgMQBvgbB+g8IAjgRIARgJIBCASQgtAvhgAuQhYAshQAVQhxAehlADIBGhIgAjxBMQgsgUhmgeIhWgZIADgCIAMgNIAEACQATAHApAJQBHAUAxADIgPAOQAWALBFAZIBFAZQhDgGgtgUg");
	this.shape_26.setTransform(91.2,108.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-7.3,-9.2,0,-7.3,-9.2,38.5).s().p("AjWCyQAegJAxgcQA+gjA9gyQCEhpBJiAQAJAWAEAQQAGAYADAaQjcCxh1Bag");
	this.shape_27.setTransform(121.9,122.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-4.7,-7.6,0,-4.7,-7.6,38.5).s().p("AjODCQgLgggCgLIABgcIABgMIAAgBIAAAAQADAJAEAHQAQAWAlgGQAugICDhnQBzhWA1hpIAPghQADAHAIAPIAAABIAGAJQhJCAiGBpQg7Ayg/AjQgxAcgeAJgAjTDCIgCgHQgBgFAHAMg");
	this.shape_28.setTransform(119.2,120.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-3,-6.7,0,-3,-6.7,38.5).s().p("AjCCHQgEgGgCgJIADgEQAegfAqgjQB8hUBRgyQBEgoA5gbQg2BphzBWQiCBngvAIIgQABQgZAAgMgRgAjMB7IAEgDQgCAGgBAAIgBgDg");
	this.shape_29.setTransform(117.6,119.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],1.9,9.1,0,1.9,9.1,54).s().p("ADmgiQg0gNgigIQhvgYgbgEIiDBjQhEAzgxAtQgxgEhHgUQgpgLgTgHIBRg6QBlhAB3g7QASACAeAGQBsAYAmAFIDnAoIB2AXIgjAPQh+A9hvAdQgqALgyAHQBNhMBfhGg");
	this.shape_30.setTransform(88,100.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],2.5,7.3,0,2.5,7.3,54).s().p("Ah1BlQgGgBgEgBQgGgDgBgGIgBgGIAFgJIAVgFIARABQAFgBgBgBIgBgEQgmgFgMAMQgIAJADALIACAGIhXgFIgGAAQAxgtBEgwICChlQAcADBvAZQAhAHA0ANQhfBHhMBLQgvAGgyABIgCgDQgDgDgKgCQgVAFgQADQgNACgKAAIgKgBgAg+AfQgHACgBACIACAHQADALALAKQATAQAdgIQARgFAEgMQACgFgCgHQgDgQgNgDIgKgBQgTAAggAJgAgdgOIABAEIBXAbQAFgBgBgFIgtgPQgZgKgUAAIgCAAgAAMgiQAOALASAIQAaAMAQgEQALgCAIgOQAHgNgBgGQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgEAAIgFAQQgGALgRAEQgBABgagPQgPgJgMAAQgGAAgFACgAguBkIABAAIABAAIgCAAgAgsA6QgLgIgCgGQAGgCACgCIgFgEQACgIAcAAQAaABAEAQQABACgCAEIgGAKIgQAEIgHABQgKAAgKgIg");
	this.shape_31.setTransform(87.3,102.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],1.3,12.4,0,1.3,12.4,54).s().p("AmwBlIAKgLQAigjBHgrQAzgeCOhUIAmAFQCAAQDYA0ICvAoIgQAJIh3gVIjmgoQgngGhsgXQgegGgSgCQh3A7hkA/IhRA7IgFgCg");
	this.shape_32.setTransform(88.5,97);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag8BaIgCgDQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIACAAQAYgFAIgIQAFgFgBgEQAAgDgEgCIAAgBIgCABQhSAUgNgXIgCgFQgDgMAHgIQAMgNAmAGIACADQABABgGACIgQgCIgWAFIgEAJIAAAGQACAGAGADQAEACAGABQANABATgDQAQgCAWgGQAJACADADIADADIAAADQACAHgDAEQgEAFgQALIgWAFIgDAAgAgkASQgMgKgDgJIgBgGQABgDAGgCQArgLAQADQAPAEAEAPQACAFgDAGQgEALgSAFQgKACgHAAQgRAAgMgKgAglgHIAGAEQgCADgHAAQADAFAKAIQAOALANgDIAPgFIAHgKQACgDgBgDQgEgOgagBIgDAAQgZAAgCAIgAgLg3IgBgEQATAAAdALIAsARQABAEgEACIhYgegAA9g7QgSgJgOgKQAOgIAZAOQAaAPABAAQARgEAFgMIAGgPIADgBQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQACAGgIANQgIAOgKADIgJABQgOAAgUgJg");
	this.shape_33.setTransform(85.5,106.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-4.2,-3.9,0,-4.2,-3.9,19.7).s().p("AgnBHQhKg8gUg9QAcACAeAAQBZAABCgaIAggQIALgIIALgKIgyDHQghALgjAHQgagOgdgYg");
	this.shape_34.setTransform(53.7,85.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-6.4,-1.9,0,-8.3,-1.9,19.9).s().p("AgSAIIgJgIIAJgIQAJgFAJAAQAIAAAKAGQAKAHAAABQgBAFgIAEQgIAEgLAAQgMAAgGgGg");
	this.shape_35.setTransform(59.9,75.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.9,-1.5,0,-2.7,-1.5,12).s().p("AgqA8QACgYADgQQAJgmAUgUIAQgHIAigOIABAAQgcAUgPANIgWATIgGALQgHALgCAUIAAAOIAAABIAAAKIgFAAg");
	this.shape_36.setTransform(55,66);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],2.2,-0.9,0,1.4,-0.9,12).s().p("AgVBIIgFgBQgFABgCADIgFAEQAAgCgEgEIADgVQAAgJgHgVQgNgfgCgKIABAAQABAIAYAPQAMgPAXgaQATgTASgQIAZgHIAAAAIgjAhQgPANgEAIIAHABIARgIQgVATgIAmQgDARgBAYIgHABIgKAMQAAgGgDgBgAgQAxQABAGAEAFIADgCQABgJALgqIgIAUIgGAWQgDgLAAgGIAAgTIgDABQABAVgJAOIAAgBIgEgjQgBAFAAAIQAAAOABADQAAAMAEAEIACgBQAGgMAAgFIAAgDIAAALgAABgHIADgBIgFAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAg");
	this.shape_37.setTransform(50.9,65.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.2,0.5,0,1.2,0.5,3.7).s().p("AgKgEIAIgGQAGgFAFgJQACAGAAAFQAAAOgLAOIgIAKQAEgRgGgMg");
	this.shape_38.setTransform(67.1,72.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2,3,0,2,3,3.7).s().p("AgRAAQAPgDAGgJQADgCAAgEQAJAIACAKQgFAHgJAGIgGAGQgFgLgKgIg");
	this.shape_39.setTransform(66.2,70.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],5.9,-6.3,0,5.9,-6.3,19.7).s().p("AgVBcQgvgrgbg7QgVgyAAghIAaAHQAbAIAfAEQAUA/BJA6QAdAYAbAOQgtAJgvAAQgYAAgWgCg");
	this.shape_40.setTransform(43.6,87.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],16.8,-3.5,0,16.8,-3.5,19.7).s().p("AggBgIg1jYQAGAOAOAMQAQAOAcAKQAFAEAIACQABAhATAwQAbA9AvAqQg5gGg9gSg");
	this.shape_41.setTransform(32.7,85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],7.3,-0.2,0,5.4,-0.2,19.9).s().p("AiOAvQgIgCgGgEQgbgKgQgOQgBgUAMgSQAKgQAWgLQASASAgAAQAIAAAQgHQANgFAGgFQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAAAEQADAGAEABIASAAQASAAACgBQAEgBACgCQgBAJgEALIAFACIAJAFIAFAFQADAEAAACIAFgEQACgEAFAAIAGABQACAAAAAHIAKgNIAIAAIAFAAIALADIAHACIACABIAFAGQAEACAGAIIgJgCIgFgDQgQAAgDABQgFACgDAFQgEAEABAJIgKgKQgEgDgHAAQgLAAgCACIAAAMIgHgFIgIgIQgKgKgIAAQgIAAgJACQgLAHgKAEIAAgCQAFgLAFgEQAEgKAEgCIACgBQADgCALgCQAKgCAFACQgEgCgGAAIgTgBIgTADQgQACgRAAIgEgBQgSASAAAhQAAAMADAJIgbgHgACqgFQgLgLgLAAIgKACQgHADgKAAQgKAAgQgIIgPgJQgTAEgLgCIAAgNIAJgEIAFgFQACAGANAEQAIADAKAAQAaAAAFgSQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAIAVAcAAQAJAAAHgBQAKAJAFALQAGAMgEAQIgLAIQgDgVgPgJg");
	this.shape_42.setTransform(46.1,73.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],3.8,-2.1,0,1.9,-2.1,19.9).s().p("AhcAuQgfgDgbgIQgCgJAAgMQAAghARgSIAEABQARAAAQgCIATgDIATABQAGAAAFACQgFgCgLACQgLACgDACIgCABQgDACgFAKQgEAGgGALIAAACQAKgEALgHQAJgCAIAAQAIAAAKAKIAKAGIAHAFIAAgKQADgCALAAQAGAAAEADIAIAIQgBgHAFgEQACgFAFgCQAEgBAQAAIAEADIAJACQgGgJgDgDIgGgGIgCgBIgHgCIgKgDIAAgKIAAgCQALACATgEIAPAJQAQAIAJAAQAKAAAHgDIALgCQALAAALALQAPALACATIggAQQhBAahZAAQgfAAgcgCgABUgKIgJAIIAIAIQAHAGALAAQANAAAIgEQAJgFAAgDQAAgCgKgHQgKgGgJAAQgJAAgJAFg");
	this.shape_43.setTransform(49.6,75.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],3.9,-3.7,0,3.9,-3.7,5).s().p("AgNALIgCgHIAAgEQAAgTAQgRIAGATIAJARQgMAPABAWQgNgMgFgOg");
	this.shape_44.setTransform(25.5,71.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.4,-0.7,0,1.4,-0.7,5).s().p("AgQALIgGgSQALgKARgJQADAMAJAKIAFAEQgWALgIAQIgJgQg");
	this.shape_45.setTransform(28.1,68.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],6.6,0.1,0,5.8,0.2,12).s().p("AgFBPIgJgFIgEgCQADgLABgJQACgSgGgQIgGgOIgOgUQgUgXgbgHIAYAAIACAAIgDgLQgFgKgCgDIAAgBIAnAdIAeAXIBUg+IACgCQgEADgHATIAAABIACgBIAEAAQgSAQgUATQgYAagMAPQgWgPgBgIIgBAAQACAIANAhQAFAVAAAJIgDAVIgFgFgAAaA8IAAgLIAAADQAAAFgGAMIgCABQgEgEAAgMQgBgDAAgOQAAgIABgFIAEAjIAAABQAJgOgBgVIADgBIAAATQAAAGADALIAGgWIAKgUQgNAqgBAJIgDACQgEgFgBgGgAApABIAHAAIgDABQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_46.setTransform(46.5,64.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],6.3,-8.5,0,6.3,-8.5,35.8).s().p("AB3C4QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgFASgaAAQgKAAgIgEQgNgEgCgGIgGAGIgIADQACgUAGgMIAGgMIAYgTQAQgNAcgVIgCAAIghAPIgSAHIgQAJIgIgCQAEgHAPgOIAjggIAAAAIgZAGIgEABQABgLAGgHQAJgJAPAAQAOAAAGAOQAFANAGAAQAMAAAGAFQAFAFAAAMQAAAJgNAKQgPAJAAALQAAAHAIAFQAGAEAJAAQANAAAEgFIAGgOQAFAIAJAEQAHAEAEAAQAMAAAHgJQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAJAQAKQAQAJATACQgLAHgNAAQgQAAgJgGIgSgLQgBAMgGAJQgBADgCADQgJAJgPADQgGACgJAAQgcAAgJgVgAimC6IgFgFQgJgKgDgNQgDgIAAgKQgJADgIAAQgjAAgUgiQgNgaAAgiQAAgoAhgZQAfgZAVAEIABAAQgVgLgHgFQgKgJAAgTQAAgRAMgHQAIgGAKABQgHgCgDgKQgEgLAAgMQAAgWAcgYQAHgIAKgFQgJASAAAbQAAARALAJQAJAHAKgCIABABQgRAOgFAFQgJAIAAAOQgBANAHAIQAGAKAOgBIgXARQgGAHAAASQAAATAJAKQAHAHAIgCIAAAAIgTAUQgNAMAAAJQAAAQAMAJQAJAJANAAQAOAAADgQQAEgOALgCQgBABAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAgBQAAAAAAAAQAAgBAAgBQAAgHALAFQANAFAIAPIAAACQAFgNAGgGQAFgEAGAAQALAAAIAOQAEAHADASIgogdIAAACQACACAFAKIADALIgCAAIgXAAQAaAHAVAYIANAVIAGAPQAGAQgCARQgBADgEABQgDABgRAAIgSAAQgEgBgDgHIAAgDQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgGAFgOAGQgQAHgHAAQggAAgSgTg");
	this.shape_47.setTransform(47.2,50);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-11.7,8.6,0,-11.7,8.6,35.8).s().p("ABrBzQgJABgUADIAOgQQALgQAAgXQAAgfgaAAQgSAAgHAIQgEAGgGAPIAAgBQgDgIgLgDQgIgDgHAAIAAgBQAHgIAEgJQAIgNAAgMQAAgJgFgJQgGgIgKgBQgLAAgCANQgEAHgBAQQgBgHgIgFQgEgBgJAAQgFAAgGAEIAAgCQAHgRAAgTQAAgbgVgTQgVgUggAAQgTAAgOAFIAHgHQASgSAXAAQAcAAAeAbQAeAbgJAYQAEgJAOgIQAOgFAMAAQAUgBALALQAKALAAARQAAAQgIAKQgDAGgKAKIAAACQAEgDAIgEQAJgFAGAAQAdAAALATQAJANAAAYQAAAQgQARQgHAIgHADIAKAAQARAAARAPQgOgFgUgBg");
	this.shape_48.setTransform(65.2,33);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-4.8,-0.7,0,-4.8,-0.7,35.8).s().p("ABXDDQgJgLAAgTQABgKACgOIADgMIgGAFQgIAHgKAAQgLAAgIgHQgLgGAAgPQAAgKALgLQALgKAAgHQAAgIgIgHQgLgIgSAAQgOAAgGAJIgEAHQAAgIgFgJQgJgOgSAAQgZAAgLAPQgIAKAAAVIgBAAQgCgIgKgKQgLgLgMAAQgRAAgGAdQgFAdgQAAQgNAAgJgHQgMgJAAgRQAAgKAEgJQADgJAGgCIgBAAQgRAEgMgHQgMgGAAgQQAAgOAVgNIASgKQgGAAgHgDQgOgGAAgSQAAgUAggSIA9gcIgBAAQgQgBgPgHQgegNAAglQAAgSAKgPIAAgCQAKgDAKAAQAZAAAYAMQAOAFAGAHQAFAFACAGIABAFIAAgDIgBgCQAAgJAJgMQAOgFASAAQAhAAATAUQAVATAAAbQAAATgHAUIAAABQAGgFAFAAQAIAAAFADQAIAEABAHQABgRADgIQAEgMAMAAQAJAAAGAJQAGAIAAALQgBAMgHAOQgFAIgGAJIAAAAQAGAAAJADQAKADAEAIIAAACQAGgQADgGQAIgIASAAQAaAAAAAgQAAAWgLAOIgOAQQAUgDAIAAQAVAAAOAFIAAAAQASASAAAUIgBAGQgCAKgKAKIgBABQgGADgMAAQgKAAgHgEIgKgGQAAAEAGARQAFASAAALQAAAKgHAGQgHAHgJAAQgGAAgEgCIgFgCQAAAJgLASQgOAVgLAAQgNAAgHgIg");
	this.shape_49.setTransform(58.2,42.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-2.4,-3.3,0,-2.4,-3.3,35.8).s().p("ACWDXQgQgKgBgJQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAQgHAJgMAAQgEAAgHgEQgJgEgFgIIgGAOQgEAFgNAAQgJAAgGgEQgIgFAAgHQAAgLAPgJQANgKAAgJQAAgMgFgFQgGgFgMAAQgGAAgFgNQgGgOgOAAQgOAAgIAJQgGAHgBALIgCAAIAAgBQAHgTAEgDIgCACIhUA+IgfgXQgDgSgEgHQgIgOgLAAQgGAAgFAEQgGAGgFANIAAgCQgIgPgNgFQgLgFAAAHQAAABAAABQAAAAAAAAQAAABAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABgBQgLACgEAOQgDAQgOAAQgNAAgJgJQgMgJAAgQQAAgJANgMIATgUIAAAAQgIACgHgHQgJgKAAgVQAAgSAGgHIAXgPQgOABgGgKQgHgIABgNQAAgOAJgIQAFgFARgOIgBgBQgKACgJgHQgLgJAAgRQAAgbAJgSQASgLAVAAQALAAAOAIIAOAKQgEgHgBgGQgEgLAAgLQAAgWAPgNQAGgHAIgDIAAACQgLAPAAASQABAlAeANQAOAHAQABIABAAIg8AcQghASABAUQAAASAOAGQAGADAGAAIgSAKQgVAPABAOQAAAOAMAGQAMAHAQgEIABAAQgGACgDAJQgDAJAAAKQAAARALAJQAJAHAOAAQAPAAAFgdQAGgdASAAQALAAALALQAKAKACAIIACAAQAAgVAHgKQALgPAaAAQARAAAHAOQAFAJAAAIIAFgHQAIgJAOAAQASAAAKAIQAJAHAAAIQAAAHgLAKQgLALAAAKQAAAPALAGQAHAHAMAAQAJAAAJgHIAGgFIgEAMQgCAOAAAKQAAATAJALQAGAIANAAQALAAAPgVQAKgSAAgJIAGACQADACAHAAQAJAAAHgHQAGgGAAgKQABgLgFgSQgGgRgBgEIAKAGQAIAEAJAAQANAAAFgDQgLAMgKACIAAAAQAdAEAKAGQAOAGAAASQAAATgTANQgQALgcACQADADABAEIAAALQAAAVgQARQgEAGgGAEQgTgCgQgJgAipiOIAAgBIgCgCIACADg");
	this.shape_50.setTransform(55.9,44.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#47B957").s().p("AFIDcQhbhbAAiBQAAiABbhbQBchcCCAAQCAAABbBcQBcBbAACAQAACBhcBbQhbBciAAAQiCAAhchcgAtchAIB4gRIgKDfIBigUIAFBwIjSAWgABnhGIBagHIgDFAIhUAHgAhYDxQgXgKgRgQQgQgQgJgVQgKgVAAgYQAAgeALgYQAJgXAQgRQARgQAWgJQAVgIAZAAQAogBAcAVQAdAUAOAiIh2BaQAFACAHABIAOABQARAAALgGQANgHALgJIAnBBQgZASgZAHQgYAIghAAQgbAAgWgJgAg6BOQgGADgEAGQgFAGgDAGQgDAIABAIIABAKIACAGIA8gtQgHgHgGgCQgGgDgJAAQgIAAgHAEgAoyDxQgXgKgQgQQgRgQgJgVQgJgVAAgYQgBgeALgYQAJgXARgRQAPgQAXgJQAVgIAZAAQAogBAeAVQAdAUAPAiIh5BaQAFACAIABIAMABQATAAANgGQAMgHAKgJIAoBBQgZASgZAHQgaAIghAAQgbAAgWgJgAoUBOQgGADgFAGQgEAGgDAGQgCAIgBAIIABAKIADAGIA7gtQgFgHgGgCQgIgDgIAAQgIAAgHAEgAmIAMIBWgGIAXCdIABAAIAaidIBXAGIg3DnIhzAHg");
	this.shape_51.setTransform(150.1,151.3,1,1,0,0,0,55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(4));

	// BG
	this.instance_1 = new lib.frame01("synched",0);
	this.instance_1.setTransform(94.5,94.5,1,1,0,0,0,94.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// Layer 2
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFCC00").ss(3,0,1).p("AtgtCIAAgBQh9AzAFCLIAAYQQAAABAAABQAAAAAAABQABAWAFAWQAeClCsgDIYQAAQArAAAqgPQACAAABgBQCAgzgHiQIAA4OQAAgtgQgpQgBgBAAgBQgwh3iBgCQg6gihJAAQgchLg+gsIAAAAQgLgIgMAAQgMAAgLAHIABAAQg+AogdBJQgBADgCAEQAAAAgBAAQhIgBg5AjIgxAAQAGgIAEgIQANgcgHgfQgDgMgIgIIgBgBQgJgKgMgBIABAAIh4gVQgchQhBgtIABAAQgLgIgNAAQgJAAgKAGIgBAAQhAAqgdBPQhOAAg+AnQgLAHgFAOQgFAMAFAOQADAJAEAKQAHAOAIANIg3gBQg7gdhEgBQgBAAgBAAQgCgHgDgHQgchCg5goIAAAAQgLgIgNAAQgNAAgLAIIABAAIggAXQAAAAAAABQgIAFgEAIIABAAIgrBSQhOgDg7AmQgmAEgjAPg");
	this.shape_52.setTransform(94.6,81.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("AvSO6QgFgWgBgWIAAgBIAAgCIAA4QQgFiLB9gzIAAABQAjgPAmgEQA7gmBOADIArhSIgBAAQAEgIAIgFIAAgBIAggXIgBAAQALgIANAAQANAAALAIIAAAAQA5AoAcBCIAFAOIACAAQBEABA7AdIA3ABQgIgNgHgOIgHgTQgFgOAFgMQAFgOALgHQA+gnBOAAQAdhPBAgqIABAAQAKgGAJAAQANAAALAIIgBAAQBBAtAcBQIB4AVIgBAAQAMABAJAKIABABQAIAIADAMQAHAfgNAcQgEAIgGAIIAxAAQA5gjBIABIABAAIADgHQAdhJA+goIgBAAQALgHAMAAQAMAAALAIIAAAAQA+AsAcBLQBJAAA6AiQCBACAwB3IABACQAQApAAAtIAAYOQAHCQiAAzIgDABQgqAPgrAAI4QAAIgHAAQilAAgeiig");
	this.shape_53.setTransform(94.6,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,189.2);


(lib.pbLevel_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(93.1,92.6,0.799,0.799,0,0,0,54.3,61.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().rr(-112,-112,224,224,20);
	this.shape.setTransform(94.5,94.5,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

	// txt
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjPDoIAJhbQgCgPAKgRQALgRASgSQASgRAYgSIAxgiIAvgfQAXgQAQgOQARgNAJgLQAJgLgEgIQgGgJgVACQgUADgZALQgaALgcAOQgbAQgTANIhDh8QA9guA0gVQAzgVAmgDQAogCAfAJQAfALAVARQAWARAOARQAOASAGAMIAHAMQATAugMAlQgLAmgfAcQgeAdgqAYQgrAYgrAUICkAAIgVCWg");
	this.shape_1.setTransform(148.8,151.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// Graphic
	this.instance_1 = new lib.mcObstacle("synched",0);
	this.instance_1.setTransform(95,77.4,2.75,2.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47B957").s().p("AFIDcQhbhbAAiBQAAiABbhbQBchcCCAAQCAAABbBcQBcBbAACAQAACBhcBbQhbBciAAAQiCAAhchcgAtchAIB4gRIgKDfIBigUIAFBwIjSAWgABnhGIBagHIgDFAIhUAHgAhYDxQgXgKgRgQQgQgQgJgVQgKgVAAgYQAAgeALgYQAJgXAQgRQARgQAWgJQAVgIAZAAQAogBAcAVQAdAUAOAiIh2BaQAFACAHABIAOABQARAAALgGQANgHALgJIAnBBQgZASgZAHQgYAIghAAQgbAAgWgJgAg6BOQgGADgEAGQgFAGgDAGQgDAIABAIIABAKIACAGIA8gtQgHgHgGgCQgGgDgJAAQgIAAgHAEgAoyDxQgXgKgQgQQgRgQgJgVQgJgVAAgYQgBgeALgYQAJgXARgRQAPgQAXgJQAVgIAZAAQAogBAeAVQAdAUAPAiIh5BaQAFACAIABIAMABQATAAANgGQAMgHAKgJIAoBBQgZASgZAHQgaAIghAAQgbAAgWgJgAoUBOQgGADgFAGQgEAGgDAGQgCAIgBAIIABAKIADAGIA7gtQgFgHgGgCQgIgDgIAAQgIAAgHAEgAmIAMIBWgGIAXCdIABAAIAaidIBXAGIg3DnIhzAHg");
	this.shape_2.setTransform(150.1,151.3,1,1,0,0,0,55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1}]}).wait(4));

	// BG
	this.instance_2 = new lib.frame01("synched",0);
	this.instance_2.setTransform(94.5,94.5,1,1,0,0,0,94.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(3,0,1).p("AtgtCIAAgBQh9AzAFCLIAAYQQAAABAAABQAAAAAAABQABAWAFAWQAeClCsgDIYQAAQArAAAqgPQACAAABgBQCAgzgHiQIAA4OQAAgtgQgpQgBgBAAgBQgwh3iBgCQg6gihJAAQgchLg+gsIAAAAQgLgIgMAAQgMAAgLAHIABAAQg+AogdBJQgBADgCAEQAAAAgBAAQhIgBg5AjIgxAAQAGgIAEgIQANgcgHgfQgDgMgIgIIgBgBQgJgKgMgBIABAAIh4gVQgchQhBgtIABAAQgLgIgNAAQgJAAgKAGIgBAAQhAAqgdBPQhOAAg+AnQgLAHgFAOQgFAMAFAOQADAJAEAKQAHAOAIANIg3gBQg7gdhEgBQgBAAgBAAQgCgHgDgHQgchCg5goIAAAAQgLgIgNAAQgNAAgLAIIABAAIggAXQAAAAAAABQgIAFgEAIIABAAIgrBSQhOgDg7AmQgmAEgjAPg");
	this.shape_3.setTransform(94.6,81.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AvSO6QgFgWgBgWIAAgBIAAgCIAA4QQgFiLB9gzIAAABQAjgPAmgEQA7gmBOADIArhSIgBAAQAEgIAIgFIAAgBIAggXIgBAAQALgIANAAQANAAALAIIAAAAQA5AoAcBCIAFAOIACAAQBEABA7AdIA3ABQgIgNgHgOIgHgTQgFgOAFgMQAFgOALgHQA+gnBOAAQAdhPBAgqIABAAQAKgGAJAAQANAAALAIIgBAAQBBAtAcBQIB4AVIgBAAQAMABAJAKIABABQAIAIADAMQAHAfgNAcQgEAIgGAIIAxAAQA5gjBIABIABAAIADgHQAdhJA+goIgBAAQALgHAMAAQAMAAALAIIAAAAQA+AsAcBLQBJAAA6AiQCBACAwB3IABACQAQApAAAtIAAYOQAHCQiAAzIgDABQgqAPgrAAI4QAAIgHAAQilAAgeiig");
	this.shape_4.setTransform(94.6,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,189.2);


(lib.pbLevel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(93.1,92.6,0.799,0.799,0,0,0,54.3,61.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().rr(-112,-112,224,224,20);
	this.shape.setTransform(94.5,94.5,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

	// txt
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKDWIAjlCIg6AnIgyhSICChiIClACIhQHxg");
	this.shape_1.setTransform(149.2,153.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// Graphic
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.9,-0.7,0,0.9,-0.7,3.6).s().p("AgEAIIABgIIAGgLQAAgBABAAQAAAAAAABQAAAAABAAQAAAAAAABQABABgDAJIgEALIgCACIgBgFg");
	this.shape_2.setTransform(42.2,78.8,1.711,1.711);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,-0.3,0,0.7,-0.3,3.9).s().p("AgCgEQACgGADgEIACgBIACABQACACgFAJIgFAKIgFAJQABgOADgGg");
	this.shape_3.setTransform(45.3,78.2,1.711,1.711);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.1,0,0.5,-0.1,3.6).s().p("AgLAWQgBgFgBgGIAGgGIgBAJIACAFIABgCIAFgMQACgIgBgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAFgLIAEgMIAFACQgHAVgHAQIgHASIgEgHg");
	this.shape_4.setTransform(42.8,77.7,1.711,1.711);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.6).s().p("AgKAcIgBgCIAJgSQAGgQAHgVIABABQgJAVgCAOQgBALABAGIgFAEIgDACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_5.setTransform(43.4,78.2,1.711,1.711);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,2.9,0,-0.9,2.9,3.6).s().p("AAAADIgDgCIABgDIAGACIgCADIgCAAg");
	this.shape_6.setTransform(45.2,72.5,1.711,1.711);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-1.6,2.9,0,-1.6,2.9,3.7).s().p("AAAADIgCgDIACgDIAEADIgEAEIAAgBg");
	this.shape_7.setTransform(40.3,69.6,1.711,1.711);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.4,0,0,-0.4,0,3.6).s().p("AgVAfIAEgDQAMgKAIgQIALgSQgKgEgGgHIACgEIADACQAIAHALADIAAABIgCAFIgEALIgFAJIgJANIgEAGIgBAAQgHAGgGAAQgCAAgDgBg");
	this.shape_8.setTransform(40.9,75.3,1.711,1.711);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.4,0,0,0.4,0,3.6).s().p("AgDgCQADgGACgDQAEgEACADQADAEgJAIIgKAOIAFgQg");
	this.shape_9.setTransform(39.3,75.2,1.711,1.711);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.1,0,0.1,-0.1,3.6).s().p("AgRAbQgCgCABgHIAAgBQABgIAEgJQAGgPAJgOQAIAHAJAFIgLARQgIAQgMALIgDADIgCgDgAAAgNQgEAEgCAGIgGAPIAMgMQAIgKgDgDIgCgCIgDACg");
	this.shape_10.setTransform(39.9,75.5,1.711,1.711);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.1,-0.1,0,-0.1,-0.1,3.7).s().p("AgDAFQALgWAGgIIABAAQgKAOgFAOQgDAKgBAIIgIAFIgCAAIALgVg");
	this.shape_11.setTransform(37.6,74.8,1.711,1.711);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.2,-0.7,0,1.2,-0.7,3.7).s().p("AgFAJIgBgBIABgCIABgGIAAAAQADgFABgCQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIACABQACADgDAGQgCAEgDAFIgDACIgCgCg");
	this.shape_12.setTransform(35.3,75.8,1.711,1.711);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,0,0,0.5,0,3.7).s().p("AgQAZQgEgEABgKIAAgEQAKgGAJgHQAIgIAJgNIAEADQgHAJgNAVIgJAWIgDAAQgDAAgCgDgAgFAAQgDAAgDAGIAAABIgBAHIgBABIABABIACACIADgCQAFgEACgHQABgFgBgBIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_13.setTransform(36.6,74.6,1.711,1.711);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.1,0,-0.5,0.1,4.3).s().p("AgfAfIAAAAIANgJIAVgQQAPgLAEgGIACgEIgBgBQgGgGgDgHIAFgCIAKANIADAEIgDAFQgJALgKAIQgKAJgHAFIgHAEQgIAEgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_14.setTransform(34.6,71.5,1.711,1.711);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.9,1.3,0,-2.9,1.3,3.6).s().p("AgDgBIADgDIAEAHIgEACQgCgEgBgCg");
	this.shape_15.setTransform(37,65.3,1.711,1.711);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.5,0.3,0,-3.5,0.3,3.8).s().p("AgBABIAAgBIADAAIAAABIgDAAg");
	this.shape_16.setTransform(35.7,60.9,1.711,1.711);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.3,0.9,0,0.3,0.9,4.3).s().p("AgLAFQAFgFAFgDQAHgIAGAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAABQACACgCADIgGAFQgGAEgIAEIgMAFQABgEAEgEg");
	this.shape_17.setTransform(33.2,70.2,1.711,1.711);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.1,0,0,0.1,4.3).s().p("AgcAPQABgHAEgGQAEgFAGgFIACgDQALgJAQgIIADgBQAEAGAFAGIABACIgCAEQgEAGgPALIgUAQIgOAJQgDgGABgKgAAJgUQgGABgGAIQgGADgEAHQgEACgCAEIAMgFQAJgCAGgGIAGgFQABgEgBgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIgCAAg");
	this.shape_18.setTransform(33.6,71.6,1.711,1.711);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1,-0.6,0,1,-0.6,3.6).s().p("AgKADIAEgDQADgDAGgBQAHgBABACIAAADIgDADQgDACgGAAQgHAAgCgCg");
	this.shape_19.setTransform(30.4,68.5,1.711,1.711);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.8,-2,0,1.8,-2,3.6).s().p("AgCAEIgGgEQgCgBgBgDIAGABQAFABAJgCIADAAQgHAEgDAFIgEgBg");
	this.shape_20.setTransform(29,70.9,1.711,1.711);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0,0,0,0,3.6).s().p("AgXAPIgFgBQgBgFAEgGIACgDIAIAAQATgCAUgMQACAEADAEIgEACQgRAGgKAJIgCADIgCAAIgKABIgHAAgAgFAAQgHABgEADIgEAFQADACAHAAQAHAAADgCIABgEIABgEIgCgBIgFAAg");
	this.shape_21.setTransform(32,67.5,1.711,1.711);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.9).s().p("AgaATQgHgBgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEAAQAHAAAJgCQAVgFAVgKQgDgHAAgHIgBAAIAGAAQAAAFADAGIACAGIgFACQgUAMgTAEIgIABIgJAAg");
	this.shape_22.setTransform(31,64.4,1.711,1.711);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.9,0.5,0,0.9,0.5,3.9).s().p("AAFgDQAKgEADADQACACgEACQgCABgOACIgRAEQAOgHAIgDg");
	this.shape_23.setTransform(29.7,64.1,1.711,1.711);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.9,-1.2,0,1.9,-1.2,3.8).s().p("AgBAGQgGgCgEgEIgDgFIAPAFQAFAAAJgBQgLADgEAEIgBAAg");
	this.shape_24.setTransform(26.4,63.5,1.711,1.711);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,0.6,0,0.5,0.6,3.9).s().p("AgeAQIAAgDQACgFAFgEIABgBQAFgDALgEIALgFQAOgFAJgBIABAAQAAAHADAHQgVAKgVAFQgJACgHAAIgDAAIgBAAgAABgDQgIADgOAHIATgEQAMgCACgBQAEgCgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgDAAgGACg");
	this.shape_25.setTransform(30.3,64,1.711,1.711);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,0.8,0,0.7,0.8,4.3).s().p("AAAAEIgTgDQASgEAJAAQAJgBACADQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBACQgDACgHAAIgJAAg");
	this.shape_26.setTransform(30,56.2,1.711,1.711);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.5,0.1,0,1.5,0.1,3.8).s().p("AAAAEIgLgCIABgCQACAAADgBIAFgCIAGAAIAFABIAAAAQABABgDACQgEADgFAAIAAAAg");
	this.shape_27.setTransform(27,61.2,1.711,1.711);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0,0,0.1,0,3.8).s().p("AgPAKIgRgFIAAgBQAAgEAEgCQAGgFAFgCQAFADAGACIgGAAIgHACQgDABgCABIgBABIALACQAGAAAFgDQADgCgBgBQAQADASgCIAAACQgJAAgOAEIgLAFIgJABIgFAAg");
	this.shape_28.setTransform(29.4,61.5,1.711,1.711);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,-2.7,0,-0.9,-2.7,3.7).s().p("AgDAEIgCgEIAEgCIAFgBIACAEIgCABIgGADg");
	this.shape_29.setTransform(45,46.2,1.711,1.711);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.2,0,0.5,-0.2,4.3).s().p("AgGAPIgBAAIgEgBQgHgCgFgDIgCgBQgHgEgEgEQAAAAAAAAQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIACADQAIAHAYADQARADAOgEIAAgHIADgQIAAAAIACAAIAFADQgEAIgBAGIAAAFIAAAIIgFACQgJABgIAAQgKAAgHgCg");
	this.shape_30.setTransform(30.4,58,1.711,1.711);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.2,-0.4,0,-3.2,-0.4,3.9).s().p("AgBADIgCgBIADgGIAEACIAAABIgCADIAAACIAAABIgDgCg");
	this.shape_31.setTransform(36.5,54.5,1.711,1.711);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.3,0.8,0,1.3,0.8,3.9).s().p("AAAAEIgLgDIgBgBIACAAIAEgCIACAAQAGgCADAAQADABADADQADABgCADIgFABIgHgBg");
	this.shape_32.setTransform(28.7,52.4,1.711,1.711);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.8,0.2,0,0.8,0.2,4.3).s().p("AAAAMQgYgCgIgKIgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAKgCIAAAAIAWgEIAGgBQAQgBAJACIAAABIgDAPIAAAIQgHACgJAAIgPgCgAAJgKQgJAAgSAHIASACQAQABAEgCIABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBgCgHAAIgDAAg");
	this.shape_33.setTransform(29.8,57.2,1.711,1.711);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.7,-0.2,0,1.7,-0.2,3.9).s().p("AgQAAQgCgEABgEQAEAFAQADIAQADIgGABIgWAEIAAAAIgHgIg");
	this.shape_34.setTransform(28.1,54.1,1.711,1.711);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.5,0,0.3,0.5,3.9).s().p("AAEALIgOgDQgRgGgFgCIACgDQAGgEAMgDIAIgBQAHAGAOAFIAQADIgDAJQgKgCgQABgAgOgFIgCAAIgFACIgBABIAAACIAMABQAKABABgBQACgBgCgDQgBgDgDAAIgCgBIgJACg");
	this.shape_35.setTransform(30.5,52.9,1.711,1.711);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.1,0.5,0,0.1,0.5,4).s().p("AAAABIgMgHIAEABIAJAEIAHABIADADIACACIgCACIgBAAQgEAAgGgGg");
	this.shape_36.setTransform(33.3,48.8,1.711,1.711);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,4).s().p("AARAQIgQgEQgMgGgJgGQgIgDgEgEIgDgHIAAgDIAAgBIAAABIAEAFQAFAGARAGQAQAJANAAIAJgKIABgBIAHACIgCAAIgBACIgHAKIgEAGIgGgCg");
	this.shape_37.setTransform(33.3,50.6,1.711,1.711);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.5,-1.7,0,-2.5,-1.7,3.8).s().p("AgEAAIAEgDIAEADIAAAAIABAAIgDADIgCABIgEgEg");
	this.shape_38.setTransform(39.5,49.8,1.711,1.711);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.4,0.2,0,0.4,0.2,4).s().p("AgGAIQgRgIgFgFIgEgEIAAgBIABgDQAHgFASAEQAGACAIAEIAIADQAHADAHADIADACIgBABIgJANIgBAAQgNAAgPgJgAABAAQALAFADgCIABgCIgBgBIgDgBIgHgEIgJgDIgFgBIAKAJg");
	this.shape_39.setTransform(32.8,49.3,1.711,1.711);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,1.4,0,0.5,1.4,3.8).s().p("AAAAEIgHgEIgCgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAEgBAEACQAHADACABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEABQgDAAgDgCg");
	this.shape_40.setTransform(34.4,44.4,1.711,1.711);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.4,0.8,0,1.4,0.8,3.8).s().p("AAHAMQgHgEgGgBQgGgHgCgFQgCgGAEgEIABAAIAAADIAGAJQAGAIANAKIABABIgIgEg");
	this.shape_41.setTransform(32.8,45.5,1.711,1.711);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.8).s().p("AARAUQgHgFgHgDIgCgBQgKgKgJgHIgGgKIAAgDQAFgDAQAEIAIADQAGAPAJAKIAFAGIgFAGIgDgCgAgMgQQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIACADIAIAFQAFAFAEgDIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgCgDgGgCIgIgCIgCAAg");
	this.shape_42.setTransform(35,46.2,1.711,1.711);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,3.9).s().p("AADAhIgDgFIgFgGQgJgKgGgPIgBgCQgIgVAHgFIAAgBIACAAQABAPAIARQAHAOAHAKIABgBQAKgIAKgFIACAGIABABIgFACQgIAEgGAGIgBAAIgEAEg");
	this.shape_43.setTransform(39.7,44.1,1.711,1.711);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,0.3,0,-1.2,0.3,3.9).s().p("AACAOIgCgCQAAgCgDgLIgDgNIAEAEQAFAJADAGQACAIgCABIgCABIgCgBg");
	this.shape_44.setTransform(41.4,43.3,1.711,1.711);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.4,0.3,0,-0.4,0.3,3.9).s().p("AgMAEQgJgQAAgPQADgBAHADQAIADADAEIAHAHIADADQAFAHAEAHIABADIACAGQgKAEgKAIIgBABQgHgJgGgPgAADgBQADALABACIADACQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQACgBgCgIQgDgGgHgJIgEgEIADANg");
	this.shape_45.setTransform(40,43.3,1.711,1.711);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.5,1.7,0,1.5,1.7,3.7).s().p("AACAOIgFgHIgBgJQABgKADgDQAAgBAEAAIAAABIgBAOQAAAKACAIIgDgDg");
	this.shape_46.setTransform(40.9,38.7,1.711,1.711);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,1,0,0,1,3.7).s().p("AAAAMQgCgEgBgIQgBgJABgDIABABQAFAHABAGIABAEQAAAFgCACIgBAAIgCgBg");
	this.shape_47.setTransform(43.6,39.9,1.711,1.711);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,0.4,0,-0.1,0.4,3.7).s().p("AAAAXIAAgDQgEgJgFgHQgCgGAAgMIABgOIAAAAIAEACQAFACAFAHIgBAEIAAAMQgBgIgEgIIgCgBQgBADABAJQACAIACAEIABACIACgBQACgCgBgFQACAMAGAOIgGABIgFACIgBgGg");
	this.shape_48.setTransform(43.6,40.9,1.711,1.711);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,-0.8,0,0.5,-0.8,4).s().p("AgDADIAEgPIACABQACADgBAIQgCAJgCAEQgCgEgBgGg");
	this.shape_49.setTransform(48.9,80.7,1.711,1.711);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-0.9,0,0.6,-0.9,3.9).s().p("AACAPIgBgBIgBgDIAAgEQgDgHAAgHQAAgFACgCQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQADACAAAMIgBAOIAAAAIgBAAg");
	this.shape_50.setTransform(52.3,79.4,1.711,1.711);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,-1.2,0,0,-1.2,4.1).s().p("AABAOIgCgEIgBgBQACgJgDgLIAAAAIABgBIABgBIABABQAAADADAJQACAMgCACIgBAAIgBAAg");
	this.shape_51.setTransform(57.1,80,1.711,1.711);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.5,-2.3,0,-1.5,-2.3,4.1).s().p("AgBANIAAgBQABgMgFgMQADAEAIAFIAAAAIgCAIQgBAFgCACIgBABIgBAAg");
	this.shape_52.setTransform(59.7,82,1.711,1.711);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,1.5).s().p("AgHgIIABABQAGAEAHAJIABAAIgNADQABgJgDgIg");
	this.shape_53.setTransform(69.7,72.2,1.711,1.711);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.2,0.1,0,-0.2,0.1,1.5).s().p("AAHAKIgBgBQgGgJgHgDIgBgBIgBgFIAPAFIADAFQACAGgDADIgBAAg");
	this.shape_54.setTransform(69.8,71.5,1.711,1.711);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.9,-1.6,0,-0.9,-1.6,4.3).s().p("AAHAKIAAAAIgPgFQgFgHgHgJIATALQALAHALAEIgDABIgLgCg");
	this.shape_55.setTransform(69.6,68.8,1.711,1.711);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1.3,-0.1,0,-1.3,-0.1,4.3).s().p("AABAHIgJgIQgDgDAAgCIABgDIADgBIABABIAGADQAFAFADACIAEAGQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABQgDAAgFgEg");
	this.shape_56.setTransform(70.2,66.3,1.711,1.711);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.6,1,0,-0.6,1,4.4).s().p("AAJAIQgGAAgFgDQgOgFgBgCIgBgDIABgCQALgDALAHQAJADADAEIACADIgCACIgIgBg");
	this.shape_57.setTransform(70.1,59.9,1.711,1.711);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.6,-1.7,0,-1.6,-1.7,3.8).s().p("AAAANIgCgPIgDgLIAFAHQADAGADAAIgBAEQgCAJgBABg");
	this.shape_58.setTransform(64.5,76.5,1.711,1.711);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-1.1,0,0.6,-1.1,4.3).s().p("AACALIgCgCQgDgGAAgFQgBgFACgDIACACQADAGABAGQABAGgBABIgBAAIgBAAg");
	this.shape_59.setTransform(59,77.7,1.711,1.711);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.2,2.7,0,1.2,2.7,3.8).s().p("AAAACIgCgCIACgCIACACIgCADIAAgBg");
	this.shape_60.setTransform(59.6,69,1.711,1.711);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.8).s().p("AAHAaIgEgQQgEgPgGgLIgFgIIADgDIAFAIIABACIALARIADALIACARg");
	this.shape_61.setTransform(61.9,73.9,1.711,1.711);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0,-1.5,0,0,-1.5,4.4).s().p("AADALIgCgBQgEgHgBgGQgCgGABgDIAFAEQADAHACAGQACAGgBACIgDgCg");
	this.shape_62.setTransform(64.4,72.9,1.711,1.711);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.6,-0.3,0,0.6,-0.3,4.3).s().p("AAKAdIgBAAQgJgFgBgEIgBgCQgEgGgGgNIgEgNIgBgEIgBgDIAJgFIAIgGIABAFIADAHIADAGIAGAOQAJAVgCAMQgDgBgGgDgAgDAFQAAAHADAFIACADQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgCgBgFQgBgIgDgFIgCgCQgCACABAFg");
	this.shape_63.setTransform(59,76.2,1.711,1.711);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.3,3.4,0,1.3,3.4,4.1).s().p("AgDAAIAGgCIABACIAAABIgEACIgDgDg");
	this.shape_64.setTransform(54.9,72.1,1.711,1.711);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.1,0,0.3,0.1,4.3).s().p("AAQAlQACgLgIgXIgHgNIgDgGIgBgHIgDgFIgHAGIgKAFIAAgBIgBgEQAJgEAIgHIAEgDIABACIAAABIAFAIQAHALAGAPIAEAQQADAPgGAFIgCAAIgBAAg");
	this.shape_65.setTransform(59.5,75.5,1.711,1.711);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.2,0,0.1,-0.2,4.1).s().p("AALAiQgFgCgFgHIgBgEIgBAAIABgCIAAABIADAEIACAAQABgCgCgMQgCgKgCgCIAAgBIgBABIgBABQgCgOgGgMIgCgEIAGgCIABADIABAEIAEANQAEANAEAGIABACQAFALgBAOIAAABIgCAAg");
	this.shape_66.setTransform(56.9,78.3,1.711,1.711);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,3.9).s().p("AAFAgQgFgBgDgFIgCgCQgEgIgBgPIgEgeIAOgCIAHANIAHASQACAKgDALQgCAGgEAFIgBAAIgBAAgAgFgKQgDABABAGQAAAEADAKIABAEIABACIABABQABAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAIAAgNQAAgMgBgCIgDgCIgBABg");
	this.shape_67.setTransform(53,78.8,1.711,1.711);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.9).s().p("AAKAYQADgKgCgKIgGgTIgFgMIgQACIgBgGIAJAAIALgDIADAEIACAEQAGALACAPIABAAQACAKgBAJIgBACQgBAHgFAEQgDADgEAAQAEgEACgHg");
	this.shape_68.setTransform(53.5,78.2,1.711,1.711);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.6,-0.3,0,-0.6,-0.3,4).s().p("AgFAjQACgLABgQQABgWgBgVIABAAIACAgQABANAEAIIgCAFIgEAKIgEADIgBgBg");
	this.shape_69.setTransform(50.9,79.8,1.711,1.711);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.3,0,0.5,-0.3,4).s().p("AABAgIgFgMIgDgGIAEgFQABAFACAFQACgFACgJQABgIgCgDIgCgBIAAgBQADgOgCgMIAFAAQACAUgCAWQgBAQgCAMIgDgEg");
	this.shape_70.setTransform(48.9,79.8,1.711,1.711);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0,3.5,0,0,3.5,4).s().p("AgCgBIAEAAIABADIgBAAIgDAAIgBgDg");
	this.shape_71.setTransform(49.8,73.2,1.711,1.711);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.9).s().p("AgLAbIgCgEQgCgGACgLQACgNAJgWIAPADIACAAQABAUgIAOQgHAMgJAKIgDgDgAAAgPQgEAEgDAHQgDAFgBAOIAGgJIAFgJQAEgKgCgCIgBgBIgBABg");
	this.shape_72.setTransform(46.1,78.3,1.711,1.711);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,3.9).s().p("AgKAiIgDgDQALgKAFgMQAIgOgBgUIgCAAIgPgDIADgFIANADIAEAAIABAFQABANgCAMIgBAAIgGASIgEAGIgFAJIgEABIgDAAg");
	this.shape_73.setTransform(47,78.2,1.711,1.711);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.7,-0.6,0,0.7,-0.6,8.1).s().p("AABBNIgNgCIgIgDIAAgBQgKgDgIgHIgEgCIgEgEIgEgEIgKgNIgEgKIgDgHQgCgGgBgFIAAgEIAAgHIAAgEQABgJAEgHIAAgBIAAgDIACgFIAAgBIAEgHIAHgKIABgBIACgBIACgBIACgDIgBgBIAFgDIAAAAQAHgHAHgDIAFgDIAJgDIACgBIAKgBIgDABIgIADIgJAHIgJAGQgcAZAAAcQABAWALAQQAMARAPAJQAOAJAFAAQAGABAGgBIAOgBQAYgDAUgRIABgBIgGAHIgDAEIgEADQgIAGgJAFIgIAEIgNADIgJAAIgGAAIgEAAg");
	this.shape_74.setTransform(48.3,59.4,1.711,1.711);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.1,-0.6,0,0.1,-0.6,3.2).s().p("AgBAXQgMgBgIgKQgIgJABgLQAAgIAFgGQgDAGABAHQACAJADADQAHAIANACQAOACAOgMIABgBQgCAIgHAGQgJAHgLAAIgBAAg");
	this.shape_75.setTransform(49.2,60.4,1.711,1.711);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-0.2,1.4,0,-0.2,1.4,3.2).s().p("AgBAGQgFgCgDgDIgCgCIAAgBIACgCQAEgDAGABQAHAAADADQACADgBABQgBACgCACQgDACgDAAIgEgBg");
	this.shape_76.setTransform(49.7,56.9,1.711,1.711);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.1,0.4,0,-0.1,0.4,3.2).s().p("AgCAXQgNgCgHgIQgDgEgCgJQgBgGADgGIAFgGIACgBIAFgDQgHAGAAAJQAAAHAFAGQAGAHAJAAQAIAAAJgHQAEgEABgCIACgKQAFAIgBAIIgBAHIgBAAQgMAKgNAAIgDAAg");
	this.shape_77.setTransform(49.6,58.7,1.711,1.711);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.7,0,0.2,-0.7,4.4).s().p("AAKAfIgCgCQgDgCgFgGIgEgHIgMgRIgBgCIgGgIQAJgJAGgKIADACQAFAFAKANQAKAMACAOIABAGQgCAHgEAFIgDABQgCAAgCgCgAgDADQACAIADAHIACABIADACQABgCgCgGQgBgIgFgFIgEgEQAAADABAEg");
	this.shape_78.setTransform(64.2,71.5,1.711,1.711);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.2,0.5,0,0.2,0.5,4.4).s().p("AAXAbQgCgQgLgLQgKgMgFgFIgDgCQgGAKgIAJIgDgEIAGgHQAHgKADgLIACABIADACIAEAEIAIAJIADACQAHAJAEAHIACAFQADAJgBAKIAAABIgCAGIgBgGg");
	this.shape_79.setTransform(64.1,69.4,1.711,1.711);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,4.3).s().p("AAEANIgRgNIgCAAIgJgJIgFgEIAAgDIACgHQAOAGANAFIABAAIgBABIAAACQgBADABADIALAIQAIAGACgDQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBgBIgEgFQgCgDgIgFIgFgDIABAAIAGACIADAAQAFAEAEAFQAHAHABAJQAAAGgCACQgLgEgNgHg");
	this.shape_80.setTransform(68.4,66.6,1.711,1.711);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,1.8,0,2.9,1.8,4.3).s().p("AgBAEIgBgBIABgDIABgFIADADIgCAFIAAADIgCgCg");
	this.shape_81.setTransform(63,63,1.711,1.711);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.6,0.6,0,-0.6,0.6,4.4).s().p("AgUAKQgIgDgGgFIAAAAIAAgCQABgHgBgHQAPgEATAGIALAEQANAGAIAHQAEAFgBAGIgPAAQgYAAgQgGgAgRgLIgBADIABACQABACAPAFQAEADAGABIAJAAIACgBIgDgEQgCgBgJgFQgIgFgJAAIgGAAg");
	this.shape_82.setTransform(70,60.5,1.711,1.711);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.7,-0.3,0,-0.7,-0.3,4).s().p("AACAEQgSgEgQACIAAgDQANABAZgDIAXgFIACABQACAEAAACIgCABQgDADgIADIgGACIgMgEg");
	this.shape_83.setTransform(69.5,57.4,1.711,1.711);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,-0.1,0,2.9,-0.1,4).s().p("AgCgEIAEAAIABAEIAAAFIgDAAIgCgJg");
	this.shape_84.setTransform(63.3,57,1.711,1.711);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.3,0,0,-0.3,0,4.4).s().p("AAHATIgDgBIgEgBIgBgBIgCAAIgCgBQgOgEgOgGIgEgDIABgHIAAgOIAFgBQABAHgBAIIAAADIAAAAQAGADAIADQATAIAkgCIAAAAQAAAHgEADQgCABgIAAIgRgCg");
	this.shape_85.setTransform(69.5,61.5,1.711,1.711);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],4,-0.5,0,4,-0.5,3.9).s().p("AADAHIABAAIABgBIAEgCIAEAFIgDADIgCABIgFgGgAgMgKIACgCIgBADIgBgBg");
	this.shape_86.setTransform(59.5,49.9,1.711,1.711);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-0.2,1,0,-0.2,1,3.2).s().p("AgQANQgGgHAAgHQAAgJAHgGQAHgDAIABQALABAJAJIADAEIAAABIgDAJQgBADgDADQgKAHgHABQgKgBgFgGgAgJgIIgDADIAAAAIADAFQACAAAFACQAGADAEgEQADgBAAgBQABgDgCgCQgCgDgIgBIgBAAQgGAAgCACg");
	this.shape_87.setTransform(49.8,57.5,1.711,1.711);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,0.9,0,-0.2,0.9,4.6).s().p("AgNAeQgGgOgBgLIgBgEIgBgJIABgFQACgNALgJIABAAIgCAIQgDAMABAPQAAALAHANIACAEQAHgBAJABQAFAAAEAAIAAAHIgIgBQgIAAgHABIAAAAIgKABIgDgGg");
	this.shape_88.setTransform(48.2,40.1,1.711,1.711);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.6,0,0,-0.6,0,8.1).s().p("AgMBJQgGgBgOgJQgPgJgMgQQgLgRgBgWQAAgcAcgZIAIgGIAKgGIAHgEIADgBIADAAQAHgBAFAAIAIABIABABIAMADQgPgEgOAEIgBAAQgIAEgGAFQgaAWABAgQABAXAOARQAJAMASADQAPAFAJgEQAKgEAGgEIAKgIQAFgEAFgJQAHgKADgKQAGgOgDgMIADAJIACAMIAAANIgBAIIgCAGIgBAFQgEALgGAJIgCABQgTARgZADIgMACIgGAAIgGAAgAAVhDQAJACAIAFIAAABIAGAEQgLgIgMgEg");
	this.shape_89.setTransform(50.6,58.6,1.711,1.711);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0.1,-3.2,0,0.1,-3.2,3.7).s().p("AAAACIAAgEIAAABIAAABIAAAAIAAADIAAgBg");
	this.shape_90.setTransform(52.3,45.7,1.711,1.711);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-2.8,4,0,-2.8,4,8.1).s().p("AgEAAQgEgFgHgFIgJgGQADgBAHACQALABADADQAGADAGAFIAIAFQAJAKgGAFIgCAAQgHAAgSgRg");
	this.shape_91.setTransform(54.4,51.6,1.711,1.711);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-1.5,0.7,0,-1.5,0.7,8.1).s().p("AgQA7QgRgDgJgMQgPgRAAgZQgCgeAbgWQAGgFAIgEIAAAAQARgEAMAEQAMAEALAIIACACIABAAIAAABIADADIABACIAEAGIAFAGIAHAMQADAMgFAOQgEAKgGAKQgGAJgFAEIgKAIQgGAEgJAEQgEACgFAAQgGAAgKgDgAgdgOIgFAEIgCAAIgFAHQgFAEAAAIQgBANAIAJQAIAKAMABQANABAIgIQAHgGACgIIABgHQABgKgFgFIAAgBIgDgEQgGgJgNgBIgDAAQgHAAgFACgAgMgxIAJAGQAFAGAFAFQAXAXAGgFQAFgFgIgJIgIgIQgGgFgGgDQgFgCgKgCIgIgBIgCAAg");
	this.shape_92.setTransform(52.3,57.1,1.711,1.711);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.1,0.9,0,-1.1,0.9,4.6).s().p("AAAAOIAAgBQgCgDgBgLIABgMQACAGADAIQACAKgDACIgBABIgBAAg");
	this.shape_93.setTransform(49.7,40,1.711,1.711);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.7,1.3,0,-0.7,1.3,4.6).s().p("AAJAgQgJgBgHABIgCgEQgHgNAAgNQgBgNADgMIACgIIADABIAIAIQADAGAFANIAFALIAEAPIABAIIABABQgEAAgFAAgAAAABQAAAMADADIABABIACgBQADgCgCgKQgDgIgEgGIAAALg");
	this.shape_94.setTransform(49,39.4,1.711,1.711);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.8,1,0,-0.8,1,3.7).s().p("AAAAKQgCgDgBgHQAAgHABgEIACAFQAEAGAAAEIgEAIIAAgCg");
	this.shape_95.setTransform(54,38.4,1.711,1.711);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.6,0.2,0,-0.6,0.2,3.7).s().p("AgHAeIAAgCIgCgHQgBgKAAgMQABgJAEgMIAEgHIAAAAIAGAHQAEAFABAHIABABIgEAHQgBgGgDgHIgDgEQgBAEABAHQAAAIABACIACACIgDAIQgEAIgBALIgCgBg");
	this.shape_96.setTransform(53.5,39.9,1.711,1.711);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.5,0.7,0,0.5,0.7,3.7).s().p("AgCALIgEgLQABgRAGgHQACgDAEADIgDAHQgEAMAAAIQAAANAAAKIgCgPg");
	this.shape_97.setTransform(51.7,38.9,1.711,1.711);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.8,0.5,0,0.8,0.5,4.6).s().p("AgIAgIgLgDIAAgDIAAgBIAAgDQACgLAEgIIAEgGIAFgIIADgGIABgCIAIgKIAGgEIAFgFIABAAIgCADQgGAHgGAMQgGAKgCARQgCAJAAAGIAKAFIAEAEIgBABIgCACQgHgEgIgCg");
	this.shape_98.setTransform(55.8,41.3,1.711,1.711);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.2,0,-0.5,0.2,4.6).s().p("AgDANIgBgBQgDgCAHgMIAGgLQAAAMgHAOIAAABIgCgBg");
	this.shape_99.setTransform(58.1,41.7,1.711,1.711);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.7,0,0,0.7,4.6).s().p("AgBAhIgMgFQAAgGACgJQAEgRAGgKQAEgMAHgHIABgDIACABIAAABQABACAAAEIAAAXIgBACIABAEQgCALgHARIgDAIIgDgEgAAEAAQgGAOACACIAAABIACAAQAJgQAAgKIgHAJg");
	this.shape_100.setTransform(57.3,41,1.711,1.711);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-1,0,0.1,-1,4.4).s().p("AgUAZIAAAAIgBABIABgBgAAOgQQADgHADgDIABABQABAIgBAGIgBACIgJAGQgCgEAFgJg");
	this.shape_101.setTransform(61.3,42.9,1.711,1.711);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.9,0.8,0,-0.9,0.8,4).s().p("AgNAAIACgBIABAAIAHgBIAAAAIADAAQALAAABABIACABIgCAAQgDAEgJAAQgMAAgBgEg");
	this.shape_102.setTransform(69.9,55.4,1.711,1.711);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,-0.7,0,0,-0.7,3.9).s().p("AgUAPIgGgBIgDgJIgHgKIACgBIADgDIAFAJIAEAIQAPACAUgKQAPgGAJgIIgBADQgBAFgHAFIgLAFIgKADIgCAAQgMAIgMAAIgBAAg");
	this.shape_103.setTransform(67.3,53.4,1.711,1.711);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.7,0,-0.5,0.7,4).s().p("AgeAHIgBgFQANAAAPgGIABAAIAJgDIAGAAQAMADAHAFIgYAEQgOADgLAAQgIAAgFgBgAgFgCIgCAAIgBACQABACAJAAQALAAADgCIACAAIgBgCQgCgBgKgBIgFAAIAAAAIgFACg");
	this.shape_104.setTransform(69.1,55.6,1.711,1.711);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.9,0,-0.5,0.9,3.9).s().p("AgOADIAAgCIgBgBQAHgEAKAAQALgBADAEQACABgEABQgFAEgJAAIgEAAQgIAAgCgCg");
	this.shape_105.setTransform(68.1,50.6,1.711,1.711);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.3,0.3,0,-0.3,0.3,3.9).s().p("AgYASIgEgJIgFgJIAGgEQALgGAMgEIAGgCIAMgBQAMAAAHAJIABAEQgIAHgPAHQgQAIgNAAIgGAAgAAEgKQgJAAgIAGIABABIAAACQADABAJAAQALAAAFgDQAEgDgBgBQgDgEgIAAIgEABg");
	this.shape_106.setTransform(67.7,51.7,1.711,1.711);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-2.2,1,0,-2.2,1,3.9).s().p("AAAAAIAIgHIADACQACACgJAGIgEADIgLACIALgIg");
	this.shape_107.setTransform(70.1,47.3,1.711,1.711);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1,1.3,0,-1,1.3,3.9).s().p("AgKAEIAGgEIAGgCQAHgCACADIAAABIgDACQgDACgFAAIgKAAg");
	this.shape_108.setTransform(68.1,46.8,1.711,1.711);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0.3,0,0,0.3,3.9).s().p("AgdANIAEgCQAOgIALgHIAJAAQAGAAADgCIADgDIAAgCQgCgDgHACIgIADIABgCIAFgGIAGAAQAKAAAEADIgJAJIgMAGIgIACQgJADgLAHIgHAFIgDgFg");
	this.shape_109.setTransform(66.4,48.5,1.711,1.711);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.4,-0.2,0,0.4,-0.2,4).s().p("AgOAeIgEgGIgCgCIgDgDIAAgBIgBAAIgBgCIgGgEIABgEIABgBIADgDQAJgKALgIIAIgIIAJgFIAEgBIAKgBIAEADIADABQgFAAgFABQgLADgLALQgIAHgGAIQgDAFgBAGIAGAGIAEAFIgFACIgBABg");
	this.shape_110.setTransform(62.8,46,1.711,1.711);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,-0.2,0,-1.2,-0.2,4).s().p("AgLAJIgBgDIAAgBIACgBIAHgFQAGgGADgCQAEgCACACQACACgDAFIgGAGIgCABIAAABQgEAEgDABIgCAAQgDAAgCgCg");
	this.shape_111.setTransform(65.7,46.1,1.711,1.711);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.5,-0.3,0,-0.5,-0.3,4).s().p("AgVAWIgHgGQACgGADgGQAFgHAKgIQAKgKALgDQAFgCAFABIAEADQAEAFgGAJIgDAFIgGAEIgBABIgFAGQgKAJgOAIIgEACIgDgFgAAOgJQgEACgHAGIgGAEIgBACIAAAAIAAAEQADACACgBQAEAAAFgFIABgBIACgBIAFgFQAEgFgDgCIgBgBIgEABg");
	this.shape_112.setTransform(64.4,46.1,1.711,1.711);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,4.4).s().p("AgXAhIADgIQAHgRACgJQAHgJAKgKQAJgIAGgCIADgCIAAAPQABAJgEAGIgEABIABgCQABgGgBgIIgBgBQgDADgDAHQgFAIACADIgJAHQgLAJgIALIgDADg");
	this.shape_113.setTransform(61.9,41.6,1.711,1.711);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.8,1.6,0,-0.8,1.6,4.4).s().p("AgRAKIABgDIABgCIALgJQAHgIAHgCQAFgCADABIAAABIgDACQgFACgKAJQgKAHgGAKIgBgGg");
	this.shape_114.setTransform(62.8,38.4,1.711,1.711);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.1,-0.2,0,0.1,-0.2,3).s().p("AAFACIgEgDIgNgMIgLgIIAQgDQAGACADAFQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAKAGAEAHIABAAIAEAJIAAARQgIgMgLgLg");
	this.shape_115.setTransform(43,101.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],-3.7,3.4,0,-3.7,3.4,6.4).s().p("AhOA5QApgIAvgoQApgeAcgkQgWBdgwAQQgSAGghAAIgkgBg");
	this.shape_116.setTransform(65.8,90.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.8,-4.7,0,0.8,-4.7,6.4).s().p("AiHAsIAAgBQALgpAPgLQAUgJAZAFQAQADAbAIQAnAJApgKQAxgQAcgtIgBANQgQA5hUAKQgbADgbgCIgbgDIgZgKQgQgFgGgBQgNgEgMAWQgHANgHAcIgCAIIgBgVg");
	this.shape_117.setTransform(61.2,98.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#CCE51E","#81B70B","#3A671D"],[0,0.592,1],0,-12.3,0,0,-12.3,7.2).s().p("AgBCBQABgtgDhIQgFhjAAgpIAFABIgBAtQgBAZACAYIAAABIABAUQACBBAJBNIgKgBg");
	this.shape_118.setTransform(48,106.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],-0.4,2.2,0,-0.4,2.2,6.4).s().p("AgiBBQgagIgRgDQgYgFgVAJIADgCQANgIAygEIAKAAIAkACQAgAAATgGQAxgQAWhdIADAAQABAMAGAgQACAQgBAMQgcAtgxAQQgWAGgWAAQgRAAgTgFg");
	this.shape_119.setTransform(62.5,91.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],1.4,-11.8,0,1.4,-11.8,7.2).s().p("AgHCDQgCg9gBhVIAAgQQABgFgBgFIAAhaIAAgBIAOAIQAAAqAFBiQAEBIgCAtIgSgCg");
	this.shape_120.setTransform(46.6,105.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],1.5,2.6,0,1.5,2.6,7.2).s().p("AAFATIgPgIIAAgeIADADQAJAFAEACIAFABQgCANABAPIgFgBg");
	this.shape_121.setTransform(46.5,91.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],0.5,14.7,0,0.5,14.7,7.2).s().p("AgCBtQgDgBgLgGIgEgCQADiWAPg7IAIABQALADADADQgPB0gEBgIgDgBg");
	this.shape_122.setTransform(47.5,79.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],4.4,-4.1,0,4.4,-4.1,11.8).s().p("AA6CKIgJgCQgngfglg+QgwhJgRhPQABgOAEgRIAPArQAWA6AHAKIAXAjQAQAaAIAMIAsA3QAQARAdAZIgLAAQgLAAgNgDg");
	this.shape_123.setTransform(29.3,85.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],6.6,-5.5,0,6.6,-5.5,11.8).s().p("AAZBgQgegagYgkQgvhIAGhUQARBOAwBKQAlA9AnAgQgVgIgZgTg");
	this.shape_124.setTransform(27.1,86.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],2.4,-2.1,0,2.4,-2.1,11.8).s().p("AAcB3Igqg2QgKgMgQgaIgXgkQgHgJgWg6IgPgsIADgSQAFgPAFgHQgBAwAtBUQAyBcA9A2QATARAUAOQADACAFAEIgQADIgKACIgJABQgdgZgQgRg");
	this.shape_125.setTransform(31.3,83.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0.4,8.3,0,0.4,8.3,24.5).s().p("AgVApQAAgrAOgdQAIgaAKAAQAFAAADAJQACAFAAAGQAAAVgSAkQgJAYgHAJIgHAFg");
	this.shape_126.setTransform(62.4,69.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.6,0,0,-2.6,0,24.5).s().p("AAACoQhEhIAAh8QAAhiA2gtQAXgVAfgFQAPAMAOAnQgmAIgRAVQgSAaAAA3QAABGAWArQAbAxAPATIAGAJQgEAJgHAIQgGAMgOAPQgVgNgOgRgAglhzQgNAeAAAsIABASIAHgGQAGgJALgXQATgmAAgVQAAgGgDgFQgCgKgFAAQgLAAgKAag");
	this.shape_127.setTransform(65.3,77.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-8.6,-1.5,0,-8.6,-1.5,24.5).s().p("AgXC3QAOgPAGgMQAFgIAEgJIgGgJQgNgTgbgxQgYgrAAhGQAAg3AUgaQARgVAkgIQgMgngPgMQAKgCAMAAQANAAAmAGIAFAAQAAAFgCAGIgBBHQgMgEgSAAQgFAAgGACQgZAFgOAbQgOAeAAAuQAABBArA9IAJAMQAWAZAZAMIABAlQACANAAAKQgygGgmgag");
	this.shape_128.setTransform(71.3,79.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],0.7,-11.1,0,0.7,-11.1,15.9).s().p("AgdhIIAZgPQALAmAXBiIg7Ang");
	this.shape_129.setTransform(158.3,71.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-10.9,-16.9,0,-10.9,-16.9,30.6).s().p("AhDAHIgNgOIgRgUIA0AAICPALIgMAHQgYAJghAKQgjALgpAHIgUgVg");
	this.shape_130.setTransform(141.8,61.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-21.8,-11.3,0,-21.8,-11.3,47.1).s().p("ABii9QghALgSAEQgkAIhHAAQgjAAgygCIA9gGIAxgIQAngHAlgKQAhgLAYgLIAMgHQAbgQAJgUIAABPIAACiIAAEMQgXALgZAJg");
	this.shape_131.setTransform(140.6,82.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-10.3,-11.7,0,-10.3,-11.7,30.6).s().p("AgnAYIg0AAQgYgZgagfIAxgBQBMAAB9AVIAhAFIgCAHQgJASgbAQg");
	this.shape_132.setTransform(141.2,56.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-16.6,-1.9,0,-16.6,-1.9,24.5).s().p("AARDVQgQAAgNgCQgBgKgCgOIgBglQAQAJATAAIAAA2IgCAAgAgIh/QgFgCgHgBIABhHQABgGABgFQAYAFAPAAIAABeIgegOg");
	this.shape_133.setTransform(79.3,79.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],0.4,-16.1,0,0.4,-16.1,47.1).s().p("AACEKQhrgChzgYIgDgKQgzhngQhyQgSh0gBhZIABhKQAUALAbAIIAmAJIAAAHQACAdAYBaQAaBqAKASQAIAWAMAWQASAOAtAdQBIAuAhATQAxAbBVARQBHAMAvAAIAfAAQiLAviXAAIgSgBg");
	this.shape_134.setTransform(118.3,87.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],14.1,-10.7,0,14.1,-10.7,32).s().p("AiUAXQANgbBMgaQA/gWBdgKIA1BEQgggFhRARQhQAQhEAdQghgSgEgWg");
	this.shape_135.setTransform(96.5,53.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],30,-12.3,0,30,-12.3,47.1).s().p("AhJDrIAAhAIAAg2IACkQIAAheIAAgcQAFAWAgARIAWALIgCBKQACBYAQB0QAPByA0BoIADAJQhJgQhKgbg");
	this.shape_136.setTransform(88.8,83.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-4.4,-15.2,0,-4.4,-15.2,47.1).s().p("ADnDmQgwAAhHgNQhVgQgvgcQgjgShIgvQgtgcgRgPQgNgWgIgWQgKgTgahoQgYhbgBgdIAAgGIALADQBcATB6AAIASAAIA1gBQAAAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAQAyACAjAAQBJAAAkgIQASgDAhgLIAAHFIgLAEIgeAAg");
	this.shape_137.setTransform(123.2,86.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],2,-20,0,2,-20,32).s().p("ABiAeQh4AAhcgUQAigNA0gLQAsgKA3gFQAXAdARAYIAFAGIgSAAg");
	this.shape_138.setTransform(108.6,62.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],10.1,-16.2,0,10.1,-16.2,32).s().p("AgsAuIgmgKQgbgIgUgKIgWgKQBFgbBSgQQBOgRAgAFIAKANIAgAqQg3AFgtAKQg0AKghAQIgLgDg");
	this.shape_139.setTransform(100.5,59);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-5,-5.3,0,-5,-5.3,16.9).s().p("ABCBDQgUgCgXgJIgIgHQhEhDgrgxIAwgEQATAWAyAwQAzAyAZAWQgagCgFgCg");
	this.shape_140.setTransform(123.3,53.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],16.8,-7.3,0,16.8,-7.3,32).s().p("Ah5A2QgDgEAAgFQAAgtBtgfQA1gQBDgJIAUAcQheAKg+AUQhMAZgOAeIAAgDg");
	this.shape_141.setTransform(93.7,50.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-4.1,-4,0,-4.1,-4,16.9).s().p("ABqBVQgZgXgzgzQgygvgTgVIgwADQgPgOgJgOQAigCAnAAIANAAIAVAbIAtA6QADACACAEQAaAfAYAbIAQAUIgGAAg");
	this.shape_142.setTransform(122.4,52.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-4.3,-6.6,0,-4.3,-6.6,16.9).s().p("AAfBtIAAgBIhVhrIhChQQgOgQgIgKQANgDAPAAQAKANAOAPQArAxBFBDIAIAHQAXAJATACQAGACAaACIAGAAIAOARIATAVIgxAHIg9AGQAAAAAAAAQgBgBAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_143.setTransform(122.6,54.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],3.2,-6.8,0,3.2,-6.8,16.9).s().p("AAvBnQgRgagYgeIgegrIgKgLIg0hGIgUgcIAngCQAIAKAPAQIBABRIBXBqIAAABIg4ABIgEgFg");
	this.shape_144.setTransform(115,55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-7.7,-6.2,0,-7.7,-6.2,30.6).s().p("ACHApQh/gWhJAAIgyABQgBgEgDgCIgwg6IAggBQBIAAAlAFQAwAGCQA6IACADIAAATIghgFg");
	this.shape_145.setTransform(138.6,50.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-6.5,-3.8,0,-6.5,-3.8,30.6).s().p("AgOgRQgmgEhIAAIggABIgUgbQCRABBnAfQBZAZAQAmQiQg7gvgGg");
	this.shape_146.setTransform(137.5,48.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-7.1,-8.6,0,-7.1,-8.6,15.9).s().p("AhSg+IAPgJIAcAtIAbgSQAOgIAjgVQAEALAGALQAHAOAKALQAIALAIAHIADAAIhSAzQgRALgUANIgKAHQgYhhgMgng");
	this.shape_147.setTransform(166.2,69);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-0.3,-7,0,-0.3,-7,7.5).s().p("AAMAhQgJgHgFgLQgKgLgHgMQgGgLgEgLQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQARAOAXAAQAGAAAGgCQAEAOAAAPIAAADIAAALIgQAKg");
	this.shape_148.setTransform(173,64.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-5.5,-0.3,0,-5.5,-0.3,15.9).s().p("AgzAKIA/gpIAjgWIgEAYIAAAEQABAMAEALIAEAKQgjAVgQAIIgZASIgbgtg");
	this.shape_149.setTransform(164.6,60.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0.2,-1.3,0,0.2,-1.3,7.5).s().p("AgNgMIABgOIACAAIASAUQAGAHAAAMQAAANgNAAQgOAAAAgmg");
	this.shape_150.setTransform(172.5,58.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],0.3,-1.2,0,0.3,-1.2,7.5).s().p("AgTAYQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgEgMQgEgMgBgJIAAgEIAEgZQABgFASAMQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQASANAMAYQAHALADAOQgGACgGAAQgXAAgRgOgAgMgMQAAAnAPAAQANAAAAgNQAAgNgGgHIgTgTIgCAAg");
	this.shape_151.setTransform(172.4,58.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#47B957").s().p("AFIDcQhbhbAAiBQAAiABbhbQBchcCCAAQCAAABbBcQBcBbAACAQAACBhcBbQhbBciAAAQiCAAhchcgAtchAIB4gRIgKDfIBigUIAFBwIjSAWgABnhGIBagHIgDFAIhUAHgAhYDxQgXgKgRgQQgQgQgJgVQgKgVAAgYQAAgeALgYQAJgXAQgRQARgQAWgJQAVgIAZAAQAogBAcAVQAdAUAOAiIh2BaQAFACAHABIAOABQARAAALgGQANgHALgJIAnBBQgZASgZAHQgYAIghAAQgbAAgWgJgAg6BOQgGADgEAGQgFAGgDAGQgDAIABAIIABAKIACAGIA8gtQgHgHgGgCQgGgDgJAAQgIAAgHAEgAoyDxQgXgKgQgQQgRgQgJgVQgJgVAAgYQgBgeALgYQAJgXARgRQAPgQAXgJQAVgIAZAAQAogBAeAVQAdAUAPAiIh5BaQAFACAIABIAMABQATAAANgGQAMgHAKgJIAoBBQgZASgZAHQgaAIghAAQgbAAgWgJgAoUBOQgGADgFAGQgEAGgDAGQgCAIgBAIIABAKIADAGIA7gtQgFgHgGgCQgIgDgIAAQgIAAgHAEgAmIAMIBWgGIAXCdIABAAIAaidIBXAGIg3DnIhzAHg");
	this.shape_152.setTransform(150.1,151.3,1,1,0,0,0,55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(4));

	// BG
	this.instance_1 = new lib.frame01("synched",0);
	this.instance_1.setTransform(94.5,94.5,1,1,0,0,0,94.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// Layer 2
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFCC00").ss(3,0,1).p("AtgtCIAAgBQh9AzAFCLIAAYQQAAABAAABQAAAAAAABQABAWAFAWQAeClCsgDIYQAAQArAAAqgPQACAAABgBQCAgzgHiQIAA4OQAAgtgQgpQgBgBAAgBQgwh3iBgCQg6gihJAAQgchLg+gsIAAAAQgLgIgMAAQgMAAgLAHIABAAQg+AogdBJQgBADgCAEQAAAAgBAAQhIgBg5AjIgxAAQAGgIAEgIQANgcgHgfQgDgMgIgIIgBgBQgJgKgMgBIABAAIh4gVQgchQhBgtIABAAQgLgIgNAAQgJAAgKAGIgBAAQhAAqgdBPQhOAAg+AnQgLAHgFAOQgFAMAFAOQADAJAEAKQAHAOAIANIg3gBQg7gdhEgBQgBAAgBAAQgCgHgDgHQgchCg5goIAAAAQgLgIgNAAQgNAAgLAIIABAAIggAXQAAAAAAABQgIAFgEAIIABAAIgrBSQhOgDg7AmQgmAEgjAPg");
	this.shape_153.setTransform(94.6,81.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF6600").s().p("AvSO6QgFgWgBgWIAAgBIAAgCIAA4QQgFiLB9gzIAAABQAjgPAmgEQA7gmBOADIArhSIgBAAQAEgIAIgFIAAgBIAggXIgBAAQALgIANAAQANAAALAIIAAAAQA5AoAcBCIAFAOIACAAQBEABA7AdIA3ABQgIgNgHgOIgHgTQgFgOAFgMQAFgOALgHQA+gnBOAAQAdhPBAgqIABAAQAKgGAJAAQANAAALAIIgBAAQBBAtAcBQIB4AVIgBAAQAMABAJAKIABABQAIAIADAMQAHAfgNAcQgEAIgGAIIAxAAQA5gjBIABIABAAIADgHQAdhJA+goIgBAAQALgHAMAAQAMAAALAIIAAAAQA+AsAcBLQBJAAA6AiQCBACAwB3IABACQAQApAAAtIAAYOQAHCQiAAzIgDABQgqAPgrAAI4QAAIgHAAQilAAgeiig");
	this.shape_154.setTransform(94.6,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,189.2);


(lib.mcScore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star("single",1);
	this.instance.setTransform(133.9,21.5,0.943,0.943,0,0,0,26.1,22.8);

	this.instance_1 = new lib.star("single",1);
	this.instance_1.setTransform(24.6,21.5,0.943,0.943,0,0,0,26.1,22.8);

	this.instance_2 = new lib.star("single",1);
	this.instance_2.setTransform(79.3,11.5,0.943,0.943,0,0,0,26.1,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance,p:{startPosition:1}}]}).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:1}}]},2).to({state:[{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,156.1,51.4);


(lib.girl_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,2.8,0,0,2.8,7.2).s().p("AgRAaQgFAAgNgEQgOgEgBgOQgBgMAIgGQALAHAYAAQAaAAAJgKIAHgIQAFgDAHALQAFAKAAAGQAAAbg1AAIgBAAIgOAAg");
	this.shape.setTransform(0.5,-3.5);

	this.instance = new lib.Girleye();
	this.instance.setTransform(-0.3,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],1,-1.8,0,1,-1.8,2.4).s().p("AAFAPQgPgMAAgPQAEgEAGgCIAAAHQADAOAIAQIgGgEg");
	this.shape_1.setTransform(-16.1,-5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],1.7,0.5,0,1.7,0.5,2.3).s().p("AgDAJIAAgEIACgGIABgDIAAgCIAAgBIABgCIACAFIABAIQgEABgDAFg");
	this.shape_2.setTransform(-16.8,-8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],10.8,-7.5,0,10.8,-7.5,18.7).s().p("AgSA/QgPgDgIgEIgGgYIADABIANAAQAJAUANALIgJgBgAg2gbIAAgUIABgQIABAQQACAcAKAdIgFACIgGACQgDgTAAgWgAAsg1IABgBIAKgBIgIACg");
	this.shape_3.setTransform(-7.3,-6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.5,-2.1,0,-0.5,-2.1,2.3).s().p("AgFgSIABgBQADgCACAAQAEAAADADIABAEIAAAEQAAAMgGAJQgDAFgGAFIgCABQADgVAAgTg");
	this.shape_4.setTransform(16.2,-7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.6,1.1,0,-0.6,1.1,2.3).s().p("AgGAJIAAgUQALAHACAQQgDgDgDAAQgCAAgEACIgBABIAAgDg");
	this.shape_5.setTransform(16.3,-10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFCD7","#FEDDB4","#FEB7A4"],[0,0.6,1],-6.2,-10.3,0,-6.2,-10.3,18.7).s().p("AgQAaIgNgFQAJgCAIgEIAEALgAgEALQANgJAKgMIABgBIABgBIAIgNIABAeIgBABQgRAMgMAEIgEgLg");
	this.shape_6.setTransform(9.7,-3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF644D").s().p("AhlARIgNAAIgEgBIgDgQIAFgCIAGgCIABAAIAPAAQAIABAEADQADABAAADQAAAMgTABgABXAFQgMgDAAgGQAAgGAKgEIAHgCIAPAAQAIAAAEAEQADADAAADQAAADgBADIgBAAIgBAAQgEAEgMABg");
	this.shape_7.setTransform(-0.3,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],3.5,-6.5,0,3.5,-6.5,18.7).s().p("AhTBKQgMgLgJgUIADAAQATgBAAgMQAAgDgDgDQgEgDgIgBIgPAAIgBAAQgLgdgCgcIAVgCQgBgEAHgXIAAAAIACAAIAEAQIADAKIAQgBIAdgCIASgBIgBABIADAAIAJgBIAUgBIABgFIABgEQAEgNACgBQAAAEADALIACAHIBHgDIAEgdQAEADACAMIADANIATgBQAEAdABAhIgIANQACgDAAgDQAAgEgEgDQgEgDgHAAIgPAAIgHABQgLAFABAFQAAAJAMACIAQAAQALAAAFgEQgLAOgOAJIADALQAPgEARgMIAAgBIABAKIgMAGQgOAIghAFQgmAHgpAAQgtAAgbgFgABCA7IAMAFIAIAAIgDgLQgIAEgJACg");
	this.shape_8.setTransform(0.1,-7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AggAQIgBgFQAAgGADgIQAFgMAFACQgOAKADATgAgTANIAAgKQACgLAGgDQgHAIAAAQgAAgAMIABgHQAAgLgMgJQANAGAAANIgBAIg");
	this.shape_9.setTransform(-0.9,-31);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACHCYIABgWIAAgKIgBggQgCgjgEgdIgTABIgDgOQgBgLgFgBIgDAaIhIADIgBgGQgDgLgBgEQgBABgEANIgBAEIgBAEIgVABIgKABIgSABIgdACIgQABIgDgKIgFgQIgBAAIAAAAQgHAWAAAFIgUABIgBgPIgBAQIAAAUQgBAWAEAVIADASIAHAXIAEANIAHASIABADQABAEgSgXQgYgdgFgLQgIgQgFgQIgBgGIgBgKIgCgFIgCgMIgCgKIAAgBIgBAAQgCgQAAgLQAAgfAEgUQAIgiAZgYQAagXAbgIIAKgCIgBgIQAAgSANgNQATgRAhAAQAhAAATAWQAPARABAQIAIADQAfALASAWQATAVAGARQAHAQAAADIABAIQAEAQAAAMIAAAOIAAAJIAAAJIABAWIAAADQAAAVgDAVIACgBIgCACQgFAlgeAwQAIgPABgSgAgeieQgDAJgBAGIABAFIABAAQgCgVAOgKIgBAAQgFAAgEALgAgTiWIAAAKIABAAQAAgTAHgIQgHADgBAOgAAhiVIgBAHIABAAIABgIQAAgPgNgGQALAJABANg");
	this.shape_10.setTransform(-0.9,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_11.setTransform(-3.2,-24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.8,-1.4,0,-0.8,-1.4,2.3).s().p("AgOAgIACgIIABgCIAAgBIABgBQAHgaABgZIABAAIAAAPIABAAIABAAIABAAQAHgBAFAEQAEAOgOAQQgDAFgEADIgBABIgCACIgIAEg");
	this.shape_12.setTransform(15.8,-8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-1.4,0.9,0,-1.4,0.9,2.3).s().p("AgBAGIgCAAIgDAAIgBAAIAAgNIACABIADABIAAgDIABABIABACIAAABIABADQAEABABAEIACAEIAAABQgFgEgEABg");
	this.shape_13.setTransform(16.4,-11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AggAgIACgCIAEAHIAAABIgGgGgAgtgCQAAgGACgMIAEgJQACgGACgCIgCAIIgCAKQgEAMAAAEQAAAQANARIgCACQgNgPAAgTgAgeAeIAAAAgAAHACIAAgCIAAgCIgCghIABAGQACAOABANIAAABIgBAJIgBABgAAsAAIAAgFIAAgYIAAAAIACAVIAAABIgCAKIgBAEIABgHg");
	this.shape_14.setTransform(0.1,-27.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.7,-1.9,0,-0.7,-1.9,2.3).s().p("AAIAiIAAAAQgMgIgEgGIgDgCIgEgFQgGgJAAgMIAAgEIABgEQADgDAEAAIAFABIACABIADADIABgEIAAgJIAAgJIABgDIAAACIAAAAQABAjAQAfIAGALIgOgGg");
	this.shape_15.setTransform(-15.8,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.5,0.9,0,0.5,0.9,2.3).s().p("AAEAJIgCgBIgDgBQgDAAgEADQACgLAGgHIAAgBIABAAIAAADQADgDAFgCIAAADIgBAIIAAAIIgBAEIgDgDg");
	this.shape_16.setTransform(-17,-10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AiPB1IAPAGIgBgBIgGgLQgPghgDgjIgBAAIAAgCQgFACgDACIAAgCQAAgRgDgIIgBgFIAAgGQAAgKAEgaQACgUAKgSQALgUATgUQAXgXAhgIQAGgSAPgKQATgMAhAAQAfAAAaAUQAQANgDALIAEACQAlAPAQAYQATAaAGAbQAGAbAAAlIgBAKIAAAGIgBADIgCgBIgCgBIgBAAQgBAYgHAdIgBABIAAABIgBABIgCAJIAAAAIgBACIAJgFIACgCQgFAngVAaIACgPIACgXQgKAOgOAIQgIAEgPADQgcAGg1gBQgpAAgmgGQgcgFgCgDIgJgGIALAlQgkgrgIgTgABdhBIABAAIgBAAgAiHhCIAAABIAAgBgAghiQIgDAJQgCAMAAAGQAAAVANAPIAGAGIAAgBIgFgGQgMgSAAgRQAAgFADgMIADgKIACgIQgDACgCAGgAAyiMIABAVIAAAFIgBAIQgCAMgGAKIABAAIAIgVQACgFAAgMIAAgBIgCgVIgBAAIAAAEgAAMiQIACAeIAAADIAAAHIAAAGIABgBIABgMIAAgFIAAgBQgBgMgCgPIgBgGIgBAAIABAGgAhVhlIABAAIgBAAg");
	this.shape_17.setTransform(-0.6,-16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FF0000","#000000"],[0,1],1.7,2.6,0,1.7,2.6,5.2).s().p("AgTACQAAgMAFgGQAIAIAQgBIAKgBIAAABQgEAJgDADQgHAIgGADIgEABIAAABIgJAAQgFgEgBgKg");
	this.shape_18.setTransform(12.9,-2.9,1,1,0,0,0,1.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAADQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIABgBQACAAAAADIAAACg");
	this.shape_19.setTransform(11.2,-9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAPQgDgGAAgHQAAgIAKgNIAAAAQgNAEgGALIAAAAQgBgFAHgFQAGgFAHgDQALABAGAKQADAIAAAHQABAFgFAHQgGAHgHAAQgGAAgEgIgAgGgDIAAACQAAABAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAEAAIABgBQAAgEgEAAIgCABg");
	this.shape_20.setTransform(11.7,-9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AguAPQgEgKgEgQIAAgGIAAAAQAEASAEALQAHATAXAFQgXgDgHgSgAAjAXQATgVAAgOIAAgBIAAgDIAAgBIAAgBIAAABIABACIAAADQABARgVASgAgEgNQgMgPgOgHIAAAAQAQAHAKAKIABABIABABQAIALACAIIgMgQg");
	this.shape_21.setTransform(-7.7,-25.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF644D").s().p("AgNALIAAgLIgBgFIAAgEIAAgBIABAAIANAAQAIAAAEAEQADADAAADQAAACgBADIgBABIgBAAQgEAFgKAAg");
	this.shape_22.setTransform(9.6,-5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.4,-1.8,0,0.4,-1.8,5.1).s().p("AgPgCIASgFIAOgCQgOALgSAIIAAgMg");
	this.shape_23.setTransform(9.7,-10.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],6.7,-9.5,0,6.7,-9.5,18.7).s().p("AgaA9IgIAAIgLAAIgEgBIgBAAIgCgBIgCAAIgBAAIgFgCIAGgSIAFgRIgBAAIABgBQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAIAAADgJIACgMIADgGIAAACIAAAAIACAGIAEANIAEAMIACAGIAIATIADAGIgSACIgIAAgAADA3IgDgTIgBgTIAAgFIAKAAQALAAAFgFIAAAAIABgBQACgDAAgDQAAgCgEgDQgEgDgHgBIgNAAIgBAAIgBgGIAAgCIAAgBIAAgCIAAgDIAAgJIAAgCQASgHAOgNIACgBIAOgCIALgDIABAIQAAAJABAHQACAHgBAdQgBAcgaAPQgOAJgQAEIAAgBg");
	this.shape_24.setTransform(8.3,-6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0.7,0.1,0,0.7,0.1,2.3).s().p("AgKAeQgDgDAAgIIAAgFIAAgGIABgBIABgJIABgGIADgIQAGgMAGgCIACAAIAEABQADACAAAIIAAACIgCANIgEAGIgCAIIgCAMQgDAJgGAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAg");
	this.shape_25.setTransform(4.4,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8F0101").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_26.setTransform(-15.5,-7.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","#FEB381"],[0,1],12.1,-10,0,12.1,-10,25.4).s().p("AAAAEIAAgDIAAgBIAAAAIAAgCIAAgCIAAAEIAAAFIAAgBg");
	this.shape_27.setTransform(2.9,-5.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABQCWIgEgGIgIgRIgCgGIgFgNIgDgNIgDgHIABgBIADgIIACgNIAAgCIAAgCQAAgHgDgDIgEgBIgCABQgIACgGAMIgDAHIgBAGIgBALIgBABIAAADIAAABIAAACIAAACIAAACIAAACIAAABQAAAHADADIAAAAIgEASIgGARIAAABIAEABIACAAIACABIACAAIAAAAIAFABIALAAIAIAAIgGABIgTABIgKAAIgCAAIgFgBIgxgBQhogNgJhcQgGg0AQgmIgIgHQgGgGgDgJIgBgDQgGgQAAgRQAAgfAcgTQAXgQAegBIACAAQARgBAOAGIALAFQANAJAFAQQAMgCAKgBQAmgDAiAPQAOAGANAJQATANAKALQAHAMAFANQAOAiAAAsQAAAGgQAFIgLADIgPADIgBAAIgNACIgVAFIAAAOIAAABIgBAJIAAADIAAADIAAABIABACIAAAGIAAABIAAAEIABAFIAAANIAAAFIADASIADATIAAABIAGAVQgMgMgEgHgAiAh1QAEASAEAKQAHASAXADQgXgFgHgTQgEgLgEgUIAAAAgAgSh7IAAABIAAADIAAABQAAAQgTAVIAAAAQAVgSgBgTIAAgEIgBgBIAAgBIgBgCIgBAAIACADgAhOh3IAOASQgCgKgKgLIgBgBIgBgBQgKgKgQgHIAAAAQAOAHAMAPg");
	this.shape_28.setTransform(-0.3,-15.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhyAVIASgFIAXgGIgBgBIgVgJQgTgJAAgEQAAgIAJADIAYALQAfAMACAGQgKAGgPAEIgkAJIgFgJgABKALQgPgEgKgGQACgEAfgOIAYgLQAJgDAAAIQAAAEgTAKIgVAJIgBAAIAXAGIASAFIgFAJIgkgJg");
	this.shape_29.setTransform(-0.1,-9.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FF0000","#000000"],[0,1],0.3,2,0,0.3,2,6.5).s().p("AgbAYQgPgGgCgOQgDgMALgGQALgGAEABQAEABAagFQAcgFAGAOQAFAOgFAKQgFAMgIgBIgKABIgUACIgNABQgJAAgFgBg");
	this.shape_30.setTransform(0.4,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_30},{t:this.shape_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-34,34.5,37.2);


(lib.Symbol = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0.824,0.925],0.3,-4.5,0,0.3,-4.5,39.6).s().p("Aj0D1QhlhmAAiPQAAiOBlhmQBmhlCOAAQCPAABlBlQBmBmAACOQAACPhmBmQhlBliPAAQiOAAhmhlg");
	this.shape.setTransform(39.6,31.3,1,1,0,0,0,-0.3,-9.2);

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(39.7,39.7,0.3,0.3,0,0,0,132.2,132.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


(lib.pbQuit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABlQgFAAgEgFQgFgFAAgHIAAgsIAAAAIgBgBIhlAQQgHAAgFgGQgFgFAAgHIAAhIQAAgIAFgFQAFgFAHAAIBlAPIABAAIAAgBIAAgsQAAgHAFgFQAEgFAFgBQAGAAAFAEIBzBVQAFADACAFQABAEgBAGQgCAFgFADIhzBUQgEAEgFAAIgCgBg");
	this.shape.setTransform(26.4,38.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheC7QgiAAAAgiIAAhUIABgBIARgLIAABgQAAAQAQAAIC9AAQAQAAAAgQIAAkxQAAgQgQAAIi9AAQgQAAAAAQIAABbIgSgOIAAhNQAAgiAiAAIC9AAQAiAAAAAiIAAExQAAAigiAAg");
	this.shape_1.setTransform(49.3,48,1,1,0,0,0,2.5,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1CTQgZAAAAgYIAAi3IAAgaIAAg/QAAgZAZAAIBrAAQAZAAAAAZIAAA/IAAAaIAADSQAAAZgZAAgAg6glQgGAGAAAJQAAAJAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgJQAAgJgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_2.setTransform(51.3,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.502)").s().p("AgHGMIgXgBQgfgDgegGIgEgBQgZgGgYgJIgEgCIgFgCIgIgDIgEgCIgEgCIgegQIgRgLQgOgJgNgLIgPgNIgQgPIgCgCIgDgCIgBgBIgFgGIgCgCIgEgEIAAAAIgPgQIgDgFIgIgJIgCgDIAAgBIgNgSIgEgFIgGgJIgCgFIgHgNIgDgFIgFgLIgLgZIgBgEIgBAAIAAgBIgBgFIgDgKIgHgXIgCgLIgCgEIgDgUIgBgEIAAgCIgBgKIAAgDIgBgCIgBgUIAAgGIgBgIIAAAAIAAgGIAAgDIABgQIAAgEIAAgKIABgGIACgUIAAgBIAAgEIAAAAIACgJIAAgCIABgEIAFgVIABgEIABgHIACgGIABgDIADgJIAEgMIACgGIANgdIAFgKIABgBIACgFIABgBIAQgZIABgCIAIgMIAEgGQALgNALgNIAAgBIAFgEIAKgLIACgCIAAgBIACgCIADgCQAWgVAYgSIAFgDIAMgIIALgHIAAgBIACgBIAEgCIAOgIQBLgnBagCIAEgBIALAAIAeABQASABASADQAaAEAZAHIALAEIABABQAdAJAbAPIAFACQAbAPAaAUIAHAGIABABIAMALIABABIABABIAAAAIADACIAMALIALANIACADIAEACIACADIAFAGIACABIATAZIAGAKIAEAFQAJAOAIAOIAEAKIADAFIAAABIAIASIABACIACADIACAGIABAEIABAEIABABIAGATIADANIABAFIAFASIAAADIAAAAIABADIABAMIABAGIACATIAAACIABACIAAANIAAADIAAACIAAAKIAAAGIAAACIAAADIAAAHIAAAFIgDAXIAAAEIAAABIgCAMIAAAFIgDARIgBAGIgEAMIgFAUIgCADIAAADIgCAGIgCAFIgCAFIgJAWIgGALIgDAFIgJARIgDAEIgCAEIgCADIgCADIgEAFIAAABIgRAWIgEAGIgJALIgCACIgSATIgBACIgCAAIgDADIgJAJIAAAAIgGAFIgVASIgFADIABAAIgEACIgJAHIgDACIgCACIgfASIgLAFIgFAEIgCAAIgBABIgeAMIgFACIgCAAIgHADIgJADIgCAAIgDABIgFABQgYAHgaADIgCAAIgBAAIgCAAQgYADgYAAIgHAAg");
	this.shape_3.setTransform(39.7,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.302)").s().p("AgHGMIgXgBQgfgDgegGIgEgBQgZgGgYgJIgEgCIgFgCIgIgDIgEgCIgEgCIgegQIgRgLQgOgJgNgLIgPgNIgQgPIgCgCIgDgCIgBgBIgFgGIgCgCIgEgEIAAAAIgPgQIgDgFIgIgJIgCgDIAAgBIgNgSIgEgFIgGgJIgCgFIgHgNIgDgFIgFgLIgLgZIgBgEIgBAAIAAgBIgBgFIgDgKIgHgXIgCgLIgCgEIgDgUIgBgEIAAgCIgBgKIAAgDIgBgCIgBgUIAAgGIgBgIIAAAAIAAgGIAAgDIABgQIAAgEIAAgKIABgGIACgUIAAgBIAAgEIAAAAIACgJIAAgCIABgEIAFgVIABgEIABgHIACgGIABgDIADgJIAEgMIACgGIANgdIAFgKIABgBIACgFIABgBIAQgZIABgCIAIgMIAEgGQALgNALgNIAAgBIAFgEIAKgLIACgCIAAgBIACgCIADgCQAWgVAYgSIAFgDIAMgIIALgHIAAgBIACgBIAEgCIAOgIQBLgnBagCIAEgBIALAAIAeABQASABASADQAaAEAZAHIALAEIABABQAdAJAbAPIAFACQAbAPAaAUIAHAGIABABIAMALIABABIABABIAAAAIADACIAMALIALANIACADIAEACIACADIAFAGIACABIATAZIAGAKIAEAFQAJAOAIAOIAEAKIADAFIAAABIAIASIABACIACADIACAGIABAEIABAEIABABIAGATIADANIABAFIAFASIAAADIAAAAIABADIABAMIABAGIACATIAAACIABACIAAANIAAADIAAACIAAAKIAAAGIAAACIAAADIAAAHIAAAFIgDAXIAAAEIAAABIgCAMIAAAFIgDARIgBAGIgEAMIgFAUIgCADIAAADIgCAGIgCAFIgCAFIgJAWIgGALIgDAFIgJARIgDAEIgCAEIgCADIgCADIgEAFIAAABIgRAWIgEAGIgJALIgCACIgSATIgBACIgCAAIgDADIgJAJIAAAAIgGAFIgVASIgFADIABAAIgEACIgJAHIgDACIgCACIgfASIgLAFIgFAEIgCAAIgBABIgeAMIgFACIgCAAIgHADIgJADIgCAAIgDABIgFABQgYAHgaADIgCAAIgBAAIgCAAQgYADgYAAIgHAAg");
	this.shape_4.setTransform(39.7,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABlQgFAAgEgFQgFgFAAgHIAAgsIAAAAIgBgBIhlAQQgHAAgFgGQgFgFAAgHIAAhIQAAgIAFgFQAFgFAHAAIBlAPIABAAIAAgBIAAgsQAAgHAFgFQAEgFAFgBQAGAAAFAEIBzBVQAFADACAFQABAEgBAGQgCAFgFADIhzBUQgEAEgFAAIgCgBg");
	this.shape_5.setTransform(26.4,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheC7QgiAAAAgiIAAhUIABgBIARgLIAABgQAAAQAQAAIC9AAQAQAAAAgQIAAkxQAAgQgQAAIi9AAQgQAAAAAQIAABbIgSgOIAAhNQAAgiAiAAIC9AAQAiAAAAAiIAAExQAAAigiAAg");
	this.shape_6.setTransform(49.3,48,1,1,0,0,0,2.5,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1CTQgZAAAAgYIAAi3IAAgaIAAg/QAAgZAZAAIBrAAQAZAAAAAZIAAA/IAAAaIAADSQAAAZgZAAgAg6glQgGAGAAAJQAAAJAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgJQAAgJgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_7.setTransform(51.3,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(4));

	// Help
	this.instance = new lib.Symbol("synched",0);
	this.instance.setTransform(39.6,39.6,1,1,0,0,0,39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


(lib.pbLevel_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(93.1,92.6,0.799,0.799,0,0,0,54.3,61.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().rr(-112,-112,224,224,20);
	this.shape.setTransform(94.5,94.5,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

	// txt
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AioDjIgLiPQAuAQAgABQAgAAAUgHQAUgIAMgLQAMgLAEgJIACgJQADgKgEgIQgGgIgNgEQgMgFgRgCQgRgDgSAAQgSAAgSADQgTADgOAEIAxj9IEbATIgLB3IiygWIgUAoQAfgFAjAHQAkAHAcASQAdARASAcQATAZgCAkIgCANQgBAMgHAVQgGAUgOAXQgNAWgZAVQgXAVgkAPQgkAOgxADIgRABQguAAg6gLg");
	this.shape_1.setTransform(148.5,152.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// Graphic
	this.instance_1 = new lib.girl_head("single",0);
	this.instance_1.setTransform(90.3,110.1,2.902,2.902);

	this.instance_2 = new lib.Girl_body("single",0);
	this.instance_2.setTransform(97.3,138.3,2.902,2.902);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(82.2,110.7,2.9,2.901,0,-7,-5.3);

	this.instance_4 = new lib.Girl_hand("single",0);
	this.instance_4.setTransform(98.7,110.1,2.9,2.9,0,7.5,-174.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47B957").s().p("AFIDcQhbhbAAiBQAAiABbhbQBchcCCAAQCAAABbBcQBcBbAACAQAACBhcBbQhbBciAAAQiCAAhchcgAtchAIB4gRIgKDfIBigUIAFBwIjSAWgABnhGIBagHIgDFAIhUAHgAhYDxQgXgKgRgQQgQgQgJgVQgKgVAAgYQAAgeALgYQAJgXAQgRQARgQAWgJQAVgIAZAAQAogBAcAVQAdAUAOAiIh2BaQAFACAHABIAOABQARAAALgGQANgHALgJIAnBBQgZASgZAHQgYAIghAAQgbAAgWgJgAg6BOQgGADgEAGQgFAGgDAGQgDAIABAIIABAKIACAGIA8gtQgHgHgGgCQgGgDgJAAQgIAAgHAEgAoyDxQgXgKgQgQQgRgQgJgVQgJgVAAgYQgBgeALgYQAJgXARgRQAPgQAXgJQAVgIAZAAQAogBAeAVQAdAUAPAiIh5BaQAFACAIABIAMABQATAAANgGQAMgHAKgJIAoBBQgZASgZAHQgaAIghAAQgbAAgWgJgAoUBOQgGADgFAGQgEAGgDAGQgCAIgBAIIABAKIADAGIA7gtQgFgHgGgCQgIgDgIAAQgIAAgHAEgAmIAMIBWgGIAXCdIABAAIAaidIBXAGIg3DnIhzAHg");
	this.shape_2.setTransform(150.1,151.3,1,1,0,0,0,55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(4));

	// BG
	this.instance_5 = new lib.frame01("synched",0);
	this.instance_5.setTransform(94.5,94.5,1,1,0,0,0,94.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(3,0,1).p("AtgtCIAAgBQh9AzAFCLIAAYQQAAABAAABQAAAAAAABQABAWAFAWQAeClCsgDIYQAAQArAAAqgPQACAAABgBQCAgzgHiQIAA4OQAAgtgQgpQgBgBAAgBQgwh3iBgCQg6gihJAAQgchLg+gsIAAAAQgLgIgMAAQgMAAgLAHIABAAQg+AogdBJQgBADgCAEQAAAAgBAAQhIgBg5AjIgxAAQAGgIAEgIQANgcgHgfQgDgMgIgIIgBgBQgJgKgMgBIABAAIh4gVQgchQhBgtIABAAQgLgIgNAAQgJAAgKAGIgBAAQhAAqgdBPQhOAAg+AnQgLAHgFAOQgFAMAFAOQADAJAEAKQAHAOAIANIg3gBQg7gdhEgBQgBAAgBAAQgCgHgDgHQgchCg5goIAAAAQgLgIgNAAQgNAAgLAIIABAAIggAXQAAAAAAABQgIAFgEAIIABAAIgrBSQhOgDg7AmQgmAEgjAPg");
	this.shape_3.setTransform(94.6,81.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AvSO6QgFgWgBgWIAAgBIAAgCIAA4QQgFiLB9gzIAAABQAjgPAmgEQA7gmBOADIArhSIgBAAQAEgIAIgFIAAgBIAggXIgBAAQALgIANAAQANAAALAIIAAAAQA5AoAcBCIAFAOIACAAQBEABA7AdIA3ABQgIgNgHgOIgHgTQgFgOAFgMQAFgOALgHQA+gnBOAAQAdhPBAgqIABAAQAKgGAJAAQANAAALAIIgBAAQBBAtAcBQIB4AVIgBAAQAMABAJAKIABABQAIAIADAMQAHAfgNAcQgEAIgGAIIAxAAQA5gjBIABIABAAIADgHQAdhJA+goIgBAAQALgHAMAAQAMAAALAIIAAAAQA+AsAcBLQBJAAA6AiQCBACAwB3IABACQAQApAAAtIAAYOQAHCQiAAzIgDABQgqAPgrAAI4QAAIgHAAQilAAgeiig");
	this.shape_4.setTransform(94.6,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,189.2);


(lib.pbHelp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmDMQgOgOgBgTQACgUAMgNQAMgNAUgBQASACANAMQANANABATQAAAUgOAOQgNAMgSABQgSgBgNgMgAglBOQgNgKAAgSIAAg5QACgRAOgFQAOgGATgEQAKgCAJgGQAMgGAHgKQAGgJABgSQgBgMgHgKQgHgLgLgGQgLgFgLAAQgSAAgLAJQgOAJgIALQgJALgMAKQgJAIgNAAQgQAAgKgKQgLgNABgTQAAgYAMgSQANgTAVgMQATgLAXgHQAWgGAUgBQAlABAgAPQAgAQATAbQATAcAAAnQAAAygbAdQgcAcguALIAAAVQAAASgMAMQgMAKgQAAIgCAAQgTAAgKgLg");
	this.shape.setTransform(40,38.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.502)").s().p("AgHGMIgXgBQgfgDgegGIgEgBQgZgGgYgJIgEgCIgFgCIgIgDIgEgCIgEgCIgegQIgRgLQgOgJgNgLIgPgNIgQgPIgCgCIgDgCIgBgBIgFgGIgCgCIgEgEIAAAAIgPgQIgDgFIgIgJIgCgDIAAgBIgNgSIgEgFIgGgJIgCgFIgHgNIgDgFIgFgLIgLgZIgBgEIgBAAIAAgBIgBgFIgDgKIgHgXIgCgLIgCgEIgDgUIgBgEIAAgCIgBgKIAAgDIgBgCIgBgUIAAgGIgBgIIAAAAIAAgGIAAgDIABgQIAAgEIAAgKIABgGIACgUIAAgBIAAgEIAAAAIACgJIAAgCIABgEIAFgVIABgEIABgHIACgGIABgDIADgJIAEgMIACgGIANgdIAFgKIABgBIACgFIABgBIAQgZIABgCIAIgMIAEgGQALgNALgNIAAgBIAFgEIAKgLIACgCIAAgBIACgCIADgCQAWgVAYgSIAFgDIAMgIIALgHIAAgBIACgBIAEgCIAOgIQBLgnBagCIAEgBIALAAIAeABQASABASADQAaAEAZAHIALAEIABABQAdAJAbAPIAFACQAbAPAaAUIAHAGIABABIAMALIABABIABABIAAAAIADACIAMALIALANIACADIAEACIACADIAFAGIACABIATAZIAGAKIAEAFQAJAOAIAOIAEAKIADAFIAAABIAIASIABACIACADIACAGIABAEIABAEIABABIAGATIADANIABAFIAFASIAAADIAAAAIABADIABAMIABAGIACATIAAACIABACIAAANIAAADIAAACIAAAKIAAAGIAAACIAAADIAAAHIAAAFIgDAXIAAAEIAAABIgCAMIAAAFIgDARIgBAGIgEAMIgFAUIgCADIAAADIgCAGIgCAFIgCAFIgJAWIgGALIgDAFIgJARIgDAEIgCAEIgCADIgCADIgEAFIAAABIgRAWIgEAGIgJALIgCACIgSATIgBACIgCAAIgDADIgJAJIAAAAIgGAFIgVASIgFADIABAAIgEACIgJAHIgDACIgCACIgfASIgLAFIgFAEIgCAAIgBABIgeAMIgFACIgCAAIgHADIgJADIgCAAIgDABIgFABQgYAHgaADIgCAAIgBAAIgCAAQgYADgYAAIgHAAg");
	this.shape_1.setTransform(39.7,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.302)").s().p("AgHGMIgXgBQgfgDgegGIgEgBQgZgGgYgJIgEgCIgFgCIgIgDIgEgCIgEgCIgegQIgRgLQgOgJgNgLIgPgNIgQgPIgCgCIgDgCIgBgBIgFgGIgCgCIgEgEIAAAAIgPgQIgDgFIgIgJIgCgDIAAgBIgNgSIgEgFIgGgJIgCgFIgHgNIgDgFIgFgLIgLgZIgBgEIgBAAIAAgBIgBgFIgDgKIgHgXIgCgLIgCgEIgDgUIgBgEIAAgCIgBgKIAAgDIgBgCIgBgUIAAgGIgBgIIAAAAIAAgGIAAgDIABgQIAAgEIAAgKIABgGIACgUIAAgBIAAgEIAAAAIACgJIAAgCIABgEIAFgVIABgEIABgHIACgGIABgDIADgJIAEgMIACgGIANgdIAFgKIABgBIACgFIABgBIAQgZIABgCIAIgMIAEgGQALgNALgNIAAgBIAFgEIAKgLIACgCIAAgBIACgCIADgCQAWgVAYgSIAFgDIAMgIIALgHIAAgBIACgBIAEgCIAOgIQBLgnBagCIAEgBIALAAIAeABQASABASADQAaAEAZAHIALAEIABABQAdAJAbAPIAFACQAbAPAaAUIAHAGIABABIAMALIABABIABABIAAAAIADACIAMALIALANIACADIAEACIACADIAFAGIACABIATAZIAGAKIAEAFQAJAOAIAOIAEAKIADAFIAAABIAIASIABACIACADIACAGIABAEIABAEIABABIAGATIADANIABAFIAFASIAAADIAAAAIABADIABAMIABAGIACATIAAACIABACIAAANIAAADIAAACIAAAKIAAAGIAAACIAAADIAAAHIAAAFIgDAXIAAAEIAAABIgCAMIAAAFIgDARIgBAGIgEAMIgFAUIgCADIAAADIgCAGIgCAFIgCAFIgJAWIgGALIgDAFIgJARIgDAEIgCAEIgCADIgCADIgEAFIAAABIgRAWIgEAGIgJALIgCACIgSATIgBACIgCAAIgDADIgJAJIAAAAIgGAFIgVASIgFADIABAAIgEACIgJAHIgDACIgCACIgfASIgLAFIgFAEIgCAAIgBABIgeAMIgFACIgCAAIgHADIgJADIgCAAIgDABIgFABQgYAHgaADIgCAAIgBAAIgCAAQgYADgYAAIgHAAg");
	this.shape_2.setTransform(39.7,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Help
	this.instance = new lib.SymbolHelp("synched",0);
	this.instance.setTransform(39.7,38.2,0.9,0.9,0,0,0,39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Help
	this.instance_1 = new lib.Symbol("synched",0);
	this.instance_1.setTransform(39.6,39.6,1,1,0,0,0,39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


// stage content:
(lib.LevelMenu_Canvas = function() {
	this.initialize();

	// mcHelp
	this.mcHelp = new lib.mcHelp();
	this.mcHelp.setTransform(512,384,1,1,0,0,0,512,384);

	// Buttons
	this.pbQuit = new lib.pbQuit();
	this.pbQuit.setTransform(957.8,53.2,1,1,0,0,0,40,40);

	this.pbHelp = new lib.pbHelp();
	this.pbHelp.setTransform(64.1,52.8,1,1,0,0,0,39.6,39.6);

	this.mcScore_4 = new lib.mcScore();
	this.mcScore_4.setTransform(827.9,174.1,1,1,0,0,0,74.2,20.7);

	this.pbLevel_4 = new lib.pbLevel_5();
	this.pbLevel_4.setTransform(831.7,264.1,1,1,0,0,0,94.5,94.5);

	this.mcScore_1 = new lib.mcScore();
	this.mcScore_1.setTransform(222.7,463.7,1,1,0,0,0,74.2,20.7);

	this.pbLevel_1 = new lib.pbLevel_2();
	this.pbLevel_1.setTransform(228,558,1,1,0,0,0,96,98.8);

	this.mcScore_3 = new lib.mcScore();
	this.mcScore_3.setTransform(714.2,463.8,1,1,0,0,0,74.2,20.7);

	this.pbLevel_3 = new lib.pbLevel_4();
	this.pbLevel_3.setTransform(718,553.9,1,1,0,0,0,94.5,94.5);

	this.mcScore_2 = new lib.mcScore();
	this.mcScore_2.setTransform(480.2,463.8,1,1,0,0,0,74.2,20.7);

	this.pbLevel_2 = new lib.pbLevel_3();
	this.pbLevel_2.setTransform(480,554.8,1,1,0,0,0,90.5,95.5);

	this.mcScore_0 = new lib.mcScore();
	this.mcScore_0.setTransform(169,174.1,1,1,0,0,0,74.2,20.7);

	this.pbLevel_0 = new lib.pbLevel_1();
	this.pbLevel_0.setTransform(77.1,169.6);

	// Bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDC800").s().p("EhP/gIDMCf/AAAIAAGIQoiEr1LBLQnUAao0gDQksAAlzgJIzcgaQxWgXmQgGUgkkgAFgYFAE3g");
	this.shape.setTransform(512,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFFFB").s().p("EhP/ADEUAYFgE1AkkAAFQGQAGRWAYITcAZQFzAKEsAAQI0ADHUgbQVLhKIikuIAAAbQohE8zfB4QqRBBuoAHQhzAAzXgUQzKgVmJADUgkkAAugYFAFYg");
	this.shape_1.setTransform(512,83.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007CD1").s().p("EhQMAGrIAApaQCSAPDXAgQD7AnCIANQDtAXEQABQIyAAIqg1QFvgkIthRQJmhbDzgaQHgg1GxgBQF3ABGYAlQEUAaGgA4QHiBDCUAQQFRAmEDAAQD5AACzgbQAxgIA2gKQAmgIEdhDQEjhDAigIQDggrBdgNQCugXDBgBQCQAADlAgQCmAWBfAVIAAMLg");
	this.shape_2.setTransform(422.3,713.8,1,1,0,0,0,-88.4,-11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#99CC00","#F4FFD2"],[0,1],1.4,137.5,-1.6,-89.6).s().p("AT3GfQhXgwgwhSQgyhTgBhlQABhlAxhRQAwhSBSgxQBSgwBmgCQBlACBTAwQBSAxAwBSQAxBRABBlIAAASIAAAdIAAASImgAAQgBABAIARQAIASAZARQAaARAzACQAhgBAagNQAagNAQgNIAQgNIBuCvQAAACgRAPQgSAQgkATQgjAVgyAPQgzAQhBABQhwgBhWgxgAXkAqQgBgngRgRQgQgUgZAAQgYAAgRAUQgRARAAAnIB1AAIAAAAgAlRG0Qg0gbgdgxQgdgwAAg+QAAg+AggwQAggwBFgdQBFgbBugBIBoAAQAAgBgHgRQgIgRgZgQQgZgRg0gBQggAAgbANQgaANgQALIgQANIhuitIARgRQATgPAigUQAjgUAzgQQAzgQBCgBQBtACBWAwQBXAxAxBSQAxBRABBlIAACwIAACoIkpAAIgahOIgKAPQgKAPgUATQgVATggAOQggAPgrABQhJgBg0gcgAhuCnQgYAVgBAeQABAPAMAMQALALAPABQAaAAASgbQAUgaABg6Qg2ABgZAUgAF/G9IAAj3IDqjDIjeAAIAAj1IJXAAIAAD1IjqDDID3AAIAAD3gAt5G9IAAn5IicH5IkRAAIicn5IAAH5IlSAAIAAuMIHhAAICWHsICVnsIHhAAIAAOMg");
	this.shape_3.setTransform(493.1,254.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#007DC7").ss(15,1,1).p("AZhjUQhSgwhmgCQhmAChSAwQhSAwgwBTQgxBRgBBkQABBmAyBTQAxBSBWAwQBWAwBwACQBBgBAzgQQAzgPAjgVQAjgUASgPQARgPAAgCIhuivQAAABgQAMQgPANgaANQgbANghAAQgzgBgZgRQgZgSgJgRQgHgRAAgCIGgAAQAAgDAAgPQAAgOAAgPQAAgOAAgEQgBhkgwhRQgxhThSgwgAkxjSQgiAVgSAPQgSAPAAABIBuCuQABgBAPgNQAQgKAagNQAbgNAgAAQA0ABAZARQAZAQAIARQAIASgBAAIhnAAQhvABhEAbQhGAcggAxQggAwAAA+QABA+AcAwQAdAxA0AbQA1AcBIABQArgBAggOQAggPAVgTQAUgTAKgPQAKgPAAAAIAaBOIEpAAQAAhOAAhaQAAhbAAhWQgBhkgxhRQgxhThXgwQhWgwhtgCQhCABgzAQQgzAPgjAUgAiGDaQAAgfAYgUQAagVA1AAQgBA7gTAZQgTAbgagBQgPAAgLgLQgMgMAAgPgAydAcIiWnsInhAAIAAONIFSAAIAAn5ICcH5IERAAICcn5IAAH5IFSAAIAAuNInhAAgAL4DGIDqjDIAAj1IpWAAIAAD1IDeAAIjrDDIAAD3IJwAAIAAj3gAWpgiQAZAAARATQAQASABAnIh1AAQABgnAQgSQARgTAYAAg");
	this.shape_4.setTransform(493.1,254.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#79A800","#F4FFD2"],[0,1],1.4,131.8,-1,-48.8).s().p("AT3GfQhXgwgwhSQgyhTgBhlQABhlAxhRQAwhSBSgxQBSgwBmgCQBlACBTAwQBSAxAwBSQAxBRABBlIAAASIAAAdIAAASImgAAQgBABAIARQAIASAZARQAaARAzACQAhgBAagNQAagNAQgNIAQgNIBuCvQAAACgRAPQgSAQgkATQgjAVgyAPQgzAQhBABQhwgBhWgxgAXkAqQgBgngRgRQgQgUgZAAQgYAAgRAUQgRARAAAnIB1AAIAAAAgAlRG0Qg0gbgdgxQgdgwAAg+QAAg+AggwQAggwBFgdQBFgbBugBIBoAAQAAgBgHgRQgIgRgZgQQgZgRg0gBQggAAgbANQgaANgQALIgQANIhuitIARgRQATgPAigUQAjgUAzgQQAzgQBCgBQBtACBWAwQBXAxAxBSQAxBRABBlIAACwIAACoIkpAAIgahOIgKAPQgKAPgUATQgVATggAOQggAPgrABQhJgBg0gcgAhuCnQgYAVgBAeQABAPAMAMQALALAPABQAaAAASgbQAUgaABg6Qg2ABgZAUgAF/G9IAAj3IDqjDIjeAAIAAj1IJXAAIAAD1IjqDDID3AAIAAD3gAt5G9IAAn5IicH5IkRAAIicn5IAAH5IlSAAIAAuMIHhAAICWHsICVnsIHhAAIAAOMg");
	this.shape_5.setTransform(493.1,254.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(25,1,1).p("AZhjUQhSgwhmgCQhmAChSAwQhSAwgwBTQgxBRgBBkQABBmAyBTQAxBSBWAwQBWAwBwACQBBgBAzgQQAzgPAjgVQAjgUASgPQARgPAAgCIhuivQAAABgQAMQgPANgaANQgbANghAAQgzgBgZgRQgZgSgJgRQgHgRAAgCIGgAAQAAgDAAgPQAAgOAAgPQAAgOAAgEQgBhkgwhRQgxhThSgwgAkxjSQgiAVgSAPQgSAPAAABIBuCuQABgBAPgNQAQgKAagNQAbgNAgAAQA0ABAZARQAZAQAIARQAIASgBAAIhnAAQhvABhEAbQhGAcggAxQggAwAAA+QABA+AcAwQAdAxA0AbQA1AcBIABQArgBAggOQAggPAVgTQAUgTAKgPQAKgPAAAAIAaBOIEpAAQAAhOAAhaQAAhbAAhWQgBhkgxhRQgxhThXgwQhWgwhtgCQhCABgzAQQgzAPgjAUgAiGDaQAAgfAYgUQAagVA1AAQgBA7gTAZQgTAbgagBQgPAAgLgLQgMgMAAgPgAydAcIiWnsInhAAIAAONIFSAAIAAn5ICcH5IERAAICcn5IAAH5IFSAAIAAuNInhAAgAL4DGIDqjDIAAj1IpWAAIAAD1IDeAAIjrDDIAAD3IJwAAIAAj3gAWAgPQARgTAYAAQAZAAARATQAQASABAnIh1AAQABgnAQgSg");
	this.shape_6.setTransform(493.1,254.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#79A800","#F4FFD2"],[0,1],1.4,131.8,-1,-48.8).s().p("AT3GfQhXgwgwhSQgyhTgBhlQABhlAxhRQAwhSBSgxQBSgwBmgCQBlACBTAwQBSAxAwBSQAxBRABBlIAAASIAAAdIAAASImgAAQgBABAIARQAIASAZARQAaARAzACQAhgBAagNQAagNAQgNIAQgNIBuCvQAAACgRAPQgSAQgkATQgjAVgyAPQgzAQhBABQhwgBhWgxgAXkAqQgBgngRgRQgQgUgZAAQgYAAgRAUQgRARAAAnIB1AAIAAAAgAlRG0Qg0gbgdgxQgdgwAAg+QAAg+AggwQAggwBFgdQBFgbBugBIBoAAQAAgBgHgRQgIgRgZgQQgZgRg0gBQggAAgbANQgaANgQALIgQANIhuitIARgRQATgPAigUQAjgUAzgQQAzgQBCgBQBtACBWAwQBXAxAxBSQAxBRABBlIAACwIAACoIkpAAIgahOIgKAPQgKAPgUATQgVATggAOQggAPgrABQhJgBg0gcgAhuCnQgYAVgBAeQABAPAMAMQALALAPABQAaAAASgbQAUgaABg6Qg2ABgZAUgAF/G9IAAj3IDqjDIjeAAIAAj1IJXAAIAAD1IjqDDID3AAIAAD3gAt5G9IAAn5IicH5IkRAAIicn5IAAH5IlSAAIAAuMIHhAAICWHsICVnsIHhAAIAAOMg");
	this.shape_7.setTransform(493.1,254.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABAAIACgBIgDACIgCABIADgCg");
	this.shape_8.setTransform(458.9,241.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("AW8JOQiSgChwhAIgEgCQgpgYgjgdQgHAkgbAcIgBABQglAkgzAAIpwAAQgdAAgXgLQgYALgcAAIkpAAQgeAAgZgNIgKAGIgDABQg1AYhHACIgBAAIgCAAQhqgBhMgqIgBAAIgBgBQgbgPgWgRQgIAKgIAJIgBABQglAkgzAAIlSAAQgtAAghgbIgDADIgBAAQghAYgpAAIkRAAQgpAAgggYIgFgDQghAbgtAAIlSAAQg0AAgkgkQglglAAg0IAAuNQAAg0AlgjQAkgmA0AAIHhAAQApAAAiAZQAgAZANAnIAAAAIAeBiIAdhiQANgnAggZIABAAQAhgZApAAIHhAAQA0AAAlAmQAjAjABA0IAAC6QAWgSAjgVIgEAEIABgBIAFgDQAtgbBDgVIAAABQBCgWBWAAIACAAIABAAQCOABBxBAQBBAlAyA0IAAgJQAAg0AmglQAjglA0AAIJXAAQA0AAAlAlQAeAfAFAqQAlgkAvgbIADgBQBsg/CGgCIAAAAIAEAAIAAAAQCGACBsA/IAEABQBuBBBABvQBABtADCFIAAACIAAASIAAAdIAAASQAAA0gkAlIAAAAQgaAZghAIIAFAIQAPAZADAeQARAXgVAkQgOAagrAlIgCACQgYAVgtAaIgBAAQgvAbhBAUIgCAAQhCAVhSABgAnDAeQAXgVAegOIg1hWgAlSkWIgFAEIABgBIAGgDg");
	this.shape_9.setTransform(493.1,269.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7DF00").s().p("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");
	this.shape_10.setTransform(515.9,268.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDEC00").s().p("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");
	this.shape_11.setTransform(515.9,268.4,1,1,0,0,0,0,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVQwIg+gDQhVgGhQgSIgNgDQhDgRg/gYIgMgEIgMgGIgXgKIgLgFIgLgEQgogVgpgYIgtgcQglgZgkgcIgrgkIgrgpIgBAAIgFgFIgGgHIgCgBIgPgQIgGgGIgJgKIAAAAQgVgVgTgYIgJgMIgUgZIgHgIIgBgDIgjgwIgJgOIgQgZIgHgMIgTgjIgHgNIgPgfQgPghgNghIAAAAIgFgLIgBgEIAAgCIgFgMIgIgaQgLgggHggIgGgbIgDgNQgFgbgEgcIgBAAIgBgJIgBgEIgDgbIgBgMIgBgCQgDgbgBgbIgBgSIgBgVIAAgDIAAgNIAAgKIABgvIAAgKIACgbIABgOIAGg3IAAgCIACgMIAAgCIAEgZIABgBIABgOIABAAQAGgdAHgcIgBAAIADgJIAEgSIAGgSIABgGQAEgOAFgNIALggIAGgPQAPgoASglIAPgeIADgDIAFgLIACgEQAUgiAWgiIAEgGIAWgfIAMgQQAcglAfgiIAAgBIANgPIAcgcIAEgFIABgBIAFgFIAIgHQA8g6BBgwIAMgHIAggWIAfgUIACgBIAFgDIAJgFIAmgVQDLhqDygIIAOgBIAfAAQApAAAoADQAxACAwAIQBHALBDAUIAeAKIACABQBQAaBLAoIALAGQBJApBEA2IAWARIACACIAgAcIADADIADABIABACIAHAGIAAAAIAgAfIAgAhIAGAIIAGAHIABAAIAGAFIARAUIACADQAbAgAZAiIASAaIAJAOQAZAlAVAoIANAbIAGANIAAABQANAYALAaIABAEIADAJIAHASIAEAJIAEAKIAAADIARA1IAJAjIADANIALAyIABAHIABACIABAHIAFAhIgBAAIACAOIAFAzIABAJIAAAEIACAiIABAIIAAABIAAAEIAAAeIAAASIAAAEIgBAJIgBARIAAAQIgFA+IgCAKIAAADIgEAhIgCANIgIAwIgEAMIgHAhIAAAAQgIAdgJAcIgDAHIgCAHIABAAIgFAPIgGAQIgGAOQgLAdgOAeIgQAfIgHANIgYAsIgHALIABAAQgFAFgCAGIgIALIgEAHIgIANIgDACQgVAfgWAdIgPARIgYAcIgEAGQgYAagZAYIgEAEIgDAFIgGAGIgbAZIgBAAIgOANQgdAZgeAXIgMAJIAAAAIgIAGIgXARIgKAHIgHAEQgoAagpAXIgfAPIgOAIIgEACIgFABQgnAUgqAOIgMAFIgFABIgSAGIgZAHIgGADIgIACIgMACQhDAShHAKIgDAAIgBAAIgDAAIgHAAQg/AIhCAAIgVAAg");
	this.shape_12.setTransform(515.9,268.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C5D4BC").ss(15,0,1).p("AMuKlIAAw2QAAjIjIAAI3eAA");
	this.shape_13.setTransform(601.1,289.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFCC00").ss(15,0,1).p("AmFFZIH4AAQDIAAAAjIIAAo0");
	this.shape_14.setTransform(800.5,370.5);

	this.instance = new lib.Symbol8("single",1);
	this.instance.setTransform(769,404.3,0.726,0.726,0,0,0,15.7,29.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFCC00").ss(15,0,1).p("AAAJIIAAyP");
	this.shape_15.setTransform(682.5,456);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C5D4BC").ss(15,1,1).p("An/AAIP+AA");
	this.shape_16.setTransform(725.9,558.8);

	this.instance_1 = new lib.Symbol8("single",0);
	this.instance_1.setTransform(362.3,417,0.726,0.726,90,0,0,15.7,29.9);

	this.instance_2 = new lib.Symbol8("single",1);
	this.instance_2.setTransform(306,302,0.726,0.726,180,0,0,15.7,29.9);

	this.instance_3 = new lib.Symbol8("single",1);
	this.instance_3.setTransform(191,400.8,0.726,0.726,90,0,0,15.7,29.9);

	this.instance_4 = new lib.Symbol8("single",1);
	this.instance_4.setTransform(436,558,0.726,0.726,0,0,0,15.7,29.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C5D4BC").ss(15,0,1).p("AjZs6IAAViQAADIDIAAIE2AA");
	this.shape_17.setTransform(381.8,98.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C5D4BC").ss(15,1,1).p("An+AAIP9AA");
	this.shape_18.setTransform(444,174);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FDC800").ss(15,0,1).p("AGGUqIn4AAQjIAAAAjIMAAAgnW");
	this.shape_19.setTransform(222.6,459.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FDC800").ss(15,0,1).p("A8qAAMA5VAAA");
	this.shape_20.setTransform(475.8,558);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FDC800").ss(15,0,1).p("An+AAIP+AA");
	this.shape_21.setTransform(738.3,405);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C5D4BC").ss(15,0,1).p("AAAS4MAAAglv");
	this.shape_22.setTransform(362.3,430.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFCC00").ss(15,0,1).p("AGGjZIn4AAQjIAAAADIIAAE2");
	this.shape_23.setTransform(393.8,291.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C5D4BC").ss(15,0,1).p("AAAQiMAAAghD");
	this.shape_24.setTransform(682.5,374.3,1,1,0,0,0,0,-33.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FDC800").ss(15,0,1).p("AtiAAIbFAA");
	this.shape_25.setTransform(268.8,302);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C5D4BC").ss(15,1,1).p("Ap/D/IQ3AAQDIAAAAjIIAAk1");
	this.shape_26.setTransform(749,258.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#392350","rgba(135,106,166,0.8)"],[0,1],-2.5,512,2.5,-511.9).s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape_27.setTransform(512,384);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(918,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(855.2,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(792.5,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(729.7,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(667,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(604.2,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(980.8,669.2,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(541.5,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(416,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(353.2,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(290.5,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(227.7,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(165,669.2,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(102.2,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(478.7,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(39.5,669.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(918,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(855.2,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(792.5,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(729.7,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(667,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(604.2,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(980.8,607,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(541.5,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(918,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(855.2,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(792.5,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(729.7,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(667,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(604.2,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(980.8,544.7,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(541.5,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(416,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_38 = new lib.Symbol7();
	this.instance_38.setTransform(353.2,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_39 = new lib.Symbol7();
	this.instance_39.setTransform(290.5,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_40 = new lib.Symbol7();
	this.instance_40.setTransform(227.7,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_41 = new lib.Symbol7();
	this.instance_41.setTransform(165,607,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_42 = new lib.Symbol7();
	this.instance_42.setTransform(102.2,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_43 = new lib.Symbol7();
	this.instance_43.setTransform(478.7,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_44 = new lib.Symbol7();
	this.instance_44.setTransform(39.5,607,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_45 = new lib.Symbol7();
	this.instance_45.setTransform(416,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_46 = new lib.Symbol7();
	this.instance_46.setTransform(353.2,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_47 = new lib.Symbol7();
	this.instance_47.setTransform(290.5,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_48 = new lib.Symbol7();
	this.instance_48.setTransform(227.7,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_49 = new lib.Symbol7();
	this.instance_49.setTransform(165,544.7,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_50 = new lib.Symbol7();
	this.instance_50.setTransform(102.2,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_51 = new lib.Symbol7();
	this.instance_51.setTransform(478.7,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_52 = new lib.Symbol7();
	this.instance_52.setTransform(39.5,544.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_53 = new lib.Symbol7();
	this.instance_53.setTransform(918,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_54 = new lib.Symbol7();
	this.instance_54.setTransform(855.2,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_55 = new lib.Symbol7();
	this.instance_55.setTransform(792.5,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_56 = new lib.Symbol7();
	this.instance_56.setTransform(729.7,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_57 = new lib.Symbol7();
	this.instance_57.setTransform(667,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_58 = new lib.Symbol7();
	this.instance_58.setTransform(604.2,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_59 = new lib.Symbol7();
	this.instance_59.setTransform(980.8,482.5,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_60 = new lib.Symbol7();
	this.instance_60.setTransform(541.5,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_61 = new lib.Symbol7();
	this.instance_61.setTransform(918,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_62 = new lib.Symbol7();
	this.instance_62.setTransform(855.2,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_63 = new lib.Symbol7();
	this.instance_63.setTransform(792.5,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_64 = new lib.Symbol7();
	this.instance_64.setTransform(729.7,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_65 = new lib.Symbol7();
	this.instance_65.setTransform(667,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_66 = new lib.Symbol7();
	this.instance_66.setTransform(604.2,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_67 = new lib.Symbol7();
	this.instance_67.setTransform(980.8,420.2,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_68 = new lib.Symbol7();
	this.instance_68.setTransform(541.5,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_69 = new lib.Symbol7();
	this.instance_69.setTransform(416,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_70 = new lib.Symbol7();
	this.instance_70.setTransform(353.2,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_71 = new lib.Symbol7();
	this.instance_71.setTransform(290.5,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_72 = new lib.Symbol7();
	this.instance_72.setTransform(227.7,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_73 = new lib.Symbol7();
	this.instance_73.setTransform(165,482.5,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_74 = new lib.Symbol7();
	this.instance_74.setTransform(102.2,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_75 = new lib.Symbol7();
	this.instance_75.setTransform(478.7,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_76 = new lib.Symbol7();
	this.instance_76.setTransform(39.5,482.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_77 = new lib.Symbol7();
	this.instance_77.setTransform(416,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_78 = new lib.Symbol7();
	this.instance_78.setTransform(353.2,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_79 = new lib.Symbol7();
	this.instance_79.setTransform(290.5,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_80 = new lib.Symbol7();
	this.instance_80.setTransform(227.7,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_81 = new lib.Symbol7();
	this.instance_81.setTransform(165,420.2,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_82 = new lib.Symbol7();
	this.instance_82.setTransform(102.2,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_83 = new lib.Symbol7();
	this.instance_83.setTransform(478.7,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_84 = new lib.Symbol7();
	this.instance_84.setTransform(39.5,420.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_85 = new lib.Symbol7();
	this.instance_85.setTransform(918,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_86 = new lib.Symbol7();
	this.instance_86.setTransform(855.2,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_87 = new lib.Symbol7();
	this.instance_87.setTransform(792.5,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_88 = new lib.Symbol7();
	this.instance_88.setTransform(729.7,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_89 = new lib.Symbol7();
	this.instance_89.setTransform(667,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_90 = new lib.Symbol7();
	this.instance_90.setTransform(604.2,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_91 = new lib.Symbol7();
	this.instance_91.setTransform(980.8,358,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_92 = new lib.Symbol7();
	this.instance_92.setTransform(541.5,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_93 = new lib.Symbol7();
	this.instance_93.setTransform(918,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_94 = new lib.Symbol7();
	this.instance_94.setTransform(855.2,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_95 = new lib.Symbol7();
	this.instance_95.setTransform(792.5,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_96 = new lib.Symbol7();
	this.instance_96.setTransform(729.7,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_97 = new lib.Symbol7();
	this.instance_97.setTransform(667,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_98 = new lib.Symbol7();
	this.instance_98.setTransform(604.2,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_99 = new lib.Symbol7();
	this.instance_99.setTransform(980.8,295.7,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_100 = new lib.Symbol7();
	this.instance_100.setTransform(541.5,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_101 = new lib.Symbol7();
	this.instance_101.setTransform(416,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_102 = new lib.Symbol7();
	this.instance_102.setTransform(353.2,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_103 = new lib.Symbol7();
	this.instance_103.setTransform(290.5,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_104 = new lib.Symbol7();
	this.instance_104.setTransform(227.7,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_105 = new lib.Symbol7();
	this.instance_105.setTransform(165,358,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_106 = new lib.Symbol7();
	this.instance_106.setTransform(102.2,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_107 = new lib.Symbol7();
	this.instance_107.setTransform(478.7,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_108 = new lib.Symbol7();
	this.instance_108.setTransform(39.5,358,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_109 = new lib.Symbol7();
	this.instance_109.setTransform(416,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_110 = new lib.Symbol7();
	this.instance_110.setTransform(353.2,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_111 = new lib.Symbol7();
	this.instance_111.setTransform(290.5,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_112 = new lib.Symbol7();
	this.instance_112.setTransform(227.7,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_113 = new lib.Symbol7();
	this.instance_113.setTransform(165,295.7,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_114 = new lib.Symbol7();
	this.instance_114.setTransform(102.2,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_115 = new lib.Symbol7();
	this.instance_115.setTransform(478.7,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_116 = new lib.Symbol7();
	this.instance_116.setTransform(39.5,295.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_117 = new lib.Symbol7();
	this.instance_117.setTransform(918,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_118 = new lib.Symbol7();
	this.instance_118.setTransform(855.2,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_119 = new lib.Symbol7();
	this.instance_119.setTransform(792.5,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_120 = new lib.Symbol7();
	this.instance_120.setTransform(729.7,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_121 = new lib.Symbol7();
	this.instance_121.setTransform(667,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_122 = new lib.Symbol7();
	this.instance_122.setTransform(604.2,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_123 = new lib.Symbol7();
	this.instance_123.setTransform(980.8,233.5,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_124 = new lib.Symbol7();
	this.instance_124.setTransform(541.5,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_125 = new lib.Symbol7();
	this.instance_125.setTransform(918,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_126 = new lib.Symbol7();
	this.instance_126.setTransform(855.2,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_127 = new lib.Symbol7();
	this.instance_127.setTransform(792.5,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_128 = new lib.Symbol7();
	this.instance_128.setTransform(729.7,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_129 = new lib.Symbol7();
	this.instance_129.setTransform(667,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_130 = new lib.Symbol7();
	this.instance_130.setTransform(604.2,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_131 = new lib.Symbol7();
	this.instance_131.setTransform(980.8,171.2,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_132 = new lib.Symbol7();
	this.instance_132.setTransform(541.5,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_133 = new lib.Symbol7();
	this.instance_133.setTransform(416,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_134 = new lib.Symbol7();
	this.instance_134.setTransform(353.2,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_135 = new lib.Symbol7();
	this.instance_135.setTransform(290.5,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_136 = new lib.Symbol7();
	this.instance_136.setTransform(227.7,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_137 = new lib.Symbol7();
	this.instance_137.setTransform(165,233.5,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_138 = new lib.Symbol7();
	this.instance_138.setTransform(102.2,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_139 = new lib.Symbol7();
	this.instance_139.setTransform(478.7,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_140 = new lib.Symbol7();
	this.instance_140.setTransform(39.5,233.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_141 = new lib.Symbol7();
	this.instance_141.setTransform(416,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_142 = new lib.Symbol7();
	this.instance_142.setTransform(353.2,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_143 = new lib.Symbol7();
	this.instance_143.setTransform(290.5,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_144 = new lib.Symbol7();
	this.instance_144.setTransform(227.7,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_145 = new lib.Symbol7();
	this.instance_145.setTransform(165,171.2,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_146 = new lib.Symbol7();
	this.instance_146.setTransform(102.2,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_147 = new lib.Symbol7();
	this.instance_147.setTransform(478.7,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_148 = new lib.Symbol7();
	this.instance_148.setTransform(39.5,171.2,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_149 = new lib.Symbol7();
	this.instance_149.setTransform(918.4,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_150 = new lib.Symbol7();
	this.instance_150.setTransform(855.6,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_151 = new lib.Symbol7();
	this.instance_151.setTransform(792.8,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_152 = new lib.Symbol7();
	this.instance_152.setTransform(730,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_153 = new lib.Symbol7();
	this.instance_153.setTransform(667.2,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_154 = new lib.Symbol7();
	this.instance_154.setTransform(604.4,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_155 = new lib.Symbol7();
	this.instance_155.setTransform(981.3,731.5,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_156 = new lib.Symbol7();
	this.instance_156.setTransform(541.6,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_157 = new lib.Symbol7();
	this.instance_157.setTransform(416.3,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_158 = new lib.Symbol7();
	this.instance_158.setTransform(353.5,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_159 = new lib.Symbol7();
	this.instance_159.setTransform(290.7,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_160 = new lib.Symbol7();
	this.instance_160.setTransform(227.9,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_161 = new lib.Symbol7();
	this.instance_161.setTransform(165.1,731.5,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_162 = new lib.Symbol7();
	this.instance_162.setTransform(102.3,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_163 = new lib.Symbol7();
	this.instance_163.setTransform(479.1,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_164 = new lib.Symbol7();
	this.instance_164.setTransform(39.5,731.5,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_165 = new lib.Symbol7();
	this.instance_165.setTransform(918,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_166 = new lib.Symbol7();
	this.instance_166.setTransform(855.2,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_167 = new lib.Symbol7();
	this.instance_167.setTransform(792.5,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_168 = new lib.Symbol7();
	this.instance_168.setTransform(729.7,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_169 = new lib.Symbol7();
	this.instance_169.setTransform(667,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_170 = new lib.Symbol7();
	this.instance_170.setTransform(604.2,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_171 = new lib.Symbol7();
	this.instance_171.setTransform(980.8,109,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_172 = new lib.Symbol7();
	this.instance_172.setTransform(541.5,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_173 = new lib.Symbol7();
	this.instance_173.setTransform(918,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_174 = new lib.Symbol7();
	this.instance_174.setTransform(855.2,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_175 = new lib.Symbol7();
	this.instance_175.setTransform(792.5,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_176 = new lib.Symbol7();
	this.instance_176.setTransform(729.7,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_177 = new lib.Symbol7();
	this.instance_177.setTransform(667,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_178 = new lib.Symbol7();
	this.instance_178.setTransform(604.2,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_179 = new lib.Symbol7();
	this.instance_179.setTransform(980.8,46.7,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_180 = new lib.Symbol7();
	this.instance_180.setTransform(541.5,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_181 = new lib.Symbol7();
	this.instance_181.setTransform(416,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_182 = new lib.Symbol7();
	this.instance_182.setTransform(353.2,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_183 = new lib.Symbol7();
	this.instance_183.setTransform(290.5,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_184 = new lib.Symbol7();
	this.instance_184.setTransform(227.7,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_185 = new lib.Symbol7();
	this.instance_185.setTransform(165,109,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_186 = new lib.Symbol7();
	this.instance_186.setTransform(102.2,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_187 = new lib.Symbol7();
	this.instance_187.setTransform(478.7,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_188 = new lib.Symbol7();
	this.instance_188.setTransform(39.5,109,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_189 = new lib.Symbol7();
	this.instance_189.setTransform(416,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_190 = new lib.Symbol7();
	this.instance_190.setTransform(353.2,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_191 = new lib.Symbol7();
	this.instance_191.setTransform(290.5,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_192 = new lib.Symbol7();
	this.instance_192.setTransform(227.7,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_193 = new lib.Symbol7();
	this.instance_193.setTransform(165,46.7,0.496,0.496,0,0,0,55.4,55.3);

	this.instance_194 = new lib.Symbol7();
	this.instance_194.setTransform(102.2,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_195 = new lib.Symbol7();
	this.instance_195.setTransform(478.7,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.instance_196 = new lib.Symbol7();
	this.instance_196.setTransform(39.5,46.7,0.496,0.496,0,0,0,55.3,55.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#392350").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape_28.setTransform(512,384);

	this.addChild(this.shape_28,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.instance_188,this.instance_187,this.instance_186,this.instance_185,this.instance_184,this.instance_183,this.instance_182,this.instance_181,this.instance_180,this.instance_179,this.instance_178,this.instance_177,this.instance_176,this.instance_175,this.instance_174,this.instance_173,this.instance_172,this.instance_171,this.instance_170,this.instance_169,this.instance_168,this.instance_167,this.instance_166,this.instance_165,this.instance_164,this.instance_163,this.instance_162,this.instance_161,this.instance_160,this.instance_159,this.instance_158,this.instance_157,this.instance_156,this.instance_155,this.instance_154,this.instance_153,this.instance_152,this.instance_151,this.instance_150,this.instance_149,this.instance_148,this.instance_147,this.instance_146,this.instance_145,this.instance_144,this.instance_143,this.instance_142,this.instance_141,this.instance_140,this.instance_139,this.instance_138,this.instance_137,this.instance_136,this.instance_135,this.instance_134,this.instance_133,this.instance_132,this.instance_131,this.instance_130,this.instance_129,this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape_16,this.shape_15,this.instance,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.pbLevel_0,this.mcScore_0,this.pbLevel_2,this.mcScore_2,this.pbLevel_3,this.mcScore_3,this.pbLevel_1,this.mcScore_1,this.pbLevel_4,this.mcScore_4,this.pbHelp,this.pbQuit,this.mcHelp);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(509.4,384,1026.7,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;