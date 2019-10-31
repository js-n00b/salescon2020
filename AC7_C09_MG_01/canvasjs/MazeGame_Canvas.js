(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		//{src:"sounds/Track_65.mp3", id:"BgMusic"},
		{src:"sounds/boyHurt.mp3", id:"boyHurt"},
		{src:"sounds/tadawav.mp3", id:"tadawav"},
		{src:"sounds/wrong00.mp3", id:"wrong00"},
		{src:"sounds/Correct_0.mp3", id:"Correct_0"},
		{src:"sounds/Correct_1.mp3", id:"Correct_1"},
		{src:"sounds/Correct_2.mp3", id:"Correct_2"},
		{src:"sounds/Wrong_0.mp3", id:"Wrong_0"},
		{src:"sounds/Wrong_1.mp3", id:"Wrong_1"},
		{src:"sounds/Wrong_2.mp3", id:"Wrong_2"},
		{src:"sounds/Wrong_2.mp3", id:"Wrong_2"},
		{src:"sounds/Retry_0.mp3", id:"Retry_0"},
		{src:"sounds/Retry_1.mp3", id:"Retry_1"},
		{src:"sounds/Retry_2.mp3", id:"Retry_2"},
		{src:"sounds/ShowAnswer_0.mp3", id:"ShowAnswer_0"},
		{src:"sounds/ShowAnswer_1.mp3", id:"ShowAnswer_1"},
		{src:"sounds/ShowAnswer_2.mp3", id:"ShowAnswer_2"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1422,773);


(lib.tailx = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0,0,0,0,0,4.1).s().p("AgGAfQgIgFgBgGIgBgDIAAAAIADgGQAIgUAAgTIgBgHIAAAAIASAhQAFAIAAAJQAAAIgFAGQgGAGgFAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAgFgFg");
	this.shape.setTransform(1.8,3.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.5,7.4);


(lib.mcTaskResult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Correct:1,Wrong:2});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhFBGQgegdABgpQgBgoAegdQAdgeAoABQAJAAAKABIACAAQAcAHAVAVQAeAdgBAoQABApgeAdQgdAegpgBQgoABgdgegAgyg0QgWAWABAeQgBAdAWAWQAWAVAcAAQAfAAAWgVQAVgWAAgdQAAgegVgWQgWgVgfAAQgcAAgWAVgAg7AgIAAgCIBxhKIAKAQIhxBKg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcRoute = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CCAA23","#627E00","#993300"],[0,0.604,1],0,-0.4,0,0,-0.4,518.8).s().p("EhH3AlfMAAAhK+MBqPAAAIAAMhMAlfAAAMAAAA+dgAPnfQMAyBAAAIAAsgMgyBAAAgAvnMgIGQAAIAASwISvAAIAAywIseAAIAAsgIshAAgEhBnAfQMAyAAAAIAAsgMgyAAAAgEAiYAMgIfQAAIAAsgI/QAAgAPnMgIMgAAIAAsgIsgAAgEgu2AMgIZAAAIAAsgI5AAAgEhBnAMgIMgAAIAAsgIsgAAgA8HmPIfOAAIAAMeIGRAAIAAseISvAAIAA5AI5AAAIAASxI/OAAgEAiYgGPIfQAAIAAsgI/QAAgEhBngGPIfRAAIAAmPI/RAAgA8HyvIZBAAIAAsgI5BAAgEhBngSvIfRAAIAAsgI/RAAg");
	this.shape.setTransform(460,240);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,920,480);


(lib.mcPlaceHolder = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


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


(lib.mcHelpPlaceHolder = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("animation", "20px 'AMCE Basic'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 479;
	this.text.setTransform(277.9,191,1.018,1.051);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgrvAg0MAAAhBnMBXeAAAMAAABBng");
	this.shape.setTransform(280,210);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,560,420);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],-0.1,-0.1,0,-0.1,-0.1,3.8).s().p("AgTATQgKgJABgOQAAgMABgEIADgGIALAIIAFADQgDAGAAAEQAAAHAFADQADACAEAAQAIAAABgDIAEgEQAJAEAGADIgFAJQgJALgPAAQgKAAgJgIg");
	this.shape.setTransform(8.5,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],0.4,-0.3,0,0.4,-0.3,4).s().p("AgPAVQgIgEgHgLIATgIQACAEADACQADADAGAAQANAAAAgJQAAgEgEgFIgCgEIAMgJQAJAKgBAMQgBAMgIAHQgJAHgLAAIgBABQgJAAgGgEg");
	this.shape_1.setTransform(22.6,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhOALQgGgDAAgIQABgDACgHIAMAIIAGADIAGADIgDAGQgCADgHgBQgHABgCgCgAA8AHQgCgCgCgFIATgJIADgDIADAEQADAGABACQgBAKgNAAQgIAAgDgDg");
	this.shape_2.setTransform(15.7,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIAoQgTgBgMgMIgFgGIgCgEIAAgCIgFgLQgCgJAAgHIACgOIAFgMIATAQIgDAGQgBAEAAAMQgBAOAKAJQAJAIAMAAQAPAAAJgLIAFgJIAEAAIAGACIADAAIgGAIQgHAJgJADIgQAHgAAnAZQgHgGgCgGIACAAIAKgGQAHAMAIAEQAHAEALgBQALgBAJgGQAJgHAAgMQABgMgJgKIAEgDIAHgGIAEgEIABADIABABQAEAMAAAOIABAAQgBAFgDAHIAAABIgGALQgEAEgHADQgPAIgUAAQgNAAgKgJg");
	this.shape_3.setTransform(15.2,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhqA7IgDgFIAAgCQgEgEgEgFIgBgEIgFgJIgCgFIgBAAIAAgBIAAgEIAAgCIAAgDIAAgHIAAgCIAAgBIABgKIACgFIAAgBQACgGACgCIgBAAIABAAIABgBIAAgCQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBgCIAAAAIAPANQAUAOAKAGQASALAHADIAOAGQAHAEACAFIgCABIgCAAIgHgCIgDAAQgGgDgKgFIgGgDIgGgFIgMgIIgEgDIgLgIIgUgOIgEANIgCALQAAAIACAKIAFAMIAAACIACADIAEAHIABACIADADIAAABIgCgCIADAEIAAABIgEgDgAh3gQIABgBIAAAAIgBABgAhtA5QgOgIgHgOIAAgJIABAAQgBAPATANQgNgMgFgQIgDgHIAAgHIABAAQACAZAUATIADACIAAABIgBgBIABABIAAABIgDgDgABpAsIAGgKIAAgBQADgIABgHIgBAAQgBgOgEgKIAAgBIgCgCIAAAAIgDADIgIAGIgDABIgNAJIgDADIgTALIgTAJIgKAFIgDAAIgCAAIgCgCQAAgGAGgBIAGgCIAXgNIAbgQIgCACIACgBQAQgOAEgCIgBgBIABABIABAAIABABIABACIABAAIgCgEIAAAAQAGAEADAIIABAGQACAHAAALIgBALQAAAFgEAFIgCAEIgCABIgCABIAAAAIgGAGIgBAAIAHgHIAAAAIgHAHIgBABIAGgIgAB0AeIAAgBIAAAAIAAABgAA2AUIgEAEIAFgEIgBAAIADgCIgDACgABtgLIADADIgCgEIgBABgABvAvIAHgPQAGgKgBgFQAAgJgBgDIAAgDIAAAAIADAQQABALgOASgAB6ArQAIgRABgHIgBgHIAAgCIAAAAIACALQABAFgKARgAgWASIg3geQgNgIgJgLQgGgHgEgKIAAgBIAOAHQANAIACAAIgGgTIAAgDQAOARAgAfQASAQACAJIAAACgAAQAEQAAgEAagUQAcgZAJgPIAAgBIABAGIgCAPIAAAAIATgHIAAAAIgFALIADAAIAQgGQgbAYgZAOQgXALgNAAQgGAAgBgDg");
	this.shape_4.setTransform(15.5,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFC9","#FFAA7E","#000000"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,2.5).s().p("AgSAIQgDgDAAgFQAAgGAJgEQAHgDAFAAQAKAAAHAGQAEAEABADIAAABQAAANgVAAQgJAAgKgGg");
	this.shape_5.setTransform(15.8,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.4,-2.4,0,-0.4,-2.4,7.1).s().p("AgmgEQABgqgEgKQAWAFATAHQALAGASAQIANANQgQAGgNAGIgMgIQgQgOgFgBIgDAAIACAZQACASACAHQgLANgEAOQgGgaAAgjg");
	this.shape_6.setTransform(4.3,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#A52515","#5D1C2A","#310720"],[0,0.506,1],8.7,-4.5,0,8.7,-4.5,16.2).s().p("AgVA7QgFgJgDgIIAAgHQABgQADgQQAEgaANgcQAIgTANgKIAQgKQgWAZgKArQgIAfAAAkQAAAQAFAOIAGAPIABABIgWggg");
	this.shape_7.setTransform(8.8,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6666").s().p("AB3AJIgOgKIAdgMIABARQAAALgDALQgGgJgHgIgAiEABIgCgaIADAAQAFACASAOIAMAJIgEABQgRAMgLANQgCgIgCgRg");
	this.shape_8.setTransform(15.4,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.8,-2.8,0,1.8,-2.8,16.2).s().p("AhwBWIgHgIQgEgEgHgLQgHgMgGgSQgFgSgCgpQgBgNAEgMQAFgOAKgNQALgNASgMIADgCQAOgIAQgGQAlgNAxAAQAgAAAZAKQAQAFANALIANAMQAIAHAGAJQAJANAGARQAGAUABAXQACA7g6AsQglAcgjAHQgBgFgEgEQgHgGgKABQgFAAgHACQgJAEAAAIQg0gHgogogAg2hAQgOAKgJAUQgNAcgFAaQgFAGAAADIgBAHQAAAMADAKQADAJAFAIIAXAhIAAgBIgIgPQgFgOAAgQQAAgkAIgfQAMgrAWgaIgQAKg");
	this.shape_9.setTransform(15.7,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-2.7,0,0.7,-2.7,6.7).s().p("AAOAVQAEgLAAgKIgCgSIgbANQgNgKgQgGQALgHAbgJIAlgNQAGAOgBAkQAAASgEARIgHAQQgFgQgKgOg");
	this.shape_10.setTransform(27.2,6.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.3,31.5);


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


(lib.Bg_Translucent = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.8)","rgba(0,0,0,0.8)"],[0,1],0,0,0,0,0,640).s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Ag2AFIABAAQAJACAWABQACAAACAAQACAAACAAQAOgBALgBQAEgBAEgBQAGgBAFgBQATgCAGgH");
	this.shape.setTransform(-1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0.4,-0.6,0,0.4,-0.6,4.9).s().p("AAHARIgPgCIgJgBIAAAAIgCAAIgKgEIgCgBQgKgEAAgFQAAgCAEgFIABgBIABgCIAAAAIABAAIABgBIAIgDIACAAIANgCQALAAANAFIAGACQAWAJAAAMIAAABIgNACIgCAAIgSACIgCAAg");
	this.shape_1.setTransform(4.5,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],-0.4,-0.7,0,-0.4,-0.7,4.8).s().p("AghANIgDgCQgDgCAAgFQAAgEAOgHIAIgDQANgFAMAAIAKABQAFABAFACIABABIADACQAIAGAAAFQAAADgDACIgEACIgGACIgGABIgQADIgGAAQgQAAgQgDg");
	this.shape_2.setTransform(-4.7,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],-0.3,-3.6,0,-0.3,-3.6,5.1).s().p("AgSBDIgEAAQgWAAgJgDIgBAAIAOiCIAHAAIABANIAEAHIABAAQAEAGAIAAQAHAAAGgEQAEgEABgFIAAgCIABgLIAIAAIArB0QgGAHgTAEIgLADIgIABQgLABgOABIgEAAg");
	this.shape_3.setTransform(-1,-3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.3,1.6,0,0.3,1.6,2.9).s().p("AgDAAIAAAAIADAAIADAAIABABIgHgBg");
	this.shape_4.setTransform(-2.9,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.4,1.5,0,0.4,1.5,2.8).s().p("AgEgCIAHgBIACAGIgHABg");
	this.shape_5.setTransform(0.6,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.2,0.9,0,0.2,0.9,2).s().p("AgRACIgBgKIAIAAQAEABAGgBIATAAIgBAJIAAABIgEAAIgGAAQgIABgHAEIgGACIgEgHg");
	this.shape_6.setTransform(-2.5,-9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.5,0,0,-0.5,2.9).s().p("AAGAUQgEgDgEgBIgEgkIAGACIAIAnIgCgBg");
	this.shape_7.setTransform(-2.5,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.1,-0.6,0,-0.1,-0.6,2.8).s().p("AAAASIgHgiIAHgCIAIAhIgBABIgHADg");
	this.shape_8.setTransform(1.2,5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,2).s().p("AgOABIgBgBIAGgBQAJgDAGgBIAGAAIAEAAQgBAFgGACQgGAEgGAAQgHAAgEgFg");
	this.shape_9.setTransform(-2.3,-8.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#EDD9C2","#00FFCC","#0099CC"],[0,0.455,1],5.1,-10.2,0,5.1,-10.2,5.1).s().p("AAAAAIAAAAIAAABg");
	this.shape_10.setTransform(-6.5,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.6).s().p("AgXASQgDgFAAgGQABgGAEgFQAFgHAIgFIAIgFIABAAQAEgBAEABIABAAIABABIACAAQAJADAEAGQABADgBADIgBAEIgCACIgEAEIgJAHIgIAGQgFAEgFAAIgIAAIgBAAQgEAAgCgEg");
	this.shape_11.setTransform(-4.1,7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,1.8).s().p("AgGgGIAAgCIAHABIAAACQAAAEACADIAEAHIgBAAQgEgBgCABIgBAAQgFgJAAgGg");
	this.shape_12.setTransform(-3.8,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.2,0.9,0,0.2,0.9,1.8).s().p("AgEADQAAgDACgCIAHAAIgCAGg");
	this.shape_13.setTransform(-3.9,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,2.7).s().p("AgEgUIAHABIACAlIgFAAIgEADg");
	this.shape_14.setTransform(0.2,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.7).s().p("AgCAQIgMgDIgFgBIgEgCIgDgCQgCgCAAgDQAAgFAGgGIACgCIABgBIABgBIAGgCIAFgBIAHAAQAHAAAIADQAIAEADAEQADAEAAAEQAAAFgEABIgHAEQgFACgHAAIgIAAg");
	this.shape_15.setTransform(1.6,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.1,2,0,0.1,2,2.7).s().p("AgDADIAAgFIAHAAIAAAFg");
	this.shape_16.setTransform(0.1,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],0.6,-3.2,0,0.6,-3.2,4.9).s().p("AAUA/IgIAAIgZgCIgEAAIgIgBQgRgCgJgEQAEgMAVhmIAAgCIAPAAQAFABAGgBIAbAAIAFAlIAJAhQALAnAAAJQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgDABIgIADIgJABIgJgBg");
	this.shape_17.setTransform(-1.6,-3.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.7).s().p("AgRAOIgHgEQgEgBAAgFQAAgEADgEQADgEAIgEQAIgDAGAAIAIAAIAFABIAGACIABABIABABIACACQAGAGAAAFQAAADgCACIgDACIgEACIgFABIgMADIgIAAQgHAAgFgCg");
	this.shape_18.setTransform(-4.9,8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,2.7).s().p("AAAASIgEAAIACglIAHgBIAAApIgFgDg");
	this.shape_19.setTransform(-3.5,5.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.1,2,0,-0.1,2,2.7).s().p("AgCgCIAGAAIAAAFIgHAAg");
	this.shape_20.setTransform(-3.4,2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,3.6).s().p("AARAWIgIAAQgFAAgFgEIgIgGIgJgHIgEgEIgCgCIgBgEQgBgDABgDQAEgGAJgDIACAAIABgBIABAAQAEgBAEABIAAABQADABAGADQAIAFAFAHQAEAFABAGQAAAGgDAFQgCAEgEAAIgBAAg");
	this.shape_21.setTransform(0.8,7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,1.8).s().p("AABAJQgCgBgEABIgBAAIADgHQADgDAAgFIAAgBIAHgBIAAACQAAAGgFAJIgBAAg");
	this.shape_22.setTransform(0.5,3.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.1,0.9,0,-0.1,0.9,1.8).s().p("AgEgBIAHgBQACACAAADIgHABQAAgEgCgBg");
	this.shape_23.setTransform(0.6,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],-0.6,-3.2,0,-0.6,-3.2,4.9).s().p("AglA/IgIgDIgDgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgJALgnIAJghIAFglIAbAAQAGABAFgBIAPAAIAAACQAVBmAEAMQgJAEgRACIgJABIgDAAIgZACIgIAAIgJABIgJgBg");
	this.shape_24.setTransform(-1.7,-3.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0.8,-1.2,0,0.8,-1.2,4.8).s().p("AgIAQIgJgBIAAAAIgCAAIgKgDIgCgBQgKgEAAgHQAAAAAEgFIABgBIABgCIAAAAIABAAIABgBIABgBIAHgCIACgBIAFgBIAIgBIADAAQAHgBAFACIAJADIAGABQAWAIAAAMIAAABIgNADIgCAAIgSACIgCABIgPgBg");
	this.shape_25.setTransform(1.3,8.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,-0.2,0,0,-0.2,2.1).s().p("AgZgEQAAgIAOAAIANABIAAATIgEACIgCABIgHACQgOgMAAgFgAAMAHIAAgLIAPANQgIgCgHAAg");
	this.shape_26.setTransform(-0.8,6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],1.8,-2.2,0,1.8,-2.2,5.1).s().p("AABBAQgrAAAAgKIAKguIAHgoIAEgbIABgBIAEgEIALAAQABAFAEAFIAGAGIACABQAJAFAHACIAAACIAAAAIACAHIAEAXQANAsAAAUQAAAEgQADIgKABIgHAAIgEAAIgDABIgCgBg");
	this.shape_27.setTransform(-0.7,-3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0,1.6,0,0,1.6,2.6).s().p("AgDADIAAgEIADAAIAEAAIAAAAIAAADIgEABIgDAAg");
	this.shape_28.setTransform(-0.1,3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.2,0.8,0,0.2,0.8,1.9).s().p("AgDAAIAAgBIAFAAIABABIABAAIgFACIgCgCg");
	this.shape_29.setTransform(0.8,2.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.4,0,0,-0.4,1.9).s().p("AgFABQADgCABgDIgCgFIAFgCQAEAHAAADQAAABgGAHIgFAFg");
	this.shape_30.setTransform(1,4.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,-0.5,0,0,-0.5,2.6).s().p("AgDgBIAAgQIADAAIAEgBIAAALIABAKIAAABIAAANIgDAAIgGABg");
	this.shape_31.setTransform(-0.1,5.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#EDD9C2","#00FFCC","#0099CC"],[0,0.455,1],1.6,1.3,0,1.6,1.3,5.1).s().p("AAYACIABAGIADARIgEgXgAgYgWIABgCIgEAag");
	this.shape_32.setTransform(-0.5,-7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],1.2,0.5,0,1.2,0.5,1.8).s().p("AADAHIgGgHQgEgCgCgFIAQAAIACACIABAAQgDABgCACQgDACAAABQAAADADAEIgCgBg");
	this.shape_33.setTransform(-0.3,-9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,1.8).s().p("AgFADQgDgDAAgBQAAgDADgDQACgCADAAQADAHAFAKIAAACQgGgBgHgGg");
	this.shape_34.setTransform(0.9,-9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],-1,-1.4,0,-1,-1.4,4.4).s().p("AgcAdIgDgIIgBgBIAAgCIAAAAIAAgBIAAgBQABgEACgFIABgBIADgFIAEgEIACgCQAHgJALgHIADgDQAUgLALAJQgBAFgFAHIgBACIgKANIgCABIgLANIgEAGIgBAAIgBABIgJAGIgCABQgFACgDAAQgEAAgCgCg");
	this.shape_35.setTransform(7.5,5.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0.8,-1.1,0,0.8,-1.1,5.2).s().p("AAVAYIgCgBIgQgGIgCgBIgNgJIgHgEIgCgBIgIgGIgBgBQgHgJADgFQABgDAGgCIABgBIACgBIABAAIAAAAIABAAIAJABIACAAIAFACIAGADIADABQAKAGAIAIIAEAEQAQAPgHAMIAAABIgNgDg");
	this.shape_36.setTransform(-5.7,6.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],1.6,-2.1,0,1.6,-2.1,5.1).s().p("AgWA9IgMgCQgPgCAAgDIAGgNIADgRIAEgKIADgNIAJg6IABgCIAEgDIALAAQACAFADAEIAHAGIABABQAIAFAHACIABAAIAAACIAAAAIABAEIABADIADALIAGAVQAIAlAJAMIgSAHIgBgBIgCACIgCAAIgFACQgLADgJAAIgXgDg");
	this.shape_37.setTransform(-0.4,-3.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],1.3,1.6,0,1.3,1.6,2.7).s().p("AgCAAIADAAIACAAIgEABg");
	this.shape_38.setTransform(2.1,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.8,0.7,0,-0.8,0.7,2.4).s().p("AAAACIgHgCIAEgDIALACIgIAFIAAgCg");
	this.shape_39.setTransform(-3.5,2.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.1,-0.1,0,-0.1,-0.1,2.7).s().p("AgQgOIAFgDIADgCIAAABIAZAdIgCACIgEAHg");
	this.shape_40.setTransform(3.6,3.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0.5,-0.3,0,0.5,-0.3,2.4).s().p("AgHAIIgGgCIASgPIAHADIACABIgRAPIgEgCg");
	this.shape_41.setTransform(-4.9,3.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,1.8).s().p("AAHAKQgGgCgGgFQgDgDAAgBQAAgDADgDQACgCADAAQADAHAFAKIAAACIgBAAg");
	this.shape_42.setTransform(0.9,-9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,5.2).s().p("AgkAWQgBgDAAgGIAAgCIAAgBIAAAAIAAgBIABgBQABgDADgDIABgBIABgBIABAAIAEgEIABgCIADgCQAKgIAMgEIAGgBQAWgHAJALIAAAAIgIAKIgCACIgNAKIgCABIgNAJIgHAEIAAAAIgBABIgLAEIgCAAIgGABQgGAAgDgDg");
	this.shape_43.setTransform(6,7.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#EDD9C2","#FFE24A","#93541C"],[0,0.455,1],0,0,0,0,0,4.8).s().p("AAZAbIgFgBIgFgCIgFgEQgJgDgEgFIgFgEQgMgIgLgNIgBgDQgBgEAEgEQADgEAPAEIAIACQALAEALAJIAFAFIACACIAFAFIAAACIABAAIAAACIABADQACAKgEAFQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgBAAg");
	this.shape_44.setTransform(-8.8,6.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#EDD9C2","#FF9999","#FF0066"],[0,0.455,1],-0.2,-2.9,0,-0.2,-2.9,5).s().p("AgWBAIgJgBQgMgCgJgFQAIgUADgPIALhUIAHAAIAAAMQACAEACADIABABQAEAFAHAAQAHAAAEgEQAHgDABgGIAAgBIACgLIAIAAIAFAeIABAHQAEAWAGAPQAEAOAMAVIgNAHIgFACIgFABIgEACIgBAAIAAABIgHACIgBAAQgOAEgRAAIgJgBg");
	this.shape_45.setTransform(-1.5,-3.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],-0.6,1.9,0,-0.6,1.9,2.9).s().p("AgDAAIABAAIAGAAIgBABIgGgBg");
	this.shape_46.setTransform(-4.4,2.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.9,2,0,0.9,2,3.1).s().p("AgFgCIABAAIAFgDIAFAIIgHACg");
	this.shape_47.setTransform(1,2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0.1,-0.3,0,0.1,-0.3,2.9).s().p("AgEAVIgFgHIgBgCIANghIAIABIgOAqIgBgBg");
	this.shape_48.setTransform(-5.2,5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],-0.2,-0.5,0,-0.2,-0.5,3.1).s().p("AAEARIgQgjIAJgCIAQAgIgCABIgDAEIgCABIgBACIAAABg");
	this.shape_49.setTransform(2.1,5.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FED3B1","#FEA89C","#FF8095"],[0,0.6,1],0.1,0.9,0,0.1,0.9,2.2).s().p("AgSACIAAgKIAIAAQAFABAFgBIATAAIgCAJIAAABIgEAAIgGAAQgHABgIAEIgGACQgDgDgBgEg");
	this.shape_50.setTransform(-2,-9.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFCDB","#FECFA4","#FF9999"],[0,0.6,1],0,0,0,0,0,2.2).s().p("AgPABIAAgBIAGgBQAJgDAGgBIAGAAIAEAAQgBAFgHACQgGAEgFAAQgIAAgEgFg");
	this.shape_51.setTransform(-1.9,-8.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#0000FF","#000000"],[0,1],-3.5,-2.8,0,-3.5,-2.8,5.4).s().p("AACAAIAAAAIgDABIADgBg");
	this.shape_52.setTransform(2.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_42},{t:this.shape_33},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.3,17.5,20.7);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.584,1],0,0,0,0,0,48.9).s().p("AlWFWQiOiNAAjJQAAjHCOiPQCPiODHAAQDJAACNCOQCPCPAADHQAADJiPCNQiNCPjJAAQjHAAiPiPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.5,-48.5,97.1,97.1);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.584,1],0,0,0,0,0,48.9).s().p("AlWFXQiOiOAAjJQAAjHCOiPQCPiODHAAQDIAACOCOQCPCPAADHQAADJiPCOQiOCOjIAAQjHAAiPiOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.5,-48.5,97.1,97.1);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0.141)","rgba(255,255,0,0.663)"],[0,0.431],3.2,1,0,3.2,1,37).s().p("AgZCdIitB0IBVi/IlLADIE3hxIiRiXIDKAzIgtksICZEEIB6ipIgODRIEGhLIjNCvID4BlIkLAJIBUC/Iith0Ig5EQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.5,-42.9,89.1,85.9);


(lib.SymbolHelp = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrDiQgPgPgCgVQACgWAPgOQANgPAWgBQAUACAOANQAPAOABAWQgBAWgPAPQgOAOgTABQgWgBgOgOgAgqBXQgNgMAAgTIgBhAQACgTAQgGQAPgGAWgEQALgDAKgHQANgGAIgMQAGgKABgUQAAgNgIgLQgIgMgMgHQgMgFgMAAQgVAAgMAKQgPAKgKAMQgKANgNALQgJAIgPABQgTAAgLgMQgKgOgBgWQABgaAOgUQAOgVAXgOQAVgLAZgJQAZgGAXgBQAqABAiARQAkARAVAeQAVAgABArQgBA3gfAgQgeAgg0AMIAAAYQAAATgMANQgOAMgSAAIgCAAQgVAAgMgMg");
	this.shape.setTransform(40,40.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.9,16.3,30.2,48.3);


(lib.Symbol14a = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF99B3","rgba(255,225,233,0)"],[0.235,0.839],-2.6,-0.6,0.2,0.9).s().p("AgeAWQgCgPAPgOQAOgPANACQAQABAEAFQAFAEgdAQQgZAQgKAAIgBAAg");
	this.shape.setTransform(5.5,3.9,1,1,0,0,0,-0.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF99B3","rgba(255,225,233,0)"],[0.235,0.839],-11.6,0.9,8.2,-6.6).s().p("AAWBZQglgUgZgcQgagcgCghQgCgjAUgYQAUgZAZABQAXABASAMQANAJAIAQQATBRgMBWQAAABAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgJAAgegPg");
	this.shape_1.setTransform(8.5,12.3,1,1,0,0,0,0.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AAAB3IAAAAIgDAAQgbgGgzgfQgygfgQgxQgFgWACgVQADgTAMgTQAPgVASgKQARgIAcAAQAMAAASAKQAQAIALANIAAAAIAJgJIATgMQASgKALAAQAcAAARAIQATAKAOAVQANATACATQADAVgGAWQgPAxgzAfQgzAfgaAGIgEAAg");
	this.shape_2.setTransform(15.2,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABmhuQATAJAOAWQANATACAUQADAUgGAWQgPAxgzAfQgzAfgaAGQgCAAgCAAIAAAAQgBAAgCAAQgbgGgzgfQgygfgQgxQgFgWACgUQADgUAMgTQAPgWASgJQARgIAcAAQAMAAASAJQAQAJALANIAAAAQAEgFAFgEIATgNQASgJALAAQAcAAARAIg");
	this.shape_3.setTransform(15.2,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3366").s().p("AAAB3IAAAAIgDAAQgbgGgzgfQgygfgQgxQgFgWACgVQADgTAMgTQAPgVASgKQARgIAcAAQAMAAASAKQAQAIALANIAAAAIAJgJIATgMQASgKALAAQAcAAARAIQATAKAOAVQANATACATQADAVgGAWQgPAxgzAfQgzAfgaAGIgEAAg");
	this.shape_4.setTransform(15.2,12);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,33.4,26.9);


(lib.Symbol5b = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F76685").s().p("AgXSHIhDgDQhcgHhWgTIgPgEQhHgRhEgbIgBAAIgNgFIgMgFIgagLIgLgFIgLgGIgHgDQgqgUgogYQgYgPgYgQQgngagmgeIgCgCIgvgnIgvgrIAAAAIgGgHIgHgGIgCgCIgQgRIgGgGIgKgKIAAAAQgXgZgUgYIgLgOIgVgaIgHgKIgCgCQgUgbgSgaIgJgOIgRgcIgHgNIgVglIgBAAIgHgPIgQghQgRgjgOglIAAAAIgEgMIgBgDIgBgCIgFgOIgJgcQgMgjgIgjIgHgdIgCgNIAAgCQgHgcgDgdIgBAAIgBgKIgBgFIgEgeIgBgMIAAgDIgFg6IgBgTIgBgXIAAgDIAAgPIAAgKIABgzIAAgKIACgeIACgPQACgeAEgeIAAgCIACgNIABgCIADgaIABgCIACgPIABAAQAGgfAHgeIAAAAIACgLIAGgTIAFgTIACgHIAAgBIAJgcIANgjIAJgZQAPgmASglIAQggIACgDIAHgMIACgEQAVglAYglIAEgGIAZgiIAMgSIAAAAQAegnAiglIgBgBIAPgPIAeggIAFgFIAAAAIAGgGIAIgIQBCg/BGgzIAMgIIAkgYIAhgVIACgCIAFgCIAKgHIAqgWIANgHQDWhsD9gJIAPAAIAigBQAsAAAsADQA1AEAzAIQBOAMBJAWIAfAKIAEABQBVAdBRArIAMAGQBPAsBLA7IAWASIADACIAjAfIADACIACADIACACIAHAFIAAABIAjAiIAiAjIAHAIIAHAHIAAAAIAGAHIASAVIADADQAdAjAbAlIAUAcIAKAPQAbApAWArIAPAdIAHANIAAABQANAbALAcIACAEIAEAKIAHASIAEALIAEALIABADIAQAxIACAIIAKAmIADAPIAMA2IABAHIABACIABAHIAAAAIAGAlIgBAAIACAPIAFA2IABAJIAAAGIADAkIAAAJIAAABIAAAFIAAAgIAAATIAAAFIAAAKIgBASIAAASIgBAAQgBAhgEAhIgBALIgBAEIABAAIgGAjIgCAPIgJAyIgDAPIgIAjIgBAAQgIAfgJAeIgDAIIgDAHIABAAIgGARIgGARIgGAOIgVAzIgHAOIgRAiIgHAOIgaAuIgIANIABAAIgIAMIgIALIgFAJIgJANIgCADQgWAggZAgIgQATIgZAeIgGAHQgZAbgbAbIgEAFIgEADIgHAHIgdAcIgBAAIgPANQggAcggAaIgMAJIAAAAIgJAGIgaATIgKAHIgHAFQgrAcgtAYIghARIgPAIIgFACIgEACQgrAUgtAQIgOAFIgFACIgUAGIgbAJIgHACIgJACIgMADQhIAThNAKIgDAAIgCAAIgCABIgIAAQhFAIhHAAIgXAAg");
	this.shape.setTransform(132.2,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.702)").s().p("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");
	this.shape_1.setTransform(131.9,132.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.3,7.2,251.3,251.2);


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


(lib.red = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDEEB5","#33CCFF","#339933","#330066"],[0,0.267,0.573,1],-0.3,-0.8,0,-0.3,-0.8,4.3).s().p("AhFAAIApgqQC0i3DOiEQixDeieCiIgnAqQi4C5idBoQCHjHCZifg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-35.8,71.7,71.7);


(lib.ico_direction = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(65,20,56,0.902)","rgba(83,28,62,0)"],[0,1],0,1.6,0,-8.1).s().p("AAVA2IAAgCIAFgnIAAgBIAAAAQACgPgMgHQgIgGgOABIiYAAQgOAAAAgMIAAgdIFZAAQgDAEgFAEIh3BgQgNAJgJAAQgCgBgBgCg");
	this.shape.setTransform(18.9,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.459)","rgba(255,255,255,0.902)"],[0.098,0.471,1],0.9,6.8,0,-1.8).s().p("AitA+IAAgnQAAgMANAAICYAAQAPABAIgGQALgGgBgQIAAAAIAAgBIgGgnIAAgCQACgCACgBQAIAAAMAJIAAAAIADACIB1BeIAAAAQAKAIACAIIAAACIAAAAg");
	this.shape_1.setTransform(19,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#401540").s().p("AAEA+IAAgGIgBgLIABACIAAgBQAOAcAigYIABAAIADgDIB1hdQANgLADgSIAAAMIAAACQABAPgRAPIh1BdIgCACQgTAMgMAAQgNAAgGgOgAgHADIiZAAQgdAAAAgZIAAgOQABAaAcAAICZAAQASgCgBANIgBAIQgEgHgMABg");
	this.shape_2.setTransform(19,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#792879").s().p("AAEB7IAAgEIAFggIABgIQABgPgSACIiZAAQgcAAgBgaIAAg9IAAgPQAAgbAdAAICZAAQASABgBgOIgGgpIAAgGQAMgcAkAaIABAAIADACIB1BgQAQANAAAOIAAAAQABAEgBgDQgDASgNALIh1BfIgDADIgBAAQgPALgMAAQgNAAgIgQg");
	this.shape_3.setTransform(19,13.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,29.4);


(lib.mc_spider3up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0,0,0,0,0,4.1).s().p("AgGAfQgIgFgBgGIgBgDIAAAAIACgGQAJgUAAgTIgBgHIAAAAIASAhQAFAIAAAJQAAAIgGAGQgFAGgFAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAgFgFg");
	this.shape.setTransform(-0.6,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],4.6,-3.5,0,4.6,-3.5,13.7).s().p("AAeBmQgCgEAAgKIABgbIgBgBQgDgGgMgBQgCgBgKABQgKACgJADQgFACgBAFIAAADQgDAEgCAIQgFASgUAAQgVAAgKgPQgCgEgEgNQgBgHgCgEQgFgZAAgjQAAgOACgMIABgMQAEgkAcgRQAdgRA5AAQAoAAAVAfQATAdgCArQgCApgEATQgEATgJAXQgCAKgFAFQgFAHgJAAQgXAAgHgMg");
	this.shape_1.setTransform(-0.2,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],2.6,-1,0,2.6,-1,13.7).s().p("Ag/BNIgFgfIAAgFIAAgBIAAgEQgBgEgCgDQgCgXAAgbQAAgqAPgSQASgYAxAAQA0AAAHAeQAGAeAAAeIgBAmIgBASIAAAGIgBAIIAAAAQAAAMgCAEQgEANgPAAQgQAAgHgYIAAgCIgBgHIAAgBIAAgCQgMgGgeAAIgCAKIAAAMQgFAqgJAAQgWAAgJgdg");
	this.shape_2.setTransform(-0.2,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.4,-2.4,0,-0.4,-2.4,7.1).s().p("AgmgEQABgqgEgKQAWAFATAHQALAGASAQIANANQgQAGgNAGIgEACQgPAMgLANQgLANgEAOQgGgaAAgjg");
	this.shape_3.setTransform(-12.5,-14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.8,-3.5,0,1.8,-3.5,16.2).s().p("AgRCHQgDgEAAgEQg0gIgogoIgHgHQgEgEgHgMQgHgMgGgSQgFgRgCgqQgBgNAEgMQAFgOAKgNQALgNASgMIADgCQAOgIAQgGQAlgNAxAAQAgAAAZAKQAQAGANAKIANAMQAIAHAGAJQAJAOAGAQQAGAUABAXQACA7g6AsQglAcgjAHIAAACQAAAMgVAAQgJAAgKgFg");
	this.shape_4.setTransform(-1,-2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-2.7,0,0.7,-2.7,6.7).s().p("AAOAVQgFgJgIgHIgMgKQgNgKgQgGQAMgHAagJIAlgNQAFAOAAAkQAAASgEARIgGAQQgGgQgKgOg");
	this.shape_5.setTransform(10.4,-13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],4.6,-3.6,0,4.6,-3.6,13.7).s().p("AhZBYQgHgVAAgUIAAgBQgDgXAAgdQAAgNACgNIABgLQAEglAcgRQAdgRA5AAQAoAAAVAgQATAdgCArQgCAogDAOIgHAXIgGAOIgDAHIgHANQgFAFgNAAQgVAAgFgQIAAgDIABgaIgBgBQgDgHgMAAQgCgCgKACQgKABgJAEQgDABgCACIABADIgCAbIgDANQgCAGgMAFIgVAAIgCAAQgPAAgKgbg");
	this.shape_6.setTransform(-0.2,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.4,-2.4,0,-0.4,-2.4,7.1).s().p("AgmgFQABgpgEgKQAWAFATAIQALAFASAQIANANQgQAFgNAHIgEACQgPAMgLANQgLAMgEAOQgGgZAAgkg");
	this.shape_7.setTransform(-12.5,-15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:-13.7}},{t:this.shape_4,p:{y:-2.9}},{t:this.shape_3},{t:this.shape_2,p:{y:9.7}},{t:this.shape_1},{t:this.shape,p:{y:2.9}}]}).to({state:[{t:this.shape_5,p:{y:-14.3}},{t:this.shape_4,p:{y:-3.5}},{t:this.shape_7},{t:this.shape_2,p:{y:9.1}},{t:this.shape_6},{t:this.shape,p:{y:2.3}}]},2).to({state:[{t:this.shape_5,p:{y:-13.7}},{t:this.shape_4,p:{y:-2.9}},{t:this.shape_3},{t:this.shape_2,p:{y:9.7}},{t:this.shape_1},{t:this.shape,p:{y:2.9}}]},2).to({state:[{t:this.shape_5,p:{y:-14.3}},{t:this.shape_4,p:{y:-3.5}},{t:this.shape_7},{t:this.shape_2,p:{y:9.1}},{t:this.shape_6},{t:this.shape,p:{y:2.3}}]},2).wait(2));

	// shadow
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.533)").s().p("AioArQhGgSAAgZQAAgYBGgTQBGgQBigBQBjABBGAQQBGATAAAYQAAAZhGASQhGAShjAAQhiAAhGgSg");
	this.shape_8.setTransform(0.8,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.533)").s().p("AiiArQhEgSAAgZQAAgYBEgTQBEgQBegBQBgABBEAQQBCATAAAYQAAAZhCASQhEAShgAAQheAAhEgSg");
	this.shape_9.setTransform(0.6,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-20.2,47.8,44.3);


(lib.mc_spider3right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.9,0.5,0,0.9,0.5,4.3).s().p("AgZAkQgHgIAAgEQgBgCAHgWIAKgaQAHgPAEgEQALgNAUATQAJAKgCAMQgCAMgSAWQgQAZAAAHQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgEAAgQgPg");
	this.shape.setTransform(-11.3,12.2,1,1,0,0,0,2.7,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A52515","#5D1C2A","#310720"],[0,0.506,1],-1.8,-4.9,0,-1.8,-4.9,16.2).s().p("AADA/QgLgOgDgOIgDgRIAOADQABATAFAUIADAIIgGgFgAAAgzIgBgDIACgGIAGgHIAIADIgHATIgIgGg");
	this.shape_1.setTransform(15.2,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],-0.2,-0.5,0,-0.2,-0.5,4).s().p("AgDAjQgHAAgFgCQgKgCgHgGIAAAAIgCgCQgMgMAAgQQAAgMAGgOIACgDQAHAGAIADIAGADIACABQgEAGAAAHQAAAIAFAEQAEAHAKgBQAKAAAKgKQAJAEAHgBIABAAIAHADIACAAQgDAHgJAIQgGAFgHADIgNAFIgBAAIgHABIgDAAgAAtADIACAAIAAABIgCgBg");
	this.shape_2.setTransform(16.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFC9","#FFAA7E","#000000"],[0,0.525,1],0.5,-0.5,0,0.5,-0.5,2.5).s().p("AgJAMIgGgEQgEgEAAgEQAAgFAHgDQAEgCAEgBIAHgBQARAAAAALQAAADgCACIgFAEIgCABIgCABQgFADgHAAIgGgBg");
	this.shape_3.setTransform(28.6,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-1.7,0,0.7,-1.7,5.3).s().p("AAiAaQgSgFggAAIgZABQABgNAGgPIAHgWQAGAJAcATQAXANANAQIgJgDg");
	this.shape_4.setTransform(12,-15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.3,-3,0,1.3,-3,16.2).s().p("AhJB3QgigHgIgJIgNgPQgGgIgHgKQgIgMgEgPQgGgQABgOQAAgKACgOQADgTAFgJIADgGIABABIAMAcQAAAFACAGQACAFACAAQAFAAAoghIA+gyQgBgDgIgIQgLgKgTgNIgHgDQAJgDANgBIAZgBQAhAAARAGIAJACQAYAJAlAUQAPAKATAYQATAZAEAVQgEABgEACQgHAEAAAFQAAAEAEADIAGAFQgEALgFAPQgHAOgWAXQgVAVgcANIgMAEIgDABQgLADgNACQgUADgXgBQgaAAgggGgAgBBbIgLAJIAKASIAFgNIAFgOIAEAAIAGADIAAAAQAGADAFAFQAKAMADACIABgBQgFgKgGgHQgGgGgJgDQgIgDgJABQgIAAgCACIgEAIIACACIAJgIgAAAAfIANAFIACABIADARQADAPANANIAGAGIgCgJQgGgUgBgTIAMABIADAAIAKgBQAHgBAGgEQAHgDAGgFQAKgIADgHIABgBIgBgBIAAgBIADAAIgCAAIADgCIgDgBIABgCIgcgNIgRgJIgNgIIAIgTIAGACQAgAKAGAAQAEAAAAgCQACgDgFgBQgUgNgHgIIgHgHIgBgBQgQgQgGgJIAAAEIABALQAAAIgEAAIgHgCIgIgBIgEAAQADADAGADIAGAEIABAAIgUAAQAHAHAXAIIgHAHIgEAGQgcgbgJgPQgHgDgFAJIgHARQgCAMgJARQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIABAAIgBAHQABAKADAGIAFAJIAGAIQAEAKAFABIgEgJQAIAGAJAGgAghAnQgJgSgHgFQgFgJAAgHQAAgFAEgHIAAABQAAALAFALQAHAMAIADIABgBQgKgGgFgMQAGAMAIACQgRgRABgXIgBAAIgBAIIAAAEIgBgGIgBAAQgGAHAAALQABAHAGAIIANARIAAAAIADACIAAAAg");
	this.shape_5.setTransform(12.1,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-2.3,-3.1,0,-2.3,-3.1,6.7).s().p("AgsBAQgCgGAAgFIgMgcIgBgBQgFgPAAgUQAAglAFgTIAQgBQAgAAAeATIAHADQATANALAKQAIAHABAEIg+AwQgmAhgFAAQgCAAgCgFgAg0gWQAAAJAGAOIAMAdQADAGABAAIAXgUIAOgPQAHgGAJgEQgEgHgZgLIgJgEQgUgJgPgDQgCAJAAAMg");
	this.shape_6.setTransform(3.5,-7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#313131").s().p("AAPAAQgFgDgGgDIAAAAIgEgCIgEAAIgLAAIgCAAIgJAIIgCgDIAEgHQACgDAKAAQAJAAAGADQAJACAGAHQAGAEAFAKIgBABQgDgCgKgMg");
	this.shape_7.setTransform(13.5,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAKQgFgFAAgHQAAgHAEgGIAEADQARAMAOAGQgKAKgKAAQgKAAgEgGg");
	this.shape_8.setTransform(16.9,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBIIAMgJIAKAAIgFANIgGAOIgLgSgAAVAMIgQgDIgCgBIgMgGQgKgDgHgGIgCgFIACAAIgDgFIAAgBIgEgXQAAgWAMgPQAEAHANALIAEADIgBAEQgHAOAAAMQAAASALAKIABABIAAAAQAHAGAKADQAGABAHAAIgNAAgAgWhQIAAABIgCACIACgDgAgThWIAAgBIADAEIgDgDgAgUhYIAAAAIgBABIABgBg");
	this.shape_9.setTransform(13.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Ag5BBIAAAAIgNgRQgHgIAAgIQAAgMAFgIIABAAIACAHIAAgFIABgIIABAAQgBAaARARQgJgDgFgMQAEANALAGIgBABQgJgDgGgMQgFgMAAgNIAAgBQgEAHAAAHQAAAIAFAIQAGAGAJARIgCgBgAgrAtIgGgIIgFgKQgEgIAAgJIABgHIgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAIgQADgMIAHgQQAFgJAHADQAJAPAcAbIADADIAIAEIANAIIARAJIAcAOIgBACIADACIgDACIACAAIgDAAIgCAAIACABIABABIgCAAIgCAAIgHgCIgBAAQgHAAgJgEQgOgFgTgOIgEgDIgCgBIgGgEQgGgDgHgEIgFgDQgMgLgFgHQgLAPAAAUIAEAXIAAABIADAFIgCAAIABAFIADAJQgFgBgDgKgAgkgVIADgCIgBgBIgCADgAgfgeIAEADIgDgEIgBABgAgggfIABgBIAAAAIgBABgAAggPIgHgDIgIgDQgUgIgHgGIARAAIAAgBIgHgEQgDgDgDgDIAEAAIAGACIAHACQAEAAAAgIIgBgLIAAgFQAFAKARAQIAAAAIAHAIQAIAHAUANQAEACgBADQAAACgEAAQgGAAgggKg");
	this.shape_10.setTransform(14.2,-3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6666").s().p("AgTAjIgMgeQgGgOAAgIQAAgNACgJQAPADAUAKIAHADQAbALAEAHQgJAEgHAGIgQAPIgVAUQgBAAgDgFg");
	this.shape_11.setTransform(2,-8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.5,0.1,0,-0.5,0.1,4.1).s().p("AACAgQgFgCgFgHQgGgHgBgLIgFgkIAAAAIAEAGQALAQASAJIAFAEIABAAIABADQACAFgCAJQgDAMgCgDQgEACgFAAIgEAAg");
	this.shape_12.setTransform(-17.5,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-2,-0.6,0,-2,-0.6,4.4).s().p("AgjAqIAKgeQAKgeABgUIAJgFQAEgDAJAAIACAAIgBgBQABgBAMADQAOAEABAKQAAAGgJARQgIAPgKAOIgOAWQgEAFgMAAQgPAAAAgGg");
	this.shape_13.setTransform(2.2,16.5,1,1,0,0,180,0,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-7.5,0,0.7,-7.5,20.8).s().p("AgLBXIgbgFQgJgCgKgEQgLgGgHgBQghgIgUgbIgGgQQgDgGAAgHQAAgbAZgcQANgQAngKQAogLAvAAQBvAAAABXQAAASgDAMQgFATgMALQgjAchIAAIgWgBg");
	this.shape_14.setTransform(-3.6,9.1,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],5.3,-1.2,0,5.3,-1.2,7.9).s().p("AgkAnQgJgHAAgFQAAgEAQgVIAVgeQAGgJADgDQAHgFAMAAQAQAAAKAWIgBACQgGARgZAYQgZAagKAAQgGAAgJgHg");
	this.shape_15.setTransform(2.8,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1,-0.4,0,1,-0.4,4.3).s().p("AAFAqIgQgSQgJgJgKgNQgKgMgBgGQgFgSAbgHQANgDAHAIQAKAIAMAbQAMAaAHAEQAGAEgdAIIgKACIgEgBg");
	this.shape_16.setTransform(-10.3,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.2,-0.1,0,1.2,-0.1,4.3).s().p("AgDAqIgNgVQgGgLgGgOQgGgQAAgFQAAgTAcAAQAMAAAGAKQAHAKAFAcQAFAeAFAGQAFAFgeAAQgJAAgDgDg");
	this.shape_17.setTransform(-11.4,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-2,-0.6,0,-2,-0.6,4.4).s().p("AgjAqIAKgeQAKgeABgUIAJgFQAEgDAJAAIACAAIgBgBQABgBAMADQAOAEABAKQAAAGgJARQgIAPgKAOIgOAWQgEAFgMAAQgPAAAAgGg");
	this.shape_18.setTransform(2.2,14.7,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.5,0.9,0,0.5,0.9,4.3).s().p("AgmAWQgEgKACgEIAQgRIAUgVQALgLAFgCQASgGAKAaQAEANgHAJQgHAIgaAPQgZAPgDAHIgCABQgEAAgIgXg");
	this.shape_19.setTransform(-14.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:9.1}},{t:this.shape_13,p:{regY:-0.3,skewX:0,skewY:180,x:2.2,y:16.5}},{t:this.shape_12,p:{y:2}},{t:this.shape_11,p:{y:-8.3}},{t:this.shape_10,p:{y:-3.5}},{t:this.shape_9,p:{y:2.1}},{t:this.shape_8,p:{y:-0.8}},{t:this.shape_7,p:{y:9.4}},{t:this.shape_6,p:{y:-7.9}},{t:this.shape_5,p:{y:-0.8}},{t:this.shape_4,p:{y:-15.6}},{t:this.shape_3,p:{y:-0.4}},{t:this.shape_2,p:{y:-0.2}},{t:this.shape_1,p:{y:1.1}},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_14,p:{y:8}},{t:this.shape_12,p:{y:0.9}},{t:this.shape_17},{t:this.shape_13,p:{regY:-4.2,skewX:47.7,skewY:-132.3,x:3.4,y:12.4}},{t:this.shape_11,p:{y:-9.4}},{t:this.shape_10,p:{y:-4.6}},{t:this.shape_9,p:{y:1}},{t:this.shape_8,p:{y:-1.9}},{t:this.shape_7,p:{y:8.3}},{t:this.shape_6,p:{y:-9}},{t:this.shape_5,p:{y:-1.9}},{t:this.shape_4,p:{y:-16.7}},{t:this.shape_3,p:{y:-1.5}},{t:this.shape_2,p:{y:-1.3}},{t:this.shape_1,p:{y:0}}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:9.1}},{t:this.shape_13,p:{regY:-0.3,skewX:0,skewY:180,x:2.2,y:16.5}},{t:this.shape_12,p:{y:2}},{t:this.shape},{t:this.shape_11,p:{y:-8.3}},{t:this.shape_10,p:{y:-3.5}},{t:this.shape_9,p:{y:2.1}},{t:this.shape_8,p:{y:-0.8}},{t:this.shape_7,p:{y:9.4}},{t:this.shape_6,p:{y:-7.9}},{t:this.shape_5,p:{y:-0.8}},{t:this.shape_4,p:{y:-15.6}},{t:this.shape_3,p:{y:-0.4}},{t:this.shape_2,p:{y:-0.2}},{t:this.shape_1,p:{y:1.1}}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_14,p:{y:8}},{t:this.shape_12,p:{y:0.9}},{t:this.shape_17},{t:this.shape_13,p:{regY:-4.2,skewX:47.7,skewY:-132.3,x:3.4,y:12.4}},{t:this.shape_11,p:{y:-9.4}},{t:this.shape_10,p:{y:-4.6}},{t:this.shape_9,p:{y:1}},{t:this.shape_8,p:{y:-1.9}},{t:this.shape_7,p:{y:8.3}},{t:this.shape_6,p:{y:-9}},{t:this.shape_5,p:{y:-1.9}},{t:this.shape_4,p:{y:-16.7}},{t:this.shape_3,p:{y:-1.5}},{t:this.shape_2,p:{y:-1.3}},{t:this.shape_1,p:{y:0}}]},2).wait(2));

	// shadow
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.533)").s().p("AioArQhGgSAAgZQAAgYBGgTQBGgQBigBQBjABBGAQQBGATAAAYQAAAZhGASQhGAShjAAQhiAAhGgSg");
	this.shape_20.setTransform(1.9,17.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.533)").s().p("AibArQhAgSAAgZQAAgYBAgTQBAgQBbgBQBbABBBAQQBAATAAAYQAAAZhAASQhBAShbAAQhbAAhAgSg");
	this.shape_21.setTransform(2.5,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-18.5,52.7,42.5);


(lib.mc_spider3left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.8,0.5,0,-0.8,0.5,4.3).s().p("AAEAxQAAgHgQgZQgSgWgCgMQgCgMAJgKQAUgTALANQAEAEAHAPIAKAaQAHAWgBACQAAAEgHAIQgQAPgEAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(22.3,12.2,1,1,0,0,0,-2.7,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313131").s().p("AgcANQAFgKAGgEQAMgMASAAQAKAAACADIAEAHIgCADIgJgIIgDAAIgKAAIgEAAQgIADgHAFQgKAMgDACg");
	this.shape_1.setTransform(-2.5,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],0.3,-0.5,0,0.3,-0.5,4).s().p("AABAjIgHgBIgBAAIgNgFQgHgDgGgFQgJgIgDgHIACAAIAHgDIABAAQAHABAJgEQAKAKAJAAQAUABAAgTQAAgGgEgHIACgBQAKgDALgJIACADQAGAOAAAMQAAAQgMAMQgMALgTABIgDAAgAguADIACAAIgCABIAAgBg");
	this.shape_2.setTransform(-5.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAGQAQgGATgPQAEAGAAAHQAAASgUAAQgJAAgKgKg");
	this.shape_3.setTransform(-5.9,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGBMIgFgNIAKAAIAMAJIgLASIgGgOgAgCABQALgKAAgSQAAgMgHgOIgBgEIAEgDQANgLAEgHQAMAPAAAWIgEAXIAAABIgDAFIACAAIgCAFQgHAGgKADQgTAKgYAAQAUAAALgLgAAWhPIABgCIACAEIgDgCgAAUhXIAAABIgEADIAEgEgAAVhYIAAAAIABABIgBgBg");
	this.shape_4.setTransform(-2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABHArQAFgIAAgIQAAgHgEgHIAAABQAAANgFAMQgGAMgJADIgBgBQALgHAEgMQgFAMgJADQARgRgBgaIABAAIABAIIAAAFIACgHIABAAQAFAIAAAMQAAAIgHAIIgNARIgBAAIgBABQAJgRAGgGgAAnAvIABgFIgCAAIADgFIAAgBIAEgXQAAgUgMgPQgEAHgMALIgFADQgLAHgIAEIgCABQgVAQgQAGQgJAEgHAAIgBAAIgHACIgDAAIgBAAIABgBIACgBIgDAAIgCAAIACgBIgDgBIADgCIgBgCIAcgOIARgJQAPgIAGgEQAfgdAJgQQAHgDAFAJIAHAQQADAMAIAQQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAIgBAAIABAHQAAAJgEAIIgFAJIgGAJQgDAKgFABIADgJgAAigXIADACIgCgEIgBACgAAcgbIADgDIAAgBIgDAEgAAgggIABABIgBgBgAhJgHQgBgDAEgCQAUgNAIgHQAWgXAHgLIAAAFIgBALQAAAIAEAAIAHgCIAGgCIAEAAQgDADgEADIgGAEIAAABIARAAQgJAIghAMQggAKgGAAQgEAAAAgCg");
	this.shape_5.setTransform(-3.2,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.6,-1.7,0,-0.6,-1.7,5.3).s().p("AgGAAQAcgTAHgJIAHAWQAFAPABANIgZgBQggAAgSAFIgIADQANgQAWgNg");
	this.shape_6.setTransform(-1,-15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],2.4,-3.1,0,2.4,-3.1,6.7).s().p("AgCAkIg+gxQABgDAIgHQALgKATgNIAHgEQAegSAgAAIAQABQAFATAAAlQAAAUgFAPIgBABIgMAcQABAFgDAGQgCAFgCAAQgFAAgmghgAAQgfIgJAEQgZALgEAHQAJAEAHAGIAOAPIAXAUQABAAADgGIAMgdQAGgOAAgJQAAgMgCgJQgPADgUAJg");
	this.shape_7.setTransform(7.5,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-1.2,-3,0,-1.2,-3,16.2).s().p("AgzB2IgOgFQgdgNgWgWQgVgWgGgOQgGgPgDgLQADgCADgDQADgDAAgEQAAgFgHgEIgJgDQAFgVAUgZQASgYAQgKQAkgVAYgIIAJgCQASgGAgAAIAZABQANACAJACIgGADQgUANgLAKQgIAIgBADIA+AyQAoAhAFAAQACAAADgFQACgGgBgFIAMgcIABgBIADAGQAFAJADATQADAOAAAKQAAAOgGAQQgEAPgHAMQgHAKgHAIIgNAPQgHAJgjAHQgfAGgaAAQgpAAgbgHgAgHBbIAFAOIAFANIALgSIgNgJIADAAIAKAIIABgCIgEgIQgCgCgJAAQgTgBgMAMQgGAHgFAKIABABQADgCAKgMQAHgIALgDgAAKhNQgJAQgfAdQgGAGgPAIIgRAJIgcANIABABIgDACIADACIgCAAIACAAIABABIgBABIABABQAEAHAJAIQAGAFAHADQAGADAHACIAKABIADAAQAXAAAUgKQAJgFAHgHIgCAJQAFgBADgKIAGgIIAFgJQAEgGAAgKIgBgHIABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQgIgRgDgMIgHgRQgEgGgFAAIgDAAgAA3AAQAAAHgFAIQgGAGgJASIABgCIABAAIANgRQAHgIAAgHQAAgLgFgHIgBAAIgCAGIAAgEIgBgIIgBAAQABAXgRARQAIgCAGgMQgEAMgLAGIABABQAJgDAGgMQAFgLAAgLIAAgBQAEAGAAAGgAg/g8QgIAIgUANQgEABABADQAAACAEAAQAGAAAggKQAjgLAJgJIgTAAIAAAAIAHgEQAFgDADgDIgEAAIgIABIgHACQgEAAAAgIIABgLIAAgEQgHALgWAWg");
	this.shape_8.setTransform(-1.1,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFC9","#FFAA7E","#000000"],[0,0.525,1],-0.4,-0.5,0,-0.4,-0.5,2.5).s().p("AgIAKIgCgBIgDgBIgEgEQgCgCAAgDQAAgLAQAAIAHABIAJADQAHADAAAFQAAAEgEAEQgCADgDABIgHABQgHAAgFgDg");
	this.shape_9.setTransform(-17.6,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6666").s().p("AgEAUIgRgPQgHgFgJgFQAFgGAagMIAHgEQAUgIAPgEQACAJAAANQAAAIgGAOIgMAeQgCAFgCAAIgUgUg");
	this.shape_10.setTransform(9,-8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.6,0.1,0,0.6,0.1,4.1).s().p("AgOAeQgCADgDgMQgCgJACgFIABgDIABAAIAFgEQASgJALgQIAEgGIAAAAIgFAkQgBALgGAHQgFAHgFACIgEAAQgFAAgEgCg");
	this.shape_11.setTransform(28.5,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-2,-0.6,0,-2,-0.6,4.4).s().p("AgjAqIAKgeQAKgeABgUIAJgFQAEgDAJAAIACAAIgBgBQABgBAMADQAOAEABAKQAAAGgJARQgIAPgKAOIgOAWQgEAFgMAAQgPAAAAgGg");
	this.shape_12.setTransform(8.8,16.5,1,1,0,0,0,0,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-7.5,0,0.7,-7.5,20.8).s().p("AgLBXIgbgFQgJgCgKgEQgLgGgHgBQghgIgUgbIgGgQQgDgGAAgHQAAgbAZgcQANgQAngKQAogLAvAAQBvAAAABXQAAASgDAMQgFATgMALQgjAchIAAIgWgBg");
	this.shape_13.setTransform(14.6,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-5.2,-1.2,0,-5.2,-1.2,7.9).s().p("AgNAUQgZgYgGgRIgBgCQAKgWAQAAQAMAAAHAFQADADAGAJIAVAeQAQAVAAAEQAAAFgJAHQgJAHgGAAQgKAAgZgag");
	this.shape_14.setTransform(8.2,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.9,-0.4,0,-0.9,-0.4,4.3).s().p("AgSApQgdgIAGgEQAHgEAMgaQAMgbAKgIQAHgIANADQAbAHgFASQgBAGgKAMQgKANgJAJIgQASIgEABIgKgCg");
	this.shape_15.setTransform(21.3,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-1.2,-0.1,0,-1.2,-0.1,4.3).s().p("AghAoQAFgGAFgeQAFgcAHgKQAGgKAMAAQAcAAAAATQAAAFgGAQQgGAOgGALIgNAVQgDADgJAAQgeAAAFgFg");
	this.shape_16.setTransform(22.4,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-2,-0.6,0,-2,-0.6,4.4).s().p("AgjAqIAKgeQAKgeABgUIAJgFQAEgDAJAAIACAAIgBgBQABgBAMADQAOAEABAKQAAAGgJARQgIAPgKAOIgOAWQgEAFgMAAQgPAAAAgGg");
	this.shape_17.setTransform(8.8,14.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.5,0.9,0,-0.5,0.9,4.3).s().p("AAZAsQgDgHgZgPQgagPgHgIQgHgJAEgNQAKgaASAGQAFACALALIAUAVIAQARQACAEgEAKQgIAXgEAAIgCgBg");
	this.shape_18.setTransform(25.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{y:9.1}},{t:this.shape_12,p:{regY:-0.3,rotation:0,x:8.8,y:16.5}},{t:this.shape_11,p:{y:2}},{t:this.shape_10,p:{y:-8.3}},{t:this.shape_9,p:{y:-0.4}},{t:this.shape_8,p:{y:-0.8}},{t:this.shape_7,p:{y:-7.9}},{t:this.shape_6,p:{y:-15.6}},{t:this.shape_5,p:{y:-3.5}},{t:this.shape_4,p:{y:2.1}},{t:this.shape_3,p:{y:-0.8}},{t:this.shape_2,p:{y:-0.2}},{t:this.shape_1,p:{y:9.4}},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_13,p:{y:8}},{t:this.shape_11,p:{y:0.9}},{t:this.shape_10,p:{y:-9.4}},{t:this.shape_9,p:{y:-1.5}},{t:this.shape_8,p:{y:-1.9}},{t:this.shape_7,p:{y:-9}},{t:this.shape_6,p:{y:-16.7}},{t:this.shape_5,p:{y:-4.6}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:-1.9}},{t:this.shape_2,p:{y:-1.3}},{t:this.shape_1,p:{y:8.3}},{t:this.shape_16},{t:this.shape_12,p:{regY:-4.2,rotation:-47.7,x:7.6,y:12.4}}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{y:9.1}},{t:this.shape_12,p:{regY:-0.3,rotation:0,x:8.8,y:16.5}},{t:this.shape_11,p:{y:2}},{t:this.shape_10,p:{y:-8.3}},{t:this.shape_9,p:{y:-0.4}},{t:this.shape_8,p:{y:-0.8}},{t:this.shape_7,p:{y:-7.9}},{t:this.shape_6,p:{y:-15.6}},{t:this.shape_5,p:{y:-3.5}},{t:this.shape_4,p:{y:2.1}},{t:this.shape_3,p:{y:-0.8}},{t:this.shape_2,p:{y:-0.2}},{t:this.shape_1,p:{y:9.4}},{t:this.shape}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_13,p:{y:8}},{t:this.shape_11,p:{y:0.9}},{t:this.shape_10,p:{y:-9.4}},{t:this.shape_9,p:{y:-1.5}},{t:this.shape_8,p:{y:-1.9}},{t:this.shape_7,p:{y:-9}},{t:this.shape_6,p:{y:-16.7}},{t:this.shape_5,p:{y:-4.6}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:-1.9}},{t:this.shape_2,p:{y:-1.3}},{t:this.shape_1,p:{y:8.3}},{t:this.shape_16},{t:this.shape_12,p:{regY:-4.2,rotation:-47.7,x:7.6,y:12.4}}]},2).wait(2));

	// shadow
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.533)").s().p("AioArQhGgSAAgZQAAgYBGgTQBGgQBigBQBjABBGAQQBGATAAAYQAAAZhGASQhGAShjAAQhiAAhGgSg");
	this.shape_19.setTransform(7.4,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.533)").s().p("AibArQhAgSAAgZQAAgYBAgTQBBgQBagBQBbABBAAQQBBATAAAYQAAAZhBASQhAAShbAAQhaAAhBgSg");
	this.shape_20.setTransform(8,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-18.5,51,42.5);


(lib.mc_spider3down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dog
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],-0.1,-0.1,0,-0.1,-0.1,3.8).s().p("AgTAUQgKgKAAgOQAAgMACgEIADgGIALAIIAFADQgDAGAAAEQAAAHAFADQADACAEAAQAIAAABgDIAEgEQAJAEAGACQgBAFgEAEQgKAMgOAAQgKAAgJgHg");
	this.shape.setTransform(-8.3,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],0.5,-0.2,0,0.5,-0.2,4).s().p("AgPAWQgIgFgGgLIATgHQACADACACQADADAGAAQANAAAAgJQAAgDgDgGIgDgEIANgJQAIAKgBAMQAAANgJAGQgJAHgLABIgBAAQgJAAgGgDg");
	this.shape_1.setTransform(5.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPALQgEgDAAgIQgBgDADgGIALAHIAHADIAGADIgDAGQgCADgHAAQgHAAgDgCgAA8AHQgCgCgCgFIATgJIADgDIADAEQADAGABACQgBAKgNAAQgHAAgEgDg");
	this.shape_2.setTransform(-1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHAoQgUAAgMgMIgEgHIgCgEIAAgBIgFgMQgDgIAAgIIADgNIAEgOIAUARIgEAGQgBAEAAAMQAAAPAJAJQAJAHAMAAQAPAAAJgLQAEgFACgFIADABIAGACIADgBQgCAEgEAFQgHAJgIAEIgQAGgAAnAaQgHgGgCgHIADAAIAKgFQAGALAIAEQAHAEALgBQALAAAJgHQAJgHAAgMQABgMgIgKIADgDIAIgGIADgEIACAEQAEALABAPIAAAAIgEANIABAAIgHALQgEAEgGAEQgQAHgUAAQgNAAgKgIg");
	this.shape_3.setTransform(-1.6,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhqA6IgCgEIgCgCIgHgJIgBgEIgFgJIgCgFIgBAAIAAgBIAAgEIAAgCIAAgDIAAgHIAAgCIAAgBIABgKIACgFIAAgCQABgFACgCIAAAAIABgBIAAgBIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIgBgCIABAAIANANQAVAOAKAGQASALAHADIAOAGQAHAEACAFIgCABIgCAAIgHgBIgDgBQgGgCgKgGIgGgDIgHgFIgLgIIgEgDIgLgIIgUgOIgEANIgCALQAAAIACAKIAFAMIAAACIACADIAEAHIABACIADADIAAAAIgCgBIADAEIAAABIgEgEgAh4AdIAAAAIgBgBIABABgAh3gQIABgBIAAgBIgBACgAhsA5QgPgHgHgPIAAgJIABAAIgDgHIAAgHIABAAQACAZAVATIACACIAAAAIgBAAIABABIAAABIgCgDgAhvA2QgNgMgFgQQgBAPATANgABpAtIAGgLIgBgBIAEgPIAAAAQgBgOgEgKIgCgDIAAAAIgDADIgHAGIgEABIgNAJIgDADIgTALIgTAJIgKAFIgDAAIgCAAIgCgCQAAgFAGgCIAGgCIAXgNIAbgQIgCACIABgBQARgPAEgBIgBgBIABABIAAAAIABABIAAAAIACACIABAAIgCgEIAAAAQAHAEACAIIABAGQACAIAAAKIgBALIAAAAQAAAFgEAFIgDADIgBADIgCABIAAAAIgGAFIgBAAIAHgGIAAgBIgHAHIgCADIAHgJgAB0AeIAAgBIAAAAIAAABgAA2AUIgEADIAFgDIgBAAIADgCIgDACgABtgMIADAEIgCgEIgBAAgABuAvIAIgQQAGgIAAgGQAAgIgCgFIAAgCIAAAAIADAQQABALgOASgAB6ArQAIgRABgHIgBgHIAAgCIAAAAIADALQAAAFgJARgAgXASIg2geQgNgIgJgLQgGgHgDgKIAAgBIANAHQANAIACAAIgGgTIAAgDQAOARAfAfQATAQACAJIAAACgAAQAEQAAgEAagUQAcgZAJgPIABgBIAAAGIgBAPIAAAAIASgIIABAAIgGAMIADAAIAPgGQgaAZgZANQgXALgNAAQgGAAgBgDg");
	this.shape_4.setTransform(-1.2,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFC9","#FFAA7E","#000000"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,2.5).s().p("AgTAIQgCgDAAgFQAAgGAJgEQAHgDAFAAQAKAAAHAGQAEAEABADIAAABQAAANgVAAQgJAAgLgGg");
	this.shape_5.setTransform(-0.9,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#A52515","#5D1C2A","#310720"],[0,0.506,1],8.7,-4.5,0,8.7,-4.5,16.2).s().p("AgVA7QgFgIgDgKIAAgGQAAgQADgQQAFgZANgdQAIgUANgJIAQgKQgWAZgKArQgIAfAAAlQAAAQAFANIAGAQIABABIgWghg");
	this.shape_6.setTransform(-7.9,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.4,-2.3,0,-0.4,-2.3,7.1).s().p("AgmgEQABgqgEgJQAWAEATAIQALAFASAQIANANQgQAGgNAGIgMgIQgQgOgFgBIgDAAIACAZQACARACAIQgLANgEANQgGgZAAgjg");
	this.shape_7.setTransform(-12.5,-12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6666").s().p("AiEABIgCgaIADAAQAFACASAOIAMAJIgEABQgRAMgLANQgCgIgCgRgAB3AJIgOgKIAdgMIABARQAAALgDAKQgGgIgHgIg");
	this.shape_8.setTransform(-1.4,-12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.8,-2.8,0,1.8,-2.8,16.2).s().p("AhwBWIgHgIQgEgEgHgMQgHgLgGgSQgFgSgCgpQgBgNAEgNQAFgNAKgNQALgNASgMIADgCQAOgIAQgGQAlgOAxABQAgAAAZAJQAQAGANAKIANANQAIAHAGAJQAJAOAGAQQAGAUABAXQACA7g6AsQglAcgjAHQgBgFgEgEQgHgGgKABQgFAAgHACQgJAFAAAHQg0gHgogogAg2hAQgOAKgJAUQgNAcgFAaQgFAFAAAEIgBAHQAAALADALQADAJAFAJIAXAgIAAgBIgIgPQgFgOAAgQQAAgkAIgfQAMgsAWgZIgQAKg");
	this.shape_9.setTransform(-1,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-2.7,0,0.7,-2.7,6.7).s().p("AAOAVQADgLABgKIgCgSIgbANQgNgKgQgGQALgHAbgJIAlgNQAFAOAAAkQAAASgEARIgGAQQgGgQgKgOg");
	this.shape_10.setTransform(10.4,-12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0,0,0,0,0,4.1).s().p("AgGAfQgIgFgBgGIgBgDIAAAAIACgGQAJgUAAgTIgBgHIAAAAIASAhQAFAIAAAJQAAAIgGAGQgFAGgFAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAgFgFg");
	this.shape_11.setTransform(-0.2,-15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],2.7,-1.4,0,2.7,-1.4,13.7).s().p("AAcBbIgCgUIAAgaQgLgGgfgBQgBAVgLAFIAAADQgEACgIAAQgHAAgHgGQgFgEgEgGQgFgJAAgIIAAgDQgBgFgCgDQgCgXABgbQAAgpAOgTQASgYAqABQAqgBARAkQANAZAAAwQAAAxgFAaQgEAagGAEQgEADgFAAIgFABQgMAAgFgSg");
	this.shape_12.setTransform(-1.6,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],5.2,-4.9,0,5.2,-4.9,13.7).s().p("AgzBpQgOgCgOgeQgOgdAAg/QAAghAKgdIADgHIARgJQAIgDAKAAQALAAAJgDQAKgDAaAEQAbAEAcAbQAZAZADAkIgCAZIgMAuQgEAPgTAFQgQgCgCgOIgCgHIgDgLQgDgHgMAAIAAgBIAAABQgCgBgKABQgKABgJAEQgFABgBAGIAAANIABAUQAAALgBACQgCAEgIACIgMABIgLAAg");
	this.shape_13.setTransform(-0.8,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],-0.1,-0.1,0,-0.1,-0.1,3.8).s().p("AgTATQgKgIAAgPQAAgMACgEIADgGIALAIIAFADQgDAGAAAEQAAAIAFADQADABAEAAQAIAAABgCIAEgFQAJAEAGACIgFAJQgKAMgOAAQgKAAgJgIg");
	this.shape_14.setTransform(-8.3,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],0.4,-0.3,0,0.4,-0.3,4).s().p("AgPAVQgIgEgHgLIATgIQACAEADACQADADAGAAQANAAAAgJQAAgEgEgFIgCgEIAMgJQAJAKgBAMQgBAMgIAHQgJAHgLAAIgBABQgJAAgGgEg");
	this.shape_15.setTransform(5.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhPALQgEgDAAgIQgBgDADgGIALAHIAHACIAHAEIgEAGQgCADgHAAQgHAAgDgCgAA8AHQgCgCgCgFIATgJIADgCIADADQADAFABADQgBAKgNAAQgHAAgEgDg");
	this.shape_16.setTransform(-1,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIAnQgTABgMgMIgFgHIgBgEIAAgBIgGgNQgCgIAAgIIACgMIAFgOIATARIgDAGQgCAEAAAMQAAAPAKAIQAJAIAMAAQAOAAAKgMIAFgJIADABIAHABIACAAIgFAJQgHAJgJAEIgQAFgAAnAaQgHgHgCgHIADAAIAKgEQAGAKAIAFQAHADALAAQALAAAJgHQAJgHABgMQAAgNgJgJIAEgDIAHgHIAEgCIABACIABAAQAEAMAAAPIABAAQgBAFgDAIIAAABIgGAKQgEAFgHADQgPAHgUAAQgNAAgKgIg");
	this.shape_17.setTransform(-1.6,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhqA6IgCgEIgBgCQgFgEgDgGIgBgCIgFgJIgCgGIgBgBIAAAAIAAgEIAAgCIAAgDIAAgIIAAgCIAAAAIABgJIACgHIAAgBQACgFACgCIgBgBIABAAIABgBIAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgDIABAAIANANQAVAOAKAGQASALAHADIAOAGQAHAEACAGIgCAAIgCAAIgHgBIgDgBQgGgCgJgGIgHgEIgHgEIgLgHIgEgDIgLgIIgUgPIgEANIgCALQAAAIACAKIAFAMIAAABIACAFIAEAGIABADIADACIAAAAIgCAAIADADIAAAAIgEgDgAh3gQIABgCIAAAAIgBACgAhsA5QgQgIgGgPIAAgJIABAAIgDgGIAAgGIABAAQACAYAVAUIACABIAAAAIgBAAIABABIAAAAIgCgCgAhvA3QgNgNgFgRQgBAQATAOgABpAsIAGgKIgBgBQAEgIABgGIgBAAQgBgPgEgKIAAAAIgCgEIAAABIgDADIgHAGIgEACIgNAJIgDACIgTAKIgTAKIgKAFIgDAAIgCAAIgCgCQAAgFAGgCIAGgBIAXgOIAbgQIgCACIABgBQARgOAEgCIgBgCIABABIABABIABABIABADIABgBIgCgFIAAAAQAHAFACAIIABAGQACAIAAAJIgBAMQgBAFgDAFIgDADIgBACIgCACIAAAAIgGAFIgBAAIAHgHIAAgBIgHAIIgBABIAGgIgAB0AfIAAgBIAAAAIAAABgAA2AUIgEADIAFgCIgBAAIADgCIgDABgABtgMIADAEIgCgEIgBAAgABuAwIAIgRQAGgJAAgGQAAgHgCgFIAAgCIAAAAIADAPQABALgOAUgAB6AqQAIgQABgGIgBgHIAAgDIAAAAIADAMQAAAEgJAQgAgXATIg2gfQgNgHgJgMQgGgHgDgKIAAAAIANAHQANAHACABIgGgVIAAgCQAOASAfAeQATAQACAIIAAADgAAQAEQAAgEAagUQAcgZAJgPIABAAIAAAFIgBAPIAAABIASgJIABAAIgGAMIADAAIAPgGQgaAZgZAOQgXAKgNAAQgGAAgBgDg");
	this.shape_18.setTransform(-1.2,-2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#A52515","#5D1C2A","#310720"],[0,0.506,1],8.7,-4.5,0,8.7,-4.5,16.2).s().p("AgVA7QgFgIgDgKIAAgGQAAgQAEgPQAEgaANgcQAIgVANgKIAQgKQgWAagKArQgIAgAAAjQAAARAFANIAGAPIABACIgWghg");
	this.shape_19.setTransform(-7.9,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.4,-2.4,0,-0.4,-2.4,7.1).s().p("AgmgFQABgpgEgKQAWAFATAIQALAFASAQIANANQgQAGgNAGIgMgIQgQgOgFgCIgDAAIACAaQACARACAIQgLANgEANQgGgZAAgkg");
	this.shape_20.setTransform(-12.5,-13.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFC9","#FFAA7E","#000000"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,2.5).s().p("AgSAIQgDgDAAgFQAAgGAJgEQAHgDAFAAQAKAAAHAGQAEAEABADIAAABQAAANgVAAQgJAAgKgGg");
	this.shape_21.setTransform(-0.9,11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.8,-2.8,0,1.8,-2.8,16.2).s().p("AhwBWIgHgHQgEgFgHgMQgHgLgGgSQgFgRgCgqQgBgOAEgMQAFgNAKgNQALgNASgMIADgCQAOgIAQgGQAlgOAxAAQAgAAAZAKQAQAHANAJIANAMQAIAIAGAJQAJAOAGAQQAGAUABAXQACA7g6AsQglAcgjAHQgBgFgEgEQgHgFgKgBQgFAAgHAEQgJADAAAJQg0gIgogogAg2hAQgOAKgJAUQgNAcgFAaQgFAFAAADIgBAIQAAALADALQADAJAFAIIAXAhIAAgBIgIgQQgFgNAAgQQAAgkAIggQAMgqAWgaIgQAKg");
	this.shape_22.setTransform(-1,-2.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6666").s().p("AB3AJIgOgKIAdgMIABARQAAALgDALQgGgJgHgIgAiEABIgCgaIADAAQAFACASAOIAMAJIgEABQgRAMgLANQgCgIgCgRg");
	this.shape_23.setTransform(-1.4,-12.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-2.7,0,0.7,-2.7,6.7).s().p("AAOAVQADgLABgKIgCgSIgbANQgNgKgQgGQAMgHAagJIAlgNQAFAOAAAkQAAASgEARIgGAQQgGgQgKgOg");
	this.shape_24.setTransform(10.4,-12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],2.7,-1,0,2.7,-1,13.7).s().p("Ag/BNIgFgfIAAgFIAAgBIAAgEQgBgEgCgDQgCgXABgbQAAgqAOgSQASgYAqAAQAqAAARAjQANAaAAAtIgBAWIAAASIgBAGIgBAIIAAAAQAAAMgBAEQgFANgPAAQgQAAgHgYIAAgCIgBgHIAAgBIAAgCQgMgGgeAAIgBAKIgBAMQgFAqgJAAQgVAAgKgdg");
	this.shape_25.setTransform(-1.6,10.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],5.2,-4.6,0,5.2,-4.6,13.7).s().p("AAkBbQgCgEAAgKIABgbIgBgBQgDgHgMAAIAAAAIAAAAQgCgBgKABQgKACgJADQgFACgBAFIAAACQgDAFgCAIQgFASgUAAQgVAAgKgPQgCgEgEgNQgBgHgCgEQgFgZAAgjQAAgiAKgcIADgIIARgJQAIgDAKAAQALAAAJgDQAKgDAaAEQAbAEAcAcQAZAYADAkIgCAaQAAAOgDAMIAAADQAAAVgBAJQgFAagRAAQgXAAgHgMg");
	this.shape_26.setTransform(-0.8,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:-15.3}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{y:-15.7}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:-15.3}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{y:-15.7}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).wait(2));

	// shadow
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.533)").s().p("AioArQhGgSAAgZQAAgYBGgTQBGgQBigBQBjABBGAQQBGATAAAYQAAAZhGASQhGAShjAAQhiAAhGgSg");
	this.shape_27.setTransform(0.8,17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.533)").s().p("AiiArQhEgSAAgZQAAgYBEgTQBEgQBegBQBgABBEAQQBCATAAAYQAAAZhCASQhEAShgAAQheAAhEgSg");
	this.shape_28.setTransform(0.6,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-19,47.8,43);


(lib.g_heart = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADATIgBgDIABgEIAEgBIADABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBgAgIgGQgDgDAAgDQAAgEADgCQACgCAEAAQACAAACACQACACAAAEQAAADgCADQgCADgCAAQgEAAgCgDg");
	this.shape.setTransform(39.2,-9.4,1,1,0,0,0,-1.2,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF9C4","#FDE724","#D77717","#FDE40B"],[0,0.224,0.604,1],7.1,-10.6,0,7.1,-10.6,34).s().p("AhoCdICaiCIAEgDIAEgEIADgEQAbgbAAgnQAAgrgegdQgfgegpAAQgrAAgeAeQgKAJgGAJIAAAAIgBgBIAAgNQAHgLAKgJQAhgiAvAAQAtAAAiAiQAhAhAAAvQAAAsgeAeIgDAEIgFAEIgDAEIioCRg");
	this.shape_1.setTransform(35.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#DBBB3E","#AE6637","#733F0D","#88511A"],[0,0.224,0.604,1],-277.6,-251.5,0,-277.6,-251.5,422.2).s().p("AAAADIAAgFIAAABIAAAEg");
	this.shape_2.setTransform(24.9,-10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#DBBB3E","#AE6637","#733F0D","#88511A"],[0,0.224,0.604,1],-6.5,-12.9,0,-6.5,-12.9,34).s().p("AhfCaIgBAAIAAgKICXh6IADgDIAEgDIADgEQAbgZAAglQAAgngegcQgegcgoAAQgqAAgeAcQgJAIgGAJIAAgGIABAAQAGgJAJgJQAegeAsAAQApAAAeAeQAfAdAAArQAAAngbAbIgEAEIgEAEIgDADIiaCCg");
	this.shape_3.setTransform(34.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFF9C4","#FDE724","#D77717","#FDE40B"],[0.039,0.224,0.604,1],7.1,-15.2,0,7.1,-15.2,34).s().p("ABoCsIiniQIgDgEIgFgEIgDgEQgegeAAgsQAAgwAhghQAighAtAAQAvAAAhAhQAKAKAHALIAAANQgGgJgJgIQgegegsgBQgpABgeAeQgfAdAAArQAAAnAbAbIAEAEIAEADIADAEICYCBIABAAIAAABIAAAQIgBAAg");
	this.shape_4.setTransform(14.3,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FEB4B4","#FF0000","#770F0F","#D01E1E"],[0,0.369,0.886,1],5,-12,0,5,-12,26.1).s().p("AAACQIiWh5IgDgDIgEgDIgEgEQgagZAAglQAAgnAegcQAdgcAqAAQArAAAdAcQAJAIAFAJIAAAAQAGgJAIgIQAegcArAAQAqAAAeAcQAdAcAAAnQAAAlgaAZIgDAEIgFADIgDADIiXB6g");
	this.shape_5.setTransform(24.9,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#DBBB3E","#AE6637","#733F0D","#88511A"],[0,0.255,0.604,1],-8,-8.5,0,-8,-8.5,27.9).s().p("Ag5AaIgDgEIgEgDIgEgEQgbgbAAgnQAAgrAfgdQAegeApgBQAsABAeAeQAJAIAGAJIAAAHQgHgJgIgIQgegdgqAAQgoAAgeAdQgeAcAAAnQAAAlAbAZIADAEIAEADIADACICVB6IAAABIAAAKg");
	this.shape_6.setTransform(15.2,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("ABWgcIAAA5IirAAIAAg5g");
	this.shape_7.setTransform(-14.7,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,4.7).s().p("AhVAdIAAg5ICqAAIAAA5g");
	this.shape_8.setTransform(-14.7,0.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-17.7,70.2,34.7);


(lib.mcMessages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Finale_0:0,Finale_1:1,Finale_2:2,Finale_3:3,Finale_4:4,Finale_5:5,Help_0:6,Help_1:7,Help_2:8,Help_3:9,Help_4:10});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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CAEQgCAGAAAGIAAA4gAXQClIAAg6QAAgIgCgFQgBgFgEgEQgDgEgEgBQgEgBgGgBQgGABgEABQgFACgDADQgDAEgCAFQgCAFAAAIIAAA6IgSAAIAAg7QAAgGgBgGQgCgFgEgEQgDgDgEgCQgFgCgFAAQgGAAgEACQgFADgDADQgDADgCAGQgBAFAAAGIAAA7IgSAAIAAhmIASAAIAAAJQAFgFAGgCQAGgDAIAAIAKACIAJADIAHAEIAGAIIAHgHQAEgDAFgCIAJgDIALgBQAJAAAHADQAHACAGAGQAFAFADAIQADAIAAAKIAAA8gATvClIAAg1QAAgIgCgIQgCgFgDgFQgEgDgFgDQgFgCgHAAQgGAAgFACQgFADgEADQgEAEgCAFQgCAHAAAIIAAA3IgSAAIAAhmIASAAIAAALQAGgFAIgDQAHgDAJgBQAKABAIADQAIACAGAHQAGAGADAJQADAOAAAIIAAA1gARaClIAAhnIARAAIAAANQAFgGAGgDQAHgDAIgBQAFAAAHADIAAASIgHgDIgFgBQgGABgFADQgEACgEADQgDAFgCAEQgCAGAAAGIAAA4gAQvClIAAgQIgIAHIgIAFIgKADIgKABQgPgCgHgDQgMgFgFgFIgHgHIgFgIIgDgKIgBgKIABgLIADgKQADgGAIgKIAIgHIAJgEIALgDIALgBIALABIAKADIAIAEQAEADAEAEIAAgOIARAAIAABlgAP8BSQgHADgFAEQgFAFgCAHQgDAGAAAHQAAAIACAGQADAGAFAFQAFAFAHACQAHACAIAAQAHAAAHgCQAGgCAFgFQAFgFADgGQADgGAAgIQAAgHgDgHQgDgGgFgFQgFgEgHgDQgGgDgIAAQgHAAgHADgAOICkIgKgEQgMgGgFgFIgHgHIgFgJIgDgJIgBgLIABgKIADgJQADgHAJgKQAFgEAMgGIAKgDIALgBIALABIAKADIAJAEIAIAHIAGAIIAFAKIADALIABANIhZAAQABAGADAFQADAFAFAEQAFAEAGADQAGACAHAAQAIAAAIgDQAHgEAFgFIAVAAQgEAGgFAFIgLAJQgHADgHADQgHACgIAAgAO2BoIgFgKQgEgFgEgDQgFgEgGgBQgFgCgHAAIgMACIgKAFQgEAEgDAEQgEAFgBAFIBGAAIAAAAgAKOClQgIgBgFgDQgEgDgCgEQgDgFAAgJIAAg8IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACACIAHABQAIgBAEgEIAAAQQgHAGgHABgAHqCiQgIgCgGgEQgGgFgDgGQgDgGAAgIIATAAQAAAEACAEIAGAGIAIADIAKAAQAJAAAHgDQADgBACgDQACgDAAgDQAAgEgHgDIgmgNIgIgEQgFgDgDgGQgCgFAAgGQAAgGADgGQACgFAGgDQAFgEAIgCQAHgDAIAAQAJAAAHADQAHACAGADQAFAEADAGQADAFAAAHIgUAAQAAgEgCgCIgEgGQgGgEgIAAQgGABgEABIgHADQgEAEAAAFQAAAEADADQAEAEALADIAYAIQAKACAFAFQADADACADQACADAAAFQABAHgDAGQgDAGgGAEQgGAEgIACQgIACgJABQgKgBgJgCgAGqClIAAg6QAAgIgBgFQgCgFgDgEQgDgEgFgBQgEgBgGgBQgFABgFABQgEACgDADQgEAEgCAFQgBAFAAAIIAAA6IgSAAIAAg7QAAgGgCgGQgCgFgDgEQgDgDgFgCQgEgCgFAAQgGAAgFACQgEADgDADQgDADgCAGQgCAFAAAGIAAA7IgSAAIAAhmIASAAIAAAJQAFgFAHgCQAFgDAJAAIAKACIAIADIAIAEIAGAIIAHgHQAEgDAEgCIAKgDIAKgBQAJAAAIADQAHACAFAGQAFAFADAIQADAIAAAKIAAA8gADSCkIgKgEQgMgGgFgFIgHgHIgFgJIgDgJIgBgLIABgKIADgJQADgHAJgKQAFgEAMgGIAKgDIALgBIALABIAKADIAJAEIAIAHIAGAIIAFAKIADALIABANIhZAAQABAGADAFQADAFAFAEQAFAEAGADQAGACAHAAQAIAAAIgDQAHgEAFgFIAVAAQgEAGgFAFIgLAJQgHADgHADQgHACgIAAgAEABoIgFgKQgEgFgEgDQgFgEgGgBQgFgCgHAAIgMACIgKAFQgEAEgDAEQgEAFgBAFIBGAAIAAAAgACEClQgIgBgFgDQgEgDgCgEQgDgFAAgJIAAg8IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACACIAHABQAIgBAEgEIAAAQQgHAGgHABgAA3ClIAAhmIASAAIAABmgAhPCkIgKgEQgMgGgFgFIgHg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DAFAFAEQAFAEAGACQAGACAHABQAIAAAHgEQAHgDAFgGIAWAAQgEAGgFAGIgMAJQgGADgIACQgHACgHAAgAHbiCIgFgLQgDgEgFgDQgEgEgGgCQgGgBgGAAIgMABIgKAGQgFADgDAFQgDAEgCAGIBGAAIAAAAgAFfhGQgIAAgFgEQgEgDgCgEQgCgFAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA+QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgADuhHIgLgDQgNgGgFgEIgGgIIgFgJIgEgKIgBgKIABgKIAEgKQACgGAJgKQAFgFANgFIAKgEIALgBQAJAAAIACQAIADAGAEQAHAFAFAGQAGAGADAJIgTAAIgGgJIgIgFQgEgCgFgCQgFgBgFAAQgIAAgGADQgHADgFAEQgFAFgDAGQgDAHAAAIQAAAGADAHQADAGAFAFQAFAFAHACQAHAEAIAAIAJgBIAIgEQAFgCAKgLIAUAAQgFAIgGAHQgGAGgGAFQgGAEgIABQgHACgIAAgAB1hHIgKgDQgMgGgFgFIgHgHIgFgJIgDgKIgBgKIABgKIADgKQADgGAJgKQAFgFAMgFIAKgEIALgBIALABIAKADIAJAFIAIAHIAGAIIAFAKIADAKIABAOIhZAAQABAGADAFQADAFAFAEQAFAEAGACQAGACAHABQAIAAAIgEQAHgDAFgGIAVAAQgEAGgFAGIgLAJQgHADgHACQgHACgIAAgACjiCIgFgLQgEgEgEgDQgFgEgGgCQgFgBgHAAIgMABIgKAGQgEADgDAFQgEAEgBAGIBGAAIAAAAgAAkhGIAAiTIASAAIAACTgAgHhGIAAiTIAQAAIAACTgAjThHIgKgDQgNgGgFgEIgHgIIgFgJIgDgKIgBgKIABgKIADgKQADgGAJgKQAFgFAMgFIALgEIALgBQAIAAAIACQAIADAHAEQAHAFAFAGQAFAGAEAJIgTAAIgHgJIgIgFQgEgCgFgCQgEgBgFAAQgIAAgHADQgHADgFAEQgFAFgCAGQgDAHAAAIQAAAGADAHQACAGAFAFQAGAFAGACQAHAEAIAAIAJgBIAIgEQAFgCALgLIATAAQgFAIgGAHQgFAGgHAFQgGAEgHABQgHACgIAAgAlUhGQgIAAgFgEQgEgDgCgEQgCgFAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA+QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgAoXhGIAAg0QAAgJgCgHQgCgGgDgEQgEgEgFgCQgFgCgHAAQgGAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAHIAAA3IgSAAIAAhmIASAAIAAALQAGgFAIgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAHADAIQADAPAAAIIAAA0gArmhHIgKgDQgMgGgFgFIgHgHIgFgJIgDgKIgBgKIABgKIADgKQADgGAJgKQAFgFAMgFIAKgEIALgBIALABIAKADIAJAFIAIAHIAGAIIAFAKIADAKIABAOIhZAAQABAGADAFQADAFAFAEQAFAEAGACQAGACAHABQAIAAAIgEQAHgDAFgGIAVAAQgEAGgFAGIgLAJQgHADgHACQgHACgIAAgAq4iCIgFgLQgEgEgEgDQgFgEgGgCQgFgBgHAAIgMABIgKAGQgEADgDAFQgEAEgBAGIBGAAIAAAAgAtWhGIgrhmIASAAIAhBPIAihPIASAAIgrBmgAuhhGIAAgPIgIAHIgIAEIgJADIgLABQgPgBgHgDQgMgFgFgFIgHgHIgFgJIgDgJIgBgLIABgKIADgKQADgHAJgJIAIgHIAJgEIAKgEIALgBIALABIAKADIAIAFQAFADADAEIAAgPIASAAIAABlgAvUiZQgGADgFAEQgFAFgDAHQgDAGAAAIQAAAHADAGQADAGAFAGQAFAEAHACQAGADAIAAQAIAAAGgDQAHgCAFgEQAFgGACgGQADgGAAgHQAAgIgDgHQgCgGgFgFQgFgEgHgDQgHgCgHgBQgIABgHACgAwchGIAAg1QAAgIgCgHQgBgGgEgEQgEgEgFgCQgFgCgHAAQgGABgFABQgFACgEAEQgDADgDAHQgCAFAAAIIAAA3IgRAAIAAiTIARAAIAAA4QAGgFAHgDQAIgCAIgBQALAAAIAEQAIACAGAHQAGAGADAIQADANAAAJIAAA1gAy/hGIAAgMQgFAGgHADQgHADgKAAQgKAAgIgDQgJgDgFgFQgGgGgDgJQgCgGgBgQIAAg2IARAAIAAA2QAAAJACAGQACAGADAEQAEADAFADQAFABAHAAQAGAAAFgBQAFgDAEgDQAEgFACgGQACgHAAgJIAAg0IASAAIAABmgA3UhGIAAgxIgwhiIAVAAIAlBOIAkhOIATAAIgwBiIAAAxgAhchIIgKgCIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgKIADgKQACgGAJgKQAFgFAMgFIAKgEIALgBQAIABAOADQAGADALAIQAIAKADAGIADAKIABAKIgBAKIgDAKIgFAJIgGAIQgKAHgHADQgNADgIAAgAhhiZQgGADgFAEQgFAFgCAGQgDAGAAAIQAAAHADAHQADAGAFAFQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQADgGAAgHQAAgIgDgHQgDgGgFgFQgFgEgGgDQgHgCgIAAQgHAAgHACgAnIhIIgKgCIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgKIADgKQACgGAJgKQAFgFAMgFIAKgEIALgBQAIABAOADQAGADALAIQAIAKADAGIADAKIABAKIgBAKIgDAKIgFAJIgGAIQgKAHgHADQgNADgIAAgAnNiZQgGADgFAEQgFAFgCAGQgDAGAAAIQAAAHADAHQADAGAFAFQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQADgGAAgHQAAgIgDgHQgDgGgFgFQgFgEgGgDQgHgCgIAAQgHAAgHACgA1ahIIgLgCIgJgFIgIgGIgHgHIgFgJIgDgKIgBgKIABgKIADgKQADgGAJgKQAEgFANgFIAKgEIALgBQAIABANADQAHADAKAIQAJAKACAGIADAKIABAKIgBAKIgDAKIgEAJIgHAIQgKAHgGADQgOADgHAAgA1giZQgGADgEAEQgFAFgDAGQgCAGAAAIQAAAHADAHQACAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgEADgHQACgGAAgHQAAgIgCgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgATJjDIAAgWIASAAIAAAWg");
	this.shape.setTransform(512,310);

	this.instance = new lib.star("single",1);
	this.instance.setTransform(441.8,413.2,1.211,1.211,0,0,0,25.9,22.9);

	this.instance_1 = new lib.star("single",1);
	this.instance_1.setTransform(513.6,413.2,1.211,1.211,0,0,0,26.2,22.9);

	this.instance_2 = new lib.star("single",1);
	this.instance_2.setTransform(584.6,413.2,1.211,1.211,0,0,0,25.7,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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gCgDIgEgFQgGgEgIAAQgGAAgEABIgHADQgEAEAAAFQAAAEADADQAEAFALADIAYAHQAKACAFADQADADACADQACAEAAAFQABAGgDAGQgDAGgGAEQgGAEgIACQgIADgJAAQgKAAgJgDgAFBAvIAAg4QAAgHgBgGQgCgFgDgEQgDgDgFgCQgEgBgGAAQgFAAgFABQgEACgDADQgEAEgCAFQgBAGAAAHIAAA4IgSAAIAAg4QAAgHgCgGQgCgFgDgEQgDgDgFgBQgEgCgFAAQgGAAgFACQgEACgDADQgDAEgCAFQgCAFAAAHIAAA4IgSAAIAAhkIASAAIAAAJQAFgFAHgCQAFgCAJAAIAKABIAIADIAIAFIAGAHIAHgHQAEgDAEgCIAKgDIAKgBQAJAAAIADQAHACAFAGQAFAFADAIQADAIAAALIAAA5gABpAuIgKgDQgMgGgFgFIgHgIIgFgIIgDgKIgBgIIABgLIADgJQADgGAJgKQAFgFAMgGIAKgDIALgBIALABIAKADIAJAFIAIAGIAGAIIAFAKIADALIABALIhZAAQABAGADAGQADAFAFAEQAFAEAGACQAGACAHAAQAIAAAIgDQAHgDAFgGIAVAAQgEAGgFAFIgLAJQgHAEgHACQgHACgIAAgACXgLIgFgLQgEgFgEgDQgFgDgGgCQgFgBgHAAIgMABIgKAFQgEAEgDAEQgEAFgBAGIBGAAIAAAAgAAbAvQgIAAgFgEQgEgDgCgEQgDgFAAgIIAAg7IgQAAIAAgRIAQAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA8QABADACABIAHABQAIgBAEgEIAAAQQgHAHgHAAgAgwAvIAAhkIASAAIAABkgAi4AuIgKgDQgMgGgFgFIgHgIIgFgIIgDgKIgBgIIABgLIADgJQADgGAJgKQAFgFAMgGIAKgDIALgBIALABIAKADIAJAFIAIAGIAGAIIAFAKIADALIABALIhZAAQABAGADAGQADAFAFAEQAFAEAGACQAGACAHAAQAIAAAIgDQAHgDAFgGIAVAAQgEAGgFAFIgLAJQgHAEgHACQgHACgIAAgAiKgLIgFgLQgEgFgEgDQgFgDgGgCQgFgBgHAAIgMABIgKAFQgEAEgDAEQgEAFgBAGIBGAAIAAAAgAkoAvIAAhkIARAAIAAAMQAFgGAGgDQAHgDAIAAQ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IADgJQADgHAJgJQAEgFANgGIAKgDIALgBQAIAAANAEQAHACAKAJQAJAKACAGIADAJIABALIgBAIIgDAKIgEAJIgHAHQgKAIgGADQgOADgHAAgAJugiQgGADgEAEQgFAFgDAGQgCAGAAAHQAAAGADAHQACAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgFADgGQACgGAAgGQAAgHgCgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgAl9AtIgLgCIgJgFIgIgGIgHgIIgFgIIgDgKIgBgJIABgKIADgJQADgHAJgJQAEgFANgGIAKgDIALgBQAIAAANAEQAHACAKAJQAJAKACAGIADAJIABALIgBAIIgDAKIgEAJIgHAHQgKAIgGADQgOADgHAAgAmDgiQgGADgEAEQgFAFgDAGQgCAGAAAHQAAAGADAHQACAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgFADgGQACgGAAgGQAAgHgCgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgAxqAtIgKgCIgKgFIgIgGIgGgIIgFgIIgDgKIgBgJIABgKIADgJQACgHAJgJQAFgFAMgGIAKgDIALgBQAIAAAOAEQAGACALAJQAIAKADAGIADAJIABALIgBAIIgDAKIgFAJIgGAHQgKAIgHADQgNADgIAAgAxvgiQgGADgFAEQgFAFgCAGQgDAGAAAHQAAAGADAHQADAGAFAFQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgFACgGQADgGAAgGQAAgHgDgHQgDgGgFgFQgFgEgGgDQgHgCgIAAQgHAAgHACgAzyAtQgHgBgGgDQgHgDgGgEIgKgIQgFgFgEgGQgEgGgCgGQgDgFgBgHQgCgHAAgIQAAgIACgHQABgIACgGIAHgNIAIgLIALgIQAFgEAHgDQAGgDAHgBIAPgCQALAAAKADQAJADAJAFQAIAGAHAHQAGAJAFAKIgUAAQgEgHgFgFQgFgFgGgDIgLgEQgGgCgHAAIgLABQgGABgFADIgJAFIgIAGIgGAJIgFAJIgDALIgBALQAAAGABAGIADAKIAFAIIAHAIIAIAHIAJAFIAKADQAFACAGAAQAHAAAGgCQAGgBAFgDIALgIIAKgMIATAAQgFALgHAIQgHAIgIAFQgIAFgJADQgJACgLAAIgPgBgA2EADIAAhlIARAAIAABlgAgwhMIAAgWIASAAIAAAWgA4thMIAAgWIASAAIAAAWg");
	this.shape_1.setTransform(511.7,298.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ab/C/IAAgWIATAAIAAAWgAasC8QgIgCgGgEQgGgFgDgGQgEgGAAgIIAUAAQAAAEACAEIAGAGIAIADIAJABQAJAAAHgEQAEgBACgCQACgEAAgDQgBgEgHgDIglgMIgIgFQgFgDgDgGQgDgFAAgGQAAgFADgGQADgFAFgDQAGgEAHgDQAHgCAJAAQAIAAAIACQAHACAFAEQAGAEACAGQADAFAAAGIgUAAQAAgDgBgDIgFgFQgGgEgHAAQgGAAgEACIgHACQgFAEAAAFQAAAFAEADQAEAEAKADIAZAHQAJACAGAFQADADABAEQACADABAFQAAAHgDAFQgDAGgGAEQgFAFgIABQgJADgJAAQgKAAgIgDgAZKC/IAAhmIARAAIAAAMQAFgFAGgEQAHgDAIAAQAFAAAHACIAAASIgHgCIgFgBQgGAAgFADQgEACgEAEQgDAEgCAFQgCAGAAAFIAAA4gAYfC/IAAgPIgIAGIgIAGIgKACIgKABQgPgBgHgDQgMgFgFgFIgHgHIgFgJIgDgJIgBgKIABgLIADgLQADgGAIgJIAIgHIAJgFIALgDIALAAIALAAIAKADIAIAFQAEADAEAEIAAgPIARAAIAABlgAXsBsQgHADgFAFQgFAEgCAHQgDAGAAAIQAAAHACAGQADAHAFAEQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAFgEADgHQADgGAAgHQAAgIgDgHQgDgFgFgFQgFgFgHgDQgGgDgIABQgHgBgHADgAWiC/QgIAAgFgDQgEgDgCgFQgDgFAAgIIAAg8IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACABIAHABQAIgBAEgDIAAAQQgHAGgHAAgAUwC8QgIgCgGgEQgGgFgDgGQgDgGAAgIIATAAQAAAEACAEIAGAGIAIADIAKABQAJAAAHgEQADgBACgCQACgEAAgDQAAgEgHgDIgmgMIgIgFQgFgDgDgGQgCgFAAgGQAAgFADgGQACgFAGgDQAFgEAIgDQAHgCAIAAQAJAAAHACQAHACAGAEQAFAEADAGQADAFAAAGIgUAAQAAgDgCgDIgEgFQgGgEgIAAQgGAAgEACIgHACQgEAEAAAFQAAAFADADQAEAEALADIAYAHQAKACAFAFQADADACAEQACADAAAFQABAHgDAFQgDAGgGAEQgGAFgIABQgIADgJAAQgKAAgJgDgASVC+IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgLIADgJQADgGAIgKQAFgEAMgHIAKgDIALAAIALAAIAKADIAJAFIAIAHIAHAIIAEAKIADALIABAMIhYAAQABAHADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIgBAHgDQAHgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgIACQgHACgHAAgATCCDIgFgLQgDgEgFgDQgEgEgGgCQgGgBgGAAIgMABIgKAGQgFADgDAEQgDAFgCAGIBGAAIAAAAgAQkC/IAAhmIASAAIAAAMQAEgFAGgEQAHgDAIAAQAGAAAGACIAAASIgGgCIgFgBQgGAAgFADQgFACgDAEQgEAEgBAFQgCAGAAAFIAAA4gAOAC/IAAg5QAAgIgCgGQgBgFgEgEQgDgDgEgBQgEgCgGAAQgGAAgEACQgFABgDADQgDAEgCAFQgCAGAAAIIAAA5IgSAAIAAg6QAAgHgBgGQgCgFgEgEQgDgCgEgCQgFgCgFAAQgGAAgEACQgFACgDAEQgDADgCAGQgBAFAAAGIAAA6IgSAAIAAhlIASAAIAAAIQAFgEAGgDQAGgCAIAAIAKABIAJADIAHAFIAGAIIAHgIQAEgDAFgCIAJgDIALAAQAJAAAHACQAHACAGAGQAFAFADAJQADAHAAALIAAA7gAKfC/IAAg0QAAgJgCgHQgCgGgDgEQgEgEgFgCQgFgCgHAAQgGAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAHIAAA3IgSAAIAAhlIASAAIAAAKQAGgFAIgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADAOAAAJIAAA0gAIKC/IAAhmIARAAIAAAMQAFgFAGgEQAHgDAIAAQAFAAAHACIAAASIgHgCIgFgBQgGAAgFADQgEACgEAEQgDAEgCAFQgCAGAAAFIAAA4gAHfC/IAAgPIgIAGIgIAGIgKACIgKABQgPgBgHgDQgMgFgFgFIgHgHIgFgJIgDgJIgBgKIABgLIADgLQADgGAIgJIAIgHIAJgFIALgDIALAAIALAAIAKADIAIAFQAEADAEAEIAAgPIARAAIAABlgAGsBsQgHADgFAFQgFAEgCAHQgDAGAAAIQAAAHACAGQADAHAFAEQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAFgEADgHQADgGAAgHQAAgIgDgHQgDgFgFgFQgFgFgHgDQgGgDgIABQgHgBgHADgAE4C+IgKgDQgMgGgFgFIgHgHIgFgJIgDgJIgBgLIABgLIADgJQADgGAJgKQAFgEAMgHIAKgDIALAAIALAAIAKADIAJAFIAIAHIAGAIIAFAKIADALIABAMIhZAAQABAHADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIgBAIgDQAHgDAFgGIAVAAQgEAGgFAFIgLAJQgHAEgHACQgHACgIAAgAFmCDIgFgLQgEgEgEgDQgFgEgGgCQgFgBgHAAIgMABIgKAGQgEADgDAEQgEAFgBAGIBGAAIAAAAgAA+C/QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgAhjC8QgIgCgGgEQgGgFgDgGQgEgGAAgIIAUAAQAAAEACAEIAGAGIAIADIAJABQAJAAAHgEQAEgBACgCQACgEAAgDQgBgEgHgDIglgMIgIgFQgFgDgDgGQgDgFAAgGQAAgFADgGQADgFAFgDQAGgEAHgDQAHgCAJAAQAIAAAIACQAHACAFAEQAGAEACAGQADAFAAAGIgUAAQAAgDgBgDIgFgFQgGgEgHAAQgGAAgEACIgHACQgFAEAAAFQAAAFAEADQAEAEAKADIAZAHQAJACAGAFQADADABAEQACADABAFQAAAHgDAFQgDAGgGAEQgFAFgIABQgJADgJAAQgKAAgIgDgAijC/IAAg5QAAgIgCgGQgBgFgEgEQgDgDgEgBQgEgCgGAAQgGAAgEACQgFABgDADQgDAEgCAFQgCAGAAAIIAAA5IgSAAIAAg6QAAgHgBgGQgCgFgEgEQgDgCgEgCQgFgCgFAAQgGAAgEACQgFACgDAEQgDADgCAGQgBAFAAAGIAAA6IgSAAIAAhlIASAAIAAAIQAFgEAGgDQAGgCAIAAIAKABIAJADIAHAFIAGAIIAHgIQAEgDAFgCIAJgDIALAAQAJAAAHACQAHACAGAGQAFAFADAJQADAHAAALIAAA7gAl7C+IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgLIADgJQADgGAIgKQAFgEAMgHIAKgDIALAAIALAAIAKADIAJAFIAIAHIAHAIIAEAKIADALIABAMIhYAAQABAHADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIgBAHgDQAHgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgIACQgHACgHAAgAlOCDIgFgLQgDgEgFgDQgEgEgGgCQgGgBgGAAIgMABIgKAGQgFADgDAEQgDAFgCAGIBGAAIAAAAgAnKC/QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgAoWC/IAAhlIASAAIAABlgAqeC+IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgLIADgJQADgGAIgKQAFgEAMgHIAKgDIALAAIALAAIAKADIAJAFIAIAHIAHAIIAEAKIADALIABAMIhYAAQABAHADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIgBAHgDQAHgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgIACQgHACgHAAgApxCDIgFgLQgDgEgFgDQgEgEgGgCQgGgBgGAAIgMABIgKAGQgFADgDAEQgDAFgCAGIBGAAIAAAAgAsPC/IAAhmIASAAIAAAMQAEgFAGgEQAHgDAIAAQAGAAAGACIAAASIgGgCIgFgBQgGAAgFADQgFACgDAEQgEAEgBAFQgCAGAAAFIAAA4gAuzC/IAAg5QAAgIgBgGQgCgFgDgEQgDgDgFgBQgEgCgGAAQgFAAgFACQgEABgDADQgEAEgCAFQgBAGAAAIIAAA5IgSAAIAAg6QAAgHgCgGQgCgFgDgEQgDgCgFgCQgEgCgFAAQgGAAgFACQgEACgDAEQgDADgCAGQgCAFAAAGIAAA6IgSAAIAAhlIASAAIAAAIQAFgEAHgDQAFgCAJAAIAKABIAIADIAIAFIAGAIIAHgIQAEgDAEgCIAKgDIAKAAQAJAAAIACQAHACAFAGQAFAFADAJQADAHAAALIAAA7gAyTC/QgIAAgFgDQgEgDgCgFQgDgFAAgIIAAg8IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACABIAHABQAIgBAEgDIAAAQQgHAGgHAAgA0FC+IgKgDQgNgGgFgEIgHgIIgFgJIgDgJIgBgLIABgLIADgJQADgGAJgKQAFgEAMgHIALgDIALAAQAIgBAIACQAIADAHAEQAHAFAFAGQAFAHAEAIIgTAAIgHgIIgIgGQgEgCgFgBQgEgCgFAAQgIAAgHADQgHADgFAFQgFAEgCAGQgDAHAAAIQAAAGADAHQACAGAFAFQAGAFAGACQAHADAIABIAJgCIAIgDQAFgDALgKIATAAQgFAIgGAHQgFAGgHAEQgGAEgHACQgHACgIAAgA19C+IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgLIADgJQADgGAIgKQAFgEAMgHIAKgDIALAAIALAAIAKADIAJAFIAIAHIAHAIIAEAKIADALIABAMIhYAAQABAHADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIgBAHgDQAHgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgIACQgHACgHAAgA1QCDIgFgLQgDgEgFgDQgEgEgGgCQgGgBgGAAIgMABIgKAGQgFADgDAEQgDAFgCAGIBGAAIAAAAgA3OC/IAAiSIASAAIAACSgA37C/IAAiSIASAAIAACSgAPPC9IgKgCIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgLIADgJQACgHAJgJQAFgEAMgHIAKgDIALAAQAIAAAOADQAGACALAJQAIAKADAGIADAJIABALIgBALIgDAKIgFAIIgGAIQgKAHgHADQgNAEgIgBgAPKBsQgGADgFAFQgFAEgCAGQgDAGAAAIQAAAHADAHQADAHAFAEQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQADgGAAgHQAAgIgDgHQgDgGgFgEQgFgFgGgDQgHgCgIAAQgHAAgHACgACNC9IgKgCIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgLIADgJQACgHAJgJQAFgEAMgHIAKgDIALAAQAIAAAOADQAGACALAJQAIAKADAGIADAJIABALIgBALIgDAKIgFAIIgGAIQgKAHgHADQgNAEgIgBgACIBsQgGADgFAFQgFAEgCAGQgDAGAAAIQAAAHADAHQADAHAFAEQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQADgGAAgHQAAgIgDgHQgDgGgFgEQgFgFgGgDQgHgCgIAAQgHAAgHACgAtkC9IgKgCIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgLIADgJQACgHAJgJQAFgEAMgHIAKgDIALAAQAIAAAOADQAGACALAJQAIAKADAGIADAJIABALIgBALIgDAKIgFAIIgGAIQgKAHgHADQgNAEgIgBgAtpBsQgGADgFAFQgFAEgCAGQgDAGAAAIQAAAHADAHQADAHAFAEQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQADgGAAgHQAAgIgDgHQgDgGgFgEQgFgFgGgDQgHgCgIAAQgHAAgHACgA5QC9IgLgCIgJgFIgIgGIgHgHIgFgJIgDgKIgBgKIABgLIADgJQADgHAJgJQAEgEANgHIAKgDIALAAQAIAAANADQAHACAKAJQAJAKACAGIADAJIABALIgBALIgDAKIgEAIIgHAIQgKAHgGADQgOAEgHgBgA5WBsQgGADgEAFQgFAEgDAGQgCAGAAAIQAAAHADAHQACAHAFAEQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgEADgHQACgGAAgHQAAgIgCgHQgDgGgFgEQgFgFgHgDQgHgCgHAAQgIAAgHACgA7YC9QgHgBgHgDQgGgDgGgDIgLgJQgFgFgDgGQgEgGgDgGQgDgHgBgHQgBgHAAgIQAAgHABgIQABgIADgGIAGgMIAJgMIAKgIQAGgEAGgCQAHgEAHgBIAPgBQAKgBAKADQAKADAIAFQAJAGAGAIQAHAIAEAKIgTAAQgEgHgGgFQgEgFgGgDIgMgEQgGgCgHABIgLAAQgFACgFACIgJAFIgIAHIgHAIIgEAKIgDAKIgCALQAAAGACAGIADALIAFAJIAGAJIAIAGIAKAGIAKACQAFACAFAAQAHAAAGgCQAGgBAGgDIAKgIIALgMIATAAQgGALgHAIQgGAIgIAFQgIAFgKADQgJADgKgBIgPgBgAoWBCIAAgVIASAAIAAAVgAK4AHIAZg2IgnhiIATAAIAeBMIAghMIASAAIhCCYgAPuAEQgIgCgHgDQgGgGgFgHQgFgHgDgKIARAAIAIAMIAHAGQAEADAFABIALABIAKgBIAIgEQAGgEAEgHQADgHACgKIABgSIgHAHQgEADgEACIgKADIgLABIgKgBIgLgDQgMgGgFgFIgGgHIgFgIIgDgKIgBgKQAAgIAEgNQADgGAIgKIAIgGIAJgFIAKgDIALgBIAKABIAKADQAEABAEAEIAIAGIAAgPIASAAIAABRQgBAXgCAJIgDANIgGAJQgKAKgHABIgKAEIgNABQgJAAgJgCgAPwh+QgGACgFAFQgFAEgCAHQgDAGAAAIQAAAHADAHQACAHAFAEQAFAFAGADQAHADAIAAQAHAAAHgDQAGgDAFgFQAFgEACgHQADgHAAgIQAAgHgDgGQgDgHgEgEQgFgFgHgCQgGgDgIAAQgHAAgHADgAVwgrIAAgXIAUAAIAAAXgAVFgrIAAg1QAAgIgCgIQgCgGgDgEQgEgDgFgCQgFgCgHgBQgGABgFACQgFACgEADQgEAEgCAFQgCAHAAAIIAAA3IgSAAIAAhmIASAAIAAALQAGgGAIgDQAHgCAJAAQAKAAAIACQAIAEAGAGQAGAGADAJQADAOAAAIIAAA1gATPgrIAAhmIASAAIAABmgASigrIAAgQIgIAHIgIAFIgKADIgKABQgPgCgHgCQgMgGgFgFIgHgGIgFgJIgDgJIgBgLIABgLIADgKQADgGAIgKIAIgGIAJgFIALgDIALgBIALABIAKACIAIAGQAEACAEAEIAAgOIARAAIAABlgARvh+QgHADgFAEQgFAFgCAHQgDAGAAAHQAAAHACAHQADAGAFAFQAFAEAHADQAHADAIgBQAHABAHgDQAGgDAFgEQAFgFADgGQADgHAAgHQAAgIgDgGQgDgGgFgFQgFgEgHgDQgGgDgIAAQgHAAgHADgAOkgrIAAgQIgIAHIgIAFIgKADIgKABQgPgCgHgCQgMgGgFgFIgHgGIgFgJIgDgJIgBgLIABgLIADgKQADgGAIgKIAIgGIAJgFIALgDIALgBIALABIAKACIAIAGQAEACAEAEIAAgOIARAAIAABlgANxh+QgHADgFAEQgFAFgCAHQgDAGAAAHQAAAHACAHQADAGAFAFQAFAEAHADQAHADAIgBQAHABAHgDQAGgDAFgEQAFgFADgGQADgHAAgHQAAgIgDgGQgDgGgFgFQgFgEgHgDQgGgDgIAAQgHAAgHADgAJngrIAAhmIARAAIAAAMQAFgGAGgDQAHgDAIAAQAFAAAHACIAAASIgHgDIgFAAQgGAAgFADQgEABgEAFQgDADgCAGQgCAFAAAGIAAA4gAIigrIA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");
	this.shape_2.setTransform(511.7,307.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AdDBgQgIgCgHgFQgGgFgFgHQgFgHgDgKIARAAIAIALIAHAHQAEADAFAAIALABIAKgBIAIgDQAGgEAEgHQADgHACgKIABgSIgHAHQgEADgEABIgKADIgLACIgKgCIgLgDQgMgFgFgFIgGgIIgFgIIgDgKIgBgIQAAgHAEgNQADgGAIgKIAIgHIAJgEIAKgEIALgBIAKABIAKAEQAEABAEADIAIAHIAAgQIASAAIAABPQgBAYgCAJIgDAMIgGAJQgKAKgHAEIgKADIgNABQgJAAgJgCgAdFgiQgGADgFAEQgFAFgCAGQgDAHAAAIQAAAFADAHQACAGAFAFQAFAFAGADQAHADAIAAQAHAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgFQAAgIgDgGQgDgGgEgFQgFgEgHgDQgGgCgIgBQgHABgHACgAesAvIAAgWIASAAIAAAWgAb5AvIAAgyQAAgJgCgHQgCgGgDgEQgEgEgFgCQgFgCgHAAQgGAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAHIAAA1IgSAAIAAhkIASAAIAAALQAGgFAIgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAHADAIQADAPAAAIIAAAygAaDAvIAAhkIASAAIAABkgAYfAvIAAgPIA0hEIgyAAIAAgRIBIAAIAAAPIg0BFIA3AAIAAAQgAX6AvIAAgPIgIAHIgIAEIgJADIgLABQgPgBgHgDQgMgFgFgFIgHgHIgFgJIgDgJIgBgJIABgKIADgKQADgHAJgJIAIgHIAJgEIAKgEIALgBIALABIAKADIAIAFQAFADADAEIAAgPIASAAIAABjgAXHgiQgGADgFAEQgFAFgDAHQgDAGAAAIQAAAFADAGQADAGAFAGQAFAEAHACQAGADAIAAQAIAAAGgDQAHgCAFgEQAFgGACgGQADgGAAgFQAAgIgDgHQgCgGgFgFQgFgEgHgDQgHgCgHgBQgIABgHACgAV9AvIAAg4QAAgHgBgFQgCgGgDgDQgDgEgFgCQgEgBgGAAQgFAAgFABQgEACgDAEQgEADgCAGQgBAFAAAHIAAA4IgSAAIAAg4QAAgHgCgFQgCgGgDgDQgDgEgFgBQgEgCgFAAQgGAAgFACQgEACgDAEQgDADgCAGQgCAEAAAHIAAA4IgSAAIAAhkIASAAIAAAJQAFgEAHgDQAFgCAJAAIAKABIAIADIAIAFIAGAHIAHgHQAEgDAEgBIAKgEIAKgBQAJABAIACQAHACAFAGQAFAFADAJQADAHAAALIAAA5gATVAvIgTgvIg7AAIgTAvIgTAAIA7iRIASAAIA7CRgAS7gQIgWg5IgXA5IAtAAgAQMAvIAAgWIASAAIAAAWgAOyAsQgIgCgGgEQgGgEgDgHQgEgGAAgIIAUAAQAAAFACADIAGAGIAIADIAJABQAJAAAHgEQAEgBACgCQACgEAAgDQgBgEgHgDIglgKIgIgEQgFgEgDgFQgDgGAAgGQAAgFADgGQADgFAFgEQAGgDAHgDQAHgCAJAAQAIAAAIACQAHADAFADQAGAEACAFQADAGAAAGIgUAAQAAgDgBgDIgFgFQgGgEgHAAQgGAAgEACIgHACQgFAEAAAFQAAAEAEAEQAEAEAKADIAZAHQAJADAGACQADADABADQACAEABAFQAAAGgDAGQgDAGgGAFQgFADgIACQgJADgJAAQgKAAgIgDgANxAvIAAg4QAAgHgBgFQgCgGgDgDQgDgEgFgCQgEgBgGAAQgFAAgFABQgEACgDAEQgEADgCAGQgBAFAAAHIAAA4IgSAAIAAg4QAAgHgCgFQgCgGgDgDQgDgEgFgBQgEgCgFAAQgGAAgFACQgEACgDAEQgDADgCAGQgCAEAAAHIAAA4IgSAAIAAhkIASAAIAAAJQAFgEAHgDQAFgCAJAAIAKABIAIADIAIAFIAGAHIAHgHQAEgDAEgBIAKgEIAKgBQAJABAIACQAHACAFAGQAFAFADAJQADAHAAALIAAA5gAKZAuIgKgDQgMgGgFgFIgHgHIgFgJIgDgKIgBgIIABgKIADgKQADgGAJgKQAFgFAMgFIAKgEIALgBIALABIAKADIAJAFIAIAHIAGAIIAFAKIADAKIABAMIhZAAQABAGADAFQADAFAFAEQAFAEAGACQAGACAHABQAIAAAIgEQAHgDAFgGIAVAAQgEAGgFAGIgLAJQgHADgHACQgHACgIAAgALHgLIgFgLQgEgEgEgDQgFgEgGgCQgFgBgHAAIgMABIgKAGQgEADgDAFQgEAEgBAGIBGAAIAAAAgAJLAvQgIAAgFgEQgEgDgCgEQgDgFAAgIIAAg7IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA8QABADACABIA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FgJIgDgKIgBgIIABgKIADgKQADgGAJgKQAEgFANgFIAKgEIALgBQAIABANADQAHADAKAIQAJAKACAGIADAKIABAKIgBAIIgDAKIgEAJIgHAIQgKAHgGADQgOADgHAAgAuDgiQgGADgEAEQgFAFgDAGQgCAGAAAIQAAAFADAHQACAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgEADgHQACgGAAgFQAAgIgCgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgA8TAtIgLgCIgJgFIgIgGIgHgHIgFgJIgDgKIgBgIIABgKIADgKQADgGAJgKQAEgFANgFIAKgEIALgBQAIABANADQAHADAKAIQAJAKACAGIADAKIABAKIgBAIIgDAKIgEAJIgHAIQgKAHgGADQgOADgHAAgA8ZgiQgGADgEAEQgFAFgDAGQgCAGAAAIQAAAFADAHQACAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgEADgHQACgGAAgFQAAgIgCgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgAesADIAAhlIASAAIAABlgAQMADIAAhlIASAAIAABlgAaDhMIAAgWIASAAIAAAWgAH+hMIAAgWIASAAIAAAWg");
	this.shape_3.setTransform(511.6,298.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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gEgkvAF7QgGACgFAFQgFAEgCAGQgDAHAAAHQAAAIADAGQADAHAFAEQAFAFAGADQAHACAIAAQAIAAAGgCQAGgDAFgFQAFgEACgGQADgHAAgHQAAgIgDgGQgDgHgFgEQgFgFgGgCQgHgDgIAAQgHAAgHADgEgpMAHMIgLgDIgJgFIgIgGIgHgHIgFgJIgDgKIgBgKIABgKIADgKQADgGAJgKQAEgEANgGIAKgDIALgBQAIAAANADQAHADAKAIQAJAKACAGIADAKIABAKIgBALIgDAKIgEAIIgHAIQgKAIgGACQgOAEgHAAgEgpSAF7QgGACgEAFQgFAEgDAGQgCAHAAAHQAAAIADAGQACAHAFAEQAFAFAHADQAHACAIAAQAHAAAHgCQAGgDAFgFQAEgEADgGQACgHAAgHQAAgIgCgGQgDgHgFgEQgFgFgHgCQgHgDgHAAQgIAAgHADgAyiFQIAAgVIASAAIAAAVgAObC5IAAgWIATAAIAAAWgANwC5IAAg5QAAgIgCgFQgBgGgEgDQgDgEgEgBQgEgCgGAAQgGAAgEACQgFACgDADQgDADgCAGQgCAFAAAIIAAA5IgSAAIAAg6QAAgHgBgFQgCgGgEgDQgDgDgEgCQgFgCgFAAQgGAAgEACQgFACgDAEQgDADgCAGQgBAFAAAGIAAA6IgSAAIAAhlIASAAIAAAJQAFgFAGgCQAGgDAIAAIAKABIAJADIAHAFIAGAIIAHgHQAEgEAFgBIAJgDIALgBQAJAAAHACQAHADAGAFQAFAGADAIQADAIAAAKIAAA7gAKYC4IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgKIADgKQADgGAIgKQAFgEAMgGIAKgDIALgBIALABIAKACIAJAFIAIAHIAHAIIAEAKIADALIABANIhYAAQABAGADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAHgEAFgGIAWAAQgEAHgFAFIgMAJQgGADgIACQgHACgHAAgALFB9IgFgLQgDgEgFgDQgEgEgGgBQgGgCgGAAIgMACIgKAFQgFADgDAFQgDAEgCAGIBGAAIAAAAgAJJC5QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgAH9C5IAAhlIASAAIAABlgAF1C4IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgKIADgKQADgGAIgKQAFgEAMgGIAKgDIALgBIALABIAKACIAJAFIAIAHIAHAIIAEAKIADALIABANIhYAAQABAGADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAHgEAFgGIAWAAQgEAHgFAFIgMAJQgGADgIACQgHACgHAAgAGiB9IgFgLQgDgEgFgDQgEgEgGgBQgGgCgGAAIgMACIgKAFQgFADgDAFQgDAEgCAGIBGAAIAAAAgAEoC5IAAg1QAAgIgCgHQgBgGgEgEQgEgEgFgBQgFgCgHAAQgGAAgFABQgFACgEAEQgDAEgDAGQgCAGAAAIIAAA2IgRAAIAAiSIARAAIAAA3QAGgFAHgDQAIgCAIAAQALAAAIADQAIADAGAGQAGAGADAJQADANAAAIIAAA1gAC3C5QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgAA8C5QgIAAgFgDQgEgDgCgFQgDgFAAgIIAAg8IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACABIAHABQAIgBAEgDIAAAQQgHAGgHAAgAg0C4IgKgDQgNgGgFgEIgHgIIgFgJIgDgJIgBgLIABgKIADgKQADgGAJgKQAFgEAMgGIALgDIALgBQAIAAAIACQAIACAHAFQAHAEADAGQAFAHAEAIIgRAAIgHgIIgIgGQgEgCgFgBQgEgCgFAAQgIAAgHADQgHADgFAFQgFAEgCAHQgDAGAAAIQAAAHADAGQACAGAFAFQAGAFAGADQAHADAIAAIAJgBIAIgDQAFgDALgLIARAAQgFAJgEAGQgFAHgHAEQgGAEgHABQgHACgIAAgAisC4IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgKIADgKQADgGAIgKQAFgEAMgGIAKgDIALgBIALABIAKACIAJAFIAIAHIAHAIIAEAKIADALIABANIhYAAQABAGADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAHgEAFgGIAWAAQgEAHgFAFIgMAJQgGADgIACQgHACgHAAgAh/B9IgFgLQgDgEgFgDQgEgEgGgBQgGgCgGAAIgMACIgKAFQgFADgDAFQgDAEgCAGIBGAAIAAAAgAj9C5IAAiSIASAAIAACSgAkqC5IAAiSIASAAIAACSgAn2C4IgLgDQgNgGgFgEIgGgIIgFgJIgEgJIgBgLIABgKIAEgKQACgGAJgKQAFgEANgGIAKgDIALgBQAJAAAIACQAIACAGAFQAHAEAFAGQAGAHADAIIgTAAIgGgIIgIgGQgEgCgFgBQgFgCgFAAQgIAAgGADQgHADgFAFQgFAEgDAHQgDAGAAAIQAAAHADAGQADAGAFAFQAFAFAHADQAHADAIAAIAJgBIAIgDQAFgDAKgLIAUAAQgFAJgGAGQgGAHgGAEQgGAEgIABQgHACgIAAgArxC5QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgAuOC5IAAhmIARAAIAAANQAFgGAGgDQAHgDAIgBQAFAAAHADIAAARIgHgCIgFgBQgGABgFACQgEACgEAEQgDAEgCAFQgCAGAAAGIAAA3gAviC4IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgKIADgKQADgGAIgKQAFgEAMgGIAKgDIALgBIALABIAKACIAJAFIAIAHIAHAIIAEAKIADALIABANIhYAAQABAGADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAHgEAFgGIAWAAQgEAHgFAFIgMAJQgGADgIACQgHACgHAAgAu1B9IgFgLQgDgEgFgDQgEgEgGgBQgGgCgGAAIgMACIgKAFQgFADgDAFQgDAEgCAGIBGAAIAAAAgAxOC5IgUg8IgUA8IgRAAIgnhlIASAAIAeBNIAVhBIAOAAIAWBBIAfhNIARAAIgoBlgAz0C3QgIgCgGgFQgGgEgDgGQgDgHAAgIIATAAQAAAFACADIAGAGIAIADIAKABQAJAAAHgDQADgCACgCQACgDAAgDQAAgFgHgCIgmgNIgIgEQgFgEgDgFQgCgGAAgFQAAgGADgGQACgFAGgDQAFgEAIgCQAHgDAIAAQAJAAAHADQAHACAGADQAFAEADAGQADAFAAAHIgUAAQAAgEgCgDIgEgFQgGgEgIAAQgGAAgEACIgHADQgEADAAAGQAAAEADADQAEAEALADIAYAHQAKADAFAEQADADACAEQACADAAAFQABAHgDAGQgDAFgGAFQgGAEgIACQgIACgJAAQgKAAgJgCgA00C5IAAg0QAAgJgCgHQgCgGgDgEQgEgEgFgCQgFgCgHAAQgGAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAIIAAA2IgSAAIAAhlIASAAIAAALQAGgGAIgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAHADAJQADAOAAAIIAAA0gA2oC5IAAgPIgIAHIgIAFIgJACIgLABQgPgBgHgDQgMgFgFgFIgHgHIgFgIIgDgKIgBgKIABgLIADgKQADgGAJgKIAIgHIAJgEIAKgDIALgBIALABIAKACIAIAFQAFADADAEIAAgPIASAAIAABlgA3bBmQgGADgFAFQgFAFgDAGQgDAHAAAHQAAAHADAHQADAGAFAFQAFAEAHADQAGACAIAAQAIAAAGgCQAHgDAFgEQAFgFACgGQADgHAAgHQAAgIgDgGQgCgGgFgFQgFgFgHgDQgHgCgHAAQgIAAgHACgA5XC5QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgA7IC4IgLgDQgNgGgFgEIgGgIIgFgJIgEgJIgBgLIABgKIAEgKQACgGAJgKQAFgEANgGIAKgDIALgBQAJAAAIACQAIACAGAFQAHAEAFAGQAGAHADAIIgTAAIgGgIIgIgGQgEgCgFgBQgFgCgFAAQgIAAgGADQgHADgFAFQgFAEgDAHQgDAGAAAIQAAAHADAGQADAGAFAFQAFAFAHADQAHADAIAAIAJgBIAIgDQAFgDAKgLIAUAAQgFAJgGAGQgGAHgGAEQgGAEgIABQgHACgIAAgA9BC4IgKgDQgMgGgFgFIgHgHIgFgJIgDgJIgBgLIABgKIADgKQADgGAJgKQAFgEAMgGIAKgDIALgBIALABIAKACIAJAFIAIAHIAGAIIAFAKIADALIABANIhZAAQABAGADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIAAAIgDQAHgEAFgGIAVAAQgEAHgFAFIgLAJQgHADgHACQgHACgIAAgA8TB9IgFgLQgEgEgEgDQgFgEgGgBQgFgCgHAAIgMACIgKAFQgEADgDAFQgEAEgBAGIBGAAIAAAAgA+xC5IAAhmIARAAIAAANQAFgGAGgDQAHgDAIgBQAFAAAHADIAAARIgHgCIgFgBQgGABgFACQgEACgEAEQgDAEgCAFQgCAGAAAGIAAA3gA/+C5IAAhmIASAAIAAANQAEgGAGgDQAHgDAIgBQAGAAAGADIAAARIgGgCIgFgBQgGABgFACQgFACgDAEQgEAEgBAFQgCAGAAAGIAAA3gEgjKAC4IgKgDQgNgGgFgEIgHgIIgFgJIgDgJIgBgLIABgKIADgKQADgGAJgKQAFgEAMgGIALgDIALgBQAIAAAIACQAIACAHAFQAHAEAFAGQAFAHAEAIIgTAAIgHgIIgIgGQgEgCgFgBQgEgCgFAAQgIAAgHADQgHADgFAFQgFAEgCAHQgDAGAAAIQAAAHADAGQACAGAFAFQAGAFAGADQAHADAIAAIAJgBIAIgDQAFgDALgLIATAAQgFAJgGAGQgFAHgHAEQgGAEgHABQgHACgIAAgEgl0AC4IgKgDQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgKIADgKQADgGAIgKQAFgEAMgGIAKgDIALgBIALABIAKACIAJAFIAIAHIAHAIIAEAKIADALIABANIhYAAQABAGADAFQADAFAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAHgEAFgGIAWAAQgEAHgFAFIgMAJQgGADgIACQgHACgHAAgEglHAB9IgFgLQgDgEgFgDQgEgEgGgBQgGgCgGAAIgMACIgKAFQgFADgDAFQgDAEgCAGIBGAAIAAAAgEgnBAC5IAAg1QAAgIgCgHQgBgGgEgEQgEgEgFgBQgFgCgHAAQgGAAgFABQgFACgEAEQgDAEgDAGQgCAGAAAIIAAA2IgRAAIAAiSIARAAIAAA3QAGgFAHgDQAIgCAIAAQALAAAIADQAIADAGAGQAGAGADAJQADANAAAIIAAA1gEgoyAC5QgIAAgFgDQgEgDgCgFQgCgFAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADABIAGABQAJgBAEgDIAAAQQgIAGgHAAgEgqsAC5IAAgPIgHAHIgJAFIgJACIgKABIgMgBIgKgDQgNgGgFgEIgHgIIgFgIIgDgKQgBgFAAgGIABgKIADgKQADgGAJgKQAFgEAMgHIAKgDIALgBQALAAAJAEIAJAEIAIAGIAAg6IASAAIAACSgEgrfABnQgHACgFAFQgFAEgCAHQgDAGAAAHQAAAIADAGQACAHAGAEQAFAFAGADQAIADAHAAQAIAAAGgDQAHgDAFgFQAFgFADgGQADgHAAgHQAAgHgDgGQgDgGgFgFQgGgFgGgCQgHgDgIAAQgHAAgHADgEgsrAC5IAAg0QAAgJgCgHQgCgGgEgEQgEgEgFgCQgFgCgGAAQgHAAgFACQgFACgEAEQgDAEgCAFQgCAHAAAIIAAA2IgSAAIAAhlIASAAIAAALQAGgGAHgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAHADAJQADAOAAAIIAAA0gEguiAC5IAAhlIASAAIAABlgEgwAAC5IAAiSIBIAAIAAARIg2AAIAAAvIA0AAIAAARIg0AAIAABBgAl/C4IgLgDIgJgFIgIgGIgHgHIgFgJIgDgKIgBgKIABgKIADgKQADgGAJgKQAEgEANgGIAKgDIALgBQAIAAANADQAHADAKAIQAJAKACAGIADAKIABAKIgBALIgDAKIgEAIIgHAIQgKAIgGACQgOAEgHAAgAmFBnQgGACgEAFQgFAEgDAGQgCAHAAAHQAAAIADAGQACAHAFAEQAFAFAHADQAHACAIAAQAHAAAHgCQAGgDAFgFQAEgEADgGQACgHAAgHQAAgIgCgGQgDgHgFgEQgFgFgHgCQgHgDgHAAQgIAAgHADgAqiC4IgKgDIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgKIADgKQACgGAJgKQAFgEAMgGIAKgDIALgBQAIAAAOADQAGADALAIQAIAKADAGIADAKIABAKIgBALIgDAKIgFAIIgGAIQgKAIgHACQgNAEgIAAgAqnBnQgGACgFAFQgFAEgCAGQgDAHAAAHQAAAIADAGQADAHAFAEQAFAFAGADQAHACAIAAQAIAAAGgCQAGgDAFgFQAFgEACgGQADgHAAgHQAAgIgDgGQgDgHgFgEQgFgFgGgCQgHgDgIAAQgHAAgHADgEghTAC4IgKgDIgKgFIgIgGIgGgHIgFgJIgDgKIgBgKIABgK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ABIAGABQAJgBAEgEIAAAQQgIAHgHAAgAW6ltQgIAAgFgEQgEgDgCgEQgDgFAAgIIAAg9IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA+QABADACABIAHABQAIgBAEgEIAAAQQgHAHgHAAgAVIluIgKgDQgNgGgFgFIgHgHIgFgJIgDgKIgBgKIABgLIADgJQADgGAJgKQAFgFAMgGIALgDIALgBQAIAAAIACQAIADAHAEQAHAFAFAGQAFAGAEAJIgTAAIgHgJIgIgFQgEgDgFgBQgEgBgFAAQgIAAgHADQgHACgFAFQgFAFgCAGQgDAHAAAHQAAAHADAHQACAGAFAFQAGAFAGACQAHADAIAAIAJgBIAIgDQAFgDALgLIATAAQgFAJgGAHQgFAGgHAEQgGAEgHACQgHACgIAAgATQluIgKgDQgNgGgFgFIgGgIIgFgIIgDgKIgBgKIABgLIADgJQADgGAIgKQAFgFAMgGIAKgDIALgBIALABIAKADIAJAFIAIAGIAHAIIAEAKIADALIABANIhYAAQABAGADAGQADAFAFAEQAFAEAGACQAGACAHAAQAIAAAHgDQAHgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgIACQgHACgHAAgAT9mpIgFgLQgDgFgFgDQgEgDgGgCQgGgBgGAAIgMABIgKAFQgFAEgDAEQgDAFgCAGIBGAAIAAAAgARfltIAAhmIASAAIAAAMQAEgGAGgDQAHgDAIAAQAGAAAGACIAAASIgGgDIgFAAQgGAAgFADQgFACgDAEQgEAEgBAFQgCAFAAAGIAAA4gAQyltIAAhmIASAAIAABmgAQGltIAAgQIgHAHIgJAFIgJADIgKABIgMgBIgKgDQgNgGgFgFIgHgHIgFgJIgDgKQgBgFAAgFIABgLIADgJQADgGAJgKQAFgFAMgGIAKgDIALgBQALAAAJADIAJAEIAIAGIAAg6IASAAIAACTgAPTnAQgHADgFAEQgFAFgCAGQgDAGAAAIQAAAHADAHQACAGAGAFQAFAFAGACQAIADAHAAQAIAAAGgDQAHgCAFgFQAFgFADgHQADgGAAgHQAAgHgDgHQgDgGgFgFQgGgEgGgDQgHgCgIAAQgHAAgHACgALbltQgIAAgFgEQgEgDgCgEQgCgFAAgIIAAg9IgTAAIAAgRIATAAIA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AFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAFgFADgHQADgGAAgHQAAgHgDgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgA9AltIAAiTIASAAIAACTgA/iltIAAg2QAAgIgCgGQgCgGgEgEQgEgEgFgCQgFgCgGAAQgGAAgFACQgGACgDADQgEAEgCAGQgCAGAAAIIAAA3IgSAAIAAiTIASAAIAAA4QAFgFAIgDQAHgDAJAAQAKAAAIADQAJADAFAGQAGAGADAJQAEANAAAIIAAA2gEgiEgFtIAAgQIgHAHIgJAFIgJADIgKABIgMgBIgKgDQgNgGgFgFIgHgHIgFgJIgDgKQgBgFAAgFIABgLIADgJQADgGAJgKQAFgFAMgGIAKgDIALgBQALAAAJADIAJAEIAIAGIAAg6IASAAIAACTgEgi3gHAQgHADgFAEQgFAFgCAGQgDAGAAAIQAAAHADAHQACAGAGAFQAFAFAGACQAIADAHAAQAIAAAGgDQAHgCAFgFQAFgFADgHQADgGAAgHQAAgHgDgHQgDgGgFgFQgGgEgGgDQgHgCgIAAQgHAAgHACgEgkDgFtIAAg0QAAgJgCgHQgCgGgEgFQgEgDgFgCQgFgCgGAAQgHAAgFACQgFACgEADQgDAEgCAGQgCAGAAAIIAAA3IgSAAIAAhmIASAAIAAALQAGgFAHgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADAOAAAJIAAA0gEgl3gFtIAAgPIgIAGIgIAFIgKADIgKABQgPgCgHgCQgMgGgFgEIgHgHIgFgJIgDgJIgBgLIABgLIADgKQADgGAIgKIAIgGIAJgFIALgDIALgBIALABIAKADIAIAFQAEACAEAEIAAgOIARAAIAABlgEgmqgHAQgHADgFAEQgFAFgCAHQgDAGAAAHQAAAIACAGQADAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAFgFADgGQADgGAAgIQAAgHgDgHQgDgGgFgFQgFgEgHgDQgGgDgIAAQgHAAgHADgEgpOgFwQgIgCgGgEQgGgFgDgGQgEgGAAgIIAUAAQAAAEACAEIAGAGIAIADIAJABQAJAAAHgEQAEgBACgDQACgDAAgDQgBgEgHgDIglgMIgIgFQgFgDgDgGQgDgFAAgGQAAgGADgFQADgFAFgEQAGgEAHgCQAHgCAJAAQAIAAAIACQAHACAFAEQAGAEACAFQADAGAAAGIgUAAQAAgDgBgDIgFgFQgGgEgHAAQgGAAgEABIgHADQgFAEAAAFQAAAEAEADQAEAFAKADIAZAHQAJACAGAFQADADABADQACAEABAFQAAAGgDAGQgDAGgGAEQgFAEgIACQgJADgJAAQgKAAgIgDgEgq2gFwQgIgCgGgEQgGgFgDgGQgEgGAAgIIAUAAQAAAEACAEIAGAGIAIADIAJABQAJAAAHgEQAEgBACgDQACgDAAgDQgBgEgHgDIglgMIgIgFQgFgDgDgGQgDgFAAgGQAAgGADgFQADgFAFgEQAGgEAHgCQAHgCAJAAQAIAAAIACQAHACAFAEQAGAEACAFQADAGAAAGIgUAAQAAgDgBgDIgFgFQgGgEgHAAQgGAAgEABIgHADQgFAEAAAFQAAAEAEADQAEAFAKADIAZAHQAJACAGAFQADADABADQACAEABAFQAAAGgDAGQgDAGgGAEQgFAEgIACQgJADgJAAQgKAAgIgDgEgsggFuIgKgDQgMgGgFgFIgHgIIgFgIIgDgKIgBgKIABgLIADgJQADgGAJgKQAFgFAMgGIAKgDIALgBIALABIAKADIAJAFIAIAGIAGAIIAFAKIADALIABANIhZAAQABAGADAGQADAFAFAEQAFAEAGACQAGACAHAAQAIAAAIgDQAHgDAFgGIAVAAQgEAGgFAFIgLAJQgHAEgHACQgHACgIAAgEgrygGpIgFgLQgEgFgEgDQgFgDgGgCQgFgBgHAAIgMABIgKAFQgEAEgDAEQgEAFgBAGIBGAAIAAAAgEguQgFtIAAhmIARAAIAAAMQAFgGAGgDQAHgDAIAAQAFAAAHACIAAASIgHgDIgFAAQgGAAgFADQgEACgEAEQgDAEgCAFQgCAFAAAGIAAA4gEgwCgFtIAAiTIAnAAQAOAAAKADIAKADIAHAFIAGAGIAEAIQADAJAAAMQAAAKgDAIQgDAJgGAFQgGAGgKACQgOADgKAAIgXAAIAAA6gEgvwgG4IAWAAIARgBQAGgCAEgDQAEgDACgFQACgFAAgHQAAgKgDgGQgCgGgGgCQgEgDgIgBIgRgBIgRAAgEAvLgFvIgKgCIgKgFIgIgGIgGgIIgFgIIgDgKIgBgLIABgKIADgJQACgHAJgJQAFgFAMgGIAKgDIALgBQAIAAAOAEQAGACALAJQAIAKADAGIADAJIABALIgBAKIgDAKIgFAJIgGAHQgKAIgHADQgNADgIAAgEAvGgHAQgGADgFAEQgFAFgCAGQgDAGAAAHQAAAIADAHQADAGAFAFQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgFACgGQADgGAAgIQAAgHgDgHQgDgGgFgFQgFgEgGgDQgHgCgIAAQgHAAgHACgAMqlvIgKgCIgKgFIgIgGIgGgIIgFgIIgDgKIgBgLIABgKIADgJQACgHAJgJQAFgFAMgGIAKgDIALgBQAIAAAOAEQAGACALAJQAIAKADAGIADAJIABALIgBAKIgDAKIgFAJIgGAHQgKAIgHADQgNADgIAAgAMlnAQgGADgFAEQgFAFgCAGQgDAGAAAHQAAAIADAHQADAGAFAFQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgFACgGQADgGAAgIQAAgHgDgHQgDgGgFgFQgFgEgGgDQgHgCgIAAQgHAAgHACgAh8lvIgKgCIgKgFIgIgGIgGgIIgFgIIgDgKIgBgLIABgKIADgJQACgHAJgJQAFgFAMgGIAKgDIALgBQAIAAAOAEQAGACALAJQAIAKADAGIADAJIABALIgBAKIgDAKIgFAJIgGAHQgKAIgHADQgNADgIAAgAiBnAQgGADgFAEQgFAFgCAGQgDAGAAAHQAAAIADAHQADAGAFAFQAFAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgFACgGQADgGAAgIQAAgHgDgHQgDgGgFgFQgFgEgGgDQgHgCgIAAQgHAAgHACgA+VlvIgLgCIgJgFIgIgGIgHgIIgFgIIgDgKIgBgLIABgKIADgJQADgHAJgJQAEgFANgGIAKgDIALgBQAIAAANAEQAHACAKAJQAJAKACAGIADAJIABALIgBAKIgDAKIgEAJIgHAHQgKAIgGADQgOADgHAAgA+bnAQgGADgEAEQgFAFgDAGQgCAGAAAHQAAAIADAHQACAGAFAFQAFAFAHACQAHADAIAAQAHAAAHgDQAGgCAFgFQAEgFADgGQACgGAAgIQAAgHgCgHQgDgGgFgFQgFgEgHgDQgHgCgHAAQgIAAgHACgAQynqIAAgWIASAAIAAAWg");
	this.shape_4.setTransform(496.7,162.1);

	this.text = new cjs.Text("animation", "20px 'AMCE Basic'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 479;
	this.text.setTransform(509.9,468,1,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Egq9AfQMAAAg+fMBV6AAAMAAAA+fg");
	this.shape_5.setTransform(512,486.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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gFAMgGIAKgDIALgBQAIAAAOADQAHADAKAJQAJAJACAGIADAKIABALIgBAKIgDAKIgFAJIgGAHQgKAIgGADQgOADgIAAgA1GKPQgGADgFAEQgFAFgCAFQgDAHAAAHQAAAIAEAGQACAHAFAEQAFAGAHACQAGADAIAAQAIAAAGgDQAGgCAFgGQAFgEACgGQADgHAAgHQAAgHgDgHQgDgGgFgFQgEgEgHgDQgHgDgIABQgHgBgHADgA7zLgIgKgCIgJgGIgIgFIgHgIIgFgIIgDgKIgBgLIABgKIADgKQACgGAKgJQAEgFANgGIAKgDIAKgBQAJAAANADQAGADALAJQAIAJADAGIADAKIABALIgBAKIgDAKIgFAJIgGAHQgKAIgGADQgOADgIAAgA74KPQgGADgFAEQgEAFgDAFQgCAHgBAHQAAAIADAGQADAHAFAEQAFAGAHACQAHADAHAAQAIAAAHgDQAGgCAFgGQAEgEADgGQACgHAAgHQAAgHgCgHQgDgGgFgFQgGgEgGgDQgHgDgIABQgHgBgHADgEgjoALgIgKgCIgKgGIgIgFIgGgIIgFgIIgDgKIgBgLIABgKIADgKQADgGAIgJQAFgFAMgGIAKgDIALgBQAIAAAOADQAGADALAJQAJAJACAGIADAKIABALIgBAKIgDAKIgFAJIgGAHQgKAIgGADQgOADgHAAgEgjtAKPQgGADgEAEQgGAFgCAFQgDAHAAAHQABAIADAGQACAHAFAEQAFAGAHACQAGADAJAAQAHAAAGgDQAHgCAEgGQAFgEACgGQADgHAAgHQAAgHgDgHQgCgGgGgFQgEgEgHgDQgHgDgIABQgHgBgHADgEgt1AJkIAAgVIASAAIAAAVgAWMHOIAAgXIAUAAIAAAXgAViHOIAAgQIgHAHIgJAFIgJADIgKABIgLgBIgLgEQgNgFgEgFIgHgIIgGgIIgDgKQgBgFAAgGIABgKIADgJQADgHAJgJQAFgFAMgGIALgEIALgBQAKAAAJAEIAJAEIAIAGIAAg6IASAAIAACTgAUvF7QgHACgFAFQgEAFgDAGQgDAGAAAHQAAAIADAHQACAGAGAFQAFAEAGADQAIADAHAAQAIAAAHgDQAGgDAFgEQAFgGADgGQADgGAAgIQAAgHgDgGQgDgGgFgFQgGgFgGgCQgHgCgHgBQgIABgHACgAS5HNIgKgEQgMgGgFgFIgHgHIgEgJIgDgJIgCgLIACgKIADgJQACgHAJgJQAFgFAMgGIAKgDIALgBIALABIAKADIAJAEIAIAHIAGAIIAFAKIADALIABANIhZAAQABAGAEAFQACAFAGAFQAFAEAFACQAGACAHAAQAIAAAIgDQAHgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgIABQgHADgIAAgATnGRIgFgKQgDgFgFgDQgFgEgFgBQgGgBgHgBIgMACIgJAFQgFAEgDAEQgEAFgBAFIBGAAIAAAAgARrHOQgIAAgFgEQgEgDgCgFQgCgEgBgIIAAg9IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAXAAIAAARIgXAAIAAA9QABADACACIAHABQAIgBAFgEIAAAQQgIAHgHAAgAP5HNIgKgEQgOgFgEgFIgHgIIgFgJIgEgJIAAgLIAAgKIAEgJQACgHAKgJQAEgFANgGIALgDIAKgBQAJAAAIACQAIADAGAEQAHAEAGAHQAFAGAEAIIgTAAIgHgIIgIgFQgEgDgFgBQgFgBgFgBQgIAAgGADQgHADgFAFQgFAFgDAGQgCAGAAAIQAAAHACAHQADAFAFAGQAFAEAHADQAHADAIAAIAJgBIAIgDQAFgDALgLIATAAQgFAJgGAHQgGAGgGAEQgGAEgHABQgIADgIAAgAOAHNIgKgEQgMgGgFgFIgGgHIgGgJIgCgJIgBgLIABgKIACgJQADgHAJgJQAFgFAMgGIAKgDIALgBIALABIAKADIAJAEIAIAHIAHAIIAEAKIADALIABANIhYAAQABAGACAFQAEAFAEAFQAFAEAGACQAHACAHAAQAHAAAIgDQAHgDAFgGIAVAAQgEAGgFAFIgLAJQgHAEgHABQgHADgHAAgAOuGRIgFgKQgEgFgEgDQgFgEgFgBQgGgBgGgBIgNACIgKAFQgEAEgDAEQgEAFgBAFIBGAAIAAAAgAMvHOIAAiTIASAAIAACTgAMCHOIAAiTIASAAIAACTgAI3HNIgLgEQgNgFgFgFIgGgIIgGgJIgDgJIgBgLIABgKIADgJQADgHAJgJQAFgFANgGIAKgDIALgBQAIAAAJACQAHADAHAEQAHAEAFAHQAGAGADAIIgTAAIgGgIIgJgFQgEgDgEgBQgFgBgFgBQgIAAgHADQgHADgFAFQgEAFgDAGQgDAGAAAIQAAAHADAHQADAFAEAGQAGAEAGADQAHADAIAAIAKgBIAIgDQAEgDALgLIAUAAQgGAJgFAHQgGAGgHAEQgFAEgIABQgHADgIAAgAGMHNIgKgEQgNgGgEgFIgHgHIgFgJIgDgJIgBgLIABgKIADgJQADgHAJgJQAEgFANgGIAKgDIALgBIAKABIAKADIAJAEIAIAHIAHAIIAEAKIAEALIABANIhZAAQABAGADAFQADAFAFAFQAFAEAGACQAGACAHAAQAIAAAIgDQAGgDAFgGIAWAAQgEAGgFAFIgMAJQgGAEgHABQgIADgHAAgAG6GRIgGgKQgDgFgFgDQgEgEgGgBQgGgBgGgBIgMACIgKAFQgEAEgDAEQgEAFgCAFIBHAAIAAAAgAEIHJIgIgEIgIgGIAAAPIgRAAIAAiTIARAAIAAA7IAIgHIAIgDQAHgDAOgCQAIAAAOAFQAGACALAJQAIAJADAHIADAJIABAKIgBALIgDAJIgFAJIgGAIQgLAIgGACQgOAFgIAAQgOgCgHgDgAEOF7QgGACgFAFQgGAFgCAGQgEAGAAAHQAAAIAEAHQACAFAGAGQAEAEAIADQAGADAHAAQAIAAAHgCQAHgEAFgEQAFgFACgGQADgHABgIQgBgHgDgGQgCgGgFgFQgFgFgHgDQgGgCgIAAQgIAAgHADgACRHOQgIAAgFgEQgEgDgCgFQgCgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAVAAIAAARIgVAAIAAA9QAAADADACIAGABQAJgBADgEIAAAQQgHAHgHAAgAgwHOIAAg0QAAgJgCgIQgCgFgEgFQgDgEgGgCQgFgCgGAAQgHAAgEACQgFACgEAEQgEAEgCAGQgCAGAAAIIAAA3IgSAAIAAhmIASAAIAAALQAGgFAIgDQAHgEAIAAQALAAAHAEQAIACAHAHQAFAGAEAJQACAOAAAJIAAA0gAikHOIAAg0QAAgJgCgIQgCgFgDgFQgEgEgFgCQgFgCgHAAQgGAAgFACQgFACgEAEQgDAEgDAGQgCAGAAAIIAAA3IgSAAIAAhmIASAAIAAALQAHgFAHgDQAHgEAJAAQAKAAAIAEQAIACAGAHQAGAGADAJQADAOAAAJIAAA0gAkXHOIAAgQIgIAHIgIAFIgKADIgKABQgQgCgHgDQgLgFgGgFIgHgHIgEgIIgDgKIgCgKIACgLIADgKQACgGAJgKIAIgHIAJgEIAKgDIALgBIAMABIAKADIAIAEQAEADAEAEIAAgPIARAAIAABmgAlKF6QgHADgFAFQgFAFgCAHQgDAGgBAHQAAAIADAGQADAGAFAFQAFAFAHACQAHACAIABQAHgBAGgCQAHgCAFgFQAFgFACgGQADgGABgIQgBgIgDgGQgCgGgFgFQgFgFgHgDQgGgCgIAAQgIAAgGACgAm9HNIgKgEQgNgFgFgFIgHgIIgEgJIgEgJIgBgLIABgKIAEgJQACgHAJgJQAFgFAMgGIALgDIALgBQAJAAAHACQAJADAGAEQAHAEAFAHQAFAGAEAIIgTAAIgHgIIgIgFQgDgDgGgBQgEgBgFgBQgIAAgGADQgIADgFAFQgFAFgCAGQgDAGAAAIQAAAHADAHQACAFAFAGQAGAEAHADQAGADAIAAIAJgBIAIgDQAGgDAKgLIATAAQgFAJgFAHQgGAGgGAEQgHAEgHABQgHADgIAAgAo9HOQgIAAgGgEQgDgDgCgFQgDgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QAAADADACIAHABQAIgBAEgEIAAAQQgHAHgIAAgAqHHOIAAgQIgIAHIgIAFIgKADIgKABQgPgCgIgDQgLgFgGgFIgGgHIgGgIIgCgKIgBgKIABgLIACgKQADgGAJgKIAIgHIAJgEIAKgDIAMgBIALABIAKADIAIAEQAEADAEAEIAAgPIARAAIAABmgAq7F6QgGADgFAFQgFAFgCAHQgDAGAAAHQAAAIACAGQADAGAFAFQAFAFAHACQAGACAJABQAHgBAGgCQAHgCAFgFQAFgFACgGQAEgGAAgIQAAgIgEgGQgCgGgFgFQgFgFgHgDQgGgCgIAAQgHAAgIACgAsDHOIAAg2QAAgIgBgHQgCgFgEgFQgEgDgFgCQgFgCgGAAQgHAAgEABQgGACgDAEQgEAEgDAGQgBAGAAAIIAAA3IgSAAIAAiTIASAAIAAA4QAFgGAHgCQAIgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADANABAIIAAA2gAt0HOQgIAAgFgEQgEgDgCgFQgCgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACACIAGABQAJgBAEgEIAAAQQgIAHgGAAgAwXHLQgIgCgGgEQgGgFgDgGQgEgHAAgHIAUAAQAAAEACAEIAGAFIAIAEIAJABQAKgBAGgDQAEgBACgDQACgDAAgDQAAgEgIgDIglgNIgIgEQgFgDgDgGQgDgGABgFQAAgGACgGQADgEAFgEQAGgEAIgCQAGgDAJAAQAIAAAIADQAHACAFADQAGAFACAFQAEAGAAAGIgVAAQAAgDgBgDIgEgGQgHgDgHAAQgGgBgEACIgHADQgEADAAAGQgBAEAEADQAEAFALACIAYAIQAJACAGAFQADADACADQACAEAAAEQABAHgDAGQgDAGgGAEQgGAEgIACQgJADgJAAQgJAAgJgDgAxXHOIAAg6QAAgHgBgGQgCgFgEgEQgDgDgEgCQgEgBgGgBQgFABgFABQgEACgDADQgEAEgCAFQgCAGABAHIAAA6IgSAAIAAg7QgBgGgBgGQgCgFgEgEQgCgDgFgCQgFgCgFAAQgFAAgFACQgFACgDAEQgCAEgCAFQgCAFAAAGIAAA7IgSAAIAAhmIASAAIAAAJQAFgFAHgCQAFgDAIAAIAKABIAJAEIAHAEIAHAIIAHgHQAEgEAEgBIAKgDIAKgBQAJAAAIADQAGACAGAGQAFAFADAIQADAIAAAKIAAA8gA0vHNIgKgEQgNgGgFgFIgGgHIgFgJIgDgJIgBgLIABgKIADgJQADgHAIgJQAFgFANgGIAJgDIALgBIAMABIAKADIAJAEIAIAHIAGAIIAFAKIACALIABANIhYAAQABAGADAFQADAFAFAFQAFAEAGACQAGACAHAAQAIAAAHgDQAIgDAEgGIAWAAQgEAGgFAFIgLAJQgHAEgIABQgHADgHAAgA0CGRIgEgKQgEgFgEgDQgFgEgGgBQgGgBgGgBIgMACIgKAFQgFAEgDAEQgDAFgCAFIBGAAIAAAAgA1+HOQgIAAgFgEQgEgDgCgFQgCgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACACIAGABQAJgBAEgEIAAAQQgIAHgGAAgA3KHOIAAhmIASAAIAABmgA5KHOIAAhnIARAAIAAANQAEgGAHgDQAGgDAIgBQAGAAAHADIAAASIgHgDIgFgBQgGABgFADQgFACgDADQgEAFgBAEQgCAGAAAGIAAA4gA7vHOQgIAAgEgEQgFgDgCgFQgCgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA9QABADACACIAGABQAJgBAEgEIAAAQQgIAHgGAAgA9gHNIgKgEQgNgFgFgFIgHgIIgFgJIgEgJIAAgLIAAgKIAEgJQACgHAKgJQAEgFANgGIALgDIALgBQAIAAAIACQAIADAGAEQAHAEAGAHQAFAGAEAIIgTAAIgHgIIgIgFQgEgDgFgBQgFgBgEgBQgJAAgGADQgHADgFAFQgFAFgDAGQgCAGAAAIQAAAHACAHQADAFAFAGQAFAEAHADQAHADAIAAIAJgBIAIgDQAFgDALgLIATAAQgFAJgGAHQgFAGgHAEQgGAEgHABQgIADgIAAgA+vHOIAAgQIgJAHIgIAFIgJADIgLABQgPgCgGgDQgMgFgFgFIgHgHIgGgIIgCgKIgBgKIABgLIACgKQAEgGAIgKIAIgHIAJgEIALgDIALgBIAKABIAKADIAIAEQAFADAEAEIAAgPIARAAIAABmgA/jF6QgGADgFAFQgFAFgDAHQgCAGAAAHQgBAIADAGQADAGAFAFQAFAFAHACQAGACAIABQAIgBAHgCQAGgCAFgFQAFgFADgGQACgGABgIQgBgIgCgGQgDgGgFgFQgFgFgHgDQgHgCgHAAQgHAAgIACgEghPAHOIAAhnIASAAIAAANQAEgGAGgDQAIgDAHgBQAGAAAGADIAAASIgGgDIgFgBQgGABgFADQgEACgEADQgEAFgBAEQgCAGAAAGIAAA4gEgh5AHOQgIAAgFgEQgEgDgCgFQgCgEgBgIIAAg9IgSAAIAAgRIASAAIAAgtIASAAIAAAtIAXAAIAAARIgXAAIAAA9QABADADACIAGABQAIgBAFgEIAAAQQgIAHgHAAgEgjqAHLQgJgCgGgEQgFgFgEgGQgDgHAAgHIATAAQAAAEACAEIAGAFIAIAEIAKABQAJgBAHgDQAEgBABgDQADgDAAgDQgBgEgHgDIglgNIgIgEQgGgDgCgGQgDgGAAgFQAAgGADgGQADgEAFgEQAGgEAHgCQAHgDAIAAQAJAAAIADQAGACAGADQAFAFADAFQADAGAAAGIgUAAQAAgDgCgDIgEgGQgGgDgIAAQgFgBgEACIgIADQgEADAAAGQAAAEAEADQADAFALACIAYAIQAKACAFAFQADADACADQACAEABAEQAAAHgDAGQgDAGgGAEQgFAEgJACQgIADgJAAQgKAAgIgDgEgktAHOIAAhmIASAAIAABmgEglYAHOIAAgQIgIAHIgJAFIgIADIgLABIgLgBIgLgEQgMgFgGgFIgGgIIgGgIIgCgKQgCgFAAgGIACgKIACgJQADgHAJgJQAFgFAMgGIAKgEIAMgBQAKAAAKAEIAJAEIAIAGIAAg6IARAAIAACTgEgmMAF7QgHACgEAFQgFAFgDAGQgDAGAAAHQAAAIADAHQADAGAFAFQAFAEAGADQAIADAIAAQAHAAAGgDQAHgDAFgEQAFgGADgGQADgGAAgIQAAgHgDgGQgDgGgFgFQgGgFgGgCQgHgCgHgBQgIABgHACgEgoJAHOIAAgQIgHAHIgJAFIgJADIgKABIgLgBIgLgEQgNgFgEgFIgIgIIgEgIIgEgKQgBgFAAgGIABgKIAEgJQACgHAJgJQAFgFAMgGIALgEIAKgBQAMAAAIAEIAJAEIAIAGIAAg6IASAAIAACTgEgo8AF7QgGACgGAFQgEAFgDAGQgDAGAAAHQAAAIADAHQACAGAGAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgGADgGQADgGAAgIQAAgHgDgGQgDgGgFgFQgFgFgHgCQgHgCgIgBQgHABgHACgEgqLAHOIAAhmIASAAIAABmgEgtSAHOIgrhmIASAAIAgBOIAihOIASAAIgrBmgEguXAHOIgSgxIg8AAIgTAxIgTAAIA7iTIASAAIA7CTgEguxAGMIgWg5IgXA5IAtAAgAKtHMIgKgDIgJgEIgIgHIgHgHIgFgJIgDgKIgBgKIABgKIADgJQACgHAKgJQAEgFANgGIAKgDIAKgBQAJAAANAEQAGACALAJQAIAJADAHIADAJIABAKIgBALIgDAKIgFAIIgGAIQgKAIgGACQgOAEgIAAgAKoF7QgGACgFAFQgEAEgDAGQgCAHgBAHQAAAIADAHQADAGAFAFQAFAEAHADQAHACAHABQAIgBAHgCQAGgDAFgEQAEgFADgGQACgGAAgIQAAgIgCgGQgDgGgFgFQgGgFgGgCQgHgCgHgBQgIABgHACgAAdHMIgKgDIgKgEIgIgHIgFgHIgEgJIgEgKIgBgKIABgKIAEgJQA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FgFQgFgFgGgDQgIgCgHAAQgHAAgIACgEgsrgBZIAAg0QAAgJgBgHQgCgGgEgEQgEgEgFgCQgFgCgGAAQgHAAgFACQgFACgEAEQgDAEgDAFQgBAHAAAHIAAA3IgSAAIAAhlIASAAIAAAKQAFgFAIgDQAHgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADAOAAAJIAAA0gEguhgBZIAAhlIASAAIAABlgEgv/gBZIAAiSIBIAAIAAARIg2AAIAAAuIA0AAIAAASIg0AAIAABBgAl/hbIgKgCIgJgFIgJgGIgGgHIgFgJIgDgKIgBgKIABgLIADgJQACgHAJgJQAFgEANgHIAJgDIALAAQAJAAANADQAHACAKAJQAJAKACAGIADAJIABALIgBALIgDAKIgFAIIgGAIQgKAHgGADQgOAEgIgBgAmEisQgGADgFAFQgFAEgCAGQgCAGgBAIQAAAHAEAHQACAHAFAEQAFAFAHACQAHADAHAAQAIAAAHgDQAFgCAFgFQAFgEADgHQACgGAAgHQAAgIgCgHQgEgGgEgEQgFgFgHgDQgHgCgIAAQgHAAgHACgAqhhbIgKgCIgKgFIgIgGIgGgHIgGgJIgDgKIgBgKIABgLIADgJQADgHAJgJQAFgEAMgHIAKgDIALAAQAIAAANADQAHACAKAJQAJAKACAGIAEAJIABALIgBALIgEAKIgEAIIgHAIQgKAHgGADQgOAEgHgBgAqnisQgFADgFAFQgFAEgDAGQgCAGAAAIQAAAHADAHQADAHAEAEQAFAFAHACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQACgGABgHQgBgIgCgHQgDgGgFgEQgFgFgHgDQgGgCgIAAQgHAAgIACgEghSgBbIgKgCIgKgFIgIgGIgHgHIgEgJIgEgKIgBgKIABgLIAEgJQACgHAJgJQAFgEAMgHIAKgDIALAAQAIAAANADQAHACAKAJQAJAKADAGIADAJIAAALIAAALIgDAKIgFAIIgHAIQgJAHgHADQgOAEgHgBgEghYgCsQgFADgFAFQgFAEgDAGQgCAGAAAIQAAAHADAHQADAHAEAEQAGAFAGACQAHADAIAAQAIAAAGgDQAGgCAFgFQAFgEACgHQACgGAAgHQAAgIgCgHQgDgGgFgEQgFgFgGgDQgIgCgHAAQgHAAgIACgAH9jWIAA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FgCAFIBGAAIAAAAgEAo9gKBQgIgBgFgDQgEgDgCgEQgCgGAAgIIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAVAAIAAARIgVAAIAAA9QAAAEACABIAHABQAJgCADgDIAAAQQgHAGgHABgEAnLgKCIgKgEQgNgGgFgEIgGgIIgGgJIgDgJIgBgLIABgKIADgKQADgFAJgLQAFgEAMgGIALgDIALgBQAJAAAHACQAIADAHAEQAHAEAFAHQAFAGAEAIIgTAAIgGgIIgIgFQgFgDgEgBQgFgCgFAAQgIAAgHAEQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAHADAHQACAGAGAEQAFAFAGADQAHADAJAAIAJgBIAIgDQAEgDALgLIATAAQgEAJgHAHQgFAGgGAEQgHAEgHACQgHACgIAAgEAl8gKBIAAgQIgIAHIgIAFIgJADIgLABQgPgCgHgDQgMgFgFgFIgHgGIgFgJIgDgJIgBgLIABgLIADgKQADgGAIgKIAIgGIAJgFIALgDIALgBIALABIAKADIAIAFQAFACADAEIAAgOIASAAIAABlgEAlJgLUQgGADgFAEQgGAFgCAHQgDAGAAAHQAAAHADAHQACAGAGAFQAEAEAHADQAHADAIgBQAIABAGgDQAGgDAFgEQAGgFACgGQADgHAAgHQAAgHgDgHQgCgGgGgFQgEgEgIgDQgGgDgHAAQgIAAgHADgEAjdgKBIAAhmIASAAIAAAMQAEgGAGgDQAHgDAIAAQAGAAAGACIAAASIgHgDIgEgBQgHABgEADQgFABgDAEQgEAFgCAEQgBAGAAAGIAAA4gEAiygKBIAAgQIgIAHIgIAFIgKADIgKABQgPgCgHgDQgMgFgFgFIgHgGIgFgJIgDgJIgBgLIABgLIADgKQADgGAJgKIAIgGIAJgFIAKgDIALgBIALABIAKADIAIAFQAEACAEAEIAAgOIARAAIAABlgEAh/gLUQgHADgFAEQgEAFgDAHQgDAGAAAHQAAAHACAHQAEAGAEAFQAGAEAHADQAGADAIgBQAIABAGgDQAHgDAEgEQAFgFADgGQADgHAAgHQAAgHgDgHQgDgGgFgFQgEgEgHgDQgHgDgIAAQgHAAgHADgEAg3gKBIAAg2QAAgIgCgHQgBgFgEgFQgFgEgEgBQgGgCgGAAQgGAAgFACQgGABgDAEQg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DAJQADANAAAIIAAA2gEgiDgKBIAAgQIgHAHIgJAFIgJADIgKABIgMgBIgLgEQgMgGgFgEIgHgIIgFgIIgDgKQgCgFAAgGIACgKIADgKQACgFAJgLQAFgEANgGIAKgDIALgBQALAAAJADIAJAEIAIAGIAAg6IARAAIAACTgEgi2gLUQgHACgFAFQgFAFgCAGQgEAGAAAHQAAAIAEAHQACAGAGAEQAFAFAGADQAHADAIAAQAIAAAGgDQAGgDAFgFQAGgEACgHQADgGABgIQgBgGgDgHQgCgGgGgFQgFgFgHgCQgHgDgHAAQgIAAgGADgEgkDgKBIAAg1QAAgJgCgHQgCgFgDgFQgEgEgFgBQgFgDgHAAQgGAAgFADQgFABgEAEQgEAEgCAFQgCAHAAAIIAAA3IgSAAIAAhmIASAAIAAALQAHgFAHgDQAHgDAJAAQAKAAAIADQAIACAGAHQAGAGADAJQADAOAAAIIAAA1gEgl3gKBIAAgQIgHAHIgIAFIgKADIgLABQgOgCgHgDQgNgFgFgFIgHgGIgEgJIgEgJIgBgLIABgLIAEgKQACgGAJgKIAIgGIAJgFIAKgDIALgBIAMABIAKADIAIAFQAEACADAEIAAgOIASAAIAABlgEgmpgLUQgHADgFAEQgFAFgCAHQgEAGAAAHQAAAHADAHQADAGAFAFQAFAEAHADQAHADAHgBQAIABAGgDQAHgDAFgEQAFgFACgGQADgHAAgHQAAgHgDgHQgCgGgFgFQgFgEgHgDQgHgDgHAAQgIAAgGADgEgpNgKEQgJgCgGgEQgFgFgDgGQgEgGAAgJIAUAAQAAAFABADIAHAHIAIACIAJABQAJAAAHgDQADgCACgCQACgDAAgDQAAgEgHgDIgmgNIgIgEQgEgDgEgGQgCgFAAgGQAAgGADgGQACgFAGgDQAGgEAHgCQAHgCAJAAQAIAAAHACQAIACAFADQAGAFACAFQADAFAAAHIgUAAQAAgEgBgDIgFgEQgGgFgHAAQgGABgFABIgGADQgFADAAAGQAAAEAEADQADAEALADIAZAIQAJACAGAFQACADACADQACADAAAFQABAHgDAGQgDAGgGAEQgGAEgHACQgJACgJABQgKgBgIgCgEgq2gKEQgIgCgGgEQgFgFgEgGQgDgGAAgJIATAAQAAAFACADIAGAHIAIACIAKABQAJAAAHgDQAEgCABgCQADgDAAgDQgBgEgHgDIglgNIgIgEQgGgDgCgGQgDgFAAgGQAAgGADgGQADgFAFgDQAGgEAHgCQAHgCAIAAQAJAAAIACQAGACAGADQAFAFADAFQADAFAAAHIgUAAQAAgEgBgDIgFgEQgGgFgIAAQgFABgEABIgIADQgEADAAAGQAAAEADADQAEAEALADIAYAIQAKACAFAFQADADACADQACADABAFQAAAHgDAGQgDAGgGAEQgFAEgIACQgJACgJABQgKgBgJgCgEgsfgKCIgKgEQgMgFgGgGIgGgHIgFgJIgDgJIgBgLIABgKIADgKQADgFAIgLQAGgEALgGIAKgDIALgBIAMABIAKADIAJAFIAIAGIAGAIIAFAKIACALIABANIhYAAQABAGADAFQADAGAFADQAFAFAGACQAGACAHAAQAIAAAHgDQAHgEAGgFIAVAAQgEAGgFAFIgLAJQgHAEgIACQgGACgIAAgEgrygK+IgEgLQgEgEgEgDQgFgEgGgBQgGgCgGAAIgMACIgKAFQgFADgDAFQgDAFgBAFIBFAAIAAAAgEguPgKBIAAhmIARAAIAAAMQAFgGAGgDQAGgDAJAAQAFAAAHACIAAASIgHgDIgFgBQgGABgFADQgEABgEAEQgDAFgCAEQgCAGAAAGIAAA4gEgwBgKBIAAiTIAnAAQAOAAAKADIAJADIAIAFIAGAGIADAIQADAJAAAMQAAAKgDAIQgCAJgGAEQgGAGgKADQgOADgKAAIgYAAIAAA6gEgvwgLMIAXAAIAQgCQAHgBAEgDQAEgEACgFQABgEAAgHQAAgLgCgFQgDgGgFgDQgFgCgHgBIgSgBIgRAAgEAvMgKDIgLgDIgJgEIgIgHIgGgHIgGgJIgCgKIgBgKIABgKIACgKQADgGAJgKQAEgEANgGIAKgDIALgBQAIAAAOAEQAGACALAIQAIALADAFIACAKIABAKIgBALIgCAKIgFAIIgGAIQgKAIgHACQgNAEgIAAgEAvHgLUQgHACgEAFQgFAEgCAHQgDAGAAAHQAAAIADAHQADAGAFAEQAFAFAGADQAHADAIgBQAIABAGgDQAGgDAFgFQAEgEADgGQACgHAAgHQAAgHgCgHQgDgGgFgFQgFgFgHgCQgHgDgHAAQgIAAgGADgAMrqDIgKgDIgKgEIgIgHIgHgHIgEgJIgEgKIgBgKIABgKIAEgKQACgGAJgKQAFgEAMgGIAKgDIALgBQAIAAANAEQAHACAKAIQAJALADAFIADAKIABAKIgBALIgDAKIgFAIIgHAIQgJAIgHACQgOAEgHAAgAMlrUQgFACgFAFQgFAEgDAHQgCAGAAAHQAAAIADAHQADAGAEAEQAFAFAHADQAHADAIgBQAHABAHgDQAGgDAFgFQAFgEACgGQACgHABgHQgBgHgCgHQgDgGgFgFQgFgFgGgCQgIgDgHAAQgHAAgIADgAh7qDIgKgDIgKgEIgIgHIgHgHIgEgJIgEgKIgBgKIABgKIAEgKQACgGAJgKQAFgEAMgGIAKgDIALgBQAIAAANAEQAHACAKAIQAJALADAFIADAKIAAAKIAAALIgDAKIgFAIIgHAIQgJAIgHACQgOAEgHAAgAiBrUQgFACgFAFQgFAEgDAHQgCAGAAAHQAAAIADAHQADAGAEAEQAGAFAGADQAHADAIgBQAHABAHgDQAGgDAFgFQAFgEACgGQACgHABgHQgBgHgCgHQgDgGgFgFQgFgFgGgCQgIgDgHAAQgHAAgIADgA+VqDIgKgDIgJgEIgIgHIgHgHIgFgJIgDgKIgBgKIABgKIADgKQACgGAKgKQAEgEANgGIAKgDIAKgBQAJAAANAEQAGACALAIQAJALACAFIADAKIABAKIgBALIgDAKIgFAIIgGAIQgKAIgGACQgOAEgIAAgA+arUQgGACgFAFQgEAEgDAHQgCAGgBAHQAAAIADAHQADAGAFAEQAFAFAHADQAHADAHgBQAIABAHgDQAGgDAEgFQAFgEADgGQACgHAAgHQAAgHgCgHQgDgGgFgFQgFgFgHgCQgHgDgIAAQgHAAgHADgAQyr/IAAgVIASAAIAAAVg");
	this.shape_6.setTransform(497.5,183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance,p:{startPosition:1}},{t:this.shape}]}).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance,p:{startPosition:0}},{t:this.shape_1}]},1).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}},{t:this.shape_2}]},2).to({state:[{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}},{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.text},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(4));

	// Video
	this.cbVideoHelp = new lib.mcHelpPlaceHolder();
	this.cbVideoHelp.setTransform(512,490,1,1,0,0,0,280,210);
	this.cbVideoHelp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cbVideoHelp).wait(6).to({_off:false},0).wait(5));

	// Panel
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#806503").s().p("ADtBVQgQgJgJgOQgJgOAAgSQAAgTAJgMQAIgPAQgIQAPgJATABQASgBAPAJQAPAIAJAPQAIANABATIgBAGIgBAHIheAAQAEAIAIAGQAHAEAMAAIAJAAIAGgBIALgEIAkAAQgFAPgKAHQgKAIgLADQgNADgMAAQgUAAgPgIgAEvAUQgDgNgIgGQgIgEgNAAQgMAAgIAEQgIAGgEANIBAAAIAAAAgACQBdIAAi5IAiAAIAAC5gABRBdIAAgPQgIAIgJADQgJAEgMAAQgTAAgOgIQgMgJgJgOQgIgOAAgSQAAgTAIgNQAJgOAMgIQAPgJASABQAMAAAKADQAIADAIAHIAAgLIAgAAIAAB7gAAXAFQgJAKAAAPQAAAPAJAIQAJAJAPAAQAKAAAIgEQAHgFAEgGQAEgIAAgJQAAgJgFgIQgDgIgIgFQgHgCgKAAQgPAAgJAHgAhMBdIAAg9QgBgPgCgJQgCgHgFgBQgEgBgHgBQgGABgFABQgFACgDAEQgCAEgCAGIAAASIAAA7IgjAAIAAh9IAgAAIAAAKQAHgFAIgDQAHgDAKAAQANAAALAFQAKAEAGAKQADAFACAFIAEALQAAAJAAAKIAABDgAjbBdIAAh9IAjAAIAAB9gAlPBdIAAi5IBYAAIAAAmIg1AAIAAAlIAzAAIAAAkIgzAAIAABKgAjbg6IAAgiIAjAAIAAAig");
	this.shape_7.setTransform(223.3,241.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-2.5,107.7,721,107.7).ss(5,0,1).p("AAAgFIAAAFIAAAH");
	this.shape_8.setTransform(162,264.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,138.2,371,138.2).ss(5,0,1).p("EA2sADZIAAhpQAAikh2h1Qh1h1ilAAMhg3AAAQilAAh2B1Qh1B1AACkIAADI");
	this.shape_9.setTransform(512,232.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC907").s().p("Eg1bAEsIhQgFIAAgGIAAjIQAAikB1h1QB2h1ClAAMBg2AAAQCmAAB1B1QB2B1AACkIAABpQo0gakMgJQrTgXqNAFQo4AFpmAaQmdASpzAlQrTArjfALQn8AZmFADIiNABQkfAAjagKg");
	this.shape_10.setTransform(512,235.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,17,371,17).ss(5,1,1).rr(-350,-150,700,300,40);
	this.shape_11.setTransform(512,354);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#806503").s().p("AB3B+IAAi/IAgAAIAAANQAHgGAKgEQAJgDALgBQATABAOAIQAOAIAIAQQAIAOAAATQAAARgIAPQgIAPgOAJQgPAIgSAAQgKAAgJgDQgIgCgIgFIAABIgACngdQgHAEgEAIQgFAIAAAJQAAAIAFAIQAEAIAIAFQAHAEAKAAQAJAAAHgEQAHgFAEgIQAFgHAAgJQAAgJgFgIQgEgIgHgEQgHgFgKABQgJgBgIAFgAA1A8IAAi4IAjAAIAAC4gAhFA0QgQgJgJgNQgJgPAAgQQAAgSAJgOQAJgPAPgJQAPgIATAAQATAAAPAIQAMAJAJAPQAIAPABASIgBAEIgBAIIhbAAQADAIAIAFQAIAEALABIAJAAIAGgBIALgFIAiAAQgFAPgJAIQgKAIgKACQgNADgMAAQgUABgPgJgAgCgLQgEgMgIgHQgIgFgNgBQgMABgIAFQgIAHgEAMIBBAAIAAAAgAimA8IAAhJIgtAAIAABJIgnAAIAAi4IAnAAIAABJIAtAAIAAhJIAnAAIAAC4g");
	this.shape_12.setTransform(214.6,74.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,138.2,371,138.2).ss(5,0,1).p("EA2sADZIAAhpQAAijh2h2Qh1h1ilAAMhg3AAAQilAAh2B1Qh1B2AACjIAADI");
	this.shape_13.setTransform(512,62.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC907").s().p("Eg1bAEsIhQgFIAAgGIAAjIQAAikB1h1QB2h1ClAAMBg2AAAQCmAAB1B1QB2B1AACkIAABpQo0gakMgJQrTgXqNAFQo4AFpmAaQmdASpzAlQrTArjfALQn8AZmFADIiOABQkeAAjagKg");
	this.shape_14.setTransform(512,65.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFCC").ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,-183,371,-183).ss(5,1,1).rr(-350,-350,700,700,40);
	this.shape_15.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{y:264.7}},{t:this.shape_7}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_8,p:{y:94.7}},{t:this.shape_12}]},6).wait(5));

	// BG
	this.instance_3 = new lib.Bg_Translucent("synched",0);
	this.instance_3.setTransform(512,384,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.mcLife = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol14a("synched",0);
	this.instance.setTransform(118.4,22.1,1,1,0,0,0,15.2,12);

	this.instance_1 = new lib.Symbol14a("synched",0);
	this.instance_1.setTransform(73.9,22.1,1,1,0,0,0,15.2,12);

	this.instance_2 = new lib.Symbol14a("synched",0);
	this.instance_2.setTransform(29.4,22.1,1,1,0,0,0,15.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:73.9}},{t:this.instance,p:{x:118.4}}]}).to({state:[{t:this.instance_1,p:{x:29.4}},{t:this.instance,p:{x:73.9}}]},1).to({state:[{t:this.instance,p:{x:29.4}}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80BEE8").s().p("AAAB3IAAAAIgDAAQgbgGgzgfQgygegQgyQgFgWACgUQADgVAMgSQAPgWASgJQARgIAcAAQAMAAASAJQAQAKALALIAAAAIAJgIIATgNQASgJALAAQAcAAARAIQATAJAOAWQANASACAVQADAUgGAWQgPAygzAeQgzAfgaAGIgEAAg");
	this.shape.setTransform(120.4,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80BEE8").s().p("AAAB3IAAAAIgDAAQgbgGgzgfQgJgFgIgHQgkgbgNgpQgFgWACgUQADgVAMgSQAPgWASgJIAEgBQAQgHAZAAQAMAAASAJQAQAKALALIAAAAIAJgIIATgNQASgJALAAQAcAAARAIQATAJAOAWQANASACAVQADAUgGAWQgPAygzAeQgzAfgaAGIgEAAg");
	this.shape_1.setTransform(75.9,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80BEE8").s().p("AAAB3IAAAAIgDAAQgbgGgzgfQgygegQgyQgFgWACgUQADgVAMgSQAPgWASgJQARgIAcAAQAMAAASAJQAQAKALALIAAAAIAJgIIATgNQASgJALAAQAcAAARAIQATAJAOAWQANASACAVQADAUgGAWQgPAygzAeQgzAfgaAGIgEAAg");
	this.shape_2.setTransform(31.4,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0164A8").s().p("AoBDVQhZAAg+g/Qg/g/AAhXQAAhXA/g/QA+g+BZAAIQDAAQA4AAAtAZIAAgBIANAIQATANASARQA/A/AABXQAABXg/A/IglAeIgNAIQgtAZg4AAg");
	this.shape_3.setTransform(-35.2,21.3,1,1,0,0,0,-108.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.7,42.7);


(lib.mcCorrect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("tadawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(26));

	// Layer 11
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-1,0.5,0.359,0.359,-37.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0},4).to({startPosition:0},4).to({scaleX:1.34,scaleY:1.34,rotation:110.8,x:3.7,y:-3.1,alpha:0.199},15).to({_off:true},1).wait(4));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0.322)","rgba(255,255,0,0.663)","rgba(255,255,0,0)"],[0.082,0.29,1],0,0,0,0,0,48.8).s().p("AlVFVQiOiNAAjIQAAi9B/iJIAPgPQCOiODHAAQDIAACOCOQCOCNAADIQAADIiOCNIgFAFQiMCJjFABQjHAAiOiPg");
	this.shape.setTransform(2.5,3.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},15).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hsDirection_Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico
	this.instance = new lib.ico_direction();
	this.instance.setTransform(-3.7,-18.5,1,1,0,0,0,15.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.4,scaleX:1.05,scaleY:1.05,x:-0.3,y:-16.8},0).wait(1).to({regX:15.3,scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:1,scaleY:1,x:-3.3},0).wait(1));

	// guide
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjvDwIAAneIHfAAIAAHeg");
	this.shape.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-48,48,48);


(lib.hsDirection_Right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico
	this.instance = new lib.ico_direction();
	this.instance.setTransform(-3.7,-18.5,1,1,0,0,0,15.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.4,scaleX:1.05,scaleY:1.05,x:-0.3,y:-16.8},0).wait(1).to({regX:15.3,scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:1,scaleY:1,x:-3.3},0).wait(1));

	// guide
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjvDwIAAneIHfAAIAAHeg");
	this.shape.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-48,48,48);


(lib.hsDirection_Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico
	this.instance = new lib.ico_direction();
	this.instance.setTransform(-3.7,-18.5,1,1,0,0,0,15.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.4,scaleX:1.05,scaleY:1.05,x:-0.3,y:-16.8},0).wait(1).to({regX:15.3,scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:1,scaleY:1,x:-3.3},0).wait(1));

	// guide
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjvDwIAAneIHfAAIAAHeg");
	this.shape.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-48,48,48);


(lib.hsDirection_Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico
	this.instance = new lib.ico_direction();
	this.instance.setTransform(-3.7,-18.5,1,1,0,0,0,15.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.4,scaleX:1.05,scaleY:1.05,x:-0.3,y:-16.8},0).wait(1).to({regX:15.3,scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:1,scaleY:1,x:-3.3},0).wait(1));

	// guide
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjvDwIAAneIHfAAIAAHeg");
	this.shape.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-48,48,48);


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
	this.shape_14.graphics.f("#666666").s().p("AggAgIACgCIAEAHIAAABIgGgGgAgtgCQAAgGACgMIAEgJQACgGACgCIgCAIIgCAKQgEAMAAAEQAAAQANARIgCACQgNgPAAgTgAAHACIAAgCIAAgCIgCghIABAGQACAOABANIAAABIgBAJIgBABgAAsAAIAAgFIAAgYIAAAAIACAVIAAABIgCAKIgBAEIABgHg");
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
	this.shape_27.graphics.rf(["#FFFFFF","#FEB381"],[0,1],12.1,-10,0,12.1,-10,25.4).s().p("AAAAEIAAgDIAAgBIAAAFIAAgBgAAAAAIAAgCIAAgCIAAAEIAAAAg");
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


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.red();
	this.instance.setTransform(17.5,-9.3,0.637,0.637,0,0,180);
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_1 = new lib.red();
	this.instance_1.setTransform(-3.7,15,0.864,0.864,0,0,180);
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-17.5,-23.1,0.637,0.637,0,0,180);
	this.instance_2.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.3,-47.9,88,98.9);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.red();
	this.instance.setTransform(17.5,-9.3,0.637,0.637,0,0,180);
	this.instance.shadow = new cjs.Shadow("#330066",0,0,4);

	this.instance_1 = new lib.red();
	this.instance_1.setTransform(-3.7,15,0.864,0.864,0,0,180);
	this.instance_1.shadow = new cjs.Shadow("#330066",0,0,4);

	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-17.5,-23.1,0.637,0.637,0,0,180);
	this.instance_2.shadow = new cjs.Shadow("#330066",0,0,4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.3,-47.9,88,98.9);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.red();
	this.instance.setTransform(-27.2,17.2,0.637,0.637);
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_1 = new lib.red();
	this.instance_1.setTransform(19.1,-9,0.864,0.864);
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-22.1,-12.8,0.637,0.637);
	this.instance_2.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-42,107.2,87.3);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.red();
	this.instance.setTransform(-23,17.2,0.637,0.637);
	this.instance.shadow = new cjs.Shadow("#330066",0,0,4);

	this.instance_1 = new lib.red();
	this.instance_1.setTransform(19.1,-9,0.864,0.864);
	this.instance_1.shadow = new cjs.Shadow("#330066",0,0,4);

	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-4.1,-17.1,0.637,0.637);
	this.instance_2.shadow = new cjs.Shadow("#330066",0,0,4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.9,-42,103.1,87.3);


(lib.Symbol_red = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0.824,0.925],0.3,-4.5,0,0.3,-4.5,39.6).s().p("Aj0D1QhlhmAAiPQAAiOBlhmQBmhlCOAAQCPAABlBlQBmBmAACOQAACPhmBmQhlBliPAAQiOAAhmhlg");
	this.shape.setTransform(39.6,31.3,1,1,0,0,0,-0.3,-9.2);

	// Layer 1
	this.instance = new lib.Symbol5b();
	this.instance.setTransform(39.7,39.7,0.3,0.3,0,0,0,132.2,132.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


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


(lib.mc_galup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl_head("single",1);
	this.instance.setTransform(0,-15.3,1,1,0,0,0,0,-15.5);

	this.instance_1 = new lib.Girl_body("single",3);
	this.instance_1.setTransform(1.6,10);

	this.instance_2 = new lib.Girl_hand("single",0);
	this.instance_2.setTransform(-2.7,0.2,1,0.871,0,22.9,24.7);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(3.2,0.5,1,0.871,0,22.5,-159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{skewX:22.5,skewY:-159.5,x:3.2,y:0.5}},{t:this.instance_2,p:{skewX:22.9,skewY:24.7,x:-2.7,y:0.2}},{t:this.instance_1,p:{startPosition:3}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{startPosition:4}},{t:this.instance_3,p:{skewX:-22.5,skewY:155.5,x:3,y:0.2}},{t:this.instance_2,p:{skewX:-22.1,skewY:-20.3,x:-3.1,y:0.5}},{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{startPosition:3}},{t:this.instance_3,p:{skewX:22.5,skewY:-159.5,x:3.2,y:0.5}},{t:this.instance_2,p:{skewX:22.9,skewY:24.7,x:-2.7,y:0.2}},{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{startPosition:4}},{t:this.instance_3,p:{skewX:-22.5,skewY:155.5,x:3,y:0.2}},{t:this.instance_2,p:{skewX:-22.1,skewY:-20.3,x:-3.1,y:0.5}},{t:this.instance}]},2).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.533)").s().p("AhoANQgsgGAAgHQAAgGAsgGQArgFA9AAQA9AAAsAFQArAGAAAGQAAAHgrAGQgsAFg9AAQg9AAgrgFg");
	this.shape.setTransform(-0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-33.8,35.4,55);


(lib.mc_galright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl_head("single",2);
	this.instance.setTransform(0.2,0.1);

	this.instance_1 = new lib.Girl_hand("single",0);
	this.instance_1.setTransform(-1.1,1.3,0.998,0.94,0,-53.1,-54.1);

	this.instance_2 = new lib.Girl_body("single",5);
	this.instance_2.setTransform(1.1,10.2);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(1.9,1.6,0.996,0.938,0,-95,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{startPosition:5}},{t:this.instance_1,p:{scaleX:0.998,scaleY:0.94,skewX:-53.1,skewY:-54.1,x:-1.1,y:1.3}},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_1,p:{scaleX:0.997,scaleY:0.939,skewX:20.3,skewY:19.3,x:-2,y:1}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{startPosition:5}},{t:this.instance_1,p:{scaleX:0.998,scaleY:0.94,skewX:-53.1,skewY:-54.1,x:-1.1,y:1.3}},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_1,p:{scaleX:0.997,scaleY:0.939,skewX:20.3,skewY:19.3,x:-2,y:1}},{t:this.instance}]},2).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.533)").s().p("AhoANQgsgGAAgHQAAgGAsgGQArgFA9AAQA9AAAsAFQArAGAAAGQAAAHgrAGQgsAFg9AAQg9AAgrgFg");
	this.shape.setTransform(-0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-32,32.1,53.2);


(lib.mc_galleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.girl_head("single",2);
	this.instance.setTransform(0.2,0.1);

	this.instance_1 = new lib.Girl_hand("single",0);
	this.instance_1.setTransform(-1.1,1.3,0.998,0.94,0,-53.1,-54.1);

	this.instance_2 = new lib.Girl_body("single",5);
	this.instance_2.setTransform(1.1,10.2);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(1.9,1.6,0.996,0.938,0,-95,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{startPosition:5}},{t:this.instance_1,p:{scaleX:0.998,scaleY:0.94,skewX:-53.1,skewY:-54.1,x:-1.1,y:1.3}},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_1,p:{scaleX:0.997,scaleY:0.939,skewX:20.3,skewY:19.3,x:-2,y:1}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{startPosition:5}},{t:this.instance_1,p:{scaleX:0.998,scaleY:0.94,skewX:-53.1,skewY:-54.1,x:-1.1,y:1.3}},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_1,p:{scaleX:0.997,scaleY:0.939,skewX:20.3,skewY:19.3,x:-2,y:1}},{t:this.instance}]},2).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.533)").s().p("AhoANQgsgGAAgHQAAgGAsgGQArgFA9AAQA9AAAsAFQArAGAAAGQAAAHgrAGQgsAFg9AAQg9AAgrgFg");
	this.shape.setTransform(-0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-32,32.1,53.2);


(lib.mc_galidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.girl_head("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:-4.6,y:0.2},5).to({rotation:-8.5},4).to({scaleX:1,scaleY:1,rotation:0,y:0.1},7).wait(10));

	// body
	this.instance_1 = new lib.Girl_body("single",0);
	this.instance_1.setTransform(2.6,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// lhand
	this.instance_2 = new lib.Girl_hand("single",0);
	this.instance_2.setTransform(-2.7,0.1,0.999,1,0,-7,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({startPosition:0},0).to({skewX:23,skewY:24.7},4).to({skewX:-7,skewY:-5.3},4).to({skewX:23,skewY:24.7},5).to({skewX:-7,skewY:-5.3},5).wait(7));

	// rhand
	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(3.2,-0.1,0.999,1,0,7.5,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-17.6,skewY:-199.6},4).to({scaleX:1,scaleY:1,skewX:7.5,skewY:-174.5},4).to({skewX:-22.5,skewY:-204.5},5).to({skewX:7.5,skewY:-174.5},5).wait(7));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.533)").s().p("AhoANQgsgGAAgHQAAgGAsgGQArgFA9AAQA9AAAsAFQArAGAAAGQAAAHgrAGQgsAFg9AAQg9AAgrgFg");
	this.shape.setTransform(-0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-34,34.5,55.1);


(lib.mc_galhurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("boyHurt");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(14));

	// heart
	this.instance = new lib.g_heart("synched",0);
	this.instance.setTransform(6.3,-35.6,0.462,0.462);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-41.6,alpha:1},6).to({startPosition:0},2).to({y:-47.6,alpha:0},6).wait(1));

	// Layer 1
	this.instance_1 = new lib.girl_head("single",3);
	this.instance_1.setTransform(0.4,-0.6);

	this.instance_2 = new lib.Girl_hand("single",0);
	this.instance_2.setTransform(-3,-0.2,0.998,0.998,0,44.6,46.3);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(3.8,-0.1,0.998,0.998,0,-32.8,145.2);

	this.instance_4 = new lib.Girl_body("single",7);
	this.instance_4.setTransform(3.1,9.4,1,1,0,0,0,0.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3,p:{scaleX:0.998,scaleY:0.998,x:3.8,y:-0.1}},{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,skewX:44.6,skewY:46.3,x:-3,y:-0.2}},{t:this.instance_1,p:{rotation:0,x:0.4}}]}).to({state:[{t:this.instance_3,p:{scaleX:0.997,scaleY:0.996,x:3.4,y:-0.4}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:0.997,scaleY:0.997,skewX:26,skewY:27.8,x:-2.6,y:-0.3}},{t:this.instance_1,p:{rotation:-7.3,x:0.6}}]},3).to({state:[]},3).to({state:[{t:this.instance_3,p:{scaleX:0.997,scaleY:0.996,x:3.4,y:-0.4}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:0.997,scaleY:0.997,skewX:26,skewY:27.8,x:-2.6,y:-0.3}},{t:this.instance_1,p:{rotation:-7.3,x:0.6}}]},1).to({state:[]},2).to({state:[{t:this.instance_3,p:{scaleX:0.997,scaleY:0.996,x:3.4,y:-0.4}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:0.997,scaleY:0.997,skewX:26,skewY:27.8,x:-2.6,y:-0.3}},{t:this.instance_1,p:{rotation:-7.3,x:0.6}}]},1).wait(5));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.533)").s().p("AhoANQgsgGAAgHQAAgGAsgGQArgFA9AAQA9AAAsAFQArAGAAAGQAAAHgrAGQgsAFg9AAQg9AAgrgFg");
	this.shape.setTransform(-0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-43.8,44.4,64.9);


(lib.mc_galdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl_head("single",0);
	this.instance.setTransform(0,-15.3,1,1,0,0,0,0,-15.5);

	this.instance_1 = new lib.Girl_body("single",1);
	this.instance_1.setTransform(1.6,10);

	this.instance_2 = new lib.Girl_hand("single",0);
	this.instance_2.setTransform(-3.2,0.2,1,0.871,0,22.9,24.7);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(3.5,0,1,0.871,0,22.5,-159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{skewX:22.5,skewY:-159.5}},{t:this.instance_2,p:{skewX:22.9,skewY:24.7}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{startPosition:2}},{t:this.instance_3,p:{skewX:-22.5,skewY:155.5}},{t:this.instance_2,p:{skewX:-22.1,skewY:-20.3}},{t:this.instance}]},2).to({state:[{t:this.instance_3,p:{skewX:22.5,skewY:-159.5}},{t:this.instance_2,p:{skewX:22.9,skewY:24.7}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}},{t:this.instance_3,p:{skewX:-22.5,skewY:155.5}},{t:this.instance_2,p:{skewX:-22.1,skewY:-20.3}},{t:this.instance}]},2).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.533)").s().p("AhoANQgsgGAAgHQAAgGAsgGQArgFA9AAQA9AAAsAFQArAGAAAGQAAAHgrAGQgsAFg9AAQg9AAgrgFg");
	this.shape.setTransform(-0.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-33.8,34.5,54.9);


(lib.mc_spideridle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.head();
	this.instance.setTransform(-1.1,11.9,1,1,0,0,0,15.6,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.7,rotation:-2.3},4).to({regX:15.6,rotation:0},5).to({regX:15.5,rotation:3.3,x:-1.2,y:11.8},5).to({regX:15.6,rotation:0,x:-1.1,y:11.9},5).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],2.7,-1.4,0,2.7,-1.4,13.7).s().p("AAcBbIgCgUIAAgaQgLgGgbgBQgEAVAAAdQgCATgSAAQgRABgGgTQgGgTgGgiIAAgLIAAgHIgBgrQAAgpAOgTQASgYAqABQAqgBARAkQANAZAAAwQAAAxgFAaQgEAagGAEQgEADgFAAIgFABQgMAAgFgSg");
	this.shape.setTransform(-1.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],5.2,-4.9,0,5.2,-4.9,13.7).s().p("AgzBpQgOgCgOgeQgOgdAAg/QAAghAKgdIADgHIARgJQAIgDAKAAQALAAAJgDQAKgDAaAEQAbAEAcAbQAZAZADAkIgCAZIgMAuQgBAEgDAEQgEAQgEAHQgEAJgJAAQgOAAgEgBQgKgDAAgKIAAgkQgBgEgDgHIgEAAIAAgBIAAABQgCgBgKABQgKABgJAEQgFABgBAGIAAANIABAUQAAALgBACQgCAEgIACIgMABIgLAAg");
	this.shape_1.setTransform(-0.8,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer 4
	this.instance_1 = new lib.tailx();
	this.instance_1.setTransform(-0.1,-11.8,1,1,0,0,0,1.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15},4).to({rotation:0},5).to({rotation:-15},5).to({rotation:0},5).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.533)").s().p("AioArQhGgSAAgZQAAgYBGgTQBGgQBigBQBjABBGAQQBGATAAAYQAAAZhGASQhGAShjAAQhiAAhGgSg");
	this.shape_2.setTransform(0.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-19,47.8,43);


(lib.pbYes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACYB0QgQgGgKgNQgJgMgEgWIAxABQAEAKAHAEQAIADAJABQAIAAAFgDQAFgDAAgFQgBgFgEgDIgNgGIgNgDQgcgIgOgLQgOgMAAgSQAAgMAKgMQAJgKAPgHQAQgGASgBQASAAAOAHQAPAEAKANQAJAMABAPIguAAQgDgIgEAAQgFgEgLAAQgHAAgEAEQgGABgBAEQABAEACACIALAGIAVAGQAUAHAMAGQALAFAGAIQAHAHABALQABAQgJAMQgKANgRAHQgRAIgVgBQgUABgQgHgAgmBvQgVgLgMgTQgMgTAAgYQAAgYAMgQQAMgUAUgLQATgKAXAAQAZAAATAKQAUANALASQAKASABAZIgBAHIgCAKIh4AAQAFALAKAGQALAGAMABIAMgBIAIgBIAOgFIAwAAQgHATgMAKQgNALgQADQgQAEgRgBQgXAAgUgKgAAvAaQgFgQgKgIQgKgHgRAAQgOAAgLAGQgKAJgFAPIBSABIAAAAgAi9B5IAAhaIhIiZIAzABIAsBoIAuhoIAyAAIhJCYIgBBag");
	this.shape.setTransform(39.7,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(237,237,237,0.8)").s().p("ACoCAQgSgHgLgOQgKgOgEgYIA1ABQAFAMAHAEQAKAEAKAAQAIAAAGgDQAFgDAAgGQgBgFgFgEIgNgGIgPgDQgfgKgPgLQgPgNAAgUQAAgOAKgNQAKgLARgIQARgHAUAAQAUAAAQAHQAQAFALAOQAJANACAQIgzAAQgDgHgFgCQgFgDgMAAQgHAAgFADQgHACgBAFQABAEADADIAMAFIAXAIQAVAHAOAHQAMAFAGAJQAJAIABAMQABARgLAOQgKAOgTAIQgTAIgXAAQgWAAgRgHgAgqB6QgXgMgNgVQgNgUAAgbQAAgaANgSQANgWAWgMQAVgLAagBQAbABAVALQAWANAMAVQALAUABAbIgBAJIgCALIiEgBQAFAMALAHQAMAGANABIAOgBIAIgBIAQgFIA1AAQgIAVgNALQgOAMgSADQgSAEgTAAQgZAAgWgMgAA0AcQgFgRgLgJQgMgIgTAAQgPAAgMAHQgLAKgGARIBbAAIAAAAgAjQCGIAAhjIhPipIA4ABIAwByIAzhyIA3AAIhQCoIgBBjg");
	this.shape_1.setTransform(39.7,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(7,102,105,0.969)").s().p("ACYB0QgQgGgKgNQgJgMgEgWIAxABQAEAKAHAEQAIADAJABQAIAAAFgDQAFgDAAgFQgBgFgEgDIgNgGIgNgDQgcgIgOgLQgOgMAAgSQAAgMAKgMQAJgKAPgHQAQgGASgBQASAAAOAHQAPAEAKANQAJAMABAPIguAAQgDgIgEAAQgFgEgLAAQgHAAgEAEQgGABgBAEQABAEACACIALAGIAVAGQAUAHAMAGQALAFAGAIQAHAHABALQABAQgJAMQgKANgRAHQgRAIgVgBQgUABgQgHgAgmBvQgVgLgMgTQgMgTAAgYQAAgYAMgQQAMgUAUgLQATgKAXAAQAZAAATAKQAUANALASQAKASABAZIgBAHIgCAKIh4AAQAFALAKAGQALAGAMABIAMgBIAIgBIAOgFIAwAAQgHATgMAKQgNALgQADQgQAEgRgBQgXAAgUgKgAAvAaQgFgQgKgIQgKgHgRAAQgOAAgLAGQgKAJgFAPIBSABIAAAAgAi9B5IAAhaIhIiZIAzABIAsBoIAuhoIAyAAIhJCYIgBBag");
	this.shape_2.setTransform(39.7,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Help
	this.instance = new lib.Symbol("synched",0);
	this.instance.setTransform(39.6,39.6,1,1,0,0,0,39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


(lib.pbNo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiQglIABCfIgwAAIAAjzIAzAAIBTCgIAAigIAuAAIAADzIgyAAgABoB6QgYAAgUgLQgUgLgMgUQgMgSAAgYQAAgXAMgQQALgTAUgMQAVgLAYgBQAYABAVALQAUALAMATQALASAAAXQAAAYgMASQgMATgUALQgTALgXAAIgCAAgABSACQgJAFgFAJQgGAKAAALQAAAOAGAJQAGALAJAFQAKAGALAAQANAAAJgGQAKgGAFgKQAHgJgBgNQABgLgHgKQgGgKgKgGQgKgEgLAAQgMAAgKAFg");
	this.shape.setTransform(39.6,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AifgoIABCuIg0AAIAAkLIA4AAIBbCwIAAiwIAzgBIAAEMIg3AAgABzCGQgbAAgXgMQgVgMgOgWQgNgUAAgaQAAgZANgSQANgWAWgMQAWgNAcAAQAaAAAXANQAWAMAMAVQANAUAAAZQAAAagNAUQgNAVgWAMQgVAMgZAAIgCAAgABaACQgKAGgGAKQgGALAAAMQAAAPAGALQAHALAKAGQAMAGAMAAQAOAAAJgGQALgHAGgKQAHgLgBgOQABgMgHgMQgHgKgLgHQgLgEgMAAQgNAAgLAFg");
	this.shape_1.setTransform(39.6,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(126,56,71,0.969)").s().p("AiQglIABCfIgwAAIAAjzIAzAAIBTCgIAAigIAuAAIAADzIgyAAgABoB6QgYAAgUgLQgUgLgMgUQgMgSAAgYQAAgXAMgQQALgTAUgMQAVgLAYgBQAYABAVALQAUALAMATQALASAAAXQAAAYgMASQgMATgUALQgTALgXAAIgCAAgABSACQgJAFgFAJQgGAKAAALQAAAOAGAJQAGALAJAFQAKAGALAAQANAAAJgGQAKgGAFgKQAHgJgBgNQABgLgHgKQgGgKgKgGQgKgEgLAAQgMAAgKAFg");
	this.shape_2.setTransform(39.6,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Help
	this.instance = new lib.Symbol_red("synched",0);
	this.instance.setTransform(39.6,39.6,1,1,0,0,0,39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


(lib.mcWrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("wrong00",1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29));

	// Layer 9
	this.instance = new lib.Tween19();
	this.instance.setTransform(0.3,-0.3,0.1,0.1);
	this.instance.shadow = new cjs.Shadow("#330066",0,0,5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween20();
	this.instance_1.setTransform(0.3,-0.3,1.403,1.403);
	this.instance_1.shadow = new cjs.Shadow("#330066",0,0,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,scaleX:1.4,scaleY:1.4},2).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},2).wait(2).to({scaleX:1.38,scaleY:1.38},0).to({scaleX:0.33,scaleY:0.33},2).to({scaleX:0.14,scaleY:0.14,alpha:0,mode:"synched",startPosition:0},2).wait(18));

	// Layer 7
	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-126.3,-108,0.637,0.637,0,0,180);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("#FF0000",0,0,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-78.5,y:-66.5,alpha:1},3).to({x:1.1,y:2.7},5).wait(21));

	// Layer 6
	this.instance_3 = new lib.red();
	this.instance_3.setTransform(129.4,-110.3,0.803,0.803);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("#FF0000",0,0,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:80.2,y:-67.3,alpha:1},3).to({x:-1.8,y:4.3},5).wait(21));

	// Layer 5
	this.instance_4 = new lib.Tween15("synched",0);
	this.instance_4.setTransform(-107.9,105.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween16("synched",0);
	this.instance_5.setTransform(57,-49);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:-44.8,y:45.6,alpha:1},3).to({x:18.4,y:-14},2).to({_off:true,x:57,y:-49,alpha:0},2).wait(22));

	// Layer 4
	this.instance_6 = new lib.red();
	this.instance_6.setTransform(89.8,-96.2,0.637,0.637);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("#FF0000",0,0,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:27.9,y:-38.1,alpha:1},3).to({x:-34,y:19.9},2).to({x:-71.4,y:53.5,alpha:0},2).to({_off:true},1).wait(21));

	// Layer 3
	this.instance_7 = new lib.Tween17("synched",0);
	this.instance_7.setTransform(114.1,100.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween18("synched",0);
	this.instance_8.setTransform(-37.3,-46);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({x:55.5,y:43.5,alpha:1},3).to({x:-3.2,y:-13.5},2).to({_off:true,x:-37.3,y:-46,alpha:0},2).wait(22));

	// Layer 1
	this.instance_9 = new lib.red();
	this.instance_9.setTransform(-87.6,-91.2,0.776,0.776,0,0,180);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("#FF0000",0,0,4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({x:-29.5,y:-33.1,alpha:1},3).to({x:28.6,y:24.9},2).to({x:62.2,y:58.5,alpha:0},2).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcTask = function() {
	this.initialize();

	// Wrong
	this.mcWrong = new lib.mcWrong();
	this.mcWrong.setTransform(0,0,0.7,0.7);

	// Correct
	this.mcCorrect = new lib.mcCorrect();
	this.mcCorrect.setTransform(0,0,0.7,0.7);

	// Result
	this.mcResult = new lib.mcTaskResult();

	// Item
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.9,-0.7,0,0.9,-0.7,3.6).s().p("AgEAIIABgIIAGgLQAAgBABAAQAAAAAAABQAAAAABAAQAAAAAAABQABABgDAJIgEALIgCACIgBgFg");
	this.shape.setTransform(-3.7,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,-0.3,0,0.7,-0.3,3.9).s().p("AgCgEQACgGADgEIACgBIACABQACACgFAJIgFAKIgFAJQABgOADgGg");
	this.shape_1.setTransform(-1.9,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.1,0,0.5,-0.1,3.6).s().p("AgLAWQgBgFgBgGIAGgGIgBAJIACAFIABgCIAFgMQACgIgBgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAFgLIAEgMIAFACQgHAVgHAQIgHASIgEgHg");
	this.shape_2.setTransform(-3.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.6).s().p("AgKAcIgBgCIAJgSQAGgQAHgVIABABQgJAVgCAOQgBALABAGIgFAEIgDACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(-3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,2.9,0,-0.9,2.9,3.6).s().p("AAAADIgDgCIABgDIAGACIgCADIgCAAg");
	this.shape_4.setTransform(-1.9,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-1.6,2.9,0,-1.6,2.9,3.7).s().p("AAAADIgCgDIACgDIAEADIgEAEIAAgBg");
	this.shape_5.setTransform(-4.8,-4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.4,0,0,-0.4,0,3.6).s().p("AgVAfIAEgDQAMgKAIgQIALgSQgKgEgGgHIACgEIADACQAIAHALADIAAABIgCAFIgEALIgFAJIgJANIgEAGIgBAAQgHAGgGAAQgCAAgDgBg");
	this.shape_6.setTransform(-4.5,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.4,0,0,0.4,0,3.6).s().p("AgDgCQADgGACgDQAEgEACADQADAEgJAIIgKAOIAFgQg");
	this.shape_7.setTransform(-5.4,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.1,0,0.1,-0.1,3.6).s().p("AgRAbQgCgCABgHIAAgBQABgIAEgJQAGgPAJgOQAIAHAJAFIgLARQgIAQgMALIgDADIgCgDgAAAgNQgEAEgCAGIgGAPIAMgMQAIgKgDgDIgCgCIgDACg");
	this.shape_8.setTransform(-5,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.1,-0.1,0,-0.1,-0.1,3.7).s().p("AgDAFQALgWAGgIIABAAQgKAOgFAOQgDAKgBAIIgIAFIgCAAIALgVg");
	this.shape_9.setTransform(-6.4,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.2,-0.7,0,1.2,-0.7,3.7).s().p("AgFAJIgBgBIABgCIABgGIAAAAQADgFABgCQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIACABQACADgDAGQgCAEgDAFIgDACIgCgCg");
	this.shape_10.setTransform(-7.7,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,0,0,0.5,0,3.7).s().p("AgQAZQgEgEABgKIAAgEQAKgGAJgHQAIgIAJgNIAEADQgHAJgNAVIgJAWIgDAAQgDAAgCgDgAgFAAQgDAAgDAGIAAABIgBAHIgBABIABABIACACIADgCQAFgEACgHQABgFgBgBIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_11.setTransform(-7,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.1,0,-0.5,0.1,4.3).s().p("AgfAfIAAAAIANgJIAVgQQAPgLAEgGIACgEIgBgBQgGgGgDgHIAFgCIAKANIADAEIgDAFQgJALgKAIQgKAJgHAFIgHAEQgIAEgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_12.setTransform(-8.2,-3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.9,1.3,0,-2.9,1.3,3.6).s().p("AgDgBIADgDIAEAHIgEACQgCgEgBgCg");
	this.shape_13.setTransform(-6.7,-7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.5,0.3,0,-3.5,0.3,3.8).s().p("AgBABIAAgBIADAAIAAABIgDAAg");
	this.shape_14.setTransform(-7.5,-10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.3,0.9,0,0.3,0.9,4.3).s().p("AgLAFQAFgFAFgDQAHgIAGAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAABQACACgCADIgGAFQgGAEgIAEIgMAFQABgEAEgEg");
	this.shape_15.setTransform(-9,-4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.1,0,0,0.1,4.3).s().p("AgcAPQABgHAEgGQAEgFAGgFIACgDQALgJAQgIIADgBQAEAGAFAGIABACIgCAEQgEAGgPALIgUAQIgOAJQgDgGABgKgAAJgUQgGABgGAIQgGADgEAHQgEACgCAEIAMgFQAJgCAGgGIAGgFQABgEgBgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIgCAAg");
	this.shape_16.setTransform(-8.7,-3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1,-0.6,0,1,-0.6,3.6).s().p("AgKADIAEgDQADgDAGgBQAHgBABACIAAADIgDADQgDACgGAAQgHAAgCgCg");
	this.shape_17.setTransform(-10.6,-5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.8,-2,0,1.8,-2,3.6).s().p("AgCAEIgGgEQgCgBgBgDIAGABQAFABAJgCIADAAQgHAEgDAFIgEgBg");
	this.shape_18.setTransform(-11.4,-4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0,0,0,0,3.6).s().p("AgXAPIgFgBQgBgFAEgGIACgDIAIAAQATgCAUgMQACAEADAEIgEACQgRAGgKAJIgCADIgCAAIgKABIgHAAgAgFAAQgHABgEADIgEAFQADACAHAAQAHAAADgCIABgEIABgEIgCgBIgFAAg");
	this.shape_19.setTransform(-9.7,-6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.9).s().p("AgaATQgHgBgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEAAQAHAAAJgCQAVgFAVgKQgDgHAAgHIgBAAIAGAAQAAAFADAGIACAGIgFACQgUAMgTAEIgIABIgJAAg");
	this.shape_20.setTransform(-10.3,-8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.9,0.5,0,0.9,0.5,3.9).s().p("AAFgDQAKgEADADQACACgEACQgCABgOACIgRAEQAOgHAIgDg");
	this.shape_21.setTransform(-11,-8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.9,-1.2,0,1.9,-1.2,3.8).s().p("AgBAGQgGgCgEgEIgDgFIAPAFQAFAAAJgBQgLADgEAEIgBAAg");
	this.shape_22.setTransform(-13,-8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,0.6,0,0.5,0.6,3.9).s().p("AgeAQIAAgDQACgFAFgEIABgBQAFgDALgEIALgFQAOgFAJgBIABAAQAAAHADAHQgVAKgVAFQgJACgHAAIgDAAIgBAAgAABgDQgIADgOAHIATgEQAMgCACgBQAEgCgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgDAAgGACg");
	this.shape_23.setTransform(-10.7,-8.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,0.8,0,0.7,0.8,4.3).s().p("AAAAEIgTgDQASgEAJAAQAJgBACADQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBACQgDACgHAAIgJAAg");
	this.shape_24.setTransform(-10.9,-12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.5,0.1,0,1.5,0.1,3.8).s().p("AAAAEIgLgCIABgCQACAAADgBIAFgCIAGAAIAFABIAAAAQABABgDACQgEADgFAAIAAAAg");
	this.shape_25.setTransform(-12.6,-9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0,0,0.1,0,3.8).s().p("AgPAKIgRgFIAAgBQAAgEAEgCQAGgFAFgCQAFADAGACIgGAAIgHACQgDABgCABIgBABIALACQAGAAAFgDQADgCgBgBQAQADASgCIAAACQgJAAgOAEIgLAFIgJABIgFAAg");
	this.shape_26.setTransform(-11.2,-9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,-2.7,0,-0.9,-2.7,3.7).s().p("AgDAEIgCgEIAEgCIAFgBIACAEIgCABIgGADg");
	this.shape_27.setTransform(-2,-18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.2,0,0.5,-0.2,4.3).s().p("AgGAPIgBAAIgEgBQgHgCgFgDIgCgBQgHgEgEgEQAAAAAAAAQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIACADQAIAHAYADQARADAOgEIAAgHIADgQIAAAAIACAAIAFADQgEAIgBAGIAAAFIAAAIIgFACQgJABgIAAQgKAAgHgCg");
	this.shape_28.setTransform(-10.6,-11.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.2,-0.4,0,-3.2,-0.4,3.9).s().p("AgBADIgCgBIADgGIAEACIAAABIgCADIAAACIAAABIgDgCg");
	this.shape_29.setTransform(-7,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.3,0.8,0,1.3,0.8,3.9).s().p("AAAAEIgLgDIgBgBIACAAIAEgCIACAAQAGgCADAAQADABADADQADABgCADIgFABIgHgBg");
	this.shape_30.setTransform(-11.6,-15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.8,0.2,0,0.8,0.2,4.3).s().p("AAAAMQgYgCgIgKIgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAKgCIAAAAIAWgEIAGgBQAQgBAJACIAAABIgDAPIAAAIQgHACgJAAIgPgCgAAJgKQgJAAgSAHIASACQAQABAEgCIABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBgCgHAAIgDAAg");
	this.shape_31.setTransform(-11,-12.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.7,-0.2,0,1.7,-0.2,3.9).s().p("AgQAAQgCgEABgEQAEAFAQADIAQADIgGABIgWAEIAAAAIgHgIg");
	this.shape_32.setTransform(-12,-13.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.5,0,0.3,0.5,3.9).s().p("AAEALIgOgDQgRgGgFgCIACgDQAGgEAMgDIAIgBQAHAGAOAFIAQADIgDAJQgKgCgQABgAgOgFIgCAAIgFACIgBABIAAACIAMABQAKABABgBQACgBgCgDQgBgDgDAAIgCgBIgJACg");
	this.shape_33.setTransform(-10.5,-14.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.1,0.5,0,0.1,0.5,4).s().p("AAAABIgMgHIAEABIAJAEIAHABIADADIACACIgCACIgBAAQgEAAgGgGg");
	this.shape_34.setTransform(-8.9,-17.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,4).s().p("AARAQIgQgEQgMgGgJgGQgIgDgEgEIgDgHIAAgDIAAgBIAAABIAEAFQAFAGARAGQAQAJANAAIAJgKIABgBIAHACIgCAAIgBACIgHAKIgEAGIgGgCg");
	this.shape_35.setTransform(-8.9,-16);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.5,-1.7,0,-2.5,-1.7,3.8).s().p("AgEAAIAEgDIAEADIAAAAIABAAIgDADIgCABIgEgEg");
	this.shape_36.setTransform(-5.3,-16.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.4,0.2,0,0.4,0.2,4).s().p("AgGAIQgRgIgFgFIgEgEIAAgBIABgDQAHgFASAEQAGACAIAEIAIADQAHADAHADIADACIgBABIgJANIgBAAQgNAAgPgJgAABAAQALAFADgCIABgCIgBgBIgDgBIgHgEIgJgDIgFgBIAKAJg");
	this.shape_37.setTransform(-9.2,-16.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,1.4,0,0.5,1.4,3.8).s().p("AAAAEIgHgEIgCgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAEgBAEACQAHADACABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEABQgDAAgDgCg");
	this.shape_38.setTransform(-8.3,-19.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.4,0.8,0,1.4,0.8,3.8).s().p("AAHAMQgHgEgGgBQgGgHgCgFQgCgGAEgEIABAAIAAADIAGAJQAGAIANAKIABABIgIgEg");
	this.shape_39.setTransform(-9.2,-19);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.8).s().p("AARAUQgHgFgHgDIgCgBQgKgKgJgHIgGgKIAAgDQAFgDAQAEIAIADQAGAPAJAKIAFAGIgFAGIgDgCgAgMgQQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIACADIAIAFQAFAFAEgDIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgCgDgGgCIgIgCIgCAAg");
	this.shape_40.setTransform(-7.9,-18.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,3.9).s().p("AADAhIgDgFIgFgGQgJgKgGgPIgBgCQgIgVAHgFIAAgBIACAAQABAPAIARQAHAOAHAKIABgBQAKgIAKgFIACAGIABABIgFACQgIAEgGAGIgBAAIgEAEg");
	this.shape_41.setTransform(-5.2,-19.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,0.3,0,-1.2,0.3,3.9).s().p("AACAOIgCgCQAAgCgDgLIgDgNIAEAEQAFAJADAGQACAIgCABIgCABIgCgBg");
	this.shape_42.setTransform(-4.2,-20.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.4,0.3,0,-0.4,0.3,3.9).s().p("AgMAEQgJgQAAgPQADgBAHADQAIADADAEIAHAHIADADQAFAHAEAHIABADIACAGQgKAEgKAIIgBABQgHgJgGgPgAADgBQADALABACIADACQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQACgBgCgIQgDgGgHgJIgEgEIADANg");
	this.shape_43.setTransform(-5,-20.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.5,1.7,0,1.5,1.7,3.7).s().p("AACAOIgFgHIgBgJQABgKADgDQAAgBAEAAIAAABIgBAOQAAAKACAIIgDgDg");
	this.shape_44.setTransform(-4.5,-23);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,1,0,0,1,3.7).s().p("AAAAMQgCgEgBgIQgBgJABgDIABABQAFAHABAGIABAEQAAAFgCACIgBAAIgCgBg");
	this.shape_45.setTransform(-2.9,-22.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,0.4,0,-0.1,0.4,3.7).s().p("AAAAXIAAgDQgEgJgFgHQgCgGAAgMIABgOIAAAAIAEACQAFACAFAHIgBAEIAAAMQgBgIgEgIIgCgBQgBADABAJQACAIACAEIABACIACgBQACgCgBgFQACAMAGAOIgGABIgFACIgBgGg");
	this.shape_46.setTransform(-2.9,-21.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,-0.8,0,0.5,-0.8,4).s().p("AgDADIAEgPIACABQACADgBAIQgCAJgCAEQgCgEgBgGg");
	this.shape_47.setTransform(0.2,1.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-0.9,0,0.6,-0.9,3.9).s().p("AACAPIgBgBIgBgDIAAgEQgDgHAAgHQAAgFACgCQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQADACAAAMIgBAOIAAAAIgBAAg");
	this.shape_48.setTransform(2.2,0.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,-1.2,0,0,-1.2,4.1).s().p("AABAOIgCgEIgBgBQACgJgDgLIAAAAIABgBIABgBIABABQAAADADAJQACAMgCACIgBAAIgBAAg");
	this.shape_49.setTransform(5,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.5,-2.3,0,-1.5,-2.3,4.1).s().p("AgBANIAAgBQABgMgFgMQADAEAIAFIAAAAIgCAIQgBAFgCACIgBABIgBAAg");
	this.shape_50.setTransform(6.5,2.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,1.5).s().p("AgHgIIABABQAGAEAHAJIABAAIgNADQABgJgDgIg");
	this.shape_51.setTransform(12.4,-3.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.2,0.1,0,-0.2,0.1,1.5).s().p("AAHAKIgBgBQgGgJgHgDIgBgBIgBgFIAPAFIADAFQACAGgDADIgBAAg");
	this.shape_52.setTransform(12.4,-3.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.9,-1.6,0,-0.9,-1.6,4.3).s().p("AAHAKIAAAAIgPgFQgFgHgHgJIATALQALAHALAEIgDABIgLgCg");
	this.shape_53.setTransform(12.3,-5.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1.3,-0.1,0,-1.3,-0.1,4.3).s().p("AABAHIgJgIQgDgDAAgCIABgDIADgBIABABIAGADQAFAFADACIAEAGQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABQgDAAgFgEg");
	this.shape_54.setTransform(12.7,-6.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.6,1,0,-0.6,1,4.4).s().p("AAJAIQgGAAgFgDQgOgFgBgCIgBgDIABgCQALgDALAHQAJADADAEIACADIgCACIgIgBg");
	this.shape_55.setTransform(12.6,-10.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.6,-1.7,0,-1.6,-1.7,3.8).s().p("AAAANIgCgPIgDgLIAFAHQADAGADAAIgBAEQgCAJgBABg");
	this.shape_56.setTransform(9.3,-0.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-1.1,0,0.6,-1.1,4.3).s().p("AACALIgCgCQgDgGAAgFQgBgFACgDIACACQADAGABAGQABAGgBABIgBAAIgBAAg");
	this.shape_57.setTransform(6.1,-0.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.2,2.7,0,1.2,2.7,3.8).s().p("AAAACIgCgCIACgCIACACIgCADIAAgBg");
	this.shape_58.setTransform(6.5,-5.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.8).s().p("AAHAaIgEgQQgEgPgGgLIgFgIIADgDIAFAIIABACIALARIADALIACARg");
	this.shape_59.setTransform(7.8,-2.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0,-1.5,0,0,-1.5,4.4).s().p("AADALIgCgBQgEgHgBgGQgCgGABgDIAFAEQADAHACAGQACAGgBACIgDgCg");
	this.shape_60.setTransform(9.3,-3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.6,-0.3,0,0.6,-0.3,4.3).s().p("AAKAdIgBAAQgJgFgBgEIgBgCQgEgGgGgNIgEgNIgBgEIgBgDIAJgFIAIgGIABAFIADAHIADAGIAGAOQAJAVgCAMQgDgBgGgDgAgDAFQAAAHADAFIACADQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgCgBgFQgBgIgDgFIgCgCQgCACABAFg");
	this.shape_61.setTransform(6.1,-1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.3,3.4,0,1.3,3.4,4.1).s().p("AgDAAIAGgCIABACIAAABIgEACIgDgDg");
	this.shape_62.setTransform(3.7,-3.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.1,0,0.3,0.1,4.3).s().p("AAQAlQACgLgIgXIgHgNIgDgGIgBgHIgDgFIgHAGIgKAFIAAgBIgBgEQAJgEAIgHIAEgDIABACIAAABIAFAIQAHALAGAPIAEAQQADAPgGAFIgCAAIgBAAg");
	this.shape_63.setTransform(6.4,-1.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.2,0,0.1,-0.2,4.1).s().p("AALAiQgFgCgFgHIgBgEIgBAAIABgCIAAABIADAEIACAAQABgCgCgMQgCgKgCgCIAAgBIgBABIgBABQgCgOgGgMIgCgEIAGgCIABADIABAEIAEANQAEANAEAGIABACQAFALgBAOIAAABIgCAAg");
	this.shape_64.setTransform(4.9,0.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,3.9).s().p("AAFAgQgFgBgDgFIgCgCQgEgIgBgPIgEgeIAOgCIAHANIAHASQACAKgDALQgCAGgEAFIgBAAIgBAAgAgFgKQgDABABAGQAAAEADAKIABAEIABACIABABQABAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAIAAgNQAAgMgBgCIgDgCIgBABg");
	this.shape_65.setTransform(2.6,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.9).s().p("AAKAYQADgKgCgKIgGgTIgFgMIgQACIgBgGIAJAAIALgDIADAEIACAEQAGALACAPIABAAQACAKgBAJIgBACQgBAHgFAEQgDADgEAAQAEgEACgHg");
	this.shape_66.setTransform(2.9,0.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.6,-0.3,0,-0.6,-0.3,4).s().p("AgFAjQACgLABgQQABgWgBgVIABAAIACAgQABANAEAIIgCAFIgEAKIgEADIgBgBg");
	this.shape_67.setTransform(1.4,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.3,0,0.5,-0.3,4).s().p("AABAgIgFgMIgDgGIAEgFQABAFACAFQACgFACgJQABgIgCgDIgCgBIAAgBQADgOgCgMIAFAAQACAUgCAWQgBAQgCAMIgDgEg");
	this.shape_68.setTransform(0.2,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0,3.5,0,0,3.5,4).s().p("AgCgBIAEAAIABADIgBAAIgDAAIgBgDg");
	this.shape_69.setTransform(0.8,-2.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.9).s().p("AgLAbIgCgEQgCgGACgLQACgNAJgWIAPADIACAAQABAUgIAOQgHAMgJAKIgDgDgAAAgPQgEAEgDAHQgDAFgBAOIAGgJIAFgJQAEgKgCgCIgBgBIgBABg");
	this.shape_70.setTransform(-1.4,0.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,3.9).s().p("AgKAiIgDgDQALgKAFgMQAIgOgBgUIgCAAIgPgDIADgFIANADIAEAAIABAFQABANgCAMIgBAAIgGASIgEAGIgFAJIgEABIgDAAg");
	this.shape_71.setTransform(-0.9,0.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.7,-0.6,0,0.7,-0.6,8.1).s().p("AABBNIgNgCIgIgDIAAgBQgKgDgIgHIgEgCIgEgEIgEgEIgKgNIgEgKIgDgHQgCgGgBgFIAAgEIAAgHIAAgEQABgJAEgHIAAgBIAAgDIACgFIAAgBIAEgHIAHgKIABgBIACgBIACgBIACgDIgBgBIAFgDIAAAAQAHgHAHgDIAFgDIAJgDIACgBIAKgBIgDABIgIADIgJAHIgJAGQgcAZAAAcQABAWALAQQAMARAPAJQAOAJAFAAQAGABAGgBIAOgBQAYgDAUgRIABgBIgGAHIgDAEIgEADQgIAGgJAFIgIAEIgNADIgJAAIgGAAIgEAAg");
	this.shape_72.setTransform(-0.1,-10.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.1,-0.6,0,0.1,-0.6,3.2).s().p("AgBAXQgMgBgIgKQgIgJABgLQAAgIAFgGQgDAGABAHQACAJADADQAHAIANACQAOACAOgMIABgBQgCAIgHAGQgJAHgLAAIgBAAg");
	this.shape_73.setTransform(0.4,-10.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-0.2,1.4,0,-0.2,1.4,3.2).s().p("AgBAGQgFgCgDgDIgCgCIAAgBIACgCQAEgDAGABQAHAAADADQACADgBABQgBACgCACQgDACgDAAIgEgBg");
	this.shape_74.setTransform(0.7,-12.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.1,0.4,0,-0.1,0.4,3.2).s().p("AgCAXQgNgCgHgIQgDgEgCgJQgBgGADgGIAFgGIACgBIAFgDQgHAGAAAJQAAAHAFAGQAGAHAJAAQAIAAAJgHQAEgEABgCIACgKQAFAIgBAIIgBAHIgBAAQgMAKgNAAIgDAAg");
	this.shape_75.setTransform(0.6,-11.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.7,0,0.2,-0.7,4.4).s().p("AAKAfIgCgCQgDgCgFgGIgEgHIgMgRIgBgCIgGgIQAJgJAGgKIADACQAFAFAKANQAKAMACAOIABAGQgCAHgEAFIgDABQgCAAgCgCgAgDADQACAIADAHIACABIADACQABgCgCgGQgBgIgFgFIgEgEQAAADABAEg");
	this.shape_76.setTransform(9.2,-3.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.2,0.5,0,0.2,0.5,4.4).s().p("AAXAbQgCgQgLgLQgKgMgFgFIgDgCQgGAKgIAJIgDgEIAGgHQAHgKADgLIACABIADACIAEAEIAIAJIADACQAHAJAEAHIACAFQADAJgBAKIAAABIgCAGIgBgGg");
	this.shape_77.setTransform(9.1,-5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,4.3).s().p("AAEANIgRgNIgCAAIgJgJIgFgEIAAgDIACgHQAOAGANAFIABAAIgBABIAAACQgBADABADIALAIQAIAGACgDQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBgBIgEgFQgCgDgIgFIgFgDIABAAIAGACIADAAQAFAEAEAFQAHAHABAJQAAAGgCACQgLgEgNgHg");
	this.shape_78.setTransform(11.6,-6.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,1.8,0,2.9,1.8,4.3).s().p("AgBAEIgBgBIABgDIABgFIADADIgCAFIAAADIgCgCg");
	this.shape_79.setTransform(8.4,-8.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.6,0.6,0,-0.6,0.6,4.4).s().p("AgUAKQgIgDgGgFIAAAAIAAgCQABgHgBgHQAPgEATAGIALAEQANAGAIAHQAEAFgBAGIgPAAQgYAAgQgGgAgRgLIgBADIABACQABACAPAFQAEADAGABIAJAAIACgBIgDgEQgCgBgJgFQgIgFgJAAIgGAAg");
	this.shape_80.setTransform(12.5,-10.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.7,-0.3,0,-0.7,-0.3,4).s().p("AACAEQgSgEgQACIAAgDQANABAZgDIAXgFIACABQACAEAAACIgCABQgDADgIADIgGACIgMgEg");
	this.shape_81.setTransform(12.3,-12);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,-0.1,0,2.9,-0.1,4).s().p("AgCgEIAEAAIABAEIAAAFIgDAAIgCgJg");
	this.shape_82.setTransform(8.6,-12.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.3,0,0,-0.3,0,4.4).s().p("AAHATIgDgBIgEgBIgBgBIgCAAIgCgBQgOgEgOgGIgEgDIABgHIAAgOIAFgBQABAHgBAIIAAADIAAAAQAGADAIADQATAIAkgCIAAAAQAAAHgEADQgCABgIAAIgRgCg");
	this.shape_83.setTransform(12.2,-9.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],4,-0.5,0,4,-0.5,3.9).s().p("AADAHIABAAIABgBIAEgCIAEAFIgDADIgCABIgFgGgAgMgKIACgCIgBADIgBgBg");
	this.shape_84.setTransform(6.4,-16.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-0.2,1,0,-0.2,1,3.2).s().p("AgQANQgGgHAAgHQAAgJAHgGQAHgDAIABQALABAJAJIADAEIAAABIgDAJQgBADgDADQgKAHgHABQgKgBgFgGgAgJgIIgDADIAAAAIADAFQACAAAFACQAGADAEgEQADgBAAgBQABgDgCgCQgCgDgIgBIgBAAQgGAAgCACg");
	this.shape_85.setTransform(0.7,-12);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,0.9,0,-0.2,0.9,4.6).s().p("AgNAeQgGgOgBgLIgBgEIgBgJIABgFQACgNALgJIABAAIgCAIQgDAMABAPQAAALAHANIACAEQAHgBAJABQAFAAAEAAIAAAHIgIgBQgIAAgHABIAAAAIgKABIgDgGg");
	this.shape_86.setTransform(-0.2,-22.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.6,0,0,-0.6,0,8.1).s().p("AgMBJQgGgBgOgJQgPgJgMgQQgLgRgBgWQAAgcAcgZIAIgGIAKgGIAHgEIADgBIADAAQAHgBAFAAIAIABIABABIAMADQgPgEgOAEIgBAAQgIAEgGAFQgaAWABAgQABAXAOARQAJAMASADQAPAFAJgEQAKgEAGgEIAKgIQAFgEAFgJQAHgKADgKQAGgOgDgMIADAJIACAMIAAANIgBAIIgCAGIgBAFQgEALgGAJIgCABQgTARgZADIgMACIgGAAIgGAAgAAVhDQAJACAIAFIAAABIAGAEQgLgIgMgEg");
	this.shape_87.setTransform(1.2,-11.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0.1,-3.2,0,0.1,-3.2,3.7).s().p("AAAACIAAgEIAAABIAAABIAAAAIAAADIAAgBg");
	this.shape_88.setTransform(2.2,-18.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-2.8,4,0,-2.8,4,8.1).s().p("AgEAAQgEgFgHgFIgJgGQADgBAHACQALABADADQAGADAGAFIAIAFQAJAKgGAFIgCAAQgHAAgSgRg");
	this.shape_89.setTransform(3.4,-15.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-1.5,0.7,0,-1.5,0.7,8.1).s().p("AgQA7QgRgDgJgMQgPgRAAgZQgCgeAbgWQAGgFAIgEIAAAAQARgEAMAEQAMAEALAIIACACIABAAIAAABIADADIABACIAEAGIAFAGIAHAMQADAMgFAOQgEAKgGAKQgGAJgFAEIgKAIQgGAEgJAEQgEACgFAAQgGAAgKgDgAgdgOIgFAEIgCAAIgFAHQgFAEAAAIQgBANAIAJQAIAKAMABQANABAIgIQAHgGACgIIABgHQABgKgFgFIAAgBIgDgEQgGgJgNgBIgDAAQgHAAgFACgAgMgxIAJAGQAFAGAFAFQAXAXAGgFQAFgFgIgJIgIgIQgGgFgGgDQgFgCgKgCIgIgBIgCAAg");
	this.shape_90.setTransform(2.2,-12.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.1,0.9,0,-1.1,0.9,4.6).s().p("AAAAOIAAgBQgCgDgBgLIABgMQACAGADAIQACAKgDACIgBABIgBAAg");
	this.shape_91.setTransform(0.7,-22.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.7,1.3,0,-0.7,1.3,4.6).s().p("AAJAgQgJgBgHABIgCgEQgHgNAAgNQgBgNADgMIACgIIADABIAIAIQADAGAFANIAFALIAEAPIABAIIABABQgEAAgFAAgAAAABQAAAMADADIABABIACgBQADgCgCgKQgDgIgEgGIAAALg");
	this.shape_92.setTransform(0.3,-22.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.8,1,0,-0.8,1,3.7).s().p("AAAAKQgCgDgBgHQAAgHABgEIACAFQAEAGAAAEIgEAIIAAgCg");
	this.shape_93.setTransform(3.2,-23.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.6,0.2,0,-0.6,0.2,3.7).s().p("AgHAeIAAgCIgCgHQgBgKAAgMQABgJAEgMIAEgHIAAAAIAGAHQAEAFABAHIABABIgEAHQgBgGgDgHIgDgEQgBAEABAHQAAAIABACIACACIgDAIQgEAIgBALIgCgBg");
	this.shape_94.setTransform(2.9,-22.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.5,0.7,0,0.5,0.7,3.7).s().p("AgCALIgEgLQABgRAGgHQACgDAEADIgDAHQgEAMAAAIQAAANAAAKIgCgPg");
	this.shape_95.setTransform(1.9,-22.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.8,0.5,0,0.8,0.5,4.6).s().p("AgIAgIgLgDIAAgDIAAgBIAAgDQACgLAEgIIAEgGIAFgIIADgGIABgCIAIgKIAGgEIAFgFIABAAIgCADQgGAHgGAMQgGAKgCARQgCAJAAAGIAKAFIAEAEIgBABIgCACQgHgEgIgCg");
	this.shape_96.setTransform(4.3,-21.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.2,0,-0.5,0.2,4.6).s().p("AgDANIgBgBQgDgCAHgMIAGgLQAAAMgHAOIAAABIgCgBg");
	this.shape_97.setTransform(5.6,-21.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.7,0,0,0.7,4.6).s().p("AgBAhIgMgFQAAgGACgJQAEgRAGgKQAEgMAHgHIABgDIACABIAAABQABACAAAEIAAAXIgBACIABAEQgCALgHARIgDAIIgDgEgAAEAAQgGAOACACIAAABIACAAQAJgQAAgKIgHAJg");
	this.shape_98.setTransform(5.1,-21.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-1,0,0.1,-1,4.4).s().p("AgUAZIAAAAIgBABIABgBgAAOgQQADgHADgDIABABQABAIgBAGIgBACIgJAGQgCgEAFgJg");
	this.shape_99.setTransform(7.5,-20.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.9,0.8,0,-0.9,0.8,4).s().p("AgNAAIACgBIABAAIAHgBIAAAAIADAAQALAAABABIACABIgCAAQgDAEgJAAQgMAAgBgEg");
	this.shape_100.setTransform(12.5,-13.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,-0.7,0,0,-0.7,3.9).s().p("AgUAPIgGgBIgDgJIgHgKIACgBIADgDIAFAJIAEAIQAPACAUgKQAPgGAJgIIgBADQgBAFgHAFIgLAFIgKADIgCAAQgMAIgMAAIgBAAg");
	this.shape_101.setTransform(11,-14.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.7,0,-0.5,0.7,4).s().p("AgeAHIgBgFQANAAAPgGIABAAIAJgDIAGAAQAMADAHAFIgYAEQgOADgLAAQgIAAgFgBgAgFgCIgCAAIgBACQABACAJAAQALAAADgCIACAAIgBgCQgCgBgKgBIgFAAIAAAAIgFACg");
	this.shape_102.setTransform(12,-13.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.9,0,-0.5,0.9,3.9).s().p("AgOADIAAgCIgBgBQAHgEAKAAQALgBADAEQACABgEABQgFAEgJAAIgEAAQgIAAgCgCg");
	this.shape_103.setTransform(11.4,-16);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.3,0.3,0,-0.3,0.3,3.9).s().p("AgYASIgEgJIgFgJIAGgEQALgGAMgEIAGgCIAMgBQAMAAAHAJIABAEQgIAHgPAHQgQAIgNAAIgGAAgAAEgKQgJAAgIAGIABABIAAACQADABAJAAQALAAAFgDQAEgDgBgBQgDgEgIAAIgEABg");
	this.shape_104.setTransform(11.2,-15.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-2.2,1,0,-2.2,1,3.9).s().p("AAAAAIAIgHIADACQACACgJAGIgEADIgLACIALgIg");
	this.shape_105.setTransform(12.6,-18);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1,1.3,0,-1,1.3,3.9).s().p("AgKAEIAGgEIAGgCQAHgCACADIAAABIgDACQgDACgFAAIgKAAg");
	this.shape_106.setTransform(11.4,-18.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0.3,0,0,0.3,3.9).s().p("AgdANIAEgCQAOgIALgHIAJAAQAGAAADgCIADgDIAAgCQgCgDgHACIgIADIABgCIAFgGIAGAAQAKAAAEADIgJAJIgMAGIgIACQgJADgLAHIgHAFIgDgFg");
	this.shape_107.setTransform(10.4,-17.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.4,-0.2,0,0.4,-0.2,4).s().p("AgOAeIgEgGIgCgCIgDgDIAAgBIgBAAIgBgCIgGgEIABgEIABgBIADgDQAJgKALgIIAIgIIAJgFIAEgBIAKgBIAEADIADABQgFAAgFABQgLADgLALQgIAHgGAIQgDAFgBAGIAGAGIAEAFIgFACIgBABg");
	this.shape_108.setTransform(8.4,-18.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,-0.2,0,-1.2,-0.2,4).s().p("AgLAJIgBgDIAAgBIACgBIAHgFQAGgGADgCQAEgCACACQACACgDAFIgGAGIgCABIAAABQgEAEgDABIgCAAQgDAAgCgCg");
	this.shape_109.setTransform(10,-18.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.5,-0.3,0,-0.5,-0.3,4).s().p("AgVAWIgHgGQACgGADgGQAFgHAKgIQAKgKALgDQAFgCAFABIAEADQAEAFgGAJIgDAFIgGAEIgBABIgFAGQgKAJgOAIIgEACIgDgFgAAOgJQgEACgHAGIgGAEIgBACIAAAAIAAAEQADACACgBQAEAAAFgFIABgBIACgBIAFgFQAEgFgDgCIgBgBIgEABg");
	this.shape_110.setTransform(9.3,-18.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,4.4).s().p("AgXAhIADgIQAHgRACgJQAHgJAKgKQAJgIAGgCIADgCIAAAPQABAJgEAGIgEABIABgCQABgGgBgIIgBgBQgDADgDAHQgFAIACADIgJAHQgLAJgIALIgDADg");
	this.shape_111.setTransform(7.8,-21.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.8,1.6,0,-0.8,1.6,4.4).s().p("AgRAKIABgDIABgCIALgJQAHgIAHgCQAFgCADABIAAABIgDACQgFACgKAJQgKAHgGAKIgBgGg");
	this.shape_112.setTransform(8.4,-23.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#CCE51E","#81B70B","#3A671D"],[0,0.592,1],0,-7.2,0,0,-7.2,4.2).s().p("AAABLQAAgagBgqQgDg5AAgYIADABIgBAaQAAAOABAOIAAABIAAAMQABAlAFAtIgFgBg");
	this.shape_113.setTransform(0.3,16.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],-2.1,2,0,-2.1,2,3.7).s().p("AgtAhQAYgEAbgYQAYgRAQgVQgNA2gcAJQgJAEgUAAIgVgBg");
	this.shape_114.setTransform(10.7,7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],-0.2,1.3,0,-0.2,1.3,3.7).s().p("AgTAmIgZgHQgPgCgMAFIACgBQAIgFAdgCIAGAAIAVABQASAAALgEQAcgJANg2IACABIAEAZIABAQQgRAagcAJQgNAEgNAAQgJAAgLgDg");
	this.shape_115.setTransform(8.8,7.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.5,-2.7,0,0.5,-2.7,3.7).s().p("AhOAZIAAAAQAGgYAJgGQAMgFAOADIAZAHQAWAEAYgFQAdgJAQgbIAAAIQgJAggyAGQgPACgQgBIgPgCIgPgGIgNgDQgIgCgHAMQgEAIgDAQIgCAFIAAgNg");
	this.shape_116.setTransform(8,11.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],3.9,-3.2,0,3.9,-3.2,7).s().p("AAOA4QgQgPgOgWQgcgoAEgyQAJAuAdAqQAVAkAWATQgMgFgPgLg");
	this.shape_117.setTransform(-11.9,5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.1,-0.1,0,0.1,-0.1,1.8).s().p("AADABIgDgBIgGgHIgHgFIAKgBQADABABADIACABQAFAEADAEIAAAAIADAFIAAAJQgFgHgGgGg");
	this.shape_118.setTransform(-2.6,13.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.8,-6.9,0,0.8,-6.9,4.2).s().p("AgDBNIgChVIAAgKIAAgFIAAg1IAAAAIAHAEQAAAYADA5QACAqgBAbIgJgBg");
	this.shape_119.setTransform(-0.5,16.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],0.9,1.5,0,0.9,1.5,4.2).s().p("AACALIgHgFIAAgRIABACIAHAEIADABQgBAGABAKIgEgBg");
	this.shape_120.setTransform(-0.5,7.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],1.4,-1.2,0,1.4,-1.2,7).s().p("AAQBGIgYghQgFgGgKgPIgNgVQgEgFgNgiIgJgaIACgKIAGgNQgBAcAbAxQAcA1AjAgIAXASIAFADIgKACIgGABIgFABQgQgPgKgJg");
	this.shape_121.setTransform(-9.4,3.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],2.6,-2.4,0,2.6,-2.4,7).s().p("AAiBQIgFgBQgXgSgVgkQgcgqgKguIADgTIAJAaQANAiADAFIAOAVQAJAPAEAGIAaAhQAJAJARAPIgGAAQgHAAgHgCg");
	this.shape_122.setTransform(-10.6,4.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],0.3,8.6,0,0.3,8.6,4.2).s().p("AAABAIgJgEIgCgCQABhXAKgiIADABQAGABADACQgJBDgDA4IAAAAg");
	this.shape_123.setTransform(0,0.5);

	this.addChild(this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.mcResult,this.mcCorrect,this.mcWrong);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-25.8,32.2,49.8);


(lib.mcPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Still":0,Down:1,Up:2,Right:3,Left:4,Hurt:5});

	// char
	this.instance = new lib.mc_galidle();
	this.instance.setTransform(0.9,-6.1);

	this.instance_1 = new lib.mc_galdown();
	this.instance_1.setTransform(0.9,-6.1);

	this.instance_2 = new lib.mc_galup();
	this.instance_2.setTransform(0.9,-6.1,1,0.999);

	this.instance_3 = new lib.mc_galright();
	this.instance_3.setTransform(0.9,-6.1);

	this.instance_4 = new lib.mc_galleft();
	this.instance_4.setTransform(0.7,-6.1,1.001,1,0,0,180);

	this.instance_5 = new lib.mc_galhurt();
	this.instance_5.setTransform(0.9,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,0,0)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-40.1,40,60.1);


(lib.mcExit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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gHgDQgEgDgCgEQgCgFAAgJIAAg8IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAWAAIAAARIgWAAIAAA+QABADACABIAHAAIAHgBIAFgDIAAAQIgDADIgFACQgDACgDgBgA88LGIgGAAIgHgDQgDgDgDgEQgCgFAAgJIAAg8IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA+QAAAAAAABQAAABABAAQAAABABAAQAAAAABABIAGAAIAIgBIAFgDIAAAQIgDADIgFACQgDACgEgBgA++K/QgNgGgHgMQgIgLAAgPQABgOAHgLQAHgLAMgHQANgHAPAAQASAAANAJQAOAIAHASIgTAAQgGgKgIgFQgIgEgLAAQgKAAgJAEQgIAFgFAIQgFAIAAAKQAAAKAFAHQAFAJAJAEQAIAFALAAQAJAAAIgEQAHgEAIgKIAUAAQgHAMgIAIQgIAHgJAEQgJACgLAAQgQABgMgIgEgg2AK/QgMgGgHgMQgIgLAAgPQAAgOAHgLQAHgLANgHQALgHAQAAQAPAAAMAHQAMAGAHANQAHANAAASIhZAAQABAIAFAHQAFAGAIAEQAIAEAJAAQAIAAAIgDQAHgEAFgGIAVAAQgFAJgHAHQgIAFgJAEQgKADgKAAQgPABgMgIgA/4KKQgEgLgJgHQgKgHgNABQgMgBgKAHQgJAHgDALIBGAAIAAAAgEgh3ALGIAAiSIASAAIAACSgEgjbAK/QgMgGgHgMQgIgLAAgPQAAgOAHgLQAHgLANgHQALgHAQAAQAPAAAMAHQAMAGAHANQAHANAAASIhZAAQABAIAFAHQAFAGAIAEQAIAEAJAAQAIAAAIgDQAHgEAFgGIAVAAQgFAJgHAHQgIAFgJAEQgKADgKAAQgPABgMgIgEgidAKKQgEgLgJgHQgKgHgNABQgMgBgKAHQgJAHgDALIBGAAIAAAAgEglTALBQgLgGgHgJQgHgLgBgOIAUAAQACAKAEAHQAFAFAHAEQAHACAIAAQAJAAAHgCQAHgEAEgFQAFgGAAgIQAAgGgEgFQgDgFgIgDIgWgIIgSgFQgIgDgEgEQgGgFgDgGQgDgIAAgHQAAgLAGgJQAGgJAKgFQALgFANAAQAOAAALAFQALAFAGAJQAGAJAAANIgUAAQAAgIgEgFQgEgGgGgEQgHgDgHgBQgHABgHAD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");
	this.shape.setTransform(430.2,337.2);

	this.instance = new lib.pbNo("single",0);
	this.instance.setTransform(276.4,403.3,0.6,0.6,0,0,0,39.6,39.6);

	this.instance_1 = new lib.pbYes("single",0);
	this.instance_1.setTransform(276.4,341.7,0.6,0.6,0,0,0,39.6,39.6);

	this.pbYes = new lib.pbYes();
	this.pbYes.setTransform(448,520.6,1,1,0,0,0,39.6,39.6);

	this.pbNo = new lib.pbNo();
	this.pbNo.setTransform(576,520.6,1,1,0,0,0,39.6,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#806503").s().p("AA8BdIAAh+IAiAAIAAB+gAAABdIgXgoIgYAoIgqAAIAthCIgng8IAnAAIAVAhIAUghIAlAAIgkA8IArBCgAjGBdIAAi5IBdAAIAAAmIg5AAIAAAlIA2AAIAAAkIg2AAIAAAkIA5AAIAAAmgACkBcQgGgBgFgDQgGgDgDgGQgEgHAAgLIAAg9IgZAAIAAghIAZAAIAAg7IAiAAIAAA7IAZAAIAAAhIgZAAIAAA6QABADACABQADABAFgBIAIgBIAFgEIAAAZIgDAEIgHAEQgEACgFAAIgFAAIgKAAgAA8g7IAAghIAiAAIAAAhg");
	this.shape_1.setTransform(209.6,221.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-2.5,107.7,721,107.7).ss(5,0,1).p("AAAgFIAAAFIAAAH");
	this.shape_2.setTransform(162,244.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,138.2,371,138.2).ss(5,0,1).p("EA2sADZIAAhpQAAikh2h1Qh1h1ilAAMhg3AAAQilAAh2B1Qh1B1AACkIAADI");
	this.shape_3.setTransform(512,212.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC907").s().p("Eg1bAEsIhQgFIAAgGIAAjIQAAikB1h1QB2h1ClAAMBg2AAAQCmAAB1B1QB2B1AACkIAABpQo0gakMgJQrTgXqNAFQo4AFpmAaQmdASpzAlQrTArjfALQn8AZmFADIiNABQkfAAjagKg");
	this.shape_4.setTransform(512,215.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,-33,371,-33).ss(5,1,1).rr(-350,-200,700,400,40);
	this.shape_5.setTransform(512,384);

	this.instance_2 = new lib.Bg_Translucent("single",0);
	this.instance_2.setTransform(512,384,1,1,0,0,0,512,384);

	this.addChild(this.instance_2,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.pbNo,this.pbYes,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.mcEnemy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Still":0,"Down":1,"Up":2,"Right":3,"Left":4});

	// char
	this.instance = new lib.mc_spideridle3();
	this.instance.setTransform(0.1,-5,1,1,0,0,0,0.8,0);

	this.instance_1 = new lib.mc_spider3down();
	this.instance_1.setTransform(0.1,-5,1,1,0,0,0,0.8,0);

	this.instance_2 = new lib.mc_spider3up();
	this.instance_2.setTransform(0.1,-5,1,1,0,0,0,0.8,0);

	this.instance_3 = new lib.mc_spider3right();
	this.instance_3.setTransform(0.1,-4.9,1,1,0,0,0,1.9,0.1);

	this.instance_4 = new lib.mc_spider3left();
	this.instance_4.setTransform(-5.5,-4.9,1,1,0,0,0,1.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,0,0)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-24,47.8,44);


(lib.mcDirection = function() {
	this.initialize();

	// Layer 1
	this.pbDirection_37 = new lib.hsDirection_Left();
	this.pbDirection_37.setTransform(-41,24,1,1,0,0,180);

	this.pbDirection_39 = new lib.hsDirection_Right();
	this.pbDirection_39.setTransform(41,24);

	this.pbDirection_38 = new lib.hsDirection_Up();
	this.pbDirection_38.setTransform(-24,-41,1,1,0,90,-90);

	this.pbDirection_40 = new lib.hsDirection_Down();
	this.pbDirection_40.setTransform(-24,41.1,1,1,90);

	this.addChild(this.pbDirection_40,this.pbDirection_38,this.pbDirection_39,this.pbDirection_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,-65,130.1,130.1);


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


(lib.pbBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBYQgGgCgDgGIhkiHQgFgGABgHQABgIAGgFQAFgGAIAAIDIAAQAHAAAGAGQAGAFACAIQAAAHgFAGIhlCHQgEAGgGACIgFAAIgHAAg");
	this.shape.setTransform(27.5,42.5,1,1,0,0,0,-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiUgWQAHgvAjgjQAsgsA+AAQA9AAAsAsQAsAsAAA8QAAA+gsAsQgsAsg9AAQgCAAgCAA");
	this.shape_1.setTransform(36.2,39.8,1,1,0,0,0,-5.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(237,237,237,0.8)").s().p("AAkDQQgSAAgMgNQgMgNAAgRQAAgTAMgNQAMgMASAAIAFAAQAygBAjgiIABAAQAjglAAgxQAAgxgjgjIgBAAQgjgkgyABQgwgBgkAkIgOASIA0AAQAGgBAHAHQAGAFACAJQABAJgGAHIhtCTQgEAHgHACQgIACgHgCQgHgCgDgHIhuiTQgGgHABgJQABgJAGgFQAGgHAJABIBIAAQAPgtAjgjQA8g9BWgBQBXABA9A9QA9A9AABVQAABWg9A+Qg9A9hXgBIgFAAg");
	this.shape_2.setTransform(36.2,39.8,1,1,0,0,0,-2.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,98,101,0.969)").s().p("AAhC9QgQAAgMgLQgKgMAAgQQAAgRAKgMQAMgLAQgBIAEAAQAuABAgggIAAAAQAgghAAgtQAAgsggggIAAAAQggghguAAQgsAAgfAhQgIAHgGAJIAwAAQAFAAAGAGQAGAFACAIQAAAIgFAFIhjCHQgEAGgGACQgHACgHgCQgGgCgDgGIhkiHQgFgFABgIQABgIAGgFQAFgGAIAAIBBAAQAOgoAgghQA3g3BNgBQBPABA3A3IABAAQA3A4AABNQAABOg3A4IgBAAQg3A3hPAAIgEAAg");
	this.shape_3.setTransform(36.2,39.8,1,1,0,0,0,-2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Help
	this.instance = new lib.Symbol("synched",0);
	this.instance.setTransform(39.6,39.6,1,1,0,0,0,39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,75.4,75.4);


// stage content:
(lib.MazeGame_Canvas = function() {
	this.initialize();

	// mcExit (DO NOT CHANGE)
	this.mcExit = new lib.mcExit();
	this.mcExit.setTransform(512,384,1,1,0,0,0,512,384);

	// Messages (DO NOT CHANGE)
	this.mcMessages = new lib.mcMessages();
	this.mcMessages.setTransform(512,384,1,1,0,0,0,512,384);

	// Buttons (DO NOT CHANGE)
	this.mcSoftKey = new lib.mcDirection();
	this.mcSoftKey.setTransform(939,683);

	this.pbBack = new lib.pbBack();
	this.pbBack.setTransform(917.8,13.2);

	this.pbHelp = new lib.pbHelp();
	this.pbHelp.setTransform(64.1,52.8,1,1,0,0,0,39.6,39.6);

	// Enemy (movable)
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],0.4,-0.3,0,0.4,-0.3,4).s().p("AgPAVQgIgEgHgLIATgIQACAEADACQADADAGAAQANAAAAgJQAAgEgEgFIgCgEIAMgJQAJAKgBAMQgBAMgIAHQgJAHgLAAIgBABQgJAAgGgEg");
	this.shape.setTransform(1421,182.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIAnQgTAAgNgMIgDgGIgCgEIAAgBIgGgNQgCgHAAgJIACgMIAFgOIAUARIgEAGQgCAEAAAMQAAAOAKAKQAJAHAMAAQAOAAAKgMIAFgJIADABIAHABIACAAIgFAJQgHAJgJAEIgQAFgAAnAaQgHgHgCgHIADAAIAKgEQAGALAIAEQAHADALAAQALgBAJgGQAJgHABgMQAAgNgIgJIADgDIAHgHIAEgCIABACIABAAQAEANAAAOIABAAQgBAFgDAIIABABIgHAKQgEAFgHADQgPAHgUAAQgNAAgKgIg");
	this.shape_1.setTransform(1413.6,182.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00000E","#6B6B6B","#001C2C"],[0,0.251,0.812],-0.1,-0.1,0,-0.1,-0.1,3.8).s().p("AgTAUQgKgKAAgOQAAgMACgEIAEgGIAKAIIAEADQgCAGAAAEQAAAIAFACQACACAGAAQAGAAADgCIADgFQAJAEAGACIgFAJQgKAMgOAAQgKAAgJgHg");
	this.shape_2.setTransform(1406.9,182.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhPALQgEgDAAgIQgBgDADgHIALAIIAHACIAHAEIgEAGQgCADgHAAQgHAAgDgCgAA8AHQgCgCgCgFIASgJIAFgCIACADQAEAFAAADQAAAKgOAAQgHAAgEgDg");
	this.shape_3.setTransform(1414.1,182);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhqA6IgCgEIgBgCQgFgEgCgGIgCgDIgFgJIgCgFIAAgBIAAAAIgBgEIABgCIgBgDIABgIIAAgCIAAAAIAAgJIACgHIAAgBQABgFADgCIgBgBIABAAIABgBIAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCgDIABAAIANANQAVAOAKAGQASALAHADIAOAGQAHAEACAGIgCAAIgCAAIgHgBIgDgBQgHgCgIgGIgHgEIgHgEIgLgIIgEgCIgLgIIgUgPIgEANIgDALQAAAIADAKIAFAMIAAABIACAFIAEAGIABADIADACIAAAAIgCgBIACAEIAAAAIgDgDgAh3gQIABgCIAAAAIgBACgAhsA5QgQgHgGgQIAAgJIAAAAQAAAQASAOQgMgNgGgRIgCgGIAAgHIABAAQACAZAVAUIACABIAAAAIgBAAIABABIAAAAIgCgCgABpAtIAGgLIgBgBQADgIACgGIgBAAQgBgPgEgKIAAAAIgCgEIAAABIgDADIgHAGIgEACIgNAJIgEACIgSAKIgTAKIgKAFIgDAAIgCAAIgCgCQAAgGAGgBIAGgBIAXgOIAbgQIgCACIABgBQARgOAEgCIgCgCIACABIABACIABAAIABADIABgBIgCgFIAAAAQAHAFACAIIABAGQACAIAAAKIgBALQgBAFgDAFIgDADIgBADIgCABIAAAAIgGAFIgBAAIAHgGIAAgCIgHAIIgBABIAGgHgAB0AeIAAAAIAAAAIAAAAgAA2AUIgEADIAFgCIgBAAIADgCIgDABgABtgMIACAEIgBgEIgBAAgABuAwIAIgRQAGgJAAgGQAAgIgDgEIAAgCIABAAIADAQQAAAKgOAUgAB5AqQAKgQAAgGIgCgIIAAgCIABAAIADAMQgBAEgIAQgAgXATIg2gfQgMgIgKgLQgGgHgDgKIAAgBIANAIQANAHACABIgGgVIAAgCQAPASAeAeQATAQABAIIAAADgAARAEQAAgEAZgUQAcgZAJgPIABAAIAAAFIgBAPIAAAAIASgIIABAAIgGAMIADAAIAPgGQgaAZgZANQgXALgNAAQgGAAAAgDg");
	this.shape_4.setTransform(1413.9,179.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.7,-2.7,0,0.7,-2.7,6.7).s().p("AAOAVQADgLAAgKIgBgSIgbANQgNgKgPgGQALgHAagJIAlgNQAFAOABAkQAAASgGARIgFAQQgGgQgKgOg");
	this.shape_5.setTransform(1425.6,170);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFC9","#FFAA7E","#000000"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,2.5).s().p("AgSAIQgDgDAAgFQAAgGAJgEQAHgDAFAAQAKAAAHAGQAEAEABADIAAABQAAANgVAAQgJAAgKgGg");
	this.shape_6.setTransform(1414.2,193.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#A52515","#5D1C2A","#310720"],[0,0.506,1],8.7,-4.5,0,8.7,-4.5,16.2).s().p("AgVA7QgFgIgDgKIAAgGQAAgQAEgPQAEgaANgcQAIgVANgKIARgKQgXAagKArQgIAgAAAkQAAAPAFAOIAGAQIABABIgWghg");
	this.shape_7.setTransform(1407.2,181.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.8,-2.8,0,1.8,-2.8,16.2).s().p("AhwBWIgHgHQgEgEgHgNQgHgLgGgSQgFgRgCgqQgBgNAEgNQAFgNAKgNQALgNASgMIADgCQAOgIAQgGQAlgOAxAAQAgABAZAJQAQAGANAKIANAMQAIAIAGAJQAJAOAGAQQAGAUABAXQACA7g6AsQglAcgjAHQgBgFgEgEQgHgGgKAAQgFAAgHAEQgJADAAAJQg0gIgogogAg2hAQgOAKgJAUQgNAcgFAaQgFAFAAADIgBAIQAAAMADAKQADAJAFAJIAXAgIAAgBIgIgQQgFgNAAgQQAAgkAIggQAMgrAWgZIgQAKg");
	this.shape_8.setTransform(1414.1,180.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6666").s().p("AB3AJIgOgKIAdgMIABARQAAALgDALQgGgJgHgIgAiEABIgCgaIADAAQAFACASAOIAMAJIgEABQgRAMgLANQgCgIgCgRg");
	this.shape_9.setTransform(1413.8,169.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-0.4,-2.4,0,-0.4,-2.4,7.1).s().p("AgmgFQABgqgEgIQAWADATAJQALAFASAQIANANQgQAGgNAGIgMgIQgQgOgFgCIgDAAIACAaQACARACAIQgLANgEANQgGgZAAgkg");
	this.shape_10.setTransform(1402.7,169.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0,0,0,0,0,4.1).s().p("AgGAfQgIgFgBgGIgBgDIAAAAIACgGQAJgUAAgTIgBgHIAAAAIASAhQAFAIAAAJQAAAIgFAGQgGAGgFAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAgFgFg");
	this.shape_11.setTransform(1415,166.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],2.7,-1.4,0,2.7,-1.4,13.7).s().p("AAcBbIgCgUIAAgaQgLgGgfgBQgBAVgLAFIAAADQgEACgIAAQgHAAgHgGQgFgEgEgGQgFgJAAgIIAAgDQgBgFgCgDQgCgXABgbQAAgpAOgTQASgYAqABQAqgBARAkQANAZAAAwQAAAxgFAaQgEAagGAEQgEADgFAAIgFABQgMAAgFgSg");
	this.shape_12.setTransform(1413.6,193.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],5.2,-4.9,0,5.2,-4.9,13.7).s().p("AgzBpQgOgCgOgeQgOgdAAg/QAAghAKgdIADgHIARgJQAIgDAKAAQALAAAJgDQAKgDAaAEQAbAEAcAbQAZAZADAkIgCAZIgMAuQgEAPgTAFQgQgCgCgOIgCgHIgDgLQgDgHgMAAIAAgBIAAABQgCgBgKABQgKABgJAEQgFABgBAGIAAANIABAUQAAALgBACQgCAEgIACIgMABIgLAAg");
	this.shape_13.setTransform(1414.4,190.4);

	this.mcCastMiEnemy_2 = new lib.mcEnemy();
	this.mcCastMiEnemy_2.setTransform(292,155);

	this.mcCastMiEnemy_1 = new lib.mcEnemy();
	this.mcCastMiEnemy_1.setTransform(242,155);

	this.mcCastMiEnemy_0 = new lib.mcEnemy();
	this.mcCastMiEnemy_0.setTransform(74.9,155);

	// User (movable)
	this.instance = new lib.girl_head("single",0);
	this.instance.setTransform(1208.8,181.9);

	this.instance_1 = new lib.Girl_body("single",0);
	this.instance_1.setTransform(1211.4,191.5);

	this.instance_2 = new lib.Girl_hand("single",0);
	this.instance_2.setTransform(1206.1,182,0.999,1,0,-7,-5.3);

	this.instance_3 = new lib.Girl_hand("single",0);
	this.instance_3.setTransform(1212,181.8,0.999,1,0,7.5,-174.5);

	this.mcCastSiUser = new lib.mcPlayer();
	this.mcCastSiUser.setTransform(72,153);

	// Still Items
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.9,-0.7,0,0.9,-0.7,3.6).s().p("AgEAIIABgIIAGgLQAAgBABAAQAAAAAAABQAAAAABAAQAAAAAAABQABABgDAJIgEALIgCACIgBgFg");
	this.shape_14.setTransform(1279.2,174.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,-0.3,0,0.7,-0.3,3.9).s().p("AgCgEQACgGADgEIACgBIACABQACACgFAJIgFAKIgFAJQABgOADgGg");
	this.shape_15.setTransform(1281.1,174.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.1,0,0.5,-0.1,3.6).s().p("AgLAWQgBgFgBgGIAGgGIgBAJIACAFIABgCIAFgMQACgIgBgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAFgLIAEgMIAFACQgHAVgHAQIgHASIgEgHg");
	this.shape_16.setTransform(1279.6,173.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.6).s().p("AgKAcIgBgCIAJgSQAGgQAHgVIABABQgJAVgCAOQgBALABAGIgFAEIgDACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_17.setTransform(1280,174.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,2.9,0,-0.9,2.9,3.6).s().p("AAAADIgDgCIABgDIAGACIgCADIgCAAg");
	this.shape_18.setTransform(1281,170.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-1.6,2.9,0,-1.6,2.9,3.7).s().p("AAAADIgCgDIACgDIAEADIgEAEIAAgBg");
	this.shape_19.setTransform(1278.1,169.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.4,0,0,-0.4,0,3.6).s().p("AgVAfIAEgDQAMgKAIgQIALgSQgKgEgGgHIACgEIADACQAIAHALADIAAABIgCAFIgEALIgFAJIgJANIgEAGIgBAAQgHAGgGAAQgCAAgDgBg");
	this.shape_20.setTransform(1278.5,172.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.4,0,0,0.4,0,3.6).s().p("AgDgCQADgGACgDQAEgEACADQADAEgJAIIgKAOIAFgQg");
	this.shape_21.setTransform(1277.6,172.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.1,0,0.1,-0.1,3.6).s().p("AgRAbQgCgCABgHIAAgBQABgIAEgJQAGgPAJgOQAIAHAJAFIgLARQgIAQgMALIgDADIgCgDgAAAgNQgEAEgCAGIgGAPIAMgMQAIgKgDgDIgCgCIgDACg");
	this.shape_22.setTransform(1277.9,172.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.1,-0.1,0,-0.1,-0.1,3.7).s().p("AgDAFQALgWAGgIIABAAQgKAOgFAOQgDAKgBAIIgIAFIgCAAIALgVg");
	this.shape_23.setTransform(1276.6,172.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.2,-0.7,0,1.2,-0.7,3.7).s().p("AgFAJIgBgBIABgCIABgGIAAAAQADgFABgCQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIACABQACADgDAGQgCAEgDAFIgDACIgCgCg");
	this.shape_24.setTransform(1275.2,172.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,0,0,0.5,0,3.7).s().p("AgQAZQgEgEABgKIAAgEQAKgGAJgHQAIgIAJgNIAEADQgHAJgNAVIgJAWIgDAAQgDAAgCgDgAgFAAQgDAAgDAGIAAABIgBAHIgBABIABABIACACIADgCQAFgEACgHQABgFgBgBIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_25.setTransform(1275.9,172);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.1,0,-0.5,0.1,4.3).s().p("AgfAfIAAAAIANgJIAVgQQAPgLAEgGIACgEIgBgBQgGgGgDgHIAFgCIAKANIADAEIgDAFQgJALgKAIQgKAJgHAFIgHAEQgIAEgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_26.setTransform(1274.8,170.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.9,1.3,0,-2.9,1.3,3.6).s().p("AgDgBIADgDIAEAHIgEACQgCgEgBgCg");
	this.shape_27.setTransform(1276.2,166.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.5,0.3,0,-3.5,0.3,3.8).s().p("AgBABIAAgBIADAAIAAABIgDAAg");
	this.shape_28.setTransform(1275.4,164);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.3,0.9,0,0.3,0.9,4.3).s().p("AgLAFQAFgFAFgDQAHgIAGAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAABQACACgCADIgGAFQgGAEgIAEIgMAFQABgEAEgEg");
	this.shape_29.setTransform(1274,169.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.1,0,0,0.1,4.3).s().p("AgcAPQABgHAEgGQAEgFAGgFIACgDQALgJAQgIIADgBQAEAGAFAGIABACIgCAEQgEAGgPALIgUAQIgOAJQgDgGABgKgAAJgUQgGABgGAIQgGADgEAHQgEACgCAEIAMgFQAJgCAGgGIAGgFQABgEgBgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIgCAAg");
	this.shape_30.setTransform(1274.2,170.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1,-0.6,0,1,-0.6,3.6).s().p("AgKADIAEgDQADgDAGgBQAHgBABACIAAADIgDADQgDACgGAAQgHAAgCgCg");
	this.shape_31.setTransform(1272.3,168.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.8,-2,0,1.8,-2,3.6).s().p("AgCAEIgGgEQgCgBgBgDIAGABQAFABAJgCIADAAQgHAEgDAFIgEgBg");
	this.shape_32.setTransform(1271.6,169.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0,0,0,0,3.6).s().p("AgXAPIgFgBQgBgFAEgGIACgDIAIAAQATgCAUgMQACAEADAEIgEACQgRAGgKAJIgCADIgCAAIgKABIgHAAgAgFAAQgHABgEADIgEAFQADACAHAAQAHAAADgCIABgEIABgEIgCgBIgFAAg");
	this.shape_33.setTransform(1273.3,167.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.9).s().p("AgaATQgHgBgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEAAQAHAAAJgCQAVgFAVgKQgDgHAAgHIgBAAIAGAAQAAAFADAGIACAGIgFACQgUAMgTAEIgIABIgJAAg");
	this.shape_34.setTransform(1272.7,166);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.9,0.5,0,0.9,0.5,3.9).s().p("AAFgDQAKgEADADQACACgEACQgCABgOACIgRAEQAOgHAIgDg");
	this.shape_35.setTransform(1271.9,165.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.9,-1.2,0,1.9,-1.2,3.8).s().p("AgBAGQgGgCgEgEIgDgFIAPAFQAFAAAJgBQgLADgEAEIgBAAg");
	this.shape_36.setTransform(1270,165.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,0.6,0,0.5,0.6,3.9).s().p("AgeAQIAAgDQACgFAFgEIABgBQAFgDALgEIALgFQAOgFAJgBIABAAQAAAHADAHQgVAKgVAFQgJACgHAAIgDAAIgBAAgAABgDQgIADgOAHIATgEQAMgCACgBQAEgCgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgDAAgGACg");
	this.shape_37.setTransform(1272.3,165.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,0.8,0,0.7,0.8,4.3).s().p("AAAAEIgTgDQASgEAJAAQAJgBACADQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBACQgDACgHAAIgJAAg");
	this.shape_38.setTransform(1272.1,161.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.5,0.1,0,1.5,0.1,3.8).s().p("AAAAEIgLgCIABgCQACAAADgBIAFgCIAGAAIAFABIAAAAQABABgDACQgEADgFAAIAAAAg");
	this.shape_39.setTransform(1270.4,164.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0,0,0.1,0,3.8).s().p("AgPAKIgRgFIAAgBQAAgEAEgCQAGgFAFgCQAFADAGACIgGAAIgHACQgDABgCABIgBABIALACQAGAAAFgDQADgCgBgBQAQADASgCIAAACQgJAAgOAEIgLAFIgJABIgFAAg");
	this.shape_40.setTransform(1271.8,164.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,-2.7,0,-0.9,-2.7,3.7).s().p("AgDAEIgCgEIAEgCIAFgBIACAEIgCABIgGADg");
	this.shape_41.setTransform(1280.9,155.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.2,0,0.5,-0.2,4.3).s().p("AgGAPIgBAAIgEgBQgHgCgFgDIgCgBQgHgEgEgEQAAAAAAAAQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIACADQAIAHAYADQARADAOgEIAAgHIADgQIAAAAIACAAIAFADQgEAIgBAGIAAAFIAAAIIgFACQgJABgIAAQgKAAgHgCg");
	this.shape_42.setTransform(1272.3,162.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.2,-0.4,0,-3.2,-0.4,3.9).s().p("AgBADIgCgBIADgGIAEACIAAABIgCADIAAACIAAABIgDgCg");
	this.shape_43.setTransform(1275.9,160.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.3,0.8,0,1.3,0.8,3.9).s().p("AAAAEIgLgDIgBgBIACAAIAEgCIACAAQAGgCADAAQADABADADQADABgCADIgFABIgHgBg");
	this.shape_44.setTransform(1271.4,159);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.8,0.2,0,0.8,0.2,4.3).s().p("AAAAMQgYgCgIgKIgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAKgCIAAAAIAWgEIAGgBQAQgBAJACIAAABIgDAPIAAAIQgHACgJAAIgPgCgAAJgKQgJAAgSAHIASACQAQABAEgCIABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBgCgHAAIgDAAg");
	this.shape_45.setTransform(1272,161.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.7,-0.2,0,1.7,-0.2,3.9).s().p("AgQAAQgCgEABgEQAEAFAQADIAQADIgGABIgWAEIAAAAIgHgIg");
	this.shape_46.setTransform(1271,160.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.5,0,0.3,0.5,3.9).s().p("AAEALIgOgDQgRgGgFgCIACgDQAGgEAMgDIAIgBQAHAGAOAFIAQADIgDAJQgKgCgQABgAgOgFIgCAAIgFACIgBABIAAACIAMABQAKABABgBQACgBgCgDQgBgDgDAAIgCgBIgJACg");
	this.shape_47.setTransform(1272.4,159.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.1,0.5,0,0.1,0.5,4).s().p("AAAABIgMgHIAEABIAJAEIAHABIADADIACACIgCACIgBAAQgEAAgGgGg");
	this.shape_48.setTransform(1274.1,156.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,4).s().p("AARAQIgQgEQgMgGgJgGQgIgDgEgEIgDgHIAAgDIAAgBIAAABIAEAFQAFAGARAGQAQAJANAAIAJgKIABgBIAHACIgCAAIgBACIgHAKIgEAGIgGgCg");
	this.shape_49.setTransform(1274,158);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.5,-1.7,0,-2.5,-1.7,3.8).s().p("AgEAAIAEgDIAEADIAAAAIABAAIgDADIgCABIgEgEg");
	this.shape_50.setTransform(1277.7,157.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.4,0.2,0,0.4,0.2,4).s().p("AgGAIQgRgIgFgFIgEgEIAAgBIABgDQAHgFASAEQAGACAIAEIAIADQAHADAHADIADACIgBABIgJANIgBAAQgNAAgPgJgAABAAQALAFADgCIABgCIgBgBIgDgBIgHgEIgJgDIgFgBIAKAJg");
	this.shape_51.setTransform(1273.7,157.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,1.4,0,0.5,1.4,3.8).s().p("AAAAEIgHgEIgCgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAEgBAEACQAHADACABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEABQgDAAgDgCg");
	this.shape_52.setTransform(1274.7,154.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.4,0.8,0,1.4,0.8,3.8).s().p("AAHAMQgHgEgGgBQgGgHgCgFQgCgGAEgEIABAAIAAADIAGAJQAGAIANAKIABABIgIgEg");
	this.shape_53.setTransform(1273.8,155);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.8).s().p("AARAUQgHgFgHgDIgCgBQgKgKgJgHIgGgKIAAgDQAFgDAQAEIAIADQAGAPAJAKIAFAGIgFAGIgDgCgAgMgQQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIACADIAIAFQAFAFAEgDIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgCgDgGgCIgIgCIgCAAg");
	this.shape_54.setTransform(1275.1,155.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,3.9).s().p("AADAhIgDgFIgFgGQgJgKgGgPIgBgCQgIgVAHgFIAAgBIACAAQABAPAIARQAHAOAHAKIABgBQAKgIAKgFIACAGIABABIgFACQgIAEgGAGIgBAAIgEAEg");
	this.shape_55.setTransform(1277.8,154.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,0.3,0,-1.2,0.3,3.9).s().p("AACAOIgCgCQAAgCgDgLIgDgNIAEAEQAFAJADAGQACAIgCABIgCABIgCgBg");
	this.shape_56.setTransform(1278.8,153.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.4,0.3,0,-0.4,0.3,3.9).s().p("AgMAEQgJgQAAgPQADgBAHADQAIADADAEIAHAHIADADQAFAHAEAHIABADIACAGQgKAEgKAIIgBABQgHgJgGgPgAADgBQADALABACIADACQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQACgBgCgIQgDgGgHgJIgEgEIADANg");
	this.shape_57.setTransform(1278,153.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.5,1.7,0,1.5,1.7,3.7).s().p("AACAOIgFgHIgBgJQABgKADgDQAAgBAEAAIAAABIgBAOQAAAKACAIIgDgDg");
	this.shape_58.setTransform(1278.5,151);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,1,0,0,1,3.7).s().p("AAAAMQgCgEgBgIQgBgJABgDIABABQAFAHABAGIABAEQAAAFgCACIgBAAIgCgBg");
	this.shape_59.setTransform(1280,151.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,0.4,0,-0.1,0.4,3.7).s().p("AAAAXIAAgDQgEgJgFgHQgCgGAAgMIABgOIAAAAIAEACQAFACAFAHIgBAEIAAAMQgBgIgEgIIgCgBQgBADABAJQACAIACAEIABACIACgBQACgCgBgFQACAMAGAOIgGABIgFACIgBgGg");
	this.shape_60.setTransform(1280.1,152.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,-0.8,0,0.5,-0.8,4).s().p("AgDADIAEgPIACABQACADgBAIQgCAJgCAEQgCgEgBgGg");
	this.shape_61.setTransform(1283.2,175.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-0.9,0,0.6,-0.9,3.9).s().p("AACAPIgBgBIgBgDIAAgEQgDgHAAgHQAAgFACgCQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQADACAAAMIgBAOIAAAAIgBAAg");
	this.shape_62.setTransform(1285.1,174.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,-1.2,0,0,-1.2,4.1).s().p("AABAOIgCgEIgBgBQACgJgDgLIAAAAIABgBIABgBIABABQAAADADAJQACAMgCACIgBAAIgBAAg");
	this.shape_63.setTransform(1288,175.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.5,-2.3,0,-1.5,-2.3,4.1).s().p("AgBANIAAgBQABgMgFgMQADAEAIAFIAAAAIgCAIQgBAFgCACIgBABIgBAAg");
	this.shape_64.setTransform(1289.5,176.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,1.5).s().p("AgHgIIABABQAGAEAHAJIABAAIgNADQABgJgDgIg");
	this.shape_65.setTransform(1295.3,170.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.2,0.1,0,-0.2,0.1,1.5).s().p("AAHAKIgBgBQgGgJgHgDIgBgBIgBgFIAPAFIADAFQACAGgDADIgBAAg");
	this.shape_66.setTransform(1295.4,170.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.9,-1.6,0,-0.9,-1.6,4.3).s().p("AAHAKIAAAAIgPgFQgFgHgHgJIATALQALAHALAEIgDABIgLgCg");
	this.shape_67.setTransform(1295.3,168.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1.3,-0.1,0,-1.3,-0.1,4.3).s().p("AABAHIgJgIQgDgDAAgCIABgDIADgBIABABIAGADQAFAFADACIAEAGQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABQgDAAgFgEg");
	this.shape_68.setTransform(1295.6,167.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.6,1,0,-0.6,1,4.4).s().p("AAJAIQgGAAgFgDQgOgFgBgCIgBgDIABgCQALgDALAHQAJADADAEIACADIgCACIgIgBg");
	this.shape_69.setTransform(1295.5,163.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.6,-1.7,0,-1.6,-1.7,3.8).s().p("AAAANIgCgPIgDgLIAFAHQADAGADAAIgBAEQgCAJgBABg");
	this.shape_70.setTransform(1292.3,173.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-1.1,0,0.6,-1.1,4.3).s().p("AACALIgCgCQgDgGAAgFQgBgFACgDIACACQADAGABAGQABAGgBABIgBAAIgBAAg");
	this.shape_71.setTransform(1289.1,173.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.2,2.7,0,1.2,2.7,3.8).s().p("AAAACIgCgCIACgCIACACIgCADIAAgBg");
	this.shape_72.setTransform(1289.4,168.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.8).s().p("AAHAaIgEgQQgEgPgGgLIgFgIIADgDIAFAIIABACIALARIADALIACARg");
	this.shape_73.setTransform(1290.8,171.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0,-1.5,0,0,-1.5,4.4).s().p("AADALIgCgBQgEgHgBgGQgCgGABgDIAFAEQADAHACAGQACAGgBACIgDgCg");
	this.shape_74.setTransform(1292.2,171);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.6,-0.3,0,0.6,-0.3,4.3).s().p("AAKAdIgBAAQgJgFgBgEIgBgCQgEgGgGgNIgEgNIgBgEIgBgDIAJgFIAIgGIABAFIADAHIADAGIAGAOQAJAVgCAMQgDgBgGgDgAgDAFQAAAHADAFIACADQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgCgBgFQgBgIgDgFIgCgCQgCACABAFg");
	this.shape_75.setTransform(1289.1,173);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.3,3.4,0,1.3,3.4,4.1).s().p("AgDAAIAGgCIABACIAAABIgEACIgDgDg");
	this.shape_76.setTransform(1286.7,170.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.1,0,0.3,0.1,4.3).s().p("AAQAlQACgLgIgXIgHgNIgDgGIgBgHIgDgFIgHAGIgKAFIAAgBIgBgEQAJgEAIgHIAEgDIABACIAAABIAFAIQAHALAGAPIAEAQQADAPgGAFIgCAAIgBAAg");
	this.shape_77.setTransform(1289.3,172.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.2,0,0.1,-0.2,4.1).s().p("AALAiQgFgCgFgHIgBgEIgBAAIABgCIAAABIADAEIACAAQABgCgCgMQgCgKgCgCIAAgBIgBABIgBABQgCgOgGgMIgCgEIAGgCIABADIABAEIAEANQAEANAEAGIABACQAFALgBAOIAAABIgCAAg");
	this.shape_78.setTransform(1287.8,174.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,3.9).s().p("AAFAgQgFgBgDgFIgCgCQgEgIgBgPIgEgeIAOgCIAHANIAHASQACAKgDALQgCAGgEAFIgBAAIgBAAgAgFgKQgDABABAGQAAAEADAKIABAEIABACIABABQABAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAIAAgNQAAgMgBgCIgDgCIgBABg");
	this.shape_79.setTransform(1285.6,174.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.9).s().p("AAKAYQADgKgCgKIgGgTIgFgMIgQACIgBgGIAJAAIALgDIADAEIACAEQAGALACAPIABAAQACAKgBAJIgBACQgBAHgFAEQgDADgEAAQAEgEACgHg");
	this.shape_80.setTransform(1285.8,174.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.6,-0.3,0,-0.6,-0.3,4).s().p("AgFAjQACgLABgQQABgWgBgVIABAAIACAgQABANAEAIIgCAFIgEAKIgEADIgBgBg");
	this.shape_81.setTransform(1284.3,175.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.3,0,0.5,-0.3,4).s().p("AABAgIgFgMIgDgGIAEgFQABAFACAFQACgFACgJQABgIgCgDIgCgBIAAgBQADgOgCgMIAFAAQACAUgCAWQgBAQgCAMIgDgEg");
	this.shape_82.setTransform(1283.2,175.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0,3.5,0,0,3.5,4).s().p("AgCgBIAEAAIABADIgBAAIgDAAIgBgDg");
	this.shape_83.setTransform(1283.7,171.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.9).s().p("AgLAbIgCgEQgCgGACgLQACgNAJgWIAPADIACAAQABAUgIAOQgHAMgJAKIgDgDgAAAgPQgEAEgDAHQgDAFgBAOIAGgJIAFgJQAEgKgCgCIgBgBIgBABg");
	this.shape_84.setTransform(1281.5,174.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,3.9).s().p("AgKAiIgDgDQALgKAFgMQAIgOgBgUIgCAAIgPgDIADgFIANADIAEAAIABAFQABANgCAMIgBAAIgGASIgEAGIgFAJIgEABIgDAAg");
	this.shape_85.setTransform(1282,174.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.7,-0.6,0,0.7,-0.6,8.1).s().p("AABBNIgNgCIgIgDIAAgBQgKgDgIgHIgEgCIgEgEIgEgEIgKgNIgEgKIgDgHQgCgGgBgFIAAgEIAAgHIAAgEQABgJAEgHIAAgBIAAgDIACgFIAAgBIAEgHIAHgKIABgBIACgBIACgBIACgDIgBgBIAFgDIAAAAQAHgHAHgDIAFgDIAJgDIACgBIAKgBIgDABIgIADIgJAHIgJAGQgcAZAAAcQABAWALAQQAMARAPAJQAOAJAFAAQAGABAGgBIAOgBQAYgDAUgRIABgBIgGAHIgDAEIgEADQgIAGgJAFIgIAEIgNADIgJAAIgGAAIgEAAg");
	this.shape_86.setTransform(1282.8,163.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.1,-0.6,0,0.1,-0.6,3.2).s().p("AgBAXQgMgBgIgKQgIgJABgLQAAgIAFgGQgDAGABAHQACAJADADQAHAIANACQAOACAOgMIABgBQgCAIgHAGQgJAHgLAAIgBAAg");
	this.shape_87.setTransform(1283.3,163.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-0.2,1.4,0,-0.2,1.4,3.2).s().p("AgBAGQgFgCgDgDIgCgCIAAgBIACgCQAEgDAGABQAHAAADADQACADgBABQgBACgCACQgDACgDAAIgEgBg");
	this.shape_88.setTransform(1283.6,161.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.1,0.4,0,-0.1,0.4,3.2).s().p("AgCAXQgNgCgHgIQgDgEgCgJQgBgGADgGIAFgGIACgBIAFgDQgHAGAAAJQAAAHAFAGQAGAHAJAAQAIAAAJgHQAEgEABgCIACgKQAFAIgBAIIgBAHIgBAAQgMAKgNAAIgDAAg");
	this.shape_89.setTransform(1283.5,162.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.7,0,0.2,-0.7,4.4).s().p("AAKAfIgCgCQgDgCgFgGIgEgHIgMgRIgBgCIgGgIQAJgJAGgKIADACQAFAFAKANQAKAMACAOIABAGQgCAHgEAFIgDABQgCAAgCgCgAgDADQACAIADAHIACABIADACQABgCgCgGQgBgIgFgFIgEgEQAAADABAEg");
	this.shape_90.setTransform(1292.1,170.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.2,0.5,0,0.2,0.5,4.4).s().p("AAXAbQgCgQgLgLQgKgMgFgFIgDgCQgGAKgIAJIgDgEIAGgHQAHgKADgLIACABIADACIAEAEIAIAJIADACQAHAJAEAHIACAFQADAJgBAKIAAABIgCAGIgBgGg");
	this.shape_91.setTransform(1292,169);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,4.3).s().p("AAEANIgRgNIgCAAIgJgJIgFgEIAAgDIACgHQAOAGANAFIABAAIgBABIAAACQgBADABADIALAIQAIAGACgDQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBgBIgEgFQgCgDgIgFIgFgDIABAAIAGACIADAAQAFAEAEAFQAHAHABAJQAAAGgCACQgLgEgNgHg");
	this.shape_92.setTransform(1294.6,167.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,1.8,0,2.9,1.8,4.3).s().p("AgBAEIgBgBIABgDIABgFIADADIgCAFIAAADIgCgCg");
	this.shape_93.setTransform(1291.4,165.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.6,0.6,0,-0.6,0.6,4.4).s().p("AgUAKQgIgDgGgFIAAAAIAAgCQABgHgBgHQAPgEATAGIALAEQANAGAIAHQAEAFgBAGIgPAAQgYAAgQgGgAgRgLIgBADIABACQABACAPAFQAEADAGABIAJAAIACgBIgDgEQgCgBgJgFQgIgFgJAAIgGAAg");
	this.shape_94.setTransform(1295.5,163.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.7,-0.3,0,-0.7,-0.3,4).s().p("AACAEQgSgEgQACIAAgDQANABAZgDIAXgFIACABQACAEAAACIgCABQgDADgIADIgGACIgMgEg");
	this.shape_95.setTransform(1295.2,162);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,-0.1,0,2.9,-0.1,4).s().p("AgCgEIAEAAIABAEIAAAFIgDAAIgCgJg");
	this.shape_96.setTransform(1291.6,161.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.3,0,0,-0.3,0,4.4).s().p("AAHATIgDgBIgEgBIgBgBIgCAAIgCgBQgOgEgOgGIgEgDIABgHIAAgOIAFgBQABAHgBAIIAAADIAAAAQAGADAIADQATAIAkgCIAAAAQAAAHgEADQgCABgIAAIgRgCg");
	this.shape_97.setTransform(1295.2,164.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],4,-0.5,0,4,-0.5,3.9).s().p("AADAHIABAAIABgBIAEgCIAEAFIgDADIgCABIgFgGgAgMgKIACgCIgBADIgBgBg");
	this.shape_98.setTransform(1289.3,157.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-0.2,1,0,-0.2,1,3.2).s().p("AgQANQgGgHAAgHQAAgJAHgGQAHgDAIABQALABAJAJIADAEIAAABIgDAJQgBADgDADQgKAHgHABQgKgBgFgGgAgJgIIgDADIAAAAIADAFQACAAAFACQAGADAEgEQADgBAAgBQABgDgCgCQgCgDgIgBIgBAAQgGAAgCACg");
	this.shape_99.setTransform(1283.7,162);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,0.9,0,-0.2,0.9,4.6).s().p("AgNAeQgGgOgBgLIgBgEIgBgJIABgFQACgNALgJIABAAIgCAIQgDAMABAPQAAALAHANIACAEQAHgBAJABQAFAAAEAAIAAAHIgIgBQgIAAgHABIAAAAIgKABIgDgGg");
	this.shape_100.setTransform(1282.7,151.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.6,0,0,-0.6,0,8.1).s().p("AgMBJQgGgBgOgJQgPgJgMgQQgLgRgBgWQAAgcAcgZIAIgGIAKgGIAHgEIADgBIADAAQAHgBAFAAIAIABIABABIAMADQgPgEgOAEIgBAAQgIAEgGAFQgaAWABAgQABAXAOARQAJAMASADQAPAFAJgEQAKgEAGgEIAKgIQAFgEAFgJQAHgKADgKQAGgOgDgMIADAJIACAMIAAANIgBAIIgCAGIgBAFQgEALgGAJIgCABQgTARgZADIgMACIgGAAIgGAAgAAVhDQAJACAIAFIAAABIAGAEQgLgIgMgEg");
	this.shape_101.setTransform(1284.2,162.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0.1,-3.2,0,0.1,-3.2,3.7).s().p("AAAACIAAgEIAAABIAAABIAAAAIAAADIAAgBg");
	this.shape_102.setTransform(1285.1,155.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-2.8,4,0,-2.8,4,8.1).s().p("AgEAAQgEgFgHgFIgJgGQADgBAHACQALABADADQAGADAGAFIAIAFQAJAKgGAFIgCAAQgHAAgSgRg");
	this.shape_103.setTransform(1286.4,158.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-1.5,0.7,0,-1.5,0.7,8.1).s().p("AgQA7QgRgDgJgMQgPgRAAgZQgCgeAbgWQAGgFAIgEIAAAAQARgEAMAEQAMAEALAIIACACIABAAIAAABIADADIABACIAEAGIAFAGIAHAMQADAMgFAOQgEAKgGAKQgGAJgFAEIgKAIQgGAEgJAEQgEACgFAAQgGAAgKgDgAgdgOIgFAEIgCAAIgFAHQgFAEAAAIQgBANAIAJQAIAKAMABQANABAIgIQAHgGACgIIABgHQABgKgFgFIAAgBIgDgEQgGgJgNgBIgDAAQgHAAgFACgAgMgxIAJAGQAFAGAFAFQAXAXAGgFQAFgFgIgJIgIgIQgGgFgGgDQgFgCgKgCIgIgBIgCAAg");
	this.shape_104.setTransform(1285.1,161.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.1,0.9,0,-1.1,0.9,4.6).s().p("AAAAOIAAgBQgCgDgBgLIABgMQACAGADAIQACAKgDACIgBABIgBAAg");
	this.shape_105.setTransform(1283.6,151.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.7,1.3,0,-0.7,1.3,4.6).s().p("AAJAgQgJgBgHABIgCgEQgHgNAAgNQgBgNADgMIACgIIADABIAIAIQADAGAFANIAFALIAEAPIABAIIABABQgEAAgFAAgAAAABQAAAMADADIABABIACgBQADgCgCgKQgDgIgEgGIAAALg");
	this.shape_106.setTransform(1283.2,151.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.8,1,0,-0.8,1,3.7).s().p("AAAAKQgCgDgBgHQAAgHABgEIACAFQAEAGAAAEIgEAIIAAgCg");
	this.shape_107.setTransform(1286.1,150.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.6,0.2,0,-0.6,0.2,3.7).s().p("AgHAeIAAgCIgCgHQgBgKAAgMQABgJAEgMIAEgHIAAAAIAGAHQAEAFABAHIABABIgEAHQgBgGgDgHIgDgEQgBAEABAHQAAAIABACIACACIgDAIQgEAIgBALIgCgBg");
	this.shape_108.setTransform(1285.9,151.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.5,0.7,0,0.5,0.7,3.7).s().p("AgCALIgEgLQABgRAGgHQACgDAEADIgDAHQgEAMAAAIQAAANAAAKIgCgPg");
	this.shape_109.setTransform(1284.8,151.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.8,0.5,0,0.8,0.5,4.6).s().p("AgIAgIgLgDIAAgDIAAgBIAAgDQACgLAEgIIAEgGIAFgIIADgGIABgCIAIgKIAGgEIAFgFIABAAIgCADQgGAHgGAMQgGAKgCARQgCAJAAAGIAKAFIAEAEIgBABIgCACQgHgEgIgCg");
	this.shape_110.setTransform(1287.2,152.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.2,0,-0.5,0.2,4.6).s().p("AgDANIgBgBQgDgCAHgMIAGgLQAAAMgHAOIAAABIgCgBg");
	this.shape_111.setTransform(1288.5,152.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.7,0,0,0.7,4.6).s().p("AgBAhIgMgFQAAgGACgJQAEgRAGgKQAEgMAHgHIABgDIACABIAAABQABACAAAEIAAAXIgBACIABAEQgCALgHARIgDAIIgDgEgAAEAAQgGAOACACIAAABIACAAQAJgQAAgKIgHAJg");
	this.shape_112.setTransform(1288.1,152.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-1,0,0.1,-1,4.4).s().p("AgUAZIAAAAIgBABIABgBgAAOgQQADgHADgDIABABQABAIgBAGIgBACIgJAGQgCgEAFgJg");
	this.shape_113.setTransform(1290.4,153.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.9,0.8,0,-0.9,0.8,4).s().p("AgNAAIACgBIABAAIAHgBIAAAAIADAAQALAAABABIACABIgCAAQgDAEgJAAQgMAAgBgEg");
	this.shape_114.setTransform(1295.4,160.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,-0.7,0,0,-0.7,3.9).s().p("AgUAPIgGgBIgDgJIgHgKIACgBIADgDIAFAJIAEAIQAPACAUgKQAPgGAJgIIgBADQgBAFgHAFIgLAFIgKADIgCAAQgMAIgMAAIgBAAg");
	this.shape_115.setTransform(1293.9,159.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.7,0,-0.5,0.7,4).s().p("AgeAHIgBgFQANAAAPgGIABAAIAJgDIAGAAQAMADAHAFIgYAEQgOADgLAAQgIAAgFgBgAgFgCIgCAAIgBACQABACAJAAQALAAADgCIACAAIgBgCQgCgBgKgBIgFAAIAAAAIgFACg");
	this.shape_116.setTransform(1295,160.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.9,0,-0.5,0.9,3.9).s().p("AgOADIAAgCIgBgBQAHgEAKAAQALgBADAEQACABgEABQgFAEgJAAIgEAAQgIAAgCgCg");
	this.shape_117.setTransform(1294.4,158);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.3,0.3,0,-0.3,0.3,3.9).s().p("AgYASIgEgJIgFgJIAGgEQALgGAMgEIAGgCIAMgBQAMAAAHAJIABAEQgIAHgPAHQgQAIgNAAIgGAAgAAEgKQgJAAgIAGIABABIAAACQADABAJAAQALAAAFgDQAEgDgBgBQgDgEgIAAIgEABg");
	this.shape_118.setTransform(1294.2,158.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-2.2,1,0,-2.2,1,3.9).s().p("AAAAAIAIgHIADACQACACgJAGIgEADIgLACIALgIg");
	this.shape_119.setTransform(1295.6,156);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1,1.3,0,-1,1.3,3.9).s().p("AgKAEIAGgEIAGgCQAHgCACADIAAABIgDACQgDACgFAAIgKAAg");
	this.shape_120.setTransform(1294.4,155.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0.3,0,0,0.3,3.9).s().p("AgdANIAEgCQAOgIALgHIAJAAQAGAAADgCIADgDIAAgCQgCgDgHACIgIADIABgCIAFgGIAGAAQAKAAAEADIgJAJIgMAGIgIACQgJADgLAHIgHAFIgDgFg");
	this.shape_121.setTransform(1293.4,156.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.4,-0.2,0,0.4,-0.2,4).s().p("AgOAeIgEgGIgCgCIgDgDIAAgBIgBAAIgBgCIgGgEIABgEIABgBIADgDQAJgKALgIIAIgIIAJgFIAEgBIAKgBIAEADIADABQgFAAgFABQgLADgLALQgIAHgGAIQgDAFgBAGIAGAGIAEAFIgFACIgBABg");
	this.shape_122.setTransform(1291.3,155.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,-0.2,0,-1.2,-0.2,4).s().p("AgLAJIgBgDIAAgBIACgBIAHgFQAGgGADgCQAEgCACACQACACgDAFIgGAGIgCABIAAABQgEAEgDABIgCAAQgDAAgCgCg");
	this.shape_123.setTransform(1293,155.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.5,-0.3,0,-0.5,-0.3,4).s().p("AgVAWIgHgGQACgGADgGQAFgHAKgIQAKgKALgDQAFgCAFABIAEADQAEAFgGAJIgDAFIgGAEIgBABIgFAGQgKAJgOAIIgEACIgDgFgAAOgJQgEACgHAGIgGAEIgBACIAAAAIAAAEQADACACgBQAEAAAFgFIABgBIACgBIAFgFQAEgFgDgCIgBgBIgEABg");
	this.shape_124.setTransform(1292.2,155.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,4.4).s().p("AgXAhIADgIQAHgRACgJQAHgJAKgKQAJgIAGgCIADgCIAAAPQABAJgEAGIgEABIABgCQABgGgBgIIgBgBQgDADgDAHQgFAIACADIgJAHQgLAJgIALIgDADg");
	this.shape_125.setTransform(1290.7,152.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.8,1.6,0,-0.8,1.6,4.4).s().p("AgRAKIABgDIABgCIALgJQAHgIAHgCQAFgCADABIAAABIgDACQgFACgKAJQgKAHgGAKIgBgGg");
	this.shape_126.setTransform(1291.3,150.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.1,-0.1,0,0.1,-0.1,1.8).s().p("AADABIgDgBIgGgHIgHgFIAKgBQADABABADIACABQAFAEADAEIAAAAIADAFIAAAJQgFgHgGgGg");
	this.shape_127.setTransform(1280.3,187.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#CCE51E","#81B70B","#3A671D"],[0,0.592,1],0,-7.2,0,0,-7.2,4.2).s().p("AAABLQAAgagBgrQgDg4AAgZIADABIgBAbQAAAOABAOIAAAAIAAANQABAlAFAtIgFgBg");
	this.shape_128.setTransform(1283.3,190.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.8,-6.9,0,0.8,-6.9,4.2).s().p("AgDBMIgChUIAAgJIAAgGIAAg1IAAgBIAHAFQAAAZADA4QACAqgBAaIgJgBg");
	this.shape_129.setTransform(1282.4,190.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],0.9,1.5,0,0.9,1.5,4.2).s().p("AACAKIgHgEIAAgRIABACIAHAEIADAAQgBAHABAJIgEgBg");
	this.shape_130.setTransform(1282.4,181.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],-2.1,2,0,-2.1,2,3.7).s().p("AgtAhQAYgEAbgYQAYgRAQgVQgNA2gcAJQgJAEgUAAIgVgBg");
	this.shape_131.setTransform(1293.6,181);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],3.9,-3.2,0,3.9,-3.2,7).s().p("AAOA4QgQgPgOgWQgcgoAEgyQAJAuAdAqQAVAkAWATQgMgFgPgLg");
	this.shape_132.setTransform(1271,179);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],2.6,-2.4,0,2.6,-2.4,7).s().p("AAiBRIgFgCQgXgSgVgkQgcgqgKguIADgTIAJAaQANAiADAGIAOATQAJAQAEAGIAaAhQAJAKARAOIgGAAQgHAAgHgBg");
	this.shape_133.setTransform(1272.3,178.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],1.4,-1.2,0,1.4,-1.2,7).s().p("AAQBGIgYghQgGgGgJgQIgNgTQgEgGgNgiIgJgaIACgKQADgJADgEQgBAcAbAxQAcA1AjAgIAXASIAFADIgJACIgHACIgFAAQgQgOgKgKg");
	this.shape_134.setTransform(1273.5,177.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],0.3,8.6,0,0.3,8.6,4.2).s().p("AAABAIgJgEIgCgCQABhXAKgiIADABQAGABADACQgJBDgDA4IAAAAg");
	this.shape_135.setTransform(1283,174.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.5,-2.7,0,0.5,-2.7,3.7).s().p("AhOAZIAAAAQAGgYAJgGQAMgFAOADIAZAHQAWAEAYgFQAdgJAQgbIAAAIQgJAggyAGQgPACgQgBIgPgCIgPgGIgNgDQgIgCgHAMQgEAIgDAQIgCAFIAAgNg");
	this.shape_136.setTransform(1291,185.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],-0.2,1.3,0,-0.2,1.3,3.7).s().p("AgTAmIgZgHQgPgCgMAFIACgBQAIgFAdgCIAGAAIAVABQASAAALgEQAcgJANg2IACABIAEAZIABAQQgRAagcAJQgNAEgNAAQgJAAgLgDg");
	this.shape_137.setTransform(1291.7,181.7);

	this.mcCastSiTask_9 = new lib.mcTask();
	this.mcCastSiTask_9.setTransform(952,143);

	this.mcCastSiTask_8 = new lib.mcTask();
	this.mcCastSiTask_8.setTransform(632,143);

	this.mcCastSiTask_7 = new lib.mcTask();
	this.mcCastSiTask_7.setTransform(672,143);

	this.mcCastSiTask_6 = new lib.mcTask();
	this.mcCastSiTask_6.setTransform(712,143);

	this.mcCastSiTask_5 = new lib.mcTask();
	this.mcCastSiTask_5.setTransform(752,143);

	this.mcCastSiTask_4 = new lib.mcTask();
	this.mcCastSiTask_4.setTransform(592,143);

	this.mcCastSiTask_3 = new lib.mcTask();
	this.mcCastSiTask_3.setTransform(832,143);

	this.mcCastSiTask_2 = new lib.mcTask();
	this.mcCastSiTask_2.setTransform(872,143);

	this.mcCastSiTask_1 = new lib.mcTask();
	this.mcCastSiTask_1.setTransform(912,143);

	this.mcCastSiObstacle_2 = new lib.mcObstacle();
	this.mcCastSiObstacle_2.setTransform(472,143);

	this.mcCastSiObstacle_1 = new lib.mcObstacle();
	this.mcCastSiObstacle_1.setTransform(512,143);

	this.mcCastSiObstacle_0 = new lib.mcObstacle();
	this.mcCastSiObstacle_0.setTransform(432,143);

	this.mcCastSiTask_0 = new lib.mcTask();
	this.mcCastSiTask_0.setTransform(792,143);

	// Result/Life  (DO NOT CHANGE)
	this.mcResult_4 = new lib.mcPlaceHolder();
	this.mcResult_4.setTransform(531.3,695);

	this.mcResult_3 = new lib.mcPlaceHolder();
	this.mcResult_3.setTransform(486.3,695);

	this.mcResult_2 = new lib.mcPlaceHolder();
	this.mcResult_2.setTransform(441.3,695);

	this.mcResult_1 = new lib.mcPlaceHolder();
	this.mcResult_1.setTransform(396.3,695);

	this.mcResult_0 = new lib.mcPlaceHolder();
	this.mcResult_0.setTransform(351.3,695);

	this.mcLife = new lib.mcLife();
	this.mcLife.setTransform(612.7,1042.7,1,1,0,0,0,55.3,21.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FEFFFD").s().p("Ag5hPQAgAAAaAEQATAEAPAQQAXAYAAAfQAAAhgXAXQgPAQgTAFQgaACggAAg");
	this.shape_138.setTransform(706.6,694.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEFFFD").s().p("AAABNQgTgGgPgPQgXgYAAggQAAggAXgXQAPgQATgEQAagDAggBIAACeQggABgagDg");
	this.shape_139.setTransform(317.4,694.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("A6jELQhvAAhOhOQhPhPAAhuQAAhtBPhPQBOhOBvAAMA1HAAAQBGAAA5AfIAAAAIAQAKQAZAPAVAWQBPBPAABtQAABuhPBPIguAlIgQAKQg5AfhGAAg");
	this.shape_140.setTransform(512,694.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#0164A8").ss(8,1,1).p("AenhFQgShDg0g0QgWgWgYgPQgIgGgIgEIAAAAQg5gfhGAAMg1IAAAQhuAAhPBOQgzAzgRBBQgNAGgLALQgXAXAAAgQAAAgAXAYQALALANAGQARBAAzA0QBPBOBuAAMA1IAAAQBGAAA5gfQAIgEAIgGIAuglQAygyASg/QAOgGALgMQAXgXAAghQAAgfgXgYQgLgKgMgGg");
	this.shape_141.setTransform(512,694.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(1,100,168,0.933)").s().p("A6jELQhvAAhOhOQg0g0gShAQgMgGgKgLQgYgYAAggQAAggAYgXQAKgLAMgGQAThBAzgzQBOhOBvAAMA1HAAAQBFAAA6AfIAAAAIAQAKQAZAPAVAWQA0A0ASBDQAMAGAKAKQAYAYAAAfQAAAhgYAXQgLAMgNAGQgSA/gyAyIguAlIgQAKQg6AfhFAAg");
	this.shape_142.setTransform(512,694.7);

	// mcRoute
	this.mcRoute = new lib.mcRoute();
	this.mcRoute.setTransform(51,135);

	// Bg
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(-8.3,-0.8);

	this.addChild(this.instance_4,this.mcRoute,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.mcLife,this.mcResult_0,this.mcResult_1,this.mcResult_2,this.mcResult_3,this.mcResult_4,this.mcCastSiTask_0,this.mcCastSiObstacle_0,this.mcCastSiObstacle_1,this.mcCastSiObstacle_2,this.mcCastSiTask_1,this.mcCastSiTask_2,this.mcCastSiTask_3,this.mcCastSiTask_4,this.mcCastSiTask_5,this.mcCastSiTask_6,this.mcCastSiTask_7,this.mcCastSiTask_8,this.mcCastSiTask_9,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.mcCastSiUser,this.instance_3,this.instance_2,this.instance_1,this.instance,this.mcCastMiEnemy_0,this.mcCastMiEnemy_1,this.mcCastMiEnemy_2,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.pbHelp,this.pbBack,this.mcSoftKey,this.mcMessages,this.mcExit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(503.7,383.2,1438,1064.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;