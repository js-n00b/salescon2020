(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
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


(lib.mcTask_Items = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// items
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.6,0.7,0,1.6,0.7,3.5).s().p("AgLAJIgBgCIgDgLQAEgDAKgKIAJgKQACAGAGAHIgRAOIgEACIADAGQADAJAIAEIgJAHQgHgIgEgLg");
	this.shape.setTransform(7,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],0,0.4,0,0,0.4,3.5).s().p("AgSAFIgDgFIAEgCIASgPIAGAGQAIAHAHADIgRALIgJAIQgJgEgFgJg");
	this.shape_1.setTransform(8.6,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],-1.3,0,0,-1.3,0,7.3).s().p("AgPAdQgDgEgJgWIgEgJQACgGAGgHQAGgIAIgFIAPAgIAOgIIABACQAEAJAHAIIgBABIgSAMIgLAGQgEADgFAAQgGAAgCgEg");
	this.shape_2.setTransform(3.6,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.6,-1.5,0,2.6,-1.5,5.2).s().p("AgDAPIgHgGQgHgHgBgEIAHgHIgDgDIAAgBIAGgDIAIgHIAAgCQAHAKAAAFQAAAFgGAFIgBAAIAAABIAAABQADAHAIAFIAIADIgDADIgHAFQgHgDgFgHg");
	this.shape_3.setTransform(9.9,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],0.6,0.2,0,0.6,0.2,5.2).s().p("AgGAeQgIgFgFgHIAAAAIAAgBIADgDQAFgFAAgFQAAgEgGgIQAEgEAEgHIACACIAGAFQAGAJAHAXIgMAOIgGgEgAgEgaIADgHIATAdQADAEgBAHIgBAEQgGgSgRgTg");
	this.shape_4.setTransform(11.8,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#CCE2D9","#667980","#17353F","#4D6B72","#8EAAA6"],[0,0.231,0.573,0.831,1],0.2,0.5,0,0.2,0.5,5.1).s().p("AgGgIIgGgGIgBgCIAEgHQARATAGATIgCADIgEAGQgIgYgGgIg");
	this.shape_5.setTransform(12.3,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.4,2.3,0,-0.4,2.3,7.3).s().p("AAAgIQgIAFgGAFQgHAIgBAFIgGgMIABgBIAOgLIAJgHQAGgEAIgDIADAIQAIARACAAIACgCIAEAOIgOAKIgPggg");
	this.shape_6.setTransform(2.8,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],0.5,0.7,0,0.5,0.7,7.6).s().p("AgLAXQgIgFgFgHIgCgDQAXgSARgOQAGANAHAIQgSAKgIAJIgJAJIgDgCg");
	this.shape_7.setTransform(-7.6,4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.2,1.5,0,2.2,1.5,7.6).s().p("AgSAdIgCgEQgKgLAAgOQAAgCA2glQABAIAFANIABACQgTAOgVASIACADQAFAHAGAFIADACIgFADQgCAEgBAAQgHAAgKgLg");
	this.shape_8.setTransform(-9.3,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],-0.5,0,0,-0.5,0,4.2).s().p("AgJAKIgJgXIAPgIIAIgEIAOAeIgJAGIgMANIgBACIgGgQg");
	this.shape_9.setTransform(0.3,5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.1,1.6,0,-1.1,1.6,4.2).s().p("AAAgIIgJAEIgQAGIgCgDQAGgFAJgEIAKgFQAHgEAJgBIADAHIAEALIAHAQQgIADgHAEIgNgdg");
	this.shape_10.setTransform(0.9,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],-1.2,4.8,0,-1.2,4.8,8.8).s().p("AgYAKIgFgIQAPgJALgGIAMgGIAIgCIAMAbIgKAFQgJAEgFAFIgEgLIgQANQgFgDgEgJg");
	this.shape_11.setTransform(-2.4,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#CCE2D9","#667980","#17353F","#4D6B72","#8EAAA6"],[0,0.231,0.573,0.831,1],0,0.6,0,0,0.6,7.4).s().p("AgWgCIAEgIQASALAHAAQAFAAAKgCIABAHIgDABQgIAEgGAAQgHAAgVgNg");
	this.shape_12.setTransform(-2.4,-5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#CCE2D9","#667980","#17353F","#4D6B72","#8EAAA6"],[0,0.231,0.573,0.831,1],0,0.1,0,0,0.1,7.5).s().p("AgUgJIAAgDIACgEIADgGQANAUAVAQIACABIgFAIQgRgPgTgRg");
	this.shape_13.setTransform(-7.1,-9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],0.8,-0.4,0,0.8,-0.4,7.5).s().p("AgiANIAIgKQAGgHAFgIIACgEIACgCIAAAEQAQARATAOIgDAGQgKAOgGADgAAfAXIgHgGIAFgHIAGAFIgEAIgAAYARIAAAAgAAdAKIgCgCQgWgPgMgUIADgJIAAgDQANAWAXASIAAAAIgDAJIAAAAg");
	this.shape_14.setTransform(-7.9,-8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.6,-3.6,0,1.6,-3.6,7.5).s().p("AgNAPQgbgRgGgBIAHgEQAGgDAGgGIABgBIAnAZQAHgDAJgMIADgFIAHAFIAAAAQgHALgKALIgBABQgIAJgHAEIgTgOgAAlgUIADgIIAHAFIgEAIIgGgFg");
	this.shape_15.setTransform(-8.7,-5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.8,0.3,0,2.8,0.3,4.9).s().p("AgSAUIgCgEQgBgEABgGIAFgOIABgCQABAGACADIADACIAIgEQAJgJAMgHQgFAJgGAIIgIAIIgCABQgEAGgFADIgHAEIgBAAIgBAAg");
	this.shape_16.setTransform(-11.7,-7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],2.3,2.2,0,2.3,2.2,4.9).s().p("AgPARQgCgEgCgGQAEgHAIgIIACgDIAFgFQAEgCAIgBQAHgBAAADIABAMIgCACIgCADQgMAGgJAIIgIAGIgCgDg");
	this.shape_17.setTransform(-11.2,-9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#CCE2D9","#667980","#17353F","#4D6B72","#8EAAA6"],[0,0.231,0.573,0.831,1],1.3,4.3,0,1.3,4.3,4.9).s().p("AAJACQAAgCgHAAQgGAAgEADIgHAEIACgDQAOgQAJAAIACAAIAFAGIAAADIgDAHIgDAGIgBADIgBgLg");
	this.shape_18.setTransform(-10.2,-11.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#CCE2D9","#667980","#17353F","#4D6B72","#8EAAA6"],[0,0.231,0.573,0.831,1],1,1.3,0,1,1.3,7.3).s().p("AgFAAIgOgJIACgDIACgJQAQARATAVIgGAFQgHgLgMgLg");
	this.shape_19.setTransform(8.8,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.7,-1.4,0,1.7,-1.4,7.3).s().p("AgPADQgGgGgLgIIAGgGIAFgGIAPAKQAHAIAKAJIAKgHIABADIAEACQgEAGgEAFIgCABIgJAHIgFADIgRgVgAAbgIIABgCIACgDIADADIgDAHIgDgFg");
	this.shape_20.setTransform(8.2,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],1.2,1.2,0,1.2,1.2,7.3).s().p("AgLALIgOgKQAFgEADgHIAOAKQAMAKAHAMIgKAJQgIgMgJgIgAASAYIgCgCIAGgGQgTgUgQgSIABgIIAGAGQAQARAQASIgDADIgBACIAEAFIgEAHIgEgEg");
	this.shape_21.setTransform(8.6,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.3,4.6,0,-1.3,4.6,8.8).s().p("AgmAGIgBgCQgFgMgBgHIAKgHIAIAFQAIADAHAAIAIgBQgMAHgOAIIAEAJQAEAJAFADIgGAEIgCACQgHgIgGgNgAAPgXIAIgCIAKgBIADAAIAKAaQgJABgJAEIgNgcg");
	this.shape_22.setTransform(-2.3,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.5,-2.4,0,1.5,-2.4,7.4).s().p("AgLAWIgIgFIgKgGIgMgIQAIgDAHgIIABgBIAHAEQAQAIAOAAIAMgDIAKgEIACgDQABgEAAgLIAAgBIADgBQACALAAAGIAAADQgBAJgCAJIgIACIgIADIgOAFIgIABQgEAAgIgDg");
	this.shape_23.setTransform(-3.8,-2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,-3.1,0,0,-3.1,9.2).s().p("AAEATQgPgLgLgBIgDAAIgJABQACgIABgLIACAAQALAAASALIAPAHIAHgHIADgEIAFAEQgDAFgFAHIgFAGIgHAGIgGgFgAAfgOIgCgBIACgIIAEAEIgBAIIgDgDg");
	this.shape_24.setTransform(3.7,-2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#CCE2D9","#667980","#17353F","#4D6B72","#8EAAA6"],[0,0.231,0.573,0.831,1],0.3,-0.6,0,0.3,-0.6,9.2).s().p("AACAAQgOgIgIgBIgCAAIAAgBIgHAEIgBgCIgBgGQALgEAEgBQARABAgAaIgFAMIgagUg");
	this.shape_25.setTransform(3.4,-4.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],0.7,-0.1,0,0.7,-0.1,7.4).s().p("AgZARIgHgFQAKgLAHgLQATAOAJAAQAGAAAIgEIADAAIgBgJQgKAEgFAAQgJAAgQgNIAEgHQAOANAHAAQAIAAAHgDIAAAAIABACIABAEIAAAAIABAGIABACIgBAAIgCABIAAAAQAAALgBAEIgCADIgLAEIgMAEQgOAAgPgJg");
	this.shape_26.setTransform(-3.1,-5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#CCCCCC","#666666","#172333","#4D5166","#8E909A"],[0,0.235,0.573,0.831,1],0.2,-0.7,0,0.2,-0.7,9.2).s().p("AACAVQgSgLgLAAIgCABIAAgDQAAgGgDgJIABgBIAHgEIABACIABAAQAJAAAOAKIAaASIgDADIgHAJIgPgJgAAbASIAEgMQgfgagRAAQgEAAgMAEIAAAAIgBgDIgBgDIAEgCQAHgFAIAAQAQAAAhAdIgCAGIACABIADADIgCAJIgCADIgFgEgAAbASIAAAAg");
	this.shape_27.setTransform(3.5,-4.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.1,1,0,-1.1,1,4.7).s().p("AAfAaQgLgCgIgDQgWgKgggYIAFgIIADgFQAiAcArANIgDAHIgDAFIgGgBg");
	this.shape_28.setTransform(-6.6,15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-2.4,0.8,0,-2.4,0.8,7.8).s().p("AAeApQgqgNgjgcQgMgLgKgMIAMgXQAqA3BVAOIgJAYQgPgCgQgEg");
	this.shape_29.setTransform(-5.3,12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1).s().p("AgFAGQgDgDAAgDQAAgCADgEQACgCADAAQADAAADACQADAEAAACQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_30.setTransform(3.6,6.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_31.setTransform(5.6,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,10.5).s().p("AgqBDIBJiNIAEADQAFADADAAIhKCPIgLgIg");
	this.shape_32.setTransform(-1.2,3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-4.8,-3,0,-4.8,-3,14.7).s().p("AAUCDQhVgOgqg6IgJgNIBjiwIACgCQBBBLBDgPIAAACIhRDLIgQgCgAgyBVIALAIIBJiPQgCAAgFgDIgEgDgAAgAlQgDADAAAEQAAAEADADQACADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgCgEAAQgEAAgCACgAAzgWQgDAEAAAEQAAAEADADQADAEAFAAQAEAAADgEQADgDAAgEQAAgEgDgEQgDgDgEAAQgFAAgDADg");
	this.shape_33.setTransform(-0.3,1.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.3).s().p("AgIAIQgDgEAAgEQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_34.setTransform(9.3,-8.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.3).s().p("AgHAIQgEgEAAgEQAAgEAEgEQADgDAEAAQAEAAAEADQAEAEAAAEQAAAEgEAEQgEAEgEAAQgEAAgDgEg");
	this.shape_35.setTransform(5.7,-10.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.5).s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgEAEAAIADAAQAEABACADQADADAAAEQAAADgCAEIgBABQgEAEgFAAQgEAAgDgEg");
	this.shape_36.setTransform(2.4,-12.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.2,2.2,0,-1.2,2.2,5.2).s().p("AAEALIgPgHQgMgFgJgKIAGgFIAGAAQAdAEAPAMQAJAHAAAGIAAABIgDABIgHACQgFAAgOgGg");
	this.shape_37.setTransform(9.1,-16.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-2.4,-2.7,0,-2.4,-2.7,10.4).s().p("AhFAAIBLg9QAJALAMAGIARAHQAOAGAFAAIAHgBIgHBbQgLADgLAAQg2AAg4g+gAAhAPQgEAEAAAFQAAAFAEAEQADAEAGAAQAFAAADgEQAEgEAAgFQAAgFgEgEQgDgDgFAAQgGAAgDADgAgCADQgDADAAAGQAAAFADADQACAEAFAAQAFAAAEgEQAEgDAAgFQAAgGgEgDQgEgDgFAAQgFAAgCADgAgigRQgEADAAAGQAAAFAEADQAEACAFAAQAFAAAEgCIABgBQACgDAAgEQAAgGgDgDQgCgDgDAAIgEgBQgFAAgEAEg");
	this.shape_38.setTransform(5.1,-11.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0.2,-0.1,0,0.2,-0.1,3.9).s().p("AAQAvQgVgKgWgUQgWgUgHgTQgHgUANgHIABgCQASgDARAHQAWAKAVAUQAWATAHAUQACAHgBAPQABABgHAFQgGADgHAAQgKAAgOgGg");
	this.shape_39.setTransform(-11.2,11.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,7.7).s().p("AAuAjQgIgUgVgTQgUgUgYgKQgRgHgRADIgCAAQAFgIAGgEIAEgEQAMgHAYAKQAWAJAWAVQAWAVAHASQAHAUgIAGQgEADgEAEIgFAGQABgPgCgHg");
	this.shape_40.setTransform(-9.9,9.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.7,0.3,0,-0.7,0.3,11.5).s().p("AA3BOQgKgEgHgGQAEgFAEgDQAIgFgHgUQgHgUgWgTQgUgVgYgKQgYgJgMAHIgDADIgDgDIgKgNQgEgHgBgFIAAgHQAAgDABgDIAEgEQAGgDAIAAQAjAAA5A/QAYAXAQAZQAQAZAAAMQAAAGgDAEIgCACQgFAFgGAAQgDAAgKgFg");
	this.shape_41.setTransform(-8.5,8.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.7,-4.5,0,-1.7,-4.5,11.4).s().p("ABKBPQAAgMgRgaQgQgYgXgXQg5hAgkABQgIgBgFADIAUgUQAuASAmAiQAKAIAJALQAcAeAaA4IgSASQADgEAAgFg");
	this.shape_42.setTransform(-7.5,7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.1).s().p("AgGAHQgEgDABgEQgBgDAEgDQADgDADgBQAFABADADQACADAAADQAAAEgCADQgDAEgFAAQgDAAgDgEg");
	this.shape_43.setTransform(-4.6,-2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.1).s().p("AgHAHQgCgDAAgEQAAgEACgCQAEgDADgBQADABAEADQADACAAAEQAAAEgDADQgEADgDABQgDgBgEgDg");
	this.shape_44.setTransform(-1,-6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.5).s().p("AgQARQgIgHABgKQgBgJAIgIQAHgGAJAAQAJAAAIAGQAIAIgBAJQABAKgIAHQgIAHgJAAQgJAAgHgHg");
	this.shape_45.setTransform(1.5,6.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-2.1,-4.8,0,-2.3,-4.8,17.3).s().p("AgoBTQgogigugSICIiEQAZAGAWAKQAqARAbAcIiTCOQgJgLgKgIgAhQAcIAGADIAWAMQAQAKALAKIADACIB0hxQgdgZgkgHg");
	this.shape_46.setTransform(-1.7,-5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.6,-0.9,0,-0.6,-0.9,9).s().p("AguARIBHhCQAQANAGAXIhFA/QgIgSgQgPg");
	this.shape_47.setTransform(8.1,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0.7,-1.8,0,0.7,-1.8,15.7).s().p("AhgAcICUiOQAWAWANAfQAGAQAEARIiLCQQgZg4gdgggAg7AXQgHAIAAAKQAAALAHAHQAIAHAKAAQAKAAAHgHQAIgHAAgLQAAgKgIgIQgHgGgKAAQgKAAgIAGgAgXgCQAQANAHASIBFg/QgFgXgQgNg");
	this.shape_48.setTransform(5.8,2.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.1).s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAAEADQADADAAADQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_49.setTransform(2,-9.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,9.9).s().p("AgfBHQgMgKgPgKIgXgMIgFgDIBthsQAjAHAdAZIh0BxIgCgCgAgpAXQgEADAAAEQAAAFAEADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgEgFAAQgEAAgDAEgAgHgKQgCADAAAFQAAADACADQAEADADAAQAEAAADgDQAEgDAAgDQAAgFgEgDQgDgDgEAAQgDAAgEADgAAXgpQgEADAAAEQAAAFAEADQADADAFAAQAEAAAEgDQACgDAAgFQAAgEgCgDQgEgEgEAAQgFAAgDAEg");
	this.shape_50.setTransform(-1,-5.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.4,-1.8,0,-0.4,-1.8,7.6).s().p("AAEAKQgZgagrgRIAHgGIAZgWIABAAQALgDAUAMQARALATAWQATAUAGAQQAHAQgFACIgYAcQgNgegWgXg");
	this.shape_51.setTransform(10.6,-10.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.2).s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADABACQgBADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_52.setTransform(4.1,12.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,5.2).s().p("AghAgIgEgEQAYgLARgRQAQgQAKgTQACAHAFABQAFACghAiQghAbgEAAQgCAAgDgEg");
	this.shape_53.setTransform(10.4,11.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.2).s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_54.setTransform(13.4,2.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.2,-0.3,0,-0.2,-0.3,1.2).s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACABQADgBACADQADADAAACQAAADgDADQgCADgDAAQgCAAgDgDg");
	this.shape_55.setTransform(-3.3,4.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.2).s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_56.setTransform(-4,-6.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.2).s().p("AgFAGIgBgCIgBgEQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_57.setTransform(-10.7,-0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.1,-0.6,0,-0.1,-0.6,8.8).s().p("AhCAsQAAgGAGgLIALgSQAOgVANgNQAOgNAVgJIAagKIAGgCQAJgBAEABQAAACAGAFIADADQgwAGgiAkQgfAcgIAoQgMgQAAgBg");
	this.shape_58.setTransform(-8.2,-8.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,6.8).s().p("Ag1AgQAAgNALgMQAHgHAWgUQAIgIAWgKQATgHAHgBIAAABIALAIIgaAKQgXAJgMANQgNALgOAWIgLATIgIgPg");
	this.shape_59.setTransform(-9.7,-10.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.2).s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_60.setTransform(7.1,-3.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1,1.3,0,1,1.3,15.6).s().p("AhkAJIgEgEQBYhNAmghIAIAHQATARAaAaIAeAeQgDAegOAbQgKASgQAQQgUAUgXALQgOAGgNADIhchhgAgLBJQgCADAAAEQAAADACADQADACAEAAQADAAABgCQADgDAAgDQAAgEgDgDQgBgCgDAAQgEAAgDACgAhVgBQgCABAAADQAAAEACACQADADAEAAQADAAADgDQADgCAAgEQAAgDgDgBQgDgDgDAAQgEAAgDADgABQgZQgCACAAAEQAAAEACACQADADAEAAQADAAADgDQACgCAAgEQAAgEgCgCQgDgDgDAAQgEAAgDADgAARhXQgCACAAAEQAAAEACACQADADADAAQAEAAACgDQADgCAAgEQAAgEgDgCQgCgDgEAAQgDAAgDADg");
	this.shape_61.setTransform(4.7,4.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,1.2).s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_62.setTransform(3.6,-11.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.4,-1.3,0,-0.4,-1.3,18.2).s().p("AhwA8IACgGQASgoAlghQArgpA2gdIAdgNQAWAGAUAOQgqARgYALQgqAVgiAhQgYAWgNAQQgVAcgJAfIgCAGQgLgVgDgWgAhVAXQgCACAAAEIABAFIABABQADADAEAAQADAAADgDQACgCAAgEQAAgEgCgCQgDgDgDAAQgEAAgDADgAgSgpQgCADAAADQAAAEACADQADACADAAQAEAAADgCQACgDAAgEQAAgDgCgDQgDgCgEgBQgDABgDACgAA4hWQgDADAAAEQAAADADADQADADADgBQAEABACgDQADgDAAgDQAAgEgDgDQgCgCgEAAQgDAAgDACg");
	this.shape_63.setTransform(-2.7,-3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.2,1.8,0,2.2,1.8,17.2).s().p("AhmBnQgSgSgKgUIACgHQAJgeAVgcQANgPAYgXQAkghAogVQAYgMAqgRQALAIALALQArArAAA7IAAAKIgegcQgagagTgRIgHgHQgpAhhVBNIADAEIBaBhQgPADgQAAQg7AAgrgrgAiRAAQAAgQADgQQAJgoAfgeQAkgkAwgGIASgBQAUAAATAFIgdANQg2AdgrAoQglAkgSAmIgCAFQgBgKAAgLg");
	this.shape_64.setTransform(0.5,0.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,0.2).s().p("AAAABIAAgBIAAABg");
	this.shape_65.setTransform(-11.5,7.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.1).s().p("AgMANQgGgFAAgIQAAgGAGgGQAGgGAGAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_66.setTransform(-9,5.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.1).s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_67.setTransform(-9.5,-9.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0.5,-1.1,0,0.5,-1.1,12.5).s().p("AhYAKIghgjIDdAPIAVAkg");
	this.shape_68.setTransform(0.8,10.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.2).s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgGAHAAQAHAAAGAGQAGAFAAAHQAAAFgDAEIgDAEQgGAGgHAAQgHAAgFgGg");
	this.shape_69.setTransform(7.8,6.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.2,-2.4,0,1.2,-2.4,12.3).s().p("AAIB5IgUgmIAGjMIATAvIgDDEg");
	this.shape_70.setTransform(12.2,0.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.1,2.5,0,1.1,2.5,10.3).s().p("Ag2A1QgXgWAAgfQAAgeAXgWQAXgWAfAAQAgAAAXAWQAXAWAAAeQAAAfgXAWQgXAWggAAQgfAAgXgWg");
	this.shape_71.setTransform(-1,-1.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.2).s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAFgDAEIgDAEQgFAGgIAAQgHAAgFgGg");
	this.shape_72.setTransform(8.4,-8.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,16.8).s().p("AhmBgIgCgCIgTjMID3ARIgGDMgABKBDQgFAFAAAIQAAAIAFAGQAGAGAIgBQAIABAGgGIADgFQACgEAAgFQAAgIgFgFQgGgGgIAAQgIAAgGAGgAhcA7QgGAFAAAIQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgIgFgFQgGgGgIAAQgIAAgFAGgAg2guQgXAXAAAdQAAAfAXAWQAXAXAfgBQAgABAXgXQAYgWAAgfQAAgdgYgXQgXgWggABQgfgBgXAWgABQhPQgFAGAAAIQAAAIAFAFQAGAGAIAAQAIAAAGgGIADgEQACgEAAgFQAAgIgFgGQgGgFgIAAQgIAAgGAFgAhhhZQgGAGAAAIQAAAIAGAFQAFAGAJAAQAIAAAFgGQAGgFAAgIQAAgIgGgGQgFgGgIABQgJgBgFAGg");
	this.shape_73.setTransform(-1,-1.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.6,-4.5,0,2.6,-4.5,8).s().p("AAaBHQgbgLgdgdQgdgdgLgcQgLgdANgNQANgNAdALQAcALAdAdQAdAdALAbQALAegNANQgHAHgMAAQgKAAgOgFg");
	this.shape_74.setTransform(-3.7,3.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,16.9).s().p("AAiCFQg1gOgxgxQgygxgOg2QgOg3AdgdQAKgLAOgEIAegFQAOABAQAEQA1APAyAxQAxAxAOA1QAIAfgFAXQgFASgNANQgTATgfAAQgQAAgSgFgAhEhBQgOANAMAdQALAcAcAcQAdAeAcAKQAdALANgNQAOgNgMgdQgKgdgegcQgcgcgcgLQgOgFgKAAQgLAAgHAHg");
	this.shape_75.setTransform(-3.7,2.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,15.7).s().p("ABUBBQgOg3gxgwQgvgxg4gOQgQgFgOAAIBTgMIABABQBgAvAtBfIgaBeQAGgXgJgfg");
	this.shape_76.setTransform(1.2,-0.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1.7,-2.8,0,1.7,-2.8,15.8).s().p("AhegwIAtguQB0AqAdBnIgyArQgshfhggvg");
	this.shape_77.setTransform(7.9,-7.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.7,0.5,0,-0.7,0.5,3).s().p("AAAADIgSgVIAHAAIAEABIALARIAPAQIAAABIgHACIgMgQg");
	this.shape_78.setTransform(-18.7,11.3,0.8,0.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],1,-2.1,0,1,-2.1,6.1).s().p("AgYAWIgDgBIgIAAIAAgCIAjgXQAWgRACABIAGABIAGACQgDABgVAPQgYAQgMAHg");
	this.shape_79.setTransform(-17.4,8,0.8,0.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.5,-0.3,0,-0.5,-0.3,2.1).s().p("AAAAIIgBgIQgBgGgDgDIgFgGIASABIAAAAIADAWQAAAEgGACIgEACIgBgIg");
	this.shape_80.setTransform(-11.8,5.4,0.8,0.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],3,3.6,0,3,3.6,12).s().p("Ag9A1QgCgDAAgFIgBgGIAAgBIABgEIAAgCIADgEIABgBQAGgIAMgOQAagbASgPQAQgNARgEQAIgDAGABIAIAAIADABQAEABAAAFQAAABgKANQgLANgFAEIAKAFQADABAAAEQgBADgCADQgDACAAADIAEAEIADAEQgBAJgyAUIgwARQgKAAgFgEg");
	this.shape_81.setTransform(5,5.5,0.8,0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.9,-1.6,0,-0.9,-1.6,8.7).s().p("Ag+AQIABgKQABghAOgLQAPgNAfgBIAIAAQAYAAAMAFQAPAFAEAEIgIAAQgFgBgJADQgQAEgRANQgSAPgZAbQgNANgGAJIgBABIgDAEIAAABIgBACIgDglg");
	this.shape_82.setTransform(4.6,4,0.8,0.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.9,-0.3,0,-1.9,-0.3,11.7).s().p("AhVANIABAAIA0gbQAygcAggWIAkBOIgVAIQgQAHgHAFIgHAAIAAgDIACgFIAAgGIgGAFQgFAEgCAAIgEgDQgDgDgCAAQgJAAgKAHQgKAGAAAFIABAGIACAGQAAAKgQAAIgMABIgQABg");
	this.shape_83.setTransform(13.4,-7.5,0.8,0.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.3,-0.5,0,-0.3,-0.5,2.4).s().p("AgEALIgFgDIgJgGIAIgCIAXgMIAGALIgWAOIgBgCg");
	this.shape_84.setTransform(5.5,-3.6,0.8,0.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.1,0.2,0,-0.1,0.2,3.7).s().p("AAFAXIgFgPIgGgJIgOgaIANAEIAAABIAcAyg");
	this.shape_85.setTransform(7.2,-4.5,0.8,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1,-1,0,-1,-1,2.3).s().p("AgOADIAKgEIALgKIAIAJIgXAOIgGgJg");
	this.shape_86.setTransform(-6,3.2,0.8,0.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0.6,1.7,0,0.6,1.7,7.1).s().p("AgzAuIgBgBIgBgBQgDgFAAgJQAAgaAegZQAcgcAgAAQAFAAAFACIAGAEIABABQAGAGAAALQAAADgFAIIAAABIgKAAQggAAgNANQgNAKgCAjIgGADQgFACgIAAQgKAAgEgEg");
	this.shape_87.setTransform(1.1,0.9,0.8,0.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-5.4,3.3,0,-5.4,3.3,14.8).s().p("Ag9AmIgMgDIgBAAIAJgGQAVgNAYgMQAVgJAXgNIAhgVIAIABIAKAAIgBABQggAVgyAbIg0Acg");
	this.shape_88.setTransform(11.5,-9.6,0.8,0.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-1.8,0.1,0,-1.8,0.1,10.2).s().p("AgjA4IgIgJIgkgmQABgTAIgRQAJgUAUgMQARgLAYgEIBDAxIAFADIAJAGQgGgCgFAAQggAAgeAaQgcAbAAAaQAAAJAEAFg");
	this.shape_89.setTransform(-1.8,-1.6,0.8,0.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],4.8,-2.1,0,4.8,-2.1,15.1).s().p("Ag/BBIgPgSIgNgRIABAAQAMgGAZgTQAVgNAEAAIAAAAIAAAAIADACIADACIAHgCIAIgDQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABQAAAEADAAIAFgDIAEgCQAGgCAAgFIgDgYIABAAIARgNIARgNIABAAIABgBIAMATIAGAJIAHAKIATAZIgfAVQgPAKgRAKQgTALgEAAIgHgCIgJgCQgDAAgBAFIAAANIgFAAIgCgBIgFgBIgIABIgGABQgDAAgBgFQgCgHgDgCIgHAHQgGAGgBADg");
	this.shape_90.setTransform(-12,7.3,0.8,0.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.8,-1.5,0,-0.8,-1.5,3.8).s().p("AgGANIgUgBIgBAAIABgBIArgXIALABIgRALIgQANIgBAAg");
	this.shape_91.setTransform(-10.6,3.1,0.8,0.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-0.1,-1.4,0,-0.1,-1.4,2.7).s().p("AgPAKQgEgGAAgEQAAgJAJgGQAHgFAEAAQAEAAADACIAMAIQgTALgHAUIgJgLg");
	this.shape_92.setTransform(-6.9,-5.5,0.8,0.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,20.3).s().p("AiPg+ICphVIB2DZIitBOg");
	this.shape_93.setTransform(15.5,-1.4,0.333,0.333);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,1.9,0,0,1.9,21.3).s().p("AAhB3QgHgegCgHQgFAAgTAOQgUAOgFAAQgLAAgFgQQgGgSADgeIg+AXIg1hjIDNhmIByDSIh8A3IgDgOg");
	this.shape_94.setTransform(9.1,0.9,0.333,0.333);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.9,0.2,0,2.9,0.2,22.2).s().p("AiOgjIDph0IA0BlQg8AVg+ASQgZAKgLAMQgLAOAAAZQAAAEAOAMQANALAAAHIgEA5IgZALg");
	this.shape_95.setTransform(0.7,4.9,0.333,0.333);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,20.5).s().p("Ag1CBIhjipIC/hfIByC7Ii8BUg");
	this.shape_96.setTransform(-5.4,8.3,0.333,0.333);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,18.3).s().p("AiRgkIC8hgIBnCpIjABgg");
	this.shape_97.setTransform(-8.9,2.5,0.333,0.333);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,23.5).s().p("AingWID0h7IBbCvIjpB0g");
	this.shape_98.setTransform(-1.8,-1.2,0.333,0.333);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0.1,-0.8,0,-0.8,-0.3,23.4).s().p("AiEgsICphVIAAAAIBgCuIiqBVg");
	this.shape_99.setTransform(11.9,-7.9,0.333,0.333);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,22.1).s().p("AiTgkIDIhmIBfCvIjMBmg");
	this.shape_100.setTransform(5.7,-4.8,0.333,0.333);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-2.7,-6,0,-3.1,-6,15.1).s().p("AhvAoIgDgFICshUIA5AMIixBXg");
	this.shape_101.setTransform(-16.5,6.6,0.333,0.333);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],2.8,6.4,0,2.8,6.4,21.9).s().p("Ah0AAICxhYIAFgDIAyBbIgiATIiQBJg");
	this.shape_102.setTransform(-14.7,8.3,0.333,0.333);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-2,1.9,0,-2,1.9,7.4).s().p("AAAApIgyhbIAxAKIA0Bbg");
	this.shape_103.setTransform(-18.5,9.7,0.333,0.333);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-6.5,-12.4,0,-6.5,-12.4,37.3).s().p("AA2CNIguhHIAjgUIgwhaIgFADIg5gMIhSiAIBnAQIBhCpIBjCqg");
	this.shape_104.setTransform(-12.2,6.6,0.333,0.333);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],19.7,-8.5,0,19.7,-8.5,71.4).s().p("AnCDDIgJgCIM2mSIBhAQIirBWIjKBlIj0B5Ii+Bfg");
	this.shape_105.setTransform(-2.2,-5.8,0.333,0.333);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],5.8,-13.6,0,5.8,-13.6,79.3).s().p("ACMGHIjbgiQgfgGgjgVQghgUgegdQgggfiCiUIiqi/QB5hXCChmQCRhyA8g6QAdA9A0B+QA+CYAWAaQAJAMC8BNQCcBCBrA5QhaC+gfBHIgaA/QhpghiVgbgAGVB1QgNANAAASQAAASANAMQANANASAAQASAAAMgNQANgMAAgSQAAgSgNgNQgMgNgSAAQgSAAgNANgAnGhmQgMANAAASQAAASAMAMQANANASAAQASAAANgNQANgMAAgSQAAgSgNgNQgNgNgSAAQgSAAgNANg");
	this.shape_106.setTransform(0,0,0.348,0.348);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,4.6).s().p("AgeAeQgMgNAAgRQAAgQAMgNQANgNARAAQASAAAMANQANANAAAQQAAARgNANQgMANgSAAQgRAAgNgNg");
	this.shape_107.setTransform(15.2,5.2,0.348,0.348);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,4.6).s().p("AgeAeQgMgMAAgSQAAgRAMgNQAOgMAQAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgQAAgOgNg");
	this.shape_108.setTransform(-14.7,-2.5,0.348,0.348);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.9).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_109.setTransform(-8.3,7.6,0.8,0.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.9).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_110.setTransform(7.9,2.8,0.8,0.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.9).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_111.setTransform(-0.8,6.3,0.8,0.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,2.9).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_112.setTransform(10.8,-3.9,0.8,0.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],0,0,0,0,0,27.7).s().p("Ai3BHIgZghICLgMQBAgGAmgGQA1hfAfhCQAUAOAjAWIAlAXQgXA3gfBBIgnBVQi8AZg+AGQgUgmgdgngAh7BIQgHAIgBALQABAMAHAIQAJAIALAAQALAAAJgIQAHgIABgMQgBgLgHgIQgJgIgLAAQgLAAgJAIgAgcA3QgIAIAAAMQAAALAIAIQAIAIALAAQAKAAAIgIQAIgIAAgLQAAgMgIgIQgIgIgKAAQgLAAgIAIgABOALQgIAIAAALQAAAMAIAIQAIAIAMAAQALAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgLAAQgMAAgIAIgABzhHQgJAIAAAMQAAALAJAIQAHAIAMAAQALAAAIgIQAJgIgBgLQABgMgJgIQgIgIgLAAQgMAAgHAIg");
	this.shape_113.setTransform(0,0.3,0.8,0.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#B4CCCC","#4D566D","#170015","#3A5166","#6B909A"],[0,0.235,0.573,0.831,1],-2.8,-8.2,0,-2.8,-8.2,24.1).s().p("AiPA9IC6gVIBMiIIAmACIAGAFQggBCg1BfQgoAGg9AGIiLANQAFgLAOgZg");
	this.shape_114.setTransform(-3.6,-4.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).wait(1));

	// bg
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.004)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AA3gHQgGAHgTACQgFABgGABQgEABgEABQgLABgOABQgCAAgCAAQgCAAgCAAQgWgBgJgCIgBAA");
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
	this.shape_5.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.3,-3,0,1.3,-3,16.2).s().p("AhJB3QgigHgIgJIgNgPQgGgIgHgKQgIgMgEgPQgGgQABgOQAAgKACgOQADgTAFgJIADgGIABABIAMAcQAAAFACAGQACAFACAAQAFAAAoghIA+gyQgBgDgIgIQgLgKgTgNIgHgDQAJgDANgBIAZgBQAhAAARAGIAJACQAYAJAlAUQAPAKATAYQATAZAEAVQgEABgEACQgHAEAAAFQAAAEAEADIAGAFQgEALgFAPQgHAOgWAXQgVAVgcANIgMAEIgDABQgLADgNACQgUADgXgBQgaAAgggGgAgBBbIgLAJIAKASIAFgNIAFgOIAEAAIAGADIAAAAQAGADAFAFQAKAMADACIABgBQgFgKgGgHQgGgGgJgDQgIgDgJABQgIAAgCACIgEAIIACACIAJgIgAAoBYIgCgJQgGgUgBgTIAMABIADAAIAKgBQAHgBAGgEQAHgDAGgFQAKgIADgHIABgBIgBgBIAAgBIADAAIgCAAIADgCIgDgBIABgCIgcgNIgRgJIgNgIIAIgTIAGACQAgAKAGAAQAEAAAAgCQACgDgFgBQgUgNgHgIIgHgHIgBgBQgQgQgGgJIAAAEIABALQAAAIgEAAIgHgCIgIgBIgEAAQADADAGADIAGAEIABAAIgUAAQAHAHAXAIIgHAHIgEAGQgcgbgJgPQgHgDgFAJIgHARQgCAMgJARQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIABAAIgBAHQABAKADAGIAFAJIAGAIQAEAKAFABIgEgJQAIAGAJAGIANAFIACABIADARQADAPANANIAGAGIAAAAgAghAnQgJgSgHgFQgFgJAAgHQAAgFAEgHIAAABQAAALAFALQAHAMAIADIABgBQgKgGgFgMQAGAMAIACQgRgRABgXIgBAAIgBAIIAAAEIgBgGIgBAAQgGAHAAALQABAHAGAIIANARIAAAAIADACIAAAAg");
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
	this.shape_17.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.3,-3,0,1.3,-3,16.2).s().p("AhJB3QgigHgIgJIgNgPQgGgIgHgKQgIgMgEgPQgGgQABgOQAAgKACgOQADgTAFgJIADgGIABABIAMAcQAAAFACAGQACAFACAAQAFAAAoghIA+gyQgBgDgIgIQgLgKgTgNIgHgDQAJgDANgBIAZgBQAhAAARAGIAJACQAYAJAlAUQAPAKATAYQATAZAEAVQgEABgEACQgHAEAAAFQAAAEAEADIAGAFQgEALgFAPQgHAOgWAXQgVAVgcANIgMAEIgDABQgLADgNACQgUADgXgBQgaAAgggGgAgBBbIgLAJIAKASIAFgNIAFgOIAEAAIAGADIAAAAQAGADAFAFQAKAMADACIABgBQgFgKgGgHQgGgGgJgDQgIgDgJABQgIAAgCACIgEAIIACACIAJgIgAAAAfIANAFIACABIADARQADAPANANIAGAGIgCgJQgGgUgBgTIAMABIADAAIAKgBQAHgBAGgEQAHgDAGgFQAKgIADgHIABgBIgBgBIAAgBIADAAIgCAAIADgCIgDgBIABgCIgcgNIgRgJIgNgIIAIgTIAGACQAgAKAGAAQAEAAAAgCQACgDgFgBQgUgNgHgIIgHgHIgBgBQgQgQgGgJIAAAEIABALQAAAIgEAAIgHgCIgIgBIgEAAQADADAGADIAGAEIABAAIgUAAQAHAHAXAIIgHAHIgEAGQgcgbgJgPQgHgDgFAJIgHARQgCAMgJARQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIABAAIgBAHQABAKADAGIAFAJIAGAIQAEAKAFABIgEgJQAIAGAJAGgAghAnQgJgSgHgFQgFgJAAgHQAAgFAEgHIAAABQAAALAFALQAHAMAIADIABgBQgKgGgFgMQAGAMAIACQgRgRABgXIgBAAIgBAIIAAAEIgBgGIgBAAQgGAHAAALQABAHAGAIIANARIAAAAIADACIAAAAg");
	this.shape_17.setTransform(12.1,-1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],1.2,-0.1,0,1.2,-0.1,4.3).s().p("AgDAqIgNgVQgGgLgGgOQgGgQAAgFQAAgTAcAAQAMAAAGAKQAHAKAFAcQAFAeAFAGQAFAFgeAAQgJAAgDgDg");
	this.shape_18.setTransform(-11.4,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],-2,-0.6,0,-2,-0.6,4.4).s().p("AgjAqIAKgeQAKgeABgUIAJgFQAEgDAJAAIACAAIgBgBQABgBAMADQAOAEABAKQAAAGgJARQgIAPgKAOIgOAWQgEAFgMAAQgPAAAAgGg");
	this.shape_19.setTransform(2.2,14.7,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#A55B19","#5D432E","#313131"],[0,0.506,1],0.5,0.9,0,0.5,0.9,4.3).s().p("AgmAWQgEgKACgEIAQgRIAUgVQALgLAFgCQASgGAKAaQAEANgHAJQgHAIgaAPQgZAPgDAHIgCABQgEAAgIgXg");
	this.shape_20.setTransform(-14.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:9.1}},{t:this.shape_13,p:{regY:-0.3,skewX:0,skewY:180,x:2.2,y:16.5}},{t:this.shape_12,p:{y:2}},{t:this.shape_11,p:{y:-8.3}},{t:this.shape_10,p:{y:-3.5}},{t:this.shape_9,p:{y:2.1}},{t:this.shape_8,p:{y:-0.8}},{t:this.shape_7,p:{y:9.4}},{t:this.shape_6,p:{y:-7.9}},{t:this.shape_5},{t:this.shape_4,p:{y:-15.6}},{t:this.shape_3,p:{y:-0.4}},{t:this.shape_2,p:{y:-0.2}},{t:this.shape_1,p:{y:1.1}},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_14,p:{y:8}},{t:this.shape_12,p:{y:0.9}},{t:this.shape_18},{t:this.shape_13,p:{regY:-4.2,skewX:47.7,skewY:-132.3,x:3.4,y:12.4}},{t:this.shape_11,p:{y:-9.4}},{t:this.shape_10,p:{y:-4.6}},{t:this.shape_9,p:{y:1}},{t:this.shape_8,p:{y:-1.9}},{t:this.shape_7,p:{y:8.3}},{t:this.shape_6,p:{y:-9}},{t:this.shape_17,p:{y:-1.9}},{t:this.shape_4,p:{y:-16.7}},{t:this.shape_3,p:{y:-1.5}},{t:this.shape_2,p:{y:-1.3}},{t:this.shape_1,p:{y:0}}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{y:9.1}},{t:this.shape_13,p:{regY:-0.3,skewX:0,skewY:180,x:2.2,y:16.5}},{t:this.shape_12,p:{y:2}},{t:this.shape},{t:this.shape_11,p:{y:-8.3}},{t:this.shape_10,p:{y:-3.5}},{t:this.shape_9,p:{y:2.1}},{t:this.shape_8,p:{y:-0.8}},{t:this.shape_7,p:{y:9.4}},{t:this.shape_6,p:{y:-7.9}},{t:this.shape_17,p:{y:-0.8}},{t:this.shape_4,p:{y:-15.6}},{t:this.shape_3,p:{y:-0.4}},{t:this.shape_2,p:{y:-0.2}},{t:this.shape_1,p:{y:1.1}}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_14,p:{y:8}},{t:this.shape_12,p:{y:0.9}},{t:this.shape_18},{t:this.shape_13,p:{regY:-4.2,skewX:47.7,skewY:-132.3,x:3.4,y:12.4}},{t:this.shape_11,p:{y:-9.4}},{t:this.shape_10,p:{y:-4.6}},{t:this.shape_9,p:{y:1}},{t:this.shape_8,p:{y:-1.9}},{t:this.shape_7,p:{y:8.3}},{t:this.shape_6,p:{y:-9}},{t:this.shape_17,p:{y:-1.9}},{t:this.shape_4,p:{y:-16.7}},{t:this.shape_3,p:{y:-1.5}},{t:this.shape_2,p:{y:-1.3}},{t:this.shape_1,p:{y:0}}]},2).wait(2));

	// shadow
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.533)").s().p("AioArQhGgSAAgZQAAgYBGgTQBGgQBigBQBjABBGAQQBGATAAAYQAAAZhGASQhGAShjAAQhiAAhGgSg");
	this.shape_21.setTransform(1.9,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.533)").s().p("AibArQhAgSAAgZQAAgYBAgTQBAgQBbgBQBbABBBAQQBAATAAAYQAAAZhAASQhBAShbAAQhbAAhAgSg");
	this.shape_22.setTransform(2.5,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).wait(2));

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
	this.shape_2.graphics.rf(["#DBBB3E","#AE6637","#733F0D","#88511A"],[0,0.224,0.604,1],-6.5,-12.9,0,-6.5,-12.9,34).s().p("AhfCaIgBAAIAAgKICXh6IADgDIAEgDIADgEQAbgZAAglQAAgngegcQgegcgoAAQgqAAgeAcQgJAIgGAJIAAgGIABAAQAGgJAJgJQAegeAsAAQApAAAeAeQAfAdAAArQAAAngbAbIgEAEIgEAEIgDADIiaCCg");
	this.shape_2.setTransform(34.5,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#DBBB3E","#AE6637","#733F0D","#88511A"],[0,0.224,0.604,1],-277.6,-251.5,0,-277.6,-251.5,422.2).s().p("AAAADIAAgFIAAABIAAAEg");
	this.shape_3.setTransform(24.9,-10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FEB4B4","#FF0000","#770F0F","#D01E1E"],[0,0.369,0.886,1],5,-12,0,5,-12,26.1).s().p("AAACQIiWh5IgDgDIgEgDIgEgEQgagZAAglQAAgnAegcQAdgcAqAAQArAAAdAcQAJAIAFAJIAAAAQAGgJAIgIQAegcArAAQAqAAAeAcQAdAcAAAnQAAAlgaAZIgDAEIgFADIgDADIiXB6g");
	this.shape_4.setTransform(24.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFF9C4","#FDE724","#D77717","#FDE40B"],[0.039,0.224,0.604,1],7.1,-15.2,0,7.1,-15.2,34).s().p("ABoCsIiniQIgDgEIgFgEIgDgEQgegeAAgsQAAgwAhghQAighAtAAQAvAAAhAhQAKAKAHALIAAANQgGgJgJgIQgegegsgBQgpABgeAeQgfAdAAArQAAAnAbAbIAEAEIAEADIADAEICYCBIABAAIAAABIAAAQIgBAAg");
	this.shape_5.setTransform(14.3,-0.4);

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
	this.shape.graphics.f("#000000").s().p("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oQgMgHgHgLQgHgMAAgNQAAgOAHgLQAHgMAMgGQAMgHAPAAQAQAAAMAHQAMAGAHAMQAGALABAPQgBANgGALQgHALgMAHQgLAGgQAAQgPAAgNgGgApFggQgIAEgEAIQgEAHgBAKQABAJAEAIQAFAIAIAEQAIAFALAAQAKAAAIgFQAIgEAEgIQAFgIAAgIQAAgKgFgIQgFgIgIgEQgIgEgLAAQgKAAgIAEgAu5AoQgMgHgHgLQgHgMAAgNQAAgOAHgLQAHgMAMgGQAMgHAPAAQAQAAAMAHQAMAGAHAMQAGALABAPQgBANgGALQgHALgMAHQgLAGgQAAQgPAAgNgGgAuxggQgIAEgEAIQgEAHgBAKQABAJAEAIQAFAIAIAEQAIAFALAAQAKAAAIgFQAIgEAEgIQAFgIAAgIQAAgKgFgIQgFgIgIgEQgIgEgLAAQgKAAgIAEgA9LAoQgNgHgHgLQgHgMAAgNQAAgOAHgLQAHgMANgGQAMgHAPAAQAPAAAMAHQAMAGAHAMQAHALAAAPQAAANgHALQgGALgMAHQgMAGgPAAQgQAAgMgGgA9EggQgHAEgFAIQgEAHAAAKQAAAJAFAIQAEAIAJAEQAIAFALAAQAKAAAIgFQAHgEAFgIQAEgIAAgIQAAgKgFgIQgEgIgJgEQgIgEgKAAQgLAAgIAEgAcwhMIAAgWIASAAIAAAWgALphMIAAgWIASAAIAAAWg");
	this.shape.setTransform(511.7,303.4);

	this.instance = new lib.star("single",1);
	this.instance.setTransform(441.8,413.2,1.211,1.211,0,0,0,25.9,22.9);

	this.instance_1 = new lib.star("single",1);
	this.instance_1.setTransform(513.6,413.2,1.211,1.211,0,0,0,26.2,22.9);

	this.instance_2 = new lib.star("single",1);
	this.instance_2.setTransform(584.6,413.2,1.211,1.211,0,0,0,25.7,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(511.7,303.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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MAGgPAAQgQAAgMgGgEAgbgAgQgHAEgFAIQgEAHAAAKQAAAJAFAIQAEAIAJAEQAIAFALAAQAKAAAIgFQAHgEAFgIQAEgIAAgIQAAgKgFgIQgEgIgJgEQgIgEgKAAQgLAAgIAEgAXMAoQgNgHgHgLQgHgMAAgNQAAgOAHgLQAHgMANgGQAMgHAPAAQAPAAAMAHQAMAGAHAMQAHALAAAPQAAANgHALQgGALgMAHQgMAGgPAAQgQAAgMgGgAXTggQgHAEgFAIQgEAHAAAKQAAAJAFAIQAEAIAJAEQAIAFALAAQAKAAAIgFQAHgEAFgIQAEgIAAgIQAAgKgFgIQgEgIgJgEQgIgEgKAAQgLAAgIAEgALJAoQgNgHgHgLQgHgMAAgNQAAgOAHgLQAHgMANgGQAMgHAPAAQAPAAAMAHQAMAGAHAMQAHALAAAPQAAANgHALQgGALgMAHQgMAGgPAAQgQAAgMgGgALQggQgHAEgFAIQgEAHAAAKQAAAJAFAIQAEAIAJAEQAIAFALAAQAKAAAIgFQAHgEAFgIQAEgIAAgIQAAgKgFgIQgEgIgJgEQgIgEgKAAQgLAAgIAEgAzPAoQgNgHgHgLQgHgMAAgNQAAgOAHgLQAHgMANgGQAMgHAPAAQAPAAAMAHQAMAGAHAMQAHALAAAPQAAANgHALQgGALgMAHQgMAGgPAAQgQAAgMgGgAzIggQgHAEgFAIQgEAHAAAKQAAAJAFAIQAEAIAJAEQAIAFALAAQAKAAAIgFQAHgEAFgIQAEgIAAgIQAAgKgFgIQgEgIgJgEQgIgEgKAAQgLAAgIAEgEgi5AAoQgMgHgHgLQgHgMAAgNQAAgOAHgLQAHgMAMgGQAMgHAPAAQAQAAAMAHQAMAGAHAMQAGALABAPQgBANgGALQgHALgMAHQgLAGgQAAQgPAAgNgGgEgixgAgQgIAEgEAIQgEAHgBAKQABAJAEAIQAFAIAIAEQAIAFALAAQAKAAAIgFQAIgEAEgIQAFgIAAgIQAAgKgFgIQgFgIgIgEQgIgEgLAAQgKAAgIAEgAmJADIAAhlIASAAIAABlgAGZhMIAAgWIASAAIAAAWg");
	this.shape_2.setTransform(511.7,303.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(511.6,303.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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AASIhYAAQABAIAFAGQAFAHAIAEQAHAEAKAAQAIAAAHgDQAHgEAFgGIAWAAQgFAJgIAGQgIAGgJAEQgJADgKAAQgPAAgNgHgEgrDAC1QgEgMgJgGQgJgHgNAAQgNAAgJAHQgJAGgEAMIBGAAIAAAAgEgtBADxIAAiSIASAAIAACSgEgumADqQgMgGgHgMQgHgLAAgPQAAgOAHgMQAHgLAMgGQAMgHAPAAQAPAAAMAGQAMAHAHANQAHANAAASIhYAAQABAIAFAGQAFAHAIAEQAHAEAKAAQAIAAAHgDQAHgEAFgGIAWAAQgFAJgIAGQgIAGgJAEQgJADgKAAQgPAAgNgHgEgtoAC1QgEgMgJgGQgJgHgNAAQgNAAgJAHQgJAGgEAMIBGAAIAAAAgEgwdADsQgMgGgHgKQgGgKgBgOIAUAAQABAKAFAGQAFAGAHADQAHADAIAAQAIAAAHgDQAIgDAEgGQAEgFABgIQAAgHgEgEQgEgFgIgDIgVgIIgTgGQgHgCgFgEQgGgFgDgHQgDgHAAgHQAAgMAGgIQAGgJALgFQAKgFAOgBQAOABAKAFQALAFAGAJQAGAJAAANIgUAAQAAgIgEgGQgDgGgHgDQgGgDgHgBQgIABgGADQgHADgEAFQgEAGAAAGQAAAFACAEQACAEAFADIAFACIAHADIAMADIANAEIAIACIAGADQAGADAFAFQAEAGADAGQACAGAAAGQAAANgHAJQgGAKgMAGQgLAFgPAAQgPAAgLgFgAJVDqQgNgGgHgMQgHgLAAgPQAAgPAHgLQAHgLANgHQAMgGAPAAQAPAAAMAGQAMAHAHALQAHAMAAAPQAAAOgHALQgGAMgMAGQgMAHgPAAQgQAAgMgHgAJcChQgHAEgFAHQgEAIAAAKQAAAKAFAIQAEAIAJAFQAIAEALAAQAKAAAIgEQAHgFAFgHQAEgIAAgKQAAgLgFgHQgEgIgJgEQgIgFgKAAQgLAAgIAFgADBDqQgMgGgHgMQgHgLAAgPQAAgPAHgLQAHgLAMgHQAMgGAPAAQAQAAAMAGQAMAHAHALQAGAMABAPQgBAOgGALQgHAMgMAGQgLAHgQAAQgPAAgNgHgADJChQgIAEgEAHQgEAIgBAKQABAKAEAIQAFAIAIAFQAIAEALAAQAKAAAIgEQAIgFAEgHQAFgIAAgKQAAgLgFgHQgFgIgIgEQg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AOAAAKAFQAKAGAFAKQAGALAAAQIAAA2gAP0iYQgMgHgIgLQgHgMAAgOQAAgPAHgLQAIgLAMgHQAMgHAQAAQARAAAOAJQAOAJAHARIgTAAQgGgKgJgEQgIgFgKAAQgLAAgIAFQgJAEgEAIQgFAIAAAKQAAAKAFAIQAFAIAIAEQAIAFALAAQAKAAAHgEQAIgEAIgKIATAAQgGAMgIAIQgIAHgKAEQgJADgKAAQgQAAgNgHgANKiYQgMgHgHgLQgIgMAAgOQAAgPAHgLQAHgLANgHQALgHAQAAQAPAAAMAHQAMAHAHAMQAHANAAASIhZAAQABAIAFAHQAFAGAIAEQAIAEAJAAQAIAAAIgDQAHgDAFgGIAVAAQgFAIgHAHQgIAGgJADQgKAEgKAAQgPAAgMgHgAOIjNQgEgMgJgHQgKgGgNAAQgMAAgKAGQgJAHgDAMIBGAAIAAAAgAMOiRIAAg2QAAgRgIgHQgIgIgMAAQgIAAgGADQgHAEgDAGQgEAHAAALIAAA3IgSAAIAAiTIASAAIAAA4QAFgFAIgDQAHgDAJAAQAOAAAKAFQAKAGAFAKQAGALAAAQIAAA2gAKdiRIgGgBIgHgDQgEgCgCgFQgCgFAAgIIAAg9IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAWAAIAAARIgWAAIAAA+QABADACABIAHABIAHgCIAFgDIAAAQIgDADIgFACQgDACgDAAgAIhiRIgGgBIgHgDQgDgCgDgFQgCgFAAgIIAAg9IgTAAIAAgRIATAAIAAgtIASAAIAAAtIAWAAIAAARIgWAAIAAA+QAAABAAAAQAAABABAAQAAABABAAQAAAAABABIAGABIAIgCIAFgDIAAAQIgDADIgFACQgDACgEAAgAGfiYQgNgHgHgLQgIgMAAgOQABgPAHgLQAHgLAMgHQANgHAPAAQASAAANAJQAOAJAHARIgTAAQgGgKgIgEQgIgFgLAAQgKAAgJAFQgIAEgFAIQgFAIAAAKQAAAKAFAIQAFAIAJAEQAIAFALAAQAJAAAIgEQAHgEAIgKIAUAAQgHAMgIAIQgIAHgJAEQgJADgLAAQgQAAgMgHgAEniYQgMgHgHgLQgIgMAAgOQAAgPAHgLQAHgLANgHQALgHAQAAQAPAAAMAHQAMAHAHAMQAHANAAASIhZAAQABAIAFAHQAFAGAIAEQAIAE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MgHAPAAQAQAAAMAHQAMAGAHAMQAGALABAPQgBAPgGALQgHALgMAHQgLAGgQAAQgPAAgNgGgEAgqgDiQgIAEgEAIQgEAHgBAKQABALAEAIQAFAIAIAEQAIAFALAAQAKAAAIgFQAIgEAEgIQAFgIAAgKQAAgKgFgIQgFgIgIgEQgIgEgLAAQgKAAgIAEgAh9iYQgMgHgHgLQgHgMAAgPQAAgOAHgLQAHgMAMgGQAMgHAPAAQAQAAAMAHQAMAGAHAMQAGALABAPQgBAPgGALQgHALgMAHQgLAGgQAAQgPAAgNgGgAh1jiQgIAEgEAIQgEAHgBAKQABALAEAIQAFAIAIAEQAIAFALAAQAKAAAIgFQAIgEAEgIQAFgIAAgKQAAgKgFgIQgFgIgIgEQgIgEgLAAQgKAAgIAEgAwliYQgMgHgHgLQgHgMAAgPQAAgOAHgLQAHgMAMgGQAMgHAPAAQAQAAAMAHQAMAGAHAMQAGALABAPQgBAPgGALQgHALgMAHQgLAGgQAAQgPAAgNgGgAwdjiQgIAEgEAIQgEAHgBAKQABALAEAIQAFAIAIAEQAIAFALAAQAKAAAIgFQAIgEAEgIQAFgIAAgKQAAgKgFgIQgFgIgIgEQgIgEgLAAQgKAAgIAEgEAofgEOIAAgWIASAAIAAAWgACZkOIAAgWIASAAIAAAWg");
	this.shape_4.setTransform(501.6,145.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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QAAQARABANAIQAOAJAIARIgTAAQgHgKgIgEQgIgFgKAAQgLAAgIAFQgJAEgFAJQgEAHAAALQAAAJAEAIQAGAIAIAEQAIAGALAAQAKAAAHgFQAIgDAIgKIATAAQgGAMgJAHQgIAHgJAEQgJADgLAAQgPAAgNgHgA58DxIAAgPQgIAIgJADQgIAEgLAAQgQgBgMgFQgNgHgHgKQgHgMAAgPQgBgOAIgNQAGgLANgHQAMgHAQAAQALABAJADQAJADAIAJIAAgPIARAAIAABlgA6zCgQgJAFgFAIQgEAHAAALQAAAJAEAJQAFAHAJAEQAIAFALAAQAKAAAIgFQAIgEAEgHQAFgJABgJQgBgLgFgHQgFgJgHgEQgJgEgKAAQgKAAgIAEgA8cDxIAAhmIASAAIAAANQAEgHAGgCQAHgEAIAAIAHABIAFABIAAASIgDgCIgBAAIgBgBIgBAAIgCAAIgDAAQgMABgHAIQgHAIAAAMIAAA4gA9GDxIgGgBIgHgDQgEgCgCgFQgCgFAAgIIAAg9IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAXAAIAAARIgXAAIAAA+QABADACABIAHABIAIgCIAFgDIAAARIgEACIgEACQgEACgDAAgA+9DtQgJgEgGgHQgGgIAAgLIATAAQAAAHAFAEQADADAGADQAGACAGAAQAFAAAGgCQAFgCAEgDQAEgDAAgFQgBgDgDgBIgJgFIgQgEIgNgFIgHgCIgEgDQgGgEgCgFQgDgGAAgGQAAgHAFgHQAFgGAJgEQAJgDAMgBQALAAAJAEQAJAEAFAGQAFAHAAAIIgUAAQAAgEgDgDQgDgEgEgCQgFgCgEAAQgJAAgEACQgFACgCADQgCADAAADIACAFQABACADADIAMAFIAEACIAIABIAMAEQAJACAHAFQAFAFACAKQAAAJgFAHQgGAHgKAEQgJAEgNAAQgOAAgKgEgA/7DxIAAhmIASAAIAABmgEgglADxIAAgPQgHAIgJADQgJAEgLAAQgQAAgMgGQgNgIgIgKQgGgMgBgOQABgPAGgMQAIgLAMgHQAMgGAQgBQAKAAAKAEQAJADAIAHIAAg7IARAAIAACTgEghdAChQgIADgFAJQgFAHAAAKQAAAKAFAIQAFAIAJAEQAIAGALAAQAJgBAJgFQAIgEAFgIQAEgIABgKQgBgKgFgHQgFgJ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AGRiRIAAgWIATAAIAAAWgAEsiYQgMgGgHgMQgHgMgBgOQAAgPAIgLQAGgLANgGQALgIAQAAQAPABAMAGQAMAHAHANQAHANAAARIhZAAQABAIAGAHQAFAGAHAEQAIAFAJAAQAJAAAHgEQAHgDAFgGIAVAAQgFAIgHAHQgIAGgJADQgJAEgLAAQgPAAgMgHgAFqjNQgEgMgJgGQgKgHgMAAQgNAAgKAHQgIAGgEAMIBGAAIAAAAgADYiRIAAhUIgPAAIAAgRIAPAAQAAgMACgHQABgIABgEQACgFAEgDIAGgEIAHgCIAIgBIALAAIAAARIgIAAIgFAAIgEABIgDABIgCAFIgBAIIgBAOIAYAAIAAARIgYAAIAABUgACgiRIAAhmIASAAIAABmgABxiRIAAiTIASAAIAACTgAAViRIAAgPQgIAIgJADQgGAEgLAAQgQgBgMgFQgNgGgHgLQgHgMAAgOQgBgPAIgMQAGgMANgGQAMgIAQAAQALABAHADQAJADAIAJIAAgPIARAAIAABlgAggjiQgJAFgFAIQgEAHAAALQAAAKAEAIQAFAHAJAEQAIAFALAAQAKAAAGgFQAIgEAEgHQAFgIABgKQgBgLgFgHQgFgJgHgEQgHgEgKAAQgKAAgIAEgAjTiYQgMgGgGgMQgIgMAAgOQAAgPAHgLQAHgLAMgGQAMgIAQAAQAOABAMAGQANAHAGANQAIANAAARIhZAAQABAIAFAHQAFAGAIAEQAHAFAKAAQAIAAAIgEQAGgDAFgGIAWAAQgFAIgIAHQgHAGgKADQgJAEgKAAQgPAAgNgHgAiUjNQgEgMgKgGQgJgHgNAAQgMAAgKAHQgJAGgEAMIBHAAIAAAAgAk+iVQgKgEgGgHQgFgIAAgLIAUAAQAAAGADAFQAEADAFACQAHADAGAAQAGAAAFgDQAGgBADgDQAEgDgBgFQAAgDgDgBIgJgFIgQgEIgMgFIgHgCIgGgEQgFgDgCgGQgDgFAAgGQAAgHAFgHQAGgGAIgEQAJgDAMgBQALAAAJAEQAJAEAFAGQAFAHAAAIIgTAAQgBgEgDgEQgDgEgEgBQgFgCgEAAQgJAAgEACQgFACgCADQgCADAAADIABAFQACACADADIAMAFIAEACIAIABIANAEQAIACAHAFQAFAFABAKQACAJgGAHQgFAHgLAEQgKAEgMAAQgNAAg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KgEgIQgFgIgIgFQgIgEgKAAQgLAAgIAEgAShoWIAAg1QAAgRgIgHQgHgJgNABQgIAAgGADQgGADgEAHQgEAHAAALIAAA2IgSAAIAAiSIASAAIAAA3QAFgFAIgDQAIgCAIAAQAOAAAKAFQAKAFAFALQAGALAAAQIAAA1gAP3odQgNgGgHgMQgIgLAAgOQABgPAHgLQAHgLAMgHQANgHAPAAQASAAAOAJQAOAJAGARIgTAAQgFgKgJgFQgIgEgLAAQgKAAgJAEQgIAFgEAIQgGAIAAAKQABAKAFAIQAEAHAJAFQAIAFALAAQAJAAAIgEQAIgEAHgKIAUAAQgHAMgHAIQgJAHgJAEQgJACgKAAQgRABgMgIgANModQgLgGgIgMQgHgLAAgOQAAgPAHgLQAHgLAMgHQAMgHAPAAQAQAAALAHQAMAGAIANQAGANAAASIhYAAQABAIAFAHQAFAGAIAEQAIAEAJAAQAIAAAHgDQAHgEAGgGIAVAAQgFAJgHAHQgJAFgIAEQgKAEgKgBQgPABgNgIgAOKpRQgDgNgJgGQgKgGgNAAQgNAAgJAGQgJAGgDANIBFAAIAAAAgAMRoWIAAg1QAAgRgIgHQgIgJgMABQgIAAgHADQgGADgEAHQgDAHAAALIAAA2IgSAAIAAiSIASAAIAAA3QAFgFAHgDQAIgCAJAAQAOAAAJAFQALAFAEALQAHALAAAQIAAA1gAKfoWIgFAAIgHgDQgEgDgDgFQgBgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAWAAIAAARIgWAAIAAA+QAAACADABIAHABIAHgBIAFgDIAAAQIgDADIgFACQgDACgDgBgAIkoWIgGAAIgHgDQgEgDgCgFQgCgEAAgIIAAg9IgTAAIAAgRIATAAIAAgtIARAAIAAAtIAXAAIAAARIgXAAIAAA+QABAAAAABQAAABAAAAQABAAAAABQABAAAAAAIAHABIAHgBIAGgDIAAAQIgEADIgEACQgEACgDgBgAGhodQgMgGgHgMQgIgLAAgOQAAgPAIgLQAHgLAMgHQAMgHAQAAQARAAAOAJQAOAJAHARIgTAAQgGgKgJgFQgHgEgLAAQgKAAgJAEQgJAFgEAIQgFAIAAAKQAAAKAFAIQAFAHAIAFQAJAFAKAAQAKAAAHgEQAIgEAIgKIAUAAQgHAMgIAIQ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AAIAAA5gEgwfgJgIAWAAQANgBAIgCQAHgDAEgFQADgGAAgKQAAgJgCgHQgEgFgEgDQgGgDgHAAIgRgBIgRAAgEAglgIdQgMgGgIgMQgGgLgBgPQABgPAGgKQAIgMAMgGQAMgHAPAAQAPAAAMAHQANAGAGAMQAHALAAAPQAAAPgHAKQgGAMgMAGQgMAHgPAAQgPAAgNgHgEAgsgJmQgHAEgEAIQgFAHAAAKQABALAEAIQAFAHAIAFQAIAFALgBQAKABAIgFQAHgEAFgIQAFgIgBgKQAAgKgEgIQgFgIgJgEQgIgFgKABQgKgBgJAFgAh6odQgNgGgGgMQgIgLABgPQgBgPAIgKQAGgMANgGQAMgHAPAAQAPAAANAHQALAGAIAMQAGALABAPQgBAPgGAKQgHAMgMAGQgLAHgQAAQgQAAgMgHgAhypmQgIAEgFAIQgEAHAAAKQABALAEAIQAFAHAIAFQAIAFALgBQAKABAIgFQAHgEAFgIQAEgIABgKQAAgKgGgIQgEgIgIgEQgJgFgKABQgLgBgHAFgAwiodQgNgGgGgMQgIgLABgPQgBgPAIgKQAGgMANgGQAMgHAPAAQAPAAANAHQALAGAHAMQAHALABAPQgBAPgHAKQgGAMgMAGQgLAHgQAAQgQAAgMgHgAwapmQgIAEgFAIQgEAHAAAKQABALAEAIQAFAHAIAFQAIAFALgBQAKABAIgFQAHgEAFgIQAEgIABgKQAAgKgGgIQgEgIgIgEQgJgFgKABQgLgBgHAFgEAoigKTIAAgVIASAAIAAAVgACcqTIAAgVIASAAIAAAVg");
	this.shape_5.setTransform(501.4,184.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance,p:{startPosition:1}},{t:this.shape}]}).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:1}},{t:this.instance,p:{startPosition:0}},{t:this.shape_1}]},1).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}},{t:this.shape_2}]},2).to({state:[{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}},{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(4));

	// Video
	this.cbVideoHelp = new lib.mcHelpPlaceHolder();
	this.cbVideoHelp.setTransform(512,490,1,1,0,0,0,280,210);
	this.cbVideoHelp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cbVideoHelp).wait(6).to({_off:false},0).wait(5));

	// Panel
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#806503").s().p("ADtBVQgQgJgJgOQgJgOAAgSQAAgTAJgMQAIgPAQgIQAPgJATABQASgBAPAJQAPAIAJAPQAIANABATIgBAGIgBAHIheAAQAEAIAIAGQAHAEAMAAIAJAAIAGgBIALgEIAkAAQgFAPgKAHQgKAIgLADQgNADgMAAQgUAAgPgIgAEvAUQgDgNgIgGQgIgEgNAAQgMAAgIAEQgIAGgEANIBAAAIAAAAgACQBdIAAi5IAiAAIAAC5gABRBdIAAgPQgIAIgJADQgJAEgMAAQgTAAgOgIQgMgJgJgOQgIgOAAgSQAAgTAIgNQAJgOAMgIQAPgJASABQAMAAAKADQAIADAIAHIAAgLIAgAAIAAB7gAAXAFQgJAKAAAPQAAAPAJAIQAJAJAPAAQAKAAAIgEQAHgFAEgGQAEgIAAgJQAAgJgFgIQgDgIgIgFQgHgCgKAAQgPAAgJAHgAhMBdIAAg9QgBgPgCgJQgCgHgFgBQgEgBgHgBQgGABgFABQgFACgDAEQgCAEgCAGIAAASIAAA7IgjAAIAAh9IAgAAIAAAKQAHgFAIgDQAHgDAKAAQANAAALAFQAKAEAGAKQADAFACAFIAEALQAAAJAAAKIAABDgAjbBdIAAh9IAjAAIAAB9gAlPBdIAAi5IBYAAIAAAmIg1AAIAAAlIAzAAIAAAkIgzAAIAABKgAjbg6IAAgiIAjAAIAAAig");
	this.shape_6.setTransform(223.3,241.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-2.5,107.7,721,107.7).ss(5,0,1).p("AAAgFIAAAFIAAAH");
	this.shape_7.setTransform(162,264.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,138.2,371,138.2).ss(5,0,1).p("EA2sADZIAAhpQAAikh2h1Qh1h1ilAAMhg3AAAQilAAh2B1Qh1B1AACkIAADI");
	this.shape_8.setTransform(512,232.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC907").s().p("Eg1bAEsIhQgFIAAgGIAAjIQAAikB1h1QB2h1ClAAMBg2AAAQCmAAB1B1QB2B1AACkIAABpQo0gakMgJQrTgXqNAFQo4AFpmAaQmdASpzAlQrTArjfALQn8AZmFADIiNABQkfAAjagKg");
	this.shape_9.setTransform(512,235.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,17,371,17).ss(5,1,1).rr(-350,-150,700,300,40);
	this.shape_10.setTransform(512,354);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#806503").s().p("AB3B+IAAi/IAgAAIAAANQAHgGAKgEQAJgDALgBQATABAOAIQAOAIAIAQQAIAOAAATQAAARgIAPQgIAPgOAJQgPAIgSAAQgKAAgJgDQgIgCgIgFIAABIgACngdQgHAEgEAIQgFAIAAAJQAAAIAFAIQAEAIAIAFQAHAEAKAAQAJAAAHgEQAHgFAEgIQAFgHAAgJQAAgJgFgIQgEgIgHgEQgHgFgKABQgJgBgIAFgAA1A8IAAi4IAjAAIAAC4gAhFA0QgQgJgJgNQgJgPAAgQQAAgSAJgOQAJgPAPgJQAPgIATAAQATAAAPAIQAMAJAJAPQAIAPABASIgBAEIgBAIIhbAAQADAIAIAFQAIAEALABIAJAAIAGgBIALgFIAiAAQgFAPgJAIQgKAIgKACQgNADgMAAQgUABgPgJgAgCgLQgEgMgIgHQgIgFgNgBQgMABgIAFQgIAHgEAMIBBAAIAAAAgAimA8IAAhJIgtAAIAABJIgnAAIAAi4IAnAAIAABJIAtAAIAAhJIAnAAIAAC4g");
	this.shape_11.setTransform(214.6,74.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,138.2,371,138.2).ss(5,0,1).p("EA2sADZIAAhpQAAijh2h2Qh1h1ilAAMhg3AAAQilAAh2B1Qh1B2AACjIAADI");
	this.shape_12.setTransform(512,62.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC907").s().p("Eg1bAEsIhQgFIAAgGIAAjIQAAikB1h1QB2h1ClAAMBg2AAAQCmAAB1B1QB2B1AACkIAABpQo0gakMgJQrTgXqNAFQo4AFpmAaQmdASpzAlQrTArjfALQn8AZmFADIiOABQkeAAjagKg");
	this.shape_13.setTransform(512,65.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFCC").ls(["#9C9C9C","#C8C8C8","#9C9C9C","#D4D4D4","#B0B0B0"],[0,0.231,0.49,0.827,1],-352.5,-183,371,-183).ss(5,1,1).rr(-350,-350,700,700,40);
	this.shape_14.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:264.7}},{t:this.shape_6}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_7,p:{y:94.7}},{t:this.shape_11}]},6).wait(5));

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
	this.instance_9.setTransform(-87.6,-91.2,0.777,0.777,0,0,180);
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
	this.shape.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.5,-2.3,0,-1.5,-2.3,4.1).s().p("AgCANIAAgBQACgNgFgLQAEAEAGAFIABAAIgDAIQAAAFgBACIgCABIgCAAg");
	this.shape.setTransform(6.5,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,-1.2,0,0,-1.2,4.1).s().p("AABAOIgCgEIgBgBQACgJgDgLIAAAAIABgBIABgBIABABQAAADADAJQACAMgCACIgBAAIgBAAg");
	this.shape_1.setTransform(5,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.2,0,0.1,-0.2,4.1).s().p("AALAiQgFgCgFgHIgBgEIgBAAIABgCIAAABIADAEIACAAQABgCgCgMQgCgKgCgCIAAgBIgBABIgBABQgCgOgGgMIgCgEIAGgCIABADIABAEIAEANQAEANAEAGIABACQAFALgBAOIAAABIgCAAg");
	this.shape_2.setTransform(4.9,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.3,3.4,0,1.3,3.4,4.1).s().p("AgDAAIAGgCIABACIAAABIgFACIgCgDg");
	this.shape_3.setTransform(3.7,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-1.1,0,0.6,-1.1,4.3).s().p("AACALIgCgCQgDgGAAgFQgBgFACgDIACACQADAGABAGQABAGgBABIgBAAIgBAAg");
	this.shape_4.setTransform(6.1,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-1.6,-1.7,0,-1.6,-1.7,3.8).s().p("AAAANIgCgPIgDgLIAFAHQADAGADAAIgBAEQgCAJgBABg");
	this.shape_5.setTransform(9.3,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0,-1.5,0,0,-1.5,4.4).s().p("AADALIgCgBQgEgHgBgGQgCgGABgDIAFAEQADAHACAGQACAGgBACIgDgCg");
	this.shape_6.setTransform(9.3,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],1.2,2.7,0,1.2,2.7,3.8).s().p("AAAACIgBgCIABgCIACACIgCADIAAgBg");
	this.shape_7.setTransform(6.5,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.7,0,0.2,-0.7,4.4).s().p("AAJAfIgBgCQgDgCgFgGIgEgHIgMgRIgBgCIgGgIQAIgJAHgKIACACQAGAFAJANQALAMADAOIABAGQgCAHgFAFIgDABQgCAAgDgCgAgDADQABAIAEAHIACABIADACQABgCgBgGQgCgIgFgFIgEgEQgBADACAEg");
	this.shape_8.setTransform(9.2,-2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.8).s().p("AAHAaIgEgQQgEgPgGgLIgFgIIADgDIAFAIIABACIALARIADALIACARg");
	this.shape_9.setTransform(7.8,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.6,-0.3,0,0.6,-0.3,4.3).s().p("AAKAdIgBAAQgJgFgBgEIgBgCQgEgGgGgNIgEgNIgBgEIgBgDIAJgFIAIgGIABAFIADAHIADAGIAGAOQAJAVgCAMQgDgBgGgDgAgDAFQAAAHADAFIACADQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgCgBgFQgBgIgDgFIgCgCQgCACABAFg");
	this.shape_10.setTransform(6.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.1,0,0.3,0.1,4.3).s().p("AAQAlQACgLgIgXIgHgNIgDgGIgBgHIgDgFIgHAGIgKAFIAAgBIgBgEQAJgEAIgHIAEgDIABACIAAABIAFAIQAHALAGAPIAEAQQADAPgGAFIgCAAIgBAAg");
	this.shape_11.setTransform(6.4,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,-0.1,0,2.9,-0.1,4).s().p("AgCgEIADAAIABAEIABAFIgDAAIgCgJg");
	this.shape_12.setTransform(8.6,-11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],2.9,1.8,0,2.9,1.8,4.3).s().p("AgBAEIgBgBIABgDIABgFIADADIgCAFIAAADIgCgCg");
	this.shape_13.setTransform(8.4,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.2,0.5,0,0.2,0.5,4.4).s().p("AAXAbQgCgQgLgLQgKgMgFgFIgDgCQgGAKgIAJIgDgEIAGgHQAHgKADgLIACABIADACIAEAEIAIAJIADACQAHAJAEAHIACAFQADAJgBAKIAAABIgCAGIgBgGg");
	this.shape_14.setTransform(9.1,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,1.5).s().p("AgHgIIABABQAGAEAHAJIABAAIgNADQABgJgDgIg");
	this.shape_15.setTransform(12.4,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.2,0.1,0,-0.2,0.1,1.5).s().p("AAHAKIgBgBQgGgJgHgDIgBgBIgBgFIAPAFIADAFQACAGgDADIgBAAg");
	this.shape_16.setTransform(12.4,-2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.9,-1.6,0,-0.9,-1.6,4.3).s().p("AAHAKIAAAAIgPgFQgFgHgHgJIATALQALAHALAEIgDABIgLgCg");
	this.shape_17.setTransform(12.3,-4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.3,0,0,-0.3,0,4.4).s().p("AAHATIgDgBIgEgBIgBgBIgCAAIgCgBQgOgEgOgGIgEgDIABgHIAAgOIAFgBQABAHgBAIIAAADIAAAAQAGADAIADQATAIAkgCIAAAAQAAAHgEADQgCABgIAAIgRgCg");
	this.shape_18.setTransform(12.2,-8.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1.3,-0.1,0,-1.3,-0.1,4.3).s().p("AABAHIgJgIQgDgDAAgCIABgDIADgBIABABIAGADQAFAFADACIAEAGQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABQgDAAgFgEg");
	this.shape_19.setTransform(12.7,-5.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,4.3).s().p("AAEANIgRgNIgCAAIgJgJIgFgEIAAgDIACgHQAOAGANAFIABAAIgBABIAAACQgBADABADIALAIQAIAGACgDQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBgBIgEgFQgCgDgIgFIgFgDIABAAIAGACIADAAQAFAEAEAFQAHAHABAJQAAAGgCACQgLgEgNgHg");
	this.shape_20.setTransform(11.6,-5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.6,1,0,-0.6,1,4.4).s().p("AAJAIQgGAAgFgDQgOgFgBgCIgBgDIABgCQALgDALAHQAJADADAEIACADIgCACIgIgBg");
	this.shape_21.setTransform(12.6,-9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.6,0.6,0,-0.6,0.6,4.4).s().p("AgUAKQgIgDgGgFIAAAAIAAgCQABgHgBgHQAPgEATAGIALAEQANAGAIAHQAEAFgBAGIgPAAQgYAAgQgGgAgRgLIgBADIABACQABACAPAFQAEADAGABIAJAAIACgBIgDgEQgCgBgJgFQgIgFgJAAIgGAAg");
	this.shape_22.setTransform(12.5,-9.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,-0.8,0,0.5,-0.8,4).s().p("AgDADIAEgPIACABQACADgBAIQgCAJgCAEQgCgEgBgGg");
	this.shape_23.setTransform(0.2,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.9,-0.7,0,0.9,-0.7,3.6).s().p("AgEAIIABgIIAGgLQAAgBABAAQAAAAAAABQAAAAABAAQAAAAAAABQABABgDAJIgEALIgCACIgBgFg");
	this.shape_24.setTransform(-3.7,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.1,0,0.5,-0.1,3.6).s().p("AgKAWQgCgFgBgGIAGgGIgBAJIABAFIACgCIAFgMQACgIgBgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAFgLIAEgMIAFACQgGAVgIAQIgIASIgCgHg");
	this.shape_25.setTransform(-3.3,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.6).s().p("AgJAcIgCgCIAJgSQAGgQAGgVIACABQgJAVgDAOQAAALAAAGIgEAEIgDACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_26.setTransform(-3,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,2.9,0,-0.9,2.9,3.6).s().p("AAAADIgDgCIABgDIAGACIgCADIgCAAg");
	this.shape_27.setTransform(-1.9,-2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.6,-0.3,0,-0.6,-0.3,4).s().p("AgFAjQACgLABgQQACgWgCgVIABAAIACAgQABANAEAIIgCAFIgEAKIgDADIgCgBg");
	this.shape_28.setTransform(1.4,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.6,-0.9,0,0.6,-0.9,3.9).s().p("AACAPIgBgBIgBgDIAAgEQgDgHAAgHQAAgFACgCQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQADACAAAMIgBAOIAAAAIgBAAg");
	this.shape_29.setTransform(2.2,1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,-0.3,0,0.7,-0.3,3.9).s().p("AgCgEQACgGADgEIACgBIACABQACACgFAJIgFAKIgFAJQABgOADgGg");
	this.shape_30.setTransform(-1.9,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.2,-0.4,0,0.2,-0.4,3.9).s().p("AgLAbIgCgEQgCgGACgLQACgNAJgWIAPADIACAAQABAUgIAOQgHAMgJAKIgDgDgAAAgPQgEAEgDAHQgDAFgBAOIAGgJIAFgJQAEgKgCgCIgBgBIgBABg");
	this.shape_31.setTransform(-1.4,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.3,0,0.5,-0.3,4).s().p("AABAgIgFgMIgDgGIAEgFQABAFACAFQACgFACgJQABgIgCgDIgCgBIAAgBQADgOgCgMIAFAAQACAUgCAWQgBAQgCAMIgDgEg");
	this.shape_32.setTransform(0.2,2.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.3,0,-0.2,-0.3,3.9).s().p("AgKAiIgDgDQALgKAFgMQAIgOgBgUIgCAAIgPgDIADgFIANADIAEAAIABAFQABANgCAMIgBAAIgGASIgEAGIgFAJIgEABIgDAAg");
	this.shape_33.setTransform(-0.9,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0,3.5,0,0,3.5,4).s().p("AgCgBIAEAAIABADIgBAAIgDAAIgBgDg");
	this.shape_34.setTransform(0.8,-1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,3.9).s().p("AAFAgQgFgBgDgFIgCgCQgEgIgBgPIgEgeIAOgCIAHANIAHASQACAKgDALQgCAGgEAFIgBAAIgBAAgAgFgKQgDABABAGQAAAEADAKIABAEIABACIABABQABAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAIAAgNQAAgMgBgCIgDgCIgBABg");
	this.shape_35.setTransform(2.6,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,-0.2,0,-0.1,-0.2,3.9).s().p("AAKAYQADgKgCgKIgGgTIgFgMIgQACIgBgGIAJAAIALgDIADAEIACAEQAGALACAPIABAAQACAKgBAJIgBACQgBAHgFAEQgDADgEAAQAEgEACgHg");
	this.shape_36.setTransform(2.9,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.4,0,0,0.4,0,3.6).s().p("AgDgCQADgGACgDQAEgEACADQADAEgJAIIgKAOIAFgQg");
	this.shape_37.setTransform(-5.4,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.8,-2,0,1.8,-2,3.6).s().p("AgCAEIgGgEQgCgBgBgDIAGABQAFABAJgCIACAAQgFAEgEAFIgEgBg");
	this.shape_38.setTransform(-11.4,-3.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1,-0.6,0,1,-0.6,3.6).s().p("AgKADIAEgDQADgDAGgBQAHgBABACIAAADIgDADQgDACgGAAQgHAAgCgCg");
	this.shape_39.setTransform(-10.6,-4.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.2,-0.7,0,1.2,-0.7,3.7).s().p("AgFAJIgBgBIABgCIABgGIAAAAQADgFABgCQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIACABQACADgDAGQgCAEgDAFIgDACIgCgCg");
	this.shape_40.setTransform(-7.7,-0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.3,0.9,0,0.3,0.9,4.3).s().p("AgLAFQAFgFAFgDQAHgIAGAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAABQACACgCADIgGAFQgGAEgIAEIgMAFQABgEAEgEg");
	this.shape_41.setTransform(-9,-3.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.1,0,0,0.1,4.3).s().p("AgcAPQABgHAEgGQAEgFAGgFIACgDQALgJAQgIIADgBQAEAGAFAGIABACIgCAEQgEAGgPALIgUAQIgOAJQgDgGABgKgAAJgUQgGABgGAIQgGADgEAHQgEACgCAEIAMgFQAJgCAGgGIAGgFQABgEgBgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIgCAAg");
	this.shape_42.setTransform(-8.7,-2.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,0,0,0.5,0,3.7).s().p("AgQAZQgEgEABgKIAAgEQAKgGAJgHQAIgIAJgNIAEADQgHAJgNAVIgJAWIgDAAQgDAAgCgDgAgFAAQgDAAgDAGIAAABIgBAHIgBABIABABIACACIADgCQAFgEACgHQABgFgBgBIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_43.setTransform(-7,-1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.1,0,-0.5,0.1,4.3).s().p("AgfAfIAAAAIANgJIAVgQQAPgLAEgGIACgEIgBgBQgGgGgDgHIAFgCIAKANIADAEIgDAFQgJALgKAIQgKAJgHAFIgHAEQgIAEgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_44.setTransform(-8.2,-2.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-0.1,0,0.1,-0.1,3.6).s().p("AgRAbQgCgCABgHIAAgBQABgIAEgJQAGgPAJgOQAIAHAJAFIgLARQgIAQgMALIgDADIgCgDgAAAgNQgEAEgCAGIgGAPIAMgMQAIgKgDgDIgCgCIgDACg");
	this.shape_45.setTransform(-5,-0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.4,0,0,-0.4,0,3.6).s().p("AgVAfIAEgDQAMgKAIgQIALgSQgKgEgGgHIACgEIADACQAIAHALADIAAABIgCAFIgEALIgFAJIgJANIgEAGIgBAAQgHAGgGAAQgDAAgCgBg");
	this.shape_46.setTransform(-4.5,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-1.6,2.9,0,-1.6,2.9,3.7).s().p("AAAADIgDgDIADgDIAEADIgEAEIAAgBg");
	this.shape_47.setTransform(-4.8,-3.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.1,-0.1,0,-0.1,-0.1,3.7).s().p("AgDAFQALgWAGgIIABAAQgKAOgFAOQgDAKgBAIIgIAFIgCAAIALgVg");
	this.shape_48.setTransform(-6.4,-0.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0,0,0,0,3.6).s().p("AgXAPIgFgBQgBgFAEgGIACgDIAIAAQATgCAUgMQACAEADAEIgEACQgRAGgKAJIgCADIgCAAIgKABIgHAAgAgFAAQgHABgEADIgEAFQADACAHAAQAHAAADgCIABgEIABgEIgCgBIgFAAg");
	this.shape_49.setTransform(-9.7,-5.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.9,1.3,0,-2.9,1.3,3.6).s().p("AgDgBIADgDIAEAHIgEACQgCgEgBgCg");
	this.shape_50.setTransform(-6.7,-6.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.9).s().p("AgaATQgHgBgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEAAQAHAAAJgCQAVgFAVgKQgDgHAAgHIgBAAIAGAAQAAAFADAGIACAGIgFACQgUAMgTAEIgIABIgJAAg");
	this.shape_51.setTransform(-10.3,-7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.9,0.5,0,0.9,0.5,3.9).s().p("AAFgDQAKgEADADQACACgEACQgCABgOACIgRAEQAOgHAIgDg");
	this.shape_52.setTransform(-11,-7.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.9,-1.2,0,1.9,-1.2,3.8).s().p("AgBAGQgGgCgEgEIgDgFIAPAFQAFAAAJgBQgLADgEAEIgBAAg");
	this.shape_53.setTransform(-13,-7.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,0.6,0,0.5,0.6,3.9).s().p("AgeAQIAAgDQACgFAFgEIABgBQAFgDALgEIALgFQAOgFAJgBIABAAQAAAHADAHQgVAKgVAFQgJACgHAAIgDAAIgBAAgAABgDQgIADgOAHIATgEQAMgCACgBQAEgCgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgDAAgGACg");
	this.shape_54.setTransform(-10.7,-7.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.5,0.1,0,1.5,0.1,3.8).s().p("AAAAEIgLgCIABgCQACAAADgBIAFgCIAGAAIAFABIAAAAQABABgDACQgEADgFAAIAAAAg");
	this.shape_55.setTransform(-12.6,-8.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0,0,0.1,0,3.8).s().p("AgPAKIgRgFIAAgBQAAgEAEgCQAGgFAFgCQAFADAGACIgGAAIgHACQgDABgCABIgBABIALACQAGAAAFgDQADgCgBgBQAQADASgCIAAACQgJAAgOAEIgLAFIgJABIgFAAg");
	this.shape_56.setTransform(-11.2,-8.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.5,0.3,0,-3.5,0.3,3.8).s().p("AgBABIAAgBIADAAIAAABIgDAAg");
	this.shape_57.setTransform(-7.5,-9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.5,-0.2,0,0.5,-0.2,4.3).s().p("AgGAPIgBAAIgEgBQgHgCgFgDIgCgBQgHgEgEgEQAAAAAAAAQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgCIACADQAIAHAYADQARADAOgEIAAgHIADgQIAAAAIACAAIAFADQgEAIgBAGIAAAFIAAAIIgFACQgJABgIAAQgKAAgHgCg");
	this.shape_58.setTransform(-10.6,-10.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-3.2,-0.4,0,-3.2,-0.4,3.9).s().p("AgBADIgCgBIADgGIAEACIAAABIgCADIAAACIAAABIgDgCg");
	this.shape_59.setTransform(-7,-12.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.7,0.8,0,0.7,0.8,4.3).s().p("AAAAEIgTgDQASgEAJAAQAJgBACADQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBACQgDACgHAAIgJAAg");
	this.shape_60.setTransform(-10.9,-11.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.7,-0.2,0,1.7,-0.2,3.9).s().p("AgQAAQgCgEABgEQAEAFAQADIAQADIgGABIgWAEIAAAAIgHgIg");
	this.shape_61.setTransform(-12,-12.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.8,0.2,0,0.8,0.2,4.3).s().p("AAAAMQgYgCgIgKIgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAKgCIAAAAIAWgEIAGgBQAQgBAJACIAAABIgDAPIAAAIQgHACgJAAIgPgCgAAJgKQgJAAgSAHIASACQAQABAEgCIABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBgCgHAAIgDAAg");
	this.shape_62.setTransform(-11,-11.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],1.3,0.8,0,1.3,0.8,3.9).s().p("AAAAEIgLgDIgBgBIACAAIAEgCIACAAQAGgCADAAQADABADADQADABgCADIgFABIgHgBg");
	this.shape_63.setTransform(-11.6,-14);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.3,0.5,0,0.3,0.5,3.9).s().p("AAEALIgOgDQgRgGgFgCIACgDQAGgEAMgDIAIgBQAHAGAOAFIAQADIgDAJQgKgCgQABgAgOgFIgCAAIgFACIgBABIAAACIAMABQAKABABgBQACgBgCgDQgBgDgDAAIgCgBIgJACg");
	this.shape_64.setTransform(-10.5,-13.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],0.1,0.5,0,0.1,0.5,4).s().p("AgBABIgLgHIAEABIAKAEIAGABIAEADIABACIgBACIgCAAQgEAAgHgGg");
	this.shape_65.setTransform(-8.9,-16.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,-0.6,0,0.1,-0.6,4).s().p("AARAQIgQgEQgMgGgJgGQgIgDgEgEIgDgHIAAgDIAAgBIAAABIAEAFQAFAGARAGQAQAJANAAIAJgKIABgBIAHACIgCAAIgBACIgHAKIgEAGIgGgCg");
	this.shape_66.setTransform(-8.9,-15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.1,-0.6,0,0.1,-0.6,3.2).s().p("AgBAXQgMgBgIgKQgIgJABgLQAAgIAFgGQgDAGABAHQACAJADADQAHAIANACQAOACAOgMIABgBQgCAIgHAGQgJAHgLAAIgBAAg");
	this.shape_67.setTransform(0.4,-9.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-0.2,1.4,0,-0.2,1.4,3.2).s().p("AgBAGQgFgCgDgDIgCgCIAAgBIACgCQAEgDAGABQAHAAADADQACADgBABQgBACgCACQgDACgDAAIgEgBg");
	this.shape_68.setTransform(0.7,-11.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.1,0.4,0,-0.1,0.4,3.2).s().p("AgCAXQgNgCgHgIQgDgEgCgJQgBgGADgGIAFgGIACgBIAFgDQgHAGAAAJQAAAHAFAGQAGAHAJAAQAIAAAJgHQAEgEABgCIACgKQAFAIgBAIIgBAHIgBAAQgMAKgNAAIgDAAg");
	this.shape_69.setTransform(0.6,-10.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-0.2,1,0,-0.2,1,3.2).s().p("AgQANQgGgHAAgHQAAgJAHgGQAHgDAIABQALABAJAJIADAEIAAABIgDAJQgBADgDADQgKAHgHABQgKgBgFgGgAgJgIIgDADIAAAAIADAFQACAAAFACQAGADAEgEQADgBAAgBQABgDgCgCQgCgDgIgBIgBAAQgGAAgCACg");
	this.shape_70.setTransform(0.7,-11);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#B8FC46","#A49F1A","#A7540F","#723E19"],[0,0.471,0.792,1],-2.8,4,0,-2.8,4,8.1).s().p("AgEAAQgEgFgHgFIgJgGQADgBAHACQALABADADQAGADAGAFIAIAFQAJAKgGAFIgCAAQgHAAgSgRg");
	this.shape_71.setTransform(3.4,-14.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],0.1,-3.2,0,0.1,-3.2,3.7).s().p("AAAACIAAgEIAAABIAAABIAAAAIAAADIAAgBg");
	this.shape_72.setTransform(2.2,-17.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.1,0.9,0,-1.1,0.9,4.6).s().p("AAAAOIAAgBQgCgDgBgLIABgMQACAGADAIQACAKgDACIgBABIgBAAg");
	this.shape_73.setTransform(0.7,-21.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.8,1,0,-0.8,1,3.7).s().p("AAAAKQgCgDgBgHQAAgHABgEIACAFQAEAGAAAEIgEAIIAAgCg");
	this.shape_74.setTransform(3.2,-22.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.2,0,-0.5,0.2,4.6).s().p("AgDANIgBgBQgDgCAHgMIAGgLQAAAMgHAOIAAABIgCgBg");
	this.shape_75.setTransform(5.6,-20.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-2.5,-1.7,0,-2.5,-1.7,3.8).s().p("AgEAAIAEgDIAEADIAAAAIABAAIgCADIgCABIgFgEg");
	this.shape_76.setTransform(-5.3,-15.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#A69801","#944A05","#662618","#252923"],[0,0.471,0.792,1],0.7,-0.6,0,0.7,-0.6,8.1).s().p("AABBNIgNgCIgIgDIAAgBQgKgDgIgHIgEgCIgEgEIgEgEIgKgNIgEgKIgDgHQgCgGgBgFIAAgEIAAgHIAAgEQABgJAEgHIAAgBIAAgDIACgFIAAgBIAEgHIAHgKIABgBIACgBIACgBIACgDIgBgBIAFgDIAAAAQAHgHAHgDIAFgDIAJgDIACgBIAKgBIgDABIgIADIgJAHIgJAGQgcAZAAAcQABAWALAQQAMARAPAJQAOAJAFAAQAGABAGgBIAOgBQAYgDAUgRIABgBIgGAHIgDAEIgEADQgIAGgJAFIgIAEIgNADIgJAAIgGAAIgEAAg");
	this.shape_77.setTransform(-0.1,-9.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],-0.9,-2.7,0,-0.9,-2.7,3.7).s().p("AgDAEIgCgEIAEgCIAEgBIADAEIgCABIgHADg");
	this.shape_78.setTransform(-2,-17.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,0.3,0,-1.2,0.3,3.9).s().p("AACAOIgCgCQgBgCgDgLIgCgNIAEAEQAFAJADAGQACAIgCABIgCABIgCgBg");
	this.shape_79.setTransform(-4.2,-19.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,3.9).s().p("AADAhIgDgFIgFgGQgJgKgGgPIgBgCQgIgVAHgFIAAgBIACAAQABAPAIARQAHAOAHAKIABgBQAKgIAKgFIACAGIABABIgFACQgIAEgGAGIgBAAIgEAEg");
	this.shape_80.setTransform(-5.2,-18.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,1,0,0,1,3.7).s().p("AAAAMQgCgEgBgIQgBgJABgDIABABQAFAHABAGIABAEQAAAFgCACIgBAAIgCgBg");
	this.shape_81.setTransform(-2.9,-21.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.1,0.4,0,-0.1,0.4,3.7).s().p("AAAAXIAAgDQgEgJgFgHQgCgGAAgMIABgOIAAAAIADACQAGACAFAHIgBAEIABAMQgCgIgEgIIgBgBQgCADACAJQABAIACAEIABACIACgBQACgCAAgFQABAMAGAOIgGABIgFACIgBgGg");
	this.shape_82.setTransform(-2.9,-20.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.5,1.7,0,1.5,1.7,3.7).s().p("AACAOIgFgHIgBgJQABgKADgDQAAgBAEAAIAAABIgBAOQAAAKACAIIgDgDg");
	this.shape_83.setTransform(-4.5,-22);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.4,0.3,0,-0.4,0.3,3.9).s().p("AgNAEQgIgQgBgPQAEgBAHADQAHADAEAEIAIAHIACADQAFAHAEAHIABADIACAGQgKAEgKAIIgBABQgHgJgHgPgAACgBQADALACACIADACQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQACgBgCgIQgDgGgHgJIgEgEIACANg");
	this.shape_84.setTransform(-5,-19.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,0.9,0,-0.2,0.9,4.6).s().p("AgNAeQgGgOgBgLIgBgEIgBgJIABgFQACgNALgJIABAAIgCAIQgDAMABAPQAAALAHANIACAEQAHgBAJABQAFAAAEAAIAAAHIgIgBQgIAAgHABIAAAAIgKABIgDgGg");
	this.shape_85.setTransform(-0.2,-21.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.7,1.3,0,-0.7,1.3,4.6).s().p("AAJAgQgJgBgHABIgCgEQgHgNAAgNQgBgNADgMIACgIIADABIAIAIQADAGAFANIAFALIAEAPIABAIIABABQgEAAgFAAgAAAABQAAAMADADIABABIACgBQADgCgCgKQgDgIgEgGIAAALg");
	this.shape_86.setTransform(0.3,-21.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.8,0.5,0,0.8,0.5,4.6).s().p("AgHAgIgMgDIAAgDIAAgBIAAgDQABgLAFgIIAEgGIAFgIIADgGIABgCIAIgKIAFgEIAGgFIABAAIgCADQgGAHgGAMQgGAKgCARQgDAJABAGIAJAFIAFAEIAAABIgDACQgHgEgHgCg");
	this.shape_87.setTransform(4.3,-20.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0,0.7,0,0,0.7,4.6).s().p("AgBAhIgMgFQAAgGADgJQADgRAHgKQAEgMAFgHIACgDIACABIAAABQABACAAAEIAAAXIAAACIAAAEQgCALgHARIgEAIIgCgEgAAEAAQgGAOACACIAAABIACAAQAJgQgBgKIgGAJg");
	this.shape_88.setTransform(5.1,-20.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.6,0.2,0,-0.6,0.2,3.7).s().p("AgHAeIAAgCIgCgHQgBgKAAgMQABgJAEgMIAEgHIAAAAIAGAHQAEAFABAHIABABIgEAHQgBgGgDgHIgDgEQgBAEABAHQAAAIABACIACACIgDAIQgEAIgBALIgCgBg");
	this.shape_89.setTransform(2.9,-21.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],0.5,0.7,0,0.5,0.7,3.7).s().p("AgCALIgEgLQAAgRAHgHQACgDAFADIgEAHQgEAMAAAIQAAANAAAKIgCgPg");
	this.shape_90.setTransform(1.9,-21.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.4,0.2,0,0.4,0.2,4).s().p("AgGAIQgRgIgFgFIgEgEIAAgBIABgDQAHgFASAEQAGACAIAEIAIADQAHADAHADIADACIgBABIgJANIgBAAQgNAAgPgJgAABAAQALAFADgCIABgCIgBgBIgDgBIgHgEIgJgDIgFgBIAKAJg");
	this.shape_91.setTransform(-9.2,-15.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],1.4,0.8,0,1.4,0.8,3.8).s().p("AAHAMQgHgEgGgBQgGgHgCgFQgCgGAEgEIABAAIAAADIAGAJQAGAIANAKIABABIgIgEg");
	this.shape_92.setTransform(-9.2,-18);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.5,1.4,0,0.5,1.4,3.8).s().p("AAAAEIgHgEIgCgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAEgBAEACQAHADACABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEABQgDAAgDgCg");
	this.shape_93.setTransform(-8.3,-18.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.1,0.4,0,0.1,0.4,3.8).s().p("AARAUQgHgFgHgDIgCgBQgLgKgIgHIgFgKIgBgDQAFgDAPAEIAJADQAHAPAIAKIAFAGIgFAGIgDgCgAgMgQQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIACADIAHAFQAHAFADgDIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgDgFgCIgIgCIgCAAg");
	this.shape_94.setTransform(-7.9,-17.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.7,-0.3,0,-0.7,-0.3,4).s().p("AACAEQgSgEgPACIgBgDQAMABAZgDIAZgFIABABQACAEAAACIgCABQgCADgJADIgHACIgLgEg");
	this.shape_95.setTransform(12.3,-11);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.9,0.8,0,-0.9,0.8,4).s().p("AgNAAIACgBIABAAIAHgBIAAAAIADAAQALAAABABIACABIgCAAQgDAEgJAAQgMAAgBgEg");
	this.shape_96.setTransform(12.5,-12.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.5,0.7,0,-0.5,0.7,4).s().p("AgeAHIgBgFQANAAAPgGIABAAIAJgDIAGAAQAMADAHAFIgYAEQgOADgLAAQgIAAgFgBgAgFgCIgCAAIgBACQABACAJAAQALAAADgCIACAAIgBgCQgCgBgKgBIgFAAIAAAAIgFACg");
	this.shape_97.setTransform(12,-12.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#ADBF02","#9C5701","#802513","#312923"],[0,0.471,0.792,1],-0.6,0,0,-0.6,0,8.1).s().p("AgMBJQgGgBgOgJQgPgJgMgQQgLgRgBgWQAAgcAcgZIAIgGIAKgGIAHgEIADgBIADAAQAHgBAFAAIAIABIABABIAMADQgPgEgOAEIgBAAQgIAEgGAFQgaAWABAgQABAXAOARQAJAMASADQAPAFAJgEQAKgEAGgEIAKgIQAFgEAFgJQAHgKADgKQAGgOgDgMIADAJIACAMIAAANIgBAIIgCAGIgBAFQgEALgGAJIgCABQgTARgZADIgMACIgGAAIgGAAgAAVhDQAJACAIAFIAAABIAGAEQgLgJgMgDg");
	this.shape_98.setTransform(1.2,-10.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#B8EC04","#996600","#AA2309","#402923"],[0,0.471,0.792,1],-1.5,0.7,0,-1.5,0.7,8.1).s().p("AgQA7QgRgDgJgMQgPgRAAgZQgCgeAbgWQAGgFAIgEIAAAAQARgEAMAEQAMAEALAIIABABIABABIABAAIAAABIADADIABACIAEAGIAFAGIAHAMQADAMgFAOQgEAKgGAKQgGAJgFAEIgKAIQgGAEgJAEQgEACgFAAQgGAAgKgDgAgdgOIgFAEIgCAAIgFAHQgFAEAAAIQgBANAIAJQAIAKAMABQANABAIgIQAHgGACgIIABgHQABgKgFgFIAAgBIgDgEQgGgJgNgBIgDAAQgHAAgFACgAgMgxIAJAGQAFAGAFAFQAXAXAGgFQAFgFgIgJIgIgIQgGgFgGgDQgFgCgKgCIgIgBIgCAAg");
	this.shape_99.setTransform(2.2,-11.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,-0.7,0,0,-0.7,3.9).s().p("AgUAPIgGgBIgDgJIgHgKIACgBIADgDIAFAJIAEAIQAPACAUgKQAPgGAJgIIgBADQgBAFgHAFIgLAFIgKADIgCAAQgMAIgMAAIgBAAg");
	this.shape_100.setTransform(11,-13.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#FFB862","#FF8A00","#EE4600"],[0,0.525,1],4,-0.5,0,4,-0.5,3.9).s().p("AADAHIABAAIABgBIAEgCIAEAFIgDADIgCABIgFgGgAgMgKIACgCIgBADIgBgBg");
	this.shape_101.setTransform(6.4,-15.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-0.5,0.9,0,-0.5,0.9,3.9).s().p("AgOADIAAgCIgBgBQAHgEAKAAQALgBADAEQACABgEABQgFAEgJAAIgEAAQgIAAgCgCg");
	this.shape_102.setTransform(11.4,-15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0.4,-0.2,0,0.4,-0.2,4).s().p("AgPAeIgDgGIgCgCIgDgDIAAgBIgBAAIgBgBIgBgBIgFgEIACgEIABgBIACgDQAIgKALgIIAJgIIAJgFIAEgBIAKgBIAEADIADABQgFAAgEABQgMADgLALQgIAHgGAIQgDAFgBAGIAGAGIAEAFIgFACIgBABg");
	this.shape_103.setTransform(8.4,-17.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#FFFFFF","#FFFF8D","#FFBE34"],[0,0.525,1],-1.2,-0.2,0,-1.2,-0.2,4).s().p("AgLAJQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIACgBIAHgFQAGgGADgCQAEgCACACQACACgDAFIgGAGIgCABIAAABQgEAEgDABIgCAAQgDAAgCgCg");
	this.shape_104.setTransform(10,-17.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.3,0.3,0,-0.3,0.3,3.9).s().p("AgYASIgEgJIgFgJIAHgEQAKgGALgEIAGgCIANgBQAMAAAHAJIACAEQgJAHgQAHQgPAIgNAAIgGAAgAAEgKQgKAAgHAGIABABIAAACQADABAJAAQAMAAAEgDQAEgDgBgBQgDgEgIAAIgEABg");
	this.shape_105.setTransform(11.2,-14.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-1,1.3,0,-1,1.3,3.9).s().p("AgKAEIAGgEIAGgCQAHgCACADIAAABIgDACQgDACgFAAIgKAAg");
	this.shape_106.setTransform(11.4,-17.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-2.2,1,0,-2.2,1,3.9).s().p("AAAAAIAIgHIADACQACACgJAGIgEADIgLACIALgIg");
	this.shape_107.setTransform(12.6,-17);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],0,0.3,0,0,0.3,3.9).s().p("AgdANIAEgCQAOgIALgHIAJAAQAGAAADgCIADgDIAAgCQgCgDgHACIgIADIABgCIAFgGIAGAAQAKAAAEADIgJAJIgMAGIgIACQgJADgLAHIgHAFIgDgFg");
	this.shape_108.setTransform(10.4,-16.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],-0.5,-0.3,0,-0.5,-0.3,4).s().p("AgVAWIgHgGQACgGADgGQAFgHAKgIQAKgKALgDQAFgCAFABIAEADQAEAFgGAJIgDAFIgGAEIgBABIgFAGQgKAJgOAIIgEACIgDgFgAAOgJQgEACgHAGIgGAEIgBACIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQADACACgBQAEAAAFgFIABgBIACgBIAFgFQAEgFgDgCIgBgBIgEABg");
	this.shape_109.setTransform(9.3,-17.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#FFD76B","#FFAD00","#EE6600"],[0,0.525,1],-0.8,1.6,0,-0.8,1.6,4.4).s().p("AgRAKIAAgDIABgCIAMgJQAHgIAHgCQAFgCADABIAAABIgDACQgGACgJAJQgJAHgIAKIAAgGg");
	this.shape_110.setTransform(8.4,-22.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#FFFFE7","#FFFF02","#FF9900"],[0,0.525,1],0.1,-1,0,0.1,-1,4.4).s().p("AgUAZIAAAAIgBABIABgBgAAOgQQADgHADgDIABABQABAIgBAGIgBACIgJAGQgCgEAFgJg");
	this.shape_111.setTransform(7.5,-19.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#FFEC7E","#FFC400","#FF6600"],[0,0.525,1],-0.2,-0.2,0,-0.2,-0.2,4.4).s().p("AgXAhIADgIQAHgRACgJQAHgJAKgKQAJgIAGgCIADgCIAAAPQABAJgEAGIgEABIABgCQABgGgBgIIgBgBQgDADgDAHQgFAIACADIgJAHQgLAJgIALIgDADg");
	this.shape_112.setTransform(7.8,-20.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#CCE51E","#81B70B","#3A671D"],[0,0.592,1],0,-7.2,0,0,-7.2,4.2).s().p("AAABLQAAgagBgqQgDg5AAgYIADABIgBAaQAAAOABAOIAAABIAAAMQABAlAFAtIgFgBg");
	this.shape_113.setTransform(0.3,17.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.5,-2.7,0,0.5,-2.7,3.7).s().p("AhOAZIAAAAQAGgYAJgGQAMgFAOADIAZAHQAWAEAYgFQAdgJAQgbIAAAIQgJAggyAGQgPACgQgBIgPgCIgPgGIgNgDQgIgCgHAMQgEAIgDAQIgCAFIAAgNg");
	this.shape_114.setTransform(8,12.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],-2.1,2,0,-2.1,2,3.7).s().p("AgtAhQAYgEAbgYQAYgRAQgVQgNA2gcAJQgJAEgUAAIgVgBg");
	this.shape_115.setTransform(10.7,8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],-0.2,1.3,0,-0.2,1.3,3.7).s().p("AgTAmIgZgHQgPgCgMAFIACgBQAIgFAdgCIAGAAIAVABQASAAALgEQAcgJANg2IACABIAEAZIABAQQgRAagcAJQgNAEgNAAQgJAAgLgDg");
	this.shape_116.setTransform(8.8,8.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.1,-0.1,0,0.1,-0.1,1.8).s().p("AADABIgDgBIgGgHIgHgFIAKgBQADABABADIACABQAFAEADAEIAAAAIADAFIAAAJQgFgHgGgGg");
	this.shape_117.setTransform(-2.6,14.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],3.9,-3.2,0,3.9,-3.2,7).s().p("AAOA4QgQgPgOgWQgcgoAEgyQAJAuAdAqQAVAkAWATQgMgFgPgLg");
	this.shape_118.setTransform(-11.9,6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#CCD72C","#519900","#143C27"],[0,0.592,1],0.8,-6.9,0,0.8,-6.9,4.2).s().p("AgDBNIgChVIAAgKIAAgFIAAg1IAAAAIAHAEQAAAZADA4QACAqgBAaIgJAAg");
	this.shape_119.setTransform(-0.5,17.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],0.9,1.5,0,0.9,1.5,4.2).s().p("AACALIgHgFIAAgRIABACIAHAEIADABQgBAHABAJIgEgBg");
	this.shape_120.setTransform(-0.5,8.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#8BB614","#306714","#14201C"],[0,0.592,1],2.6,-2.4,0,2.6,-2.4,7).s().p("AAiBQIgFgBQgXgSgVgkQgcgqgKguIADgTIAJAaQANAiADAFIAOAVQAJAPAEAGIAaAhQAJAKARAOIgGABQgHAAgHgDg");
	this.shape_121.setTransform(-10.6,5.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],1.4,-1.2,0,1.4,-1.2,7).s().p("AAQBGIgYghQgFgGgKgPIgNgVQgEgFgNgiIgJgaIACgKIAGgNQgBAcAbAxQAcA1AjAgIAXASIAFADIgKACIgGABIgFABQgQgOgKgKg");
	this.shape_122.setTransform(-9.4,4.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#609014","#236714","#141515"],[0,0.592,1],0.3,8.6,0,0.3,8.6,4.2).s().p("AAABAIgJgEIgCgCQABhXAKgiIADABQAGABADACQgJBDgDA4IAAAAg");
	this.shape_123.setTransform(0,1.5);

	this.mcItem = new lib.mcTask_Items();

	this.addChild(this.mcItem,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.mcResult,this.mcCorrect,this.mcWrong);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-24.8,40,49.8);


(lib.mcPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Still":0,Down:1,Up:2,Right:3,Left:4,Hurt:5});

	// char
	this.instance = new lib.mc_galidle();
	this.instance.setTransform(0.9,-7.1);

	this.instance_1 = new lib.mc_galdown();
	this.instance_1.setTransform(0.9,-7.1);

	this.instance_2 = new lib.mc_galup();
	this.instance_2.setTransform(0.9,-7.1,1,0.999);

	this.instance_3 = new lib.mc_galright();
	this.instance_3.setTransform(0.9,-7.1);

	this.instance_4 = new lib.mc_galleft();
	this.instance_4.setTransform(0.7,-7.1,1.001,1,0,0,180);

	this.instance_5 = new lib.mc_galhurt();
	this.instance_5.setTransform(0.9,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,0,0)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-41.1,40,61.1);


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
	this.instance.setTransform(0.1,0,1,1,0,0,0,0.8,0);

	this.instance_1 = new lib.mc_spider3down();
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,0.8,0);

	this.instance_2 = new lib.mc_spider3up();
	this.instance_2.setTransform(0.1,0,1,1,0,0,0,0.8,0);

	this.instance_3 = new lib.mc_spider3right();
	this.instance_3.setTransform(0.1,0.1,1,1,0,0,0,1.9,0.1);

	this.instance_4 = new lib.mc_spider3left();
	this.instance_4.setTransform(-5.5,0.1,1,1,0,0,0,1.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,0,0)").s().p("AjGDHIAAmNIGNAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-20,47.8,44);


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
	this.pbBack = new lib.pbBack();
	this.pbBack.setTransform(917.8,13.2);

	this.pbHelp = new lib.pbHelp();
	this.pbHelp.setTransform(64.1,52.8,1,1,0,0,0,39.6,39.6);

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
	this.mcLife.setTransform(612.7,694.6,1,1,0,0,0,55.3,21.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFFFD").s().p("Ag5hPQAgAAAaAEQATAEAPAQQAXAYAAAfQAAAhgXAXQgPAQgTAFQgaACggAAg");
	this.shape.setTransform(706.6,694.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFFFD").s().p("AAABNQgTgGgPgPQgXgYAAggQAAggAXgXQAPgQATgEQAagDAggBIAACeQggABgagDg");
	this.shape_1.setTransform(317.4,694.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A6jELQhvAAhOhOQhPhPAAhuQAAhtBPhPQBOhOBvAAMA1HAAAQBGAAA5AfIAAAAIAQAKQAZAPAVAWQBPBPAABtQAABuhPBPIguAlIgQAKQg5AfhGAAg");
	this.shape_2.setTransform(512,694.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0164A8").ss(8,1,1).p("AenhFQgShDg0g0QgWgWgYgPQgIgGgIgEIAAAAQg5gfhGAAMg1IAAAQhuAAhPBOQgzAzgRBBQgNAGgLALQgXAXAAAgQAAAgAXAYQALALANAGQARBAAzA0QBPBOBuAAMA1IAAAQBGAAA5gfQAIgEAIgGIAuglQAygyASg/QAOgGALgMQAXgXAAghQAAgfgXgYQgLgKgMgGg");
	this.shape_3.setTransform(512,694.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(1,100,168,0.933)").s().p("A6jELQhvAAhOhOQg0g0gShAQgMgGgKgLQgYgYAAggQAAggAYgXQAKgLAMgGQAThBAzgzQBOhOBvAAMA1HAAAQBFAAA6AfIAAAAIAQAKQAZAPAVAWQA0A0ASBDQAMAGAKAKQAYAYAAAfQAAAhgYAXQgLAMgNAGQgSA/gyAyIguAlIgQAKQg6AfhFAAg");
	this.shape_4.setTransform(512,694.7);

	// Enemy (movable)
	this.mcCastMiEnemy_2 = new lib.mcEnemy();
	this.mcCastMiEnemy_2.setTransform(292,143);

	this.mcCastMiEnemy_1 = new lib.mcEnemy();
	this.mcCastMiEnemy_1.setTransform(242,143);

	this.mcCastMiEnemy_0 = new lib.mcEnemy();
	this.mcCastMiEnemy_0.setTransform(192,143);

	// User (movable)
	this.mcCastSiUser = new lib.mcPlayer();
	this.mcCastSiUser.setTransform(72,134.8,1,1,0,0,0,0,-8.2);

	// Still Items
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

	// mcRoute
	this.mcRoute = new lib.mcRoute();
	this.mcRoute.setTransform(511,375,1,1,0,0,0,460,240);

	// shadow
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFA110","#9BC21E","#66AD1C","#569120"],[0.008,0.486,0.863,1],0,-0.4,0,0,-0.4,518.8).s().p("EhH3AlgMAAAhK/MBqPAAAIAAMgMAlgAAAMAAAA+fgAPofPMAx/AAAIAAsgMgx/AAAgAvnMgIGRAAIAASvIStAAIAAyvIseAAIAAsgIsgAAgEhBmAfPMAx/AAAIAAsgMgx/AAAgEAiYAMgIfPAAIAAsgI/PAAgAPoMgIMfAAIAAsgIsfAAgEgu3AMgIZBAAIAAsgI5BAAgEhBmAMgIMgAAIAAsgIsgAAgA8HmOIfPAAIAAMeIGPAAIAAseISwAAIAA5AI4/AAIAASvI/PAAgEAiYgGOIfPAAIAAsgI/PAAgEhBmgGOIfPAAIAAmRI/PAAgA8HyuIZAAAIAAsgI5AAAgEhBmgSuIfPAAIAAsgI/PAAg");
	this.shape_5.setTransform(508,379);

	// Bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLQAAgLAIgJQAFgEAHgCQAHAFAIAAIAJgBIADACIABADQAAAIAHAHIAAAAIAAACIAAADQgCAKgGAGIgDACQgHAHgKAAQgKAAgJgJg");
	this.shape_6.setTransform(351.9,531.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEADAFAAQAFAAAFgEQAEABAEADIADAEIAGAGQADAGAAAHQAAALgJAIQgIAJgLAAQgLAAgIgJg");
	this.shape_7.setTransform(356.6,534.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIAAAAQgHgHAAgIQAAgDACgEQACgDADgDIAFgEQADgCAFAAIAAgBQAJAAAGAHIACABQACADABAEIABAFQAAAHgEAGIgCACIgDACQgFAEgHAAQgDAAgFgDg");
	this.shape_8.setTransform(356.2,529.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgGIgDgEQgCgEgBgEQAEgFAAgGIAAgHIAEgGIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgIAAgHgFg");
	this.shape_9.setTransform(360.8,530.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGQgBAEgCADIgFAEQgDADgCAEIgHADIgIABQgIAAgIgFg");
	this.shape_10.setTransform(352.7,526.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgGQAAgJgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAALgJAJIgEADIgFADQgFACgFAAg");
	this.shape_11.setTransform(358,525.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEACAFABQAFgBAFgDQAFABADAEIADACIAGAHQADAGAAAHQAAALgJAIQgIAJgLAAQgKAAgJgJg");
	this.shape_12.setTransform(280.6,537.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgSATQgKgIABgLQgBgLAKgJQAFgFAFgCQAIAGAIAAIAJgBIADACIACADQAAAIAGAHIAAAAIAAACIAAADQgBAKgHAGIgDACQgHAHgKAAQgLAAgHgJg");
	this.shape_13.setTransform(276,535.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIgBAAQgGgHAAgIQAAgDACgDQABgEADgDIAGgEQADgCAEAAIABgBQAJAAAFAHIACABIAEAHIABAFQAAAHgFAGIgCACIgDACQgFAEgGAAQgEAAgEgDg");
	this.shape_14.setTransform(280.3,533.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIIAEAFQAEAHAAAHIgBAGQAAAEgCADIgGAEQgDADgBAEIgHADIgIABQgJAAgHgFg");
	this.shape_15.setTransform(276.8,530);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgCgBQgFgGgKAAIgCABIgBgCIgDgEIABgGQgBgJgEgFQABgJAGgGQAJgIALAAQALAAAIAIQAJAJAAAKQAAAMgJAIIgEADIgFAEQgGABgEAAg");
	this.shape_16.setTransform(282.1,529);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgDgEAAgFQAFgEgBgHIgBgHIAFgFIADgDIAGgEQAFgBAFAAQAMAAAHAIQAJAIAAALQAAALgJAIQgHAJgMAAQgIAAgHgFg");
	this.shape_17.setTransform(284.9,534.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgJQAFgFAHgCQAHAGAIAAIAJgBIADACIABADQABAIAGAHIABAAIAAACIgBADQgBAKgHAGIgCACQgIAHgKAAQgKAAgJgJg");
	this.shape_18.setTransform(195.9,523.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIAAAAQgHgHAAgIQAAgDACgDQACgEADgDIAFgEQADgCAFAAIAAgBQAJAAAGAHIACABIADAHIABAFQAAAHgEAGIgCACIgDACQgFAEgHAAQgDAAgFgDg");
	this.shape_19.setTransform(200.2,522);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgIAAgMQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGQgBAEgCADIgFAEQgDADgCAEIgHADIgIABQgIAAgIgFg");
	this.shape_20.setTransform(196.7,518.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEACAFABQAFgBAFgDQAEABAEAEIADACIAGAHQADAGAAAHQAAALgJAIQgIAJgLAAQgLAAgIgJg");
	this.shape_21.setTransform(200.6,526.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgCgEgBgFQAEgEAAgHIAAgHIAEgFIADgDIAGgEQAFgBAFAAQAMAAAIAIQAIAIAAALQAAALgIAIQgIAJgMAAQgIAAgHgFg");
	this.shape_22.setTransform(204.8,522.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCABIgBgCIgEgEIAAgGQAAgJgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAAMgJAIIgEADIgFAEQgFABgFAAg");
	this.shape_23.setTransform(202,517.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgFgHIgEgDIgDgJQAFgEAAgHIgBgHQABgDADgCIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAALgIAIQgIAJgMAAQgIAAgHgFg");
	this.shape_24.setTransform(232,542.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHACgJIAFgDQAFACAFAAQAEAAAFgEQAFACAEACIADADIAFAHQADAGAAAHQAAALgIAIQgIAJgMAAQgKAAgJgJg");
	this.shape_25.setTransform(227.7,546.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIAAAAQgHgGAAgIQAAgDACgEQABgEAEgDQACgCADgBQADgCAFAAIAAgBQAJAAAGAGIABACIAEAGIABAGQAAAHgFAFIgBACIgEADQgFAEgGAAQgDAAgFgDg");
	this.shape_26.setTransform(227.4,541.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgCgBIgDgEIABgHQgBgIgEgFQACgJAFgGQAJgIALAAQALAAAJAIQAIAIAAALQAAALgIAJIgFADIgFADQgFACgFAAg");
	this.shape_27.setTransform(229.2,537.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAWIgDgDQgIgIAAgLQAAgLAIgIQAJgIAKAAQALAAAJAIIAEAFQAEAHAAAHIAAAGIgDAHQgDABgCADQgEADgBAEIgHADQgDABgFAAQgIAAgIgGg");
	this.shape_28.setTransform(223.9,538.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIABgLQgBgLAJgJQAFgFAHgCQAHAGAIAAQAFAAAEgBIACACIACADQAAAJAHAGIAAAAIAAACIAAADQgCAKgHAGIgCACQgHAHgKAAQgLAAgIgJg");
	this.shape_29.setTransform(223.1,543.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIgBgLQABgLAIgJQAFgFAHgCQAHAGAIAAQAFAAAEgBIADACIACADQAAAJAGAGIABAAIAAACIgBADQgBAKgHAGIgCACQgIAHgKAAQgKAAgJgJg");
	this.shape_30.setTransform(159.5,533);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgDQAHgFABgKIAGgEQAEADAFAAQAFAAAFgEQAFABADAEIADADIAGAHQADAFAAAHQAAALgJAIQgIAJgLAAQgKAAgJgJg");
	this.shape_31.setTransform(164.1,535.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgCgEgBgFQAEgEABgHIgBgHIADgFIAEgDIAGgDQAFgCAFAAQALAAAJAIQAIAJAAAKQAAALgIAIQgJAJgLAAQgIAAgHgFg");
	this.shape_32.setTransform(168.4,531.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIgBAAQgGgGAAgIQAAgDACgEQABgEADgDQADgCADgBQADgCAEAAIABgBQAJAAAFAGIACACQADADABADIABAGQAAAHgFAFIgCACIgDADQgFAEgGAAQgEAAgEgDg");
	this.shape_33.setTransform(163.8,531.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAWIgDgDQgIgIAAgLQAAgLAIgIQAIgIALAAQALAAAJAIIAEAFQAEAHAAAHIgBAGIgCAHQgDABgDADQgDADgBAEIgHADQgEABgEAAQgJAAgHgGg");
	this.shape_34.setTransform(160.3,527.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgFgEIABgHQABgIgFgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAIAAALQAAALgJAJIgDADIgHADQgEACgFAAg");
	this.shape_35.setTransform(165.6,526.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEADAFAAQAFAAAFgEQAFABADADIADAEIAGAGQADAGAAAHQAAALgJAIQgIAJgLAAQgKAAgJgJg");
	this.shape_36.setTransform(126.6,547.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgGIgDgEQgDgEAAgEQAFgFgBgGIgBgHIAFgGIADgDIAGgDQAFgCAFAAQAMAAAHAIQAJAJAAAKQAAAMgJAIQgHAIgMAAQgIAAgHgFg");
	this.shape_37.setTransform(130.9,544);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgSATQgKgIABgLQgBgLAKgJQAFgEAFgCQAIAFAIAAIAJgBIADACIACADQAAAIAGAHIAAAAIAAACIAAADQgBAKgHAGIgCACQgIAHgKAAQgLAAgHgJg");
	this.shape_38.setTransform(122,545.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIgBAAQgGgHAAgIQAAgDACgEQABgDADgDIAGgEQADgCAEAAIABgBQAJAAAFAHIACABQADADABAEIABAFQAAAHgFAGIgCACIgDACQgFAEgGAAQgEAAgEgDg");
	this.shape_39.setTransform(126.3,543.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgJAAgLQAAgKAIgJQAIgIALAAQALAAAJAIIAEAFQAEAHAAAHIgBAGQAAAEgCADIgGAEQgDADgBAEIgHADIgIABQgJAAgHgFg");
	this.shape_40.setTransform(122.8,540);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgKAAIgCAAIAAgBIgEgEIABgGQAAgJgFgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAALgJAJIgEADIgGADQgFACgEAAg");
	this.shape_41.setTransform(128.1,539);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#CCB12A","#A45030","#351A32"],[0,0.604,1],0.1,-7.7,0,0.1,-7.7,162.3).s().p("A3igPIARgBMAuDAAAIAwAAIAAAhg");
	this.shape_42.setTransform(251.3,560.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#CC792E","#5D1F33","#000033"],[0,0.604,1],1.7,-16.3,0,1.7,-16.3,162.3).s().p("A3xAuIAAhbQVEB8afhXIAAA2g");
	this.shape_43.setTransform(249.7,569.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],1.7,-12.5,0,1.7,-12.5,162.3).s().p("A3xgHIAAg5IAfABMAvEAAiIAAA6Qq9AkqBAAQuOAAsXhIg");
	this.shape_44.setTransform(249.7,565.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],6.4,-33.3,0,-6.5,-33.3,205.7).s().p("A28CjIgFgMQgFgMAAgFQAAgHALgIQAMgKAPACQgagQgEgGQgDgCAAgNQAAgIAFgDIAPgJQgOgKgPgIQgKgHAAgPQAAgOArgOQgrgjAAgJQAAgTAKgHQAGgGAbgEIgOgZQgKgQAAgMQAAgKADgCQAEgFAQACQAFAFAKAFQAYAKAUgGQAAADAEAAQAAAGgSAQQgQAQAAAVQAAATALAMQAPAOAbAAIgWAWQgLAPAAAJQAAALALAFIAhAKQgGATAAAJQAAAVAmALQAYAHAVAAQARAAAKgHQAqAhAsAAQAXAAAQgHQAOgGAEgHIAEAAIABgDQAMAaA5AAQAcAAASgSQATgSAHAAQARAAAJAHIAZAAQAAgYALgNQALgOAUAAQATAAARAOQAPANAMAAIAUAqQAHAPAeAAQAVAAAFgCQAKgDAMgPIAPAMQAMAIAUAAQAWAAAFgCQAMgDAFgPQAEAEARAGQAQAGAHAAQAdAAALgFIAPgLQAJARAIAGQAJAHAWAAQAkgHANAAQA0AUAQAAQArAAACgoQAjAUASAAQAKAAATgMIAVgLQAHAAARADQASADAHAAQAYAAAEgBQAMgFAAgUIAZANQAIADAKAAIAWgBQAMgCAGgKQASAeAWAAQAFAAALgFIAggSIADgDQAHAdAyAAQAeAAAXgQQAUgNAAgJQAAgDgGgKQgJgKAAgHQAAgIAGgEQAGgDASAAQAWAAAEABQALADAHAQIAAADQASgSAMgFQAIgEANAAQAiAAAAAfQAAAFgEAPQgGAPAAAFQAAAUAeAAQAGAAAVgFQAYgIALgHQADAlA6AAQAfAAAPgUQALgVAFgDIAaAHQAdAGAPAAQAeAAAIgOQAEgJgBglIAlAAIAPAJQAJAFABADQAfgRAXAAQAXAAAAAPQAAAFgFAJQgGAJAAAEQAAAFATANQAUAOAGAAQARAAAYgaQASgVACgMQABAKASAIQATAIASAAQATAAATgVQAFgFATgZQARAAAMAHQAMAHAVAAQAhAAADgCQAHgCAWgXQADADAbAHQAaAHADAAIAGAAQgYAPAAAIQAAAKAQAHQAJADAIAAQAWAAAggUQAVAPADAAQAPAJARAAQASAAAIgJQAFgFADgUIAAgBQACAFAKAKQANANAKAAQAcAAARgZQALgRAAgPQARADAPAAIALAJQAJAIAAAHQAAAFgLAKQgHAEgJAIQAIACALAKQAIAKAAAHQAAAMgBADQgFAKgVAGIAJAIIADAHg");
	this.shape_45.setTransform(249.2,542.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],4.6,-26.3,0,-8.3,-26.3,205.7).s().p("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");
	this.shape_46.setTransform(251,535.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],8.7,-16.5,0,-4.2,-16.5,205.7).s().p("AoVDFQgKgGgbggQgNAegcAAQgPAAgRgPQgTgPAFgOQgPAKgUAAQgLAAgPgHQgUgIAAgNQAAgJAWgOQAVgLAAgBQAAgMgEgGQgIgJgYAAQg4AAACAeQgXgKgMgDQgPgEgUAAQgZAAgGADQgEAEAAATQAAASAEAHIgEAAQgMgFgWgFIAAADQASA1gyAAQgEAAgPgFQgRgFgIAAIgWAPQgPAJgVAAQgdAAgQgPQgRgPAIgUQgIADgFAKQgMAHgoAAQgXAAgMgLQgKgJAAgOQAAgYAZgUIgFAAQAAgBgIAFQgMAHgJAAQgMAAgRgLQgSgNAAgWQAAgZAmgmQgjACgKgEQgMgEAAgQQAAgRATgLQAbgLALgJQgdADgNgGQgUgIAAgaIAAgCIADgDQARgVAjAAQAdAAAVAQIAGAAQgHgbAEgIQAHgPAqAAQgIADgCADQgDAEAAAGQAAAMAUAGQARAGAPgEQg0APAAAaQAAAIAKAFQAIAEAIAAIARgBQAJgCAAgHIAEAAQgEAEAAANQAAALAKAJQAJAHALAAQASAAAPgRQANgOAAgJIAAgEQAFAHAJAIQANAJALgBQAPgGgBgaIgIgfIAhAAIAsARQgIgiAgAAIASABQAHACADAOQAEgKADgEQAJgHAOAAQAQAAAOANQAMAMAAAGQAEgIADgMQAGgHAYAAQAPAAAMAHQALAFAAAGQAAgMAPgIQAOgIAXAAIAQABQAGADAJANIAHgSQAJgNARAAIAlAAQAFADAAAJQAAADgPAXIgSAZQAAAHAPAEQAMADANAAQATAAADgBQAIgCACgOIAQAPQACACANAAQAMAAAPgOQANgKAGgMQAJAGAOACIAMACQArAAAFgUQAFgNgMgSIArAAQACgXAjAAQAfAAAMANQAJAIgBAHQAHgOAbAAQAWAAAEAQQALgHAKAAQANAAAMAIQANAIgCALIATgOQAGgDAQAAIAbABQAGACADAOQAAgNALgDIAZgBQAYAAAFADQARAGADAcQAFgFASgHQAUgIAPAAQAbAAAGAGIAAAOQAAAKgPAGQgPAHAAAKQAAASAoAAQAmAAAYgcQACAGAKAHQALAIAMAAQAWAAANgOQAKgKAAgMQAAgEgKgUIAwgLQAbAAAHAPQADAEAAATIAOgKIANgBQAUAAADADQAJAIgEAkIBCAAQALgEAQgUQAMgTAIAAQAUABAOAGIAJgKIALgLQAGABANAKIATAMQgDgNAGgFQAHgJAWAAQAzAAgCAbIAKgNQAMgKAZAAQASAAAKAJQADACACAEQACgHAFgCQAFgCAYAAQAbAAAGABQARAFAGAUQAMgXAiAAQAJAAAIAHQAJAHgGAMIAAAEQAEgOARgMQASgPATAAQAPAAANAJQANAJgIAMQALgDAEAAIAFAAIgPAOIAAAbIAdAAQAfgJAPgMQAPgOgKgMIARANIAiAAQABgiAcAAQARAAAGAOIgBAEIAAADIACgCQADgEAOgGQAVgLADgEIAiAAQAAAYgEAJQAVgQAhAAIAJAAIAOACQAIACgEAPIAAAEQAWgJAEAAQASAAAIANQAFAIAAAHQAAAEgFAHQgFAGAAAEIAPgCQgSAPgHARQgGAOgRAAQgRAAgIgDQAEAFAEAHIADAJQAAAOgWALQgWALgZgGQALAOgKAZQgLAcglAAQgjAAgOgvQAAAEgQAPQgTARgSAAQgFAAgHgGQgJgJAAgOQAAgrAXgPIgUAAQgDAAgTANQgTAOgUAAQgJAAgPgOQgDAAgRABQgOAAgIAJIgNAeQgJAPgOAAQgKAAgXgKQAPAMgRAVQgSAVgkAAQgSAAgLgJQgHgEgIgIQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEABIgPAYQgMAOgZAAQgJAAgKgEQgOgGAAgMQAAgHAUgXQAUgYAAgFQAAgEgGgHQgFgEAAgCQgEAAgPAEIAAAHQAAgLgJgIQgJgJgKgCIgrAAQgCATgHAJQgKAPgaAAQAJAPgDAcQgGAigbAAQgFAAgIgEIgLgGQAHAJgKAVQgLAXgbAAQgrAAgUgcQgKAIgTAMQgWAPgFAAQgXAAgPgVQgNgUABgaQgEACgLAMQgPAKgOAAQgvAAAAgrIAFgdQgCgcgiAAQgwAAgMAaQgUgHgNAAQgYAAgGAEQgJAFAAASQAGAUAAAHQAAgGgZgPIgmAAIAAApQAFADAKAKIAIAKQAAAFAEABQABABAAAFQAAAIgPAKQgVARgtAAQggAAgTgNQgSgPAHgSQgEAHgJAIQgSASgZAAQglAAgUgPQgGgEgSgXQgLATgMAIQgOAIgWAAQgyAAgKgbQAAAQgOARQgUAYgkAAQgaAAgOgJQgBAAgXgVQgIASgDACQgMANgdAAQgsAAgKgIgAWPhJIADAAIAAgBIgDABgA2ggeQAAgLALgHQgLAJAAAMIAAgDg");
	this.shape_47.setTransform(246.9,525.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],5.3,-1.1,0,-7.6,-1,205.7).s().p("AxpBaQgKgJAAgLQAAgNAEgEIgEAAQAAAHgKACIgRABQgHAAgJgDQgJgFAAgJQAAgaA0gOQgPADgRgGQgUgDAAgMQAAgHADgDQACgEAHgDIABAAQAjAAAXAXIAAAFQABgWAJgIQALgHAaAAQAcAAAQATQAQgNAEgCQAQgIATgBQAXABAPAIIAVAPIAWgVQAOgIAhAAQAqAAAFAWQAXgRAMgFQATgHAbAAQAggBAKANQAUgLAMgDQASgJAcABQAZgBAKAIIARAPQgCgdBBAAQAZABAWAQQAFAAAAADQAKgSACgBQACgBAaAAQAqgCANAQQAygmApAAQASAAASAOQAOAJADAIQAggcAgAAQAXAAALAPQAKARAGAGIAdgUQAOgIAaABQAdgBAJAKQAKAHAAAVQASgQALgEQAMgHAkAAQAjABAGABQASAGASAdQAFAAAAACQARgXAEgBQAPgJAnABQBRAAAUA2QAUgXAIgGQAMgJAkABQAeAAAUAIQAYAJACAUQADgSAYgJQAQgHAPAAQAGAAAHAFIAeAVQAGgJAXgNQAYgOAJAAQAVAAAOAHQAQAKgBAOQADgSAWgEQAGgCAZAAQAWAAAFACQAMAGAFAdQABgNAYgKQAUgJAKAAQATAAAHAJIAOAaQAIgMAYgNQAagMAPAAQAlAAACAYQADgFAGgCIATgBQAOAAAIAOQALAOgHAHQAJgHAIgEQAMgGAWAAQAfgBAGAJQAGADgCATQgGgNgQAAQgdAAgBAhIgiAAIgQgNQAKAMgPAOQgPAMgfAJIgdAAIAAgbIAPgOIgGAAQgEAAgKADQAIgMgOgJQgNgIgOAAQgUAAgSAOQgQAMgEAOIAAgEQAFgLgJgIQgHgGgJgBQgjAAgMAXQgGgUgRgEQgFgCgbAAQgZAAgEACQgFADgDAGQgBgEgEgCQgKgJgSAAQgYABgNAJIgKANQADgbgzABQgXAAgHAIQgGAGADAMIgTgMQgNgKgGgBIgLAMIgIAJQgOgGgVgBQgHAAgNATQgQAUgLAFIhCAAQAFglgJgIQgDgDgUAAIgNACIgOAJQAAgSgDgFQgIgNgbAAIgwAJQAKAUAAAEQAAAMgKALQgMANgXAAQgMAAgKgIQgLgHgCgGQgYAcglAAQgpAAAAgSQAAgKAPgHQAPgFAAgLIAAgNQgFgGgcAAQgPAAgUAHQgRAHgFAFQgDgZgQgHQgFgDgYAAIgbABQgLADABAMQgEgNgGgCIgagBQgQAAgHAEIgSAMQABgKgMgIQgMgIgNAAQgLAAgLAHQgEgQgVAAQgbAAgIAPQACgIgJgIQgNgMgfAAQgjAAgCAWIgrAAQAMASgEALQgFAUgrAAIgMgBQgOgDgJgGQgHAMgNAKQgPAOgMABQgMgBgDgCIgPgPQgDAOgHACQgDABgTABQgNAAgMgEQgQgEAAgHIASgZQAQgVAAgCQAAgKgFgDIgmAAQgQABgJANIgIAPQgIgLgHgDIgQAAQgWAAgPAHQgPAGABANQgBgHgKgFQgMgEgPAAQgYAAgGAEQgDAMgFAIQAAgFgMgMQgNgMgRAAQgNABgJAFQgDADgEAKQgEgNgGgBIgSAAQggAAAHAfIgrgRIghAAIAHAfQACAagPAHQgMABgMgKQgKgHgEgIIAAAEQAAAKgNANQgPARgSAAQgLAAgJgHg");
	this.shape_48.setTransform(250.3,510.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEADAFAAQAFAAAFgEQAFABADADIAEAEIAFAGQADAGAAAHQAAALgIAIQgJAJgLAAQgKAAgJgJg");
	this.shape_49.setTransform(762.4,530.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgIQAFgFAGgDQAIAGAIAAIAJgBIADADIACACQAAAIAGAHIABAAIAAACIgBAEQgBAIgHAHIgDADQgHAFgKAAQgLAAgIgIg");
	this.shape_50.setTransform(757.8,527.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIgBAAQgGgHAAgIQAAgDACgEQABgDADgDIAGgEQADgCAFAAIAAgBQAJAAAFAHIACABIAEAHIABAFQAAAHgFAGIgCACIgDACQgFAEgGAAQgEAAgEgDg");
	this.shape_51.setTransform(762.1,525.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIIAEAFQAEAHAAAHIAAAGIgDAHIgGAEQgDADgBAEIgHADIgIABQgJAAgHgFg");
	this.shape_52.setTransform(758.6,522.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgFgGIgEgEQgCgEgBgEQAFgFAAgGIgBgHQABgDACgDIAEgDIAGgDQAFgCAFAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgIAAgHgFg");
	this.shape_53.setTransform(766.7,526.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgCgBQgFgGgJAAIgCAAIgCgBIgDgEIAAgGQAAgJgEgFQABgJAGgGQAIgIAMAAQALAAAIAIQAJAJAAAKQAAALgJAJIgDADIgGADQgFACgFAAg");
	this.shape_54.setTransform(763.9,521.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEACAFABQAFgBAFgDQAEABAEAEIADACIAGAHQADAGAAAHQAAALgJAIQgIAJgLAAQgLAAgIgJg");
	this.shape_55.setTransform(725.6,549.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgCgEgBgFQAEgEAAgHIAAgHIAEgFIADgDIAGgEQAFgBAFAAQAMAAAIAIQAIAIAAALQAAALgIAIQgIAJgMAAQgIAAgHgFg");
	this.shape_56.setTransform(729.8,545.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIAAAAQgHgHAAgIQAAgDACgDQACgEADgDIAFgEQADgCAFAAIAAgBQAJAAAGAHIACABIADAHIABAFQAAAHgEAGIgCACIgDACQgFAEgHAAQgDAAgFgDg");
	this.shape_57.setTransform(725.2,544.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLQAAgLAIgJQAFgFAHgCQAHAGAIAAIAJgBIADACIABADQAAAIAHAHIAAAAIAAACIAAADQgCAKgGAGIgCACQgIAHgKAAQgKAAgJgJg");
	this.shape_58.setTransform(720.9,546.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgIAAgMQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGQgBAEgCADIgFAEQgDADgCAEIgHADIgIABQgIAAgIgFg");
	this.shape_59.setTransform(721.7,541.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCABIgBgCIgEgEIAAgGQAAgJgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAAMgJAIIgEADIgFAEQgFABgFAAg");
	this.shape_60.setTransform(727,540.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgDQAHgFABgKIAGgEQAEACAFAAQAFABAFgEQAFABADADIAEAEIAFAHQADAFAAAHQAAALgIAIQgJAJgLAAQgKAAgJgJg");
	this.shape_61.setTransform(683.9,532.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgJQAFgFAGgCQAIAGAIAAIAJgBIADACIACADQAAAIAGAHIABAAIAAACIgBADQgBAKgHAGIgDACQgHAHgKAAQgLAAgIgJg");
	this.shape_62.setTransform(679.3,530.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIgBAAQgGgHAAgIQAAgDACgDQABgEADgDIAGgEQADgCAFAAIAAgBQAJAAAFAHIACABIAEAHIABAFQAAAHgFAGIgCACIgDACQgFAEgGAAQgEAAgEgDg");
	this.shape_63.setTransform(683.6,528.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgIAAgMQAAgKAIgJQAJgIAKAAQALAAAJAIIAEAFQAEAHAAAHIAAAGIgDAHIgGAEQgDADgBAEIgHADIgIABQgJAAgHgFg");
	this.shape_64.setTransform(680.1,525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgCgBQgFgGgJAAIgCABIgCgCIgDgEIABgGQgBgJgEgFQACgJAFgGQAJgIALAAQALAAAIAIQAJAJAAAKQAAAMgJAIIgEADIgFAEQgFABgFAAg");
	this.shape_65.setTransform(685.4,524);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgFgHIgEgDQgCgEgBgFQAFgEgBgHIAAgHQABgDADgCIADgDIAGgEQAFgBAFAAQALAAAJAIQAIAIAAALQAAALgIAIQgJAJgLAAQgIAAgHgFg");
	this.shape_66.setTransform(688.2,529.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgJQAFgFAGgCQAIAGAIAAQAFAAAEgBIADACIACACQAAAKAGAFIABAAIAAADIgBADQgBAKgHAGIgDADQgHAFgKABQgLAAgIgJg");
	this.shape_67.setTransform(641.8,542.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgEQgIgIAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIIAEAFQAEAHAAAHIAAAGIgDAHQgDABgDADQgDADgBAEIgHADQgEABgEAAQgJAAgHgFg");
	this.shape_68.setTransform(642.6,537.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTAUQgIgJAAgLIAAgEIACgCQAHgGABgKIAGgDQAEACAFAAQAFAAAFgEQAFACADADIAEACIAFAHQADAGAAAHQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_69.setTransform(646.4,545);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIgBAAQgGgGAAgIQAAgDACgEQABgDADgEQADgCADgBQADgCAFAAIAAgBQAJAAAFAGIACACIAEAHIABAFQAAAHgFAGIgCABIgDADQgFAEgGAAQgEAAgEgDg");
	this.shape_70.setTransform(646.1,540.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgFgHIgEgDQgCgEgBgEQAEgFABgHIgBgGQABgEACgCIAFgDIAFgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAALgIAJQgIAIgMAAQgIAAgHgFg");
	this.shape_71.setTransform(650.7,541.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgHQABgIgFgFQABgJAHgGQAHgIAMAAQALAAAIAIQAJAJAAAKQAAALgJAJIgDADIgGADQgFACgFAAg");
	this.shape_72.setTransform(647.9,536.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],1,-11.1,0,1,-11.1,95).s().p("At6gGIAAgzIASABIbiAeIAAAzQmbAhl4AAQoSAAnPhAg");
	this.shape_73.setTransform(706.4,561.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#CC792E","#5D1F33","#000033"],[0,0.604,1],1,-14.5,0,1,-14.5,95).s().p("At6ApIAAhRQMVBuPfhNIAAAwg");
	this.shape_74.setTransform(706.4,564.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#CCB12A","#A45030","#351A32"],[0,0.604,1],0.1,-6.8,0,0.1,-6.8,95).s().p("AtxgNIAKgBIa8AAIAcAAIAAAdg");
	this.shape_75.setTransform(707.3,556.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],3.7,-29.6,0,-3.9,-29.6,120.4).s().p("AtbCRIgCgMIgEgOQABgGAFgIQAIgIAJABQgQgOgCgGQgBgBAAgMQAAgHACgCIAJgIIgRgQQgGgGAAgOQAAgMAZgNQgZgfAAgHQAAgRAGgHQAEgFAPgDIgIgXQgGgOABgKQAAgJABgCQADgEAIACQAEAEAFAEQAOAJAMgFQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAFgLAOQgKAOAAATQAAAQAIALQAIANAQAAIgNATQgGANgBAIQABAKAFAEIAUAJQgDARAAAIQAAATAWAJQAOAHAMAAQAKAAAHgHQAYAeAaAAQANAAAJgGQAJgGACgGIACAAIABgCQAHAXAhAAQARAAAKgQQAKgRAFAAQAKAAAFAHIAPAAQAAgVAHgMQAFgMANAAQAKAAAKAMQAJAMAIAAIALAkQAEAOASAAQAMAAADgBQAGgDAHgOIAJALQAHAHALAAQANAAAEgBQAGgDAEgOQACAEAJAFQAKAGAEAAQARAAAGgFIAJgKQAFAPAFAFQAFAHANAAQAVgGAHAAQAgASAJAAQAZAAABgkQAVASAKAAQAGAAALgLIAMgKQAFAAAKADQAKADAEAAQAOAAACgBQAIgFgBgSIAPAMQAFADAFAAIANgBQAHgCAEgJQALAbALAAQAEAAAGgFIASgPIADgDQADAaAdAAQASAAAOgPQAMgLAAgIQAAgDgEgJQgFgJAAgGQAAgHADgDQAEgEAKAAQANAAADACQAGACAEAPIAAADQALgRAGgEQAFgEAIAAQATAAAAAcIgCARQgDANAAAFQAAASASAAQADAAAMgFQAOgGAHgHQABAhAjAAQASAAAIgSQAHgSADgDIAPAGQAQAGAJAAQASAAAFgNQACgIgBggIAWAAIAJAHQAFAEABAEQASgPAOAAQANAAAAANQAAAEgDAIQgEAIAAAEQAAAEAMAMQALAMAEAAQAKAAAOgXQAKgTABgLQABAJAKAIQAMAHALAAQAKAAALgTIAPgaQAKAAAHAGQAHAGAMAAQATAAACgCQAEgCAMgUQACACAQAGQAQAHABAAIADAAQgNANAAAHQAAAKAKAFQAFADAFAAQANAAARgRIAPANQAIAIAKAAQALAAAFgIQADgFABgRIAAgBQACAEAFAJQAIALAHAAQAPAAAKgWQAHgPAAgNIASADIAHAHQAGAIAAAFQgBAFgGAJIgKALQAFACAGAIQAFAJABAGQAAALgCADQgCAIgNAGIAGAHIACAHg");
	this.shape_76.setTransform(706.1,540.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],2.7,-23.3,0,-4.8,-23.3,120.4).s().p("Aj9C2QgIAAgVAFQgMAAgGgGQgEgFgFgQIgJAKQgHAFgRAAQgEAAgKgFQgJgGgCgEQgEAOgGADQgEABgNAAQgLAAgHgGIgJgMQgHAOgGADQgDABgMAAQgRAAgFgNIgLglQgHAAgJgLQgKgNgLAAQgMAAgGANQgHALAAAVIgOAAQgGgGgKAAQgEAAgLAQQgKAQgRAAQghAAgHgXIgBACIgCAAQgCAHgIAGQgKAGgNAAQgaAAgYgeQgHAGgKAAQgMAAgOgGQgWgKAAgSQAAgIADgRIgTgKQgGgDAAgKQAAgKAHgOIAMgTQgQABgIgNQgHgLAAgPQAAgSAKgOQAKgOAAgGQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQgMAFgNgJQgGgDgDgFIADABQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAQgLgHgCgGQgBgDAAgIIAAgCIAAgCQAAgKAHgIIACgBQAKgGAVABQgGgKAAgNQAAgNARgEQAQgEALAHQgEgNAHgNIAAACQAAAXAMAHQAHAFARgCQgGAHgQAKQgLAKAAAPQAAAOAHAEQAGADAUgBQgWAjAAAWQAAATALAMQAJAKAIAAQAFAAAHgHQAFgEAAABIADAAQgPAQAAAVQAAANAGAIQAHAJANAAQAYAAAHgGQADgIAEgEQgEASAKANQAJAOARAAQAMAAAJgIIANgNQAFAAAJAFIAMAEQAdAAgLgvIAAgEQANAFAHAEIADAAQgDgFAAgRQAAgOADgEQADgDAPAAQALAAAJAEIAVAMQgBgbAgAAQAOAAAFAIQADAFAAALIgNAJQgNAMAAAIQAAALAMAIQAJAGAHAAQALAAAJgJQgDAMALAOQAKANAIAAQARAAAIgbQAPAdAGAFQAGAHAaAAQARAAAHgLQACgCAFgQIANATQAIAIAPAAQAWAAAMgWQAIgPAAgOQAFAYAeAAQANAAAIgIQAHgGAGgRQALAUADAEQAMANAWAAQAOAAALgQQAFgHADgGQgFAQALANQALALAUAAQAYAAAMgOQAKgJAAgIQAAgEgCgBQgBgBAAgEIgFgJIgJgLIAAgjIAWAAQAPANAAADIgDgVQAAgRAFgEQADgDAOAAQAIAAALAGQAHgYAcAAQAUAAACAZIgDAbQAAAjAbAAQAIAAAJgJIAJgLQgBAXAIARQAJATANAAQADAAANgNIARgSQALAZAaAAQAQAAAGgVQAGgSgEgIIAGAFQAFAEADAAQAQAAADgcQACgZgFgOQAPAAAGgNQAEgIABgRIAZAAQAGACAFAIQAFAHABAKIAAgHIALgDIADAGQADAFAAAEQAAAFgLAUQgMAVAAAFQAAAKAIAFQAFADAGAAQAOAAAIgLIAJgUIACAAIABgDQAFAIAEADQAGAGAKAAQAWAAAKgRQAKgSgIgLQANAJAFAAQAJAAAFgNIAIgaQAFgJAIAAQAKgBACgBQAIAOAFAAQAMAAALgNQALgNACAAIAMAAQgOAPAAAmQAAANAGAHQAEAGADAAQAKAAALgQQAKgMAAgEQAIApAVAAQAVAAAHgZQAFgVgGgNQAOAGAOgKQAMgKAAgOIgCgIIgEgKQAEACAKAAQAKAAAEgMQAEgPALgNQANgCAEAAQAHADAAAPQAAAJgFAIIgLANIAQAMQAFAEAAAPQAAAGgFAFQgFAFAAAJIgDAAIADAAIAAAAQAJgEAHAIQAGAGAAAKQAAAHgFAIQgCAFgHAIQAHAAAHAFQAGAGAAAMQAAAJgDACQgJAHgIAKIANAPQAEAEAAAFQAAAKgCACQgBAEgOACIAFAFIgTgCQAAAMgHAQQgJAWgQAAQgHAAgHgLQgGgJgBgFIAAABQgCASgDAFQgEAHgLAAQgKAAgJgHIgOgOQgSASgNAAQgFAAgFgDQgKgGAAgJQAAgHAOgOIgDAAQgCABgQgHQgPgGgCgCQgNAUgDACQgDACgTAAQgMAAgHgHQgHgGgKAAIgOAbQgMASgKAAQgLAAgLgHQgLgHAAgJQgCALgKASQgOAXgKAAQgEAAgLgLQgLgMAAgFQAAgDADgJQADgHAAgEQAAgOgNAAQgOAAgSAPQgBgDgFgFIgIgHIgWAAQAAAhgCAHQgEAOgTAAQgIAAgRgHIgPgGQgDADgHATQgIARgSAAQgiAAgCghQgGAHgPAGQgMAFgDAAQgSAAAAgSQAAgEADgNIADgSQAAgbgUAAQgIAAgFAEQgGAEgLAQIAAgDQgEgOgGgDQgDgBgMAAQgLAAgEADQgDADAAAIQAAAGAFAJQAEAIAAAEQAAAHgMAMQgOAOgRAAQgdAAgEgaIgCADIgTAQQgGAFgBAAQgOAAgLgbQgDAJgHACIgNAAQgGAAgFgDIgOgLQAAASgHAEQgDACgOAAQgEAAgKgEQgKgDgEAAIgNALQgLALgGAAQgKAAgVgTQgBAkgZAAQgJAAgfgRg");
	this.shape_77.setTransform(707.1,534.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],5.1,-14.7,0,-2.5,-14.7,120.4).s().p("Ak3CvQgGgGgQgcQgIAagQAAQgJAAgKgNQgKgNACgNQgJAKgLgBQgHABgJgHQgLgHAAgMQAAgHANgNIAMgKQAAgLgCgFQgFgJgOAAQghAAABAbIgVgLQgIgEgMAAQgPAAgDADQgCAEAAAQQAAARACAFIgCAAQgHgEgNgFIAAAEQAKAvgdAAIgLgEQgKgGgFAAIgNAOQgIAIgNgBQgQAAgKgNQgKgNAFgTQgFAFgDAIQgHAGgXAAQgNAAgHgKQgHgHAAgNQAAgVAPgSIgDAAQAAgBgFAEQgHAGgFABQgHAAgJgKQgMgMAAgTQAAgWAXghQgUABgGgDQgHgFAAgNQAAgPALgKQAQgKAGgIQgRACgIgEQgLgIAAgXIAAgCIABgCQAKgTAVAAQARAAAMAOIAEAAQgFgXADgHQAEgPAYAAQgEADgBAEQgCADAAAFQAAALAMAFQAKAFAJgDQgfANAAAXQAAAIAGAEQAFADAEABIAKgBQAGgCAAgGIACAAQgCADAAALQAAAKAFAIQAGAGAGAAQALABAIgQQAIgLAAgKIAAgCQACAGAGAGQAIAKAGgCQAJgFgBgXIgEgcIATAAIAaAPQgFgeATAAIALAAQADADACAMQADgJACgDQAFgGAIAAQAJAAAIALQAHAKAAAGQADgHABgLQAEgGAOAAQAJAAAHAGQAGAFAAAFQAAgLAJgHQAIgHANAAQAJAAABABQAEACAFAMIAEgQQAFgLAKAAIAWAAQADADAAAIQAAACgJAVIgLAWQAAAFAJAEQAHADAIAAQALAAACgBQAEgBABgNIAKANQABACAIAAQAGAAAJgMQAIgJADgLQAGAFAIADIAHABQAZAAADgSQADgLgHgQIAZAAQABgVAVABQASgBAHAMQAFAHAAAGQAEgNAQABQAMAAADAOQAGgGAGAAQAIgBAHAIQAHAHgBAKIALgNQAEgCAJAAIAQABQADABACANQAAgMAHgCIANgBQAOAAADACQAKAGACAYQADgFAKgFQAMgHAJAAQAQAAADAFIAAAMQAAAJgJAGQgIAGAAAJQAAAPAXAAQAWAAAOgYQABAFAHAGQAGAHAHABQANgBAHgMQAGgJAAgKQAAgFgGgRIAcgJQAQAAAEAMQACAFAAAQQAFgHADgBQADgCAFAAQAMAAACADQAFAHgDAgIAnAAQAGgDAKgSQAHgSAEABQAMABAIAFIAFgIIAHgKQADABAIAIIALALQgCgMAEgEQAEgIANAAQAeAAgBAYIAFgMQAIgIAOAAQALAAAFAHQACACACAEQABgHADgBQACgCAPAAQAPAAAEABQAKAEADASQAHgUAUAAQAGAAAEAGQAFAGgDALIAAADQADgMAJgLQALgNALAAQAJAAAHAIQAIAHgFAMQAGgDADAAIADAAIgJAMIAAAYIARAAQASgIAJgKQAJgNgGgKIAKALIAUAAQAAgdARgBQAJAAAEAMIAAAEIAAADIABgCQACgEAIgFQAMgKACgDIAUAAQAAAVgDAIQANgOATAAIAFAAIAIABQAFADgCANIAAADQANgIACAAQALAAAEAMQADAGAAAHQAAADgDAHQgDAFAAADIgCABIACAAIAAgBIAJgBQgKANgFAPQgDANgKAAQgKAAgFgDIAFALIACAHQAAAMgNAKQgNAKgOgFQAGANgGAVQgHAZgVAAQgVAAgIgpQAAADgJANQgLAQgLAAQgCAAgFgGQgFgIAAgNQAAgmANgNIgMAAQgBAAgLAMQgLAMgMAAQgFABgJgNQgCAAgKABQgIAAgFAJIgHAaQgFANgJAAQgGAAgNgJQAJALgKASQgLASgVABQgKAAgHgIQgEgDgFgIIgBADIgCAAIgJAVQgHAMgOAAQgGAAgGgDQgIgFAAgLQAAgHAMgUQALgVAAgEQAAgEgDgFIgDgGIgLADIAAAHQAAgKgFgIQgFgHgGgDIgZAAQgCASgDAIQgHANgPAAQAFAOgCAZQgDAegPAAQgDAAgFgFIgHgEQAFAHgHATQgGAVgPgBQgaABgMgZIgRARQgMANgDABQgOAAgIgTQgIgRAAgYIgJAMQgIAJgIAAQgcAAAAgmIADgaQgBgZgUAAQgcAAgHAYQgMgHgHABQgOAAgEADQgFAEAAAQIADAYQAAgFgOgNIgXAAIAAAlIAJAKIAFAJQAAAEACACQABABAAAEQAAAHgJAKQgNAOgaAAQgRAAgMgMQgKgMAEgRQgCAHgFAHQgMAPgOAAQgVAAgMgMQgEgEgKgUQgHARgHAGQgIAIgNAAQgdAAgGgZQAAAOgIAPQgMAXgVAAQgPgBgIgHIgOgTQgFAQgCACQgHAKgRAAQgaAAgFgGgAtKgaQAAgKAGgGQgGAIAAAKIAAgCg");
	this.shape_78.setTransform(704.7,525.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],3.1,-0.9,0,-4.4,-0.9,120.4).s().p("AqUBQQgGgIAAgKQAAgMADgDIgDAAQAAAHgGABIgKABQgEAAgFgDQgGgEAAgIQAAgXAfgNQgJADgKgFQgMgDAAgLQAAgFACgDQACgEAEgDIABAAQAUAAANAWIAAADQABgTAFgHQAGgHAQAAQAQAAAJASQAKgMACgBQAKgIALAAQANAAAJAIIAMANIANgUQAIgHAUAAQAYAAADAUQAOgPAGgEQAMgHAQAAQASAAAGAMIASgOQAMgHAQAAQAOAAAHAHIAJAOQgBgaAmAAQAPAAAMAOQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAHgQQACgBAPAAQAZgDAHAPQAdgiAYAAQALAAAKAMQAJAJABAGQATgYATAAQANAAAHANQAGAPADAFIARgRQAIgHAPAAQAQAAAGAIQAGAHAAATQAKgOAHgFQAHgFAVAAQAUAAAEACQALAFAKAZQAAAAABAAQABABAAAAQAAAAABAAQAAABAAAAQAKgUACgCQAIgHAYAAQAvAAAMAwQALgUAFgFQAHgIAVAAQASAAAMAHQANAJACARQACgQANgIQAKgFAIAAQAEAAAEAEIARATQAEgIAOgMQAOgNAFAAQAMAAAIAHQAKAIgBANQACgQANgEQADgCAPAAQANAAADACQAHAGADAZQAAgLAOgJQAMgHAGAAQALAAAEAHIAIAXQAFgKAOgLQAPgLAJAAQAWAAABAUQACgEADgBQADgCAIAAQAIAAAFANQAHANgEAFQAFgFAEgEQAHgGANAAQASAAAEAHQADADAAARQgEgMgJAAQgRAAgBAeIgUAAIgJgLQAFAKgIAMQgJALgSAIIgRAAIAAgYIAJgMIgEAAQgCAAgGADQAFgMgIgIQgIgHgJAAQgLAAgLANQgJALgCAMIAAgDQADgLgFgHQgFgFgFAAQgUAAgHAUQgEgSgKgEQgDgBgQAAQgOAAgDACQgDABgBAGQgBgDgCgCQgGgHgKAAQgPAAgHAIIgGAMQABgYgeAAQgNAAgDAHQgEAFACAMIgMgLQgHgIgEgBIgGAKIgFAIQgIgFgMgCQgEAAgIARQgJASgHAEIgmAAQACgggFgHQgCgDgMAAQgFAAgCACQgDABgFAHQAAgRgCgEQgEgKgQAAIgcAHQAFARAAAFQAAAKgFAJQgIAMgNAAQgHAAgGgHQgGgGgBgFQgOAYgWAAQgYAAAAgPQAAgKAJgFQAJgGAAgJIAAgMQgDgFgRAAQgIAAgMAHQgKAFgDAFQgCgXgIgFQgDgCgOAAIgQAAQgHADABAKQgDgLgDgCIgPAAQgKAAgDACIgLALQABgIgIgIQgHgHgHAAQgHAAgGAHQgCgPgNAAQgPAAgFANQABgGgFgHQgIgMgSAAQgUAAgCAUIgZAAQAHARgCAJQgDARgZAAIgHgBQgIgCgGgFQgEAKgHAKQgJAMgHAAQgHAAgCgCIgJgNQgBAMgFACQgCABgLAAQgHAAgHgDQgKgEAAgGIALgVQAJgTAAgDQAAgHgDgEIgWAAQgKABgFALIgEAOQgFgKgEgCQgBgBgIAAQgNAAgJAHQgJAFABALQgBgGgGgEQgHgEgJAAQgNAAgEAEQgCALgCAGQAAgFgHgKQgIgJgKAAQgIAAgFAEQgCADgCAJQgCgMgEgBIgLAAQgSAAAEAcIgagPIgTAAIAEAbQACAXgJAGQgHABgHgJQgGgGgDgHIAAADQAAAJgHAMQgJAPgKAAQgHAAgFgGg");
	this.shape_79.setTransform(706.7,512.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgJAAgKQAAgLAJgJQAFgFAHgCQAHAGAIAAQAFAAAEgBIADACIABACQABAKAGAFIABAAIAAADIgBADQgBAKgHAGIgCADQgIAFgKABQgKAAgJgJg");
	this.shape_80.setTransform(891.2,424.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTAUQgIgJAAgLIAAgDIACgDQAHgGABgKIAGgEQAEADAFAAQAFAAAFgEIAIAFIADACIAGAIQADAFAAAHQAAALgJAJQgIAIgLAAQgLAAgIgIg");
	this.shape_81.setTransform(895.8,427);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgCgEgBgEQAEgFAAgHIAAgGIAEgGIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAALgIAJQgIAIgMAAQgIAAgHgFg");
	this.shape_82.setTransform(900,423.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIAAAAQgHgGAAgIQAAgDACgEIAFgHQACgCADgBQADgCAFAAIAAgBQAJAAAGAGIACACQACADABAEIABAFQAAAHgEAGIgCABIgDADQgFAEgHAAQgDAAgFgDg");
	this.shape_83.setTransform(895.5,422.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgEQgIgIAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGIgDAHQgDABgCADIgFAHIgHADQgDABgFAAQgIAAgIgFg");
	this.shape_84.setTransform(892,419.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgHQAAgIgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAALgJAJIgEADIgFADQgFACgFAAg");
	this.shape_85.setTransform(897.3,418.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgJQAFgFAHgCQAHAGAIAAQAFAAAEgBIADACIABADQABAJAGAGIABAAIAAACIgBADQgCAKgGAGIgDACQgHAHgKAAQgLAAgIgJg");
	this.shape_86.setTransform(844.4,402.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgDQAHgFACgKIAFgEQAFADAFAAQAEAAAFgEQAFABAEAEIADADIAFAHQADAFAAAHQAAALgIAIQgIAJgMAAQgKAAgJgJg");
	this.shape_87.setTransform(849,405.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIAAAAQgHgGAAgIQAAgDACgEQABgEAEgDQACgCADgBQADgCAFAAIAAgBQAJAAAGAGIABACIAEAGIABAGQAAAHgFAFIgBACIgEADQgFAEgGAAQgDAAgFgDg");
	this.shape_88.setTransform(848.7,400.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgFgHIgEgDIgDgJQAFgEgBgHIAAgHQABgDADgCIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAALgIAIQgIAJgMAAQgIAAgHgFg");
	this.shape_89.setTransform(853.2,401.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAWIgDgDQgIgIAAgLQAAgLAIgIQAJgIAKAAQALAAAJAIIAEAFQAEAHAAAHIAAAGIgDAHQgDABgCADQgEADgBAEIgHADQgDABgFAAQgIAAgIgGg");
	this.shape_90.setTransform(845.2,397.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgCgBIgDgEIABgHQgBgIgEgFQACgJAFgGQAJgIALAAQALAAAJAIQAIAIAAALQAAALgIAJIgFADIgFADQgFACgFAAg");
	this.shape_91.setTransform(850.5,396.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEADAFAAQAFAAAFgEQAEABAEADIADAEIAGAGQADAGAAAHQAAALgJAIQgIAJgLAAQgLAAgIgJg");
	this.shape_92.setTransform(793.6,426.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgJQAFgFAHgCQAHAGAIAAIAIgBIAEACIABADQABAJAGAGIABAAIAAACIgBAEQgBAJgHAGIgCADQgIAFgKABQgLAAgIgJg");
	this.shape_93.setTransform(788.9,423.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgGIgDgEQgCgEgBgEQAEgFAAgGIAAgHIAEgGIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgIAAgHgFg");
	this.shape_94.setTransform(797.8,422.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgGQAAgJgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAALgJAJIgEADIgFADQgFACgFAAg");
	this.shape_95.setTransform(795,417.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIAAAAQgHgHAAgIQAAgDACgEQACgDADgDIAFgEQADgCAFAAIAAgBQAJAAAGAHIACABQACADABAEIABAFQAAAHgEAGIgCACIgDACQgFAEgHAAQgDAAgFgDg");
	this.shape_96.setTransform(793.2,422);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGQgBAEgCADIgFAEQgDADgCAEIgHADIgIABQgIAAgIgFg");
	this.shape_97.setTransform(789.7,418.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHACgJIAFgDQAFACAFAAQAEAAAFgEQAFACAEACIADADIAFAHQADAGAAAHQAAALgIAIQgIAJgMAAQgKAAgJgJg");
	this.shape_98.setTransform(774.2,407);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLQAAgLAIgJQAFgFAGgCQAIAGAIAAQAFAAADgBIADACIADADQgBAJAHAGIAAAAIAAACIAAADQgBAKgIAGIgCACQgIAHgJAAQgLAAgIgJg");
	this.shape_99.setTransform(769.6,404.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAWIgDgDQgIgIAAgLQAAgLAIgIQAJgIAKAAQALAAAJAIIAEAFQAEAHAAAHIAAAGIgDAHQgDABgCADQgEADgBAEIgHADQgDABgFAAQgIAAgIgGg");
	this.shape_100.setTransform(770.4,399.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIAAAAQgHgGAAgIQAAgDACgEQABgEAEgDQACgCADgBQADgCAFAAIAAgBQAJAAAGAGIABACIAEAGIABAGQAAAHgFAFIgBACIgEADQgFAEgGAAQgDAAgFgDg");
	this.shape_101.setTransform(773.9,402.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgHQABgIgFgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAIAAALQAAALgJAJIgDADIgGADQgFACgFAAg");
	this.shape_102.setTransform(775.7,398.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgCgDIgEgJQAEgEABgHIgBgHQABgDACgCIAFgDIAFgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAALgIAIQgIAJgMAAQgIAAgHgFg");
	this.shape_103.setTransform(778.5,403.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#CC792E","#5D1F33","#000033"],[0,0.604,1],1.1,-14.5,0,1.1,-14.5,100.7).s().p("AuvApIAAhRQNEBvQbhOIAAAwg");
	this.shape_104.setTransform(833.3,444);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#CCB12A","#A45030","#351A32"],[0,0.604,1],0.1,-6.8,0,0.1,-6.8,100.7).s().p("AulgNIAKgBIckAAIAdAAIAAAdg");
	this.shape_105.setTransform(834.3,436.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],1.1,-11.1,0,1.1,-11.1,100.7).s().p("AuvgGIAAgzIATABIdMAeIAAAzQm0AhmPAAQoyAAnqhAg");
	this.shape_106.setTransform(833.3,440.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],3.9,-29.6,0,-4.1,-29.6,127.6).s().p("AuPCRIgDgMIgCgOQgBgGAHgIQAIgIAJABQgQgOgDgGQgBgBgBgMQABgHACgCIAJgIIgSgQQgFgGAAgOQAAgMAagNQgagfAAgHQAAgRAFgHQAFgFAQgDIgIgXQgHgOAAgKQABgJABgCQADgEAKACQADAEAGAEQAOAJANgFQAAABAAAAQAAABAAAAQABAAAAABQABAAABAAQAAAFgLAOQgLAOABATQgBAQAIALQAJANAQAAIgMATQgIANAAAIQAAAKAHAEIAUAJQgDARAAAIQAAATAXAJQAPAHANAAQALAAAGgHQAaAeAbAAQAPAAAKgGQAIgGACgGIACAAIACgCQAHAXAjAAQASAAALgQQAMgRAEAAQAKAAAHAHIAPAAQAAgVAGgMQAIgMAMAAQALAAAMAMQAIAMAIAAIAMAkQAFAOASAAQANAAAEgBQAFgDAIgOIAJALQAIAHAMAAQANAAAEgBQAHgDADgOQAEAEAJAFQAKAGAFAAQARAAAIgFIAJgKQAGAPAEAFQAGAHANAAQAXgGAIAAQAgASAKAAQAbAAACgkQAVASALAAQAGAAAMgLIANgKQAFAAAKADQALADAEAAQAPAAADgBQAHgFAAgSIAQAMQAFADAGAAIANgBQAIgCAEgJQALAbAMAAQAFAAAGgFIAUgPIABgDQAFAaAfAAQASAAAPgPQAMgLAAgIQAAgDgDgJQgGgJABgGQgBgHADgDQAEgEALAAQAOAAADACQAGACAFAPIAAADQALgRAHgEQAFgEAJAAQAVAAAAAcIgDARQgEANAAAFQAAASATAAQAEAAAMgFQAQgGAGgHQACAhAkAAQATAAAKgSQAGgSAEgDIAQAGQARAGAKAAQATAAAEgNQACgIAAggIAYAAIAIAHQAGAEABAEQATgPAPAAQANAAAAANQABAEgEAIQgDAIAAAEQAAAEAMAMQAMAMAEAAQAKAAAOgXQAMgTACgLQAAAJALAIQANAHALAAQALAAAMgTIAPgaQALAAAHAGQAHAGANAAQAUAAADgCQAEgCANgUQACACARAGQAQAHADAAIACAAQgOANAAAHQAAAKAKAFQAGADAFAAQAOAAATgRIAPANQAJAIALAAQALAAAEgIQADgFADgRIAAgBQABAEAGAJQAIALAHAAQARAAAKgWQAHgPAAgNIAUADIAHAHQAGAIAAAFQAAAFgHAJIgKALQAFACAHAIQAFAJAAAGQAAALgCADQgCAIgNAGIAFAHIADAHg");
	this.shape_107.setTransform(833.1,420.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],3.3,-0.9,0,-4.7,-0.9,127.6).s().p("Aq8BQQgGgIAAgKQAAgMADgDIgDAAQAAAHgGABQgDABgIAAQgFAAgFgDQgGgEAAgIQAAgXAhgNQgKADgKgFQgNgDAAgLQAAgFACgDQACgEAEgDIABAAQAWAAANAWIAAADQABgTAGgHQAGgHARAAQARAAAKASQAKgMADgBQAJgIANAAQANAAAKAIIANANIAOgUQAIgHAVAAQAaAAACAUQAPgPAHgEQAMgHARAAQAUAAAGAMIATgOQAMgHASAAQAPAAAHAHIAKAOQgBgaAoAAQAQAAANAOQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAHgQQACgBAPAAQAbgDAIAPQAfgiAZAAQAMAAALAMQAIAJACAGQAUgYAUAAQAOAAAHANQAHAPADAFIASgRQAJgHAQAAQARAAAGAIQAGAHAAATQALgOAHgFQAIgFAWAAQAVAAAEACQALAFALAZQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQALgUADgCQAIgHAZAAQAyAAANAwQALgUAGgFQAIgIAWAAQASAAANAHQAPAJABARQACgQAOgIQAKgFAKAAQAEAAAEAEIASATQAEgIAPgMQAPgNAFAAQANAAAIAHQAKAIAAANQACgQANgEQAEgCAQAAQAOAAACACQAIAGADAZQAAgLAPgJQANgHAHAAQALAAAEAHIAJAXQAFgKAPgLQAQgLAJAAQAXAAABAUQACgEAEgBQADgCAJAAQAIAAAGANQAGANgEAFQAGgFAEgEQAIgGANAAQAUAAAEAHQADADgBARQgEgMgKAAQgSAAAAAeIgWAAIgJgLQAGAKgKAMQgJALgTAIIgSAAIAAgYIAJgMIgDAAQgDAAgGADQAFgMgJgIQgHgHgKAAQgMAAgLANQgKALgCAMIAAgDQADgLgGgHQgEgFgHAAQgUAAgIAUQgDgSgLgEQgEgBgQAAQgQAAgCACQgDABgCAGQgBgDgCgCQgGgHgLAAQgPAAgIAIIgHAMQACgYggAAQgOAAgEAHQgDAFABAMIgLgLQgJgIgDgBIgHAKIgGAIQgIgFgMgCQgFAAgJARQgJASgHAEIgpAAQACgggFgHQgBgDgNAAQgGAAgCACQgDABgGAHQAAgRgCgEQgEgKgRAAIgeAHQAGARAAAFQAAAKgGAJQgHAMgPAAQgHAAgHgHQgGgGgCgFQgOAYgXAAQgZAAAAgPQAAgKAJgFQAJgGAAgJIAAgMQgDgFgRAAQgJAAgNAHQgLAFgDAFQgCgXgJgFQgDgCgPAAIgQAAQgIADABAKQgDgLgDgCIgRAAQgKAAgDACIgMALQABgIgIgIQgHgHgIAAQgHAAgGAHQgDgPgNAAQgRAAgEANQABgGgGgHQgIgMgTAAQgWAAgBAUIgbAAQAIARgDAJQgEARgaAAIgHgBQgJgCgGgFQgEAKgIAKQgJAMgIAAQgHAAgCgCIgJgNQgCAMgFACQgBABgMAAQgIAAgIgDQgJgEAAgGIAKgVQAKgTAAgDQAAgHgDgEIgXAAQgLABgFALIgFAOQgFgKgEgCQgBgBgJAAQgOAAgJAHQgJAFABALQgBgGgHgEQgHgEgKAAQgOAAgEAEIgFARQAAgFgHgKQgIgJgKAAQgJAAgFAEQgDADgCAJQgCgMgEgBIgLAAQgUAAAEAcQgBgCgZgNIgVAAQADAPABAMQACAXgJAGQgIABgIgJQgFgGgEgHIAAADQAAAJgHAMQgJAPgMAAQgHAAgFgGg");
	this.shape_108.setTransform(833.7,391.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],2.9,-23.3,0,-5.1,-23.3,127.6).s().p("AkNC2QgHAAgXAFQgNAAgGgGQgFgFgFgQIgJAKQgIAFgRAAQgFAAgKgFQgKgGgDgEQgDAOgHADQgEABgNAAQgMAAgIgGIgJgMQgIAOgGADQgDABgOAAQgRAAgFgNIgNglQgHAAgJgLQgLgNgLAAQgNAAgHANQgHALAAAVIgPAAQgGgGgKAAQgFAAgLAQQgLAQgSAAQgjAAgHgXIgCACIgCAAQgCAHgJAGQgKAGgOAAQgbAAgageQgHAGgKAAQgNAAgPgGQgXgKAAgSQAAgIADgRIgUgKQgHgDAAgKQAAgKAHgOIANgTQgQABgJgNQgIgLAAgPQAAgSALgOQALgOAAgGQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQgMAFgOgJQgGgDgEgFIAEABQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQgMgHgCgGIgBgLIAAgCQABgLAGgJIACgBQAKgGAXABQgGgKAAgNQAAgNASgEQARgEAMAHQgFgNAIgNIAAACQAAAXAMAHQAIAFASgCQgGAHgRAKQgMAKAAAPQAAAOAHAEQAHADAVgBQgXAjAAAWQAAATAMAMQAJAKAIAAQAGAAAHgHQAFgEAAABIADAAQgPAQAAAVQAAANAGAIQAHAJAOAAQAaAAAHgGQADgIAFgEQgFASAKANQAKAOASAAQANAAAJgIIAOgNQAGAAAKAFQAJAEADAAQAeAAgLgvIAAgEQAOAFAHAEIADAAQgDgFAAgRQAAgOADgEQAEgDAPAAQAMAAAJAEQAJADANAJQAAgbAiAAQAPAAAFAIQADAFAAALQAAABgOAIQgNAMAAAIQAAALAMAIQAKAGAHAAQAMAAAJgJQgDAMALAOQALANAJAAQASAAAIgbQARAdAGAFQAGAHAbAAQASAAAIgLQACgCAFgQIAPATQAJAIAPAAQAXAAAMgWQAJgPAAgOQAGAYAfAAQAOAAAIgIQAIgGAHgRQALAUAEAEQAMANAXAAQAPAAAMgQQAFgHADgGQgFAQAMANQALALAVAAQAaAAANgOQAKgJAAgIQAAgEgCgBQgBgBAAgEIgFgJIgKgLIAAgjIAYAAQAPANAAADIgDgVQAAgRAFgEQAEgDAPAAQAIAAAMAGQAIgYAdAAQAVAAACAZIgEAbQAAAjAeAAQAJAAAIgJIAKgLQgBAXAJARQAJATAOAAQADAAAOgNQAMgLAFgHQANAZAbAAQARAAAGgVQAHgSgFgIIAHAFQAFAEADAAQARAAADgcQACgZgFgOQAQAAAHgNQADgIACgRIAbAAQAGACAFAIQAFAHABAKIAAgHQAJgDADAAIADAGQADAFAAAEQAAAFgMAUQgMAVAAAFQAAAKAJAFQAFADAGAAQAPAAAJgLIAJgUIACAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAFAIAEADQAHAGAMAAQAWAAALgRQALgSgJgLQANAJAGAAQAJAAAGgNIAHgaQAGgJAJAAQAKgBACgBQAKAOAFAAQAMAAAMgNQALgNADAAIAMAAQgPAPAAAmQAAANAHAHQAEAGADAAQALAAAMgQQAKgMAAgEQAIApAWAAQAXAAAHgZQAGgVgGgNQAPAGAOgKQANgKAAgOIgCgIIgFgKQAFACALAAQAKAAAEgMQAFgPALgNQAOgCAEAAQAIADAAAPQAAAJgGAIIgLANIARAMQAFAEAAAPQAAAGgGAFQgFAFAAAJIgDAAIADAAIAAAAQAKgEAHAIQAHAGAAAKQAAAHgFAIQgDAFgHAIQAIAAAGAFQAHAGAAAMQAAAJgDACQgKAHgIAKQAFAGAIAJQAFAEAAAFQAAAKgCACQgCAEgOACIAFAFIgUgCQAAAMgHAQQgKAWgRAAQgHAAgIgLQgGgJgBgFIAAABQgDASgDAFQgEAHgLAAQgLAAgJgHIgPgOQgUASgNAAQgFAAgHgDQgJgGAAgJQAAgHAOgOIgDAAQgCABgRgHQgQgGgCgCQgNAUgEACQgDACgUAAQgNAAgHgHQgIgGgKAAIgPAbQgMASgMAAQgLAAgMgHQgLgHgBgJQgBALgMASQgOAXgLAAQgDAAgMgLQgMgMAAgFQAAgDADgJQADgHAAgEQAAgOgOAAQgOAAgTAPQgBgDgGgFIgIgHIgYAAQAAAhgCAHQgEAOgUAAQgJAAgRgHIgRgGQgDADgHATQgJARgTAAQgkAAgCghQgGAHgQAGQgNAFgDAAQgTAAAAgSQAAgEADgNIADgSQAAgbgUAAQgJAAgFAEQgHAEgMAQIAAgDQgEgOgHgDQgCgBgOAAQgLAAgEADQgDADAAAIQAAAGAFAJQAEAIAAAEQAAAHgMAMQgPAOgSAAQgfAAgFgaIgCADIgUAQQgGAFgCAAQgOAAgMgbQgDAJgIACIgNAAQgHAAgFgDIgPgLQAAASgHAEQgDACgPAAQgEAAgLgEQgLgDgEAAIgNALQgMALgGAAQgLAAgWgTQgBAkgbAAQgKAAghgRg");
	this.shape_109.setTransform(834.1,414);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],5.4,-14.7,0,-2.6,-14.7,127.6).s().p("AlKCvQgGgGgRgcQgIAbgSAAQgJAAgLgOQgLgNADgNQgJAKgMgBQgHAAgKgFQgMgIAAgMQAAgHANgNQAOgKAAgBQAAgKgDgFQgFgJgPAAQgiAAAAAbQgNgIgJgEQgJgDgMAAQgPAAgEADQgDAEAAAQQAAARADAFIgDAAQgHgEgOgFIAAADQALAwgeAAQgDAAgJgEQgKgGgGAAIgOAOQgJAIgNAAQgSAAgKgOQgKgNAFgSQgFADgDAJQgHAGgaAAQgOAAgHgJQgGgIAAgNQAAgVAPgSIgDAAQAAgBgFAEQgHAGgGAAQgIAAgJgJQgMgMAAgTQAAgWAXgiQgVACgHgDQgHgEAAgOQAAgPAMgKQARgKAGgIQgSACgIgEQgMgIAAgWIAAgDIACgDQAKgSAWAAQASAAANAPIADAAQgEgYADgIQAFgNAZAAQgEADgCADQgCADAAAFQAAALANAFQAKAFAKgDQghANAAAXQAAAIAGAEQAFADAFABQAIAAADgBQAGgCAAgGIADAAQgDADAAAMQAAAJAGAIQAFAGAHAAQAMABAJgPQAHgMAAgKIAAgCQAEAGAFAGQAIAKAIgCQAJgGgCgXQgBgLgDgQIAVAAQAZANABACQgEgeAUAAIALAAQAEADACAMQACgJADgDQAFgGAJAAQAKAAAIALQAHALAAAFIAFgSQAEgGAOAAQAKAAAHAGQAHAFABAFQgBgLAJgHQAJgHAOAAQAJAAABABQAEADAFALIAFgQQAFgLALAAIAXAAQADADAAAHQAAADgKAVIgKAVQAAAHAJADQAIADAIABQAMAAABgCQAFgBACgNIAJANQACADAHAAQAIAAAJgNQAIgKAEgKQAGAFAJADIAHABQAaAAAEgSQADgLgIgQIAbAAQABgVAWABQATAAAIALQAGAHgBAGQAEgNARABQANgBADAPQAGgGAHAAQAIgBAHAIQAIAHgBAKIAMgNQADgCAKAAIARAAQADACADANQgBgMAIgDIAOAAQAPAAADACQALAFACAaQADgGALgFQANgHAJAAQARAAADAFIAAANQAAAIgJAGQgJAGAAAJQAAAPAZABQAXAAAOgZQACAFAGAGQAHAIAHAAQAPgBAHgLQAGgKAAgKQAAgEgGgSIAegJQARAAAEAMQACAFAAAQQAGgGADgCQACgBAGAAQANAAABACQAFAHgCAgIApAAQAHgEAJgRQAJgRAFAAQAMABAIAFIAGgIIAHgKQADABAJAIIALALQgBgMADgEQAEgIAOAAQAgABgCAXIAHgLQAIgJAPAAQALAAAGAHQACACABADQACgFADgCQACgCAQAAQAQAAAEABQALAEADASQAIgUAUAAQAHAAAEAGQAGAHgDAKIAAADQACgMAKgLQALgNAMAAQAKAAAHAIQAJAIgFALQAGgDADAAIADAAIgJAMIAAAYIASAAQATgHAJgLQAKgMgGgLIAJALIAWAAQAAgdASgBQAKAAAEAMIgBAEIAAADIACgCQACgEAIgFIAPgNIAWAAQAAAVgEAIQAOgOAUAAIAGAAIAJABQAFADgDANIAAADQAOgIACAAQAMAAAFAMQADAGAAAHQAAAEgDAGQgEAFAAADIgCACIACAAIAAgCIAKgBQgLANgFAPQgEAMgKABQgLAAgFgCIAFAKIACAIQAAALgNAKQgOALgPgGQAGANgGAVQgHAZgXAAQgWAAgIgpQAAADgKANQgMAQgLAAQgDAAgEgGQgHgHAAgOQAAglAPgOIgMAAQgDAAgLAMQgMAMgMAAQgFAAgKgMQgCAAgKABQgJAAgGAJIgHAaQgGANgJAAQgGAAgNgJQAJALgLASQgLASgWABQgMAAgHgIQgEgDgFgIQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgJAVQgJAMgPAAQgGAAgFgDQgJgFAAgLQAAgHAMgUQAMgUAAgFQAAgEgDgFIgDgGQgDAAgJADIAAAGQgBgJgFgIQgFgHgGgDIgbAAQgCASgDAIQgHANgQAAQAFAOgCAZQgDAdgRAAQgDAAgFgDIgHgFQAFAIgHASQgGAVgRgBQgbABgNgZQgFAHgMAKQgOANgDABQgOAAgJgTQgJgRABgYIgKAMQgIAJgJAAQgeAAAAgmIAEgaQgCgZgVAAQgdAAgIAYQgMgHgIABQgPgBgEAEQgFAEAAAQIADAYQAAgFgPgNIgYAAIAAAkIAKALIAFAJQAAAFABABQACABAAAEQAAAHgKAKQgNAOgcAAQgTAAgLgLQgMgNAFgRQgDAHgFAHQgMAQgPAAQgXAAgMgNQgEgEgLgUQgHAQgIAHQgIAHgOABQgfAAgGgZQAAAOgJAPQgMAXgXAAQgPAAgJgJIgPgSQgFAQgCACQgIAKgSAAQgbAAgGgGgAt9gaQAAgLAHgFQgGAJgBALIAAgEg");
	this.shape_110.setTransform(831.6,405.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#E0CB31","#009933","#003A71"],[0,0.592,1],-0.8,-6.8,0,-0.8,-6.8,59.1).s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_111.setTransform(421.6,312.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#E0E038","#27B13C","#0E645D"],[0,0.592,0.984],-38.3,-25.4,0,-38.3,-25.4,59.1).s().p("AAAAJQgHgIgHAAQgDAAgGAEIgFADQAFgIgCgHIAHgGQALgHAHABQAKAAALANQAJALgBALIAAACIgYACQgCgEgDgHg");
	this.shape_112.setTransform(459.1,330.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],10.2,-9.6,0,8.7,-9.6,25.3).s().p("AAjBlQABgLgJgMQgLgOgMAAQgFAAgLAHIgHAFIgBABIABgCIABgHQAAgPgJgLQgJgMgOAAIgKABIgIADIAAgBIACgIQACgHAAgHQAAgPgMgNQgPgRgWAAQgKAAgFADIgBAAQgGgagGgKQgIgKgMgDQADgHAEgFQAIgLAMAAQANAAADALQAEAHABAXQACgPAJgNIAAABQAAAMAMADQAGABAKAAQgJAGAAALQAAALAKAFQAJAGAKgFQgCAJgBAHQABAHACAFQADAEAFAAQAJAAADgEIABgHQAAgMAHABQALgBAGAHQAFAFABAJQAAgFABgCQACgDAFAAQAHAAAEAGQAGAGgBAGIADgGIAGAAQAFAAADACQABADAAACQAAAJgLADQgMAFAAAJQAAAHADADQADADAKAAIAIgBQAGAAACgEQgDAKADAKQAEAMAKAAQAGAAACgDIAGgMIAEAEIAGAFIAIAAIABgMQACgHAHABQAEAAAGAJQAEAHACAGIABgFQACgDAEgDIAHAAIACAIQABAIgBACIAEgDIAEAAQAGAAACADQACABAAAGQAAAGgCACIgHAHQAMgCAEAFIhMAFIgKAAIgoADIAAgDg");
	this.shape_113.setTransform(458.5,322.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],5.2,-9.1,0,3.7,-9.1,25.3).s().p("ABfBiIAHgHQACgCAAgGQAAgGgCgBQgCgDgGAAIgFAAIgEADQABgCgBgIIgBgIIgHAAQgFADgBADIgCAFQgBgGgEgHQgGgJgEAAQgHgBgCAHIgBAMIgIAAIgGgFIgEgEIgGALQgCAEgGAAQgLAAgCgMQgDgKADgKQgBAEgGAAIgIABQgKAAgDgDQgDgDAAgHQAAgJALgFQAMgDAAgJQAAgEgCgBQgCgCgGAAIgFAAIgEAEQACgEgGgGQgFgGgGAAQgGAAgDADQgBACAAAFQgBgJgFgFQgGgHgLABQgHgBAAAMIgBAHQgEAEgIAAQgFAAgDgEQgDgFAAgHQAAgHADgJQgKAFgJgGQgKgFAAgLQAAgLAJgGQgKAAgGgBQgMgDAAgMIAAgBIABgCQAKgNAIAAQAPABAJANQAKANgEAVQAJgXALgMIAGgHQAFgCAIAAQANgBAEAYQADATgDARQAGAAAEAEQADADAAAEQABgGAMgRQAPgUAIAAQAJgBAEALQAEAHAAAKQAAAIgGAMIgIAOIAGAAQADACgCAEQACgBADgEQACgCAEgBIAAAGQACgCACgEIACgFIADADQACACAAAFQAAAJgPAFIAFAGQAFAGABADIAHgJQAFgFAGgBQACAEAAAGQAAAFgDAJIAFAAQADABACAEQABgHAHgIQAHgJAGAAQALAAAAATIAAAJQgBAGgEADIAGAAIAFAHIAAAAIABABQADgFAGgDQAFgDAEABQADAAADAEQADAEAAAHQAAAEgDAIQAHgDAHAAQAHAAAGAFQAGAGAAAGIgDAHIgBABIgmADQgFgFgLACgAhogyIAAABIABgDIgBACg");
	this.shape_114.setTransform(463.5,321.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],0.8,-8.9,0,-0.7,-8.9,25.3).s().p("ABpBjIADgHQAAgGgFgGQgGgGgHAAQgIAAgGAEQACgIAAgFQAAgGgCgEQgDgFgEAAQgDAAgFADQgHADgCAEIgBgBIgBAAIgFgGIgFAAQADgDABgGIAAgJQAAgTgLAAQgGAAgHAJQgHAIAAAHQgDgFgDAAIgFAAQADgJAAgFQAAgHgCgDQgEABgFAFIgGAJQgBgDgFgGIgGgGQAPgFAAgKQAAgEgCgDIgDgDIgCAGQgCAEgCACIAAgGQgDAAgDADQgCAEgCABQABgFgCgBIgHAAIAIgPQAGgLAAgJQAAgJgDgHQgEgLgKAAQgJAAgPAVQgNARAAAGQAAgEgDgDQgEgEgGAAQADgRgDgTQgEgYgOAAQgHAAgFADQAIgHAHAAQAQAAAGAQIAIAqIABgBQAFgQAKgKQAJgKAKAAQAIAAAHAGQAMAJAAAVIgEAMQgEAKgBAGQAFgIACgCQADgDAGAAQAEAAADACQABAEAAAGQAAAGgCAIQgCAEgEAFIAHgFQAFgDAFAAIAGAAQAEADAAAEQAAADgDAFIgFAKIAAABIAAACIAAgDQAFgGAGgEQAKgHAHAAQAFAAAFAGQAGAHAAAHIgCAKIgCAHQAEgEAGgDQAGgDAFAAQAGAAAGADQAHAFAAAIQgCANgFAHIABAAIAKgHQABgBAIAAQAJAAAEAEQAEADAAANIAAAJIgCAGIgPACgAgLAKIAAABIAEgDIgEACg");
	this.shape_115.setTransform(468,321.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],18.6,-11.8,0,16.8,-11.8,29.3).s().p("AhyCKQgrgHAAgNQAAgMASgLQAQgJAngMIgCAAQgPgEgIgEQgNgHAAgKQAAgSAVgMQASgLAVAAQAIAAAJADIAKABIAAABIABAAIgBgBQgDgDgGgEQgEgFAAgHQAAgLAIgQQAEgIAEgFIAAAJQAAAPASANQAMAIAKACIgMAGQgGADAAAIQAAAFADAGQAEAHAGADQgXgBgRAMQgRALAAARQAAAPAHAEQAHADAUAAQAaAAAYgHQARgFAEgEIADAAQABALAIAFQAGADAMAAQALAAAIgHIAVgVQAAAHAIAHQAGAHAIACIAAAAQAAAIAGAIIAJALIgKgFQgJgDgDAAQgKAAgHALIgDAHQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABIgegCIgfAEQgnADgsAAQgxAAgjgGgAA2h0QAHgNAMgJIAHgFIgFAHIgEAGQgKAFgHAKg");
	this.shape_116.setTransform(350.6,319.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],11.8,-11.1,0,10,-11.1,29.3).s().p("AgDBpQgIgEgBgLIgDAAQgEAEgRAFQgYAHgcgBQgUAAgHgCQgHgFAAgOQAAgSARgKQARgNAZACQgIgDgEgHQgDgGAAgGQAAgHAGgEIAOgGQgMgDgMgGQgSgNAAgQIAAgIQAIgIAJAAQANABAMAHIgEgEIgBgOQAAgWANAAQAPAAANARQgEgOAGgRQADgIAFgGIAAADQAAAQANAMQAJAIAJACQgQAIgDADQgRAMAAAQQAAAMAJAEQAGAEAHAAIAHgCIAFgCIACAAQgNAXAAAIQAAAKAFADQAEAEAKAAQAIgBAJgEQAKgDAJgIQAAALALAKQAOANAaAAIAJgBIgBAJIABAGIACAGIAAACQgNgDgRAHQgSAIAAAPQgIgCgGgGQgIgIAAgGIgVAUQgIAIgLAAQgMAAgEgEg");
	this.shape_117.setTransform(357.4,319.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],28,-19.7,0,24.3,-19.7,59.1).s().p("AgRBfIgFAAIgIAAIh5gCIgKAAIh8gEIgJAAIgvgCQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIAEgIQAGgKAKAAQAEAAAJADIAKAEIAAABIABAAIgBgBIgJgKQgGgJAAgHIAAgBQAAgPASgIQARgHANADIAAgDIgDgFIAAgHIAAgGQACgRAIgLQAMgPAUAAQAGAAAMAGIAMAHQgDgMAEgNIABgDIAFgKQAIgRAPgGIgKAIQgHAGABALQAAAMAKAIQAGAEAGACIgSANQgMAKAAAKQAAAFADADQACABAIABQgLADgIAJQgJAKAAANQAAAPATAAQAGAAADgCQAEgBAEgFIABAAQgCABABAHQAAAGADADQADADAJAAQAHAAAGgFQAGgHAAgIIAMAIQAGAEAEAAQAIAAABgBQAEgBACgJQgCAIAFAGQAHAGAIAAQAKAAAGgGQAGgIgEgKIALAAIAFAFIADAEQAAgDADgFQAFgFAEAAIAEADIADAFIAAACQABgIACgCQACgDAGAAQABAAAAAAQAAAAABAAQAAABABAAQAAABABAAQADAFAFAEIAGAEIAHABIgHAHQgFAFAAAIQAAAFAGAAIAGAAQAEgBADgGQgBALACADQADAEAGAAIAFgBQAEgBACgCQAAAIACAHIg8AAgAC/BJIAJAHQAGAEADAAQADAAAEgDIACgGQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAKAIQAGAAAFgJQAEgGAAgEIAHABIAHACQAGAAACgDIAEgHQABAFADACIAIAAQANAAADgIQAFgHAEAAQAGAAAEADQAFADADAHIAEgDIAFgCQAIAAAAAKQAAACgEAFQgEAEgBAEQAAAGAHAEIABAAIhGACIgBAAIgLABIhJABQAGgGgBgPg");
	this.shape_118.setTransform(396.4,325);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],-0.8,-6.5,0,-2.6,-6.5,29.3).s().p("Ag0BXQgLgJAAgMQgJAIgKAEQgKAEgIAAQgKAAgEgDQgFgEAAgKQAAgIANgYIgBAAIgFACIgHABQgJAAgGgDQgKgFAAgMQAAgQARgJQAFgEAQgHQgIgDgKgHQgPgNAAgQIAAgDQAHgKALgFIAEgGIAFgHQANgJAOAAQAEAAAGACIAEACQAJACAKAHQAUANALAPIACACIgBgJIgBgIQAAgOAFgGQAEgGALAAQAIAAALAKIAHAHIAIALQgCgIAGgMIAGAAQALAAAFAJQAFAJgDAJQADgEALAAQAHAAACAGIAAANIAIAAIAAAHIgEAIIAAAJIAOAAQAFgDAEgFQADgFAAgEIgCgEIgBgGIAAgHIAKAAQAFADABACIACAAQgCgCAAgKIAKAAIAIAKIAAAHIgHALIgCAEQgDAHAAAMQAAAMADAEIAGAJIgGgDQgHgDgNAAQgLAAgJAFQgPAGgJAQIgEAKIgBADQgEAOADAMIgMgHQgMgGgGAAQgUAAgMAPQgGALgCAQIgIABQgbAAgNgNgAAihEIAAgCIgBgBIABADg");
	this.shape_119.setTransform(370.1,314.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],11,-16.2,0,7.3,-16.2,59.1).s().p("Ag5CCIhEAAQgCgHAAgIQgDACgEABIgEABQgHAAgCgEQgCgDABgLQgDAGgEABIgHAAQgFAAAAgFQAAgIAEgFIAIgHIgIgBIgHgEQgFgEgEgFQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgGAAgCADQgCACgBAIIAAgCIgEgFIgDgDQgFAAgEAFQgDAFAAADIgDgEIgFgFIgMAAQAFAKgHAIQgFAGgKAAQgIAAgHgGQgFgGACgIQgDAJgDABQgBABgIAAQgEAAgGgEIgMgIQAAAIgGAHQgGAFgIAAQgIAAgDgDQgEgDAAgGQAAgHACgBIgCAAQgDAFgEABQgDACgGAAQgTAAAAgPQAAgNAJgKQAIgJALgFQgIgBgCgBQgDgDAAgFQAAgKAMgKIASgLQgGgCgHgEQgKgIAAgMQAAgLAHgGIAKgIQAJgEALAAQANAAAHADIAGADIACABIABAAIgDgBIgGgJQgDgHAAgMQAAgLADgIIACgEIAHgKQAEgGAFgCIAHgDIABAAIgBABQgEAGAAAKQAAARAMAJQAGAEAHACIACAAQgJAJgWAQQgMAJAAAIQAAAJADADQADADAKAAIACAAQgNAHgLAKQgNAIAAAFQAAANATAAQAHAAAEgDIAGgEIAAACIgBAEQAAALAGAHQAGAGAKAAQAIAAAIgKQAHgIACgJQAFAEAFADQAIAFAGAAQAKAAACgEIAEgQQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQADACACgBQAAgGAFgFQAHgKAJAAQAIAAAGAHQAFAEADAJQADgIADAAQABgCAJAAQAIAAADAHQABADAAAHIgBAIIgBAJIABAMQACAEAHAAQAGAAAJgIQAIgKAEgDQgCAOADAIQAEAJAJAAQAIAAAIgFIAMgMIAAgCQABALACAFQAEAGAJAAQANAAAEgPIAEgNIADAFQAEADADAAQADAAAFgFQAFgDAEgGIAHAFIAJABIAKAAQADgCAEgHIABAAQgEAGAAAJQAAALAFADQADADANAAQAOAAAHgFQAEgDAAgDIgDgIQgDgHAAgEQAAgGADgCQADgCAGAAQAIAAABAEIAFALQgCgGAGgHQAGgGAJAAQAJAAACAGIADAMIACAAIACgCIACAAQgEAKAAAFQAAAIAEADQACADAGAAQAFAAAFgDQAIgFgBgIIAJAJQAGAEAJAAQAHAAAFgGQAGgHgDgGIAFAAIAGABIACgKQADgGAFAAQAGAAAEAGQADAGAAAJIAAABQACgGAEgBIAHAAQAKAAACAGIAAAQIADAAQgDAJAAAFQAAAHAJAAQAGAAAEgDQAGgEAAgFIACAAQAAAKAFAFQAEADAIAAQAFAAABgDQAAgFACgDIABAAQgBACAAAIIAFAAIAFABIAGgBIAEgCIABAAQgCACgBADIAAAEQAAAMAGAIIAEADIAEACIgEAAIgHABIh2AFIgCAAIgHAAIhDACIgBAAQgGgEAAgGQAAgEAFgEQAEgFAAgCQAAgKgIAAIgFACIgFADQgCgHgFgDQgEgDgGAAQgEAAgFAHQgEAIgMAAIgIAAQgEgCAAgFIgEAHQgDADgFAAIgHgCIgHgBQAAAEgFAGQgFAJgFAAIgKgIQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgDAGQgDADgDAAQgDAAgGgEIgJgHQAAAPgFAGIhEABIgFAAg");
	this.shape_120.setTransform(413.4,321.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],-10.8,0.3,0,-12.6,0.3,29.3).s().p("AgJApIAAgJIAEgHIAAgHIgJAAIAAgNQgBgFgIAAQgLAAgCADQACgIgFgIQgFgKgKAAIgHABIABgBQAIgRATAAQALAAAMARIAKAVQgDgJAFgIQAIgJAQAAQAVAAAKASQAFAJAAAIIgHADQgFACgFAGIAAgHIgHgKIgLAAQAAAJACADIgCAAQgBgDgEgDIgLAAIAAAIIACAFIABAFQAAAEgDAFQgEAFgFACg");
	this.shape_121.setTransform(380,307.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],3.5,-12.6,0,-0.2,-12.6,59.1).s().p("AEnCXIgEgDQgGgIAAgLIAAgFQABgDACgBIgBAAIgEACIgGAAIgFAAIgFgBQAAgHABgCIgBAAQgCADAAAEQgBADgFAAQgIAAgEgDQgFgEAAgLIgCAAQAAAGgGADQgEAEgGgBQgJAAAAgHQAAgFADgIIgDAAIAAgRQgCgGgKAAIgHAAQgEACgCAFIAAgBQAAgJgDgGQgEgGgGAAQgFAAgDAGIgCAKIgGgBIgFAAQADAGgGAHQgFAGgHAAQgJAAgGgEIgJgJQABAIgIAFQgFADgFABQgGgBgCgDQgEgDAAgIQAAgFAEgJIgCAAIgCABIgCABIgDgMQgCgHgJABQgJgBgGAHQgGAHACAFIgFgKQgBgFgIAAQgGAAgDADQgDABAAAGQAAAEADAIIADAIQAAADgEACQgHAFgOAAQgLAAgDgDQgFgDAAgLQAAgIAEgHIgBAAQgEAHgDACIgKAAIgJgBIgHgEQgEAFgFAEQgFAEgDAAQgDAAgEgDIgDgFIgEAOQgGAOgNAAQgJAAgEgFQgCgGgBgLIAAACIgMAMQgIAFgIABQgJAAgEgKQgDgIACgNQgEACgIAKQgJAJgGAAQgHgBgCgEIgBgMIABgJIABgIQAAgHgBgDQgDgHgIAAQgJAAgBACQgDAAgDAIQgDgJgFgFQgGgIgIAAQgJAAgHAKQgFAHAAAGQgCACgDgDQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgEARQgCADgKAAQgGAAgIgEQgFgDgFgFQgCAJgHAIQgIAKgIAAQgKAAgGgGQgGgHAAgLIABgEIAAgCIgGAEQgEADgHABQgTAAAAgOQAAgEANgLQALgKANgGIgCAAQgKgBgDgDQgDgCAAgHQAAgIAMgKQAWgPAJgKIgCAAQgHgCgGgDQgMgKAAgRQAAgKAEgFIABgBQAHgCAKAAQAOgBANAIIAIAGQADgSAFgLIABgBQAGgFANAAQAMAAAPANQANAKAEAJQgBgEACgDQACgDAGAAQALAAABAOQAAAJgBAKQAAAIAIAAQAEAAAFgHIAAAOIAJAAQAMgHAEgHQAEgGAAgHIgIgQQgHgNAAgJQAAgKAHgGQAGgGALABQAAgJAGgGQAGgFAGgBQAHABAIAFQAIAFABAFQABgFAEgDIAEgCQAKAAAGAPQAFALAAAJQAAAIgDAGIgGALIAEgCIAGgBIAFAAQACACACAEIABAAIABACIACgEIAAgEIAIAAIAEADQACACAAAEIAAgGIgEgWQAAgNAGgHQAGgGAKAAQAKAAANANQANAOAHAVIAAALQgFAAgKAJQgKAHAAAFIAAAJIACAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAEAAADgEIADgGQgBAGAEAIQAGAKAIAAQAIAAACgGIACgMQAAgIACgDQACgGAIAAQARAAAGAVQADAKAAAPQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgCAIQgDAGgCADIAAAEIACABIADABQAEAAAGgGQAGgDADAAQACAAAEADIAFAGQgBgHADgHQAEgIAJgBQANABAQAQQAOAQABAIIABABIAAABQAAgEAEgDQADgDAFAAQADAAAIAGIgBgGIgCgIQAAgIAJgJQAHgIADAAQALAAAJATQAGAMADAOQAEgEAHgCIAJgBQATgBAKAMQAJALAAASIAAAKQgBAFgDAEQAGgCAEAIQADAFAAAHQAHgEANAAQAQAAANAMQAFAGACAGIgBACIgCAEIABAAIABgEIABgBQADAJgGAIIAGgDQAFgEAEABQAHgBAHAJQAFAGABAFIgqACIgcACIgIAAIgJAAIgEgCg");
	this.shape_122.setTransform(421,317.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],0,-9.8,0,-3.7,-9.8,59.1).s().p("AE4CGQgMgNgRAAQgMAAgHAFQAAgIgEgFQgEgHgGACQAEgFABgEIAAgKQAAgTgJgLQgKgLgUAAIgJABQgHACgEAEQgDgOgFgMQgKgUgKAAQgDAAgHAHQgKAKAAAKIACAHIABAGQgIgGgDAAQgEAAgDADQgEADAAAEIgBAAIAAgBQgCgJgNgQQgRgSgMAAQgJAAgEAJQgDAGABAJIgGgHQgDgEgDAAQgCAAgHAGQgGAFgEAAIgDgBIgCgBIAAgGQADgCACgHIADgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAgNgDgKQgHgVgRAAQgHAAgDAGQgBADAAAIIAAAMQgDAGgHAAQgIAAgGgKQgEgHABgGIgEAFQgEAEgFAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBAAIAAgJQAAgEAKgIQALgJAGAAIAAgLQgIgUgOgPQgNgNgLAAQgKAAgFAGQgHAHAAANIAFAXIAAAFQgBgDgCgDIgEgCIgHAAIgBADIgCAEIAAgCIgBAAQgCgEgDgBIgFAAIgFAAIgFACIAGgKQAEgHAAgIQAAgJgFgLQgGgPgKAAIgEADQgFACAAAFQgCgEgHgGQgJgFgHAAQgFAAgGAFQgHAGAAAJQgLgBgGAGQgHAGAAAKQAAAJAIANIAHAQQAAAHgDAGQgFAIgLAGIgJAAIAAgOQgFAIgEAAQgJAAAAgJQACgKgBgIQAAgPgMAAQgFAAgDADQgCADACAEQgEgIgNgLQgPgNgNAAQgMAAgGAFIgCABIACgEQAMgWAYAAQAWAAATAPQANAKAIAOIAAABIACAAIgCgNQAAgSAUgVQAWgYAdAAQARAAARAPQASAQgBAPIAAACQABgMAJgJQAMgMAWAAQAXAAAOAYQAKATAAATIgBAJIgCAHIAAABIgCACQAEgFAIgDQAGgDAKAAQAUAAAMAOQAMANAAATQAAAHgCAHIgEAMIAAABQACgHAIgGQAJgEAMAAQAUAAANAIQANALAFAVQgBgMAIgPQALgTARAAIAHAAQAMADAHAIQAHAKAGAbIABAAQAFgEAJAAQAXAAAPARQAMANAAASQAAAGgDAHIgCAIIAAABIAJgDIAKgBQAOAAAJAMQAJALAAAPIgBAIQgCgHgGgFgACIAqIAAgCIAAgCIAAAEgAgbgbIAAgBIAAgCIAAADg");
	this.shape_123.setTransform(424.4,315.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.5,-1.3,0,-5.9,-1.3,14).s().p("AgNAGIgFgGIAGgFQAGgEAGAAQAFAAAIAGQAGADAAABQAAADgFAEQgGACgIAAQgHAAgGgEg");
	this.shape_124.setTransform(475.7,231);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.7,0,-3,-2.7,13.9).s().p("AgbAyQg1gqgNgrQATACAWAAQA+AAAugTIAXgLIAIgGIAHgHIgjCMQgYAJgYAEQgRgKgVgRg");
	this.shape_125.setTransform(471.3,238.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.1,0,1.4,2.1,2.6).s().p("AgMAAQALgCAEgGIACgFQAGAHACAGQgEAEgGAFIgEAFQgDgJgIgFg");
	this.shape_126.setTransform(480.1,227.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.6).s().p("AgHgBIAGgFQAEgFAEgFIABAHQAAAJgIAKIgGAHQAEgLgFgHg");
	this.shape_127.setTransform(480.7,229.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],11.8,-2.4,0,11.8,-2.4,13.9).s().p("AgWBDIgmiXQAEAKAKAIQALAKAUAHIAKAEQAAAYANAhQATArAiAeQgpgFgqgNg");
	this.shape_128.setTransform(456.5,237.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.1,-0.5,0,1.1,-0.5,3.6).s().p("AgKAHQgEgHgBgFQAIgHALgGQACAIAGAHIAEADQgPAHgGAMIgFgMg");
	this.shape_129.setTransform(453.2,226.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.6,0,2.8,-2.6,3.6).s().p("AgJAIIgBgFIAAgDQAAgOALgMQABAHADAIIAGALQgIALAAAPQgIgHgEgLg");
	this.shape_130.setTransform(451.4,228.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.1,-4.4,0,4.1,-4.4,13.9).s().p("AgOBBQghgegTgpQgPgjgBgYIATAFQATAFAWADQANAtA0AoQAUARAUAKQggAGghAAIgggBg");
	this.shape_131.setTransform(464.1,239.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.7,-1.5,0,1.4,-1.4,14).s().p("AhAAgQgWgCgTgFQgCgHAAgIQAAgWAMgOIAEABQALAAALgBIAOgCIANABQAFAAADABQgEgBgHABIgKACIgBACQgDAAgDAIIgHAMIAAABIAPgHQAHgDAFAAQAFAAAIAIIAGAEQAEADACAAIAAgGQABgCAJAAQADAAAEADIAEAFQgBgFAEgDIAFgFIAOAAIADACIAHACIgHgJIgDgEIgCgBIgGgCIgHgCIAAgGIAAgCQAIACANgEIALAHQAMAGAGAAQAHAAAFgCQAEgCAEAAQAHAAAIAHQAKAJACAMIgXAMQgtASg/AAQgVAAgUgCgAA7gHIgGAGIAFAFQAGAEAIAAQAJAAAGgCQAFgEAAgCQAAgBgGgEQgIgGgGAAQgHAAgGAEg");
	this.shape_132.setTransform(468.4,231.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.1,-0.2,0,3.8,-0.1,14).s().p("AhkAgIgKgDQgTgIgLgJQgBgOAJgMQAHgMAPgIQANANAWAAQAHAAALgFQAJgEAEgDQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABADQACAEADABIAMAAQANAAACgBIADgDQAAAHgDAIIADABIAHADIADAFQAAAAABABQAAAAABABQAAABAAAAQAAAAAAABIADgEQACgCADAAIAFAAQACABAAAFQAFgJABAAIAFgBIAEAAIAIACIAFACIACABIADAEIAHAHIgGgCIgEgCIgOAAIgFAFQgDADAAAHIgGgHQgEgDgDAAQgJAAgBACIAAAIQgCAAgDgDIgFgGQgHgIgGAAQgFAAgHADIgPAHIAAgBIAHgKQADgIADAAIABgCIAKgCQAHgBAEABQgDgBgEAAIgOgBIgNACQgLABgMAAIgDgBQgNANAAAXQAAAIACAHIgTgGgAB4gEQgIgHgHAAQgEAAgEACQgFACgHAAQgGAAgMgGIgLgHQgNAEgIgCIAAgKQADAAADgCIAEgEQACAFAIADQAGACAIAAQARAAAEgNIABABQAGAPAUAAIALgBQAIAHADAIQAEAHgDAMIgIAFQgBgOgLgHg");
	this.shape_133.setTransform(465.9,229.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.4,-1,0,-1.9,-1,8.5).s().p("AgeArIAFgdQAFgaAPgOIAKgFIAYgKIABAAIgeAYQgMAKgDADIgFAGQgEAJgBAOIAAAKIAAACIAAAGIgFAAg");
	this.shape_134.setTransform(472.2,224.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.6,0.1,0,4.1,0.1,8.5).s().p("AgCA3IgHgDIgDgBQADgIAAgHQABgNgEgKIgFgKIgKgOQgNgQgTgGIARABIACAAIgDgIIgFgJIAAgBIAcAVIAUAQIA7gtIABAAQgCACgGANIAAABIACAAIAEgBQgOALgNAOQgRASgJAKQgPgKgBgFIAAAAIAKAbQAEAQAAAHIgCAOIgDgEgAATAqIAAgJIgBADQAAAEgEAIIgBABQgDgDAAgIQgBgDAAgKQAAgFACgDIACAYIAAABQAGgKgBgPIADgBIAAAOIABAMQABgHAFgJIAGgNIgLAjIgBABQgDgDAAgEgAAdABIAFAAIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_135.setTransform(466.2,223.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.4,-6,0,4.4,-6,25.3).s().p("ABUCBIgBgBQgEANgRAAQgIAAgGgCQgIgDgDgFIgDAEQgDACgDAAQACgNAEgKIAEgHQADgEAOgKIAfgYIgBAAIgYAKIgNAFIgLAGIgEAAQACgGAKgJIAZgXIgRAEIgEABQABgIAEgFQAGgHAMAAQAJAAAFAKQADAKAEAAQAIAAAFAEQADADAAAIQAAAHgJAHQgKAGAAAIQAAAFAFAEQAFACAGAAQAJAAADgEIAFgKQACAHAIADQAEACADAAQAIAAAFgGQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAGAMAGQAKAHANABQgHAFgJAAQgLAAgIgDIgMgIQgBAIgDAGIgDAEQgFAHgMACIgKABQgUAAgGgPgAh1CDIgEgEQgGgHgCgIIgDgNQgGACgEAAQgZAAgNgYQgKgSAAgZQAAgbAXgSQAUgSAQADIABAAIgUgLQgHgHAAgNQAAgMAJgFQAGgEAHABQgFgCgCgHQgDgIAAgIQgBgQAUgRQAFgFAHgDQgHAMAAATQABAMAHAGQAHAFAHgBIABABIgQANQgHAHAAAIQABAJAEAGQAEAHAKAAIgPAMQgFAFAAAMQAAANAGAIQAFAFAFgCIABAAIgOAOQgIAJAAAGQAAALAIAGQAGAGAIAAQAKAAAEgKQACgKAHgCIAAACQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgFAIADQAIAEAGALIAAABQAEgJADgEQAEgDAEAAQAIAAAGAKQADAFACAOIgcgWIAAACIAFAIIADAIIgCAAIgRgBQATAGANARIAKAPIAFAKQAEALgBAMIgDADQgCABgOAAIgLAAQgEgBgCgEIAAgDQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgDADgJAEQgLAFgHAAQgWAAgNgNg");
	this.shape_136.setTransform(466.7,213.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.5,-0.7,0,1,-0.6,8.5).s().p("AgOAzIgEgBQgDAAgCADIgDADQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIADgPQAAgHgGgPIgLgcIABAAQABAFARAKQAIgKAQgRQANgOANgMIASgEIgZAXQgKAJgDAGIAFAAIALgGQgPAOgFAbIgCAcIgGABQgBAAgFAJQAAgFgCAAgAgLAjQABAEACADIACgBIAJgjIgFAMQgEAKgBAHIgCgNIAAgNIgCABQABAOgGALIAAgBIgDgYQgBADAAAFQAAAKABACQAAAIADAEIABgBQAEgJAAgEIAAgCIAAAJgAABgEIACgBIgEAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_137.setTransform(469.3,224);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.3,6,0,-8.3,6,25.3).s().p("ABMBSIgWACIAKgMQAJgLAAgQQAAgXgTAAQgMAAgGAHQgCADgFAMIAAgBQgBgGgIgDQgGgCgFABIAAgBIAIgLQAGgKAAgJQAAgFgEgGQgFgGgGAAQgIAAgBAIQgDAGAAAKQAAgFgGgEQgEAAgFAAQgFAAgDACIAAAAQAFgNAAgNQAAgTgPgNQgPgOgWAAQgOAAgKAEIAFgFQANgNAQAAQAUAAAUASQAWAUgHARQADgHAKgFQAJgEAJAAQAOAAAIAHQAGAIABAMQAAAKgGAIQgCAEgHAIIAAAAQADgCAFgCQAHgEADAAQAVAAAJANQAFAKAAARQAAALgKAMQgGAFgEADIAHgBQAMAAALALQgKgDgNAAg");
	this.shape_138.setTransform(479.4,201.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.3).s().p("ABqCXQgLgGgBgGQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgFAGgJAAQgDAAgEgCQgIgDgCgHIgEAKQgEAEgJAAQgGAAgFgCQgEgEAAgFQAAgIAKgGQAIgHABgHQAAgIgEgDQgEgEgIAAQgEAAgEgKQgFgKgJAAQgKAAgFAHQgFAFAAAIIgCAAIAAgBQAGgNACgCIgBABIg8AsIgVgPQgDgOgDgFQgGgKgIAAQgDAAgEADQgDAEgEAJIAAgBQgGgLgJgEQgIgDAAAFQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAgCQgHACgCAKQgDAKgKAAQgIAAgHgGQgIgGAAgLQAAgGAIgJIAPgOIgBAAQgFACgFgFQgGgIAAgPQgBgMAFgFIAPgKQgJAAgFgHQgEgGAAgJQAAgIAHgHIAPgNIgBgBQgHABgGgFQgIgGAAgMQAAgTAHgMQANgIAOAAQAJAAAJAFIAKAIIgEgKQgDgIAAgIQAAgPALgJQAEgEAFgDIAAABQgHAMABAMQAAAZAUAJQAKAGAMAAIAAAAIgqAUQgXANAAAPQAAALAKAFQAGACADAAIgMAHQgPALAAAJQAAAJAIAFQAJAFALgDIABAAQgEACgCAGQgDAGAAAIQABALAHAHQAHAFAJAAQALAAAFgVQADgVANAAQAIAAAIAJQAHAGABAGIABAAQAAgOAGgIQAHgKASAAQAMAAAFAKQAEAGAAAFIADgFQAGgFAJAAQANAAAHAFQAHAFgBAFQABAFgIAIQgIAIABAGQgBALAHAEQAGAFAIAAQAGAAAGgFIAGgDQgCADgBAFQgDAKAAAHQABAOAGAHQAEAGAKAAQAIAAAKgPQAHgMAAgHQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQADABAFAAQAHAAAFgFQAEgEAAgHQAAgIgDgNIgFgPQAFAEACAAQAGADAHAAQAIAAAFgCIgBABQgJAIgGABIgBAAQAVADAHAEQAKAFAAAMQAAANgNAJQgMAJgTABQACACABADIAAAIQAAAPgLAMQgEAEgEACQgNgBgLgHgAh3hkIAAAAIgBgBIABABg");
	this.shape_139.setTransform(472.8,209.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.4,-0.4,0,-3.4,-0.4,25.3).s().p("AA9CKQgGgIAAgNQAAgIACgJQABgGACgCIgFADQgHAEgGAAQgIAAgGgEQgGgFAAgKQAAgGAHgJQAIgHAAgGQAAgFgHgEQgHgGgNAAQgJAAgEAGIgDAFQAAgGgEgGQgGgKgNAAQgRAAgIALQgGAHAAAPIAAAAQgBgGgIgHQgIgIgIAAQgMAAgEAVQgEAUgLAAQgKAAgGgFQgIgGAAgMQAAgHACgGQADgHAEgCIgBAAQgMADgIgEQgJgFAAgLQAAgKAPgIIANgIQgEABgFgDQgKgEAAgMQAAgPAWgMIArgUIgBAAQgMAAgKgGQgUgJAAgZQAAgNAGgLIABgBQAHgEAHAAQARAAARAJQAKAFAEAEQAFAEAAAEQAAgHAGgHQAKgEAOAAQAXAAANAOQAPANAAATQAAANgFAPIAAAAQADgDAEAAQAGAAAEABQAFAEABAFQAAgMADgGQACgIAJAAQAGAAAFAGQAEAGAAAHQAAAJgGAKIgIALIAAABQAFgBAGACQAIADABAGIAAABQAFgMACgDQAGgHAMAAQATAAAAAXQAAAQgJAJIgKAMIAVgCQAOAAAKADIABAAQANAMAAAPIgBADQgBAIgIAHQgEADgJAAQgHAAgFgDQgDgBgFgEIAFAPQAEAOAAAHQAAAIgFAEQgFAFgHAAQgEAAgEgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAHgHANQgKAPgIAAQgJAAgFgGgAg3hyIAAgCIgBgBIABADg");
	this.shape_140.setTransform(474.5,207.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.7,0,-3,-2.7,13.9).s().p("AgbAyQg1gqgNgrQATACAWAAQA/AAAtgTIAWgLIAJgGIAHgHIgjCMQgXAJgZAEQgRgKgVgRg");
	this.shape_141.setTransform(433.7,238.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.5,-1.3,0,-5.9,-1.3,14).s().p("AgNAGIgFgGIAGgFQAGgEAGAAQAFAAAIAGQAGADAAABQAAADgFAEQgGACgIAAQgHAAgGgEg");
	this.shape_142.setTransform(438,231);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.6).s().p("AgHgBIAFgFQAFgFADgFQACADAAAEQAAAJgIAKIgGAHQADgLgEgHg");
	this.shape_143.setTransform(443.1,229.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.1,0,1.4,2.1,2.6).s().p("AgMAAQAMgCADgGQACgCABgDQAFAHACAGQgEAEgGAFIgDAFQgDgJgJgFg");
	this.shape_144.setTransform(442.5,227.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.6,0,2.8,-2.6,3.6).s().p("AgJAIQgBgCAAgDIAAgDQgBgOALgMIAFAPIAHALQgKALABAPQgIgHgEgLg");
	this.shape_145.setTransform(413.8,228.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],11.7,-2.4,0,11.7,-2.4,13.9).s().p("AgWBDIgmiXQAEAKAKAIQALAKAUAHIAKAEQAAAYANAhQATArAiAeQgqgFgpgNg");
	this.shape_146.setTransform(418.9,237.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.1,-4.4,0,4.1,-4.4,13.9).s().p("AgOBBQghgegTgpQgPgjAAgYIASAFQAUAFAVADQANAtA0AoQAUARATAKQgfAGghAAIgggBg");
	this.shape_147.setTransform(426.5,239.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,-0.5,0,1,-0.5,3.6).s().p("AgLAHIgEgMQAIgHALgGQADAIAFAHIAEADQgPAHgFAMIgHgMg");
	this.shape_148.setTransform(415.5,226.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.8,-1.5,0,1.4,-1.4,14).s().p("AhAAgQgVgCgUgFQgCgHAAgIQAAgWANgOIADABQALAAAMgBIANgCIAOABQAEAAADABQgEgBgHABIgKACIgBACQgCAAgFAIIgFAMIAAABIAOgHQAHgDAFAAQAGAAAHAIIAHAEIAEADIABgGQABgCAJAAQAEAAADADIAEAFQAAgFADgDQACgDADgCIAOAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIAGACQgEgHgCgCIgFgEIgCgBIgEgCIgIgCIAAgGIAAgCQAIACANgEIALAHQAMAGAGAAQAHAAAFgCQAFgCADAAQAHAAAIAHQALAJABAMIgXAMQgtASg+AAQgWAAgUgCgAA7gHIgGAGIAFAFQAHAEAHAAQAJAAAGgCQAFgEABgCQgBgBgGgEQgIgGgFAAQgHAAgHAEg");
	this.shape_149.setTransform(430.7,231.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.2,-0.2,0,3.8,-0.1,14).s().p("AhjAgIgKgDQgUgIgMgJQAAgOAJgMQAHgMAQgIQAMANAWAAQAGAAAMgFIANgHQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABADQABAEAEABIALAAQAOAAACgBIADgDQAAAHgCAIIACABIAHADQABADABACQABAAABABQAAAAAAABQABABAAAAQAAAAAAABIADgEQACgCADAAIAEAAQACABAAAFQAFgJACAAIAFgBIAEAAIAIACIAEACIACABIAEAEQADABAEAGIgGgCQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAIgOAAQgEACgBADQgEADABAHIgGgHQgEgDgDAAQgJAAgBACIgBAIIgEgDIgFgGQgHgIgGAAQgFAAgHADIgPAHIAAgBIAGgKQAFgIACAAIABgCIAKgCQAHgBAEABQgDgBgEAAIgOgBIgNACQgMABgLAAIgEgBQgMANAAAXQAAAIACAHIgSgGgAB4gEQgIgHgHAAQgEAAgEACQgFACgHAAQgGAAgMgGIgLgHQgNAEgIgCIAAgKQAEAAACgCIADgEQADAFAIADQAGACAIAAQARAAAEgNQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAGAPAUAAIAKgBQAJAHADAIQAEAHgDAMIgIAFQgBgOgLgHg");
	this.shape_150.setTransform(428.3,229.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.4,-1,0,-1.9,-1,8.5).s().p("AgeArQACgRACgMQAGgaAPgOIALgFIAXgKIABAAIgeAYQgNAKgCADIgFAGQgEAJgCAOIAAAKIAAACIAAAGIgEAAg");
	this.shape_151.setTransform(434.6,224.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.7,0.1,0,4.1,0.1,8.5).s().p("AgDA3IgGgDIgDgBQADgIAAgHQABgNgEgKIgEgKIgKgOQgOgQgTgGIARABIABAAIgCgIQgDgHgCgCIAAgBIAcAVIAUAQIA7gtIABAAQgCACgGANIAAABIACAAIADgBQgNALgNAOQgRASgJAKQgPgKgBgFIAAAAIAKAbQAEAQAAAHIgDAOQAAgCgDgCgAATAqIAAgJIgBADQAAAEgEAIIgBABQgDgDAAgIIgBgNIABgIIADAYIAAABQAGgKgBgPIACgBQABAFgBAJIACAMIAFgQQADgIAEgFIgKAjIgCABQgDgDAAgEgAAdABIAFAAIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_152.setTransform(428.5,223.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.5,-0.7,0,1,-0.6,8.5).s().p("AgOAzIgEgBQgEAAgBADIgDADQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIADgPQgBgHgFgPIgLgcIABAAQAAAFASAKQAIgKAQgRQANgOANgMIARgEIgZAXQgJAJgDAGIAFAAIAMgGQgPAOgHAbQgBAMAAAQIgGABQgBAAgFAJQAAgFgCAAgAgKAjQAAAEACADIACgBIAJgjQgDAFgCAHIgFARIgCgNQABgJgBgEIgCABQABAOgHALIAAgBIgCgYIgBAIIABAMQAAAIACAEIACgBQAEgJAAgEIABgCIAAAJgAABgEIACgBIgDAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_153.setTransform(431.7,224);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.4,-6,0,4.4,-6,25.3).s().p("ABUCBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgEANgRAAQgIAAgGgCQgIgDgDgFIgDAEQgDACgDAAQACgNAEgKIAFgHQACgEAOgKIAfgYIgBAAIgYAKIgMAFIgMAGIgFAAQADgGAKgJIAZgXIgSAEIgDABQABgIAEgFQAGgHAMAAQAJAAAEAKQAEAKAEAAQAJAAADAEQAEADAAAIQAAAHgJAHQgKAGAAAIQAAAFAFAEQAFACAFAAQAKAAADgEIAEgKQADAHAHADQAFACADAAQAIAAAGgGQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAGALAGQAMAHANABQgIAFgJAAQgLAAgHgDIgNgIQAAAIgEAGQgBACgCACQgFAHgMACIgKABQgUAAgGgPgAh1CDIgEgEQgFgHgDgIQgCgGAAgHQgHACgFAAQgZAAgNgYQgKgSAAgZQAAgbAYgSQAVgSAPADIACAAQgQgHgFgEQgGgHAAgNQAAgMAIgFQAGgEAGABQgEgCgDgHQgDgIAAgIQAAgQAUgRQAFgFAHgDQgHAMAAATQAAAMAIAGQAHAFAHgBIABABQgNAJgDAEQgHAHAAAIQAAAJAFAGQAFAHAJAAIgQAMQgEAFAAAMQAAANAGAIQAFAFAFgCIABAAIgOAOQgJAJAAAGQAAALAJAGQAGAGAJAAQAKAAADgKQACgKAHgCQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgFAIADQAJAEAFALIAAABQAEgJAEgEQADgDAEAAQAIAAAGAKQADAFACAOIgcgWIAAACQACABADAHIACAIIgBAAIgRgBQATAGAOARIAKAPIAEAKQAEALgBAMIgEADQgBABgOAAIgLAAQgEgBgBgEIgBgDQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgNAHQgMAFgGAAQgWAAgNgNg");
	this.shape_154.setTransform(429,213.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.3,6,0,-8.3,6,25.3).s().p("ABLBSIgVACIALgMQAIgLAAgQQAAgXgTAAQgMAAgGAHQgCADgEAMIAAgBQgCgGgIgDQgGgCgFABIAAgBIAIgLQAFgKABgJQgBgFgDgGQgFgGgGAAQgIAAgBAIQgDAGAAAKQgBgFgGgEQgDAAgGAAQgEAAgEACIAAAAQAFgNABgNQAAgTgPgNQgPgOgXAAQgOAAgKAEIAGgFQAMgNARAAQATAAAWASQAUAUgGARQADgHAJgFQAKgEAJAAQANAAAJAHQAGAIAAAMQAAAKgFAIQgCAEgIAIIAAAAIAJgEQAHgEADAAQAVAAAJANQAGAKgBARQAAALgKAMIgLAIIAHgBQANAAALALQgKgDgOAAg");
	this.shape_155.setTransform(441.8,201.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.3,-0.4,0,-3.3,-0.4,25.3).s().p("AA9CKQgGgIAAgNQAAgIACgJIADgIQgCACgDABQgGAEgHAAQgIAAgFgEQgHgFAAgKQAAgGAHgJQAIgHAAgGQAAgFgGgEQgHgGgNAAQgKAAgDAGIgEAFQAAgGgDgGQgHgKgNAAQgRAAgIALQgFAHAAAPIgBAAQgBgGgIgHQgIgIgHAAQgNAAgEAVQgEAUgLAAQgKAAgGgFQgIgGAAgMQAAgHADgGQACgHAEgCIgBAAQgMADgIgEQgJgFAAgLQAAgKAPgIIANgIQgEABgFgDQgKgEAAgMQAAgPAXgMIAqgUIAAAAQgMAAgKgGQgVgJAAgZQAAgNAGgLIABgBQAHgEAHAAQARAAASAJQAJAFAEAEQAFAEAAAEQAAgHAHgHQAKgEANAAQAXAAANAOQAPANAAATQAAANgFAPIAAAAQAEgDADAAQAGAAAEABQAFAEABAFQABgMACgGQADgIAIAAQAHAAAEAGQAEAGAAAHQAAAJgGAKIgIALIAAABQAFgBAGACQAIADACAGIAAABQAEgMADgDQAFgHAMAAQATAAAAAXQAAAQgIAJIgKAMIAUgCQAOAAALADIAAAAQANAMAAAPIgBADQgBAIgIAHQgEADgJAAQgHAAgFgDQgDgBgFgEIAFAPQAEAOAAAHQAAAIgFAEQgEAFgIAAQgEAAgDgCIgDgCQAAAHgIANQgJAPgJAAQgJAAgFgGgAg3hyIAAgCIgBgBIABADg");
	this.shape_156.setTransform(436.8,207.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.3).s().p("ABqCXQgLgGgCgGQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgGAGgIAAQgDAAgEgCQgIgDgCgHIgFAKQgDAEgJAAQgGAAgFgCQgFgEAAgFQAAgIAKgGQAKgHAAgHQAAgIgEgDQgEgEgJAAQgDAAgEgKQgEgKgKAAQgKAAgFAHQgFAFAAAIIgCAAIAAgBQAFgNADgCIgBABIg8AsIgWgPQgBgOgEgFQgGgKgHAAQgEAAgEADQgEAEgDAJIAAgBQgGgLgJgEQgIgDAAAFQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQgIACgCAKQgDAKgKAAQgJAAgGgGQgIgGAAgLQAAgGAIgJIAOgOIAAAAQgFACgFgFQgGgIAAgPQAAgMAEgFIAQgKQgKAAgFgHQgEgGAAgJQAAgIAHgHQADgEAMgJIAAgBQgIABgGgFQgIgGAAgMQAAgTAHgMQANgIAOAAQAIAAAKAFIAKAIIgEgKQgDgIAAgIQAAgPALgJQAEgEAFgDIAAABQgGAMAAAMQAAAZAUAJQAKAGAMAAIABAAIgrAUQgWANAAAPQAAALAKAFQAFACADAAIgMAHQgPALAAAJQAAAJAJAFQAIAFAMgDIAAAAQgDACgDAGQgCAGAAAIQAAALAIAHQAGAFAJAAQAMAAADgVQAFgVAMAAQAIAAAIAJQAHAGACAGIAAAAQAAgOAGgIQAHgKASAAQAMAAAFAKQAEAGAAAFIADgFQAGgFAJAAQANAAAHAFQAGAFAAAFQAAAFgHAIQgIAIAAAGQAAALAHAEQAGAFAIAAQAGAAAGgFQAEgBABgCIgCAIQgDAKAAAHQAAAOAHAHQAFAGAIAAQAJAAAKgPQAHgMAAgHIADACQADABAFAAQAHAAAFgFQAFgEAAgHQAAgIgEgNIgFgPQAFAEACAAQAGADAHAAQAJAAAEgCIgBABQgIAIgHABIgBAAQAVADAHAEQAKAFAAAMQAAANgNAJQgMAJgTABQACACAAADIABAIQAAAPgLAMQgDAEgFACQgNgBgLgHgAh3hkIAAAAIgBgBIABABg");
	this.shape_157.setTransform(435.2,209.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.7,0,-3,-2.7,13.9).s().p("AgbAyQg1gqgNgrQATACAWAAQA+AAAugTIAXgLIAIgGIAHgHIgiCMQgZAJgYAEQgRgKgVgRg");
	this.shape_158.setTransform(396,238.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.6,-1.3,0,-5.9,-1.3,14).s().p("AgNAGIgGgGIAHgFQAGgEAGAAQAFAAAIAGQAGADABABQAAADgHAEQgFACgIAAQgHAAgGgEg");
	this.shape_159.setTransform(400.5,231);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.1,-4.4,0,4.1,-4.4,13.9).s().p("AgOBBQghgegTgpQgPgjgBgYIATAFQATAFAWADQANAtA0AoQAUARAUAKQggAGghAAIgggBg");
	this.shape_160.setTransform(388.9,239.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],11.8,-2.4,0,11.8,-2.4,13.9).s().p("AgWBDIgmiXQAEAKAKAIQALAKAUAHIAKAEQAAAYANAhQATArAiAeQgpgFgqgNg");
	this.shape_161.setTransform(381.2,237.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,-0.5,0,1,-0.5,3.6).s().p("AgLAHQgDgHgBgFQAIgHALgGQACAIAGAHIAEADQgPAHgGAMIgGgMg");
	this.shape_162.setTransform(377.9,226.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.6,0,2.8,-2.6,3.6).s().p("AgJAIIgBgFIAAgDQAAgOALgMQAAAHAEAIIAGALQgIALAAAPQgIgHgEgLg");
	this.shape_163.setTransform(376.2,228.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.1,-0.2,0,3.8,-0.1,14).s().p("AhkAgIgKgDQgTgIgLgJQAAgOAIgMQAHgMAPgIQANANAXAAQAGAAALgFIAOgHIAAABIABADQACAEADABIAMAAQANAAACgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAAHgDAIIADABIAHADIADAFQAAAAABABQAAAAABABQAAABAAAAQAAAAAAABIADgEQACgCADAAIAFAAQACABAAAFQAFgJABAAIAGgBIAEAAIAHACIAFACIACABIADAEIAHAHIgGgCIgEgCIgOAAIgFAFQgDADAAAHIgGgHQgEgDgDAAQgJAAgBACIAAAIQgCAAgDgDIgFgGQgHgIgFAAQgGAAgHADIgPAHIAAgBIAHgKQAEgIACAAIACgCIAJgCQAIgBADABQgDgBgEAAIgNgBIgNACQgMABgMAAIgDgBQgNANAAAXQAAAIACAHIgTgGgAB5gEQgJgHgHAAIgIACQgEACgIAAQgGAAgMgGIgLgHQgNAEgHgCIAAgKQACAAADgCIAEgEQACAFAIADQAHACAHAAQASAAAEgNIAAABQAGAPAUAAIALgBQAIAHADAIQAEAHgDAMIgIAFQgBgOgKgHg");
	this.shape_164.setTransform(390.7,229.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.7,-1.5,0,1.4,-1.4,14).s().p("AhAAgQgWgCgTgFQgCgHAAgIQAAgWAMgOIADABQAMAAAMgBIAOgCIAMABQAFAAADABQgDgBgIABIgJACIgCACQgDAAgDAIIgHAMIAAABIAPgHQAHgDAFAAQAFAAAIAIIAGAEQAEADACAAIAAgGQABgCAJAAQADAAAEADIAEAFQAAgFADgDIAFgFIAOAAIADACIAHACIgHgJIgDgEIgDgBIgEgCIgIgCIAAgGIAAgCQAIACANgEIALAHQAMAGAGAAQAIAAAEgCIAIgCQAHAAAJAHQAJAJACAMIgXAMQgtASg/AAQgWAAgTgCgAA7gHIgGAGIAFAFQAGAEAIAAQAJAAAFgCQAHgEAAgCQAAgBgHgEQgIgGgGAAQgHAAgGAEg");
	this.shape_165.setTransform(393.1,231.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.4,-1,0,-2,-1,8.5).s().p("AgdArQAAgRADgMQAGgaAPgOIAKgFIAYgKIABAAIgeAYQgNAKgDADIgEAGQgEAJgCAOIAAAKIAAACIAAAGIgDAAg");
	this.shape_166.setTransform(397,224.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.5,-0.7,0,1,-0.6,8.5).s().p("AgOAzIgEgBQgDAAgCADIgDADQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIADgPQAAgHgGgPIgLgcIACAAQAAAFARAKQAIgKAQgRQAOgOANgMIARgEIgZAXQgKAJgDAGIAFAAIAMgGQgPAOgGAbQgCAMAAAQIgFABQgCAAgFAJQAAgFgCAAgAgLAjQABAEADADIACgBIAIgjIgFAMIgFARIgCgNIAAgNIgCABQABAOgGALIAAgBIgDgYQgBADAAAFQAAAKABACQAAAIADAEIABgBQAEgJAAgEIAAgCIAAAJgAABgEIACgBIgEAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_167.setTransform(394,224);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.7,0,0,4.2,0,8.5).s().p("AgCA2IgGgDIgDgBQACgIABgHQABgMgEgLIgFgKIgKgNQgNgRgUgGIASABIABAAIgCgIQgDgHgCgBIAAgCIAcAWIAUAPIA7gsIgHAOIAAABIACAAIAEgBQgNALgOAOQgSASgIAKQgPgKAAgFIgCAAIALAcQAEAPAAAHIgDAPIgDgFgAATAqIAAgJIAAACQAAAEgEAJIgBABQgDgEAAgIQgBgCAAgKQAAgFABgEIADAYIAAABQAGgKgBgPIACgBIAAAOIACAMIAFgQIAHgNIgKAkIgCABQgDgEgBgDgAAdAAIAGAAIgCABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_168.setTransform(390.8,223.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.1,0,1.4,2.1,2.6).s().p("AgMAAQALgCADgGIADgFQAFAHADAGIgLAJIgDAFQgEgJgHgFg");
	this.shape_169.setTransform(404.9,227.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.6).s().p("AgHgBIAGgFIAJgKIAAAHQAAAJgIAKIgGAHQADgLgEgHg");
	this.shape_170.setTransform(405.5,229.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.4,-6,0,4.4,-6,25.3).s().p("ABUCBIgBgBQgDANgSAAQgHAAgHgCQgIgDgCgFIgEAEQgDACgDAAQACgNAEgKIAEgHQADgEAOgKIAfgYIgBAAIgYAKIgMAFIgMAGIgEAAQACgGALgJIAYgXIgRAEIgEABQABgIAFgFQAFgHAMAAQAKAAADAKQAEAKAEAAQAJAAAEAEQAEADAAAIQAAAHgKAHQgKAGAAAIQAAAFAFAEQAFACAGAAQAJAAADgEIAFgKQACAHAIADQAEACADAAQAIAAAFgGQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQABAGAMAGQAKAHANABQgHAFgJAAQgKAAgIgDQgHgGgGgCQgBAIgDAGIgDAEQgFAHgLACIgLABQgUAAgGgPgAh1CDIgEgEQgFgHgDgIIgDgNQgFACgFAAQgZAAgNgYQgKgSAAgZQgBgbAYgSQAWgSAOADIABAAQgPgHgFgEQgGgHgBgNQAAgMAJgFQAGgEAHABQgFgCgCgHQgDgIAAgIQgBgQAUgRQAFgFAHgDQgHAMAAATQABAMAHAGQAIAFAGgBIABABIgQANQgHAHAAAIQAAAJAFAGQAEAHAKAAIgPAMQgFAFAAAMQAAANAHAIQAFAFAEgCIABAAIgOAOQgJAJABAGQAAALAHAGQAHAGAJAAQAJAAAEgKQACgKAHgCIAAACQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQgBgFAJADQAIAEAGALIAAABQAEgJAEgEQADgDAFAAQAHAAAGAKQADAFACAOIgbgWIAAACQACABACAHIADAIIgCAAIgRgBQATAGANARIAKAPIAFAKQAEALgBAMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgCABgNAAIgMAAQgDgBgCgEIgBgDIgBgBIgNAHQgMAFgFAAQgXAAgNgNg");
	this.shape_171.setTransform(391.4,213.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.3,6,0,-8.3,6,25.3).s().p("ABLBSIgVACIAKgMQAJgLAAgQQAAgXgTAAQgNAAgFAHQgCADgEAMIAAgBQgDgGgGgDQgIgCgEABIAAgBIAHgLQAHgKgBgJQAAgFgDgGQgFgGgGAAQgIAAgCAIQgCAGAAAKQgBgFgFgEQgFAAgFAAQgEAAgEACIAAAAQAGgNAAgNQgBgTgPgNQgPgOgWAAQgOAAgKAEIAFgFQANgNAQAAQAUAAAVASQAWAUgIARQAEgHAJgFQAKgEAJAAQAOAAAHAHQAIAIgBAMQABAKgGAIQgDAEgGAIIAAAAQADgCAFgCQAGgEAEAAQAVAAAJANQAFAKAAARQAAALgLAMQgFAFgFADIAHgBQAMAAANALQgMgDgNAAg");
	this.shape_172.setTransform(404.2,201.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.3).s().p("ABqCXQgMgGAAgGQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgFAGgJAAQgDAAgEgCQgIgDgCgHIgEAKQgDAEgKAAQgGAAgFgCQgEgEgBgFQAAgIALgGQAKgHAAgHQAAgIgFgDQgDgEgJAAQgFAAgDgKQgEgKgKAAQgKAAgEAHQgGAFAAAIIgCAAIAAgBIAGgOIg6AsIgWgPQgCgOgDgFQgGgKgIAAQgEAAgDADQgEAEgEAJIAAgBQgGgLgJgEQgIgDAAAFQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAgCQgGACgDAKQgDAKgJAAQgJAAgHgGQgIgGAAgLQAAgGAJgJIAOgOIgBAAQgFACgFgFQgHgIABgPQAAgMAEgFIAQgKQgKAAgFgHQgEgGAAgJQAAgIAHgHIAPgNIgBgBQgGABgHgFQgIgGAAgMQAAgTAHgMQANgIAOAAQAJAAAJAFIAKAIIgEgKQgDgIAAgIQAAgPALgJQAFgEAEgDIAAABQgGAMgBAMQABAZAUAJQALAGALAAIAAAAIgpAUQgYANABAPQgBALAKAFQAFACAEAAIgMAHQgPALAAAJQAAAJAJAFQAIAFALgDIACAAQgEACgDAGQgDAGAAAIQABALAHAHQAIAFAJAAQAKAAAFgVQADgVANAAQAIAAAIAJQAHAGABAGIACAAQAAgOAFgIQAIgKARAAQAMAAAFAKQAEAGAAAFIADgFQAGgFAJAAQANAAAHAFQAGAFAAAFQAAAFgHAIQgIAIABAGQgBALAHAEQAGAFAIAAQAGAAAGgFIAGgDQgCADgBAFQgCAKgBAHQAAAOAHAHQAFAGAIAAQAJAAAJgPQAIgMAAgHQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQADABAEAAQAIAAAFgFQAEgEAAgHQABgIgEgNIgFgPQAFAEACAAQAGADAHAAQAIAAAFgCIgBABQgIAIgHABIgBAAQAVADAIAEQAJAFAAAMQAAANgNAJQgMAJgTABQACACABADIAAAIQAAAPgLAMQgDAEgFACQgNgBgLgHgAh3hkIAAAAIgBgBIABABg");
	this.shape_173.setTransform(397.6,209.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.4,-0.4,0,-3.4,-0.4,25.3).s().p("AA9CKQgGgIAAgNQAAgIACgJQABgGACgCIgFADQgHAEgGAAQgIAAgGgEQgGgFAAgKQAAgGAHgJQAIgHAAgGQAAgFgHgEQgHgGgMAAQgKAAgEAGIgDAFQAAgGgEgGQgGgKgNAAQgRAAgIALQgFAHAAAPIgBAAQgBgGgIgHQgIgIgIAAQgMAAgEAVQgEAUgLAAQgJAAgHgFQgIgGAAgMQAAgHACgGQADgHAEgCIgBAAQgMADgIgEQgJgFAAgLQAAgKAPgIIANgIQgEABgFgDQgKgEAAgMQAAgPAXgMIAqgUIgBAAQgLAAgLgGQgUgJAAgZQAAgNAHgLIAAgBQAHgEAIAAQARAAAQAJQAKAFAEAEQAFAEABAEQAAgHAFgHQAKgEAOAAQAXAAANAOQAPANAAATQAAANgFAPIAAAAQADgDAFAAQAFAAAEABQAFAEABAFQAAgMADgGQACgIAJAAQAGAAAFAGQAEAGAAAHQAAAJgGAKIgIALIAAABQAFgBAHACQAHADACAGIAAABQAEgMACgDQAGgHAMAAQATAAAAAXQAAAQgJAJIgKAMIAVgCQAOAAALADQANAMAAAPIgBADQgBAIgIAHQgEADgJAAQgHAAgFgDQgDgBgFgEIAFAPQAEAOAAAHQAAAIgFAEQgFAFgHAAQgEAAgEgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAHgHANQgKAPgIAAQgJAAgFgGg");
	this.shape_174.setTransform(399.2,207.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.1,-4.4,0,4.1,-4.4,13.9).s().p("AgNBBQgigegTgpQgPgjgBgYIATAFQAUAFAVADQAOAtAzAoQAVARATAKQggAGghAAIgfgBg");
	this.shape_175.setTransform(351.2,239.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.6,-1.3,0,-5.9,-1.3,14).s().p("AgMAGIgHgGIAHgFQAGgEAGAAQAFAAAHAGQAIADAAABQgBADgGAEQgFACgIAAQgIAAgEgEg");
	this.shape_176.setTransform(362.8,231);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],11.7,-2.4,0,11.7,-2.4,13.9).s().p("AgWBDIgmiXQAEAKAKAIQAMAKASAHIAKAEQABAYANAhQATArAiAeQgqgFgpgNg");
	this.shape_177.setTransform(343.6,237.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.6,0,2.8,-2.6,3.6).s().p("AgJAIIgBgFIAAgDQAAgOALgMQABAHADAIIAGALQgIALABAPQgJgHgEgLg");
	this.shape_178.setTransform(338.5,228.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,-0.5,0,1,-0.5,3.6).s().p("AgKAHQgEgHgBgFQAJgHAKgGQADAIAFAHIAEADQgPAHgGAMIgFgMg");
	this.shape_179.setTransform(340.2,226.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.3,-1,0,-1.9,-1,8.5).s().p("AgdArQAAgRADgMQAGgaAQgOIAJgFIAZgKIAAAAIgeAYIgQANIgDAGQgFAJgCAOIAAAKIAAACIAAAGIgDAAg");
	this.shape_180.setTransform(359.3,224.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.6,-0.7,0,1,-0.6,8.5).s().p("AgOAzIgFgBQgDAAgCADIgCADQAAgBgDgDIACgPQAAgHgFgPQgJgVgCgHIABAAQABAFARAKQAIgKAQgRQANgOANgMIARgEIABAAIgZAXQgLAJgCAGIAFAAIAMgGQgPAOgGAbQgCAMAAAQIgFABQgCAAgFAJQAAgFgCAAgAgLAjQABAEADADIACgBIAIgjQgDAFgCAHIgFARIgCgNIAAgNIgCABQABAOgHALIAAgBIgCgYQgBADAAAFIAAAMQABAIACAEIACgBQAEgJAAgEIAAgCQABAEgBAFgAABgEIACgBIgEAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAg");
	this.shape_181.setTransform(356.4,224);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.7,0,0,4.2,0,8.5).s().p("AgCA2IgHgDIgCgBIACgPQABgMgDgLIgFgKIgKgNQgOgRgTgGIARABIABAAIgCgIQgDgHgCgBIAAgCIAcAWIAUAPIA8gsIgHAOIAAABIACAAIADgBQgNALgOAOQgSASgIAKQgPgKAAgFIgBAAQABAGAJAWQAEAPAAAHIgDAPIgCgFgAASAqQABgFgBgEIAAACQAAAEgEAJIgBABQgCgEgBgIIgBgMQAAgFACgEIACAYIAAABQAGgKgBgPIACgBIAAAOIACAMIAFgQQADgHAEgGIgKAkIgCABQgDgEgBgDgAAcAAIAGAAIgCABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_182.setTransform(353.2,223.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.7,-1.5,0,1.3,-1.4,14).s().p("AhAAgQgWgCgTgFQgCgHAAgIQAAgWAMgOIADABIAYgBIANgCIAOABQAEAAADABQgEgBgHABIgKACIgBACQgCAAgEAIIgHAMIAAABIAPgHQAGgDAGAAQAFAAAIAIIAHAEIAEADIABgGQABgCAIAAQAFAAADADIAEAFQAAgFACgDQACgDAEgCIAOAAQAAAAABAAQAAAAAAAAQABABABAAQAAABABAAIAGACIgHgJIgEgEIgCgBIgFgCIgHgCIAAgGIAAgCQAJACANgEIAKAHQAMAGAGAAQAHAAAFgCIAHgCQAIAAAIAHQAKAJACAMIgXAMQgtASg/AAQgWAAgTgCgAA7gHIgGAGIAGAFQAFAEAIAAQAJAAAFgCQAHgEAAgCQAAgBgHgEQgIgGgGAAQgHAAgGAEg");
	this.shape_183.setTransform(355.4,231.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.7,0,-3,-2.7,13.9).s().p("AgbAyQg1gqgNgrQATACAWAAQA/AAAtgTIAXgLIAIgGIAHgHIgiCMQgYAJgZAEQgRgKgVgRg");
	this.shape_184.setTransform(358.3,238.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.6).s().p("AgHgBIAGgFQAFgFADgFIABAHQAAAJgIAKIgGAHQADgLgEgHg");
	this.shape_185.setTransform(367.8,229.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.1,0,1.4,2.1,2.6).s().p("AgMAAQALgCADgGIAEgFQAFAHACAGQgDAEgIAFIgDAFQgDgJgIgFg");
	this.shape_186.setTransform(367.2,227.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.1,-0.2,0,3.7,-0.1,14).s().p("AhkAgIgKgDQgTgIgLgJQgBgOAIgMQAIgMAPgIQANANAXAAQAFAAALgFIAOgHIABABIABADQABAEADABIANAAQAMAAACgBIAEgDIgCAPIACABIAHADIACAFQADACAAACIADgEQACgCADAAIAEAAQACABAAAFQAFgJACAAIAGgBIADAAIAHACIAFACIACABIAEAEIAHAHIgGgCQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAIgOAAQgEACgCADQgCADAAAHIgGgHQgDgDgFAAQgIAAgBACIgBAIIgEgDIgFgGQgIgIgFAAQgGAAgGADIgPAHIAAgBIAHgKQAEgIACAAIABgCIAKgCQAHgBAEABQgDgBgEAAIgOgBIgNACIgYABIgDgBQgMANAAAXQAAAIACAHIgTgGgAB4gEQgIgHgIAAIgHACQgFACgHAAQgGAAgMgGIgKgHQgNAEgJgCIAAgKQADAAADgCIAEgEQACAFAIADQAHACAHAAQASAAADgNIABABQAGAPAUAAIALgBQAHAHAEAIQAEAHgDAMIgIAFQgCgOgKgHg");
	this.shape_187.setTransform(353,229.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.5,-6,0,4.5,-6,25.3).s().p("ABUCBIgBgBQgDANgSAAQgHAAgHgCQgIgDgCgFIgEAEQgDACgDAAQACgNAEgKIAEgHIARgOIAfgYIgBAAIgYAKIgMAFIgMAGIgFAAQADgGAKgJIAZgXIAAAAIgRAEIgDABQAAgIAFgFQAFgHAMAAQAKAAADAKQAEAKAEAAQAJAAAEAEQAEADAAAIQAAAHgKAHQgKAGAAAIQAAAFAFAEQAFACAGAAQAJAAADgEIAEgKQADAHAHADQAFACADAAQAIAAAFgGQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAGALAGQALAHAOABQgIAFgJAAQgKAAgIgDQgHgGgGgCQgBAIgDAGIgDAEQgFAHgLACIgLABQgUAAgGgPgAh1CDIgEgEQgFgHgDgIQgCgGAAgHQgHACgFAAQgZAAgNgYQgKgSAAgZQAAgbAZgSQAUgSAQADIAAAAQgPgHgFgEQgGgHAAgNQAAgMAIgFQAGgEAGABQgEgCgDgHQgCgIAAgIQAAgQATgRQAFgFAHgDQgHAMAAATQAAAMAIAGQAHAFAHgBIABABQgNAJgDAEQgHAHAAAIQAAAJAFAGQAFAHAJAAIgPAMQgFAFAAAMQAAANAGAIQAFAFAFgCIABAAIgOAOQgJAJAAAGQAAALAIAGQAHAGAJAAQAKAAADgKQACgKAHgCIAAACQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgFAIADQAJAEAGALIAAABQADgJAEgEQADgDAFAAQAHAAAGAKQAEAFABAOIgcgWIAAACQACABADAHIACAIIgBAAIgRgBQATAGAOARIAKAPIAFAKQADALgBAMIgEADQgCABgMAAIgNAAQgDgBgBgEIgBgDIgBgBIgOAHQgLAFgFAAQgXAAgNgNg");
	this.shape_188.setTransform(353.7,213.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.2,6,0,-8.2,6,25.3).s().p("ABLBSIgUACIAJgMQAJgLAAgQQAAgXgTAAQgMAAgGAHQgDADgDAMIAAgBQgDgGgHgDQgHgCgEABIAAgBIAIgLQAFgKAAgJQAAgFgEgGQgDgGgHAAQgIAAgBAIQgDAGAAAKQgBgFgFgEQgFAAgFAAQgEAAgEACIAAAAQAFgNAAgNQAAgTgPgNQgPgOgWAAQgOAAgKAEQACgDADgCQANgNAQAAQAUAAAVASQAWAUgIARQAEgHAJgFQAKgEAJAAQANAAAIAHQAHAIAAAMQAAAKgFAIIgKAMIAAAAQADgCAGgCQAHgEAEAAQAUAAAIANQAGAKAAARQAAALgKAMQgGAFgFADIAHgBQAMAAANALQgMgDgNAAg");
	this.shape_189.setTransform(366.5,201.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.3).s().p("ABqCXQgMgGgBgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgFAGgHAAQgEAAgEgCQgIgDgCgHIgFAKQgDAEgJAAQgGAAgFgCQgFgEAAgFQAAgIAKgGQAKgHAAgHQAAgIgEgDQgDgEgKAAQgDAAgEgKQgEgKgKAAQgKAAgFAHQgFAFAAAIIgCAAIAAgBIAHgOIg8AsIgWgPQgBgOgDgFQgHgKgHAAQgFAAgDADQgEAEgDAJIAAgBQgGgLgJgEQgHgDAAAFQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIAAgCQgGACgDAKQgCAKgLAAQgJAAgGgGQgIgGAAgLQAAgGAJgJIANgOIgBAAQgFACgEgFQgHgIAAgPQAAgMAFgFIAPgKQgJAAgFgHQgFgGAAgJQABgIAGgHQADgEANgJIAAgBQgIABgHgFQgHgGgBgMQABgTAGgMQAOgIAOAAQAIAAAJAFQAFADAGAFIgEgKQgDgIAAgIQAAgPALgJQAEgEAFgDIAAABQgHAMAAAMQAAAZAVAJQALAGAMAAIgrAUQgWANAAAPQAAALAKAFQAEACAFAAIgOAHQgOALAAAJQAAAJAJAFQAHAFANgDIAAAAQgDACgEAGQgCAGAAAIQAAALAJAHQAGAFAKAAQAKAAAEgVQAFgVAMAAQAHAAAJAJQAHAGABAGIACAAQgBgOAGgIQAHgKASAAQAMAAAFAKQADAGABAFIACgFQAHgFAJAAQANAAAGAFQAHAFAAAFQAAAFgHAIQgIAIAAAGQAAALAHAEQAGAFAHAAQAIAAAFgFIAFgDIgDAIQgCAKAAAHQAAAOAHAHQAEAGAJAAQAJAAAJgPQAHgMABgHQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQADABAFAAQAHAAAEgFQAGgEAAgHQAAgIgEgNIgFgPQAEAEADAAQAGADAGAAQAJAAAFgCIgBABQgIAIgHABIAAAAQAUADAIAEQAKAFgBAMQABANgNAJQgNAJgUABQADACAAADIAAAIQAAAPgLAMQgDAEgEACQgOgBgKgHgAh4hkIAAAAIAAgBIAAABg");
	this.shape_190.setTransform(359.9,209.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.3,-0.4,0,-3.3,-0.4,25.3).s().p("AA9CKQgGgIAAgNQAAgIACgJIADgIIgFADQgGAEgHAAQgIAAgFgEQgHgFAAgKQAAgGAHgJQAIgHAAgGQAAgFgHgEQgGgGgNAAQgKAAgEAGIgDAFQAAgGgDgGQgGgKgNAAQgSAAgIALQgFAHAAAPIgBAAQgBgGgIgHQgIgIgHAAQgMAAgFAVQgEAUgLAAQgJAAgHgFQgIgGAAgMQAAgHACgGQAEgHADgCIgBAAQgMADgIgEQgJgFAAgLQAAgKAPgIIANgIQgEABgFgDQgJgEAAgMQAAgPAWgMIAqgUQgMAAgKgGQgVgJAAgZQAAgNAHgLIAAgBQAHgEAIAAQARAAARAJQAJAFAEAEQAFAEABAEQAAgHAGgHQAKgEANAAQAXAAANAOQAPANAAATQAAANgFAPIAAAAQAEgDAEAAQAFAAAEABQAFAEACAFQAAgMACgGQADgIAIAAQAHAAAEAGQAEAGAAAHQAAAJgGAKIgHALIAAABQAEgBAHACQAHADACAGIAAABQAEgMACgDQAGgHANAAQASAAAAAXQAAAQgIAJIgKAMIAVgCQANAAALADQANAMAAAPIgBADQgBAIgIAHQgEADgJAAQgHAAgFgDQgDgBgFgEIAFAPQAFAOAAAHQAAAIgGAEQgEAFgHAAQgFAAgDgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAHgHANQgJAPgJAAQgJAAgFgGg");
	this.shape_191.setTransform(361.5,207.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],3.8,-3.6,0,3.8,-3.6,4.8).s().p("AgNALQgCgEAAgEIAAgDQAAgSARgRQABAHAEAMIAJAQQgMAPABAVQgNgLgFgOg");
	this.shape_192.setTransform(747,310.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],16.3,-3.3,0,16.3,-3.3,19.1).s().p("AgfBcIgzjQQAEAOAPALQAPANAbAKQAGAEAHACQABAgASAuQAaA8AvApQg5gGg6gTg");
	this.shape_193.setTransform(754,323.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.3,-0.7,0,1.3,-0.7,4.8).s().p("AgQALQgEgLgBgGQALgLAPgIQAEAMAIAJQACADADABQgVALgIAQIgJgQg");
	this.shape_194.setTransform(749.5,307.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],5.8,-6.1,0,5.8,-6.1,19.1).s().p("AgTBZQgvgpgag6QgUgwgBggIAaAGQAaAIAeAEQATA9BIA5QAbAXAbAOQgrAIgtAAQgYAAgVgCg");
	this.shape_195.setTransform(764.5,326.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-4,-3.8,0,-4,-3.8,19.1).s().p("AglBFQhJg7gTg7QAcADAdAAQBXAAA/gbIAfgPIALgHIAKgKIgwDBQghALgiAHQgYgNgcgYg");
	this.shape_196.setTransform(774.3,323.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.1,0.5,0,1.1,0.5,3.6).s().p("AgKgDIAIgHQAGgFAFgIQACAFABAFQAAANgMAOIgIAKQADgQgFgLg");
	this.shape_197.setTransform(787.3,311.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-6.2,-1.8,0,-8,-1.7,19.3).s().p("AgRAIIgJgIIAKgHQAIgFAIAAQAHAAAKAGQAKAGAAACQAAAEgJAEQgHADgLAAQgLAAgGgFg");
	this.shape_198.setTransform(780.3,314);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],3.8,-2.1,0,1.9,-2,19.3).s().p("AhZAsQgegDgagIQgDgIAAgMQAAgfARgSIAFAAQAQABAPgDIATgCQANAAAFABQAHAAADACQgFgBgKABQgLABgCACIgCADQgDAAgFAKQgFAGgFALIAAACIAUgKQAJgDAIAAQAIAAAKAKIAJAFQAGAFACABIAAgKQACgDAKAAQAGAAAFAEIAHAIQgBgHAEgFQADgEAFgBQADgCAPAAQACAAADADQAEACAFAAIgKgMIgEgFIgDgCIgHgBIgKgEIAAgJIAAgCQALADATgFIAOAIQAPAJAKAAQAJAAAHgCQAGgDAEAAQALAAALAKQAPALACATIggAPQg/AahWAAQgeAAgbgDgABSgKIgKAJIAJAHQAGAEAMAAQAMAAAHgDQAJgEAAgDQAAgDgKgGQgKgGgIAAQgJAAgIAFg");
	this.shape_199.setTransform(770.3,314.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.9,2.9,0,1.9,2.9,3.6).s().p("AgRAAQAPgCAGgJQADgDABgEQAHAJADAJQgFAHgJAFIgGAHQgFgMgKgHg");
	this.shape_200.setTransform(786.4,309.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],7.1,-0.2,0,5.3,-0.1,19.3).s().p("AiKAuQgHgCgGgEQgbgLgPgMQgBgUAMgQQAKgQAVgLQARARAfAAQAIAAAPgGQANgGAGgFQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIABADQADAGAEACIARAAQARAAADgCQADAAACgCQgBAIgEAMIAFAAIAJAFIAFAGQADADAAADQADgEACgBQACgDAEgBQAFAAABABQADABAAAHQAHgMACAAIAHgCIAFAAIAKAEIAHABIADACIAFAFIAJAKQgFAAgEgCQgDgDgCAAQgPAAgDACQgFABgDAEQgEAFABAJIgJgKQgEgEgGAAQgLAAgCADIAAAMQgCgBgFgFIgIgHQgKgKgHAAQgJAAgIADIgUAKIAAgCQAFgLAEgEQAFgKADAAIACgDQADgCAKAAQAKgCAFACQgDgDgHAAQgFgBgNAAIgSACQgQADgQgBIgFAAQgRARAAAgQAAAMADAIIgagGgAClgFQgLgKgLAAQgDAAgHADQgGACgKAAQgJAAgQgJIgOgIQgTAFgLgDIAAgMIAJgFIAFgEQACAFAMAFQAJADAKAAQAYAAAFgSQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQAHAUAcAAIAPAAQAKAHAEAMQAGALgDAQIgLAIQgCgVgPgJg");
	this.shape_201.setTransform(767,312.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.9,-1.3,0,-2.7,-1.3,11.6).s().p("AgpA7QACgXADgRQAJgkAUgTIAOgHIAhgOIACAAIgqAgQgSAOgEAGIgFAJQgHALgCAUIAAANIAAACIAAAJIgFAAg");
	this.shape_202.setTransform(775.6,305);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],2,-0.8,0,1.3,-0.8,11.7).s().p("AgUBGQgBgBgGAAQgDAAgCAEQgCAAgDAEQAAgCgDgDIADgVQgBgJgHgVIgOgnIABAAQABAIAXANQAMgOAWgYQASgUASgPQAWgFABgCIABAAIgiAgQgOAOgEAHIAGABIARgIQgUATgJAkQgCARgBAXIgIABQgBABgIALQABgGgDgBgAgQAwQABAFAEAFIACgCQACgIALgoQgEAHgEALQgFAMgBAJQgDgLABgFIAAgUIgEACQABAVgIANIAAgBIgEgiQgCAGAAAIQAAAMABAFQABAKAEAEIABgBQAGgLAAgFIAAgDQABAEgBAHgAACgGIACgBIgGAAIAEABg");
	this.shape_203.setTransform(771.6,304.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-11.4,8.3,0,-11.4,8.3,34.7).s().p("ABnBvQgIABgTADQAHgHAFgIQAMgQAAgVQAAgggZAAQgSAAgHAIQgDAFgGARIAAgDQgDgHgLgDQgHgEgHACIAAgCQAGgIAEgHQAIgOAAgMQgBgJgFgHQgFgJgKAAQgKAAgCAMQgDAIgCANQgBgGgHgEQgFgBgIAAQgFAAgFADIAAgBQAGgRAAgSQAAgbgUgSQgVgTggAAQgSAAgNAFIAHgHQARgRAWAAQAbAAAdAaQAdAagIAXQAEgJAOgHQANgGAMABQAUAAAKAKQAJAKABARQgBAOgHALQgEAGgIAKIAAACQACgEAJgDQAIgFAHAAQAbAAAMASQAHANABAYQAAAPgPAPQgIAIgGAEIAJgBQARABARAPQgOgHgUAAg");
	this.shape_204.setTransform(785.5,273);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],6.4,0,0,5.7,0.1,11.7).s().p("AgDBLIgKgFIgEgBQAEgLAAgJQACgRgGgPIgGgOIgNgTQgTgXgagHIAXAAIACAAIgEgLQgEgJgCgCIAAgCIAmAdIAcAVQACAABQg8QgEAFgFAOIAAABIACAAIAFgBQgSAQgUATQgXAZgLAOQgVgOgCgIIgBAAIAPAnQAFAWAAAIIgCAVIgFgGgAAaA5QABgHgBgEIAAADQAAAFgGALIgCACQgDgFgBgKQgBgEAAgNQAAgIACgFIADAhIAAACQAJgOgBgUIADgCIAAATQAAAGADALQABgJAEgNQAFgKAGgIQgNAogCAIIgCACQgEgFgBgFgAAoAAIAIAAIgDABIgFgBg");
	this.shape_205.setTransform(767.2,303.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-4.6,-0.6,0,-4.6,-0.6,34.7).s().p("ABVC9QgJgKAAgUQAAgIACgPIADgLIgFAGQgJAFgJAAQgLAAgHgFQgKgHAAgPQAAgIAKgMQAKgKABgGQAAgIgJgGQgKgIgRAAQgOAAgGAIIgEAHQAAgIgEgIQgKgOgRAAQgZAAgKAPQgHAKAAAUIgBAAQgCgIgLgKQgKgLgMAAQgRAAgFAdQgFAbgPAAQgNABgJgHQgLgJAAgQQAAgLADgHQAEgKAFgCIgBAAQgQAEgMgHQgLgFAAgPQAAgPAUgLQAKgIAIgCQgGAAgHgDQgOgHAAgPQAAgWAfgRIA7gaIAAAAQgRgBgOgHQgcgNgBgkQAAgRAKgPIAAgBQAJgEALAAQAXAAAYAMQAMAFAIAHQAEAFACAFIABAFIAAgDIgBgCQAAgJAIgKQAOgFASgBQAgABATATQATASAAAaQAAATgGATIAAABQAFgFAGAAQAIAAAFACQAHAFABAGQABgPADgJQAFgLAKAAQAKAAAFAJQAFAHAAALQAAALgIAOQgDAIgHAHIAAACQAHgCAIAFQAKADADAHIAAACQAHgRACgEQAIgJARABQAZgBABAgQAAAVgMAOQgGAIgHAHQAUgDAHAAQAUAAAPAGIAAAAQARAQAAAUIgBAGQgCAJgJAKIgCABQgGADgMAAQgJAAgHgEIgLgFIAHAUQAGASAAAKQgBAKgHAHQgGAFgJAAQgHAAgDgCIgFgCQAAAJgLASQgNAUgLAAQgNAAgFgIg");
	this.shape_206.setTransform(778.7,281.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-2.3,-3.1,0,-2.3,-3.1,34.7).s().p("ACSDRQgQgKgCgIIgCABQgHAJgLAAQgEAAgIgDQgIgEgFgJIgGAOQgDAFgNAAQgJAAgGgEQgHgFAAgGQAAgLAOgKQANgJAAgIQAAgMgFgFQgFgFgNAAQgFAAgFgNQgGgNgOAAQgNAAgHAIQgHAHAAALIgDAAIAAgBQAGgOAEgFQhRA8gBAAIgfgVQgCgTgFgGQgHgOgLAAQgFAAgGAEQgGAFgEANIAAgCQgHgPgMgFQgMgFAAAIQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAAgCQgLACgEANQgCAQgOAAQgNAAgIgJQgLgIAAgQQgBgJAMgMIATgTIAAAAQgHADgIgIQgIgJAAgVQAAgRAGgHIAWgPQgNABgHgJQgFgIAAgNQgBgMAJgJQAFgFARgNQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgLACgHgHQgLgIAAgRQgBgaAJgRQASgKAUAAQALAAANAHIAOAKIACADIAAgCIgCgBQgEgHgCgGQgDgKAAgLQAAgWAPgNQAGgFAHgEIAAACQgKAPAAARQABAkAcANQAOAGARABIAAAAIg7AbQgfARAAAVQAAAQAOAHQAHADAGgBQgIADgKAHQgUAOAAAOQAAAOALAFQAMAHAQgEIABAAQgFACgEAJQgDAIAAAKQAAARALAJQAJAGANAAQAPAAAFgbQAFgdARAAQAMAAAKALQALAKACAIIABAAQAAgUAHgKQAKgPAZAAQARAAAIANQAEAJAAAIIAEgHQAIgIAOAAQARAAAKAHQAJAHAAAIQgBAGgKAKQgKALAAAJQAAAPAKAGQAHAGALAAQAJAAAJgGIAFgFIgDALQgCAPAAAIQAAAUAJAKQAFAIANAAQALAAANgVQALgRAAgKIAFADQADACAHAAQAJAAAGgGQAHgGABgKQAAgKgGgTIgHgUIALAGQAHAEAJAAQAMAAAGgDQgLAMgKABIAAAAQAcAFAKAGQAOAFAAARQAAAUgTAMQgQAKgbADQADACABAFIAAAKQAAAVgPAPQgDAHgHADQgSgCgPgIg");
	this.shape_207.setTransform(776.4,284.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],6.1,-8.2,0,6.1,-8.2,34.7).s().p("AB0CyQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgGATgYAAQgKAAgJgEQgMgFgCgFIgFAFIgJAEQADgUAGgMIAGgLQAEgFASgOIArghIgBAAIgiAPIgQAHIgQAIIgGgBQADgIAPgNIAiggIgCAAQAAACgWAFIgFAAQAAgKAHgHQAIgJAPAAQAOAAAGAOQAFANAEAAQAOAAAEAEQAFAFABAMQAAAIgOAKQgNAJAAALQgBAHAHAFQAHADAIAAQANAAAEgFIAGgNQAEAIAJAEQAHAEAEAAQALAAAHgKIADAAQACAIAPAJQAQAIARACQgKAHgNAAQgOAAgKgFIgSgLQAAAMgGAIQAAAEgDACQgJAKgOADIgPAAQgbAAgIgUgAihC1QgDgDgCgDQgIgJgEgMQgDgIAAgKQgJADgGAAQgjAAgSghQgOgZAAgiQAAglAhgZQAdgZAWAFIABAAQgWgLgGgGQgKgIABgSQAAgRAKgHQAJgFAJABQgHgCgCgLQgFgKAAgLQAAgWAagXQAJgIAIgEQgIARAAAaQAAARALAIQAIAHAKgCQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQgSANgFAFQgIAJAAANQAAAMAGAJQAHAJAMgBIgVARQgGAHAAARQAAASAIAKQAHAHAHgCIABAAIgUATQgLAMAAAJQAAAPALAIQAJAJANAAQANAAADgQQAEgNAKgCIAAACQAAABAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgHAMAFQANAFAHAPIAAACQAEgNAGgFQAFgFAGAAQAKAAAIAPQAFAGACASIgngdIAAACQADADAEAIIAEAMIgDAAIgWgBQAZAIAUAWIANAVIAGAOQAGAQgCARQgCACgDABQgDACgRAAIgRAAQgEgCgCgHIgBgDQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgGAFgMAGQgQAGgIAAQgfAAgRgRg");
	this.shape_208.setTransform(768,289.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],16.2,-3.4,0,16.2,-3.4,19.1).s().p("AggBcIgzjQQAGANAOAMQAPANAaAKQAHAEAIACQAAAgASAtQAbA8AtAqQg3gHg8gSg");
	this.shape_209.setTransform(634.7,442.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.4,-0.7,0,1.4,-0.7,4.8).s().p("AgPAKQgFgKgBgHQALgKAQgJQADAMAIAKIAFAEQgUALgJAPIgIgQg");
	this.shape_210.setTransform(630.1,426.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],3.8,-3.6,0,3.8,-3.6,4.8).s().p("AgNALQgCgEAAgEIAAgDQAAgTAQgQQACAHAEAMIAJAQQgMAOABAWQgNgMgFgNg");
	this.shape_211.setTransform(627.7,429.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],5.7,-6.2,0,5.7,-6.2,19.1).s().p("AgUBZQgtgqgbg6QgUgvAAggIAZAGQAbAIAeAEQASA9BHA5QAbAXAbANQgrAJgvAAQgWAAgVgCg");
	this.shape_212.setTransform(645.2,445.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-4.1,-3.8,0,-4.1,-3.8,19.1).s().p("AglBGQhJg7gTg7QAcACAdAAQBXAAA/gaQARgIAOgIIALgHIAKgKIgwDBQghALgiAHQgZgNgbgXg");
	this.shape_213.setTransform(655,443);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.1,0.5,0,1.1,0.5,3.6).s().p("AgKgEIAIgGQAHgFAFgIIABAKQAAANgLAOIgIAKQADgQgFgMg");
	this.shape_214.setTransform(667.9,430.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.9,2.9,0,1.9,2.9,3.6).s().p("AgRAAQAPgCAGgJQADgDABgDQAHAIADAJQgFAHgJAGIgGAFQgFgLgKgHg");
	this.shape_215.setTransform(667.1,428.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-6.2,-1.8,0,-8,-1.8,19.3).s().p("AgSAIIgIgIIAJgHQAJgFAIAAQAHAAAKAGQAKAGAAABQAAAFgJAEQgIADgKAAQgLAAgHgFg");
	this.shape_216.setTransform(661,433.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],3.8,-2.1,0,1.9,-2.1,19.3).s().p("AhZAtQgegFgbgHQgCgIAAgMQAAggARgRIAEABQAQAAAQgDIATgDIASABIAKADQgFgBgKABQgLACgCACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgDABgFAKQgEAGgFAKIAAACIAUgKQAHgCAKAAQAHAAAKAKIAKAGIAGAEIAAgKQACgCAMAAQAFAAAFAEIAGAIQAAgHAEgFQACgEAGgCQADgBAPAAQACAAADADIAJADIgJgNIgGgFIgCgCIgHgCIgKgDIAAgJIAAgCQAKACATgEIAPAIQAQAIAJAAQAJABAHgDQAGgCAEAAQALAAALAKQAPAMACARQgOAIgSAIQg+AahXAAQgeAAgbgCgABRgKIgJAIIAIAHQAHAGALAAQAMAAAIgDQAJgFAAgDQAAgDgKgFQgKgHgIAAQgJAAgJAFg");
	this.shape_217.setTransform(651,433.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],7.1,-0.2,0,5.3,-0.2,19.3).s().p("AiJAuQgIgDgGgDQgbgLgPgMQgBgUAMgRQAKgPAVgMQARASAfAAQAIAAAQgHQAMgFAGgFQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAAADQADAHAEABIARAAQASAAACgBQADgCACgCQAAAJgEALIAEACIAKAEIAEAGQAEADAAACIAEgEQACgDAEgBIAGABQADABAAAGQAHgLACgBIAIgBIAFAAIAKADIAHACIACACIAFAFIAKALIgJgDQgDgDgCAAQgPAAgDABQgGACgCAEQgEAFAAAJIgJgKQgEgEgGAAQgLAAgCACIAAAMIgHgEIgHgIQgKgKgIAAQgJAAgIACIgUAKIAAgCQAFgKAFgEQAFgKADgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQACgCALgCQAKgBAFABIgKgDIgSgBIgTADQgQADgQAAIgEgBQgRARAAAgQAAAMACAIIgZgGgACmgFQgMgKgKAAQgEAAgGACQgHADgJgBQgKAAgPgIIgPgIQgTAEgKgCIAAgNQAEgBAEgCIAFgGQACAGAMAEQAJAEAKAAQAYAAAFgSQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAIAUAbAAIAPgBQAKAIAFALQAFAMgDAQIgKAHQgDgTgOgKg");
	this.shape_218.setTransform(647.6,431.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],2,-0.8,0,1.3,-0.8,11.7).s().p("AgUBGIgGgBQgEAAgDADIgEAFQAAgCgDgDIACgVQAAgJgHgVIgOgnIABAAQABAHAXAPQALgPAXgZQASgSASgQQAWgFABgBIABAAIgiAfQgOAOgEAHIAHABIAQgIQgVATgIAkQgCARgBAXIgHABQgCABgIALQAAgGgCgBgAgQAwQABAFAEAFIADgCQABgIALgpIgIATIgGAVQgDgKAAgGIAAgTIgDACQABAUgIANIAAgBIgEgiQgCAGAAAIQAAANABADQABALAEAEIABgBQAGgLAAgFIAAgDIAAALgAACgGIACgBIgGAAIAEABg");
	this.shape_219.setTransform(652.3,423.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],6.4,0,0,5.6,0.1,11.7).s().p("AgDBLIgKgFIgEgBQAEgLAAgJQACgRgGgQIgGgNIgNgUQgTgWgagIIAXABIABAAIgDgLQgEgJgDgCIAAgCIAoAcIAbAWIBSg8QgDAFgGAOIAAABIACAAIAFgBQgTAQgSASQgYAZgLAPQgVgPgCgHIAAAAIAOAnQAFAVAAAJIgDAVIgEgGgAAaA5IAAgLIAAADQAAAFgGALIgCABQgDgEgBgLQgBgDAAgNQAAgIACgGIADAiIAAABQAJgNgBgUIADgCIAAATQAAAGACAKIAGgVIALgTQgNApgBAIIgDACQgEgFgBgFgAAoAAIAIAAIgDABIgFgBg");
	this.shape_220.setTransform(647.9,422.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-2,-1.3,0,-2.7,-1.3,11.7).s().p("AgpA6QABgWAEgRQAIgkAVgTIAOgHIAhgPIACAAIgqAhQgSAOgDAFQgFAFgCAEQgFAMgDAUIAAAMIAAACIAAAJIgFAAg");
	this.shape_221.setTransform(656.3,424.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],6.1,-8.2,0,6.1,-8.2,34.7).s().p("AB0CyQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgFASgYAAQgKAAgJgDQgMgFgDgFIgFAFQgDACgEABQACgTAFgMQADgGAEgFQADgFAUgOIAqghIgCAAIggAOIgQAIIgRAHIgHAAQAEgIAOgNIAiggIAAAAQgCACgWAFIgEAAQABgKAGgHQAIgJAPAAQAOAAAFAOQAGANAEAAQANAAAFAEQAGAFAAAMQgBAIgMAKQgPAJAAALQABAGAGAFQAHAEAIAAQANAAADgFIAHgOQAFAJAIAEQAHAEAFAAQAKAAAIgKIACAAQABAIAQAJQAPAIATACQgLAHgNAAQgOAAgKgFIgSgLQgBAMgEAIQgCAEgDACQgHAJgPAEIgPAAQgbAAgIgUgAiiC1IgEgGQgJgJgDgMQgCgIgBgKQgIADgIAAQghAAgUghQgNgZABgiQAAgmAggYQAcgZAWAFIABAAQgVgLgHgGQgJgIAAgTQAAgQALgHQAIgFAKABQgHgDgDgKQgDgKAAgLQAAgWAagXQAHgIAKgEQgJARAAAaQgBARAMAIQAIAHAKgCQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQgSANgEAFQgJAJAAAMQgBANAHAJQAGAIANAAIgVARQgHAHAAAQQAAATAJAJQAHAIAHgDIABAAIgTAUQgNAMAAAIQAAAQAMAIQAJAJAMAAQAOAAADgQQAEgNAKgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBQABgBAAgBQAAgHALAFQAMAFAHAPIAAACQAFgNAFgFQAFgFAHAAQAKAAAIAPQAEAGADASIgngdIAAACQACADAFAIIADAMIgBAAIgYgBQAaAHATAXIAOAVIAFAOQAHAQgCAQQgCADgDABQgCABgSAAIgRAAQgFgBgCgHIgBgDQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQgFAFgNAGQgPAGgIAAQgfAAgSgRg");
	this.shape_222.setTransform(648.7,408.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-2.3,-3.2,0,-2.3,-3.2,34.7).s().p("ACSDRQgQgKgBgHIgDAAQgHAKgLAAQgEAAgHgFQgJgDgEgJIgHAOQgDAFgNAAQgJAAgGgEQgHgFAAgGQAAgLAOgKQANgJAAgIQAAgMgFgFQgFgEgNAAQgFgBgFgNQgGgOgNABQgOgBgHAKQgHAHAAAKIgDABIAAgBQAGgPAEgEIhSA7IgegVQgDgSgEgHQgIgOgKAAQgHAAgFAEQgFAFgFANIAAgBQgHgPgNgFQgLgGAAAIQAAABAAABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQgKACgEANQgDAPgOAAQgNABgIgJQgMgIAAgQQAAgIAMgNIAUgTIgCAAQgGADgHgIQgJgJAAgVQAAgRAHgGIAVgPQgNAAgGgJQgHgJAAgMQAAgNAJgIQAFgFASgNQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgKACgIgGQgMgJAAgQQAAgbAJgRQASgKAUAAQAMAAAMAIIAOAKQgEgIgBgGQgEgKAAgLQAAgWAPgNQAGgFAHgEIAAACQgJAPAAASQAAAjAcAMQAOAIARAAIAAAAIg7AbQgfARAAAVQAAAQAPAHQAGADAFgBIgRAKQgUAPAAANQAAAOALAGQAMAHAQgFIABAAQgFADgDAIQgEAIAAAKQAAARALAJQAJAGANABQAPgBAFgbQAGgdARAAQALAAALAMQAKAIABAJIACAAQAAgUAHgKQALgPAYAAQARAAAHANQAFAKAAAHIAEgHQAIgIANAAQASAAAKAHQAJAHAAAIQAAAGgMALQgKAKAAAKQAAAOAKAGQAIAGALABQAKgBAIgGIAFgFIgDAMQgCAOAAAIQAAAUAIALQAHAHAMAAQALAAAOgVQAKgRAAgKIAFADQADACAHABQAKAAAGgHQAHgGAAgKQAAgKgFgTIgHgUIAKAHQAHADAKgBQALAAAGgCQgLAMgJABIgBAAQAcAFAKAGQAOAFAAASQAAATgTALQgQALgaADQADACAAAFIAAAKQAAAVgPAQQgDAGgHADQgSgCgPgIgAikiJIAAgBIgCgBIACACg");
	this.shape_223.setTransform(657.1,403.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-11.3,8.3,0,-11.3,8.3,34.7).s().p("ABoBwQgIAAgUADQAIgIAFgHQALgQAAgWQAAgfgaAAQgQAAgHAIQgEAFgFARIAAgCQgEgIgKgDQgIgEgHACIAAgCQAGgIAFgHQAHgOAAgLQAAgKgFgHQgFgIgKAAQgKAAgDALQgDAIgCAOQAAgHgIgEQgEgBgIAAQgGAAgFAEIAAgCQAGgRAAgSQABgagVgSQgUgUggAAQgSAAgOAFQACgEAFgDQARgRAXAAQAbAAAcAZQAeAbgKAXQAFgJAPgHQANgFAMAAQASAAAMAKQAJAKAAARQgBAOgHALQgDAGgJAKIAAABQADgDAIgDQAJgFAGAAQAbAAANASQAHANAAAYQAAAPgPAQQgHAHgHAFQAEgCAGAAQARAAAQAPQgOgFgTAAg");
	this.shape_224.setTransform(666.1,392.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-4.6,-0.7,0,-4.6,-0.7,34.7).s().p("ABVC+QgJgLAAgUQAAgIADgOIACgMIgFAFQgIAGgJABQgMgBgHgGQgLgGAAgOQAAgKALgKQALgLAAgGQAAgIgJgHQgKgHgRAAQgOAAgGAIIgEAHQABgHgGgKQgIgNgRAAQgZAAgLAPQgGAKAAAUIgCAAQgCgJgKgIQgLgMgLAAQgRAAgGAdQgFAbgPABQgNgBgIgGQgLgJAAgRQAAgKADgIQADgIAFgDIAAAAQgQAFgMgHQgMgGAAgPQAAgOAUgNIASgKQgGABgGgDQgOgHAAgQQAAgVAegRIA8gbIgBAAQgQAAgPgIQgcgMAAgjQAAgSAJgPIAAgCQAJgDALAAQAYAAAYAMQAMAFAHAGQAEAGACAGIABAEIAAgCIgBgCQABgKAHgLQAPgEASAAQAfAAATATQAUASAAAaQAAATgHASIAAACQAFgFAGAAQAIAAAFADQAIADAAAHQABgQADgIQAFgLALAAQAJAAAGAIQAEAHAAAMQAAALgHAOQgEAHgHAJIAAABQAHgBAJADQAJADAEAIIAAACQAGgRADgFQAHgHARgBQAaAAAAAgQAAAVgLAOQgGAHgIAIQAUgDAIAAQATAAAPAGIABAAQAQARAAATIAAAGQgCAJgLALIgBAAQgGACgLAAQgJABgIgDIgKgHIAHAUQAFATAAAKQAAAKgHAGQgGAHgKAAQgGgBgEgCIgEgDQAAAKgLARQgNAVgMAAQgMAAgGgHg");
	this.shape_225.setTransform(659.4,401.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.7).s().p("AgHgCIAGgFQAEgEAEgGIABAIQAAAJgIAKIgFAIQACgMgEgIg");
	this.shape_226.setTransform(569.9,316.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.2,0,1.4,2.2,2.7).s().p("AgMAAQAKgBAFgHIADgFQAFAHACAGQgEAFgGAEIgEAEQgDgHgIgGg");
	this.shape_227.setTransform(569.4,314.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.3,-4.6,0,4.3,-4.6,14.2).s().p("AgOBCQgigfgUgqQgPgkgBgYIAUAFQATAGAXADQAOAtA0AqQAUARAVAKQghAHghAAQgRAAgQgCg");
	this.shape_228.setTransform(553,327);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],12.1,-2.5,0,12.1,-2.5,14.2).s().p("AgXBFIgmibQAEAKAKAJQALAKAVAHIAJAEQABAYANAiQAUAsAiAfQgqgFgrgNg");
	this.shape_229.setTransform(545.2,324.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.7,0,2.8,-2.7,3.6).s().p("AgJAIIgBgFIAAgDQAAgNAKgNIAFAPIAGALQgIALAAAQQgIgJgEgKg");
	this.shape_230.setTransform(540,315.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,-0.5,0,1,-0.5,3.6).s().p("AgLAIIgFgMQAJgIALgHQACAJAGAIIAFACQgQAIgGAMIgGgMg");
	this.shape_231.setTransform(541.8,313.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.6,-1.4,0,-6,-1.3,14.3).s().p("AgNAGIgGgGIAHgFQAGgEAGAAQAFAAAIAFQAHAEAAABQAAADgGAEQgGACgIAAQgIAAgFgEg");
	this.shape_232.setTransform(564.8,318);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.8,0,-3,-2.8,14.2).s().p("AgbAzQg2grgOgsQAUACAVAAQBBAAAugTIAYgMIAIgFIAHgIIgjCPQgYAJgZAFQgTgKgUgSg");
	this.shape_233.setTransform(560.3,325.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.8,-1.5,0,1.4,-1.5,14.3).s().p("AhCAhQgXgCgSgGQgDgHAAgIQAAgXANgNIADAAIAYgBIANgCIAPAAIAHACQgEgBgIABQgIABgCACIgBABQgCABgEAHIgHANIAAABIAPgIQAGgCAHAAQAFAAAIAIIAGAEIAGADIAAgGQABgCAJAAQAEAAADACIAFAGQgBgFAEgDQABgDAEgCQACgBAMAAIADADIAHABIgHgJIgDgEIgDgBIgEgBIgIgDIAAgHIAAgBQAIABAOgDIALAHQAMAGAGAAQAHAAAFgCIAIgCQAHAAAJAIQALAIABANIgXAMQguAThBAAQgWAAgUgCgAA9gHIgHAGIAFAFQAGAEAIAAQAJAAAGgCQAGgEAAgCQAAgBgHgFQgIgFgGAAQgHAAgFAEg");
	this.shape_234.setTransform(557.4,318.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.3,-0.2,0,3.9,-0.1,14.3).s().p("AhmAhIgKgDQgUgIgLgJQgBgPAJgMQAIgMAPgJQANAOAXAAQAGAAALgFQAKgEAEgDIABABIABACQACAEADACIAMAAQAOAAABgCQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAHgDAIIADABIAHADIADAFQADACAAACIADgDQACgDADAAIAEABQACAAAAAFIAHgKIAFAAIAEAAIAIACIAFACIACABIADAEIAHAHIgGgBIgEgDQgLAAgDABQgDABgCADQgDAEAAAGIgHgHQgDgDgEAAQgIAAgCADIAAAIIgFgEIgFgGQgHgHgGAAQgGAAgHACIgPAIIAAgBIAHgLQAEgIADgBIABgBQACgBAIgBQAHgCAEACIgHgCIgOAAIgOACIgYABIgDAAQgMAMAAAXQAAAJACAHIgUgGgAB7gDQgIgIgIAAIgIABQgFACgHAAQgGAAgMgFIgLgHQgOADgIgCIAAgJIAGgCIAEgFQACAFAJADQAGADAIAAQASAAADgOQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAFAPAVAAIALgBQAIAHADAHQAEAIgCANIgIAFQgCgPgLgGg");
	this.shape_235.setTransform(554.8,316.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.4,-1,0,-2,-1,8.7).s().p("AgeAsQABgSADgMQAGgaAPgOIAKgGIAZgKIABAAIgfAYQgNAKgDAEIgEAGQgEAJgCAPIAAAJIAAACIAAAHIgEAAg");
	this.shape_236.setTransform(561.3,311.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.5,-0.7,0,1,-0.6,8.7).s().p("AgOA0IgFgBQgDAAgCADIgDADQAAgCgCgCIABgPQAAgHgFgQIgLgcIABAAQABAFASAKQAIgKAQgSIAbgaIARgEIABAAIgaAXQgKAKgDAFIAFABIAMgGQgPAOgGAbQgCAMAAARIgGABIgHAJQAAgFgBAAgAgLAjQAAAEADAEIACgBIAJglIgGAOIgEAQIgCgMIAAgOIgCABQAAAPgGAKIAAgBIgCgZQgCAEAAAGIABAMQABAIACADIABAAQAFgJAAgEIAAgCIAAAIgAABgEIACgBIgEAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAABAAg");
	this.shape_237.setTransform(558.3,310.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.8,0,0,4.2,0,8.6).s().p("AgCA4IgHgEIgDgBQADgIAAgHQABgMgEgMIgEgKIgKgOQgPgRgTgFIARAAIACAAIgDgIQgDgHgCgCIAAgBIAdAVIAUARIA9gtIgHAOIAAABIACAAIADgBIgbAaQgSASgIAKQgPgKgBgFIgBAAIAKAcQAEAQAAAHIgCAPIgDgEgAATAqIAAgIIAAACQAAAEgEAJIgBAAQgDgDgBgIIAAgMQAAgGABgEIADAZIAAABQAGgKgBgPIADgBIAAAOIACAMIAEgQIAHgOIgKAlIgCABQgDgEgBgEgAAeAAIAFAAIgBABQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_238.setTransform(555,310.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.5,-6.1,0,4.5,-6.1,25.8).s().p("ABWCFQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgEANgSAAQgIAAgGgCQgIgDgCgFIgFAEIgFADQACgPADgJIAFgIQADgEAOgKIAggYIgCAAIgYAKIgMAGIgMAFIgFgBQACgFALgKIAZgXIAAAAIgSAEIgCABQAAgIAFgFQAFgHAMAAQAKABAEAJQAEALAEAAQAJAAAEADQADADABAJQAAAGgKAIQgLAGABAIQAAAGAEADQAFADAHAAQAJAAAEgEIADgKQAEAGAGADQAGACADAAQAIABAGgHQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAgBAAQABAHAMAGQALAHAOABQgIAFgKAAQgKAAgIgEIgNgIQgBAIgDAHIgCAEQgHAHgLACIgLABQgUAAgGgOgAh3CGIgFgEQgGgHgCgJQgCgGgBgHQgGACgFAAQgZAAgOgYQgKgTAAgZQAAgdAYgRQAVgTAQAEIABAAQgQgIgFgEQgGgGAAgOQAAgMAIgGQAGgDAHAAQgFgCgCgHQgDgHAAgKQAAgPAUgRQAFgGAHgDQgHAMAAATQAAANAJAGQAGAGAIgCIABABQgNAJgEAEQgHAHAAAJQAAAJAFAHQAFAGAKAAIgQANQgFAEAAANQAAAOAGAGQAGAGAEgCIABAAIgOAOQgJAKAAAGQAAALAJAHQAGAGAJAAQALAAACgMQACgJAIgCIAAABQAAABAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgFAIAEQAJADAGAMIAAABQADgKAEgEQAEgDAEAAQAIAAAGALQADAEACANIgdgUIAAABQACABAEAIIACAIIgBAAIgSgBQAUAFAOARIAKAQIAEAKQAFAMgBANQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQgBABgOAAIgMAAQgDgBgCgFIgBgCIgBgBQgEAEgJAEQgLAEgHAAQgWAAgNgNg");
	this.shape_239.setTransform(555.6,299.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.8).s().p("ABtCbQgNgHAAgGQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgGAGgHAAQgEAAgFgCQgHgDgDgGIgEAKQgDADgJAAQgHAAgFgCQgFgEAAgFQAAgIAKgHQAKgHAAgGQAAgJgDgEQgEgDgKAAQgDAAgEgKQgFgKgJAAQgLAAgFAHQgFAFAAAIIgCAAIAAgBIAHgOIg9AtIgWgRQgCgNgEgFQgFgKgIAAQgEAAgEADQgFAEgCAKIAAgCQgGgLgKgEQgIgDAAAFQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBgBIAAgBQgHABgDAKQgCAMgKAAQgJAAgHgHQgJgGAAgLQAAgHAJgJIAPgOIgBAAQgFACgGgGQgFgHAAgPQAAgNAEgFIAQgKQgJAAgGgHQgEgGAAgJQAAgKAHgGQADgEAOgKIgCAAQgIABgFgFQgJgGAAgNQAAgTAHgNQANgIAPAAQAIAAAKAGIALAHQgEgFgBgFQgDgHAAgIQABgQAKgKQAFgEAFgDIAAACQgHALAAANQAAAaAVAKQALAFAMAAIABAAIgsAUQgXANgBAPQABANAKAEQAFADAEgBIgNAIQgPAKAAAKQAAAKAIAEQAKAFAMgDIAAAAQgEACgCAGQgDAHAAAHQAAANAJAGQAGAFAJAAQAMAAADgVQAFgVANAAQAHAAAJAIQAHAHACAGIABAAQAAgPAEgHQAJgLASAAQAMAAAFAKQAEAGAAAGIADgFQAGgGAKAAQANAAAHAFQAHAFAAAGQAAAFgJAIQgHAIAAAHQAAAKAHAFQAGAFAJAAQAGAAAGgFIAFgEIgDAJQgCAKAAAHQAAAOAHAIQAFAGAIAAQAJAAAKgPQAHgOAAgGIAFABQACACAFAAQAHAAAFgFQAFgEAAgIQAAgHgEgOIgFgPIAHAFQAGACAHAAQAJAAAEgCQgIAJgIABIAAAAQAVADAHAFQAKAEAAANQAAAOgNAJQgMAIgUACQACACABADIAAAHQAAAQgLAMQgDAEgEADQgOgCgLgGgAh6hmIAAgBIAAgBIAAACg");
	this.shape_240.setTransform(561.9,295.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.4,-0.5,0,-3.4,-0.5,25.8).s().p("AA/CNQgHgIABgOQAAgHABgKIADgJIgEAEQgHAFgGAAQgJAAgGgFQgHgFAAgLQAAgHAHgHQAJgIAAgFQAAgGgHgFQgHgGgNAAQgKAAgEAHIgDAFQAAgGgEgGQgGgLgNAAQgSABgJAKQgEAIAAAPIgBAAQgCgGgHgHQgJgIgHAAQgNAAgFAVQgDAVgMgBQgJAAgGgEQgJgHAAgMQAAgHADgHQACgGAEgCIAAAAQgMADgKgFQgIgEAAgMQAAgKAPgIIANgIQgEABgFgDQgKgFgBgMQABgPAXgNIAsgUIgBAAQgMgBgLgFQgVgJAAgbQAAgNAHgLIAAgBQAHgDAIABQARgBASAKQAJADAGAFQADAEABAEIABADIAAgBIgBgCQAAgHAHgIQAJgEAPABQAWAAAOAOQAPAOAAATQAAANgFAPIAAAAQAEgDAFAAQAFAAAEACQAFADABAFQAAgMADgFQADgKAIABQAHAAAEAGQAFAGAAAHQAAAJgHAKIgIANIAAAAQAGgBAGADQAIACACAGIAAABQAEgMACgEQAHgFAMgBQASAAABAXQgBAQgHAKIgKAMIAUgDQAOAAALAFIABAAQAMAMAAAPIgBAEQgBAHgHAIIgBAAQgEACgJAAQgHAAgGgCIgHgFIAFAPQAEANAAAIQAAAHgFAFQgFAFgHAAQgFAAgCgCIgFgBQAAAGgHAOQgKAPgJAAQgIgBgFgFg");
	this.shape_241.setTransform(563.6,294.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.4,6.2,0,-8.4,6.2,25.8).s().p("ABNBTIgVADIAKgMQAIgMAAgQQAAgXgSAAQgNAAgGAGQgCAEgEAMIAAgBQgDgGgHgCQgHgDgFABIAAgBIAIgMQAGgKAAgJQAAgGgEgFQgEgHgHAAQgIAAgBAJQgDAGAAAKQgBgFgGgDQgDgBgGAAQgEAAgEACIAAAAQAFgNAAgNQAAgUgPgNQgQgPgXAAQgOAAgKAEIAFgFQAOgNAQAAQAUAAAWATQAWAUgHARQADgHAKgFQAKgEAIAAQAPAAAIAHQAHAIAAANQAAALgGAHQgCAEgHAIIAAABQACgCAHgDQAGgEAEAAQAVAAAJAOQAFAJAAASQAAALgKAMIgLAJIAHgBQAMAAANALQgLgEgOAAg");
	this.shape_242.setTransform(568.6,287.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-6,-1.7,0,-7.8,-1.7,18.6).s().p("AgRAIIgIgIIAJgHQAIgFAIAAQAIAAAJAHQAJAFAAABQAAAFgIAEQgHADgLAAQgKAAgHgFg");
	this.shape_243.setTransform(349.2,433);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.9,2.8,0,1.9,2.8,3.5).s().p("AgRAAQAPgCAGgKIADgFQAHAIADAJQgFAGgIAGIgGAGQgEgLgLgHg");
	this.shape_244.setTransform(355.2,428.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.1,0.5,0,1.1,0.5,3.5).s().p("AgKgDIAIgFQAHgHAFgHIABAKQAAANgLAMIgIAKQAEgPgGgLg");
	this.shape_245.setTransform(355.9,430.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-4,-3.7,0,-4,-3.7,18.5).s().p("AglBEQhGg6gRg5QAZACAdAAQBUAAA9gZQASgHAMgHIAKgIIALgKIgvC7QgfAMghAGQgYgNgcgWg");
	this.shape_246.setTransform(343.4,442.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],5.5,-5.9,0,5.5,-5.9,18.5).s().p("AgTBWQgtgogZg4QgUguAAgfIAZAHQAZAHAeADQARA8BFA3QAbAWAaANQgpAIgrAAQgXAAgWgCg");
	this.shape_247.setTransform(333.9,444.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],3.7,-1.9,0,1.9,-1.9,18.6).s().p("AhVArQgegDgagHQgCgJAAgKQAAgfAQgSIAEABQARAAAPgCIASgCIASAAQAFABAEACQgFgCgKACQgKABgCACIgCACQgEABgEAJIgJAQIAAACIAUgJQAIgDAIAAQAHAAAKAKIAJAFIAGAFIAAgJQADgEAKAAQAGABAEAEIAHAHQgBgHAEgFQADgDAEgCQADgBAPAAQACAAAEADQACACAGAAIgJgMIgFgFIgCgCIgHgBIgKgDIAAgJIAAgDQAKADASgFIAOAJQAQAJAIgBQAJABAHgDQAGgCAEAAQAKgBALAKQAOALACASQgMAHgSAIQg9AZhUgBQgdAAgZgCgABPgKIgJAIIAIAIQAHAFALAAQAMAAAHgEQAIgEAAgDQAAgCgIgGQgKgGgJAAQgJAAgIAEg");
	this.shape_248.setTransform(339.5,433.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],6.2,0.1,0,5.4,0.2,11.2).s().p("AgEBKIgJgFIgEgBQADgLABgJQACgRgGgNIgGgPQgGgIgHgJQgSgXgagHQASAAAGABIABAAIgEgLQgDgJgCgCIAAgCIAlAcIAbAVIBPg7IABgBQgDADgHARIAAABIACAAIAFgBQgSAPgSATQgXAYgLANQgVgNgBgHIgBAAIAOAlQAGAVgBAJIgDATIgEgFgAAZA4QABgGgBgEIgBACQAAAGgGALIgBAAQgDgEgBgKQgBgDAAgOQAAgGACgGIADAhIAAABQAIgOgBgTIADgCQABAHgBAMQAAAFACALIAHgUQAFgLAEgHIgNAvIgDABQgEgFAAgFgAAmABIAHAAIgCACQgFgBAAgBg");
	this.shape_249.setTransform(336.6,422.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],2.1,-0.8,0,1.3,-0.8,11.3).s().p("AgTBDQgBgBgFAAQgEABgCADIgEAFQAAgDgEgDIADgTQAAgJgHgVIgOglIABAAQABAHAXANQALgNAVgYQASgTARgPQAWgEABgCIAAAAIghAfQgNAMgEAIIAHAAIAPgHQgUASgHAjQgDARAAAWIgIABQgCAAgGAMQAAgHgDgBgAgPAuQABAFAEAFIACgBIAMgvQgEAHgDALIgHAUQgCgLAAgFQABgMgBgHIgDACQABATgIAOIAAgBIgDghQgCAGAAAGQAAAOABADQABAKADAEIABAAQAGgLAAgGIAAgCQABAEgBAGgAACgFIACgCIgFAAQAAABADABg");
	this.shape_250.setTransform(340.7,423.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.8,-1.3,0,-2.6,-1.3,11.3).s().p("AgnA5QABgWADgRQAIgjAUgSIAOgHIAggNIACAAQgbASgOANQgRAOgEAFQgDAEgDAEQgFAMgDASIAAAMIAAADIAAAJIgEAAg");
	this.shape_251.setTransform(344.7,424.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],6.9,-0.2,0,5.1,-0.2,18.6).s().p("AiFAsIgNgGQgagKgPgMQgBgTAMgQQAKgQAUgKQARARAeAAQAHAAAPgHQANgFAFgEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACADQACAGAEABIAQAAQARABADgCQADgBACgCQgBAJgDALIAEABIAIAEIAFAFQADAEAAADIAEgGQADgDAEAAQAFAAABABQACABAAAHQAHgMACgBIAHgBIAFAAIAKAEIAHABIACACIAFAEIAJALQgFgBgDgBQgDgEgCAAQgPAAgDABQgFACgDAEQgEAFABAIIgJgJQgEgEgGAAQgKAAgCADIgBAMIgGgFIgHgIQgKgKgHAAQgIAAgIADIgUAJIAAgCIAJgOQAFgJADgBIACgCQACgBALgBQAJgCAFACQgEgCgFgBIgSgBIgSADQgPABgQABIgEgBQgRARAAAfQAAALADAJIgZgHgACggGQgLgJgKAAQgEAAgGACQgGADgJAAQgJAAgQgIIgOgJQgRAFgLgDIAAgMQAEgBAEgDIAFgEQADAFALAFQAIACAKAAQAXAAAFgRQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAHAUAbAAQAIAAAGgCQAKAJAFALQAFAKgDAQIgLAIQgCgUgOgKg");
	this.shape_252.setTransform(336.3,431.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],15.7,-3.2,0,15.7,-3.2,18.5).s().p("AgeBZIgyjJQAFANAOALQAPAMAZALIAOAFQAAAfASAtQAZA5AtAoQg3gGg4gSg");
	this.shape_253.setTransform(323.7,442);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],3.7,-3.4,0,3.7,-3.4,4.7).s().p("AgMALIgBgHIgBgEQAAgSAPgRQACAIAEALIAIAQQgLAPABAUQgMgLgFgNg");
	this.shape_254.setTransform(316.9,429.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.3,-0.7,0,1.3,-0.7,4.7).s().p("AgPAKQgEgKgCgHQAMgJAOgIQAEALAIAJIAEAEQgTAKgIAQIgJgQg");
	this.shape_255.setTransform(319.3,426.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],5.9,-8,0,5.9,-8,33.6).s().p("ABwCsQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgGARgXAAQgJAAgJgCQgLgFgDgFIgFAEQgEADgEABQADgTAFgMQADgFADgFQAEgEASgPQAPgMAbgTIgCAAIggAOIgQAHIgPAHIgHAAQADgIAOgNIAhgeIAAAAQgCABgVAFIgEABQABgLAFgHQAIgIAPAAQANAAAGANQAFANAFAAQALAAAGAEQAEAFAAALQAAAJgMAJQgNAJAAAKQAAAHAGAEQAGAEAJAAQAMAAAEgFIAFgNQAFAIAJAEQAGADAEAAQALABAIgJQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQABAJAPAIQAQAJARABQgLAIgMgBQgNAAgKgEIgRgMQgCAMgEAIIgDAFQgIAKgPACQgFACgIAAQgbAAgIgUgAicCvIgFgGQgIgJgDgLQgDgJAAgIQgJADgGgBQgiAAgRgfQgNgZAAghQAAglAfgYQAcgXAVAEIABAAQgUgKgHgFQgIgJAAgRQAAgQAKgIQAIgEAJABQgHgCgCgLQgEgJAAgLQAAgWAZgWQAIgHAIgEQgIAQAAAZQAAARAKAHQAKAIAIgCIAAAAIACABQgRAMgFAFQgIAJAAAMQAAALAGAJQAGAJANgBIgUAQQgHAHAAARQAAARAIAKQAHAHAHgDIAAAAIgSATQgMALAAAKQAAAOALAIQAJAIAMAAQANAAADgPQAEgNAJAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgIALAFQAMAFAHAOIAAACQAFgNAFgFQAFgEAGAAQAJAAAJAOQAEAGACASIglgcIAAACQADACADAIIADALIgBAAQgGgBgRAAQAaAHARAXQAIAJAGALIAGAOQAFAOgBARQgCACgDABQgDACgRgBIgQAAQgEgBgCgGIgBgDQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgFAEgNAFQgPAHgHAAQgeAAgRgRg");
	this.shape_256.setTransform(337.3,409.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-11,8,0,-11,8,33.6).s().p("ABkBsIgbADQAHgHAGgIQALgPAAgVQAAgegZAAQgQAAgIAIQgDAFgFAPIAAgBQgEgHgJgEQgJgDgGABIAAgBIALgPQAHgNAAgMQAAgIgFgIQgFgIgJAAQgLAAgCALQgDAIgBANQgBgGgHgEQgGgBgHAAQgFAAgFADIAAgBQAHgRAAgSQAAgZgUgSQgUgSgeAAQgSAAgOAFIAHgHQARgRAWAAQAaAAAcAZQAdAagKAWQAFgIANgHQANgGALAAQATAAAKAKQAJAKAAARQAAAOgHAKIgMAPIAAABQADgDAIgDQAJgEAFAAQAbAAALARQAIAMAAAXQAAAPgOAPQgHAIgHAEQAEgBAFAAQAQAAARAOIAAABQgPgGgSAAg");
	this.shape_257.setTransform(354.2,393.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-2.3,-3,0,-2.3,-3,33.6).s().p("ACNDKQgPgJgBgIQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgIAJgKAAQgFAAgGgDQgJgFgEgIIgGANQgEAFgMAAQgIAAgGgDQgHgFAAgHQAAgKANgJQANgJAAgJQAAgLgFgEQgFgFgMAAQgFAAgFgNQgGgNgNAAQgNAAgHAIQgGAHgBALIgDAAIAAgBQAIgRADgDIgBABIhQA7IgcgVQgDgSgEgGQgIgOgKAAQgGAAgEAEQgGAFgEANIAAgCQgIgOgMgFQgKgFAAAIQAAABAAAAQAAAAgBAAQAAABAAgBQAAAAgBAAIAAgBQgJABgDANQgEAOgNAAQgMAAgJgIQgKgIAAgOQAAgJALgLIATgTIgBAAQgHACgHgHQgIgJAAgUQAAgRAHgHIAUgNQgMAAgHgJQgGgIAAgMQAAgMAJgJQAEgFARgMIgBgBIAAAAQgJACgJgHQgLgIAAgQQAAgaAJgQQARgLAUAAQAKAAANAIIAOAKQgEgIgCgFQgEgKAAgLQAAgUAPgNQAGgGAHgDIgBACQgJAPAAAQQAAAiAcANQAOAHAPAAIABAAIg4AaQgeARAAAUQAAAQANAGQAGADAGgBQgHADgKAHQgUAOAAANQAAANALAGQALAGAQgEIABAAQgFADgEAIQgDAIAAAKQAAAQALAIQAJAHAMAAQAPAAAFgbQAGgcAQAAQAKAAALALQAKAJACAIIABAAQAAgUAHgKQAKgOAXAAQARAAAHAOQAFAIAAAHIAEgGQAHgIANAAQARAAAKAHQAIAHAAAGQAAAHgKAKQgKALAAAJQAAANAJAHQAIAFAKAAQAJAAAIgFIAGgFIgDALQgDANAAAJQAAATAIAKQAHAHALAAQAMAAANgTQAKgRAAgKQACAAACADQAEACAGAAQAKAAAGgGQAHgGAAgJQAAgKgGgTIgGgTIAKAGQAHADAJAAQALAAAGgCQgLALgJACIgBAAQAcAEAJAFQANAHAAAPQAAATgRALQgQAMgaABQADADABAEIAAAKQAAAUgPAQQgEAGgGADQgRgCgPgIgAifiFIAAgBIgBgBIABACg");
	this.shape_258.setTransform(345.4,404.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-4.5,-0.6,0,-4.5,-0.6,33.6).s().p("ABRC3QgIgJAAgTQAAgJADgOIADgKIgGAEQgIAGgJAAQgKAAgIgGQgJgGAAgOQAAgJAKgKQAKgKAAgHQAAgHgIgGQgKgIgRAAQgNAAgFAIIgEAHQAAgIgFgIQgIgOgSAAQgXAAgKAPQgHAKAAATIgBAAQgCgHgKgKQgLgKgKAAQgQAAgGAbQgFAcgPAAQgMAAgJgHQgLgIAAgRQAAgJADgIQAEgJAFgCIgBAAQgQAEgLgGQgLgHAAgOQAAgOAUgLQAKgHAHgDQgGAAgGgDQgNgGAAgQQAAgTAegRIA4gaIgBAAQgPgBgOgHQgcgMAAgiQAAgRAJgPIABgBQAJgEAKAAQAXAAAXALQAMAGAGAGQAGAFABAGQAAgKAIgKQANgFASAAQAeAAASATQAUASAAAZQAAASgHATIAAABQAFgFAGAAQAHAAAFACQAHAEACAHQAAgQADgHQAEgLALAAQAJAAAGAIQAFAHAAALQAAALgIANIgKAPIAAABQAGgBAJADQAJAEADAIIAAABQAGgQADgEQAHgJARAAQAZAAAAAfQAAAUgMAOQgFAHgIAHIAcgCQASAAAOAFIABAAQAQAQAAATIgBAFQgBAKgKAKIgBAAQgGADgLAAQgJAAgHgEIgKgFIAGATQAGASAAAKQAAAJgHAHQgGAGgKAAQgGAAgEgDQgCgCgCAAQAAAJgKARQgNAUgMAAQgLAAgHgIgAhKiYIAAgCIAAgCIAAAEg");
	this.shape_259.setTransform(347.6,401.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],5.5,-5.9,0,5.5,-5.9,18.5).s().p("AgSBWQgugogZg4QgUguAAgfIAZAHQAaAHAdADQARA8BFA3QAcAWAZANQgpAIgrAAQgXAAgVgCg");
	this.shape_260.setTransform(285.8,444.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],15.7,-3.2,0,15.7,-3.2,18.5).s().p("AgeBZIgyjJQAFANANALQAPAMAaALIANAFQABAfASAtQAZA5AtAoQg3gGg4gSg");
	this.shape_261.setTransform(275.6,442);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],3.7,-3.4,0,3.7,-3.4,4.7).s().p("AgMALQgBgDgBgEIAAgEQAAgSAQgRQABAIAEALIAIAQQgLAPAAAUQgLgLgFgNg");
	this.shape_262.setTransform(268.8,429.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.3,-0.7,0,1.3,-0.7,4.7).s().p("AgPAKQgEgKgBgHQAKgJAPgIQAEALAHAJIAFAEQgUAKgIAQIgIgQg");
	this.shape_263.setTransform(271.2,426.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.8,2.8,0,1.8,2.8,3.5).s().p("AgQAAQAOgCAGgKQACgCABgDQAHAIADAJQgFAGgIAGIgGAGQgEgLgKgHg");
	this.shape_264.setTransform(307,428.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,0.5,0,1,0.5,3.5).s().p("AgKgDIAIgFQAGgHAFgHIACAKQAAANgLAMIgIAKQAEgPgGgLg");
	this.shape_265.setTransform(307.8,430.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-4,-3.7,0,-4,-3.7,18.5).s().p("AgkBEQhHg6gRg5QAZACAdAAQBUAAA9gZQARgHANgHIAKgIIAKgKIguC7QggAMggAGQgYgNgbgWg");
	this.shape_266.setTransform(295.3,442.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-6,-1.7,0,-7.8,-1.7,18.6).s().p("AgRAIIgIgIIAJgHQAHgFAJAAQAHAAAKAHQAJAFAAABQAAAFgIAEQgHADgLAAQgKAAgHgFg");
	this.shape_267.setTransform(301.1,433);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],3.6,-1.9,0,1.8,-1.9,18.6).s().p("AhVArQgegDgZgHQgDgJAAgKQAAgfAQgSIAFABQAPAAAQgCIARgCIATAAQAFABAEACQgFgCgJACQgLABgDACIgBACQgEABgFAJIgIAQIAAACIAUgJQAIgDAIAAQAHAAAKAKIAJAFIAGAFIAAgJQACgEALAAQAGABAEAEIAHAHQgBgHAEgFQACgDAFgCQADgBAPAAQACAAADADQAEACAFAAIgJgMIgFgFIgDgCIgHgBIgJgDIAAgJIAAgDQALADARgFIAOAJQAQAJAIgBQAKABAGgDQAGgCAEAAQAKgBALAKQAOALACASQgNAHgRAIQg9AZhUgBQgdAAgZgCgABPgKIgJAIIAIAIQAHAFALAAQAMAAAHgEQAIgEAAgDQAAgCgJgGQgKgGgIAAQgJAAgIAEg");
	this.shape_268.setTransform(291.4,433.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],6.8,-0.2,0,5,-0.2,18.6).s().p("AiFAsIgOgGQgZgKgPgMQgBgTALgQQAKgQAUgKQARARAeAAQAIAAAPgHQAMgFAGgEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABADQACAGAFABIAQAAQARABACgCQADgBACgCQAAAJgDALIADABIAJAEIAEAFQAEAEAAADIAEgGQACgDAFAAQAFAAAAABQADABAAAHQAHgMACgBIAHgBIAFAAIAJAEIAHABIADACIAFAEIAJALQgFgBgEgBQgDgEgCAAQgPAAgDABQgFACgCAEQgEAFABAIIgJgJQgEgEgGAAQgLAAgCADIAAAMIgGgFIgHgIQgKgKgHAAQgIAAgIADIgUAJIAAgCIAIgOQAFgJAEgBIABgCQADgBALgBQAJgCAFACQgEgCgFgBIgTgBIgRADQgQABgPABIgFgBQgQARAAAfQAAALADAJIgZgHgACggGQgLgJgKAAQgEAAgGACQgGADgKAAQgIAAgQgIIgOgJQgRAFgLgDIAAgMQAEgBAEgDIAFgEQADAFAKAFQAJACAJAAQAYAAAFgRQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAIAUAbAAQAIAAAGgCQAKAJAFALQAFAKgEAQIgKAIQgCgUgOgKg");
	this.shape_269.setTransform(288.2,431.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.8,-1.3,0,-2.5,-1.3,11.3).s().p("AgnA5QABgWAEgRQAHgjAUgSIAOgHIAggNIABAAQgaASgOANQgRAOgEAFIgGAIQgGAMgBASIAAAMIAAADIAAAJIgFAAg");
	this.shape_270.setTransform(296.5,424.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],2.1,-0.8,0,1.3,-0.8,11.3).s().p("AgTBDQgBgBgFAAQgEABgDADIgDAFQAAgDgEgDIADgTQAAgJgIgVIgNglIABAAQABAHAXANQAKgNAWgYQASgTARgPQAVgEACgCIAAAAIghAfQgOAMgDAIIAGAAIAQgHQgUASgHAjQgDARAAAWIgIABQgCAAgHAMQAAgHgCgBgAgPAuQABAFAEAFIACgBQACgIAKgnQgEAHgEALIgGAUQgCgLAAgFIAAgTIgDACQABATgIAOIAAgBIgDghQgCAGAAAGIAAARQACAKADAEIABAAQAGgLAAgGIAAgCIAAAKgAABgFIADgCIgGAAQAAABADABg");
	this.shape_271.setTransform(292.6,423.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],6.2,0.1,0,5.5,0.2,11.3).s().p("AgEBKIgJgFIgDgBQADgLAAgJQACgRgFgNIgHgPQgGgIgGgJQgSgXgagHQARAAAGABIABAAIgDgLQgEgJgCgCIAAgCIAlAcIAbAVIBQg7IAAgBQgDADgHARIAAABIACAAIAFgBQgSAPgSATQgXAYgKANQgWgNgBgHIgBAAIAOAlQAGAVgBAJIgDATIgEgFgAAZA4IAAgKIAAACQAAAGgHALIgBAAQgCgEgCgKIgBgRQABgGACgGIACAhIAAABQAJgOgBgTIACgCIAAATQABAFACALIAGgUQAFgLAEgHQgMAngBAIIgDABQgEgFAAgFgAAmABIAHAAIgCACQgFgBAAgBg");
	this.shape_272.setTransform(288.5,422.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-11,8,0,-11,8,33.6).s().p("ABkBsIgbADIANgPQALgPAAgVQAAgegZAAQgQAAgIAIQgDAFgGAPIAAgBQgCgHgKgEQgJgDgGABIAAgBIAKgPQAIgNAAgMQAAgIgFgIQgGgIgIAAQgLAAgCALQgEAIAAANQgBgGgHgEQgFgBgIAAQgFAAgFADIAAgBQAGgRABgSQgBgZgTgSQgVgSgeAAQgRAAgNAFIAFgHQASgRAWAAQAZAAAdAZQAcAagJAWQAFgIAMgHQANgGAMAAQATAAAKAKQAJAKAAARQAAAOgHAKIgMAPIAAABQADgDAIgDQAIgEAGAAQAbAAALARQAIAMAAAXQAAAPgOAPQgHAIgHAEQADgBAGAAQAQAAAQAOIAAABQgNgGgTAAg");
	this.shape_273.setTransform(306.1,393.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],5.9,-8,0,5.9,-8,33.6).s().p("ABwCsQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgFARgYAAQgJAAgJgCQgLgFgDgFIgFAEQgEADgDABQABgTAGgMIAGgKQAEgEASgPQAPgMAagTIgBAAIggAOIgQAHIgQAHIgGAAQADgIAOgNIAhgeIAAAAQgCABgVAFIgEABQAAgLAHgHQAHgIAPAAQANAAAGANQAFANAFAAQAMAAAFAEQAFAFAAALQAAAJgNAJQgOAJAAAKQAAAHAHAEQAHAEAIAAQAMAAAEgFIAGgNQADAIAKAEQAGADAEAAQALABAHgJQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQACAJAPAIQAPAJARABQgLAIgLgBQgOAAgKgEIgRgMQgBAMgFAIQgBADgCACQgIAKgOACQgHACgIAAQgbAAgHgUgAicCvIgFgGQgIgJgDgLQgDgJAAgIQgJADgGgBQgiAAgRgfQgNgZAAghQAAglAggYQAbgXAVAEIABAAQgVgKgGgFQgJgJAAgRQAAgQALgIQAIgEAJABQgGgCgDgLQgEgJAAgLQAAgWAZgWQAIgHAJgEQgJAQAAAZQAAARALAHQAIAIAKgCIAAAAIABABQgRAMgEAFQgJAJAAAMQAAALAGAJQAGAJANgBIgVAQQgGAHAAARQAAARAIAKQAHAHAHgDIABAAIgTATQgLALAAAKQAAAOAKAIQAJAIAMAAQANAAAEgPQADgNAJAAIAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgIALAFQAMAFAHAOIAAACQAFgNAFgFQAFgEAFAAQAKAAAJAOQAEAGACASIglgcIAAACQACACAEAIIADALIgBAAQgGgBgRAAQAaAHASAXQAHAJAGALIAGAOQAFAOgBARQgCACgDABQgDACgRgBIgQAAQgEgBgCgGIgBgDQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgFAEgNAFQgPAHgHAAQgeAAgRgRg");
	this.shape_274.setTransform(289.1,409.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-2.3,-3,0,-2.3,-3,33.6).s().p("ACNDKQgPgJgCgIQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgHAJgLAAQgEAAgGgDQgKgFgDgIIgGANQgEAFgMAAQgIAAgHgDQgHgFAAgHQAAgKAOgJQANgJAAgJQAAgLgFgEQgFgFgMAAQgFAAgFgNQgGgNgNAAQgNAAgHAIQgHAHAAALIgDAAIAAgBQAIgRADgDIgBABIhQA7IgdgVQgCgSgEgGQgJgOgKAAQgFAAgFAEQgFAFgFANIAAgCQgHgOgMgFQgLgFAAAIQAAABAAAAQAAAAAAAAQAAABAAgBQAAAAgBAAIAAgBQgJABgDANQgEAOgNAAQgMAAgJgIQgKgIAAgOQAAgJALgLIATgTIgBAAQgHACgHgHQgIgJAAgUQAAgRAGgHIAVgNQgNAAgGgJQgGgIAAgMQAAgMAJgJQAEgFARgMIgBgBIAAAAQgKACgIgHQgLgIAAgQQAAgaAJgQQARgLAUAAQAKAAANAIIANAKIACACIAAgBIgCgBIgFgNQgEgKAAgLQAAgUAPgNQAGgGAHgDIgBACQgJAPAAAQQAAAiAcANQANAHAQAAIABAAIg5AaQgeARAAAUQAAAQAOAGQAGADAFgBQgGADgKAHQgUAOAAANQAAANALAGQALAGAQgEIABAAQgFADgEAIQgDAIAAAKQAAAQALAIQAIAHANAAQAOAAAGgbQAGgcAQAAQAKAAAKALQAKAJACAIIACAAQAAgUAGgKQAKgOAYAAQARAAAHAOQAFAIAAAHIAEgGQAHgIANAAQARAAAJAHQAJAHAAAGQAAAHgKAKQgKALAAAJQAAANAJAHQAHAFALAAQAJAAAIgFIAGgFQgCAEgBAHQgDANAAAJQAAATAIAKQAHAHALAAQAMAAANgTQAKgRAAgKQAAAAABAAQAAABAAAAQABAAABABQAAAAABABQAEACAGAAQAJAAAHgGQAGgGAAgJQAAgKgFgTIgGgTIAKAGQAHADAJAAQAMAAAFgDIAAABQgMALgIACIgCAAQAdAEAJAFQANAHAAAPQAAATgRALQgRAMgZABQADADAAAEQABACAAAIQAAAUgPAQQgEAGgGADQgRgCgPgIg");
	this.shape_275.setTransform(297.3,404.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-4.5,-0.6,0,-4.5,-0.6,33.6).s().p("ABSC3QgJgJAAgTQAAgJADgOQACgGACgEIgHAEQgIAGgJAAQgLAAgHgGQgJgGAAgOQAAgJAKgKQAKgKAAgHQAAgHgJgGQgIgIgSAAQgNAAgFAIIgEAHQAAgIgFgIQgIgOgSAAQgXAAgKAPQgHAKAAATIgBAAQgDgHgKgKQgKgKgKAAQgQAAgGAbQgFAcgPAAQgNAAgIgHQgKgIAAgRQAAgJACgIQAEgJAFgCIgBAAQgQAEgLgGQgLgHAAgOQAAgOAUgLQAKgHAHgDQgGAAgGgDQgOgGAAgQQAAgTAegRIA5gaIAAAAQgRgBgNgHQgcgMAAgiQAAgRAJgPIABgBQAJgEAKAAQAWAAAYALQAMAGAGAGQAGAFABAGIAAAEIAAgCIAAgCQAAgKAIgKQANgFASAAQAeAAASATQAUASAAAZQAAASgGATIAAABQAEgFAGAAQAHAAAFACQAIAEAAAHQABgQAEgHQADgLALAAQAJAAAGAIQAEAHAAALQABALgIANIgLAPIAAABQAHgBAIADQAKAEADAIIAAABQAFgQAEgEQAIgJAPAAQAaAAAAAfQgBAUgKAOIgOAOIAbgCQATAAAOAFIABAAQAQAQAAATIAAAFQgCAKgLAKQgFADgMAAQgIAAgIgEIgKgFIAGATQAFASABAKQgBAJgGAHQgHAGgJAAQgGAAgEgDQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAJgKARQgMAUgMAAQgMAAgGgIg");
	this.shape_276.setTransform(299.5,401.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.3,-0.7,0,1.3,-0.7,4.7).s().p("AgOAKQgFgKgBgHQALgJAOgIQAEALAHAJIAGAEQgVAKgIAQIgHgQg");
	this.shape_277.setTransform(223.1,426.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],3.7,-3.4,0,3.7,-3.4,4.7).s().p("AgMALIgBgHIgBgEQAAgSAPgRQACAIAEALIAIAQQgLAPABAUQgMgLgFgNg");
	this.shape_278.setTransform(220.7,429.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],15.7,-3.2,0,15.7,-3.2,18.5).s().p("AgeBZIgyjJQAFANAOALQAPAMAaALIAMAFQABAfASAtQAZA5AtAoQg3gGg4gSg");
	this.shape_279.setTransform(227.5,442);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],5.5,-5.9,0,5.5,-5.9,18.5).s().p("AgTBWQgtgogZg4QgUguAAgfIAZAHQAZAHAeADQARA8BFA3QAbAWAaANQgpAIgrAAQgXAAgWgCg");
	this.shape_280.setTransform(237.6,444.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-6,-1.7,0,-7.8,-1.7,18.6).s().p("AgRAIIgIgIIAJgHQAIgFAIAAQAHAAALAHQAIAFAAABQAAAFgIAEQgHADgLAAQgKAAgHgFg");
	this.shape_281.setTransform(253,433);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.9,2.8,0,1.9,2.8,3.5).s().p("AgQAAQAOgCAFgKIAFgFQAGAIAEAJQgGAGgJAGIgFAGQgFgLgJgHg");
	this.shape_282.setTransform(258.9,428.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-4,-3.7,0,-4,-3.7,18.5).s().p("AgkBEQhHg6gSg5QAaACAdAAQBUAAA9gZQARgHANgHIAKgIIAKgKIguC7QgfAMghAGQgYgNgbgWg");
	this.shape_283.setTransform(247.2,442.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1.1,0.5,0,1.1,0.5,3.5).s().p("AgKgDIAIgFQAHgHAFgHIABAKQAAANgLAMIgIAKQAEgPgGgLg");
	this.shape_284.setTransform(259.7,430.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],3.7,-1.9,0,1.9,-1.9,18.6).s().p("AhWArQgdgDgZgHQgDgJAAgKQAAgfARgSIADABQAQAAAQgCIARgCIASAAQAGABAEACQgFgCgJACQgLABgDACIgBACQgDABgGAJIgJAQIAAACIAVgJQAIgDAIAAQAHAAAKAKIAIAFIAHAFIAAgJQACgEALAAQAFABAFAEIAGAHQAAgHAEgFQADgDAFgCQADgBAPAAQACAAACADQADACAFAAIgIgMIgFgFIgDgCIgGgBIgKgDIAAgJIAAgDQALADARgFIAOAJQAPAJAKgBQAJABAGgDQAGgCAEAAQAKgBALAKQAOALACASQgNAHgRAIQg9AZhUgBQgdAAgagCgABPgKIgJAIIAIAIQAHAFAKAAQANAAAHgEQAIgEAAgDQAAgCgIgGQgLgGgHAAQgKAAgIAEg");
	this.shape_285.setTransform(243.3,433.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],6.9,-0.2,0,5.1,-0.2,18.6).s().p("AiFAsIgNgGQgagKgPgMQgBgTAMgQQAKgQAUgKQARARAeAAQAHAAAPgHQANgFAFgEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACADQACAGAEABIAQAAQARABADgCQADgBACgCQgBAJgDALIAEABIAIAEIAFAFQADAEAAADIAEgGQADgDAEAAQAFAAABABQACABAAAHQAHgMACgBIAHgBIAFAAIAKAEIAHABIACACIAFAEIAJALQgFgBgDgBQgDgEgCAAQgPAAgDABQgFACgDAEQgEAFABAIIgJgJQgEgEgGAAQgKAAgCADIgBAMIgGgFIgHgIQgKgKgHAAQgIAAgIADIgUAJIAAgCIAJgOQAFgJADgBIACgCQACgBALgBQAJgCAFACQgEgCgFgBIgSgBIgSADQgPABgQABIgEgBQgRARAAAfQAAALADAJIgZgHgACggGQgLgJgKAAQgEAAgGACQgGADgJAAQgJAAgQgIIgOgJQgRAFgLgDIAAgMQAEgBAEgDIAFgEQADAFALAFQAIACAKAAQAXAAAFgRQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAHAUAbAAQAIAAAGgCQAKAJAFALQAFAKgDAQIgLAIQgCgUgOgKg");
	this.shape_286.setTransform(240,431.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.8,-1.3,0,-2.6,-1.3,11.3).s().p("AgoA5QACgWAEgRQAHgjAUgSIAPgHIAfgNIACAAQgbASgOANQgRAOgDAFQgEAEgDAEQgFAMgCASIAAAMIAAADIAAAJIgGAAg");
	this.shape_287.setTransform(248.4,424.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],6.2,0.1,0,5.4,0.2,11.2).s().p("AgEBKIgJgFIgDgBQADgLAAgJQABgRgEgNIgGgPQgHgIgHgJQgSgXgZgHQARAAAFABIACAAIgDgLQgEgJgDgCIAAgCIAmAcIAbAVIBPg7IACgBQgEADgIARIAAABIADAAIAEgBQgRAPgSATQgXAYgLANQgVgNAAgHIgCAAIAOAlQAFAVABAJIgDATIgFgFgAAYA4QABgGgBgEIAAACQAAAGgFALIgCAAQgDgEgBgKQgBgDAAgOQAAgGACgGIADAhIAAABQAJgOgCgTIADgCQABAHgBAMQAAAFADALIAGgUQAEgLAGgHIgPAvIgCABQgEgFgBgFgAAmABIAIAAIgDACQgFgBAAgBg");
	this.shape_288.setTransform(240.4,422.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],2.1,-0.8,0,1.3,-0.8,11.3).s().p("AgTBDQgBgBgFAAQgEABgCADIgEAFQAAgDgEgDIADgTQAAgJgHgVIgOglIABAAQABAHAXANQALgNAVgYQASgTARgPQAWgEABgCIAAAAIghAfQgNAMgEAIIAHAAIAPgHQgUASgHAjQgDARAAAWIgIABQgCAAgGAMQAAgHgDgBgAgPAuQABAFAEAFIACgBIAMgvQgEAHgDALIgHAUQgCgLAAgFQABgMgBgHIgDACQABATgIAOIAAgBIgDghQgCAGAAAGQAAAOABADQABAKADAEIABAAQAGgLAAgGIAAgCQABAEgBAGgAACgFIACgCIgFAAQAAABADABg");
	this.shape_289.setTransform(244.5,423.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-11,8,0,-11,8,33.6).s().p("ABkBsIgbADQAHgHAGgIQALgPAAgVQAAgegZAAQgQAAgIAIQgDAFgFAPIAAgBQgEgHgJgEQgJgDgGABIAAgBIALgPQAHgNAAgMQAAgIgFgIQgFgIgJAAQgLAAgCALQgDAIgBANQgBgGgHgEQgGgBgHAAQgFAAgFADIAAgBQAHgRAAgSQAAgZgUgSQgUgSgeAAQgSAAgOAFIAHgHQARgRAWAAQAaAAAcAZQAdAagKAWQAFgIANgHQANgGALAAQATAAAKAKQAJAKAAARQAAAOgHAKIgMAPIAAABQADgDAIgDQAJgEAFAAQAbAAALARQAIAMAAAXQAAAPgOAPQgHAIgHAEQAEgBAFAAQAQAAARAOIAAABQgPgGgSAAg");
	this.shape_290.setTransform(257.9,393.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],5.9,-8,0,5.9,-8,33.6).s().p("ABwCsQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQgEARgYAAQgJAAgJgCQgLgFgDgFIgFAEQgEADgDABQACgTAFgMQADgFAEgFQADgEASgPQAPgMAbgTIgCAAIgfAOIgRAHIgQAHIgGAAQADgIAOgNIAhgeIgBAAQAAABgWAFIgFABQABgLAHgHQAHgIAPAAQANAAAGANQAFANAFAAQAMAAAEAEQAGAFAAALQAAAJgNAJQgOAJAAAKQAAAHAIAEQAFAEAIAAQANAAAEgFIAGgNQAEAIAIAEQAHADAFAAQAKABAIgJQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAJAQAIQAOAJASABQgKAIgMgBQgOAAgKgEIgRgMQgBAMgEAIIgFAFQgHAKgOACQgHACgIAAQgbAAgHgUgAicCvIgFgGQgHgJgFgLQgCgJgBgIQgHADgIgBQggAAgSgfQgNgZAAghQAAglAggYQAbgXAVAEIABAAQgVgKgGgFQgJgJAAgRQAAgQALgIQAIgEAJABQgGgCgEgLQgDgJAAgLQAAgWAagWQAHgHAJgEQgJAQAAAZQAAARALAHQAJAIAJgCIAAAAIABABQgRAMgEAFQgJAJAAAMQAAALAFAJQAIAJAMgBIgVAQQgGAHAAARQAAARAIAKQAHAHAHgDIABAAIgTATQgLALAAAKQAAAOAKAIQAJAIAMAAQANAAADgPQAEgNAJAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQABgBAAAAQgBgIALAFQAMAFAIAOIAAACQAEgNAFgFQAFgEAFAAQALAAAHAOQAFAGADASIgmgcIAAACQADACADAIIAEALIgCAAQgFgBgSAAQAZAHATAXQAGAJAHALIAGAOQAFAOgBARQgCACgDABQgDACgQgBIgRAAQgEgBgCgGIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgFAEgNAFQgOAHgIAAQgeAAgRgRg");
	this.shape_291.setTransform(241,409.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-2.3,-3,0,-2.3,-3,33.6).s().p("ACNDKQgPgJgBgIQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgIAJgKAAQgFAAgGgDQgJgFgEgIIgGANQgEAFgMAAQgIAAgGgDQgHgFAAgHQAAgKANgJQANgJAAgJQAAgLgFgEQgFgFgMAAQgFAAgFgNQgGgNgNAAQgNAAgHAIQgGAHgBALIgDAAIAAgBQAIgRADgDIgBABIhQA7IgcgVQgDgSgEgGQgIgOgKAAQgGAAgEAEQgGAFgEANIAAgCQgIgOgMgFQgKgFAAAIQAAABAAAAQAAAAgBAAQAAABAAgBQAAAAgBAAIAAgBQgJABgDANQgEAOgNAAQgMAAgJgIQgKgIAAgOQAAgJALgLIATgTIgBAAQgHACgHgHQgIgJAAgUQAAgRAHgHIAUgNQgMAAgHgJQgGgIAAgMQAAgMAJgJQAEgFARgMIgBgBIAAAAQgJACgJgHQgLgIAAgQQAAgaAJgQQARgLAUAAQAKAAANAIIAOAKQgEgIgCgFQgEgKAAgLQAAgUAPgNQAGgGAHgDIgBACQgJAPAAAQQAAAiAcANQAOAHAPAAIABAAIg4AaQgeARAAAUQAAAQANAGQAGADAGgBQgHADgKAHQgUAOAAANQAAANALAGQALAGAQgEIABAAQgFADgEAIQgDAIAAAKQAAAQALAIQAJAHAMAAQAPAAAFgbQAGgcAQAAQAKAAALALQAKAJACAIIABAAQAAgUAHgKQAKgOAXAAQARAAAHAOQAFAIAAAHIAEgGQAHgIANAAQARAAAKAHQAIAHAAAGQAAAHgKAKQgKALAAAJQAAANAJAHQAIAFAKAAQAJAAAIgFIAGgFIgDALQgDANAAAJQAAATAIAKQAHAHALAAQAMAAANgTQAKgRAAgKQACAAACADQAEACAGAAQAKAAAGgGQAHgGAAgJQAAgKgGgTIgGgTIAKAGQAHADAJAAQALAAAGgCQgLALgJACIgBAAQAcAEAJAFQANAHAAAPQAAATgRALQgQAMgaABQADADABAEIAAAKQAAAUgPAQQgEAGgGADQgRgCgPgIgAifiFIAAgBIgBgBIABACg");
	this.shape_292.setTransform(249.2,404.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-4.5,-0.6,0,-4.5,-0.6,33.6).s().p("ABRC3QgIgJAAgTQAAgJADgOIADgKIgGAEQgIAGgJAAQgKAAgIgGQgJgGAAgOQAAgJAKgKQAKgKAAgHQAAgHgIgGQgKgIgRAAQgNAAgFAIIgEAHQAAgIgFgIQgIgOgSAAQgXAAgKAPQgHAKAAATIgBAAQgCgHgKgKQgLgKgKAAQgQAAgGAbQgFAcgPAAQgMAAgJgHQgLgIAAgRQAAgJADgIQAEgJAFgCIgBAAQgQAEgLgGQgLgHAAgOQAAgOAUgLQAKgHAHgDQgGAAgGgDQgNgGAAgQQAAgTAegRIA4gaIgBAAQgPgBgOgHQgcgMAAgiQAAgRAJgPIABgBQAJgEAKAAQAXAAAXALQAMAGAGAGQAGAFABAGIAAAEIAAgCIAAgCQAAgKAIgKQANgFASAAQAeAAASATQAUASAAAZQAAASgHATIAAABQAFgFAGAAQAHAAAFACQAHAEACAHQAAgQADgHQAEgLALAAQAJAAAGAIQAFAHAAALQAAALgIANIgKAPIAAABQAGgBAJADQAJAEADAIIAAABQAGgQADgEQAHgJARAAQAZAAAAAfQAAAUgMAOQgFAHgIAHIAcgCQASAAAOAFIABAAQAQAQAAATIgBAFQgBAKgKAKIgBAAQgGADgLAAQgJAAgHgEIgKgFIAGATQAGASAAAKQAAAJgHAHQgGAGgKAAQgGAAgEgDQgCgCgCAAQAAAJgKARQgNAUgMAAQgLAAgHgIg");
	this.shape_293.setTransform(251.4,401.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_294.setTransform(274.4,319,0.515,0.401,0,-1,-5.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_295.setTransform(256.2,306.4,0.515,0.401,0,-1,-5.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_296.setTransform(242.1,319.1,0.515,0.401,0,-1,-5.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_297.setTransform(250.2,319.6,0.515,0.401,0,-1,-5.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_298.setTransform(248.8,315.9,0.515,0.401,0,-1,-5.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_299.setTransform(257.4,317.4,0.515,0.401,0,-1,-5.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_300.setTransform(245.6,330.9,0.515,0.401,0,-1,-5.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_301.setTransform(271.7,326.9,0.515,0.401,0,-1,-5.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_302.setTransform(257.5,313.1,0.515,0.401,0,-1,-5.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_303.setTransform(243.3,326.2,0.515,0.401,0,-1,-5.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_304.setTransform(271.5,323.8,0.515,0.401,0,-1,-5.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_305.setTransform(254.3,312,0.515,0.401,0,-1,-5.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_306.setTransform(255.3,309.8,0.515,0.401,0,-1,-5.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_307.setTransform(270.9,323.4,0.515,0.401,0,-1,-5.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_308.setTransform(242.5,321.5,0.515,0.401,0,-1,-5.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_309.setTransform(255.8,308.1,0.515,0.401,0,-1,-5.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_310.setTransform(205.6,319.5,0.515,0.401,0,0.5,-4.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_311.setTransform(187.7,306.4,0.515,0.401,0,0.5,-4.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_312.setTransform(173.3,318.8,0.515,0.401,0,0.5,-4.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_313.setTransform(181.4,319.5,0.515,0.401,0,0.5,-4.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_314.setTransform(180.1,315.8,0.515,0.401,0,0.5,-4.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_315.setTransform(188.7,317.4,0.515,0.401,0,0.5,-4.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_316.setTransform(176.5,330.6,0.515,0.401,0,0.5,-4.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_317.setTransform(202.7,327.3,0.515,0.401,0,0.5,-4.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_318.setTransform(188.9,313.1,0.515,0.401,0,0.5,-4.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_319.setTransform(174.3,325.9,0.515,0.401,0,0.5,-4.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_320.setTransform(202.6,324.2,0.515,0.401,0,0.5,-4.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_321.setTransform(185.6,312,0.515,0.401,0,0.5,-4.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_322.setTransform(186.7,309.7,0.515,0.401,0,0.5,-4.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_323.setTransform(202,323.8,0.515,0.401,0,0.5,-4.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_324.setTransform(173.6,321.1,0.515,0.401,0,0.5,-4.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_325.setTransform(187.2,308.1,0.515,0.401,0,0.5,-4.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_326.setTransform(155.7,411.8,0.59,0.542,0,12.9,5.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_327.setTransform(139.5,390.6,0.59,0.542,0,12.9,5.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_328.setTransform(119.8,403.9,0.59,0.542,0,12.9,5.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_329.setTransform(128.6,406.5,0.59,0.542,0,12.9,5.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_330.setTransform(128.2,401.4,0.59,0.542,0,12.9,5.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_331.setTransform(137.4,405.4,0.59,0.542,0,12.9,5.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_332.setTransform(119.9,420.2,0.59,0.542,0,12.9,5.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_333.setTransform(150.2,421.4,0.59,0.542,0,12.9,5.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_334.setTransform(138.9,399.8,0.59,0.542,0,12.9,5.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_335.setTransform(118.8,413.5,0.59,0.542,0,12.9,5.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_336.setTransform(151,417.3,0.59,0.542,0,12.9,5.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_337.setTransform(135.6,397.5,0.59,0.542,0,12.9,5.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_338.setTransform(137.4,394.8,0.59,0.542,0,12.9,5.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_339.setTransform(150.5,416.6,0.59,0.542,0,12.9,5.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_340.setTransform(119.5,407.1,0.59,0.542,0,12.9,5.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_341.setTransform(138.5,392.8,0.59,0.542,0,12.9,5.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_342.setTransform(145.9,429.6,0.59,0.542,0,-2.6,-9.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_343.setTransform(124.6,413.5,0.59,0.542,0,-2.6,-9.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_344.setTransform(109.2,431.6,0.59,0.542,0,-2.6,-9.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_345.setTransform(118.4,431.8,0.59,0.542,0,-2.6,-9.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_346.setTransform(116.7,426.9,0.59,0.542,0,-2.6,-9.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_347.setTransform(126.6,428.4,0.59,0.542,0,-2.6,-9.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_348.setTransform(113.7,447.4,0.59,0.542,0,-2.6,-9.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_349.setTransform(143.2,440.4,0.59,0.542,0,-2.6,-9.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_350.setTransform(126.5,422.6,0.59,0.542,0,-2.6,-9.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_351.setTransform(110.8,441.1,0.59,0.542,0,-2.6,-9.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_352.setTransform(142.9,436.2,0.59,0.542,0,-2.6,-9.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_353.setTransform(122.7,421.3,0.59,0.542,0,-2.6,-9.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_354.setTransform(123.8,418.2,0.59,0.542,0,-2.6,-9.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_355.setTransform(142.2,435.7,0.59,0.542,0,-2.6,-9.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_356.setTransform(109.8,434.8,0.59,0.542,0,-2.6,-9.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_357.setTransform(124.3,415.9,0.59,0.542,0,-2.6,-9.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],0.1,-3.4,0,0.1,-3.4,3.6).s().p("AgGAQIgIgFIAAgGIAAgBIABgNIAHABQAJAAAJgHIACABIgEALIgJAKQgBAFgFAEg");
	this.shape_358.setTransform(96.5,310.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-0.1,-0.6,0,-0.1,-0.6,3.6).s().p("AgGAGQAAgGADgCIAJgKIAAAAIABAHQgBASgGAAQgGAAAAgHg");
	this.shape_359.setTransform(96.7,308);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-0.1,-0.6,0,-0.1,-0.6,3.6).s().p("AgPARQACgHADgFQAGgLAIgGIABgBQAIgGABACIACAMIAAACIgDAJIgBAGIgCgBQgJAHgKAAIgGgBgAgDgCQgDACAAAGQAAAHAGAAQAGAAAAgSIgBgHIAAAAIgIAKg");
	this.shape_360.setTransform(96.7,308);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],2.8,-0.1,0,2.8,-0.1,7.8).s().p("AAAASIgYgOIABgEIADgLIAAgCIgCgMIARALIAeATIgNAVIgMgIg");
	this.shape_361.setTransform(100.5,308.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-0.3,-5.4,0,-0.3,-5.4,7.8).s().p("AgNAYIAPhCIAMAHIAABOIgbgTg");
	this.shape_362.setTransform(103.6,314.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],3.5,-4.2,0,3.5,-4.2,7.8).s().p("AARAgIgRgLIgngYIABAAQAFgEADgFIAJgMIAEgLIAXAOIAOAJIAMgWIAIAFIgRBBIgGgEg");
	this.shape_363.setTransform(99.8,312.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],10.6,-5.5,0,10.6,-5.5,22.9).s().p("AhGB3IAAiBIAAhPIAAgnQAFAKANAIIAFADQAMAGARAFQASAFASADIAXAEIAeADIgpABQgiAAgSgEIgZgHIAADcIgXgKg");
	this.shape_364.setTransform(112.2,319.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],5.1,-5.7,0,5.1,-5.7,14.9).s().p("AhDAAIAAgDIAPgCQA8gKAlAAIAXAAIgYAaIgZAAIhEAGQgNgJgFgIg");
	this.shape_365.setTransform(111.9,306.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],5.4,-8.2,0,5.4,-8.2,14.9).s().p("AgMAFQgRgFgMgEIgFgDIBEgFIAZAAIgIAJIgGAGIgJAKQgUgDgQgFg");
	this.shape_366.setTransform(111.6,309.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],3.3,-1.9,0,3.3,-1.9,14.9).s().p("AgigGQAxgQBHAAIgKANIgQgBQgiAAgTADQgWAChGAcQAIgTArgKg");
	this.shape_367.setTransform(113.7,302.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],3.8,-3,0,3.8,-3,14.9).s().p("AhQANIAAgBQBGgcAXgDQASgCAjAAIAPABIgXAaIgCADIgYAAQgjAAg+ALIgPACg");
	this.shape_368.setTransform(113.2,304.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-0.2,-7.8,0,-0.2,-7.8,22.9).s().p("AiWBrIAPAAQAXAAAjgGQApgIAYgOQAPgJAjgWIAfgVIAKgWQAEgHANg0QALgsACgOIAAgDIASgFQANgEAKgFIABAkQgBArgJA4QgHA3gZAzIgCAEQg4AMgzABIgJABQhJAAhEgXg");
	this.shape_369.setTransform(123.1,321.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],2.1,-7.4,0,2.1,-7.4,22.9).s().p("Ah+BvIgGgBIAAjcIAZAHQASAEAkAAIApgBIABAAIAZAAIAJAAQA7ABAtgKIAGgCIAAAEQgCAOgLAsQgNAxgEAKIgKAVIgfAWQgjAWgRAJQgWAOgpAHQgjAHgXgBIgPAAg");
	this.shape_370.setTransform(120.7,321.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-0.9,-9.7,0,-0.9,-9.7,15.6).s().p("Ag3AOIACgCIAUgZQAbACAUAFQAZAFARAGQgtAJg5AAIgJAAg");
	this.shape_371.setTransform(127.8,309.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],2.4,-2.6,0,2.4,-2.6,8.2).s().p("AgJAAIAgghIAZABQgWAYggAfIgEAEQgLAEgKABIgQADIAmgjg");
	this.shape_372.setTransform(120.7,305.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],2,-1.9,0,2,-1.9,8.2).s().p("Ag1ApIAIgKIAYgcIADgDIAUgbIAKgNIAHAAIAjABIgKAOIgZgCIggAgIgmAkIgCAAg");
	this.shape_373.setTransform(121.1,304.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],2.1,-3.2,0,2.1,-3.2,8.2).s().p("AgPA1IgegDIgXgEIAJgKIAGgIIADAAIAQgCQAJgBAMgEIADgEQAggfAWgYIALgOQAIAAAGACIgLAMIggAmIgoA0IAAABIgBAAg");
	this.shape_374.setTransform(121,306);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-1.6,-3.3,0,-1.6,-3.3,8.2).s().p("AgzA0IAAgBIArgzIAdgnIAMgMIATABIgJANIgaAiIgGAFIgNAVIgUAbIgCACIgbAAg");
	this.shape_375.setTransform(124.7,306.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-8.2,-3.6,0,-8.2,-3.6,15.6).s().p("AAPABQgdgJgtgFIAJgOQAgAFAZAIQA1AOAAAWIgBAEIAAACQgHgPglgMg");
	this.shape_376.setTransform(135,303.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-6.8,-5.2,0,-6.8,-5.2,15.6).s().p("AgRAJQgngJgQADIAaggQAuAFAdAKQAlANAHAMQgDALgPAIQgigOgmgHg");
	this.shape_377.setTransform(133.7,305.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-14.6,-6,0,-14.6,-6,22.9).s().p("AghCDQAZgzAIg3QAGg4ABgrIgBgkIALgFQAQgJACgKIAAAOIAAAtIABCDIAAAbIAAAgQgkAMgjAIIACgEg");
	this.shape_378.setTransform(137.4,320.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-4.9,-7.8,0,-4.9,-7.8,15.6).s().p("AgYALQgWgFgbgCIAPgTIAGgHQAQgCAkAIQAoAIAiAMIgLAFQgKAFgNAEIgSAEIgFACQgRgIgYgFg");
	this.shape_379.setTransform(131.8,308);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-0.2,4.1,0,-0.2,4.1,11.9).s().p("AAHAaIgHgQQgJgRAAgKIABgGQACgEACAAQAEAAAEAMQAGAPAAAUIgBAIIgCgCg");
	this.shape_380.setTransform(150.3,313);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],8.1,-0.9,0,8.1,-0.9,11.9).s().p("AgJBoIAAgbQAJAAAHgEIAAASIgBAMIgNABIgCAAgAgJhkQAHAAALgCIAAAFIABAiIgGACIgNAGg");
	this.shape_381.setTransform(142.1,318);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],4.2,-0.7,0,4.2,-0.7,11.9).s().p("AgeBdIABgSQAMgFALgNIAEgFQAUgeAAgfQAAgWgHgPQgGgNgMgDIgFgBQgIAAgHACIAAgiIgBgFIADAAQASgDAHgBIAJACQgIAGgEASQAQAEAIALQAKAMAAAbQAAAhgLAVQgOAYgGAJIgCAFIADAIQAEAFAGAIQgRAMgYAEIAAgMg");
	this.shape_382.setTransform(145.9,317.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],1.2,0,0,1.2,0,11.9).s().p("AgaBTIgFgIIADgFQAHgJANgYQAKgVAAghQAAgbgIgMQgIgLgSgDQAGgTAHgGQAPACALAKQAaAWAAAwQAAA7ghAjQgGAJgKAGQgHgHgDgGgAAEg/IgBAFQAAAKAJATIAJAQIADACIAAgIQAAgWgGgOQgFgNgFAAQgCAAgCAFg");
	this.shape_383.setTransform(148.9,317.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,-0.6,0,0.8,-0.6,9.5).s().p("AggABQANgEAKgHQAOgJAKgIQANgKAFgIIgDAfQgTAMgeALIgDAKIgCAMIAAAKIgIAFg");
	this.shape_384.setTransform(548.5,566,0.829,0.829);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.9,0.6,0,0.9,0.6,9).s().p("Ag5gIIAUgEIACgBQA3gQAlgPIgCAMQgkANgvAMIgLADQgHAbgBAUIgKACg");
	this.shape_385.setTransform(539.5,570.5,0.829,0.829);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.5,0.9,0,0.5,0.9,11.4).s().p("AhfgSQBxgCBOgQIAAAIQhaAVhLAEQgHAMgEAMQgDALgBAFIgLAAg");
	this.shape_386.setTransform(525.8,573.1,0.829,0.829);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,1.5,0,0.8,1.5,11.4).s().p("AheAdIAAg6QBNAMBaAAIAWAAIgCAQIgUgBQhLgDhGgKQgLAcAAAOIABADIgMgBg");
	this.shape_387.setTransform(508.5,573,0.829,0.829);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.9,3.5,0,0.9,3.5,12.5).s().p("AhZAfIAAhBIATAJIAHADQASAIAOAEIAYAIQAsAOA1AJIgCALIgcgFQhWgSgrgQQgEAJgDAOIgDATIgKgEg");
	this.shape_388.setTransform(491.6,568.4,0.829,0.829);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.2,3.7,0,0.2,3.7,9.8).s().p("AACAZQgMgJgQgOIgNAnIgIgHIAAhQQAPAZAnAaQAXAQASAKIgGAQQgbgOgNgIg");
	this.shape_389.setTransform(479.8,562.7,0.829,0.829);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,11.4).s().p("AhkAcIALAAQBigCBFgPIAFgLQAHgVABgQIAAgIIAKgDIAAA1IAAASIgdAHQhPAQhdADg");
	this.shape_390.setTransform(526.2,573.9,0.829,0.829);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-0.6,0,0,-0.6,11.4).s().p("ABGAmQhgAAhMgKIAAgUIAMACQBAAHBLABIAYAAIAHgUIAFgUIACgPIAQAAIAAA3IAAAUIgdAAIgEAAg");
	this.shape_391.setTransform(509.1,574.7,0.829,0.829);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,9).s().p("AhBAoIAKgDIANgEQAngNArgUIAEgZIADgMIACgNIARgHIAAAtIAAAXIgZAMQgwAVg6AOg");
	this.shape_392.setTransform(540.2,571,0.829,0.829);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,9.5).s().p("AgoA1IAIgFIAugZIACgGQAFgNABgGIAAgFIADgfIADgEQAIgPACgGIADgKIAAgEIgHBiQgXAfgzAag");
	this.shape_393.setTransform(549.1,565.4,0.829,0.829);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-2.8,0,0,-2.8,12.5).s().p("AgpAKQgfgKgagLIAAgUIAKAFQAVAJAYAIQAwAPBAALIAEgPIAGggIACgKIARADIAAA6IAAAUQhSgKg5gVg");
	this.shape_394.setTransform(492.3,573.7,0.829,0.829);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-3.9,0,0,-3.9,9.8).s().p("AgxgVIAAgSIAIAHQAcAZAlATIAGgNIAKgaIAGgQIADACIAABBIAAAUQhCgfgggig");
	this.shape_395.setTransform(480,568.9,0.829,0.829);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-1.3,0,0,-1.3,6.3).s().p("AgpgSIAAgNQAcALAfARIAIgIIAEgEQAKAMABAKIABAFQAAALgGAJQgQgdg9gVg");
	this.shape_396.setTransform(545.2,556.6,0.829,0.829);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-1.2,0,0,-1.2,9.6).s().p("AAyAPQg7gQhKgKIAAgPQBZAPAoALIAJADIAQgUIANAFIAAAaIAAANIgigMg");
	this.shape_397.setTransform(534.7,552.8,0.829,0.829);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,7.5).s().p("Ag+AUQApgUA3gGIALgbIASgDIAAAbIAAALQgyAIgpAPIgiAMg");
	this.shape_398.setTransform(493.7,551.6,0.829,0.829);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],323.4,-175.2,0,323.4,-175.2,0).s().p("AgGgFIANAAIgCAJIgLACg");
	this.shape_399.setTransform(499.6,551.2,0.829,0.829);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,6.5).s().p("AgqAfQAYgOAlgZIAGgPIAGgTIAMgEIAAAXIAAARQg/AYgQAdQgFgHgBgJg");
	this.shape_400.setTransform(484.8,555.4,0.829,0.829);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,2.6).s().p("AAAATIgEgOIgGgZIAVADIAAAYIAAAOIgLgCg");
	this.shape_401.setTransform(526.7,549.9,0.829,0.829);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],-15.4,-15.7,0,-15.4,-15.7,64.8).s().p("AAVCeQhaAAhNgNIgSgDQg1gJgugQIgYgIQgNgEgTgIIgGgDIgTgJIgEgDQgSgKgXgPQgpgcgOgZIAAgHQgIgqBngtQBngtBmgQIAAAEIgBAHQhPALhAAbQh4AxAAAqQAAAoAmAXIAbAQQAdAPAkARQAoASBMALIA5AGQB1AMAfgBIABAAQAhgCCxgTQBGgQA5gUQAjgMAegOQgLAIgPAJQgKAHgOAGIgRAHQglAQg5AQIgCAAIgUAFIgKACQhOARh0ACIgQAAIgLAAIgLAAgAFXhjQhigfhdgJIgDgSQB0ALBUAiQAzAVAgAYQgqgSgvgOg");
	this.shape_402.setTransform(512.8,558.4,0.829,0.829);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.rf(["#BD8E2E","#7A3732","#000033"],[0,0.604,1],-5.5,-0.3,0,-5.5,-0.3,23).s().p("AAaDDIguAlIgFgMQAYgnAVgyQAHAHAHABQAKAAAKgaQAHgTADgQQAEgbAAgjIgBgOIAJg6IABgfIAAgsQgGACgLgHIgLgIQgDAEgHAEQgKAFgLAAQgKAAgIgGIAAgIIAAgJIAAAAIgCAQQgGgEgGgGIgLALIgTAAIgDAAIgEgzIgBAAIAAAHIABAsQgQgBgGgEQgJgEgFgRQgFALgYAIIgJADIgCgQIgDgiIALgIQASgOAEgJQAMAUAYAAQAMAAAHgHQAGgGAAgJIABgBIAMAJQAJAGAIAAQAbAAAMgZQAEALAMAKQAPAOARABQAJAAAGgIIABAAQgEAMARAQIAMBUQAJBGAABGQAABQgBAOQgBASgGAlIgSAeIgBgBQghgqgHADQAAAHgIAUQgIAVgGAEgAAWB+IANgdQAWg1AHgbQAAAjgEAXQgEATgGARQgJAXgHAAQgGAAgGgIg");
	this.shape_403.setTransform(510.8,543,0.829,0.829);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.rf(["#B97333","#682233","#000033"],[0,0.604,1],-9.9,2.8,0,-9.9,2.8,23).s().p("ABnD0QgJgWgHgMIgJAPQAHglABgSQABgOAAhQQAAhIgJhEIgMhUQgRgQADgLIgBAAQgFAHgKAAQgRAAgOgOQgKgLgFgLQgLAZgdAAQgIAAgJgGIgNgIIgBABQAAAIgFAGQgIAHgMAAQgXAAgMgUQgEAJgSAOIgLAIIgDgcIgCgKIgDgQQARAAAOgQQAGgFACgGIADgEIABACQANAPAYAAQAZAAAKgZIACgKIADABQAKAGAPAAQATAAANgHIABAEQALAYAXAAQANAAAOgKIACAGIAEAKQAPAZAcAAIAHgBIgBAJQgDAjAAAlIAAAGQAAAaACAdIACAQQAEAsAIAvIADANIAEASIADASIAGAbIAEAOQAHAeAIAZQALAfAMAXQgYAQgGACQAAgFgGgjIgBAAQgJAEgIAQQgJAPABAIQgLgDgHgRgAgWCiQgOgSgLg1QgIgogDgoQAAgXAFgqIAHg1IACgQIABAAIAAAJIgBAIQgLBWAAARQADArAIAqQAKA6AOASQAGAHAGAAQAHAAAHgXQAGgRAEgTQAEgXAAgjIgEg4QgGg4gKAAQgMAAgDAuIgCAsQABAaAHAeQgIgHgDgSQAAgGAAgYIABgvQAFgwANAAQAPAAAHA6IACArIABAPQAAAigEAcQgEAQgHASQgJAagIAAQgHAAgHgIgAhjCUQAJhBgBgwIgBgsIAAg4IgDgpIgCgsIABgGIABAAIAEAyIADBlIACAlQAAAsgLBIg");
	this.shape_404.setTransform(514.5,540.4,0.829,0.829);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.rf(["#CCC631","#A45332","#402032"],[0,0.604,1],5.4,-1.6,0,5.4,-1.6,23).s().p("AgZB2IAFgbIACgMIAEgeIACgaIAAgEQACgbAAgeIAAgWIAAgbIgEgwIABgHIAAgBQANAVAAAwQAAA1AAAUIAggjIAAAJQgHAXgOAiQgLAeAAAEQARAyAAAXIAAACQgFgKgUgUQgCACgQAYIgFAJIAGgag");
	this.shape_405.setTransform(501.8,544.1,0.829,0.829);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.rf(["#FF9538","#729C23","#43741E","#4A2A3F"],[0,0.298,0.635,1],-17,-21.8,0,-17,-21.8,91.9).s().p("AiRFhIgHgKQgWAWgmAAQgfAAgRgfQgJgSgCgUQgLAAgPAKQgPAJgMAAQggAAgQgUQgOgRABgbIgCgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIgoAFQhGAAgqgyQgIgKgHgKQgagqgBg7IABgWQAHAqAfAeQAoAmAyAAQARAAAZgMQAAAPAHAMQAHAPAPAAQAJAAAJgFQALgHAEgLQgEAYARAOQAOAMATAAQAOAAAGgGQAFgEAMgOIAAgDQAEAZAIAJQAJALASAAQATAAAGgPQADgHACgZQAJAJALAMQAJAIAKAAQAPAAAGgHQAGgGADgVQANAIANABIACALIADAbIACAiIACAQIACAUIAFAwIAAAbQgjgCgVgfgAC5FTQgCgdAAgaIAAgGQAAgmADgjIABgIIgHABQgcAAgPgZIgEgKQAIgIAJgNQAMAMAEACQAEADAKAAQAnAAAYgsQAVgkgEgZQADAFALAEQAJADAHAAQAfAAAIgYQAEgLgBgbQAFADAKAIQADAEALAAQAQAAAJgKQAKgJgBgQIAAgOQgBgHgCgEQAEAEAdAEIgDgEQAcgJANgWQAMgSAAgZQgBgUgFgMQgHgOgMAAQAxgKAggrIAFgFQgCgfgNgSQgMgSgQAEQAHgEACgMIAAgYQABgTgIgKQgLgRgggJIgSgFIAJgDQAJgEAIAAQAwAAAjA7QALATAHAUQAIAXAEAZIAAAAQAFACAAALQAAAFgDAGIABAUQAAA2gPAbQgGALgjAkIAAACQAgAJASAcQAPAZAAAdQABAVgLAKQgTANgSAPIARAaQAHANAAAUQAAAMgLARQgWAkgpAAQgPAAgZgNQAOAMgUAlQgUAlgcAAQgJAAgOgFQgOgFgHgEQALAaghAgQgjAigrAAQgoAAgZgVg");
	this.shape_406.setTransform(508.4,507,0.829,0.829);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.rf(["#F5AA3A","#8EB12A","#588C12","#644335"],[0,0.298,0.635,1],-14.6,-10.7,0,-14.6,-10.7,91.9).s().p("AjoFaQgIgJgEgZIAAADQgMAPgFADQgGAGgOAAQgTAAgOgMQgRgOADgYQgEAMgKAGQgJAGgJgBQgPAAgIgOQgHgNABgPQgaAMgQAAQgzAAgngmQgggegGgqQAEglARgdQAJgQANgNQALgLALgIIgFAKQgEAIAAAIQAAAeAeAQQAZAMAiAAQAZAAAMgGQAHgEAagXIADgDQACA7A0AAQAVAAARgTQAJgIAMgXIALAiQAHAMAVAAQAoAAAQgeQALgTABgnQAPAIANAKQAKAGATAAIACAAQAXAAAWgYQAOgQACgMQABAFACAGQAHAKALAAQAUAAAKgYQAHgQAAgOQAAgRgKgIIAAgCQAPAOAjAAQAeAAAQgMQAMgJgBgMQAAgLgEgPQAIAIAKAHQAUAOATAAQASgBAUgTQAUgWgGgSQAJAQADAEQAKALAQAAQAhAAATggQAOgWAAgZQAAgdgdgSQgZgRgdAAQAfgDANgOQAIgLACgRIAAgKQAAgbgTgaQgQgXgOgEQAGgCABgCIAAgFQAAgFgCgEIAFAAQAigBANAuIAWgPQAPgJAZgBQAjAAANAhQAHAPAAAWIASAEQAgAJALARQAHAKAAATIgBAYQgBAMgIAFQAQgFANASQANATABAeIgEAFQggArgxAKQAMABAHAOQAFALAAAUQAAAXgMASQgNAWgbAKIADADQgdgEgFgEQADAFABAGIAAAOQAAASgJAJQgKAKgPAAQgMAAgDgDQgKgJgEgDQABAbgFALQgIAYgeAAQgHABgKgEQgKgEgDgFQADAagUAjQgZAsgmAAQgKAAgFgDQgDgBgNgMQgIAMgIAIIgDgGQgOAJgNAAQgWABgOgYIgBgEQgMAHgTgBQgQABgJgHIgDAAIgDAKQgKAZgXAAQgXAAgOgPIgBgCIgCAEQgCAGgGAEQgOARgSAAIAEAQQgNgBgNgJQgEAVgFAHQgGAGgPAAQgLAAgJgIQgKgMgKgJQgBAZgDAHQgHAPgSAAQgSAAgJgLgAACEPIAAAAIAAgBIAAABg");
	this.shape_407.setTransform(506.3,497.7,0.829,0.829);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.3,1.3,0,-1.3,1.3,23).s().p("Ah2DnQAKgRAIghIACgIIAFgIQAQgZACgCQAWAUAFAKIAAgBQAAgYgTgyQAAgEANgeQAOgjAHgXIAAgIIggAiQgCgUACg0QgBgwgOgUIAAABIgBAHIgCgUIAJgDQAYgHAFgMQAFARAJAFQAGAEAQAAIADApIAAA4IACAsQAAAwgIBBIABAAQALhIAAgsIgBglIgEhlIADAAIARAAIALgLQAGAGAHAEIgHA1QgGAqAAAZQADAmAIAoQALA2AOARQgXAygYAoIgLgXIgXASIgVARIgQgmQgGAGgKARQgKASgBAGIgjgbgAAoBDQgHgqgDgrQAAgQALhWQAJAFAKAAQALAAAKgFQAHgEADgEIALAIQALAHAGgCIAAAsIgBAfIgIA7IgDgsQgHg6gQAAQgOAAgEAwIgCAvQAAAYABAGQACASAJAHQgIgeAAgaIABgsQAEguAMAAQALAAAGA4IAEA4QgHAcgWA1IgNAdQgNgSgLg6gAgIkBIAAAAIAAAAIAAAAg");
	this.shape_408.setTransform(507.3,541.6,0.829,0.829);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,1.9,0,0.6,1.9,6.3).s().p("AgjAAIAAgaQAzAUAUAVIgEAEIgIAIQgfgRgcgKg");
	this.shape_409.setTransform(544.7,554,0.829,0.829);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.7,1.2,0,0.7,1.2,9.6).s().p("AA1AZQgogNhZgNIAAgaQBKAKA7ARIAUAGIgPAWIgJgDg");
	this.shape_410.setTransform(534.1,550.7,0.829,0.829);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],323.6,-177.3,0,323.6,-177.3,0).s().p("AgIgLIARgDIgEAcIgNABg");
	this.shape_411.setTransform(499.7,549.5,0.829,0.829);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,0.6,0,0.6,0.6,6.5).s().p("AgkAhQAAgkBJghIgHASIgFAQQglAZgYAOIAAgEg");
	this.shape_412.setTransform(484.3,554.9,0.829,0.829);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.9,0.7,0,0.9,0.7,7.5).s().p("Ag1AEIAigKQAhgMAogIIgLAaQg2AGgqAVg");
	this.shape_413.setTransform(492.9,551.1,0.829,0.829);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],-19,-15.6,0,-19,-15.6,64.8).s().p("AiMCIIg6gGQhLgLgogSQgkgRgdgPIgcgQQgmgXABgoQAAgqB3gxQBBgbBOgLIABgHIgCAaIgTADIgSAEQgoAIgkALIgiANIgLAEQhLAhAAAnIAAADQABAHAEAHIACAEQAWAhBaAaQB3AiCpAAQChAAB0ggIAJgCQBegbAUgkQAGgJAAgIIAAgGQgCgMgKgMQgUgXg1gUIgNgFIgVgHQg9gShKgKIgXgDIgEgRQBdAKBhAeQAvAPAqARQAtAiADAmIAAABIAAAEIgDAKQgCAGgIAPIgDAEQgFAIgNAKQgeAOgiAMQg6AUhFAQQiyATghACIAAAAIgHAAQghAAhsgLg");
	this.shape_414.setTransform(515.7,558.3,0.829,0.829);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0,0.5,0,0,0.5,11.4).s().p("AhVARQADgMAHgMQBLgEBagVQAAAQgHATIgGANQhEAPhiACQAAgFAEgLg");
	this.shape_415.setTransform(526.2,573.4,0.829,0.829);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,0.3,0,0.4,0.3,11.4).s().p("AA1AbQhMgBhAgHIAAgDQAAgPAKgbQBGAKBMADIATABIgFASIgGAVIgYAAg");
	this.shape_416.setTransform(508.8,574,0.829,0.829);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.6,-2,0,0.6,-2,9.5).s().p("AgbARIACgLIADgIQAfgNATgMIgBAFQgBAHgEAOIgCADIguAaIgBgLg");
	this.shape_417.setTransform(548.7,567.1,0.829,0.829);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.5,0.1,0,0.5,0.1,9).s().p("AgrgIIALgDQAvgNAkgNIgCANIgEAYQgtAUglAOIgNAEQAAgTAHgbg");
	this.shape_418.setTransform(539.8,570.9,0.829,0.829);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.5,-0.1,0,0.5,-0.1,12.5).s().p("AgmARQgYgJgVgIIADgSQADgOAEgLQArASBWASIAcAFIgGAfIgEAPQhBgKgvgRg");
	this.shape_419.setTransform(491.9,571.4,0.829,0.829);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.1,-0.9,0,0.1,-0.9,9.8).s().p("AgogCIANgnQAQAOAMAIQANAIAbAMIgKAaIgGAPQglgVgcgXg");
	this.shape_420.setTransform(479.9,566.4,0.829,0.829);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.rf(["#ECE75D","#A1DB4A","#7DAD29","#6D772F"],[0,0.298,0.635,1],-0.5,14.8,0,-0.5,14.8,91.9).s().p("AgZDLQgNgNAAgWQAAgJAEgQIADgSQgHAagpAcQgsAdgqAAQgRAAgOgHQgUgJABgRQAAgTAJgPQADgGASgUIgCAAQgKAFgJAAIgMAAQgJgCgBgLQABgQAUgWQARgTAUgNQgJABgJAFQgNAFgHAAQgdAAgTgLQgXgNAAgYQAAgfAPgcIABgBQASgXAUgTQAZgVApgaQAZgPAQgFIBQgbQAegKA0gFIAagDIAIAAIAQAHQATAKgBANQAAARgLAJQgFAFgfASIACAAQAEgCARgEQAUgFANAAQAwAAATAJQAWALgBAcQAAAcgUAXQgYAagoAIQAVgDAPALQAQAKAAAXQAAAagRAXQgYAfgrAAQgUAAgKgKQANAggTApQgUAsgjAAQgQAAgLgMgAgfB9IAAAAIAAgCIAAACIAAAAgAiqAlIAEAAIAAgCIgEACIAAAAgADUBVQgCgGgBgMQAAgNABgCQACgGAZgNQAMgIANAAQAMAAAFAQIACARQgBAkg1AAQgLAAgEgJg");
	this.shape_421.setTransform(494.7,476.5,0.829,0.829);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.rf(["#F5C646","#95CD38","#588C12","#644335"],[0,0.298,0.635,1],-43.7,19.5,0,-43.7,19.5,91.9).s().p("AAYAvQAFgJAAgKQAAgggfgWQgPgJgZgJQAOgJAcgBQAAAFAAAEIAAAGQAAACgFABQAMAEARAXQATAZAAAaIgBALIgFgBQgJAAgJADIAFgIg");
	this.shape_422.setTransform(530.5,472.7,0.829,0.829);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.rf(["#ECD451","#A1CD38","#648C12","#645633"],[0,0.298,0.635,1],-6.9,4.6,0,-6.9,4.6,91.9).s().p("AkJEEIgCACQgbAXgHAEQgLAGgaAAQgiAAgYgMQgfgPAAgfQAAgHAFgJIAFgKQAMgIAMgFIgegdQgQgSAAgVQABgVATgWQATgVAYgIQgIgNgQgQQgKgJAAgRQAAgXAQgRQAQgRAcgFQgIgGgBgEIgBgSQAAgdAggtQgPAcAAAfQAAAZAXAOQATALAdAAQAHAAANgGQAJgEAJgBQgUANgRASQgUAXgBANQABALAJADIAMAAQAJAAAKgFIACAAQgSAUgDAGQgJAPAAASQgBARAUAJQAOAHARAAQAqAAAsgdQApgbAHgaIgDASQgEAPAAAKQAAAWANANQALAMASAAQAjAAAUgsQARgpgMgeQAJAIAUAAQArAAAYgdQARgXAAgbQAAgXgQgMQgPgLgVADQAogIAYgZQAUgXAAgcQABgdgWgKQgTgJgwAAQgNAAgUAEQgRAEgEADIgCAAQAfgSAFgFQALgKAAgQQABgOgTgJIgQgHIAdgBQBrAABJAuQBIAuAFBFIADAAQAGgbAPgKIABAAQAZAIAOAKQAhAWAAAhQAAALgEAIIgGAJQAKgDAJAAIAFABQgCARgJAKQgNAOgeADQAcAAAaARQAcASABAbQgBAZgOAXQgSAfgiAAQgPAAgKgLQgEgEgJgQQAHATgUAVQgUAUgTAAQgSAAgVgOQgJgGgJgJQAFAPAAALQAAANgMAJQgPALgfAAQgjAAgOgOIAAACQAKAIAAATQAAAOgHAQQgLAYgTAAQgLAAgHgKQgEgFgCgGQgCAMgOAQQgWAYgXAAIgCAAQgRAAgJgGQgNgKgPgIQgCAngLATQgQAegoAAQgVAAgHgLIgKgjQgNAXgIAIQgRATgWAAQg0AAgCg6gACthDQgZANgCAFQgBADAAAMQABANACAFQAEAKALAAQA1AAABglIgCgQQgFgQgMAAQgNAAgMAIgAhfAVIAAABIAAABIAAgCgAjmhCIAAADIgEAAIAEgDgAj6jrIAbgRQgpAagZAWQASgSAVgNgAAIk9QACgBAEACIgIAAIACgBgAAOk8IAAAAg");
	this.shape_423.setTransform(500,485,0.829,0.829);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.rf(["#FFA110","#9BC21E","#66AD1C","#569120"],[0.008,0.486,0.863,1],-21.1,-6.6,0,-21.1,-6.6,53.4).s().p("AgdBHIgLgSQgXASgPAFQgEgCgIgOQgHgNgFgDQgCADgPAMQgOANgCADQgKgUgJgLQgDADgKATQgLATgDABIgjgqQABADgEAHIAAAAQgBgKgFgPQgFgTgGgGIAAgBIAPANIALAIIAjAcQABgHAKgRQAKgRAHgHIAPAmIAWgRIAYgRIALAWIAGAMIAvgmIARAqQAFgEAGgVQAIgUAAgFQAHgDAiAoIABABIARgfIAJgMQAGAKAJAVQAHARALADQAAgIAIgOQAJgQAIgEIABAAQAHAiAAAGQAGgCAXgQIAFgEQAbgSAIgEQgJANgfAdQgbAZgFACQgHgYgFgCIgBACIgBAAQAAAFgKAOIgLAPQgYgdgIgKIgIARQgGAOgCAFQgDgBgNgQQgPgSgJgGQgGAOgLARQgNAWgLACQgCgBgIgOgAEAAAQgTgNg8gSIgWAAQgIgYgHgeIANABQBKAKA9ATIAiALQBAAYAPAbQgUAjheAbIgJACQAHgugdgZgAmQAHQAQgcBBgaIAigMQArgPAygIIANgCIgFAbIgGAaIgCAHIgCAAQglAAgzAGQg2AGg/AWIgBgDg");
	this.shape_424.setTransform(515,558.8,0.829,0.829);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.rf(["#FFBB10","#AADE1E","#7EBD28","#75A02B"],[0.008,0.486,0.863,1],-15.1,-10.2,0,-15.1,-10.2,53.4).s().p("AjjAhQhZgagXgfQA/gYA1gGQA0gFAkAAIADAAQgIAhgKAQIgLgIIgPgMIAAABQAGAFAFATQAFANABAKIAAAAQAEgHgBgDIAjAqQADgBAKgSQALgUADgDQAJAMAKATQACgDAOgNQAPgMACgDQAFADAHANQAIAOAEADQAPgFAUgTIALASQAJAOACABQALgCAPgWQALgRAFgLQAKADAPASQANAQADABQABgFAHgOIAIgRQAHAKAZAdIALgPQAKgOAAgFIABAAIABgCQAFACAHAZQAFgCAbgaQAfgbAIgPQgHAGgbASIgFAEQgMgXgKgfIAWAAQA8ARATAPQAdAZgHAsQh0AhijAAQingBh3gig");
	this.shape_425.setTransform(510,561.7,0.829,0.829);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-0.5,0,0,-0.5,9.1).s().p("AA4AeQhMAAg+gHIAAgQIAKABQAzAGA8ABIAUAAIAFgQIAEgQIACgMIANAAIAAAsIAAAPIgbAAg");
	this.shape_426.setTransform(619.6,323.6,1.25,1.25);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.3,0.2,0,0.3,0.2,9.1).s().p("AAqAWQg8gBgzgGIgBgDQAAgLAJgWQA4AIA8ADIAQAAIgEAOIgFASIgUAAg");
	this.shape_427.setTransform(619.3,322.7,1.25,1.25);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.7,1.1,0,0.7,1.1,9.1).s().p("AhLAXIAAguQA+AJBIABIARAAIgCAMIgPAAQg9gDg3gIQgJAWAAALIAAADIgJgBg");
	this.shape_428.setTransform(618.8,321.6,1.25,1.25);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,2.1).s().p("AAAAPIgDgLIgFgUQAIABAJACIAAASIAAAMIgJgCg");
	this.shape_429.setTransform(640.9,293.6,1.25,1.25);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,7.2).s().p("Ag0AgIAIgDIALgDQAfgKAigQIAEgUIACgKIABgKIAOgFIAAAkIAAASIgUAJQgnARguALg");
	this.shape_430.setTransform(657.1,319.1,1.25,1.25);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.7,-0.5,0,0.7,-0.5,7.6).s().p("AgaABIATgIIATgPQAKgIAFgGIgDAZQgPAKgYAIIgDAIIgBAJIABAJIgIAEg");
	this.shape_431.setTransform(667.2,313.1,1.25,1.25);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,0,0,0.1,0,7.6).s().p("AggAqIAHgDIAlgVIABgFIAEgOIABgEIADgZIACgEIAIgQIACgIIAAgEIgGBOQgSAZgpAWg");
	this.shape_432.setTransform(668,312.4,1.25,1.25);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.5,-1.6,0,0.5,-1.6,7.6).s().p("AgVAOIABgJIADgHQAYgKAPgJIAAADIgFAQIgBAEIgkAVIgBgJg");
	this.shape_433.setTransform(667.5,314.4,1.25,1.25);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0,0.4,0,0,0.4,9.1).s().p("AhEAOQADgLAFgIQA8gEBIgRQAAANgGAPIgEAKQg3ANhPACIAEgNg");
	this.shape_434.setTransform(640.3,322.1,1.25,1.25);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.4,0.7,0,0.4,0.7,9.1).s().p("AhMAeIAAgsQBbgCA+gNIAAAGQhIARg8AEQgFAIgDALIgEANIgJAAg");
	this.shape_435.setTransform(639.7,321.7,1.25,1.25);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,9.1).s().p("AhQAXIAJAAQBOgCA3gMIAEgJQAGgRABgNIAAgGIAIgCIAAAqIAAAPIgXAFQg/ANhLACg");
	this.shape_436.setTransform(640.3,322.5,1.25,1.25);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,0.1,0,0.4,0.1,7.2).s().p("AgigGIAJgDQAkgKAegKIgCAKIgDATQgkAQgdALIgLADQAAgPAGgVg");
	this.shape_437.setTransform(656.7,319,1.25,1.25);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.7,0.4,0,0.7,0.4,7.2).s().p("AgtgGIAQgEIABAAQAtgNAdgMIgCAJQgeAKgkALIgJACQgFAVgBAQIgIACg");
	this.shape_438.setTransform(656.3,318.6,1.25,1.25);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-1,0,0,-1,5).s().p("AgggOIAAgLQAWAKAYANIAHgHIACgDQAJAJABAJIAAAEQABAIgFAIQgNgXgwgRg");
	this.shape_439.setTransform(663.3,301.8,1.25,1.25);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.5,1.5,0,0.5,1.5,5).s().p("AgbAAIAAgUQAoAPAPARIgCADIgHAHQgYgOgWgIg");
	this.shape_440.setTransform(662.7,298.5,1.25,1.25);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0.1,-1,0,0.1,-1,7.7).s().p("AAoAMQgvgNg7gIIAAgLQBHAMAgAIIAHACIANgPIALAEIAAAUIAAAKIgcgJg");
	this.shape_441.setTransform(650.6,297.1,1.25,1.25);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,1,0,0.6,1,7.7).s().p("AArAUQgggKhIgKIAAgVQA8AIAuANIARAFIgMARIgHgCg");
	this.shape_442.setTransform(649.9,294.6,1.25,1.25);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.rf(["#F5C646","#95CD38","#588C12","#644335"],[0,0.298,0.635,1],-35.1,15.7,0,-35.1,15.7,73.7).s().p("AATAlQAEgGgBgJQAAgZgYgRQgLgIgUgHQAKgHAXgBQAAAEAAAEIAAAEQAAACgEABQAKADANASQAPAUAAAVIAAAJIgFgBQgGAAgJACIAFgHg");
	this.shape_443.setTransform(645.6,200.2,1.25,1.25);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-2.3,0,0,-2.3,10.1).s().p("AggAIIgugQIAAgQIAIADIAkAOQAlAMA1AIIACgMIAGgYIABgJIAOADIAAAuIAAAQQhCgIgtgRg");
	this.shape_444.setTransform(599.3,322.3,1.25,1.25);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,-0.1,0,0.4,-0.1,10.1).s().p("AgeANIgkgNIACgOQACgLAEgJQAiAOBFAOIAWAFIgFAYIgDAMQg0gIglgOg");
	this.shape_445.setTransform(598.8,319.6,1.25,1.25);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.7,2.8,0,0.7,2.8,10.1).s().p("AhHAZIAAg0IAQAIIAEACIAbAKIASAGQAjAKArAIIgBAJIgXgFQhFgOgigMQgDAHgDALIgCAPIgIgDg");
	this.shape_446.setTransform(598.4,315.9,1.25,1.25);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1,-3.3,0,-1,-3.3,18.5).s().p("AheCNQAHgOAHgaIACgGIAEgHQAMgUADgBQARAQAEAIIAAgBQAAgTgQgoQABgEAJgYQANgaAEgTIAAgHIgZAcQgBgQABgrQgBgmgLgRIAAABIgBAGIgBgQIAHgCQATgGAEgKQAEAOAHAEQAFADANAAIADAhIAAAtIABAlQAAAkgHA0IABAAQAJg5AAghIgBggIgChRIACAAIANAAIAJgJQAFAFAFAEIgGAqQgEAhAAAVQACAgAHAeQAIArAMANQgSApgUAgIgJgSIgSAOIgRANIgNgeQgFAFgHAOQgJANAAAGIgcgWgAAgAJQgGgfgCgkQgBgNAJhFQAIAEAIAAQAJAAAIgEQAGgDACgDIAJAGQAJAFAEgBIAAAjIAAAZIgHAxIgCglQgGgvgNAAQgLAAgEAnIgBAnIAAAYQADANAGAGQgGgWAAgVIACglQACglAKAAQAJAAAFAtIADAuQgGAVgSAqIgKAXQgLgOgIgvg");
	this.shape_447.setTransform(617.5,289.1,1.25,1.25);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-3.1,0,0,-3.1,7.9).s().p("AgngRIAAgOIAGAFQAXAUAdAPIAFgKIAIgVIAEgMIADABIAAA0IAAAQQg0gZgagbg");
	this.shape_448.setTransform(584.4,316.6,1.25,1.25);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.rf(["#FFBB10","#AADE1E","#7EBD28","#75A02B"],[0.008,0.486,0.863,1],-12,-8.2,0,-12,-8.2,42.8).s().p("Ai2AbQhHgVgSgZQAygUArgDQApgGAeAAIACAAQgHAbgHAOIgJgHIgMgKIAAABQAEAEAEAPQAEALABAHQADgFAAgDIAcAiQACgBAIgPQAJgQACgCQAIAJAHAQQACgDAMgJQALgLACgCQAEACAGAMQAGALADABQAMgDAQgPIAJAOIAIAMQAKgCALgRQAJgOAEgJQAIADAMAOQALANACABQABgEAGgMIAGgNIAZAfIAJgMQAIgLAAgEIABAAIABgCQAEACAFATQAEgBAWgUQAZgWAHgMQgGAFgWAPIgDACQgLgSgIgZIASAAQAwAOAPAMQAYAUgFAkQheAZiCAAQiGAAhggbg");
	this.shape_449.setTransform(620.7,307.9,1.25,1.25);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.1,-0.7,0,0.1,-0.7,7.9).s().p("AgggBIALggQAMAMAJAGIAhAQIgIAVIgFAMQgdgRgXgSg");
	this.shape_450.setTransform(584.3,313.6,1.25,1.25);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.2,2.9,0,0.2,2.9,7.9).s().p("AABAUQgJgHgMgLIgLAfIgGgFIAAhAQALAUAgAUIAgAVIgEAMIghgRg");
	this.shape_451.setTransform(584.2,309,1.25,1.25);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],259.5,-142.2,0,259.5,-142.2,0).s().p("AgGALIAAgTIANgCIgDAVIgKAAg");
	this.shape_452.setTransform(608.2,293.1,1.25,1.25);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.rf(["#FFA110","#9BC21E","#66AD1C","#569120"],[0.008,0.486,0.863,1],-16.9,-5.3,0,-16.9,-5.3,42.8).s().p("AgYA5IgIgOQgSAOgMAEQgEgCgFgLQgHgLgDgCQgCACgMAKQgMAKgBADQgIgQgHgJQgDACgIAQQgIAPgCABIgcgiQAAADgEAFQAAgIgEgMQgEgPgEgFIAAAAIALAKIAJAGIAcAWQAAgFAJgOQAIgNAFgGIAMAfIARgOIAUgOIAJASIAFAKIAmgfIANAiQAEgEAFgQQAGgQAAgEQAGgDAbAgIAAABIAPgYIAGgKQAGAIAHARQAFANAJADQAAgHAHgLQAHgNAGgDIABAAQAGAbgBAFQAFgCAUgNIADgCQAWgPAFgDQgGAKgZAXQgWAVgEABQgGgTgDgCIgBACIgBAAQAAAEgIALIgJAMIgZgfIgHANQgFALgBAFQgDgBgKgNQgMgOgIgFQgEALgJANQgKASgJACIgJgMgADNAAQgPgKgwgOIgSAAQgHgUgFgYIALABQA7AIAxAPIAcAJQAyATANAVQgQAdhLAVIgHACQAEglgXgUgAlBAFQANgWA0gUIAbgKQAkgMAogHIAKgBIgFAWIgEAUIgBAGIgCAAQgfAAgoAFQgrAEgzASIgBgDg");
	this.shape_453.setTransform(626.7,304.3,1.25,1.25);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.rf(["#CCC631","#A45332","#402032"],[0,0.604,1],4.3,-1.2,0,4.3,-1.2,18.5).s().p("AgUBfIAEgWIACgJIADgYIACgVIAAgEQABgVAAgYIAAgSIAAgWIgDgmIABgFIAAgBQAKAQAAAnQAAArAAAQIAZgdIAAAIQgFASgMAbQgIAYAAADQAOAoAAATIAAABQgFgIgPgQQgCACgMATIgEAHIAEgUg");
	this.shape_454.setTransform(610.8,286.6,1.25,1.25);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],259.4,-140.5,0,259.4,-140.5,0).s().p("AgEgEIAJAAIgBAHIgIACg");
	this.shape_455.setTransform(608.1,295.3,1.25,1.25);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,6).s().p("AgyAQQAigQArgFIAJgVIAPgDIAAAWIAAAIQgoAHghAMIgcAKg");
	this.shape_456.setTransform(600.9,295.7,1.25,1.25);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.8,0.5,0,0.8,0.5,6).s().p("AgqACIAbgHQAbgKAggFIgKAUQgrAEghASg");
	this.shape_457.setTransform(600,295,1.25,1.25);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.5,0.5,0,0.5,0.5,5.2).s().p("AgdAaQAAgcA7gaIgGAOIgEANIgwAfIgBgEg");
	this.shape_458.setTransform(589.6,299.7,1.25,1.25);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,5.2).s().p("AghAZIAwgfIAFgNIAFgOIAJgEIAAATIAAAOQgyASgNAYQgEgGAAgHg");
	this.shape_459.setTransform(590.2,300.2,1.25,1.25);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],-15.2,-12.6,0,-15.2,-12.6,52).s().p("AhwBtIgugFQg9gJgggPQgdgNgXgMIgWgNQgegTAAgfQAAgiBggnQA0gVA+gJIABgGIgCAVIgPADIgOADQggAGgdAJIgbAKIgJAEQg9AaAAAfIABADQAAAEAEAHIABACQASAbBIAVQBgAbCHAAQCBAABdgZIAHgCQBMgWAQgcQAEgIAAgGIAAgEQgCgLgIgJQgQgTgqgPIgLgEIgQgGQgxgOg8gIQgJgCgJgBIgDgOQBKAIBOAZQAmALAiAOQAkAcACAeIAAAAIAAAEIgCAIIgIAQIgCAEQgFAGgKAIQgYALgcAKQguAQg3AMQiPAQgaABIgBAAIgGABQgaAAhWgJg");
	this.shape_460.setTransform(627.6,303.7,1.25,1.25);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],-12.4,-12.7,0,-12.4,-12.7,52).s().p("AAiB/IgRAAQhIgBg+gKIgOgCQgrgIglgMIgTgHIgagKIgFgBIgPgJIgDgBIghgVQghgWgLgUIAAgGQgGgiBSgjQBTgkBRgNIAAADIgBAGQg+AJg0AVQhgAnAAAiQAAAfAeATIAWANQAXAMAdANQAgAPA9AJIAuAGQBdAJAZgCIABAAQAagBCPgPQA3gMAugRQAcgKAYgLIgVAPIgTAKIgNAFQgeAMguANIgBAAIgQAFIgJACQg+ANhdACIgNAAgAEShPQhOgZhKgHIgDgPQBdAJBDAbQAqASAZASQgigOgmgLg");
	this.shape_461.setTransform(624.1,303.9,1.25,1.25);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.rf(["#BD8E2E","#7A3732","#000033"],[0,0.604,1],-4.4,-0.2,0,-4.4,-0.2,18.5).s().p("AAUCcIgkAeIgEgJQAUggAQgpQAFAHAGAAQAIAAAIgVQAFgOADgNQADgWAAgcIAAgLIAHgvIAAgZIAAgjQgEABgJgFIgJgGQgCADgGADQgIAEgJAAQgIAAgGgEIAAgHIAAgHIAAAAIgBANQgFgEgFgFIgJAJIgPAAIgCAAIgEgoIAAAAIgBAFIABAjQgMAAgGgDQgGgEgFgOQgEAKgTAGIgHACIgCgNIgCgbIAJgHQAOgLAEgHQAJAQATAAQAKAAAFgFQAFgGAAgGIABgBIAKAHQAHAEAHAAQAVAAAJgTQAEAJAJAIQAMALAOAAQAHAAAFgFIAAAAQgCAIANAOIAKBDQAHA4AAA4QAABAgBALQgBAPgFAdIgOAYIgBAAQgagigGACQAAAGgGAQQgHARgEADgAASBlIAKgXQARgqAGgXQAAAdgDASQgDAPgFAOQgHASgGAAQgFAAgEgGg");
	this.shape_462.setTransform(621.7,285.3,1.25,1.25);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.rf(["#B97333","#682233","#000033"],[0,0.604,1],-7.9,2.3,0,-7.9,2.3,18.5).s().p("ABSDDQgHgRgFgKIgHAMQAFgdABgPQABgLAAhAQAAg6gIg2IgJhDQgOgOADgIIgBAAQgEAFgIAAQgOAAgMgLQgHgIgDgJQgKATgXAAQgGAAgIgEIgKgHIAAABQAAAGgFAGQgGAFgJAAQgUAAgJgQQgEAHgOALIgJAHIgCgWIgBgIIgDgNQAOAAALgOQAFgEABgEIACgDIACABQAKAMATAAQAUAAAIgUQACgDAAgEIADAAQAHAFAMAAQAQAAAKgFIABACQAJATARAAQALAAALgHIACAFIADAIQAMAUAXAAIAFgBIAAAHQgDAcAAAeIAAAFQAAAVACAXIABANQADAjAHAlIACALIADAOIADAOIAFAWIADALQAGAYAGAUQAIAZALATQgTAMgFACQAAgEgGgcIgBAAQgGADgHANQgHAMAAAGQgIgCgGgOgAgSCBQgLgNgJgrQgGgggDggQAAgTAFghIAGgqIABgNIABAAIAAAHIgBAHQgJBFAAANQADAiAGAhQAIAvALAOQAFAGAFAAQAFAAAGgSQAEgOAEgPQADgSAAgdIgDgsQgFgtgIAAQgJAAgDAlIgBAjQAAAVAGAYQgHgGgCgPIAAgYIABglQAEgnALAAQALAAAFAvIADAjIAAALQAAAcgEAWQgCANgGAOQgHAVgGAAQgGAAgGgHgAhPB2QAHg0AAgmIgCgjIAAgtIgCghIgBgjIAAgFIABAAIADAoIADBRIABAeQAAAjgJA5g");
	this.shape_463.setTransform(626.1,282.1,1.25,1.25);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.rf(["#FF9538","#729C23","#43741E","#4A2A3F"],[0,0.298,0.635,1],-13.6,-17.5,0,-13.6,-17.5,73.7).s().p("Ah0EbIgGgIQgRASgfAAQgYAAgOgaQgHgOgCgQQgJABgMAHQgMAIgKAAQgagBgMgQQgLgNABgWIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIggADQg5AAgignQgGgJgFgIQgVghAAgwIAAgSQAGAjAZAYQAfAeApAAQANAAAVgKQgBANAFAJQAHANAMAAQAHAAAHgFQAJgGADgIQgDASANAMQAMAKAPgBQALABAFgGQAEgCAKgLIAAgCQADATAHAIQAGAIAPABQAPAAAFgNQACgGABgUQAJAIAIAJQAHAGAIAAQANABAEgGQAFgFACgRQALAHAKACIACAIIACAWIACAaIACAOIABAPIAEAnIAAAVQgcgCgRgYgACVEQQgCgXAAgWIAAgEQAAgeACgdIABgHIgGABQgWABgMgVIgDgIQAGgGAHgKIANALQAEACAHAAQAgAAATgjQAQgcgCgVQACAEAJADQAHADAFAAQAZAAAHgUQADgIgBgWIAMAJQADADAIAAQANAAAIgIQAHgHAAgNIAAgLIgDgIQADACAYAEIgDgDQAWgIALgRQAJgPAAgUQAAgPgEgKQgFgMgKAAQAngIAagiIADgFQAAgYgLgOQgKgPgNAEQAGgDACgLIAAgTQAAgPgGgIQgJgNgZgIIgPgDIAIgDQAHgEAGAAQAnAAAbAwQAJAPAGAQQAHATACATIABABQAEABgBAJQAAAEgCAFIABAPQAAAsgMAWQgFAJgcAdIAAACQAaAGAOAXQAMATAAAXQAAASgIAIQgPAKgPAMIAOAVQAGAKgBAQQAAAKgIANQgSAdghAAQgMAAgUgKQALAKgPAdQgRAegXABQgGgBgMgEQgLgEgFgDQAIAUgaAbQgcAbgjAAQgfAAgUgRg");
	this.shape_464.setTransform(618.7,241.7,1.25,1.25);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.rf(["#F5AA3A","#8EB12A","#588C12","#644335"],[0,0.298,0.635,1],-11.7,-8.6,0,-11.7,-8.6,73.7).s().p("Ai6EWQgGgIgEgTIAAACQgJALgEADQgFAFgLAAQgQAAgLgJQgNgMADgTQgEAJgIAFQgHAFgIAAQgLAAgHgMQgFgKAAgNQgUAKgNAAQgpAAgfgeQgagYgFgiQAEgeANgXQAHgNAKgKQAJgJAJgHIgDAIQgEAHAAAGQAAAZAYAMQATAKAcAAQAVAAAJgFQAFgDAVgTIADgCQACAvApAAQARAAAOgPQAHgHAKgSIAJAcQAEAJASAAQAgAAAMgYQAJgPABggQANAHAKAIQAIAEAPABIACAAQASAAASgUQAKgMACgKIACAIQAGAJAJAAQAQAAAIgTQAGgOgBgKQABgOgIgGIAAgCQAMAMAcAAQAYAAANgKQAJgHAAgKQAAgJgEgMQAHAHAHAFQARALAPAAQAPAAAPgQQARgRgGgPQAIANACADQAIAJANAAQAbAAAPgZQALgTAAgUQAAgWgXgPQgUgNgYAAQAZgDAKgMQAHgIACgNIAAgJQAAgVgPgWQgNgSgLgDQAFgBAAgCIAAgEQAAgEgCgEIAEAAQAcAAALAkIARgLQAMgIAUAAQAcAAALAaQAFAMAAASIAPAEQAZAHAJANQAGAIgBAPIAAAUQgBAKgGADQANgEAKAPQALAOAAAZIgDAEQgaAignAIQAJABAGALQAEAKAAAPQAAASgJAPQgLARgWAIIACADQgXgDgDgDIADAIIAAAMQAAAOgHAHQgIAIgNAAQgIAAgEgDIgLgJQABAWgDAJQgIATgYAAQgFAAgHgDQgJgDgCgEQACAVgQAcQgUAjgfAAQgHAAgFgCIgMgLQgHAKgHAHIgCgFQgLAHgKAAQgSAAgLgTIgBgCQgJAFgQAAQgNAAgHgFIgDAAQAAAEgCADQgIAUgRAAQgUAAgKgMIgCgBIgCADQAAAEgGAEQgLAOgNAAIACANQgKgCgLgGQgCAQgFAGQgFAFgMAAQgIAAgIgHQgHgJgJgHQgBAUgCAFQgFANgPAAQgPAAgHgJg");
	this.shape_465.setTransform(616.2,230.5,1.25,1.25);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.rf(["#ECD451","#A1CD38","#648C12","#645633"],[0,0.298,0.635,1],-5.5,3.7,0,-5.5,3.7,73.6).s().p("AjUDQIgCACQgWATgFADQgJAFgUAAQgcAAgTgKQgZgMAAgZQAAgGAEgHIAEgIQAJgGAKgEIgYgYQgMgOAAgRQAAgRAQgRQAOgRATgHQgFgKgOgNQgIgHAAgNQAAgTAOgNQANgOAWgEQgHgFgBgDIAAgPQAAgXAagkQgNAXAAAZQAAAUATALQAPAIAXAAQAGAAAKgEQAIgEAHAAQgRAKgNAPQgRASAAAKQAAAJAJACIAJAAQAHAAAIgEIACAAQgOAQgDAFQgIAMAAAPQAAAOAPAHQAMAFAOAAQAhAAAjgXQAhgVAGgVIgCAOQgDAMAAAIQAAARAKALQAJAJAOAAQAdAAAPgjQANghgJgXQAHAGARAAQAiAAASgXQAPgTAAgVQAAgSgNgKQgMgJgSADQAhgHATgUQARgTAAgWQAAgXgSgIQgPgIgmAAQgLAAgQAEQgOADgDACIgBAAQAZgOAEgEQAJgIAAgNQAAgLgPgIIgMgFIAWgBQBWAAA7AlQA5AlAFA3IACAAQAEgVAMgIIACgBQAUAHALAIQAaASAAAaQAAAJgDAHIgFAGQAIgCAHAAIAEABQgBANgHAIQgLAMgYADQAXAAAVANQAWAPAAAUQAAAUgLATQgPAZgbAAQgMAAgIgJQgDgDgHgNQAFAPgQARQgQAQgPAAQgPAAgQgLQgIgFgHgHQAEAMAAAJQAAAKgJAHQgNAKgYAAQgcAAgMgMIAAACQAIAGAAAQQAAAKgGAOQgIATgPAAQgJAAgGgJIgEgIQgCAKgLAMQgSAUgSAAIgCAAQgNgBgIgEQgKgIgMgHQgCAggIAPQgNAYggAAQgRAAgFgJIgJgcQgKASgHAHQgNAPgSAAQgpAAgCgvgACLg2QgUALgCAEIAAAMQAAAKACAFQADAHAJAAQArAAAAgdIgCgNQgDgNgKAAQgLAAgJAGgAi4g0IAAACIgDAAIADgCgAjIi8IAVgOQggAVgVASQAPgPARgKgAAHj+IAFABIgHAAIACgBg");
	this.shape_466.setTransform(608.6,215.1,1.25,1.25);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.rf(["#ECE75D","#A1DB4A","#7DAD29","#6D772F"],[0,0.298,0.635,1],-0.4,11.9,0,-0.4,11.9,73.7).s().p("AgUCjQgKgLAAgRQAAgIADgMIACgOQgGAVghAVQgjAXghAAQgOAAgLgFQgQgHABgOQAAgPAHgMQADgFAOgQIgCAAQgIAEgHAAIgJAAQgIgCAAgJQAAgMAQgSQANgPARgKQgHAAgIAEQgKAEgFAAQgXAAgQgIQgTgLAAgTQAAgYANgXIABAAQAOgUAPgOQAVgSAhgVQATgLAOgEIBAgWQAYgIAogEIAWgCIAHAAIANAFQAOAIAAALQAAANgJAIQgEAEgZAOIABAAQADgCAOgDQAQgEALAAQAmAAAPAIQASAIAAAXQAAAWgRATQgTAUghAHQASgDAMAJQANAIAAASQAAAVgPATQgRAZgjAAQgRAAgIgIQAKAZgPAhQgPAjgdAAQgMAAgJgJgAiIAeIADAAIAAgCIgDACIAAAAgACqBEQgCgFAAgKIABgMQABgEAUgLQAKgGAKAAQAKAAADANIACANQAAAdgqAAQgKAAgDgHg");
	this.shape_467.setTransform(602.2,204.9,1.25,1.25);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,-0.6,0,0.8,-0.6,9.5).s().p("AggABQANgEAKgHQAOgJAKgIQANgKAFgIIgDAfQgTAMgeALIgDAKIgCAMIAAAKIgIAFg");
	this.shape_468.setTransform(982,192,1.25,1.25);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.9,0.6,0,0.9,0.6,9).s().p("Ag5gIIAUgEIACgBQA3gQAlgPIgCAMQgkANgvAMIgLADQgHAbgBAUIgKACg");
	this.shape_469.setTransform(968.4,198.9,1.25,1.25);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.5,0.9,0,0.5,0.9,11.4).s().p("AhfgSQBxgCBOgQIAAAIQhaAVhLAEQgHAMgEAMQgDALgBAFIgLAAg");
	this.shape_470.setTransform(947.8,202.7,1.25,1.25);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.8,1.5,0,0.8,1.5,11.4).s().p("AheAdIAAg6QBNAMBaAAIAWAAIgCAQIgUgBQhLgDhGgKQgLAcAAAOIABADIgMgBg");
	this.shape_471.setTransform(921.7,202.6,1.25,1.25);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.9,3.5,0,0.9,3.5,12.5).s().p("AhZAfIAAhBIATAJIAHADQASAIAOAEIAYAIQAsAOA1AJIgCALIgcgFQhWgSgrgQQgEAJgDAOIgDATIgKgEg");
	this.shape_472.setTransform(896.3,195.6,1.25,1.25);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],0.2,3.7,0,0.2,3.7,9.8).s().p("AACAZQgMgJgQgOIgNAnIgIgHIAAhQQAPAZAnAaQAXAQASAKIgGAQQgbgOgNgIg");
	this.shape_473.setTransform(878.5,187,1.25,1.25);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,11.4).s().p("AhkAcIALAAQBigCBFgPIAFgLQAHgVABgQIAAgIIAKgDIAAA1IAAASIgdAHQhPAQhdADg");
	this.shape_474.setTransform(948.4,203.9,1.25,1.25);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-0.6,0,0,-0.6,11.4).s().p("ABGAmQhgAAhMgKIAAgUIAMACQBAAHBLABIAYAAIAHgUIAFgUIACgPIAQAAIAAA3IAAAUIgdAAIgEAAg");
	this.shape_475.setTransform(922.7,205.2,1.25,1.25);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,9).s().p("AhBAoIAKgDIANgEQAngNArgUIAEgZIADgMIACgNIARgHIAAAtIAAAXIgZAMQgwAVg6AOg");
	this.shape_476.setTransform(969.5,199.5,1.25,1.25);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,9.5).s().p("AgoA1IAIgFIAugZIACgGQAFgNABgGIAAgFIADgfIADgEQAIgPACgGIADgKIAAgEIgHBiQgXAfgzAag");
	this.shape_477.setTransform(983,191.1,1.25,1.25);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-2.8,0,0,-2.8,12.5).s().p("AgpAKQgfgKgagLIAAgUIAKAFQAVAJAYAIQAwAPBAALIAEgPIAGggIACgKIARADIAAA6IAAAUQhSgKg5gVg");
	this.shape_478.setTransform(897.4,203.6,1.25,1.25);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-3.9,0,0,-3.9,9.8).s().p("AgxgVIAAgSIAIAHQAcAZAlATIAGgNIAKgaIAGgQIADACIAABBIAAAUQhCgfgggig");
	this.shape_479.setTransform(878.7,196.4,1.25,1.25);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-1.3,0,0,-1.3,6.3).s().p("AgpgSIAAgNQAcALAfARIAIgIIAEgEQAKAMABAKIABAFQAAALgGAJQgQgdg9gVg");
	this.shape_480.setTransform(977.1,177.9,1.25,1.25);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,-1.2,0,0,-1.2,9.6).s().p("AAyAPQg7gQhKgKIAAgPQBZAPAoALIAJADIAQgUIANAFIAAAaIAAANIgigMg");
	this.shape_481.setTransform(961.3,172.1,1.25,1.25);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,7.5).s().p("Ag+AUQApgUA3gGIALgbIASgDIAAAbIAAALQgyAIgpAPIgiAMg");
	this.shape_482.setTransform(899.4,170.4,1.25,1.25);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],323.4,-175.2,0,323.4,-175.2,0).s().p("AgGgFIANAAIgCAJIgLACg");
	this.shape_483.setTransform(908.3,169.8,1.25,1.25);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,6.5).s().p("AgqAfQAYgOAlgZIAGgPIAGgTIAMgEIAAAXIAAARQg/AYgQAdQgFgHgBgJg");
	this.shape_484.setTransform(886,176,1.25,1.25);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.rf(["#EC5D33","#C42C23","#41252D"],[0,0.494,1],0,0,0,0,0,2.6).s().p("AAAATIgEgOIgGgZIAVADIAAAYIAAAOIgLgCg");
	this.shape_485.setTransform(949.2,167.8,1.25,1.25);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.rf(["#ECDB43","#F2802E","#A13F2D"],[0,0.494,1],-15.4,-15.7,0,-15.4,-15.7,64.8).s().p("AAVCeQhaAAhNgNIgSgDQg1gJgugQIgYgIQgNgEgTgIIgGgDIgTgJIgEgDQgSgKgXgPQgpgcgOgZIAAgHQgIgqBngtQBngtBmgQIAAAEIgBAHQhPALhAAbQh4AxAAAqQAAAoAmAXIAbAQQAdAPAkARQAoASBMALIA5AGQB1AMAfgBIABAAQAhgCCxgTQBGgQA5gUQAjgMAegOQgLAIgPAJQgKAHgOAGIgRAHQglAQg5AQIgCAAIgUAFIgKACQhOARh0ACIgQAAIgLAAIgLAAgAFXhjQhigfhdgJIgDgSQB0ALBUAiQAzAVAgAYQgqgSgvgOg");
	this.shape_486.setTransform(928.2,180.5,1.25,1.25);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.rf(["#BD8E2E","#7A3732","#000033"],[0,0.604,1],-5.5,-0.3,0,-5.5,-0.3,23).s().p("AAaDDIguAlIgFgMQAYgnAVgyQAHAHAHABQAKAAAKgaQAHgTADgQQAEgbAAgjIgBgOIAJg6IABgfIAAgsQgGACgLgHIgLgIQgDAEgHAEQgKAFgLAAQgKAAgIgGIAAgIIAAgJIAAAAIgCAQQgGgEgGgGIgLALIgTAAIgDAAIgEgzIgBAAIAAAHIABAsQgQgBgGgEQgJgEgFgRQgFALgYAIIgJADIgCgQIgDgiIALgIQASgOAEgJQAMAUAYAAQAMAAAHgHQAGgGAAgJIABgBIAMAJQAJAGAIAAQAbAAAMgZQAEALAMAKQAPAOARABQAJAAAGgIIABAAQgEAMARAQIAMBUQAJBGAABGQAABQgBAOQgBASgGAlIgSAeIgBgBQghgqgHADQAAAHgIAUQgIAVgGAEgAAWB+IANgdQAWg1AHgbQAAAjgEAXQgEATgGARQgJAXgHAAQgGAAgGgIg");
	this.shape_487.setTransform(925.3,157.4,1.25,1.25);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.rf(["#B97333","#682233","#000033"],[0,0.604,1],-9.9,2.8,0,-9.9,2.8,23).s().p("ABnD0QgJgWgHgMIgJAPQAHglABgSQABgOAAhQQAAhIgJhEIgMhUQgRgQADgLIgBAAQgFAHgKAAQgRAAgOgOQgKgLgFgLQgLAZgdAAQgIAAgJgGIgNgIIgBABQAAAIgFAGQgIAHgMAAQgXAAgMgUQgEAJgSAOIgLAIIgDgcIgCgKIgDgQQARAAAOgQQAGgFACgGIADgEIABACQANAPAYAAQAZAAAKgZIACgKIADABQAKAGAPAAQATAAANgHIABAEQALAYAXAAQANAAAOgKIACAGIAEAKQAPAZAcAAIAHgBIgBAJQgDAjAAAlIAAAGQAAAaACAdIACAQQAEAsAIAvIADANIAEASIADASIAGAbIAEAOQAHAeAIAZQALAfAMAXQgYAQgGACQAAgFgGgjIgBAAQgJAEgIAQQgJAPABAIQgLgDgHgRgAgWCiQgOgSgLg1QgIgogDgoQAAgXAFgqIAHg1IACgQIABAAIAAAJIgBAIQgLBWAAARQADArAIAqQAKA6AOASQAGAHAGAAQAHAAAHgXQAGgRAEgTQAEgXAAgjIgEg4QgGg4gKAAQgMAAgDAuIgCAsQABAaAHAeQgIgHgDgSQAAgGAAgYIABgvQAFgwANAAQAPAAAHA6IACArIABAPQAAAigEAcQgEAQgHASQgJAagIAAQgHAAgHgIgAhjCUQAJhBgBgwIgBgsIAAg4IgDgpIgCgsIABgGIABAAIAEAyIADBlIACAlQAAAsgLBIg");
	this.shape_488.setTransform(930.8,153.5,1.25,1.25);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.rf(["#CCC631","#A45332","#402032"],[0,0.604,1],5.4,-1.6,0,5.4,-1.6,23).s().p("AgZB2IAFgbIACgMIAEgeIACgaIAAgEQACgbAAgeIAAgWIAAgbIgEgwIABgHIAAgBQANAVAAAwQAAA1AAAUIAggjIAAAJQgHAXgOAiQgLAeAAAEQARAyAAAXIAAACQgFgKgUgUQgCACgQAYIgFAJIAGgag");
	this.shape_489.setTransform(911.6,159,1.25,1.25);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.rf(["#FF9538","#729C23","#43741E","#4A2A3F"],[0,0.298,0.635,1],-17,-21.8,0,-17,-21.8,91.9).s().p("AiRFhIgHgKQgWAWgmAAQgfAAgRgfQgJgSgCgUQgLAAgPAKQgPAJgMAAQggAAgQgUQgOgRABgbIgCgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIgoAFQhGAAgqgyQgIgKgHgKQgagqgBg7IABgWQAHAqAfAeQAoAmAyAAQARAAAZgMQAAAPAHAMQAHAPAPAAQAJAAAJgFQALgHAEgLQgEAYARAOQAOAMATAAQAOAAAGgGQAFgEAMgOIAAgDQAEAZAIAJQAJALASAAQATAAAGgPQADgHACgZQAJAJALAMQAJAIAKAAQAPAAAGgHQAGgGADgVQANAIANABIACALIADAbIACAiIACAQIACAUIAFAwIAAAbQgjgCgVgfgAC5FTQgCgdAAgaIAAgGQAAgmADgjIABgIIgHABQgcAAgPgZIgEgKQAIgIAJgNQAMAMAEACQAEADAKAAQAnAAAYgsQAVgkgEgZQADAFALAEQAJADAHAAQAfAAAIgYQAEgLgBgbQAFADAKAIQADAEALAAQAQAAAJgKQAKgJgBgQIAAgOQgBgHgCgEQAEAEAdAEIgDgEQAcgJANgWQAMgSAAgZQgBgUgFgMQgHgOgMAAQAxgKAggrIAFgFQgCgfgNgSQgMgSgQAEQAHgEACgMIAAgYQABgTgIgKQgLgRgggJIgSgFIAJgDQAJgEAIAAQAwAAAjA7QALATAHAUQAIAXAEAZIAAAAQAFACAAALQAAAFgDAGIABAUQAAA2gPAbQgGALgjAkIAAACQAgAJASAcQAPAZAAAdQABAVgLAKQgTANgSAPIARAaQAHANAAAUQAAAMgLARQgWAkgpAAQgPAAgZgNQAOAMgUAlQgUAlgcAAQgJAAgOgFQgOgFgHgEQALAaghAgQgjAigrAAQgoAAgZgVg");
	this.shape_490.setTransform(921.6,103,1.25,1.25);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.rf(["#F5AA3A","#8EB12A","#588C12","#644335"],[0,0.298,0.635,1],-14.6,-10.7,0,-14.6,-10.7,91.9).s().p("AjoFaQgIgJgEgZIAAADQgMAPgFADQgGAGgOAAQgTAAgOgMQgRgOADgYQgEAMgKAGQgJAGgJgBQgPAAgIgOQgHgNABgPQgaAMgQAAQgzAAgngmQgggegGgqQAEglARgdQAJgQANgNQALgLALgIIgFAKQgEAIAAAIQAAAeAeAQQAZAMAiAAQAZAAAMgGQAHgEAagXIADgDQACA7A0AAQAVAAARgTQAJgIAMgXIALAiQAHAMAVAAQAoAAAQgeQALgTABgnQAPAIANAKQAKAGATAAIACAAQAXAAAWgYQAOgQACgMQABAFACAGQAHAKALAAQAUAAAKgYQAHgQAAgOQAAgRgKgIIAAgCQAPAOAjAAQAeAAAQgMQAMgJgBgMQAAgLgEgPQAIAIAKAHQAUAOATAAQASgBAUgTQAUgWgGgSQAJAQADAEQAKALAQAAQAhAAATggQAOgWAAgZQAAgdgdgSQgZgRgdAAQAfgDANgOQAIgLACgRIAAgKQAAgbgTgaQgQgXgOgEQAGgCABgCIAAgFQAAgFgCgEIAFAAQAigBANAuIAWgPQAPgJAZgBQAjAAANAhQAHAPAAAWIASAEQAgAJALARQAHAKAAATIgBAYQgBAMgIAFQAQgFANASQANATABAeIgEAFQggArgxAKQAMABAHAOQAFALAAAUQAAAXgMASQgNAWgbAKIADADQgdgEgFgEQADAFABAGIAAAOQAAASgJAJQgKAKgPAAQgMAAgDgDQgKgJgEgDQABAbgFALQgIAYgeAAQgHABgKgEQgKgEgDgFQADAagUAjQgZAsgmAAQgKAAgFgDQgDgBgNgMQgIAMgIAIIgDgGQgOAJgNAAQgWABgOgYIgBgEQgMAHgTgBQgQABgJgHIgDAAIgDAKQgKAZgXAAQgXAAgOgPIgBgCIgCAEQgCAGgGAEQgOARgSAAIAEAQQgNgBgNgJQgEAVgFAHQgGAGgPAAQgLAAgJgIQgKgMgKgJQgBAZgDAHQgHAPgSAAQgSAAgJgLgAACEPIAAAAIAAgBIAAABg");
	this.shape_491.setTransform(918.5,89.1,1.25,1.25);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.3,1.3,0,-1.3,1.3,23).s().p("Ah2DnQAKgRAIghIACgIIAFgIQAQgZACgCQAWAUAFAKIAAgBQAAgYgTgyQAAgEANgeQAOgjAHgXIAAgIIggAiQgCgUACg0QgBgwgOgUIAAABIgBAHIgCgUIAJgDQAYgHAFgMQAFARAJAFQAGAEAQAAIADApIAAA4IACAsQAAAwgIBBIABAAQALhIAAgsIgBglIgEhlIADAAIARAAIALgLQAGAGAHAEIgHA1QgGAqAAAZQADAmAIAoQALA2AOARQgXAygYAoIgLgXIgXASIgVARIgQgmQgGAGgKARQgKASgBAGIgjgbgAAoBDQgHgqgDgrQAAgQALhWQAJAFAKAAQALAAAKgFQAHgEADgEIALAIQALAHAGgCIAAAsIgBAfIgIA7IgDgsQgHg6gQAAQgOAAgEAwIgCAvQAAAYABAGQACASAJAHQgIgeAAgaIABgsQAEguAMAAQALAAAGA4IAEA4QgHAcgWA1IgNAdQgNgSgLg6gAgIkBIAAAAIAAAAIAAAAg");
	this.shape_492.setTransform(920,155.3,1.25,1.25);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,1.9,0,0.6,1.9,6.3).s().p("AgjAAIAAgaQAzAUAUAVIgEAEIgIAIQgfgRgcgKg");
	this.shape_493.setTransform(976.4,173.9,1.25,1.25);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.7,1.2,0,0.7,1.2,9.6).s().p("AA1AZQgogNhZgNIAAgaQBKAKA7ARIAUAGIgPAWIgJgDg");
	this.shape_494.setTransform(960.4,169,1.25,1.25);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],323.6,-177.3,0,323.6,-177.3,0).s().p("AgIgLIARgDIgEAcIgNABg");
	this.shape_495.setTransform(908.5,167.1,1.25,1.25);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.6,0.6,0,0.6,0.6,6.5).s().p("AgkAhQAAgkBJghIgHASIgFAQQglAZgYAOIAAgEg");
	this.shape_496.setTransform(885.3,175.3,1.25,1.25);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.rf(["#EC773A","#C43C20","#54252D"],[0,0.494,1],0.9,0.7,0,0.9,0.7,7.5).s().p("Ag1AEIAigKQAhgMAogIIgLAaQg2AGgqAVg");
	this.shape_497.setTransform(898.2,169.5,1.25,1.25);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],-19,-15.6,0,-19,-15.6,64.8).s().p("AiMCIIg6gGQhLgLgogSQgkgRgdgPIgcgQQgmgXABgoQAAgqB3gxQBBgbBOgLIABgHIgCAaIgTADIgSAEQgoAIgkALIgiANIgLAEQhLAhAAAnIAAADQABAHAEAHIACAEQAWAhBaAaQB3AiCpAAQChAAB0ggIAJgCQBegbAUgkQAGgJAAgIIAAgGQgCgMgKgMQgUgXg1gUIgNgFIgVgHQg9gShKgKIgXgDIgEgRQBdAKBhAeQAvAPAqARQAtAiADAmIAAABIAAAEIgDAKQgCAGgIAPIgDAEQgFAIgNAKQgeAOgiAMQg6AUhFAQQiyATghACIAAAAIgHAAQghAAhsgLg");
	this.shape_498.setTransform(932.6,180.4,1.25,1.25);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0,0.5,0,0,0.5,11.4).s().p("AhVARQADgMAHgMQBLgEBagVQAAAQgHATIgGANQhEAPhiACQAAgFAEgLg");
	this.shape_499.setTransform(948.5,203.2,1.25,1.25);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.4,0.3,0,0.4,0.3,11.4).s().p("AA1AbQhMgBhAgHIAAgDQAAgPAKgbQBGAKBMADIATABIgFASIgGAVIgYAAg");
	this.shape_500.setTransform(922.3,204,1.25,1.25);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.6,-2,0,0.6,-2,9.5).s().p("AgbARIACgLIADgIQAfgNATgMIgBAFQgBAHgEAOIgCADIguAaIgBgLg");
	this.shape_501.setTransform(982.3,193.7,1.25,1.25);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.5,0.1,0,0.5,0.1,9).s().p("AgrgIIALgDQAvgNAkgNIgCANIgEAYQgtAUglAOIgNAEQAAgTAHgbg");
	this.shape_502.setTransform(968.9,199.4,1.25,1.25);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.5,-0.1,0,0.5,-0.1,12.5).s().p("AgmARQgYgJgVgIIADgSQADgOAEgLQArASBWASIAcAFIgGAfIgEAPQhBgKgvgRg");
	this.shape_503.setTransform(896.8,200.1,1.25,1.25);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.rf(["#ECBC4F","#F55C26","#81252D"],[0,0.494,1],0.1,-0.9,0,0.1,-0.9,9.8).s().p("AgogCIANgnQAQAOAMAIQANAIAbAMIgKAaIgGAPQglgVgcgXg");
	this.shape_504.setTransform(878.6,192.7,1.25,1.25);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.rf(["#ECE75D","#A1DB4A","#7DAD29","#6D772F"],[0,0.298,0.635,1],-0.5,14.8,0,-0.5,14.8,91.9).s().p("AgZDLQgNgNAAgWQAAgJAEgQIADgSQgHAagpAcQgsAdgqAAQgRAAgOgHQgUgJABgRQAAgTAJgPQADgGASgUIgCAAQgKAFgJAAIgMAAQgJgCgBgLQABgQAUgWQARgTAUgNQgJABgJAFQgNAFgHAAQgdAAgTgLQgXgNAAgYQAAgfAPgcIABgBQASgXAUgTQAZgVApgaQAZgPAQgFIBQgbQAegKA0gFIAagDIAIAAIAQAHQATAKgBANQAAARgLAJQgFAFgfASIACAAQAEgCARgEQAUgFANAAQAwAAATAJQAWALgBAcQAAAcgUAXQgYAagoAIQAVgDAPALQAQAKAAAXQAAAagRAXQgYAfgrAAQgUAAgKgKQANAggTApQgUAsgjAAQgQAAgLgMgAgfB9IAAAAIAAgCIAAACIAAAAgAiqAlIAEAAIAAgCIgEACIAAAAgADUBVQgCgGgBgMQAAgNABgCQACgGAZgNQAMgIANAAQAMAAAFAQIACARQgBAkg1AAQgLAAgEgJg");
	this.shape_505.setTransform(900.9,57.1,1.25,1.25);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.rf(["#F5C646","#95CD38","#588C12","#644335"],[0,0.298,0.635,1],-43.7,19.5,0,-43.7,19.5,91.9).s().p("AAYAvQAFgJAAgKQAAgggfgWQgPgJgZgJQAOgJAcgBQAAAFAAAEIAAAGQAAACgFABQAMAEARAXQATAZAAAaIgBALIgFgBQgJAAgJADIAFgIg");
	this.shape_506.setTransform(955,51.3,1.25,1.25);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.rf(["#ECD451","#A1CD38","#648C12","#645633"],[0,0.298,0.635,1],-6.9,4.6,0,-6.9,4.6,91.9).s().p("AkJEEIgCACQgbAXgHAEQgLAGgaAAQgiAAgYgMQgfgPAAgfQAAgHAFgJIAFgKQAMgIAMgFIgegdQgQgSAAgVQABgVATgWQATgVAYgIQgIgNgQgQQgKgJAAgRQAAgXAQgRQAQgRAcgFQgIgGgBgEIgBgSQAAgdAggtQgPAcAAAfQAAAZAXAOQATALAdAAQAHAAANgGQAJgEAJgBQgUANgRASQgUAXgBANQABALAJADIAMAAQAJAAAKgFIACAAQgSAUgDAGQgJAPAAASQgBARAUAJQAOAHARAAQAqAAAsgdQApgbAHgaIgDASQgEAPAAAKQAAAWANANQALAMASAAQAjAAAUgsQARgpgMgeQAJAIAUAAQArAAAYgdQARgXAAgbQAAgXgQgMQgPgLgVADQAogIAYgZQAUgXAAgcQABgdgWgKQgTgJgwAAQgNAAgUAEQgRAEgEADIgCAAQAfgSAFgFQALgKAAgQQABgOgTgJIgQgHIAdgBQBrAABJAuQBIAuAFBFIADAAQAGgbAPgKIABAAQAZAIAOAKQAhAWAAAhQAAALgEAIIgGAJQAKgDAJAAIAFABQgCARgJAKQgNAOgeADQAcAAAaARQAcASABAbQgBAZgOAXQgSAfgiAAQgPAAgKgLQgEgEgJgQQAHATgUAVQgUAUgTAAQgSAAgVgOQgJgGgJgJQAFAPAAALQAAANgMAJQgPALgfAAQgjAAgOgOIAAACQAKAIAAATQAAAOgHAQQgLAYgTAAQgLAAgHgKQgEgFgCgGQgCAMgOAQQgWAYgXAAIgCAAQgRAAgJgGQgNgKgPgIQgCAngLATQgQAegoAAQgVAAgHgLIgKgjQgNAXgIAIQgRATgWAAQg0AAgCg6gACthDQgZANgCAFQgBADAAAMQABANACAFQAEAKALAAQA1AAABglIgCgQQgFgQgMAAQgNAAgMAIgAhfAVIAAABIAAABIAAgCgAjmhCIAAADIgEAAIAEgDgAj6jrIAbgRQgpAagZAWQASgSAVgNgAAIk9QACgBAEACIgIAAIACgBgAAOk8IAAAAg");
	this.shape_507.setTransform(908.9,69.9,1.25,1.25);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.rf(["#FFA110","#9BC21E","#66AD1C","#569120"],[0.008,0.486,0.863,1],-21.1,-6.6,0,-21.1,-6.6,53.4).s().p("AgdBHIgLgSQgXASgPAFQgEgCgIgOQgHgNgFgDQgCADgPAMQgOANgCADQgKgUgJgLQgDADgKATQgLATgDABIgjgqQABADgEAHIAAAAQgBgKgFgPQgFgTgGgGIAAgBIAPANIALAIIAjAcQABgHAKgRQAKgRAHgHIAPAmIAWgRIAYgRIALAWIAGAMIAvgmIARAqQAFgEAGgVQAIgUAAgFQAHgDAiAoIABABIARgfIAJgMQAGAKAJAVQAHARALADQAAgIAIgOQAJgQAIgEIABAAQAHAiAAAGQAGgCAXgQIAFgEQAbgSAIgEQgJANgfAdQgbAZgFACQgHgYgFgCIgBACIgBAAQAAAFgKAOIgLAPQgYgdgIgKIgIARQgGAOgCAFQgDgBgNgQQgPgSgJgGQgGAOgLARQgNAWgLACQgCgBgIgOgAEAAAQgTgNg8gSIgWAAQgIgYgHgeIANABQBKAKA9ATIAiALQBAAYAPAbQgUAjheAbIgJACQAHgugdgZgAmQAHQAQgcBBgaIAigMQArgPAygIIANgCIgFAbIgGAaIgCAHIgCAAQglAAgzAGQg2AGg/AWIgBgDg");
	this.shape_508.setTransform(931.5,181.1,1.25,1.25);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.rf(["#FFBB10","#AADE1E","#7EBD28","#75A02B"],[0.008,0.486,0.863,1],-15.1,-10.2,0,-15.1,-10.2,53.4).s().p("AjjAhQhZgagXgfQA/gYA1gGQA0gFAkAAIADAAQgIAhgKAQIgLgIIgPgMIAAABQAGAFAFATQAFANABAKIAAAAQAEgHgBgDIAjAqQADgBAKgSQALgUADgDQAJAMAKATQACgDAOgNQAPgMACgDQAFADAHANQAIAOAEADQAPgFAUgTIALASQAJAOACABQALgCAPgWQALgRAFgLQAKADAPASQANAQADABQABgFAHgOIAIgRQAHAKAZAdIALgPQAKgOAAgFIABAAIABgCQAFACAHAZQAFgCAbgaQAfgbAIgPQgHAGgbASIgFAEQgMgXgKgfIAWAAQA8ARATAPQAdAZgHAsQh0AhijAAQingBh3gig");
	this.shape_509.setTransform(924,185.6,1.25,1.25);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.3,-4.6,0,4.3,-4.6,14.2).s().p("AgOBCQgjgfgTgqQgPgkgBgYIATAFQAUAGAWADQAPAtA0AqQAVARATAKQggAHghAAQgSAAgPgCg");
	this.shape_510.setTransform(818.7,327);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.4,-1,0,-2,-1,8.7).s().p("AgeAsQABgSADgMQAGgaAPgOIAKgGIAZgKIABAAIgfAYQgMAKgEAEIgEAGQgEAJgCAPIAAAJIAAACIAAAHIgEAAg");
	this.shape_511.setTransform(827,311.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.7,0.1,0,4.2,0.1,8.7).s().p("AgDA5IgGgEIgEgBIAEgPQABgMgFgMIgEgKIgKgOQgOgRgUgFIASAAIABAAIgCgIIgFgJIAAgBIAcAVIAVARIA8gtIACgCQgDADgFANIAAABIABAAIAEgBIgcAaQgRASgJAKQgPgKgBgFIgBAAQACAFAJAXQADAQAAAHIgCAPIgDgEgAATArIAAgIIAAACQAAAEgFAJIgBAAQgDgDAAgIIgBgMIABgKIADAZIAAABQAGgKAAgPIACgBIAAAOIACAMIAEgQIAIgOQgKAegBAHIgCABQgDgEAAgEgAAdABIAGAAIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAg");
	this.shape_512.setTransform(820.8,310);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.5,-0.7,0,1,-0.6,8.7).s().p("AgPA0IgEgBQgDAAgCADIgDADQAAgCgDgCIACgPQAAgHgFgQQgJgVgCgHIABAAQABAFARAKQAJgKAQgSIAbgaIARgEIABAAIgaAXQgLAKgCAFIAFABIAMgGQgPAOgGAbQgCAMAAARIgGABIgHAJQAAgFgCAAgAgLAjQAAAEADAEIACgBQABgHAIgeIgGAOIgEAQIgCgMIAAgOIgCABQAAAPgGAKIAAgBIgDgZIgBAKIABAMQAAAIADADIABAAQAFgJAAgEIAAgCIAAAIgAABgEIACgBIgEAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAg");
	this.shape_513.setTransform(824,310.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.8,0,-3,-2.8,14.2).s().p("AgbAzQg2grgPgsQAUACAXAAQBAAAAugTIAYgMIAIgFIAIgIIgkCPQgYAJgaAFQgRgKgVgSg");
	this.shape_514.setTransform(826,325.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.6,-1.4,0,-6,-1.3,14.3).s().p("AgNAGIgGgGIAHgFQAGgEAGAAQAFAAAIAFQAHAEAAABQAAADgHAEQgFACgIAAQgIAAgFgEg");
	this.shape_515.setTransform(830.5,318);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.8,-1.5,0,1.4,-1.5,14.3).s().p("AhCAhQgWgCgUgGQgBgHAAgIQAAgXAMgNIADAAQAMAAAMgBIAOgCIANAAIAIACQgEgBgHABQgIABgCACIgCABQgCABgEAHIgHANIAAABIAPgIQAHgCAGAAQAFAAAIAIIAHAEIAFADIAAgGQACgCAIAAQAEAAADACIAFAGQAAgFADgDQACgDADgCQADgBALAAIAEADIAGABIgHgJIgEgEIgBgBIgFgBIgIgDIAAgHIAAgBQAIABAOgDIALAHQALAGAHAAQAHAAAFgCIAIgCQAIAAAIAIQALAIABANIgXAMQgvAThAAAQgWAAgUgCgAA8gHIgGAGIAGAFQAFAEAIAAQAJAAAGgCQAGgEAAgCQAAgBgHgFQgHgFgGAAQgHAAgHAEg");
	this.shape_516.setTransform(823,318.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.7).s().p("AgHgCIAGgFQAEgEAEgGIABAIQAAAJgIAKIgFAIQACgMgEgIg");
	this.shape_517.setTransform(835.6,316.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.2,0,1.4,2.2,2.7).s().p("AgMAAQALgBAEgHQACgCAAgDQAGAHACAGQgEAFgGAEIgEAEQgDgHgIgGg");
	this.shape_518.setTransform(835,314.5);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.4,6.2,0,-8.4,6.2,25.8).s().p("ABNBTQgHAAgOADIAKgMQAIgMAAgQQAAgXgTAAQgMAAgGAGIgHAQIAAgBQgCgGgIgCQgGgDgFABIAAgBIAIgMQAGgKAAgJQAAgGgEgFQgEgHgHAAQgIAAgBAJQgDAGAAAKQgBgFgGgDQgDgBgGAAQgEAAgEACIAAAAQAFgNAAgNQAAgUgPgNQgQgPgXAAQgOAAgKAEIAFgFQANgNARAAQAUAAAWATQAVAUgGARQADgHAKgFQAKgEAIAAQAPAAAIAHQAHAIAAANQAAALgGAHQgCAEgHAIIAAABQACgCAGgDQAHgEAEAAQAVAAAIAOQAGAJAAASQAAALgLAMQgFAGgFADIAHgBQAMAAANALQgLgEgOAAg");
	this.shape_519.setTransform(834.3,287.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.4,-0.5,0,-3.4,-0.5,25.8).s().p("AA/CNQgHgIAAgOIACgRIADgJIgFAEQgGAFgHAAQgIAAgGgFQgHgFAAgLQAAgHAHgHQAJgIgBgFQABgGgHgFQgHgGgOAAQgKAAgDAHIgDAFQAAgGgEgGQgGgLgNAAQgSABgIAKQgGAIAAAPIAAAAQgCgGgHgHQgJgIgIAAQgMAAgFAVQgEAVgKgBQgKAAgHgEQgIgHAAgMQAAgHACgHQADgGAEgCIgBAAQgMADgJgFQgIgEAAgMQAAgKAPgIIANgIQgFABgEgDQgLgFAAgMQAAgPAXgNIAtgUIgBAAQgMgBgLgFQgVgJAAgbQAAgNAHgLIAAgBQAHgDAIABQARgBASAKQAJADAGAFQADAEABAEIABADIAAgBIgBgCQABgHAFgIQALgEAOABQAWAAAOAOQAPAOAAATQAAANgFAPIAAAAQAEgDAEAAQAGAAADACQAGADABAFQAAgMADgFQADgKAIABQAHAAAFAGQADAGAAAHQAAAJgGAKIgHANIAAAAQAEgBAHADQAHACADAGIAAABIAHgQQAFgFANgBQASAAABAXQgBAQgHAKIgKAMQANgCAHgBQAPAAAKAFIABAAQAMAMAAAPIgBAEQgBAHgIAIQgDACgKAAQgHAAgGgCIgHgFIAFAPQADANAAAIQAAAHgEAFQgGAFgGAAQgFAAgCgCIgFgBQABAGgIAOQgKAPgJAAQgIgBgFgFg");
	this.shape_520.setTransform(829.3,294.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],12.1,-2.5,0,12.1,-2.5,14.2).s().p("AgWBFIgnibQAEAKAKAJQAMAKAUAHQAEADAGABQAAAYANAiQAUAsAiAfQgqgFgqgNg");
	this.shape_521.setTransform(810.9,324.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.3,-0.2,0,3.9,-0.1,14.3).s().p("AhmAhQgGgBgEgCQgUgIgLgJQgBgPAJgMQAHgMAQgJQANAOAXAAQAGAAALgFQAKgEAEgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIABACQACAEADACIAMAAQANAAACgCQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIgDAPIADABIAHADIADAFQACACAAACIAEgDQABgDAEAAIAEABQACAAAAAFIAHgKIAFAAIAEAAIAIACIAFACIABABIAEAEIAHAHIgGgBIgEgDQgLAAgDABQgDABgCADQgDAEAAAGIgHgHQgDgDgEAAQgIAAgCADIAAAIIgFgEIgFgGQgIgHgFAAQgGAAgHACIgPAIIAAgBIAHgLQAEgIACgBIACgBQACgBAIgBQAHgCAEACIgIgCIgNAAIgOACQgMABgMAAIgDAAQgMAMAAAXQAAAJABAHIgTgGgAB7gDQgIgIgIAAIgIABQgFACgHAAQgHAAgLgFIgLgHQgOADgIgCIAAgJIAGgCIAEgFQACAFAJADQAGADAHAAQATAAADgOQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAFAPAVAAIALgBQAIAHADAHQAEAIgCANIgJAFQgBgPgLgGg");
	this.shape_522.setTransform(820.5,316.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.7,0,2.8,-2.7,3.6).s().p("AgJAIIgBgFIAAgDQAAgNALgNIAEAPIAGALQgIALAAAQQgIgJgEgKg");
	this.shape_523.setTransform(805.7,315.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,-0.5,0,1,-0.5,3.6).s().p("AgLAIIgFgMQAJgIALgHQACAJAHAIIADACQgPAIgGAMIgGgMg");
	this.shape_524.setTransform(807.5,313.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.8).s().p("ABsCbQgMgHAAgGQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgFAGgJAAQgDAAgFgCQgHgDgDgGIgFAKQgDADgJAAQgGAAgFgCQgFgEAAgFQAAgIAKgHQAKgHAAgGQAAgJgEgEQgEgDgJAAQgDAAgEgKQgFgKgKAAQgKAAgGAHQgDAFgBAIIgCAAIAAgBQAFgNADgDIgCACIg8AtIgXgRQgBgNgEgFQgFgKgIAAQgFAAgEADQgDAEgEAKIAAgCQgGgLgJgEQgIgDAAAFQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAAgBQgIABgDAKQgCAMgKAAQgJAAgIgHQgHgGgBgLQABgHAIgJIAPgOIgBAAQgFACgFgGQgHgHAAgPQAAgNAFgFIAQgKQgKAAgEgHQgFgGAAgJQAAgKAHgGQADgEANgKIgBAAQgHABgHgFQgIgGAAgNQAAgTAHgNQANgIAPAAQAIAAAJAGIALAHIABACIAAgBIgBgBQgDgFgBgFQgDgHAAgIQAAgQAMgKQAEgEAFgDIAAACQgHALAAANQAAAaAVAKQALAFAMAAIABAAIgtAUQgXANAAAPQAAANALAEQAEADAFgBIgNAIQgPAKAAAKQAAAKAIAEQAJAFAMgDIABAAQgEACgDAGQgCAHAAAHQAAANAIAGQAHAFAKAAQAKAAAEgVQAFgVAMAAQAJAAAIAIQAHAHACAGIAAAAQAAgPAGgHQAIgLASAAQAMAAAFAKQAEAGAAAGIADgFQAFgGAKAAQAOAAAHAFQAHAFgBAGQABAFgJAIQgHAIAAAHQAAAKAHAFQAGAFAIAAQAHAAAGgFIAFgEIgDAJIgCARQAAAOAHAIQAFAGAIAAQAJAAAKgPQAIgOgBgGIAFABQACACAFAAQAGAAAGgFQAEgEAAgIQAAgHgDgOIgFgPIAHAFQAGACAHAAQAKAAADgCIAAAAQgJAJgHABIAAAAQAVADAIAFQAJAEABANQAAAOgOAJQgMAIgUACQACACABADIAAAHQAAAQgLAMQgEAEgDADQgOgCgMgGg");
	this.shape_525.setTransform(827.6,295.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.5,-6.1,0,4.5,-6.1,25.8).s().p("ABWCFQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQgEANgSAAQgIAAgGgCQgJgDgBgFIgEAEIgGADQABgPAFgJIAEgIQADgEAOgKIAggYIgBAAIgZAKIgMAGIgMAFIgFgBQACgFALgKIAagXIgBAAIgRAEIgEABQABgIAEgFQAHgHALAAQAKABAEAJQAEALAEAAQAJAAAEADQAEADAAAJQAAAGgKAIQgKAGAAAIQAAAGAFADQAFADAGAAQAJAAADgEIAFgKQADAGAHADQAFACADAAQAIABAGgHQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAHAMAGQALAHAOABQgIAFgJAAQgLAAgIgEIgNgIQAAAIgEAHQgBADgCABQgGAHgKACIgMABQgUAAgGgOgAh3CGIgEgEQgGgHgDgJQgCgGAAgHQgHACgFAAQgZAAgOgYQgKgTAAgZQAAgdAYgRQAWgTAQAEIAAAAQgPgIgFgEQgHgGAAgOQAAgMAIgGQAGgDAHAAQgFgCgCgHQgDgHAAgKQAAgPAUgRQAGgGAGgDQgGAMAAATQAAANAIAGQAGAGAIgCIABABQgNAJgEAEQgGAHAAAJQAAAJAEAHQAFAGAKAAIgQANQgFAEAAANQAAAOAGAGQAGAGAFgCIAAAAIgOAOQgJAKAAAGQAAALAIAHQAHAGAKAAQAKAAACgMQADgJAHgCIAAABQAAABAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgFAIAEQAJADAGAMIAAABQADgKAEgEQAEgDAFAAQAHAAAGALQADAEACANIgcgUIAAABIAFAJIACAIIgBAAIgSgBQAUAFAOARIAKAQIAEAKQAFAMgBANQgBAAAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgCABgNAAIgNAAQgDgBgCgFIAAgCQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgEAEgJAEQgMAEgGAAQgWAAgNgNg");
	this.shape_526.setTransform(821.3,299.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_527.setTransform(912.4,311.4,0.62,0.474,0,-7.3,-7.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_528.setTransform(888.7,297.3,0.62,0.474,0,-7.3,-7.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_529.setTransform(873.4,312.9,0.62,0.474,0,-7.3,-7.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_530.setTransform(883.2,313.1,0.62,0.474,0,-7.3,-7.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_531.setTransform(881,308.9,0.62,0.474,0,-7.3,-7.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_532.setTransform(891.7,310.2,0.62,0.474,0,-7.3,-7.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_533.setTransform(879.1,326.6,0.62,0.474,0,-7.3,-7.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_534.setTransform(910.2,320.7,0.62,0.474,0,-7.3,-7.9);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_535.setTransform(891.3,305.1,0.62,0.474,0,-7.3,-7.9);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_536.setTransform(875.6,321.2,0.62,0.474,0,-7.3,-7.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_537.setTransform(909.6,317.1,0.62,0.474,0,-7.3,-7.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_538.setTransform(887.1,304,0.62,0.474,0,-7.3,-7.9);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_539.setTransform(888.1,301.3,0.62,0.474,0,-7.3,-7.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_540.setTransform(908.8,316.6,0.62,0.474,0,-7.3,-7.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_541.setTransform(874.1,315.7,0.62,0.474,0,-7.3,-7.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_542.setTransform(888.5,299.4,0.62,0.474,0,-7.3,-7.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-6.8,-5.2,0,-6.8,-5.2,15.6).s().p("AgRAJQgngJgPADIAZggQAtAFAeAKQAlANAHAMQgDALgPAIQgigOgmgHg");
	this.shape_543.setTransform(875.1,272.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-14.6,-6,0,-14.6,-6,22.9).s().p("AghCCQAZgyAHg4QAHg3ABgrIgBgkIALgFQAPgJADgKIAAAOIAAAtIABCEIAAAaIAAAfQgkANgjAIIACgFg");
	this.shape_544.setTransform(878.8,287.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],8.1,-0.9,0,8.1,-0.9,11.9).s().p("AgIBnIAAgaQAIAAAIgEIgBASIgBALIgNABIgBAAgAgJhkQAHAAALgDIABAGIAAAjIgGABIgNAGg");
	this.shape_545.setTransform(883.4,285);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],4.2,-0.7,0,4.2,-0.7,11.9).s().p("AgeBdIABgSQANgFAKgNIAFgGQATgeABgeQAAgXgIgOQgGgNgLgDIgGgBQgJAAgFADIgBgjIgBgGIADAAQASgCAHAAIAJABQgIAFgEAUQARADAHAKQAKANAAAbQAAAhgMAVQgNAYgGAJIgBAFIACAIQAEAFAGAIQgRANgZACIABgLg");
	this.shape_546.setTransform(887.3,284.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-0.2,-7.8,0,-0.2,-7.8,22.9).s().p("AiWBrIAPAAQAXAAAjgGQApgIAYgOQAPgJAjgWQAWgOAJgHQAGgLAEgLQAEgHANg0QAMgsABgOIAAgDIASgFQANgEAKgFIABAkQgBArgJA4QgHA3gZAzIgCAEQg4AMgzABIgJABQhJAAhEgXg");
	this.shape_547.setTransform(864.4,288.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],2.2,-7.4,0,2.2,-7.4,22.9).s().p("Ah+BvIgFgBIAAjcIAYAHQASAEAjAAIAqgBIABAAIAZABIAJAAQA7AAAtgKIAFgBIAAADQgBAOgLAsQgNAygEAJQgFALgFALQgJAGgWAPQgjAWgRAJQgWANgqAJQgiAFgXAAIgPAAg");
	this.shape_548.setTransform(862.1,288.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-0.9,-9.7,0,-0.9,-9.7,15.6).s().p("Ag3AOIACgCIAUgZQAbACAUAFQAZAFARAGQgtAJg5AAIgJAAg");
	this.shape_549.setTransform(869.2,276.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-4.9,-7.8,0,-4.9,-7.8,15.6).s().p("AgYALQgWgFgbgCIAQgTIAFgHQAPgCAlAIQAoAIAiAMIgLAFQgKAFgNAEIgSAEIgGACQgQgIgYgFg");
	this.shape_550.setTransform(873.1,275);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],3.2,-1.9,0,3.2,-1.9,14.9).s().p("AgigGQAxgPBHgBIgKANIgPAAQgkAAgSACQgWADhGAbQAIgSArgLg");
	this.shape_551.setTransform(855.1,269.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],2.4,-2.6,0,2.4,-2.6,8.2).s().p("AgJAAIAhgiIAXACQgVAYggAgIgEADQgLAEgKACIgPACIAlgjg");
	this.shape_552.setTransform(862,272.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-1.5,-3.3,0,-1.5,-3.3,8.2).s().p("AgzA0IAAgBIArgzIAegnIALgMIATABIgKANIgZAiIgFAFIgOAVIgUAbIgCACIgbAAg");
	this.shape_553.setTransform(866,273.1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],2.1,-3.2,0,2.1,-3.2,8.2).s().p("AgPA1IgdgDIgYgEIAJgKIAHgIIACAAIAQgCQAJgBALgEIAEgEQAhgfAVgYQAHgHAFgHQAHAAAGACIgLAMIgfAmIgpA0IAAABIgBAAg");
	this.shape_554.setTransform(862.4,273);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],2,-1.9,0,2,-1.9,8.2).s().p("Ag1ApIAIgKIAYgcIADgDIAUgbIAKgNIAHAAIAkABQgFAGgHAIIgXgCIghAgIgmAkIgCAAg");
	this.shape_555.setTransform(862.5,271.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-8.2,-3.6,0,-8.2,-3.6,15.6).s().p("AAQABQgegJgugFIAKgNQAhAEAZAIQA1AOAAAVQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIAAACQgHgPgkgMg");
	this.shape_556.setTransform(876.4,270.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],0.2,-3.4,0,0.2,-3.4,3.6).s().p("AgGAQIgIgFIAAgGIAAgBQABgGABgHIAGABQAKAAAIgHIADABIgGALQgDAFgFAFIgGAJg");
	this.shape_557.setTransform(837.8,277.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-0.1,-0.6,0,-0.1,-0.6,3.6).s().p("AgPARQABgHAEgFQAGgLAIgGIABgBQAIgGABACIACAMIAAACIgCAJIgCAGIgDgBQgIAHgKAAIgGgBgAgDgCQgEACAAAGQAAAHAHAAQAGAAAAgSIAAgHIgBAAIgIAKg");
	this.shape_558.setTransform(838.1,275);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0,-0.6,0,0,-0.6,3.6).s().p("AgGAGQAAgGADgCIAIgKIABAAIABAHQAAASgHAAQgGAAAAgHg");
	this.shape_559.setTransform(838,275);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-0.3,-5.4,0,-0.3,-5.4,7.8).s().p("AgNAXQALguAEgSIANAGIAABNIgcgTg");
	this.shape_560.setTransform(845,281.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],3.5,-4.2,0,3.5,-4.2,7.8).s().p("AASAgIgSgLIgngYIABAAIAIgJQAFgFADgHIAFgLIAXAOIANAJIAOgWIAHAFQgGASgLAvIgFgEg");
	this.shape_561.setTransform(841.1,279.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],2.7,-0.1,0,2.7,-0.1,7.8).s().p("AAAASIgYgOIACgEIACgLIAAgCIgCgMIARALIAeATIgNAVIgMgIg");
	this.shape_562.setTransform(841.9,275.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],3.8,-3,0,3.8,-3,14.9).s().p("AhQANIABgCQBGgbAVgDQATgCAjAAIAPAAIgWAbIgDAEIgYgBQgjAAg9ALIgQACg");
	this.shape_563.setTransform(854.6,271.1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],5,-5.7,0,5,-5.7,14.9).s().p("AhDAAIgBgCIAQgDQA8gLAlAAIAYABIgZAaIgZAAIhEAFQgOgIgEgIg");
	this.shape_564.setTransform(853.3,273.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],10.6,-5.5,0,10.6,-5.5,22.9).s().p("AhGB3IAAiBIAAhPIAAgnQAEAKAOAIIAFADQAMAGAQAFQASAFASADIAYAEIAeADIgqABQghAAgSgEIgZgHIAADcIgXgKg");
	this.shape_565.setTransform(853.6,286.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],5.3,-8.2,0,5.3,-8.2,14.9).s().p("AgNAFQgQgFgMgEIgFgDIBEgFIAZAAIgIAJIgGAGIgKAKQgUgDgQgFg");
	this.shape_566.setTransform(853,276.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],1.3,0,0,1.3,0,11.9).s().p("AgaBTIgFgIIADgFQAHgJANgYQAKgVAAghQAAgbgIgMQgIgLgSgDQAGgTAIgGQAPACAKAKQAaAWAAAwQAAA7ghAjQgGAJgKAGQgHgHgDgGgAAFg/QgCACAAADQAAAKAJATIAJAQIADACIABgIQAAgWgHgOQgFgNgFAAQgCAAgBAFg");
	this.shape_567.setTransform(890.2,284.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-0.1,4.1,0,-0.1,4.1,11.9).s().p("AAGAaIgGgRQgJgQAAgKQAAgDABgDQABgEADAAQAEAAAEAMQAGAPAAATIAAAJIgEgCg");
	this.shape_568.setTransform(891.7,280);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],4.3,-4.6,0,4.3,-4.6,14.2).s().p("AgOBCQgigfgUgqQgPgkAAgYIASAFQAUAGAXACQANAuA0AqQAVARAVAKQghAHghAAQgSAAgPgCg");
	this.shape_569.setTransform(900,565.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],-3,-2.8,0,-3,-2.8,14.2).s().p("AgcAzQg2grgNgsQAUACAVAAQBBAAAugUIAYgLIAIgFIAHgIIgkCPQgXAJgZAFQgTgKgVgSg");
	this.shape_570.setTransform(907.3,563.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],1.4,2.2,0,1.4,2.2,2.7).s().p("AgMAAQALgCAEgHQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAGAFACAHQgEAEgGAFIgEAFQgDgJgIgFg");
	this.shape_571.setTransform(916.3,553.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],0.8,0.4,0,0.8,0.4,2.7).s().p("AgHgCIAGgFQAEgEAEgGIABAIQAAAJgIAKIgFAIQACgMgEgIg");
	this.shape_572.setTransform(916.9,554.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.rf(["#E0B120","#79690B","#533629"],[0,0.588,1],-4.6,-1.3,0,-6,-1.3,14.3).s().p("AgNAGIgGgGIAHgFQAGgEAGAAQAFAAAIAFQAHAEAAABQAAADgHADQgFADgIAAQgIAAgFgEg");
	this.shape_573.setTransform(911.7,556.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.rf(["#E08325","#794307","#3C173C"],[0,0.588,1],2.8,-1.5,0,1.4,-1.5,14.3).s().p("AhCAhQgWgDgUgFQgBgHAAgIQAAgXAMgNIADAAQAMAAAMgCIAOgBIANAAIAIACQgEgBgHABQgIABgCACIgCABQgCAAgEAIIgHAMIAAACIAPgIQAHgCAGAAQAFAAAIAIIAHADIAFAEIAAgHQACgBAIAAQAEAAADACIAFAGQAAgFADgDQACgEADgBQADgBALAAIAEACIAGACIgHgJIgEgEIgBgBIgFgBIgIgDIAAgHIAAgCQAIACAOgDIALAGQALAHAHAAQAHAAAFgCIAIgCQAIAAAIAHQALAJABANIgXALQgvAUhAAAQgWAAgUgCgAA8gHIgGAGIAGAFQAFAEAIAAQAJAAAGgDQAGgDAAgCQAAgBgHgFQgHgFgGAAQgHAAgHAEg");
	this.shape_574.setTransform(904.3,556.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.rf(["#E0D220","#CF8112","#915709"],[0,0.588,1],-1.4,-1,0,-2,-1,8.7).s().p("AgeAsQABgRADgNQAGgaAPgOIALgGIAYgLIABAAIgfAZIgQAOIgEAGQgEAJgCAPIAAAJIAAABIAAAIIgEAAg");
	this.shape_575.setTransform(908.2,549.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.rf(["#E0B82A","#C24307","#5D3502"],[0,0.588,1],1.5,-0.7,0,1,-0.6,8.7).s().p("AgPA0QAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAQgDAAgCACIgDAEQAAgCgDgCIACgPQAAgHgFgQQgJgVgCgHIABAAQABAFARAKQAJgKAQgSIAbgaIARgEIABAAIgaAXQgLAKgCAFIAFABIAMgGQgPAOgGAbQgCAMAAARIgGABQgBAAgGAJQAAgFgCAAgAgLAjQAAAEADAEIACgBQABgHAIgeIgGAOIgEAQIgCgMIAAgPIgCACQAAAPgGAKIAAgBIgDgZIgBAJIABANQAAAIADADIABAAQAFgJAAgEIAAgCIAAAIgAABgFIACAAIgEAAIACAAg");
	this.shape_576.setTransform(905.2,549.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.rf(["#E0802A","#B13107","#3A3502"],[0,0.588,1],4.7,0.1,0,4.2,0.1,8.7).s().p("AgDA4IgGgDIgEgBIAEgPQABgMgFgMIgEgKIgKgOQgOgRgUgFIASAAIABAAIgCgIIgFgJIAAgBIAcAVIAVARIA8gtIACgCQgDADgFANIAAABIABAAIAEgBIgcAaQgRASgJAKQgPgKgBgFIgBAAQACAFAJAXQADAQAAAHIgCAPIgDgFgAATArIAAgIIAAACQAAAEgFAJIgBAAQgDgDAAgIIgBgNIABgJIADAZIAAABQAGgKAAgPIACgCIAAAPIACAMIAEgQIAIgOQgKAegBAHIgCABQgDgEAAgEgAAdABIAGAAIgCAAIgEAAg");
	this.shape_577.setTransform(902,548.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.rf(["#E0F300","#00E243","#00795F"],[0,0.592,1],-3.4,-0.4,0,-3.4,-0.4,25.8).s().p("AA/CNQgHgIABgOIABgSIACgIIgDAEQgHAEgHAAQgIAAgFgEQgIgFAAgLQAAgGAIgJQAIgHAAgFQAAgGgHgFQgHgFgNAAQgLAAgDAGIgDAFQAAgGgEgGQgGgLgNAAQgTAAgIAMQgEAHAAAPIgBAAQgCgGgHgHQgJgIgHAAQgNAAgFAVQgDAVgMAAQgJAAgHgFQgIgGAAgNQAAgHADgHQACgGAEgCIgBAAQgLADgKgFQgIgEAAgLQAAgLAPgJIANgHQgEABgFgDQgLgEAAgNQAAgPAYgNIAsgUIgBAAQgMgBgLgFQgVgJAAgaQAAgNAHgMIAAgBQAHgCAIAAQARAAASAIQAJAEAGAFQADAEABAEIABADIAAgBIgBgCQAAgHAHgIQAJgDAPAAQAWAAAOAOQAPAOAAATQAAAOgFAOIAAABQAEgEAEAAQAGAAAEACQAFADABAFQAAgMADgFQADgJAIAAQAHAAAEAGQAEAGAAAIQAAAJgGAKIgIALIAAABQAGgBAGADQAHACADAGIAAABQAEgMACgDQAGgHAMAAQAUAAAAAYQgBAQgHAKIgKALQAOgDAGAAQAOAAALAFIABAAQAMAMAAAPIAAAEQgCAHgIAHQgDADgKAAQgHAAgGgDIgHgEIAFAPQAEAOgBAHQAAAIgEAEQgGAFgGAAQgFAAgCgCIgFgCQAAAHgHANQgKAPgJAAQgIAAgFgFg");
	this.shape_578.setTransform(910.5,532.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.rf(["#E0FF3F","#73F040","#3AB54F"],[0,0.592,1],-8.4,6.2,0,-8.4,6.2,25.8).s().p("ABNBTQgHAAgOACIAKgLQAIgMAAgQQAAgXgTAAQgMAAgGAGQgCAEgFAMIAAgBQgCgGgIgDQgGgCgFABIAAgBIAIgMQAGgKAAgJQAAgGgEgFQgEgHgHAAQgIAAgBAJQgDAGAAAKQgBgFgGgEQgDAAgGAAQgEAAgEACIAAAAQAFgNAAgNQAAgUgPgOQgQgOgXAAQgOAAgKAEIAFgFQANgNARAAQAUAAAWATQAVAUgGARQADgHAKgFQAKgEAIAAQAPAAAIAHQAHAIAAANQAAAKgGAIQgCAEgHAIIAAABQACgDAGgCQAHgEAEAAQAVAAAIAOQAGAJAAASQAAALgLAMQgFAGgFADIAHgBQAMAAANALQgLgEgOAAg");
	this.shape_579.setTransform(915.5,526.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.rf(["#E0694D","#C22A2A","#2A0B5D"],[0,0.486,1],12.1,-2.5,0,12.1,-2.5,14.2).s().p("AgWBFIgnibQAEAKALAJQALAJAUAIIAKAEQAAAYANAiQAUAsAiAfQgpgFgrgNg");
	this.shape_580.setTransform(892.1,563.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.rf(["#9C5811","#532727","#3D173C"],[0,0.588,1],5.3,-0.2,0,3.9,-0.1,14.3).s().p("AhmAhIgKgEQgUgHgLgKQgBgOAJgMQAHgNAQgHQANANAXgBQAGAAALgEQAKgEAEgEQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAIABACQACAFADABIAMAAQANAAACgBIAEgDIgDAPIADABIAHADIADAEQACADAAACIAEgEQABgDAEABQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQACAAAAAFQAFgJACgBIAFAAIAEAAIAIADIAFABIABABIAEADIAHAIIgGgCIgEgCQgLgBgDACQgDABgCAEQgDACAAAIIgHgIQgDgCgEAAQgIAAgCABIAAAJIgFgEIgFgFQgIgIgFAAQgGAAgHACIgPAIIAAgCIAHgLQAEgHACgBIACgBQACgBAIgBQAHgCAEACIgIgCIgNAAIgOABQgMACgMAAIgDgBQgMANAAAXQAAAIABAHIgTgFgAB7gEQgIgIgIAAIgIACQgFADgHAAQgHAAgLgHIgLgGQgOADgIgCIAAgJIAGgDIAEgDQACAEAJADQAGACAHABQATgBADgNQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAFAQAVgBIALAAQAIAGADAJQAEAHgCAMIgJAGQgBgPgLgHg");
	this.shape_581.setTransform(901.8,555.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.rf(["#E09854","#C24A27","#460B5D"],[0,0.486,1],1,-0.5,0,1,-0.5,3.6).s().p("AgLAIIgFgNQAJgHALgHQACAJAGAHIAFADQgRAHgFANIgGgMg");
	this.shape_582.setTransform(888.8,551.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.rf(["#E09154","#C23F2A","#46005D"],[0,0.486,1],2.8,-2.7,0,2.8,-2.7,3.6).s().p("AgJAIIgBgFIAAgDQAAgNALgNIAEAOIAGAMQgIALAAAQQgIgJgEgKg");
	this.shape_583.setTransform(886.9,554);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.rf(["#E0B604","#009C27","#004D4F"],[0,0.592,1],4.5,-6.1,0,4.5,-6.1,25.8).s().p("ABWCEQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgEANgSAAQgIAAgGgCQgJgDgBgFIgEAEIgGADQABgPAFgJIAEgIIARgOIAggYIgBAAIgZAKIgMAGIgMAFIgFAAQACgGALgKIAagXIgBAAIgRAEIgEABQABgIAEgFQAHgGALAAQAKAAAEAKQAEAKAEAAQAJAAAEADQAEAEAAAIQAAAHgKAGQgKAHAAAIQAAAFAFAEQAFADAGAAQAJAAADgEIAFgKQADAGAHADQAFADADAAQAIAAAGgHIACgBQAAAHAMAGQALAHAOABQgIAFgJAAQgLAAgIgEIgNgIQAAAJgEAGQAAABgBAAQAAABAAABQAAAAgBAAQAAABgBAAQgGAHgKADIgMAAQgUAAgGgPgAh3CGIgEgEQgGgHgDgJQgCgGAAgHQgHACgFAAQgZAAgOgYQgKgTAAgZQAAgcAYgSQAWgSAQADIAAAAQgPgIgFgEQgHgGAAgOQAAgNAIgFQAGgDAHAAQgFgCgCgHQgDgIAAgIQAAgRAUgQQAGgGAGgDQgGAMAAAUQAAAMAIAGQAGAFAIgBIABABQgNAKgEAEQgGAGAAAJQAAAKAEAGQAFAHAKgBIgQANQgFAFAAAMQAAAOAGAHQAGAFAFgCIAAAAIgOAPQgJAIAAAHQAAAMAIAGQAHAGAKAAQAKAAACgLQADgKAHgBIAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgGAIAEQAJADAGAMIAAABQADgKAEgEQAEgDAFAAQAHAAAGALQADAFACANIgcgVIAAABIAFAJIACAIIgBAAIgSgBQAUAGAOARIAKAPIAEALQAFALgBANIgEACQgCABgNAAIgNAAQgDgBgCgEIAAgDQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgEAEgJADQgMAFgGAAQgWAAgNgNg");
	this.shape_584.setTransform(902.5,538.4);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.rf(["#E0CB07","#00BF33","#006956"],[0,0.592,1],-1.7,-2.3,0,-1.7,-2.3,25.8).s().p("ABtCbQgNgHAAgGIgCABQgGAGgIABQgDAAgFgDQgHgDgDgHIgFAKQgCAFgKAAQgGgBgFgCQgFgEAAgFQAAgIAKgHQAKgHAAgGQAAgJgEgEQgDgCgKAAQgDgBgEgJQgFgKgKAAQgKAAgGAFQgDAGgCAIIgBABIAAgCQAFgNADgCIgCABIg8AtIgWgRQgDgMgDgGQgFgKgIAAQgEAAgEADQgFADgDALIAAgBQgGgMgJgEQgIgDAAAFQAAABAAABQAAAAAAAAQAAAAAAAAQAAAAgBgBIAAgBQgHABgDALQgCALgKAAQgKAAgHgHQgIgGAAgLQAAgHAJgJIAPgOIgBAAQgFACgGgGQgGgGAAgQQAAgMAFgFIAQgLQgJAAgGgGQgEgHAAgJQAAgJAHgHQADgDANgKIgBgBQgIABgGgFQgIgGAAgNQAAgTAHgMQANgJAPABQAIAAAKAFIAKAHIgEgKQgCgHgBgIQABgRAKgIQAFgFAFgCIAAAAQgHAMAAANQAAAaAVAKQALAEAMABIABAAIgsAVQgYAMAAAQQAAAMALAFQAFACAEgBIgNAIQgPAKAAAKQAAAKAIAFQAKAEALgCIABAAQgEABgCAHQgDAGAAAHQAAANAIAGQAHAFAJAAQAMAAAEgUQAEgWANAAQAHAAAJAIQAHAHACAHIABAAQAAgQAEgHQAIgLATAAQAMgBAFALQAEAGAAAGIADgFQAFgGALAAQANAAAHAGQAHAEAAAGQAAAFgIAHQgIAJAAAGQAAALAIAGQAFADAIAAQAHAAAHgDIADgFIgCAIIgBASQgBAPAHAHQAFAGAIgBQAJAAAKgOQAHgNAAgIIAFADQACACAFAAQAGAAAGgGQAEgEAAgHQABgIgEgNIgFgPIAHADQAGADAHAAQAKAAADgDIAAABQgIAJgIACIAAAAQAVADAHAEQAKAEAAAMQAAAPgNAJQgMAIgUACQACACABADIAAAHQAAAQgLAMIgHAGQgOgBgLgGgAh6hlIAAgCIgBgBIABADg");
	this.shape_585.setTransform(908.8,534.6);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_586.setTransform(863.4,551.3,0.696,0.532,0,-7.3,-7.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_587.setTransform(836.8,535.5,0.696,0.532,0,-7.3,-7.9);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_588.setTransform(819.6,553.1,0.696,0.532,0,-7.3,-7.9);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_589.setTransform(830.6,553.3,0.696,0.532,0,-7.3,-7.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_590.setTransform(828.2,548.5,0.696,0.532,0,-7.3,-7.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_591.setTransform(840.2,550,0.696,0.532,0,-7.3,-7.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_592.setTransform(826,568.4,0.696,0.532,0,-7.3,-7.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_593.setTransform(860.9,561.8,0.696,0.532,0,-7.3,-7.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_594.setTransform(839.6,544.3,0.696,0.532,0,-7.3,-7.9);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_595.setTransform(822.1,562.3,0.696,0.532,0,-7.3,-7.9);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_596.setTransform(860.2,557.7,0.696,0.532,0,-7.3,-7.9);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_597.setTransform(835,543.1,0.696,0.532,0,-7.3,-7.9);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_598.setTransform(836.1,540.1,0.696,0.532,0,-7.3,-7.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_599.setTransform(859.4,557.2,0.696,0.532,0,-7.3,-7.9);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_600.setTransform(820.4,556.2,0.696,0.532,0,-7.3,-7.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_601.setTransform(836.5,537.8,0.696,0.532,0,-7.3,-7.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-8,-0.9,0,-8,-0.9,11.9).s().p("AAIBoIgOgBIAAgMIgBgSQAHAEAJAAIAAAbIgBAAgAgDg+IgGgBIAAgiIABgFQALACAHAAIAAAuIgNgIg");
	this.shape_602.setTransform(845.3,523.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-4.1,-0.7,0,-4.1,-0.7,11.9).s().p("AgKBZQAHgIADgGIADgIIgDgEQgFgKgNgXQgMgVAAgiQAAgaAKgMQAIgMAQgDQgEgTgIgGIAJgBQAHAAASAEIADAAIgBAFIAAAiQgHgBgIAAIgFAAQgLACgHAOQgHAOAAAXQAAAeAUAeIAEAGQALAMAMAGIABASIAAAMQgYgEgRgMg");
	this.shape_603.setTransform(841.4,523.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0.2,4.1,0,0.2,4.1,11.9).s().p("AgJATQAAgTAGgOQADgNAFAAQADAAABAFIABAFQAAAKgIAQQgEAMgDAEIgEADg");
	this.shape_604.setTransform(837.1,518.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-1.2,0,0,-1.2,0,11.9).s().p("AAABRQgggjAAg7QAAgwAagWQALgJAPgDQAHAGAGATQgSADgIALQgIANAAAaQAAAhAKAWQANAXAHAJIADAFIgFAIQgDAGgHAHQgKgGgHgJgAgRg3QgGAPAAAUIAAAJIADgCQAEgEAFgNQAJgRAAgLIgBgFQgCgEgCAAQgFAAgFAMg");
	this.shape_605.setTransform(838.5,522.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],14.6,-5.9,0,14.6,-5.9,22.9).s().p("AgjBzIAAggIAAgbIABiDIAAgtIAAgOQACALAQAIIALAFIgBAkQABArAGA4QAIA3AZAzIACAEQgkgHgjgNg");
	this.shape_606.setTransform(849.9,525.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.4,-2.6,0,-2.4,-2.6,8.2).s().p("AAgAgIgVgFIgEgEQgggfgVgYIAXgBIAhAhIAlAiIgPgCg");
	this.shape_607.setTransform(866.7,510.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],1,-9.7,0,1,-9.7,15.6).s().p("AAvAOQg5AAgtgJQARgGAYgFQAVgFAbgCIAUAZIACACIgJAAg");
	this.shape_608.setTransform(859.6,515.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],0.2,-7.8,0,0.2,-7.8,23).s().p("AABCBQg0gBg3gMIgCgEQgZgzgIg3QgIg4gBgrIABgkQAKAFANAEIASAEIAAAEQABAOALAsQAOA0AEAHIAKAWQAJAHAWANIAxAgQAZANApAJQAiAGAYAAIAPAAQhEAXhJAAIgJgBg");
	this.shape_609.setTransform(864.3,527.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],4.9,-7.8,0,4.9,-7.8,15.6).s().p("AgVAWIgSgEQgNgEgKgFIgLgFQAigNAngHQAmgIAPACIAFAHIAQATQgbACgXAFQgYAFgPAIIgGgCg");
	this.shape_610.setTransform(855.6,513.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],6.9,-5.2,0,6.9,-5.2,15.6).s().p("AhIALQAHgMAlgNQAdgKAugFIAaAgQgQgDgnAIQgmAIghAOQgQgIgDgLg");
	this.shape_611.setTransform(853.7,510.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],8.2,-3.5,0,8.2,-3.5,15.6).s().p("Ag6AaIgBgEQAAgWA1gOQAYgIAhgEIAJANQguAFgcAJQgmAMgGAOIAAgBg");
	this.shape_612.setTransform(852.4,509.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],1.6,-3.3,0,1.6,-3.3,8.2).s().p("AAXAyIgUgbIgOgVIgFgFIgZgiIgKgNIATgBIALAMIAeAnIArAzIAAABIgbAAIgCgCg");
	this.shape_613.setTransform(862.7,511.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-3.2,-1.9,0,-3.2,-1.9,14.9).s().p("AgHgIQgRgBgkAAIgPAAIgKgNQBGABAyAPQArALAIASQhGgbgXgEg");
	this.shape_614.setTransform(873.7,508.3);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-0.1,-3.4,0,-0.1,-3.4,3.7).s().p("AAFAQQgEgEgCgFIgIgKQgDgFgBgGIABgBQAJAHAKAAIAGgBQACAHgBAGIAAABIAAAGIgHAFg");
	this.shape_615.setTransform(891,516.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],0.3,-5.4,0,0.3,-5.4,7.8).s().p("AgOgjIANgGIAQBAIgdAUg");
	this.shape_616.setTransform(883.8,519.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-3.5,-4.1,0,-3.5,-4.1,7.8).s().p("AgngdIAHgEIANAVIAOgIIAXgPQABAGAEAFIAIANQADAFAFADIABAAIgoAYIgRAMIgFADIgRhBg");
	this.shape_617.setTransform(887.6,518.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0.1,-0.6,0,0.1,-0.6,3.7).s().p("AgGgFIABgHIAAAAIAIAKQAEACAAAGQAAAHgHAAQgGAAAAgSg");
	this.shape_618.setTransform(890.7,513.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],0.2,-0.6,0,0.2,-0.6,3.7).s().p("AgJALIgBABIgCgGIgDgJIAAgCIACgMQAAgCAJAFIACACQAHAGAGAKIAFANIgGABQgKAAgJgHgAgFgFQAAASAGAAQAGAAABgHQgBgGgDgCIgIgKIgBAAg");
	this.shape_619.setTransform(890.7,513.4);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.7,-0.1,0,-2.7,-0.1,7.8).s().p("AgYAFIAegUIARgKIgCAMIAAACIACALIACADIgZAPIgLAIIgNgVg");
	this.shape_620.setTransform(886.9,514.3);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-3.7,-3.1,0,-3.7,-3.1,14.9).s().p("ABCATQg+gKgjgBIgYABIgCgDIgXgaIAPgBQAjAAASACQAXADBGAbIAAACIAAAJIgPgDg");
	this.shape_621.setTransform(874.2,509.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.1,-7.3,0,-2.1,-7.3,23).s().p("ABwBwQgXAAgigGQgqgJgWgNIg0ggQgWgNgJgHIgKgWQgEgJgNgyQgLgsgCgOIAAgEIAGACQAtAKA7AAIAJAAIAZgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAqABQAjAAASgDIAZgIIAADcIgGACIgPAAg");
	this.shape_622.setTransform(866.7,526.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-2,-2,0,-2,-2,8.2).s().p("AAzApIglgkIghggIgXABQgHgHgFgGIAkgBIAGAAIAKANIAWAbIACADIAZAdIAIAJIgEAAg");
	this.shape_623.setTransform(866.3,510.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-2,-3.2,0,-2,-3.2,8.2).s().p("AAQA1IAAgBIgpg0IgggmIgMgMQAIgCAHAAQAFAHAGAGQAVAZAhAfIAEAEIAUAFIAQACIADAAIAHAIIAJAKIgYAEIgeADQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_624.setTransform(866.4,511.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-10.6,-5.5,0,-10.6,-5.5,23).s().p("AAwhbIgZAIQgSADghAAIgqgBIAegCIAXgFQASgDATgFQAQgFAMgGIAFgDQANgIAFgKIAAAmIAABQIAACCIgXAJg");
	this.shape_625.setTransform(875.2,525);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-5.3,-8.3,0,-5.3,-8.3,14.9).s().p("AggADIgGgGIgIgJIAZAAIBEAFIgFADQgMAEgQAFQgRAFgUADIgJgKg");
	this.shape_626.setTransform(875.8,514.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-5,-5.7,0,-5,-5.7,14.9).s().p("AgSAMIgZAAIgYgbIAXgBQAlAAA8ALIAQADIgBACQgEAJgNAIg");
	this.shape_627.setTransform(875.5,512.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],0.3,-7.8,0,0.3,-7.8,23).s().p("AABCBQgzgBg4gMIgCgEQgZgzgHg3QgJg4gBgrIABgkQAKAFANAEIASAFIAAADQABAOAMAsQANA0AEAHIAKAWQAJAHAWAOQAjAWAPAJQAYAOApAIQAjAGAXAAIAPAAQhEAXhJAAIgJgBg");
	this.shape_628.setTransform(446.2,443.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-8,-0.9,0,-8,-0.9,11.9).s().p("AAIBnIgNgBIgBgLIgBgSQAHAEAKAAIAAAaIgCAAgAgDg9IgGgCIABgiIAAgFQALACAHAAIAAAtIgNgGg");
	this.shape_629.setTransform(427.2,439.3);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],14.6,-6,0,14.6,-6,22.9).s().p("AgjByIAAgfIAAgaIABiEIAAgtIAAgOQACALAQAIIAKAFIAAAkQAAArAHA3QAIA4AZAzIACAEQgkgIgjgNg");
	this.shape_630.setTransform(431.8,441.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],6.9,-5.2,0,6.9,-5.2,15.6).s().p("AhIALQAIgMAkgNQAegKAtgFIAaAgQgQgDgmAJQgmAHgjAOQgPgIgDgLg");
	this.shape_631.setTransform(435.6,426.6);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],5,-7.8,0,5,-7.8,15.6).s().p("AgVAWIgSgEQgNgEgKgFIgLgFQAigMAngIQAlgIAQACIAFAHIAQATQgbACgWAFQgZAFgQAIIgFgCg");
	this.shape_632.setTransform(437.5,429.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],8.3,-3.6,0,8.3,-3.6,15.6).s().p("Ag6AaQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgVA1gOQAYgIAhgEIAJANQgtAFgdAJQglAMgHAPIAAgCg");
	this.shape_633.setTransform(434.2,425);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-4.2,-0.7,0,-4.2,-0.7,11.9).s().p("AgKBZQAHgIACgFQACgEACgEIgDgFQgFgJgOgYQgMgVABghQgBgbALgNQAIgKAQgDQgFgUgHgFIAKgBQAGAAASADIADAAIAAAFIgCAiQgGgCgHAAIgHABQgKADgHANQgHAPAAAWQAAAeAUAeIAEAGQAKANANAFIABASIABALQgZgCgRgNg");
	this.shape_634.setTransform(423.3,439.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0.2,4.1,0,0.2,4.1,11.9).s().p("AgJATQAAgTAGgPQADgMAFAAQADAAABAEQABADAAADQAAAKgJAQIgGARIgDACg");
	this.shape_635.setTransform(418.9,434.3);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-1.2,0,0,-1.2,0,11.9).s().p("AAABRQgggjAAg7QAAgwAagWQAKgKAPgCQAIAGAGATQgSADgIALQgIAMAAAbQAAAhAKAVQANAYAHAJIADAFQgCAEgDAEQgDAGgHAHQgKgGgHgJgAgRg3QgHAOAAAWIABAIIADgCIAJgQQAJgTAAgKQAAgDgCgCQgBgFgCAAQgFAAgFANg");
	this.shape_636.setTransform(420.4,438.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-0.1,-3.4,0,-0.1,-3.4,3.7).s().p("AAGAQIgHgJIgIgKIgEgLIACgBQAIAHAKAAIAHgBIAAANIAAABIAAAGIgHAFg");
	this.shape_637.setTransform(472.8,432);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],0.1,-0.6,0,0.1,-0.6,3.7).s().p("AgGgFIABgHIABAAIAIAKQADACAAAGQAAAHgGAAQgHAAAAgSg");
	this.shape_638.setTransform(472.6,429.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],0.2,-0.6,0,0.2,-0.6,3.7).s().p("AgJALIgCABIgCgGIgCgJIAAgCIACgMQAAgCAJAGIABABQAIAGAGALQADAFACAHIgGABQgKAAgJgHgAgFgFQAAASAGAAQAGAAAAgHQAAgGgDgCIgIgKIAAAAg");
	this.shape_639.setTransform(472.5,429.2);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-3.5,-4.2,0,-3.5,-4.2,7.8).s().p("AgngdIAHgFIANAWIAOgJIAXgOIAEALIAIAMIAJAJIABAAIgoAYIgQALIgGAEIgRhBg");
	this.shape_640.setTransform(469.5,434.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.7,-0.1,0,-2.7,-0.1,7.8).s().p("AgYAFIAegTIARgLIgCAMIAAACIACALIACAEIgZAOIgLAIIgNgVg");
	this.shape_641.setTransform(468.8,430.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],1.6,-3.3,0,1.6,-3.3,8.2).s().p("AAXAyIgUgbIgOgVIgFgFIgZgiIgKgNIATgBIALAMIAeAnIArAzIAAABIgbAAIgCgCg");
	this.shape_642.setTransform(444.6,427.3);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-2,-3.2,0,-2,-3.2,8.2).s().p("AAPA1IAAgBIgog0IgggmIgLgMQAGgCAIAAQAEAHAHAHQAVAYAhAfIADAEQALAEAKABIAPACIAEAAIAGAIIAJAKIgXAEIgeADIgBAAg");
	this.shape_643.setTransform(448.3,427.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],1,-9.7,0,1,-9.7,15.6).s().p("AAvAOQg5AAgtgJQARgGAZgFQAVgFAbgCIATAZIACACIgJAAg");
	this.shape_644.setTransform(441.5,431.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.3,-2.6,0,-2.3,-2.6,8.2).s().p("AAgAhQgKgCgLgEIgEgDQgggggVgYIAYgCIAgAiIAlAjIgPgCg");
	this.shape_645.setTransform(448.6,426.6);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-2,-1.9,0,-2,-1.9,8.2).s().p("AAzApIglgkIggggIgZACQgGgIgEgGIAjgBIAGAAIAKANIAVAbIADADIAYAcIAIAKIgDAAg");
	this.shape_646.setTransform(448.2,426);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-3.2,-1.9,0,-3.2,-1.9,14.9).s().p("AgGgHQgSgCgjAAIgQAAIgKgNQBHABAxAPQArALAIASQhGgbgWgDg");
	this.shape_647.setTransform(455.5,424.2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-2.1,-7.4,0,-2.1,-7.4,23).s().p("ABwBvQgXAAgjgFQgogJgXgNQgRgJgjgWQgWgOgIgIIgLgVQgEgJgNgyQgMgsgBgOIAAgEIAGACQAtAKA7AAIAJAAIAZgBIABAAIApABQAkAAASgEIAZgHIAADcIgGABIgPAAg");
	this.shape_648.setTransform(448.6,442.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],-5.3,-8.2,0,-5.3,-8.2,14.9).s().p("AggADIgGgGIgIgJIAYAAIBFAFIgFADQgMAEgQAFQgRAFgUADIgJgKg");
	this.shape_649.setTransform(457.7,430.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.rf(["#692048","#000993","#000033"],[0,0.51,1],0.3,-5.4,0,0.3,-5.4,7.8).s().p("AgNgjIAMgHIAPBCIgbASg");
	this.shape_650.setTransform(465.7,435.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.rf(["#8A2048","#002095","#000033"],[0,0.51,1],-5,-5.7,0,-5,-5.7,14.9).s().p("AgTALIgYAAIgZgaIAYgBQAlAAA8ALIAPADIAAACQgFAIgNAJg");
	this.shape_651.setTransform(457.4,428);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.rf(["#A36D3A","#004D93","#003072"],[0,0.51,0.988],-10.6,-5.5,0,-10.6,-5.5,23).s().p("AAvhbIgZAHQgRAEgiAAIgpgBIAdgDIAYgEQASgDASgFQARgFALgGIAGgDQANgIAFgKIAAAnIAABPIAACBIgYAKg");
	this.shape_652.setTransform(457.1,440.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.rf(["#8A3A51","#003399","#001741"],[0,0.51,1],-3.7,-3,0,-3.7,-3,14.9).s().p("ABCAUQg+gLgjAAIgYABIgCgEIgYgbIARAAQAiAAATACQAWADBGAcIAAABIAAAJIgPgCg");
	this.shape_653.setTransform(456.1,425.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-8.7,-2.2,0,-8.7,-2.2,44.8).s().p("AgWADICZhFQA9gbAigSIACAOQgMAWgOAVQhIAQhYAhQhpAnikBOQBVg0B4g5g");
	this.shape_654.setTransform(473.2,413,0.62,0.474,0,7.7,7.1);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-0.5,19.1,0,-0.5,19.1,62.8).s().p("AFhB0Ij5iSQgpgYh0hOQgfgUgUgJQiYAniDA5IhsA3IgFgEIAPgMQAwgnBcgkQBDgbC3hDIAqAVQCMBLDlCeQBWA8BiBHIgUAGQgyghhNgvg");
	this.shape_655.setTransform(453.9,393.2,0.62,0.474,0,7.7,7.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.rf(["#A39131","#5B3F23","#032731","#000038"],[0,0.49,0.969,0.988],-9.8,4.5,0,-9.8,4.5,47.1).s().p("AAdAnQi6iygxgnIgQAAQgJAjgKA4IgJA0IgBgCIgCgDQgJg3AAhgIADgwIABgUIAAAAQA+AwDuDqQB4B2BeBUQAHAVAAAPQhIhDiiibg");
	this.shape_656.setTransform(435,404.4,0.62,0.474,0,7.7,7.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.rf(["#A38C00","#4A6DFC","#A9BEFD"],[0,0.51,0.969],11.5,-12.3,0,11.5,-12.3,62.8).s().p("AgrgbQAcAOAfALIAcAHIgcAXIg7g3g");
	this.shape_657.setTransform(444.5,407.1,0.62,0.474,0,7.7,7.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.rf(["#A3AD00","#4A91FA","#DBE9FE"],[0,0.51,0.969],14.2,-2.9,0,14.2,-2.9,62.8).s().p("AAqBbQgggMgagNIhHhAQhGg+gWgZIAUgOIAIADIBhApQAJAnBgACIACAAQADAGAAAEQAAAFgHAEQgMAIgbgBIgEAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFABABIAEABIAZAAQAVgIAGgGQAFgFAAgIIAAgFQA7AQA2AJIgIAGIhmBOIgcgJg");
	this.shape_658.setTransform(443.5,402.5,0.62,0.474,0,7.7,7.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-2.6,-8.6,0,-2.6,-8.6,62.8).s().p("AgFEEIgkgfQhehUh4h2Qjwjqg9gwQABgGAMgMIBaBHQBpBUAtAuQAtAwBKAgIA8A5IAcgWQBzAkCJAAQBfAABwgeQB6ghBBgxIAHAFIgCABQgiASg9AaIibBHQh4A4hVA1Qg6AjgqAiIgDAEIgBAAIAAABIgEADIADgOg");
	this.shape_659.setTransform(453.5,406.5,0.62,0.474,0,7.7,7.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-16.2,-25.7,0,-16.2,-25.7,47.1).s().p("AhPg0IiNiUQBJBGBlBHQClBzBdAkIAAAFQABBAAIAmIgFACQiDhYikilg");
	this.shape_660.setTransform(437,419.1,0.62,0.474,0,7.7,7.1);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.rf(["#5F2C2A","#2E1023","#00002A"],[0,0.51,0.988],-3.2,-21,0,-3.2,-21,44.8).s().p("AkoCDIAUABQAmAABFgYQBQgcBTgwQC0hoB1ifQAGAjAAAZQAAAlgFApQnGEHh9A+QgIgmgBg/g");
	this.shape_661.setTransform(468.6,421.4,0.62,0.474,0,7.7,7.1);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-2.9,2,0,-2.9,2,62.8).s().p("AhjCVIBkhNIAIgHQA6ALAzAAQCFAAChgnIArgMIAVgFIBHAzQhBA0h6AhQhwAehfAAQiJAAhzglgAkyAhQgtgshphUIhahHIAFgEIARgPIAFAEQASARAsAhQBJA5A2AYIgUAOQAWAaBFA9IBIBAQhKgjgtgvg");
	this.shape_662.setTransform(454.3,401.5,0.62,0.474,0,7.7,7.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-11.8,-13.4,0,-11.8,-13.4,47.1).s().p("AEADJIABAOQhdgjimh2QhlhFhIhGIg+hBIgOgPIgEgEIgEgIQgHgQgEgVIgCgIIgBgFIADADIABACQAgAoCgCFQCiCGBbAXQBGARgCg0QgBgPgGgUIAjAfIgDAOQgCAMAHgQIgFASQgHAdgBALQgCATADA4QgGgcAAAJg");
	this.shape_663.setTransform(435.1,412.9,0.62,0.474,0,7.7,7.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.rf(["#7E4C2E","#3C1D2A","#00025F"],[0,0.51,0.988],-3,-13.3,0,-3,-13.3,44.8).s().p("AklDQIAAgFIAAgPQAAgIAGAcQgEg5ACgSQACgLAHgeIAEgRIAAgBIABABQAAAOADALQALAmArAFQA4AHCwhjQCbhTBaiFQAOgVAMgWIAGAkIAAABIADARQh1Cdi1BqQhTAxhQAbQhFAYglAAIgUgBg");
	this.shape_664.setTransform(469,417.7,0.62,0.474,0,7.7,7.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AhgBsIgEgBQgBgBAAgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAAAIAEAAQAbABANgIQAGgFABgGQgBgFgDgFIAAgBIgCAAQhhgBgKgoIgBgIQABgSAKgIQASgPApAXIABAFQAAACgHAAIgRgIIgaAAIgIAJIgBAKQAAAIAGAHQAEAEAGAEQAOAIAXADQAUADAZAAQALAGACAFIABAGIABAFQAAALgGAFQgFAGgWAIgAg1AKQgJgRgBgRIAAgKQACgEAIAAQA0AAARANQAQALAAAWQAAAKgFAIQgHAPgVAAQgjAAgRgfgAgoAHQAMAVAQAAIASAAIALgMQAEgEAAgFQAAgWgegMQgfgMgFAMIAFAIQgDADgIgBQABAKAKAOgAgChZIAAgFQAVAHAeAcIAtAqQgBAHgFAAIhahPgABQhBQgSgUgMgVQASgHAYAfQAYAhACAAQAUAAAJgPIALgUIAEAAQABAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAAJgNAPQgNASgMAAQgTAAgbgcg");
	this.shape_665.setTransform(450.6,399.3,0.62,0.474,0,7.7,7.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.rf(["#A3CD00","#5BAAFF","#FFFFFF"],[0,0.51,0.988],1.3,10.9,0,1.3,10.9,62.8).s().p("Ag7B+IgCgGQgCgFgLgGQgZAAgTgDQgXgDgOgIQgHgEgEgEQgGgHAAgIIABgKIAIgLIAaAAIASAKQAGAAAAgDIgBgEQgpgZgRAPQgLAJAAATIABAIIhhgpIgIgDQBFgsBbgwQA8gfB0hCQAfARB1BPQAkAYA3AmQiBBFhrBQQg0gKg7gSgAhTARIAAAKQAAARAKATQAQAeAkAAQAVABAHgQQAEgHAAgLQAAgYgOgKQgTgNg0gBQgIAAgBAFgAgXgkIBaBNQAGAAAAgHIgtgoQgcgcgXgHgAAdg1QANAVASATQAaAaATAAQANAAANgPQAMgQAAgIQAAgBAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAIgFAAIgLAUQgJANgUAAQgBAAgZgfQgUgZgPAAIgHABgAhMB5IACAAIABABIgDgBgAghBRQgQAAgMgWQgKgPgBgKQAIABADgEIgFgIQAFgLAfALQAeAMAAAZQAAAEgBAEIgMANg");
	this.shape_666.setTransform(452.3,397,0.62,0.474,0,7.7,7.1);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-1.8,-12.1,0,-1.8,-12.1,44.8).s().p("AjOCbQgrgFgLgnQgDgLgBgOIAFgEQArgiA5gjQCihMBsgpQBYgiBHgQQhaCGiaBTQimBcg7AAIgHAAgAkNBaIAFgEQgEAJgBAAIAAgFg");
	this.shape_667.setTransform(468.3,417.1,0.62,0.474,0,7.7,7.1);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],-10.5,-1.5,0,-10.5,-1.5,47.1).s().p("AC9DrQhbgWiiiJQigiDgggoIAJg0QAJg4AKgjIAPAAQAxAnC6C0QCiCZBJBCQABAngnAAQgNAAgRgEg");
	this.shape_668.setTransform(435.1,407.2,0.62,0.474,0,7.7,7.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.rf(["#A36D3A","#5B2C23","#000038"],[0,0.51,0.988],0.3,14.9,0,0.3,14.9,62.8).s().p("AApDCQBshQCBhFQg4gogjgWQh1hPgggQQhzBBg8AfQhbAuhFAvQg2gZhKg2QgrghgTgRIBsg3QCDg5CYgnQAUAJAfAUQB0BOAqAYID4CSQBNAvAyAhIgsALQigAniFAAQgzAAg7gKg");
	this.shape_669.setTransform(453.1,395.2,0.62,0.474,0,7.7,7.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIgBgLQABgLAIgJQAFgFAHgCQAHAGAIAAIAJgBIADACIACADQAAAIAGAHIABAAIAAACIgBADQgBAKgHAGIgCACQgIAHgKAAQgKAAgJgJg");
	this.shape_670.setTransform(249.5,226.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgDQAHgFABgKIAGgEQAEADAFAAQAFAAAFgEQAFABADAEIADADIAGAHQADAFAAAHQAAALgJAIQgIAJgLAAQgKAAgJgJg");
	this.shape_671.setTransform(254.1,228.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgCgEgBgFQAEgEABgHIgBgHIADgFIAEgDIAGgEQAFgBAFAAQALAAAJAIQAIAIAAALQAAALgIAIQgJAJgLAAQgIAAgHgFg");
	this.shape_672.setTransform(258.4,225.1);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIgBAAQgGgHAAgIQAAgDACgDQABgEADgDIAGgEQADgCAEAAIABgBQAJAAAFAHIACABIAEAHIABAFQAAAHgFAGIgCACIgDACQgFAEgGAAQgEAAgEgDg");
	this.shape_673.setTransform(253.8,224.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCABIgBgCIgFgEIABgGQABgJgFgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAAMgJAIIgDADIgHAEQgEABgFAAg");
	this.shape_674.setTransform(255.6,220);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIIAEAFQAEAHAAAHIgBAGQAAAEgCADIgGAEQgDADgBAEIgHADIgIABQgJAAgHgFg");
	this.shape_675.setTransform(250.3,221);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEADAFAAQAFAAAFgEQAEABAEADIADAEIAGAGQADAGAAAHQAAALgJAIQgIAJgLAAQgLAAgIgJg");
	this.shape_676.setTransform(207.3,207.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgJgIAAgLQAAgLAJgJQAFgEAHgDQAHAGAIAAIAJgBIADACIABADQABAJAGAGIABAAIAAACIgBADQgBAKgHAGIgCADQgIAFgKABQgKAAgJgJg");
	this.shape_677.setTransform(202.7,204.4);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIAAAAQgHgHAAgIQAAgDACgEQACgDADgDIAFgEQADgCAFAAIAAgBQAJAAAGAHIACABQACADABAEIABAFQAAAHgEAGIgCACIgDACQgFAEgHAAQgDAAgFgDg");
	this.shape_678.setTransform(207,202.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgGIgDgEQgCgEgBgEQAEgFAAgGIAAgHIAEgGIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgIAAgHgFg");
	this.shape_679.setTransform(211.5,203.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgGQAAgJgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAALgJAJIgEADIgFADQgFACgFAAg");
	this.shape_680.setTransform(208.8,198.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGQgBAEgCADIgFAEQgDADgCAEIgHADIgIABQgIAAgIgFg");
	this.shape_681.setTransform(203.5,199.2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIgBgLQABgLAIgJQAGgFAGgCQAHAGAIAAQAFAAAEgBIADACIACADQAAAJAGAGIABAAIAAACIgBADQgBAKgHAGIgCACQgIAHgKAAQgKAAgJgJg");
	this.shape_682.setTransform(147.2,225.7);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgDQAHgFABgKIAGgEQAEADAFAAQAFAAAFgEQAFABADAEIADACIAGAIQADAFAAAHQAAALgJAIQgIAJgLAAQgKAAgJgJg");
	this.shape_683.setTransform(151.9,228.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgHIgDgDQgCgEgBgFQAEgEABgHIgBgHIADgFIAEgDIAGgDQAFgCAFAAQALAAAJAIQAIAJAAAKQAAALgIAIQgJAJgLAAQgIAAgHgFg");
	this.shape_684.setTransform(156.1,224.7);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgEIgBAAQgGgGAAgIQAAgDACgEQABgEADgDQADgCADgBQADgCAEAAIABgBQAJAAAFAGIACACQADADABADIABAGQAAAHgFAFIgCACIgDADQgFAEgGAAQgEAAgEgDg");
	this.shape_685.setTransform(151.6,223.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgFgEIABgHQABgIgFgFQABgJAHgGQAHgIAMAAQALAAAIAIQAJAIAAALQAAALgJAJIgDADIgHADQgEACgFAAg");
	this.shape_686.setTransform(153.4,219.6);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAWIgDgDQgIgIAAgLQAAgLAIgIQAIgIALAAQALAAAJAIIAEAFQAEAHAAAHIgBAGIgCAHQgDABgDADQgDADgBAEIgHADQgEABgEAAQgJAAgHgGg");
	this.shape_687.setTransform(148.1,220.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLQAAgLAIgIQAFgGAGgBQAIAFAIAAIAIgBIAEADIACACQgBAJAHAGIAAAAIAAACIAAADQgCAJgGAHIgDACQgHAHgKgBQgKAAgJgIg");
	this.shape_688.setTransform(127.9,206.1);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgQAXIgDgDQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIIAEAFQAEAHAAAHIAAAGQgBAEgCADIgFAEQgDADgCAEIgHADIgIABQgIAAgIgFg");
	this.shape_689.setTransform(128.7,201);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgTATQgIgIAAgLIAAgEIACgCQAHgHABgJIAGgEQAEADAFAAQAFAAAFgEQAEABAEADIADAEIAGAGQADAGAAAHQAAALgJAIQgIAJgLAAQgLAAgIgJg");
	this.shape_690.setTransform(132.6,208.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.rf(["#FFFFFF","#FE807B","#FEFF00"],[0,0.518,1],0,0,0,0,0,2.2).s().p("AgIASIgFgDIAAAAQgHgHAAgIQAAgDACgEQACgDADgDIAFgEQADgCAFAAIAAgBQAJAAAGAHIACABQACADABAEIABAFQAAAHgEAGIgCACIgDACQgFAEgHAAQgDAAgFgDg");
	this.shape_691.setTransform(132.2,204.2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AgPAXIgGgGIgDgEQgCgEgBgEQAEgFAAgGIAAgHIAEgGIADgDIAGgDQAFgCAFAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgIAAgHgFg");
	this.shape_692.setTransform(136.8,205);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.rf(["#FF4887","#FE807B","#FE1E5D"],[0,0.518,1],0,0,0,0,0,3.3).s().p("AAAAcIgBgBQgGgGgJAAIgCAAIgBgBIgEgEIAAgGQAAgJgEgFQABgJAHgGQAIgIALAAQALAAAIAIQAJAJAAAKQAAALgJAJIgEADIgFADQgFACgFAAg");
	this.shape_693.setTransform(134,200);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.rf(["#CC792E","#5D1F33","#000033"],[0,0.604,1],1.1,-14.5,0,1.1,-14.5,100.7).s().p("AuvApIAAhRQNEBuQbhNIAAAwg");
	this.shape_694.setTransform(191.6,245.9);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],1.1,-11.1,0,1.1,-11.1,100.7).s().p("AuvgGIAAgzIATABIdMAeIAAAzQm0AhmPAAQoyAAnqhAg");
	this.shape_695.setTransform(191.6,242.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.rf(["#CCB12A","#A45030","#351A32"],[0,0.604,1],0.1,-6.8,0,0.1,-6.8,100.7).s().p("AulgNIALgBIcjAAIAdAAIAAAdg");
	this.shape_696.setTransform(192.6,238.2);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],3.9,-29.5,0,-4.1,-29.5,127.6).s().p("AuPCRIgCgLQgEgLABgEQgBgGAHgHQAIgJAJABQgQgOgDgFQgBgCAAgLQAAgHACgDIAJgIQgIgJgKgHQgFgGAAgOQAAgMAagMQgaggAAgHQAAgRAFgGQAFgFAQgEIgIgXQgGgNAAgLQAAgJABgCQADgEAKACIAJAIQAOAJANgFQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAQAAAGgKANQgLAPAAASQgBARAIAKQAJANARAAIgNATQgIANAAAIQAAAKAHAEIAUAJQgDARAAAIQAAATAXAKQAPAGANAAQALAAAGgGQAbAeAaAAQAPAAAKgHQAIgFADgHIABAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAIAXAiAAQASAAALgQQAMgQAEAAQAKAAAHAGIAPAAQAAgVAGgMQAIgMAMAAQAMAAAKAMQAKAMAHAAIAMAkQAFAOASAAQANAAAEgBQAGgDAHgOIAJALQAIAHAMAAQAOAAADgBQAHgDADgOQAEAEAJAFQAKAGAFAAQARAAAIgFIAJgKQAGAQAEAFQAGAGAOAAQAXgGAHAAQAhASAKAAQAaAAACgkQAWASAKAAQAGAAAMgKIANgLQAFAAAKADIAPADQAQAAACgBQAHgEAAgSIAQALQAFADAGAAIAOgBQAHgCAEgIQALAbAMAAQAFAAAGgFIAUgQIACgDQAEAaAfAAQATAAAPgOQAMgMAAgIQAAgDgEgJQgGgIAAgHQAAgHADgDQAFgDALAAQANAAADABQAHACADAPIAAADQAMgQAHgFQAFgDAJAAQAVAAAAAbIgDASQgEANAAAEQAAASATAAQAEAAAMgFQAQgGAGgHQACAhAlAAQASAAAKgRQAGgTADgDIASAGQAQAGAKAAQATAAAEgNQADgHgBghIAYAAIAIAHQAHAEAAAEQAUgPAOAAQAOAAgBANQAAAFgCAHQgEAIAAAEQAAAEAMAMQAMAMAEAAQAKAAAOgXQAMgTACgKQAAAIALAIQAMAHAMAAQALAAAMgSIAPgbQALAAAHAGQAHAGANAAQAUAAADgCQAEgBANgUIATAIQAQAHADgBIACAAQgNAOAAAHQAAAJAJAGQAGADAFAAQAOAAATgSQANANACAAQAJAIALAAQAMAAADgIQAEgFADgRIAAgBQAAAFAGAIQAJAMAGAAQARAAAKgWQAHgQAAgMIAUACIAHAIQAGAHAAAGQAAAFgHAIIgKALQAFACAHAJQAFAIAAAHQAAAKgBADQgDAJgNAFIAGAIIACAGg");
	this.shape_697.setTransform(191.4,222.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],2.9,-23.3,0,-5.1,-23.3,127.6).s().p("AkMC2QgIAAgWAFQgOAAgGgGQgFgFgFgPIgJAKQgIAFgRAAQgFAAgKgGQgKgGgDgDQgDANgHADQgDACgOAAQgMAAgIgHIgJgLQgHANgHADQgDACgOAAQgRAAgFgOIgNgkQgGAAgKgMQgKgNgMAAQgNAAgHANQgHAMAAAUIgPAAQgGgGgKAAQgFAAgLAQQgLARgSAAQgjAAgHgYQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBAAQgDAHgJAGQgKAGgOAAQgbAAgageQgGAGgLAAQgNAAgPgGQgXgJAAgTQAAgIADgRIgUgJQgHgEAAgKQAAgKAHgNIAOgUQgRABgJgNQgIgLAAgPQAAgSALgOQALgOAAgGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQgNAFgOgIIgKgJIAEABQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQgMgGgCgHIgBgLIAAgCQABgKAGgKIADgBQAKgGAWACQgGgKAAgNQAAgOASgEQARgEAMAHQgFgMAIgOIAAACQAAAXAMAHQAIAFATgCQgHAHgRAKQgMAKAAAPQAAAOAHAEQAHAEAWgCQgYAjAAAWQAAAUAMAMQAJAJAIAAQAGAAAHgGQAFgFAAACIADAAQgPAPAAAVQAAANAGAIQAIAJANAAQAaAAAHgGQAEgIAEgEQgEASAKANQAKAOARAAQANAAAKgHIANgOQAGAAAKAFQAJAEADAAQAeAAgLgvIAAgDQAPAFAGADIAEAAQgEgFAAgQQAAgPAEgDQADgEAPAAQAMAAAKAEQAIADANAJQAAgbAiAAQAPAAAFAIQADAFAAALQAAABgNAIQgOAMAAAIQAAALAMAIQAKAGAHAAQAMAAAJgJQgDAMAMAOQAKANAKAAQARAAAIgbQARAdAGAGQAGAGAbAAQATAAAHgLIAHgSIAPATQAJAIAPAAQAXAAAMgWQAJgPAAgOQAGAYAfAAQAOAAAIgHQAIgHAHgQQALAUAEADQAMANAXAAQAPAAAMgQQAFgHADgGQgFAQAMANQAMAMAUAAQAaAAANgPQAKgJAAgIIgBgFQgCgBAAgEIgFgJIgKgLIAAgiIAYAAQAPAMAAAEQAAgEgDgSQAAgQAGgFQADgDAPAAQAIAAAMAGQAIgXAdAAQAVAAACAZIgDAaQAAAjAdAAQAJAAAIgIIAKgMQgBAXAJARQAJATAOAAQADAAAOgNIARgRQANAYAbAAQARAAAHgVQAGgSgFgIIAHAFQAFAEADAAQARAAADgcQACgZgFgNQAQgBAHgNQAEgIABgRIAbAAQAHACAFAIQAFAHAAAKIAAgGQAJgEADAAIADAGQADAFAAAEQAAAFgMAUQgMAVAAAFQAAALAJAFQAFADAHAAQAPAAAIgMIAJgTIACgBQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAFAIAFAEQAGAFAMAAQAWAAALgRQALgSgJgKQANAIAGAAQAJAAAGgNIAIgaQAFgJAJAAQALAAABgCQAKAOAFAAQAMAAAMgNQALgNADAAIAMAAQgPAPAAAmQAAANAHAIQAEAFADAAQALAAAMgPQAKgNAAgEQAIAqAWAAQAXAAAHgZQAHgWgHgNQAPAGAOgKQANgKAAgOIgCgHIgFgLQAFACALAAQALAAADgMQAFgPALgNIASgBQAIACAAAPQAAAJgGAIIgLANIARAMQAFAEAAAPQAAAHgFAFQgGAEAAAJQAKgDAHAHQAHAGAAAKQAAAHgFAIQgDAFgHAIQAIAAAGAFQAHAHAAALQAAAJgDACQgKAIgIAJIANAPQAFAEAAAFQAAAKgBACQgDAEgOACIAFAGIgUgDQAAANgHAPQgKAWgRAAQgHAAgIgLQgGgJgBgEIAAAAQgCASgEAFQgEAHgLAAQgLAAgJgHQgCgBgNgMQgUARgNAAQgFAAgHgDQgJgGAAgJQAAgHAOgOIgDAAQgCABgQgHIgTgIQgNAUgEACQgDACgUAAQgNAAgHgGQgIgHgKAAIgPAbQgMASgLAAQgMAAgMgHQgLgHAAgJQgCALgMATQgOAXgLAAQgDAAgMgMQgMgMAAgEQAAgEADgIQADgIAAgEQAAgNgOAAQgOAAgTAPQgBgEgGgEIgIgHIgYAAQABAggDAIQgEANgUAAQgJAAgRgGIgRgHQgDADgHATQgJASgTAAQgkAAgCghQgGAGgQAHQgMAFgEAAQgTAAAAgSQAAgFADgNIADgRQAAgcgUAAQgJAAgFAEQgHAEgMAQIAAgDQgEgOgGgDQgDgBgOAAQgLAAgEADQgDADAAAIQAAAGAFAJQAFAJAAADQAAAHgNAMQgPAPgSAAQgfAAgFgbIgCADIgUAQQgGAFgCAAQgOAAgMgbQgDAJgHACIgOAAQgGAAgFgDIgQgLQAAASgHAFQgCABgQAAIgPgDQgLgDgEAAIgNAKQgMALgGAAQgLAAgWgSQgBAjgbAAQgKAAgggRgAN2gzIADAAIAAAAIgDAAg");
	this.shape_698.setTransform(192.4,215.9);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],5.4,-14.7,0,-2.6,-14.6,127.6).s().p("AlKCvQgGgFgRgdQgIAbgRAAQgKAAgKgNQgMgOADgNQgJAKgMAAQgHAAgKgHQgMgHAAgLQAAgIAOgMQANgKAAgCQAAgKgDgFQgFgIgPAAQgiAAAAAbQgNgJgIgDQgKgEgMAAQgPAAgDADQgEAEAAAQQAAAQAEAGIgEAAQgGgEgPgFIAAADQALAwgeAAQgDAAgJgFQgKgFgGAAIgNAOQgKAIgNAAQgRAAgKgOQgKgNAEgSQgEADgEAJQgHAGgaAAQgNAAgIgKQgGgIAAgMQAAgVAPgSIgDAAQAAgBgFAEQgHAGgGAAQgIAAgJgJQgMgMAAgTQAAgWAYgiQgWACgHgEQgHgDAAgOQAAgPAMgKQARgKAHgIQgTACgIgFQgMgHAAgXIAAgCIACgDQAKgSAWAAQASAAANAPIAEAAQgFgYADgIQAFgNAZAAQgEADgCADQgCADAAAGQAAAKANAFQAKAFAKgCQghAMAAAXQAAAIAGAEQAFADAFAAIALAAQAGgCAAgGIADAAQgDADAAAMQAAAKAGAHQAGAGAGAAQAMAAAJgPQAIgMAAgIIAAgDQADAGAFAHQAIAIAIgBQAJgFgCgYIgEgbIAVAAIAbAPQgFgeAUAAQAKAAABABQAEACACAMQADgJACgDQAFgGAJAAQAKAAAJAMQAGAKAAAFIAFgSQAEgGAPAAQAJAAAHAGQAHAFABAFQgBgLAJgHQAJgHAOAAIAKABQAFACAFAMIAFgPQAFgMAKAAIAXAAQADADAAAHQAAADgKAVIgKAVQAAAHAJADQAIADAIAAQAMAAACgBQAEgCACgMIAJANQACACAIAAQAHAAAJgMQAIgJAEgLQAGAFAJACIAHACQAaAAAEgSQADgLgIgQIAbAAQABgUAWAAQATAAAIALQAGAHgBAHQAEgNARAAQANAAADAOQAGgGAHAAQAIAAAHAHQAIAHAAAKIALgMQAEgDAKAAIAQABQAEACACAMQgBgMAIgCIAOgBQAPAAADACQALAGACAZQAEgFAKgGQANgHAJAAQARAAADAGIAAAMQAAAIgJAGQgJAGAAAJQAAAQAZAAQAXAAAOgZQACAFAHAGQAGAHAHAAQAPAAAHgMQAGgJAAgKQAAgEgGgSIAegJQARAAAEAMQACAFAAAQQAGgGADgCIAIgBQANAAACACQAFAHgDAgIApAAQAHgDAKgSQAIgRAFAAQAMABAIAFIAGgIIAHgKQAEABAIAIIAMALQgCgLADgFQAEgHAPAAQAfAAgBAXIAGgLQAIgJAPAAQALAAAGAHIAEAFQABgFADgCQACgCAQAAQAQAAAEABQALAEADASQAIgUAVAAQAGAAAEAGQAGAHgDAKIAAADQACgMAKgLQALgMAMAAQAKAAAHAHQAJAIgFALQAGgDADAAIADAAIgJAMIAAAYIASAAQATgHAJgMQAKgMgGgKIAJALIAWAAQAAgdASAAQAKAAAEALIAAAEIAAADIABgCQACgEAIgFIAPgNIAWAAQAAAVgDAIQANgOAUAAIAGAAIAJABQAFADgDANIAAADQAOgIACAAQAMAAAFAMQADAHAAAGQAAAEgDAGQgDAGAAADIgDAAIADAAIAAAAIAJgCQgLAOgFAPQgDALgLAAQgLAAgFgBIAFAKIACAIQAAALgNAKQgOAKgPgFQAHANgHAVQgHAZgXAAQgWAAgIgpQAAAEgKAMQgMAQgLAAQgDAAgEgGQgHgHAAgNQAAgnAPgNIgMAAQgDAAgLAMQgMANgMAAQgFAAgKgNQgBAAgLABQgJAAgFAJIgIAaQgGANgJAAQgGAAgNgJQAJALgLASQgLATgWAAQgMAAgGgIQgFgEgFgHQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgCABIgJAVQgIAMgPAAQgHAAgFgDQgJgFAAgLQAAgGAMgVQAMgVAAgEQAAgEgDgFIgDgGQgDAAgJADIAAAGQAAgJgFgIQgFgHgHgDIgbAAQgBASgEAHQgHAOgQAAQAFANgCAZQgDAegRAAQgDAAgFgDIgHgFQAFAIgGASQgHAUgRAAQgbAAgNgYIgRASQgOANgDAAQgOAAgJgTQgJgSABgXIgKAMQgIAJgJAAQgdAAAAgmIADgaQgCgZgVAAQgdAAgIAYQgMgGgIAAQgPAAgDADQgGAEAAAQQADATAAAFQAAgFgPgNIgYAAIAAAkIAKAMIAFAIQAAAFACABIABAFQAAAHgKAKQgNAOgcAAQgSAAgMgMQgMgMAFgQQgDAGgFAHQgMAPgPAAQgXAAgMgMQgEgEgLgUQgHAQgIAHQgIAIgOAAQgfAAgGgZQAAAPgJAPQgMAWgXAAQgPAAgJgJIgPgSIgHASQgHAKgTAAQgbAAgGgGgAt9gbQAAgKAHgFQgGAJgBALIAAgFg");
	this.shape_699.setTransform(189.9,207.2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],3.3,-0.9,0,-4.7,-0.9,127.6).s().p("Aq8BQQgGgIAAgKQAAgLADgDIgDAAQAAAGgGACIgLAAQgFAAgFgDQgGgEAAgIQAAgXAhgNQgKADgKgFQgNgDAAgLQAAgFACgEQACgCAEgEIABAAQAWAAAOAWIAAACQAAgSAGgHQAGgHARAAQARAAAKARIANgNQAJgHANAAQAOAAAJAHIANANIAOgTQAIgGAVAAQAagBACAVQAPgQAHgEQAMgHASAAQATAAAGAMQANgKAHgDQALgIASABQAPgBAHAHIAKAOQgBgaAoAAQAQAAANAOQABAAAAAAQABAAABABQAAAAAAABQAAABAAAAQAGgPACgBQABgBAPAAQAbgCAIAOQAfgiAZAAQAMAAALAMQAIAJACAHQAUgZAUAAQAOAAAHANQAHAPADAFIASgRQAJgHAQAAQARAAAGAIQAGAHAAATQALgOAHgEQAIgGAWAAQAWAAADABQAMAGAKAaQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQALgUADgBQAIgIAZABQAygBANAwQAMgUAFgFQAIgIAWABQASAAANAGQAPAJABARQACgPAOgJQAKgFAKAAQAEAAAEAEIATASQADgHAPgNQAPgMAFAAQANAAAJAHQAKAIgBANQACgQAOgEQADgBAQAAQAOAAACACQAIAFADAZQAAgLAPgJQANgHAHAAQALAAAEAHIAJAXQAFgKAPgLQAQgLAJAAQAXgBACAVQABgEAEgBQADgCAJAAQAIAAAGAOQAGAMgEAFQAGgFAEgEQAIgGAOAAQATAAAEAIQADACgBAQQgEgKgKgBQgSABAAAdIgWAAIgJgMQAGALgKAMQgJAMgTAHIgSAAIAAgYIAJgMIgDAAQgDAAgGACQAFgLgJgHQgHgIgKAAQgMAAgLANQgKALgCAMIAAgDQADgLgGgGQgEgGgGAAQgVAAgIAUQgDgSgLgEQgEgCgQABQgQAAgCABQgDADgBAFIgEgFQgGgIgLAAQgPABgIAIIgGAMQABgYgfAAQgPAAgEAIQgDAEACAMIgMgLQgIgIgEgCIgHALIgGAHQgIgEgMgBQgFgBgIASQgKARgHAEIgpAAQADgggFgHQgCgDgNAAIgIACQgDACgGAFQAAgQgCgEQgEgKgRAAIgeAHQAGARAAAFQAAAKgGAJQgHAMgPAAQgHAAgGgHQgHgGgCgFQgOAYgXAAQgZAAAAgPQAAgKAJgGQAJgFAAgJIAAgMQgDgFgRAAQgJAAgNAGQgKAHgEAEQgCgWgJgHQgDgBgPAAIgQABQgIACABAKQgCgLgEgBIgQgBQgKAAgEACIgLALQAAgIgIgHQgHgIgIABQgHAAgGAFQgDgOgNABQgRgBgEANQABgHgGgGQgIgLgTAAQgWgBgBAVIgbAAQAIAPgDAKQgEASgaAAIgHgCQgJgDgGgEQgEALgIAIQgJANgHAAQgIAAgCgDIgJgMQgCAMgEACQgCABgMAAQgIAAgIgDQgJgEAAgGIAKgVQAKgTAAgDQAAgHgDgDIgXAAQgKAAgFALIgFAOQgFgKgFgDIgKAAQgOAAgJAHQgJAFABALQgBgFgHgFQgHgEgJgBQgPABgEAEIgFASQAAgGgGgKQgJgKgKABQgJAAgFAEQgCADgDAJQgCgMgEgBQgBgBgKAAQgUAAAFAcIgbgOIgVAAIAEAbQACAXgJAGQgIABgIgJQgFgGgDgGIAAACQAAAJgIAMQgJAPgMAAQgGAAgGgGg");
	this.shape_700.setTransform(192,193.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],-11.9,-11.1,0,-10,-11.1,29.3).s().p("AgfBlIgVgUQAAAGgIAIQgGAGgIACQAAgPgSgIQgRgHgNADIAAgCIACgGIABgGIgBgJIAJABQAaAAAOgNQALgKAAgLQAJAIAKADQAJAEAIABQAKAAAEgEQAFgDAAgKQAAgIgNgXIACAAIAFACIAHACQAHAAAGgEQAJgEAAgMQAAgQgRgMQgDgDgQgIQAJgCAJgIQANgMAAgQIAAgDQAFAGADAIQAGARgEAOQANgRAPAAQANAAAAAWIgBAOIgEAEQAMgHANgBQAJAAAIAIIAAAIQAAAQgSANQgMAGgMADIAOAGQAGAEAAAHQAAAGgDAGQgEAHgIADQAZgCARANQARAKAAASQAAAOgHAFQgHACgUAAQgcABgYgHQgRgFgEgEIgDAAQgBALgIAEQgEAEgMAAQgLAAgIgIg");
	this.shape_701.setTransform(512.4,319.2);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],-18.7,-11.8,0,-16.8,-11.8,29.3).s().p("Ag0CNIgfgEIgeACQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBIgDgHQgHgLgKAAQgDAAgJADIgKAFIAJgLQAGgIAAgIIAAAAQAIgCAGgHQAIgHAAgHIAVAVQAIAHALAAQAMAAAGgDQAIgFABgLIADAAQAEAEARAFQAYAHAaAAQAUAAAHgDQAHgEAAgPQAAgRgRgLQgRgMgXABQAGgDAEgHQADgGAAgFQAAgIgGgDIgMgGQAKgCAMgIQASgNAAgPIAAgJQAEAFAEAIQAIAQAAALQAAAHgEAFQgGAEgDADIAKgBQAJgDAIAAQAVAAASALQAVAMAAASQAAAKgNAHQgIAEgPAEIgCAAQAnAMAQAJQASALAAAMQAAANgrAHQgjAGgxAAQgsAAgngDgAAjANIABAAIAAgBIgBABgAhGiCIgEgGIgFgHIAHAFQAMAJAHANIAAABQgHgKgKgFg");
	this.shape_702.setTransform(519.2,319.9);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.rf(["#E0E038","#27B13C","#0E645D"],[0,0.592,0.984],38.4,-25.4,0,38.4,-25.4,59.1).s().p("AgdASIAAgCQABgLAIgLQAKgNALAAQAIgBAJAHIAIAGQgDAHAHAIIgGgDQgGgEgEAAQgHAAgHAIQgCAHgBAEIgagCg");
	this.shape_703.setTransform(410.7,330.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.rf(["#9CB11E","#005666","#001E3C"],[0,0.518,1],-28.2,-19.7,0,-24.4,-19.7,59.1).s().p("AAWBfIgEAAIg8AAQACgHAAgIQADACAEABIADABQAHAAADgEQACgDgCgLQAEAGADABIAIAAQAFAAAAgFQAAgIgEgFIgIgHIAIgBIAFgEQAFgEAEgFQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQAFAAADADQACACAAAIIAAgCIAFgFIADgDQAEAAAFAFQADAFAAADIADgEIAEgFIANAAQgGAKAIAIQAFAGAKAAQAIAAAGgGQAGgGgCgIQACAJADABQACABAHAAQAFAAAGgEIAMgIQAAAIAGAHQAGAFAIAAQAIAAADgDQADgDAAgGQAAgHgCgBIACAAQAEAFAEABQADACAFAAQAUAAAAgPQAAgNgKgKQgHgJgLgDQAHgBADgBQADgDAAgFQAAgKgNgKIgRgNQAGgCAHgEQAJgIABgMQgBgLgGgGIgKgIQAPAGAJARIADAKIABADQAFANgDAMIAMgHQAMgGAGAAQAUAAALAPQAJALABARIABAGIgBAHIgCAFIAAADQAOgDAQAHQASAIAAAPIAAABQAAAHgGAJIgIAKIgCABIABAAIABgBIAKgEQAIgDADAAQAKAAAHAKIADAIQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgvACIgKAAIh7AEIgKAAIh5ACIgJAAgAkBBdIgLgBIgCAAIhFgCIABAAQAFgEAAgGQABgEgFgEQgEgFAAgCQAAgKAIAAIAFACIAEADQADgHAFgDQAEgDAGAAQAEAAAEAHQAFAIAMAAIAIAAQADgCAAgFIAFAHQADADAFAAIAHgCIAGgBQABAEAFAGQAFAJAEAAIAKgIQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAIADAGQADADADAAQADAAAFgEIAKgHQAAAPAFAGIhIgBg");
	this.shape_704.setTransform(473.5,325);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.rf(["#E0CB31","#009933","#003A71"],[0,0.592,1],0.8,-6.8,0,0.8,-6.8,59.1).s().p("AAAAAIAAAAIAAABg");
	this.shape_705.setTransform(448.2,312.2);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],-11.1,-16.2,0,-7.4,-16.2,59.1).s().p("AA6CCIgFAAIhEgBQgFgGAAgPIgJAHQgGAEgDAAQgDAAgDgDIgDgGQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgKAIQgFAAgFgJQgFgGAAgEIgHABIgHACQgFAAgDgDIgEgHQAAAFgEACIgIAAQgMAAgEgIQgFgHgEAAQgGAAgEADQgFADgCAHIgFgDIgFgCQgIAAAAAKQAAACAEAFQAFAEAAAEQAAAGgGAEIgBAAIhDgCIgHAAIgCAAIh2gFIgHgBIgEAAIAEgCIAEgDQAGgIAAgMIAAgEQgBgDgCgCIABAAIAEACIAGABIAFgBIAFAAQAAgIgBgCIABAAQACADAAAFQABADAFAAQAIAAAEgDQAFgFAAgKIACAAQAAAFAGAEQAEADAGAAQAJAAAAgHQAAgFgDgJIADAAIAAgQQACgGAKAAIAHAAQAEABACAGIAAgBQAAgJADgGQAEgGAGAAQAFAAADAGIACAKIAGgBIAFAAQgDAGAGAHQAFAGAHAAQAJAAAGgEIAJgJQgBAIAIAFQAFADAFAAQAGAAACgDQAEgDAAgIQAAgFgEgKIACAAIACACIACAAIADgMQACgGAJAAQAJAAAGAGQAGAHgCAGIAFgLQABgEAIAAQAGAAADACQADACAAAGQAAAEgDAHIgDAIQAAADAEADQAHAFAOAAQANAAADgDQAFgDAAgLQAAgJgEgGIABAAQAEAHADACIAKAAIAJgBIAHgFQAEAGAFADQAFAFADAAQADAAAEgDIADgFIAEANQAEAPANAAQAJAAAEgGQACgFABgLIAAACIAMAMQAIAFAIAAQAJAAAEgJQADgIgCgOQAEADAIAKQAJAIAGAAQAHAAACgEIABgMIgBgJIgBgIQAAgHABgDQADgHAIAAQAJAAABACQADAAADAIQADgJAFgEQAGgHAIAAQAJAAAHAKQAFAFAAAGQACABADgCQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIAEAQQACAEAKAAQAGAAAIgFQAFgDAFgEQACAJAHAIQAIAKAIAAQAKAAAGgGQAGgHAAgLIgBgEIAAgCIAGAEQAEADAHAAQATAAAAgNQAAgFgNgIQgLgKgNgHIACAAQAKAAADgDQADgDAAgJQAAgIgMgJQgWgQgJgJIACAAQAHgCAGgEQAMgJAAgRQAAgKgEgGIgBgBIABAAIAHADQAFACAEAGIAHAKIACAEQADAIAAALQAAAMgDAHIgGAJIgDABIABAAIACgBIAGgDQAHgDANAAQALAAAJAEIAKAIQAHAGAAALQAAAMgKAIQgHAEgGACIASALQAMAKAAAKQAAAFgDADQgCABgIABQALAFAIAJQAJAKAAANQAAAPgTAAQgGAAgDgCQgEgBgDgFIgCAAQACABAAAHQAAAGgEADQgDADgIAAQgIAAgGgFQgGgHAAgIIgMAIQgGAEgEAAQgIAAgBgBQgDgBgDgJQACAIgFAGQgHAGgIAAQgKAAgFgGQgHgIAFgKIgMAAIgFAFIgDAEQAAgDgDgFQgEgFgFAAIgDADIgEAFIAAACQgBgIgCgCQgCgDgGAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAQgEAFgFAEIgHAEIgIABIAIAHQAEAFAAAIQAAAFgFAAIgHAAQgEgBgDgGQABALgCADQgCAEgHAAIgEgBQgEgBgDgCQAAAIgCAHIhEAAg");
	this.shape_706.setTransform(456.4,321.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],10.7,0.3,0,12.5,0.3,29.3).s().p("AgBApQgFgCgEgFQgDgFAAgEIABgFIACgFIAAgIIgLAAQgEADgBADIgCAAQACgDAAgJIgLAAIgHAKIAAAHQgFgGgFgCIgHgDQAAgIAFgJQAKgSAVAAQAQAAAIAJQAFAIgEAJIALgVQAMgRALAAQATAAAIARIABABIgHgBQgKAAgFAKQgFAIACAIQgCgDgLAAQgIAAgBAFIAAANIgJAAIAAAHIAEAHIAAAJg");
	this.shape_707.setTransform(489.8,307.7);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],0.7,-6.5,0,2.6,-6.5,29.3).s().p("AAFBjQgCgQgGgLQgMgPgUAAQgGAAgMAGIgMAHQADgMgEgOIgBgDIgEgKQgJgQgPgGQgJgFgLAAQgNAAgHADIgGADIAGgJQADgEAAgMQAAgMgDgHIgCgEIgHgLIAAgHIAIgKIAKAAQAAAKgCACIACAAQABgCAFgDIAKAAIAAAHIgBAGIgCAEQAAAEADAFQAEAFAFADIAOAAIAAgJIgEgIIAAgHIAIAAIAAgNQACgGAHAAQALAAADAEQgDgJAFgJQAFgJALAAIAGAAQAGAMgCAIIgBABIAAACIABgDIAIgLIAHgHQALgKAIAAQALAAAEAGQAFAGAAAOIgBAIIgBAJIACgCQALgPAUgNQAKgHAJgCIAEgCQAGgCAEAAQAOAAANAJIAFAHIAEAGQALAFAHAKIAAADQAAAQgPANQgKAHgIADQAQAHAFAEQARAJAAAQQAAAMgKAFQgGADgJAAIgHgBIgFgCIgBAAQANAYAAAIQAAAKgFAEQgEADgKAAQgIAAgKgEQgKgEgJgIQAAAMgLAJQgNANgbAAIgIgBg");
	this.shape_708.setTransform(499.7,314.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],-0.1,-9.8,0,3.6,-9.8,59.1).s().p("AlACKQAAgPAJgLQAJgMAOAAIAKABIAJADIAAgBIgCgIQgDgHAAgGQAAgSAMgNQAPgRAXAAQAJAAAFAEIABAAQAGgbAHgKQAHgIAMgDIAHAAQARAAALATQAIAPgBAMQAFgVANgLQANgIAUAAQAMAAAJAEQAIAGACAHIAAgBIgEgMQgCgHAAgHQAAgTAMgNQAMgOAUAAQAKAAAGADQAIADAEAFIgCgCIAAgBIgCgHIgBgJQAAgTAKgTQAOgYAXAAQAWAAAMAMQAJAJABAMIAAgCQgBgPASgQQARgPARAAQAdAAAWAYQAUAVAAASIgCANIACAAIAAgBQAIgOANgKQATgPAWAAQAYAAAMAWIACAEIgCgBQgGgFgMAAQgNAAgPANQgNALgEAIQACgEgCgDQgDgDgFAAQgMAAAAAPQgBAIACAKQAAAJgJAAQgEAAgFgIIAAAOIgJAAQgLgGgFgIQgDgGAAgHIAHgQQAIgNAAgJQAAgKgHgGQgGgGgLABQAAgJgHgGQgGgFgFAAQgHAAgJAFQgHAGgCAEQAAgFgFgCIgEgDQgKAAgGAPQgFALAAAJQAAAIAEAHIAGAKIgFgCIgFAAIgFAAQgDABgCAEIgBAAIAAACIgCgEIgBgDIgHAAIgEACQgCADgBADIAAgFIAFgXQAAgNgHgHQgFgGgKAAQgLAAgNANQgOAPgIAUIAAALQAGAAALAJQAKAIAAAEIAAAJIgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgFAAgEgEIgEgFIAAgDIAAACIAAABQABAGgEAHQgGAKgIAAQgHAAgDgGIgBgMQAAgIAAgDQgDgGgHAAQgRAAgHAVQgDAKAAANQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIADAIQACAHADACIAAAGIgCABIgDABQgEAAgGgFQgHgGgCAAQgDAAgDAEIgGAHQABgJgDgGQgEgJgJAAQgMAAgRASQgNAQgCAJIAAABIgBAAQAAgEgEgDQgDgDgEAAQgDAAgIAGIABgGIACgHQAAgKgKgKQgHgHgDAAQgKAAgKAUQgFAMgDAOQgEgEgHgCIgJgBQgUAAgKALQgJALAAATIAAAKQABAEAEAFQgGgCgEAHQgEAFAAAIQgHgFgMAAQgRAAgMANQgGAFgCAHIgBgIgAiHAoIAAACIAAgEIAAACg");
	this.shape_709.setTransform(445.4,315.2);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],-3.6,-12.6,0,0.2,-12.6,59.1).s().p("AkzCZIgIAAIgcgCIgqgCQABgFAFgGQAHgJAHABQAEgBAFAEIAGADQgGgIADgJIABABIgBgCQACgGAFgGQANgMAQAAQANAAAHAEQAAgHADgFQAEgIAGACQgDgEgBgFIAAgKQAAgSAJgLQAKgMATABIAJABQAHACAEAEQADgOAGgMQAJgTALAAQADAAAHAIQAJAJAAAIIgCAIIgBAGQAIgGADAAQAFAAADADQAEADAAAEIAAgBIABgBQABgIAOgQQAQgQANgBQAJABAEAIQADAHgBAHIAFgGQAEgDACAAQADAAAGADQAGAGAEAAIADgBIACgBIAAgEQgCgDgDgGIgCgIQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgPADgKQAGgVARAAQAIAAACAGQACADAAAIIACAMQACAGAIAAQAIAAAGgKQAEgIgBgGIADAGQADAEAEAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIACAAIAAgJQAAgFgKgHQgKgJgFAAIAAgLQAHgVANgOQANgNAKAAQAKAAAGAGQAGAHAAANIgEAWIAAAGQAAgEACgCIAEgDIAIAAIAAAEIACAEIABgCIABAAQACgEACgCIAFAAIAGABIAEACIgGgLQgDgGAAgIQAAgJAFgLQAGgPAKAAIAEACQAEADABAFQABgFAIgFQAIgFAHgBQAGABAGAFQAGAGAAAJQALgBAGAGQAHAGAAAKQAAAJgHANIgIAQQAAAHAEAGQAEAHAMAHIAJAAIAAgOQAFAHAEAAQAIAAAAgIQgBgKAAgJQABgOALAAQAGAAACADQACADgBAEQAEgJANgKQAPgNAMAAQANAAAGAFIABABQAFALADASIAIgGQANgIAOABQAKAAAHACIABABQAEAFAAAKQAAARgMAKQgGADgHACIgCAAQAJAKAWAPQAMAKAAAIQAAAHgDACQgDADgKABIgCAAQANAGALAKQANALAAAEQAAAOgTAAQgHgBgEgDIgGgEIAAACIABAEQAAALgGAHQgGAGgKAAQgIAAgIgKQgHgIgCgJQgFAFgFADQgIAEgGAAQgKAAgCgDIgEgRQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgDADgCgCQAAgGgFgHQgHgKgJAAQgIAAgGAIQgFAFgDAJQgDgIgDAAQgBgCgJAAQgIAAgDAHQgBADAAAHIABAIIABAJIgBAMQgCAEgHABQgGAAgJgJQgIgKgEgCQACANgDAIQgEAKgJAAQgIgBgIgFIgMgMIAAgCQgBALgCAGQgEAFgJAAQgNAAgGgOIgEgOIgDAFQgEADgDAAQgDAAgFgEQgFgEgEgFIgHAEIgJABIgKAAQgDgCgEgHIgBAAQAEAHAAAIQAAALgFADQgDADgLAAQgOAAgHgFQgEgCAAgDIADgIQADgIAAgEQAAgGgDgBQgDgDgGAAQgIAAgBAFIgFAKQACgFgGgHQgGgHgJABQgJgBgCAHIgDAMIgCgBIgCgBIgCAAQAEAJAAAFQAAAIgEADQgCADgGABQgFgBgFgDQgIgFABgIIgJAJQgGAEgJAAQgHAAgFgGQgGgHADgGIgFAAIgGABIgCgKQgDgGgFAAQgGAAgEAGQgDAGAAAJIAAABQgCgFgEgCIgHAAQgKAAgCAGIAAARIgDAAQADAIAAAFQAAAHgJAAQgGABgEgEQgGgDAAgGIgCAAQAAALgFAEQgEADgIAAQgFAAgBgDQAAgEgCgDIgBAAQABACAAAHIgFABIgFAAIgGAAIgEgCIgBAAQACABABADIAAAFQAAALgGAIIgEADIgEACIgJAAgAlfB8IABAAIgCgEIABAEg");
	this.shape_710.setTransform(448.8,317.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.rf(["#9CDC2D","#00857E","#002C48"],[0,0.518,1],-10.4,-9.6,0,-8.8,-9.6,25.3).s().p("AhJBlIgLAAIhMgFQAEgFAMACIgIgHQgBgCAAgGQAAgGABgBQADgDAGAAIAEAAIAFADQgBgCABgIIAAgIIAIAAQAFADAAADIADAFQABgGAEgHQAGgJAEAAQAHgBABAHIACAMIAHAAIAGgFIAEgEIAGAMQADADAFAAQALAAAFgMQACgKgCgKQABAEAGAAIAHABQALAAADgDQADgDgBgHQABgJgLgFQgMgDAAgJQAAgCACgDQACgCAGAAIAEAAIAFAGQgCgGAFgGQAFgGAGAAQAFAAACADQACACAAAFQAAgJAGgFQAGgHAKABQAIgBAAAMIABAHQAEAEAHAAQAGAAADgEQACgFAAgHQAAgHgCgJQAJAFAKgGQAJgFAAgLQAAgLgJgGQAKAAAHgBQAMgDgBgMIAAgBQAKANADAPQAAgXADgHQAFgLAMAAQAMAAAIALQAEAFACAHQgMADgGAKQgHAKgHAaIAAAAQgFgDgJAAQgYAAgOARQgMANAAAPQAAAHADAHIACAIIAAABIgJgDIgKgBQgOAAgKAMQgIALAAAPIABAHIABACIgBgBIgIgFQgJgHgGAAQgNAAgKAOQgIAMgBALIAAADIgmgDg");
	this.shape_711.setTransform(411.3,322.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.rf(["#E0F300","#00A895","#00354A"],[0,0.518,1],-5.3,-9.1,0,-3.7,-9.1,25.3).s().p("AiUBiIgBgBIgDgHQAAgGAGgGQAGgFAHAAQAHAAAHADQgDgIAAgEQAAgHADgEQADgEADAAQAEgBAFADQAGADADAFIABgBIAAAAIAFgHIAGAAQgEgDgBgGIAAgJQAAgTALAAQAGAAAHAJQAHAIABAHQACgEADgBIAFAAQgDgJAAgFQAAgGACgEQAGABAFAFIAHAJQABgDAFgGIAFgGQgPgFAAgJQAAgFACgCIADgDIACAFQACAEACACIAAgGQAEABACACQADAEACABQgCgEADgCIAGAAIgIgOQgGgMAAgIQAAgKAEgHQAEgLAJABQAIAAAPAUQAMARABAGQAAgEADgDQAEgEAGAAQgDgRADgTQAEgYANABQAIAAAFACIAGAHQALAMAJAXIABADIAAgBIgBgCQgEgVAKgNQAJgNAPgBQAIAAAKANIABACIAAABQAAAMgMADQgGABgKAAQAJAGAAALQAAALgKAFQgJAGgKgFQADAJAAAHQAAAHgDAFQgDAEgFAAQgIAAgEgEIgBgHQAAgMgHABQgLgBgGAHQgFAFgBAJQAAgFgBgCQgDgDgGAAQgGAAgFAGQgGAGACAEIgEgEIgFAAQgGAAgCACQgCABAAAEQAAAJAMADQALAFAAAJQAAAHgDADQgDADgKAAIgIgBQgGAAgBgEQADAKgDAKQgCAMgLAAQgGAAgCgEIgGgLIgEAEIgGAFIgIAAIgBgMQgCgHgHABQgEAAgGAJQgEAHgBAGIgCgFQgBgDgFgDIgHAAIgBAIQgBAIABACIgEgDIgFAAQgGAAgCADQgCABAAAGQAAAGACACIAHAHQgLgCgFAFIgmgDg");
	this.shape_712.setTransform(406.3,321.7);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.rf(["#E0FF5F","#76D678","#37805F"],[0,0.518,1],-0.9,-8.9,0,0.7,-8.9,25.3).s().p("Ah3BiIgCgGIAAgJQAAgNAEgDQAEgEAJAAQAIAAABABIAKAHIABAAQgFgHgCgNQAAgIAHgFQAGgDAGAAQAFAAAGADQAGADAEAEIgCgHIgCgKQAAgHAGgHQAFgGAFAAQAHAAAKAHQAGAEAFAGIAAADIAAgCIAAgBIgFgKQgDgFAAgDQAAgEAEgDIAGAAQAFAAAEADIAIAFQgEgFgCgEQgCgIAAgGQAAgGABgEQADgCAEAAQAGAAADADQACACAFAIQgBgGgEgKIgEgMQAAgVAMgJQAHgGAIAAQAKAAAJAKQAKAKAFAQIABABIAIgqQAGgQAQAAQAHAAAIAHQgFgDgHAAQgOAAgEAYQgDATADARQgGAAgEAEQgDADAAAEQAAgGgNgRQgPgVgJAAQgKAAgEALQgDAHAAAJQAAAJAGALIAIAPIgHAAQgCABABAFQgCgBgCgEQgDgDgDAAIAAAGQgCgCgCgEIgCgGIgDADQgCADAAAEQAAAKAPAFIgGAGQgFAGgBADIgGgJQgFgFgEgBQgCADAAAHQAAAFADAJIgFAAQgDAAgDAFQAAgHgHgIQgHgJgGAAQgLAAAAATIAAAJQABAGADADIgFAAIgFAGIgBAAIgBABQgCgEgHgDQgFgDgDAAQgEAAgDAFQgCAEAAAGQAAAFACAIQgGgEgIAAQgHAAgGAGQgFAGAAAGIADAHIAAABIgPgCgAAMALIAAgBIgEgCIAEADg");
	this.shape_713.setTransform(401.8,321.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],1.8,-6.4,0,1.8,-6.4,63.1).s().p("ACiA/QgDgCgNAAQgIABgKAFQABgEAGgOQAFgKAAgSQAAgrgXAAQgPAAgMALQgLAKgFAPQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgFgFIgKAAQgLAAgGACQgHADgIAKQgDgFAAgdQgEgdgUAAQgeAAgfAeQgfAcAAAaIACAOIgPgXQgNgSgNAAQgOAAgBAPQAAAVgBAMQgHgdgTgJQgTgJAAAMIgCAAQgRABgIASQgHAPAFAQQgEgDgHAAQgMADgGAEQABgSgXgWQgZgXgdgBQASgHAXAAQAIgBAFADQAOAGAJAUQAGAAAAAFQAVhGA6AAQAMAAAVALQAWANAHANQgBggAhgfQAggeAigBQASABARAdQANAWgCAQQAIgPAYgPQAdgSAbAAQAcABASAhQARAfgVAzIAZgYQALgKA0gEQA0gDAQAbIAFAJQgGABgHAFIgIAJIgRgPQgHgGgYgBQgkABgVAKQgRAIgSAWQACgRgJgDg");
	this.shape_714.setTransform(937.8,76.6,1.25,1.25);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],18.6,-10.7,0,18.6,-10.7,109.1).s().p("AJEB8QgEgPgIgFQgDgBgMAAQgLABgJAFIgUAPQACgQgEgGQgDgGgKAAIgKABQgGABgCAFQAFgTAAgRIAAgQQgCgMgNAAQgSAAgQAJQgIAFgEAFQABgagUAAQgIAAgKAJQAKg2giAAQgOAAgHAPIAAgCQAEgQgHgFQgCgCgJABQgHgBgLAOQgGAIgEAEQACgGgGgIQgIgKgQAAQgJAAgIAFIAAgDQgEgigVgBQgMABgHAFQgGAFABAIQgEgNgIgMQgNgUgPABQgLAAgIAGQgJAJAAASQAAALAKAXQAJAUAAAHIgCAAQgIgJgJAAQgIAAgGAGQgGAFgDAHQACgGgIgLQgJgKgKgBIAAAIIgCAAQAAgGgQgQIgbgXIgQAAIAAAQIAOASIAOANIgCgCIgKAAIAAAUQAEAIABAFQgJAAgKgIQgLgIgGAAQgLAAgCABQgBACAAAHIAAAPIgUgfQgXgagUAAQgLAAgEAFQgFAFAAAPQAAANAJAdIAJAcQgJgHgJAAQgKAAgOAFQgCgRgHgGQgGgFgPAAQgJAAgEAEQgCADAAAEQgUgZgQgKQgSgKgeABQgTgBgKAFQACgFAFgFQASgRAuAAQAaAAAWARQAUAXAKAGQgBgTgEgkQAAgiAKgJQAGgEAUAAQAPgBAYAYQATAUAGANQgCguAGgNQALgVAoAAQAbAAARATQAPAXAHAJIADAAQgEgMgBgWQAAgRAHgSQAIgXAPgDQBMAIAkAXQAFADAQAQQAAgIAFgDQAFgFAOAAQARAAAFAQIADARIAAABIAHgFQACgKAQABQALABAEAJQAKABAGAGIACAAIABABQAGgBAMAGIAIAEIABAAIACABIAAABQALAIADAKQAIgCAPABIAEAGIARgBQAiAAAQAcQAPAegNAoIAAAEQABgOAVgJQAWgKAnAAQAkAAAPAPIgGAAQgWAAgQAPQgRASgBAfgAGFABIAFAAIAAgBIgCgBIgDACgAD3g2IABgDIgBgBIAAAEgAoUBlQAEgQgLgKQgJgJgOAAIgJAAIgDAJQgCgPgRgTQgUgTgUAAIgIAAIAAAAQAMgVAMAAQASAAAcAdQAVAUAHANIAEAAQgHgeAPgbQAQgbAhAAQAhABARAaQAMATAAAXQgBAEABAFIAAgEIAAgFQACgKALgHQAPgLAYAAQAgAAALAVQAJARgGAbIgBgBQgHgSgTAAQgHAAgGAFQgHAGAEAHQgOgPgDAAQgIABgKAIQgJAIgCAGQAAgggXAAIgIABQgCABABAHQgFgMgNgMQgPgQgMABQgIAAgHAEQgKAIAAAOQAAAEAGASIAGASQgDAAgMACQgMACgEADg");
	this.shape_715.setTransform(786.2,66,1.25,1.25);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],8.8,-12.6,0,8.8,-12.6,72.2).s().p("AHtCDIgGgBQgIAAgKAEQgKAEgBACIgBgQIgFgBQAIgKASgKQAUgLAJAAQASAAAXATIAEADIgKACQgoAHgCARQgDgIgEgBgAGrB9IgEgiQgFgXgUAAQgXAAgPAQQgMAMAAARQAAgRgNgIQgNgIgOAFQAAgGAEgGQADgGAAgKQAAgOgFgKQgFgMgKAAQgXAFgHAMIAAgDQAJgQgQgJQgOgIgOAEIAHgKIAAgQQAAgJgEgKQgGgOgLAAQgNAAgNAKQgPAMAAASIgEgQQgDgFgMAAQgJAAgIAFQgIAFgBAJIgCgCQAFgPgKgbQgLgdgSgFIgTAAQgSAEASAWQACAMAHAPQAGAMAEAEIgBAAQgTgHgVAHQgUAGAAAJIABAHIABAEQgFgRgKgDQgDgCgRAAQgOAAgFAFQgIAGAAAPQAAAPAFARIgEgKQgEgFgKAAQgRAAgHAGQgHAGgEANQABgLgNgOQgRgTgaAAQgTAAgNAHQgOAIAAAMIACAOQgMgFgMAJQgMAHgCAKQgCgagYAAQgHAAgGAFQgGAFAAAGQAAgMgNgYQgQgcgTAAQgJAAgJAFQgKADAAAEQAAAFAKAVIALAVIgCAAQgBgFgCgBIgEAAQgIAAgJAFIgVAOQgBgMgIgCQgDgBgNAAQgLAAgGAFQgEADgBAEQABgQgIgPQgLgTgQAAQgOAAgHAFQgJAGAAAQQAAAXAHAKIgFAAQgJAAgIAJQgJAJAAAJQAAgUgUAAIgIAAQAAgOgKgRQgIgPgLgHQAOABADABQAMAEAJAXQgDgqAjgZQAcgVAeAAQARAAARATQAKALAFAIQgDgXAQgNQAPgMAdAAQAeAAALAQQAcAnAFAFIAAAFQAHghArgQQAegLAlAAQAVAAAKANQAKAQAIAIQAHgrAKgKQAMgNAqAAQARAAAYAYQgDgGgDgRQgDgPAAgKQAAgYATgNQAOgKAMAAQAIAAAcAlQAcAlAFAQQASgyAEgEQALgMAvAAQA+AAAABCQAAAOgFALIAOgBQATAAAKAOQAJALAAAXIgCAQIgBAJIgGAGIAFAAIABgGQAWgXAhAAQArAAATAYQAOASAAAZQAAANgIASIgDAAQgLAAgIAFgAlzAVIAAgFQgBgGgCgGQABAIACAJg");
	this.shape_716.setTransform(591.5,63,1.25,1.25);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],-1.3,-12.7,0,-1.3,-12.7,85.9).s().p("AHcBuQgFAAgQALQgRAOgDABQgGgEgOACQgMABgGADQgBgFgFgGIgJgIQgOAAgCADQAEgMgCgNQgCgSgMAAQgRAAgMARQgKANgBAPQgDgGgHgFQgHgGgFABQgDAAgIACIgKAFIAAgDQACgEAAggIgEAAQgDgEgBgWQgEgTgUAAQgOABgKAFQgNAJgCARQAAgTgTAAQgKAAgMAEQgKAFgEACQAAgIAIgQQgFhBgWACQgVACgHAHQgCgOgIgNQgKgOgNAAQghAAAAAfQAAAHAKAYIALAWQgFAAgGAFIgIAGQAFgJgJgMQgIgJgIAAQgPAAgHAJIgDAFQgCgOgMgJQgPgPgTAAQgsAAgGA5IAAgDQgFgGgFgJQgBgDgJAAQgNAAgDABQgLADgHAOQgBgCgHgJIgJgKIgMAAQgCAFAAAQIgLgVQgIgJgPAAQgOAAgEAEQgFAGAAASQAAAIAFALQAEAKABAOQgCgBgJgFQgJgGgFABQgEgBgLAFQgLAFgEAEQACgIgIgTQgJgUgJgFIgOAAIACAWQgCgJgLgKQgLgKgHAAQgOAAgHAFQgMAJAAAcQAAAHAEAPIADAOQgFgFgHABIgLADQgLAEgIAAQgJgWgPgEIgRAAIAAAGQgHgWgDgFQgFgFgMAAQgIAAgFAEIgKgNQgMgNgKAAQgUAAgEAXIAAASQgFgNAAgEQAAgkA9AAQAeAAAVATQAeAcAJAFIgCgKQgCgOAAgHQAAgfAOgMQANgOAgABQAhgBAQALQAPAMAOAgIAAAFQAHguAMgQQARgWAvAAQAbABAOAYQAJAQAAAKQABgbAVgSQAXgUArAAQAiAAAKAKQAIAHACAWIAFAEQgDgKgDgTQgDgQAAgKQAAgoAegSQAagPAngBQA6AAAXBNQALAoAAAwQAEgJAYgHQAZgLAaAAQAiABALARQAFAJAAAXQAAAGgFARIgDAJQgEAGgDAGIAFAAIACgMQAGgHAKgHQAXgRAcAAQAqAAADAcQgFAhAAAJIAAAGQAJgOAJgFQAQgKAhAAQAeAAAMAVQAEAGACAHQACgGADgEQAKgLAXAAQAJAAACABQADABAEAOQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQgEAGgBAGIAAgCQgFgFgJgBQgNABgMAFQgPAIgCAQQAAgWgjgTgAmkBDIAAgEIAAgBIAAAFg");
	this.shape_717.setTransform(427.5,59.5,1.25,1.25);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],7.2,-14,0,7.2,-14,57.5).s().p("AFNBwIgJgLIgOAAIAAgEIAEAAIADgIQAKgLAFgEQAQgLAXAAQALABAJAEIgRAOQgcAZgIASQgCgIgDgFgAE0BLQgFgYgJAAQgEAAgHAIQABgTgGgGQgFgGgKAAQgKAAgFAFQgFAGAAAOQgCgGgGgHQgIgKgLAAQgJAAgHAEIgFAEQgBgZgSADIADgLIACgKQAAgMgHgMQgIgOgJgBQgHAAgDAGQgDAHACASIgDgCQgFgMgCgCQgDgGgIAAQgLAAgHAKQgEAFgBAFIABgSQgBgTgSgLIgMAAIgDAPIgJgUQgDgEgKAAQgZAAgFAPQgEAKAFATIgPgQQgGgJgKAAQgTAAABAYQABAXgJAAQgDAAgHgJQgCASgVABQgMgBgHgFQgGgHAAgJIgCAAQADANgHADQgCABgIAAQgFAAgFgFQgFgEAAgIQAAgFAFgHQAEgHAAgGQAAgGgBABIgdAAQgCACAAALIgHgGQgDgBgDAAQgWAAAHASIgJgGQgEgCgGAAIgLAAQgEADAAALQgBgGgDgDQgEgEgJgEIgLAAIAAAKQgNgMgDgBQgCgBgLAAIgJAAQgIABAAAHQAAAFAEAIQADAJADADIgCAAIgBgCQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgXAAIAAAJIgJgHQgGgFgFAAQgHAAgBAFQgBADABADIgVgOQgMgGgLgBIgNACIAAgBQAJgCASgBQALAAAIACIAAgBQAAgZAhARIAAgFQAAghApABQAcABAQAJQALADAJAEQAAgIAGgGQAJgKASAEQADABAEADIACgGQAKgWArAAQAdAAARAMQAOAJAIATQgEgdASgSQAWgVAuAAQArAAALALQAMALAAAnQAEgZAWgFQAHgDAbAAQAiAAALATQAFAKAAAaQAAAJgDAOQgDAPgEAFIAAAFIAcgMQANgFANAAQAkAAAOAVQAKARAAAfQAAATgCALIgHAHQAAgIgCgNgAgogmIAAgGIgDgMIADASg");
	this.shape_718.setTransform(286.3,68.4,1.25,1.25);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],-5.4,-23.7,0,-5.4,-23.7,75.9).s().p("AIUCDQAMgRAAgQQAAgWgVAAQgKAAgcANQgZAMgCADIgCgjQgCgYgTAAQgSAAgPAKIgpAgQAAgPgHgWQgLgbgNAAQgFAAgHAJQgJAKAAAKIgLgRQgGgFgHAAQgFAAgJAHQAFgcgJgTQgLgYgYAAQgXAAgCAXQgJgEgOAGQgOAFgGAGIgCghQgDgZgTAAQgRAAgXALQgWALgHAKIgCgRIglAAIgKAJQAIgRAegRQAggSAbAAQAmAAAOAVQAIAMABAUIAGgGQASgPAYgCQA7gIAABGIgBAOIAJgGQAfgQAQAAQAYAAAJAlQADAPABALQAFgMASgNQAdgTAbAAIAGAAQAQADALAQQAKARAAAVQAGgHAIgNQAIgJAOAAQASAAAIAOQAFAKAAAVQAAAMgYAZIgNAMIgHABIAIgLgAn2AhQgSgOgSAAQgNAAgHAEIgJAIIAAgEIAIgDQAEgGAFgEQASgNAbAEQAUADAPAMIgFgIQgIgSgBgTQABgeAvAAQARAAAWAKQAPAGAHAHIAFAAQgJgvAJgMQAIgMApAAQATAAARAGQATAHAYAQQAFgpANgNQAMgNAfAAQAfAAAYAUQAaAWgJAZQAMgPARgNQAbgUAXAAQAXAAATAdQAWAfgMAeIgBABQgFAEgDAKIAAgDQgDgegKgPQgNgQgWAAQgXAAgFAGQgEAEgEAZQgFgGgEgCQgDgCgGAAQgMAAgJAJIgIALQgEgkgOgOQgNgMgaAAQghAAgIAIQgKAKAIApQgFgJgGgCIgNgBQgLAAgCABQgGAEACAMIgggdQgVgOgTAAQgMAAgDADQgFACAAAHQAAALAGAIQANAUAHALQgEgBgHAFIgIAFQgCgGgGgBIgPAAQgKAAgIACQAAAKADABIgDAAIgbgSQgOgJgMAAQgGAAgHADQgKADABAFQgBAIAMAMIATAWQgOgDABAdQgEgGgEgBIgJAAQgDAAgHAEQgHAFgCAFQgEgNgTgNgAoNATIALAAIALAAIgJgBIgNABg");
	this.shape_719.setTransform(166.8,76.9,1.25,1.25);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.rf(["#ECF00E","#BDE925","#5BC219","#3B6527"],[0,0.298,0.761,1],9,-10.9,0,9,-10.9,63.6).s().p("AGFCIQAAgZgQgRQgOgOgOAAQgZAAgHAaIAAgCQAFgUAAgRIgBgSQgDgOgLADQgCAFAAAOIgCAAIgLgaQgEgFgRgBQgVAAgKARQgIANgHAgQgIgUgRgRQgTgUgSABQgpAAgJAoIgDAAQgOgZgLgLQgWgXgZAAQgRgBgLALQgJAJgOAaIAAgDQAAgLgPgaQgRgdgPAAQgVgBgCAgQgEAAgIgEQgJgEgEABIgNAAQgDABgBAIQACgSgSgWQgTgZgSAAQgRAAgGAPQgFAOAFARQgEgBgWAIQAAgEgEgFQgFgDgDAAQgDAAgEABIgGACIgEgTQgEgWgJgSQgbg6g3AAQgfAAgQATIAAgZQAXgNAgAAQA6AAAaAhQARAXANA+QgEg9A/AAQAZAAAOATQAOAQADAaQAcglAXgBQAQAAATAlQARAfADAVQgDgbAPgMQAMgMAZAAQAhAAALAOQAEAEAdA0QgEg0A4AAQAUAAANAMQANALAPAdQADgnAIgKQAJgLAeAAQAhAAAPATQAQAXgOAlQAHgDAOgDIADgBQAMgCAHgBQAOAAAJAPQAKAOgBAVQAAAMgEAIIgDAGIgGAAIAAgBgAjngDIAAgFIgCgKIACAPg");
	this.shape_720.setTransform(50.4,81.1,1.25,1.25);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],-3.9,-18.9,0,-3.9,-18.9,63.1).s().p("AGDBjIgPgBIlngQIgYgCIligOIgYgBIhagEIgVgBIgBAAIgCgCQABgNAJgKQAGgIAIgCQgRABgKgGQgLgHAAgNQAAgNACgJIAMgEQAQgFAPAAQAVAAARAMQgLgiAbgcQANgPASgIIgLANQgKAMAAAVQAAAUAcAIQATAGAOgBIgOAGQgMAHgCAFIAAAaIAwAAQAHgGAEgIIAIgMQgIARAOANQAKAKARAAQAHAAAJgIQAKgIACgMIAfATQASAAAJgTQAFgIADgOQADAHAGAHIAKAIIAZAAIgDgWQgDgQAAgIIAdAAIAXAYIAAADQABgWAJgTQAPAAAKATQAFAKAEAOQAJgKARAAQAGAAAFAFQAFAFAAAFQAAAFgIAGQgKAJgBAQIAKACQAHACAHAAQAQAAAPgNQAGgGAJgOIAdAhQAGAFAPAAQATAAACgCQAGgEADgXQADANAOALQAOAKAJAAQARAAAEgKQADgJgHgTIAAgFQAWAFAQgMIAEgEQADAKAGAJQARAeAWAAQAHAAAFgDIAGgFQgCAQAHAEQADACARAAQAOAAAFgJQAEgIAAgSQAAgJgCgKIgBgDQAHAFALAAIAEgTIABgBQAmgDAjAjQArAtgRAcQAEgDALgIQAMgIAEAAQASAAAIAYIADAPIiDgGgAmwgMIAAgFIgCgCIACAHg");
	this.shape_721.setTransform(944.9,92.3,1.25,1.25);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],28.4,-25.9,0,28.4,-25.9,109.1).s().p("AI9BsIgOAAInIgOIgagBIl3gKIgKAAIlrgIQACgEAAgEQAAgSgaAAQgKAAgKAEIAAgCQAHgpgbAAQgPAAgCAUIgDgUQgCgJgIAAQgJAAgEAJQgFAIADAHIgDAAQAAgbgPgUIgBgBIADACQAGgKAdgNIAAAAIgCgKQAAgVAOgHQAIgFAQAAQAOAAAOAKQAMAJAVAYIAAAFQACgXgJggQgBgVAlAAIAAAAQACAiAlAOQAVAJAZAAIAFAAQgHAHgKARIgLASIAAASQAEAEARAAQATAAAFgBQALgDAKgNIgCAOQgDAMAAAGQAAAIAJAGQAJAFAIAAQAPAAANgVIARgZQABAKAIASQAMAWARAAQAQAAAHgRQAFgLABgKQATATARAAQAWAAAAgTQgBgJgFgRQAMACAOAIQAOAJAIAHIAEAAQgDgYAHgFQACgCAWAAQAWAAADACQAGAFADAYIANgGQAFgBAIAAQAUAAAFAIQAFAMAFACIgBAIQgDAHAAAGQAAAPAEACIATAAQAUAAAPgMQAQgNACgXIAhAZQAUANALAAQALAAAKgMIARgVQADASANAEQAFACATAAQAXAAAMgLQAGgGAOgRQAWATAcAAQAOAAAMgTQAKgNAAgJQAAgNgKgKIAAgTIAGgCQAGgDAHAAQAQAAALAKIAUAXIABAFIAAgFIgBAAQAAgYALgGQAFgDAUAAQASAAABABIAHASQAJgFAYAAQAXAAAFAFQAFAFAAAQQAAAKgJANQgKANABAIQAAAcAoAAQAaAAAFgDQARgJACgjQAAAWAKAKQAKAKAZAAQAYAAADgCQAGgEACgbQgBAkAEAPQAIAUAXAAQAKAAAJgJQAFgGAIgNIgCAMQgCAIAAAGQAAATAOAHQAJAFAUAAQAUAAATgMQATgMAXAAIAAgcIgNgYQgFgIgGgGIASAAQARAHAKASQAMAUgBAaIAXABQANAEgCASQAAAAABAAQAAAAABAAQABABAAAAQAAAAABAAIjjgIg");
	this.shape_722.setTransform(774,85,1.25,1.25);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],-1.3,-13.2,0,-1.3,-13.2,63.1).s().p("AFBBsQgHgEACgQIgGAFQgEADgIAAQgWAAgRgeQgGgLgDgKIgEADQgQAOgWgEIAAAEQAHATgDAJQgDALgSgBQgJABgNgLQgPgLgDgMQgDAXgFAEQgDACgTAAQgPAAgGgFIgdghQgJAOgGAGQgOANgTAAQgGAAgIgCIgJgCQAAgRAKgIQAIgIAAgGQAAgEgEgFQgFgFgHAAQgPAAgJAKQgEgOgFgKQgJgTgQAAQgJATAAAVIAAgCIgYgYIgcAAQAAAIACAQIADAXIgYAAIgKgJQgHgHgCgHQgEAOgFAJQgJATgSAAIgfgTQgCAMgKAJQgIAIgIAAQgQAAgLgLQgNgMAHgUIgHAPQgEAIgIAGIgwAAIAAgdQADgEAMgHIANgHQgNACgUgGQgcgIAAgSQAAgVAKgMIALgNIABgBQAeABAYAXQAYAWgCAQQAHgEALgDQAIAAADADQgEgOAHgPQAHgSARgBIADAAQAAgMASAJQAUAJAHAdQABgMgBgVQACgPANAAQANAAAOASIAPAXIgCgOQAAgaAfgeQAfgeAdAAQAWAAAEAdQABAfACAFQAGgKAIgDQAGgCALAAIAKAAIAFAFQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAFgRAMgKQALgLAPAAQAYAAAAAtQAAASgFAKQgHAOAAADQAKgEAIgBQANAAADACQAIADgCAPQASgUARgIQAWgKAkgBQAYABAHAGIAQAPIAJgJQAGgFAHgBQALAbgCA4IgFAKIAFAAIAAgKQAGgLAEgCQAEgCAggJIAEgBIALgDQAHgCAIgBIAAABIgFAWQgLgBgHgGIABACQADANAAAIQAAATgFAHQgFAKgOAAQgRAAgDgCg");
	this.shape_723.setTransform(941.7,85.1,1.25,1.25);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],15.9,-20.1,0,15.9,-20.1,109.1).s().p("AKjCuQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAAAAAQACgSgNgEIgXgCQABgZgMgVQgKgSgRgHIgSAAQAGAHAFAIIANAXIAAAdQgXAAgTAMQgTALgUAAQgUAAgJgEQgOgHAAgUQAAgFACgIIACgNQgIAOgFAFQgJAKgKAAQgXAAgIgVQgEgPABgjQgCAagGAFQgDACgYAAQgZAAgKgLQgKgJAAgXQgCAkgRAJQgFADgaAAQgoAAAAgdQgBgIAKgNQAJgOAAgKQAAgRgFgEQgFgFgXAAQgYAAgJAFIgHgQQgBgBgSAAQgUAAgFACQgLAFAAAYIgUgYQgLgHgQAAQgHAAgGACIgGACIAAARQAKALAAANQAAAIgKAQQgMATgOAAQgcAAgUgTQgOAQgGAHQgMAKgWAAQgUAAgFgBQgNgEgDgTIgRAWQgMAMgLAAQgLAAgUgOIghgYQgCAWgQAOQgPALgUAAIgTAAQgEgCAAgOQAAgHADgHIABgIQgFgCgFgMQgFgKgUAAQgIAAgFADIgNAHQgDgbgGgEQgDgCgWAAQgWAAgCACQgHAFADAaIgEAAQgIgKgOgIQgOgJgMgCQAFASABAKQAAAUgWAAQgRAAgTgTQgBAJgFALQgHASgQAAQgRAAgMgXQgIgRgBgMIgRAbQgNAUgPAAQgIAAgJgFQgJgFAAgJQAAgGADgLIACgRQgKAPgLADQgFACgTAAQgRAAgEgFIAAgTIALgSQAKgRAHgGIgFAAQgZAAgVgIQglgPgCgiQAcABAaASQAXASgCALIAGAAQgDgjAOgZIAIAAQAUAAATATQASASABAPIAEgIIAJgBQAOAAAJAKQALAKgEAOIAAACQADgDANgCQAMgDADABIgGgQQgGgSAAgFQAAgOAJgHQAIgFAIAAQAMAAAPAPQANANAFAMQgBgHABgBIAJgBQAXAAAAAfQACgFAJgIQAKgJAIAAQADAAAOAPQgEgHAHgGQAFgGAIAAQASAAAIASIAAACIgCAJIAFgCIASgPQAMgHARgCIAAgLQAAgTAIgNQAKgFATAAQAeAAASAKQAQAKATAZQAAgEACgDQAFgFAJAAQAPAAAGAGQAGAGADARQAOgFAKAAQAJAAAJAHIgJgcQgJgdAAgNQAAgRAEgFQAFgFALAAQATAAAYAcIAWAfIgDgPQAAgHADgCQADgCALAAQAGAAAJAJQAKAIAJAAQgBgFgEgIIAAgUIAJAAIADACIgOgQIgOgRIAAgRIAQAAIAaAYQARAQAAAIIACAAIAAgKQAKABAIAMQAIALgCAGQAEgIAFgFQAHgFAIAAQAIAAAJAJIACAAQAAgHgJgWQgKgXAAgLQAAgSAJgJQAHgHAMAAQAOAAAOATQAIANADANQAAgIAGgFQAHgGAMAAQAVAAAEAjIAAADQAHgFAKAAQAPAAAJAKQAGAIgCAIQADgGAHgIQALgOAHAAQAIAAACACQAIAEgEASIAAACQAHgRAOAAQAiAAgKA5QAKgJAHAAQAVAAgCAaQAEgFAJgFQAQgJASAAQAMAAACAMIAAAQQAAARgEARQACgFAGgBIAKgBQAJAAAEAGQADAGgCAQIAVgPQAIgGAMAAQAMAAACABQAIAEAFAQIAAADQABgfARgQQAPgPAXAAIAGAAIADAEQAKAMAAAdQAAARgKAVQAJgHAUgHQASgFAIAAQAgAAADAUIgEAzQAFgGAQgIQgCAJAAANQAAAPALAHQAKAGARgBQgIADgGAHQgJAKgBANQgLgLABgJQgEAEgXAKIgPAHIgKgBg");
	this.shape_724.setTransform(789.6,77.8,1.25,1.25);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],15.8,-26.9,0,15.8,-26.9,72.2).s().p("AGGBkIgdgBImFgFIgRAAImagDIgfAAIiEgBIgbAAIgHgIQgCgEAAgIIAAgFQADgUARgLQASgKAKgCQAJgCAKAAQgIgBgCgFQgBgEAAgPQAAgNAKgMQAJgLAOgDIABAAIANAAIAEAAIALABIADAAIAEAIIAAgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBgBQgFgPAAgPQAAgRAJgLIABgCQgBAEAAAJQAAAZATARQARARALgGQgWAQgIAIQgPANAAASQAAAMAKABQAJACAWgGQgDASAAAFQACAGATAAQARAAAFgCQAMgEAJgQQACALAHAKQAJAKAJAAQAQAAAKgRQAIgOAIAHIARAAQABgDgKglIAUAAQAFAFAFAAIgCgYIAeAAQALAEAGAIQAAgKAKgKQALgJALAAQAJAAAIAIQAGAGACAFQALAAAIgGQAIgGACAAQAPAAABAQQAAAFgJAIQgKAJAAAHQAAAIAKAHQAIAFAFAAQAHAAAEgGIAGgNIAOAQQAJAMAFAAQAOAAAUgcQAEADAQAGQAQAFADAAQAWAAAHgKQAEgGABgSIANAOQAGAKAHAAQAKAAANgLQALgKADgGIAOAGQAKAFADAAQAPAAgEgOQAAgKgFgGQgGgHgBgLIAXAAQAVAKAGALQAAgYABgFQADgLAPAAQAPAAACABQAHACAEANIACAAQgDgUAHgJQAEgGAJAAQANAAAGAKQAFALACADQAMgKANAAQAXAAAAAYIgQAOQgPANAAAOQAAAQARAAQAEAAAKgHQgGAMAGAOQAGAOAOAAQAHAAAJgJQAHgJACgFQAGAHAFADQAIAGAOAAQAVAAAKgTQALgSgLgGIAJgFQAKgEAGAAQANAAAAAUIgCAJIAGAAQAOAAgCATIgEAUQAAAJAHABQADABAEgBQADAAAJgEQAKgFAEgHQADALAJAHQAHAGADAAQAJAAATgbQAGAKAOAGQANAGAOAAQAQAAAKgFIANgJQgBAHAFAIQAHALAKAAQAMAAAJgFQAAALAKAMIAEAEIkJgEgAGXASQgCABABAIIACAAIABgJIgCAAg");
	this.shape_725.setTransform(582.8,80.9,1.25,1.25);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],-0.6,-20.4,0,-0.6,-20.4,72.2).s().p("AJ6CrIhkgCIgrAAIgEgEQgKgNgBgLQgIAGgMAAQgKAAgHgLQgFgIABgHIgOAIQgJAFgQABQgOAAgOgGQgNgGgHgKQgSAbgJgBQgDAAgHgFQgJgIgEgLQgDAHgKAGQgJAEgDAAQgEABgDgBQgIgBAAgKIAFgTQACgUgOABIgGAAIACgJQAAgWgOgBQgFAAgLAFIgJAEQAMAJgLASQgKASgWAAQgNABgIgGQgFgEgHgGQgBAFgIAIQgIAKgHAAQgOAAgHgOQgFgOAFgMQgJAHgEAAQgRAAAAgSQAAgOAPgOIAPgNQAAgWgWAAQgOAAgLAHQgDgCgFgJQgFgKgNAAQgJgBgEAHQgHAJADASIgCAAQgFgNgEgCQgCgBgPAAQgPgBgDALQgCAFABAZQgGgLgVgKIgYAAQACAKAFAIQAFAFABALQAEAPgPAAQgDAAgKgEIgPgIQgCAHgLAKQgOAMgJAAQgHAAgIgKIgNgQIAAgDIgCAAIACADQgBATgEAGQgHAKgWAAQgDAAgQgEQgQgGgEgDQgVAcgOAAQgEAAgJgMIgOgQIgHANQgDAFgIABQgEAAgIgGQgKgGAAgIQAAgHAKgJQAJgKAAgGQgBgPgPAAQgDAAgHAGQgIAGgLAAQgCgFgGgGQgIgIgJAAQgLAAgLAJQgLAJABALQgGgIgLgEIgfAAIACAZQgEAAgFgEIgVAAQALAlgCACIgQAAQgIgGgIANQgLASgPAAQgKAAgIgKQgHgKgCgLQgKAQgMAEQgEABgRAAQgTABgCgHQAAgEADgSQgWAGgJgCQgKgBAAgMQAAgUAPgOQAIgHAWgRQgLAHgSgRQgSgQgBgYQAAgJACgEQAFgFAGgDQALgFAOAAIAKAAQAMAHAHAOQAKASABAMIAHAAQAUAAAAAUQAAgKAJgIQAIgIAJABIAFAAQgHgKAAgXQAAgQAJgGQAHgFAPAAQAPAAALATQAIAOgBARQACgEADgDQAGgGAMAAQAMAAAEABQAHADABALIAVgNQAJgFAJAAIADAAQACABACAFIACAAIgLgWQgKgUAAgFQAAgFAKgFQAIgEAJAAQATAAAQAdQANAYAAANQAAgGAGgFQAGgGAHAAQAYAAACAbQACgKAMgIQAMgIAMAFIgCgOQAAgMAOgIQAOgIASAAQAbABARATQAMAOgBAKQAEgNAHgFQAHgGARAAQAKAAAEAFIAEAJQgFgQABgPQgBgRAIgGQAFgFAPAAQATAAACACQAKADAGATIgBgGIgCgHQAAgKAVgGQAUgGATAGIAAAAQgCgDgHgNQgGgPgDgMQgSgVASgFIASAAQASAGAKAcQALAcgGAPIACACQACgJAHgGQAIgEAJAAQANAAADAEIADARQABgSAPgMQAMgKANAAQALAAAGANQAEAKAAAKIAAAPIgHANQAOgEAOAIQARAJgKAQIAAACQAIgLAXgGQAJAAAFANQAGAKAAAOQgBAKgDAGQgEAEAAAGQAOgGANAJQANAIAAAQQAAgQANgNQAOgNAXAAQAUAAAGAUIADAjIAAACQAIgEALAAIADAAIAAACIAAAEIADgGIAGABIAAAPQACgBAJgEQALgEAHAAIAHAAQADACADAHQACgQAogHIAKgCQASAQABAPQgKAHgDAGIAJAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAAgHIAAgDIAKgGQATgJAOgBQAIAAAIAEQAOAEAQAOIAAABQAQAUAAAcIACAAQgCgGAEgIQAEgJAKAAQAIAAACAJIACAUQADgUAOAAQAcAAgIApIAAABQALgDAKAAQAZAAAAASQABAEgCAEIg7gCgAGzB5IABgBIAAgCIgBADIAAAAgAizA9IAAAAg");
	this.shape_726.setTransform(603.3,72.8,1.25,1.25);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],3.4,-29.1,0,3.4,-29.1,85.9).s().p("AnSBGQAAgVgKgNQgKgOgTAAQgOAAgPAKQgRANADASQgKgsgMgTQgFgFgFgEIAAgFIgHAAQgJgFgLAAQgNAAgLAGIAAgCQgMgZAAgPQAAgZAPgKQANgKAeAAIAEABIAAAHQAHAhAmAJIApADIgEANIgEANQAAAIAKAGQAJAFAKAAQAJAAAIgGQAHgFACgGQAFAiAHAKQAIALAYAAQAgAAAAgXQAAgEgMgXIAAgOIAdAAQAHAAAMAMQALAJACAFIAAACQABgbAFgKQAFgKAOAAQAKAAAEADIAQAQQADgOAKgHQAJgGAJAAQAMAAAHALQAFAHAAAEQAAABgMAPQgMAOAAALQAAANAMAIQAIAFAHAAQAKAAADgBQAGgDACgLQAJAYAEAGQAIALAMAAQAJAAAHgJIAHgKQAGAEAKAGQANAGAGAAQAPAAAFgGQAGgGgGgQIAAgDQAKAFAKAAQAOAAAFgOQACgHgBgIQAJAKAIAAQAJAAAIgJQAGgGABgGQALAEALAAQgCgDgCgJIgBgNQAAgGAHgFQAIgFALAAQALAAACACQAGADAFAPQAGgWAFgFQAFgGATAAQANAAAGAHQAFAFAAAHQAAAEgRARQgSASAAAMQAAAMAJALQAIAJAHAAQAEAAAIgGQAGgFAEgGIAQAMQANAJAEAAQAIAAAGgNIAIgTQAKAAAKAGQALAFAFAAQAbAAAFgRQADgJgCgOIATAAQAJAEAKAMQAJAMABAFIAAADQAMgNAHgEQAJgFAMAAQAOAAACAAQAGADgBAQQALgEAHAAQANAAACABQAHAFgEAUQACgLAKgFQAJgGAMAAQAPAAADABQAKAEAAAOQAPgOAJAAQAHAAAFAFQAGAHgBAOQABgDAJgHQAJgHAHgEIATAAQADACAAAGQgHANgFAFIAAAVQADADAGAAIAEgCQAGgDAEgFIAGAGQABABAHAAIAMAAQAKgDgBgJQAEAJAEADIAHAAQAIAAAHgEIAAAFQAAAIACADIAHAJIk1AAIgaAAImcABIgbAAIlXADQAHgMAAgTg");
	this.shape_727.setTransform(421.5,80.1,1.25,1.25);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],-3.6,-21.6,0,-3.6,-21.6,85.9).s().p("AHcCYIAAgWQAFgFAHgNQAAgGgDgCIgTAAQgHAEgJAIQgJAGgBADQABgNgGgIQgFgEgHAAQgJgBgPAOQAAgOgKgEQgDgBgPAAQgMABgJAFQgKAFgCALQAEgUgHgEQgCgCgNAAQgHAAgLAEQABgPgGgEQgCgCgOABQgMAAgJAGQgHAEgMANIAAgDQgBgEgJgNQgKgOgJgEIgTAAQACAQgDAJQgFARgbAAQgFAAgLgFQgKgGgKAAIgIATQgGANgIAAQgEAAgNgJIgQgMQgEAGgGAFQgIAHgEAAQgHAAgIgKQgJgKAAgNQAAgOASgRQARgRAAgFQAAgGgFgGQgGgHgNAAQgTAAgFAGQgFAFgFAWQgEgPgGgDQgCgCgLABQgLAAgIAEQgHAGAAAGIABAMQACAKACACQgLABgLgFQgBAGgIAIQgIAKgJgBQgIAAgJgKQABAIgCAHQgFAPgOAAQgKgBgKgFIAAADQAGAQgGAHQgFAFgPAAQgGABgNgHQgKgGgGgEIgHALQgHAIgJAAQgMAAgIgLQgEgGgJgYQgCAMgGACQgDABgKAAQgHAAgIgFQgMgIAAgNQAAgMAMgPQAMgPAAgBQAAgEgFgHQgHgKgMAAQgJAAgJAFQgKAIgDANIgQgQQgEgDgKAAQgOAAgFALQgFAJgBAcIAAgDQgCgFgLgJQgMgMgHAAIgdAAIAAAOQAMAZAAAFQAAAWggAAQgYAAgIgLQgHgKgFgjQgCAGgHAEQgIAGgJAAQgKAAgJgFQgKgGAAgIIAEgNIAEgNIgpgDQgmgIgHggIAAgHQANACAYAMQAbAMAHAAIABAEIAAgEIgBAAQgBgHgFgOIgDgFIABgSQAEgXAUAAQAKAAAMANIAKANQAFgEAIAAQAMAAAFAFQADAFAHAWIAAgGIARAAQAPAEAJAUQAIAAALgEIALgDQAHAAAFAEIgDgMQgEgPAAgHQAAgcAMgJQAHgFAOAAQAHAAALAKQALAKACAJIgCgWIAOAAQAJAFAJAUQAIATgCAIQAEgEALgFQALgFAEABQAFgBAJAGQAJAFACABQgBgOgEgKQgFgLAAgIQAAgSAFgGQAEgEAOAAQAPAAAIAJIALAVQAAgQACgFIAMAAIAJAKQAHAJABACQAHgOALgDQADgBANAAQAJAAABADQAFAJAFAGIAAADQAGg7AsAAQATAAAPAPQAMALACAOIADgFQAJgJAPAAQAGAAAIAJQAJAMgFAJIAIgGQAGgFAFAAIgLgYQgKgYAAgHQAAgfAhAAQANAAAKAOQAIANACAOQAHgHAVgCQAWgCAFBDQgIAQAAAIQAEgCAKgFQAMgEAKAAQATAAAAATQACgRANgJQAKgFAOgBQAUAAAEATQABAWADAEIAEAAQAAAegCAEIAAADIAKgFQAIgCADAAQAFgBAHAGQAHAFADAGQAAgPALgNQAMgPARAAQAMAAACAQQACANgEAMQACgDAOAAIAJAIQAFAGABAFQAGgDAMgBQAOgCAGAEQADgBARgOQAQgLAFAAQAjATAAAWQACgQAPgIQAMgFANgBQAJABAFAFIAAACQABgGAEgGIAAABIABgCQACgIAIgFIAIgDIAKgBQAiAAgHAqQADgIANgGQALgHAHAAQAHAAAHAFQgPADgJAKQgKAMAAANQAAASABADQACAGAIABQgKAAgJACQgJACgSAKQgSAKgCAVQgHAFgIAAIgHgBQgEgCgEgKQABAKgKACIgMABQgHAAgBgCIgGgFQgEAEgGAEIgEABQgGAAgDgCgAJTBHIgBAHIAEAAIAAgHIgBgFIgCAFg");
	this.shape_728.setTransform(430.3,70.7,1.25,1.25);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],1.1,-23.3,0,1.1,-23.3,57.5).s().p("AnXBoQAYgZAAgMQAAgVgFgKQgHgOgTAAQgOAAgIAKQgIANgFAGQgBgVgKgQQgLgPgQgCIAAgIQAAguAxAAQAKAAARAKQARALABAIIAFAAQgLgIgDgXQgBgMABgLQAAgYAJgHIADgBIADgCIAAABQgCAnAYAZQAZAbAjgJQgHAHgFAMQgEAMAAAJQAAATAJAGQAFACAOAAQALAAAKgEQABAYABADQADALATAAQAMAAAIgGQAJgGAJgPIAOASQAHAGANAAQAPAAAKgLQAIgIAAgEQAAgDgGgJQgHgKAAgGQAAgNAUAAQAPAAAGAGQAFAIAEADQgDgKAGgGQAGgEAMAAQAQAAAFAEQADADAFAPIARgCQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAQgBAKgGAFQgFAEAAAHQAAAKAMAHQAKAFAHAAQAHAAAGgGIANgQIAJAZQACAGARAAQAbAAACgYQAIAAAagEIgPgWIAAgRIAaAAQADACAGAHIAIAIQACgSACgCQABgCAPAAQANAAAEAIQADAEAAAJQAAAGgFAJQgEAJAAAIQAAAOAOAAQAFAAAGgGQAFgGADgLQgBAOAHADQADACATAAQASAAAIgGQAJgHABgQQABAGAMAFQAMAFANAAQAHAAAGgFQAGgGAMAAIAAgDQAAALALALQAKAMAJAAQAMAAAKgPQAIAJAFADQAEADAIAAQAjAAgIgZQAEAGADABIAJABQALAAAEgDQAHgDAAgLQAAgSgWgFIAAgOQADgMAGgCQACgBAMAAQAHAAAEABIAKAGIABgJIAJAAIAGAEQAGAFAEAFQANATAKArQgEgSASgMQAOgLAPAAQASAAALAOQAJANAAAVQAAATgHAMIhEABIgjAAImcAFIgPABImFAGIgWABIhXACIAMgNg");
	this.shape_729.setTransform(293.9,80,1.25,1.25);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],7.2,-31.9,0,7.2,-31.9,75.9).s().p("AmWBTQAEgIAAgMQABgWgKgOQgJgOgOAAQgHAAgMACIAAgcQAAgTAEgLQACgFADgDIADgCIAAAEIAAADQAAAcAMAJQAFAEAOAAIATAAQAKgDAKgKQgEAMAAAMQAAARAHAEQADACAOAAQAPAAAHgFQAHgFALgSQgFAtAeAAQAPAAAMgUQAJgVACgCIgUgUQgFgGAAgGQAAgKAHgBIAQAAQASAAAEABQALADAKAMQgDgZABgJQACgPANAAQAJAAAGAFQADAFAIAQIABACQgFgqAdAAQAMAAAIAOIAEAOIgIAVIgIAWQAAAIAGAGQAHADAHAAQAFAAAOgJIAPgNQgCAWAFAKQAEALAPAAQAMAAAGgGQAHgFAIgNQAIAPAFAHQAIAJAHAAQANAAAJgQQAGgNAAgHIAAgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgCgCIATAHIARAAQAAgfgDgOIAWAAQAVAKAAALQABgeAVAAQALAAAHAOQAFAKAAAKQABgZAeAAQATAAAAAdQAAALgFAFIAAADQAHgIAKgEIAOAAQACAFABAGQgGAKgCAIQAHgDAEgEQgBAIAFAIQAGAJAKAAQAGAAAEgEIAGgRIAJAOQAGAKAIAAQAFAAAIgJQAJgJAAgGQgCAVAcAAQAPAAAKgFQAOgGgFgMIAIAMIAKgaQADgGAPAAQAOAAAHALQAEAEgBAJIgDAFIADAAIAAgFIACgBIAEgDIAMAAQACAFABAHQgBACgFAJQgGAKAAAEQAAANAMAHIADABIhnADIgTAAImRALIgZABIk7AJIADgFgAjOgVIAAgCIgBgBIABADgAE2AIIAAAAIAAAAg");
	this.shape_730.setTransform(151.1,87.1,1.25,1.25);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.rf(["#ECD210","#ECB40E","#A1D00B","#278E2A","#2F2E2A"],[0,0,0.298,0.761,1],14.2,-18.3,0,14.2,-18.3,63.6).s().p("AldhXQAHgEAKAAQAuAAAUAfQAJANADARIACgDQAFgGARAAQAUAAAKAGQAIAGAEALQABgMAIgEQAIgFAWAAQAPAAAEAKQAGAQAHAMQgBgOAJgKQALgOAcAAQAKAAALAMQAMAMAAAKIgKANQgLAQAAAJQAAALAKAIQAIAGAMAAQAPAAAIgNQAFgQAEgDIARAJQAIAFAHAAQAQAAACgRQACgJgCgKQAGAAARANIASANIAAgcIAXAAQAPACAJAOQAHAKACAJQgCgKAKgJQAKgJAPAAQAKAAAHAJIAHAPQgBgKAEgMQAGgRAQAAQAMAAAPANQAPAPAAAIIAAADIALgUQAHgGAQAAQANAAADACQACACAAAJIgBAQQgEAMgOAEIAAACQANgCAGAAQAOAAAFAFQADACABAFIlSAMIgQABIlFANIgUAAgADRAoIAAgDIgBgCIABAFgAh1AEIAAgCIAAgBIAAADgAi8gMQAAALACABQAAgJgCgHIAAAEg");
	this.shape_731.setTransform(43.8,90.3,1.25,1.25);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.2,-2.5,0,-1.2,-2.5,25.2).s().p("Ai6AOQgGgQgCgKIGFgHIAAAgIl7AHIgCgGg");
	this.shape_732.setTransform(271.3,96.1,1.25,1.25);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.6,1,0,-1.6,1,24.9).s().p("AjDgKIBngDIAhgBICggDIAHgBIBYgBIAAAfImAAIQgFgUgCgKg");
	this.shape_733.setTransform(219.7,97,1.25,1.25);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-2.1,0,0,-2.1,0,25.2).s().p("AjIgJIGRgLIAAAfImKAKQgGgQgBgOg");
	this.shape_734.setTransform(167.5,98.3,1.25,1.25);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-3,-1.6,0,-3,-1.6,27.6).s().p("AjNgPIGbgBIAAAgImVABQgFgTgBgNg");
	this.shape_735.setTransform(434.3,94.4,1.25,1.25);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.2,-1.8,0,-1.2,-1.8,31.3).s().p("AjMgFIAAgJIBEgBIFVgCIAAAgImWADQgDgNAAgKg");
	this.shape_736.setTransform(379.3,94.7,1.25,1.25);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.2,-1.4,0,-1.2,-1.4,31.3).s().p("AjNgNIGbgFIAAAgImLAFQgMgUgEgMg");
	this.shape_737.setTransform(323.5,95.3,1.25,1.25);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-2.2,-1.2,0,-2.2,-1.2,27.5).s().p("Ai9gIIA8gCIAGAAIE5gKIAAAeIl1ALQgFgRgBgMg");
	this.shape_738.setTransform(115.4,99.7,1.25,1.25);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.8,0.1,0,-1.8,0.1,21.5).s().p("AihgGIFDgNIAAAcIkwALIgTgag");
	this.shape_739.setTransform(22.9,102.8,1.25,1.25);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.3,-0.5,0,-1.3,-0.5,23.8).s().p("AiugHIFPgMIAOgBIAAAeIgZAAIk5ALIgLgcg");
	this.shape_740.setTransform(67.4,101.2,1.25,1.25);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],0.1,0.4,0,0.1,0.4,16.6).s().p("AhFAFIAAgOICBAGIAKABIAAAMIiLgFg");
	this.shape_741.setTransform(1002.2,106,1.25,1.25);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],0.6,-2.2,0,0.6,-2.2,19.7).s().p("AiyACIAAgQIFlAOIgFAPIlggNg");
	this.shape_742.setTransform(968.9,104.6,1.25,1.25);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.4,-3.1,0,-1.4,-3.1,29.9).s().p("AjCAMQgHgTgBgKIEHAFIAqAAIBkACIAAAcImNgGg");
	this.shape_743.setTransform(657.1,95.7,1.25,1.25);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-1.8,0.3,0,-1.8,0.3,27.6).s().p("Ai7AOQgFgPgCgPIGFAEIAAAdIl+gDg");
	this.shape_744.setTransform(603.6,95,1.25,1.25);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-5,-2,0,-5,-2,29.5).s().p("AjdAQQgJgVgCgKIEzAAIAbAAICDABIAAAeInGAAg");
	this.shape_745.setTransform(492.6,94.3,1.25,1.25);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-2.7,-0.3,0,-2.7,-0.3,28.5).s().p("AjBAPIgCgFQgHgOgBgMIGXADIAAAeImNgCg");
	this.shape_746.setTransform(551.4,94.5,1.25,1.25);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-0.1,-1.2,0,-0.1,-1.2,20).s().p("AivAEIAAgTIFfAPQAAAHgCAJIldgMg");
	this.shape_747.setTransform(921.2,102.7,1.25,1.25);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-0.2,-4,0,-0.2,-4,22.2).s().p("ABkAOIksgJIAAgVIDhAIIAKAAIA0ACIADAAIAWABIBZADQAAAHgCAMIhjgDg");
	this.shape_748.setTransform(870.9,100.9,1.25,1.25);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],0.4,-3.5,0,0.4,-3.5,24.3).s().p("AjiAGIAAgXIHFAOQgCALgDAKInAgMg");
	this.shape_749.setTransform(815.5,99.1,1.25,1.25);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],0.1,-2.4,0,0.1,-2.4,24.2).s().p("Ai7AJIAAgZIF3AKQgCALgEAMIlxgIg");
	this.shape_750.setTransform(760.1,97.7,1.25,1.25);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.rf(["#E2C61C","#AA562D","#4B2630"],[0,0.604,1],-4,-1.5,0,-4,-1.5,26.1).s().p("AjRALIAAgcIA7ABIFpAIQgCAMgFAOImdgHg");
	this.shape_751.setTransform(708.9,96.6,1.25,1.25);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.2,-6.4,0,-0.2,-6.4,25.2).s().p("AjNAUIAAglIAAghIAWgBQABAKAHASIACAGQAJAVALAPIFngFIAAAfImbAHg");
	this.shape_752.setTransform(270,100.9,1.25,1.25);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.7,-3,0,-0.7,-3,24.9).s().p("AjNATIAAglIAAggIAUgBQACANAFAUIABAFQAFARAGAOIF0gHIAAAgImbAJg");
	this.shape_753.setTransform(218.4,102.1,1.25,1.25);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.9,-4.2,0,-0.9,-4.2,25.2).s().p("AjUARIAAgjIAAggIAYgBQABAQAHAQIABAEQAIAPAPAQIFxgJIAAAiImpALg");
	this.shape_754.setTransform(165.9,103.5,1.25,1.25);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-1.6,-5.2,0,-1.6,-5.2,27.6).s().p("AjbAXIAAgoIAAgiIAbAAQABANAGAVIABADQAGAWAHAPIGHgBIAAAcIm3ACg");
	this.shape_755.setTransform(432.6,98.9,1.25,1.25);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],0.5,-5.5,0,0.5,-5.5,31.3).s().p("AjdAWIAAgnIAAgiIAiAAIAAAJQAAAMADANQACAMAFAMIAGAPIGJgDIAAAdIl2ADIhFABg");
	this.shape_756.setTransform(377.1,99.3,1.25,1.25);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.4,-5.2,0,-0.4,-5.2,31.3).s().p("AjUAVIAAgmIAAgiIAPAAQAEAMAMAWIADAFQALASAKAOIFygDIAAAdImpAGg");
	this.shape_757.setTransform(322.5,100,1.25,1.25);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-1.4,-5.4,0,-1.4,-5.4,27.5).s().p("AjGAQIAAgjIAAgfIARgBQABAOAFARIAGARIAIASIFogKIAAAiIlQALIg9ACg");
	this.shape_758.setTransform(114.3,105.1,1.25,1.25);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.7,-4.3,0,-0.7,-4.3,21.5).s().p("AirgyIAUgBIATAcIAAAAQAOAVANAMIAOANIgMgNIETgJIAAAlIlXAOg");
	this.shape_759.setTransform(21.6,108.4,1.25,1.25);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.4,-4.8,0,-0.4,-4.8,23.8).s().p("Ai4APIAAgjIAAgeIATgBIALAeIAEAKIAKAVQClgCCfgFIAAAkIlwANgAiKANQADAGgPAAQAUABgJgJIABACg");
	this.shape_760.setTransform(66.3,106.7,1.25,1.25);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],0.1,-7.6,0,0.1,-7.6,16.6).s().p("AhFANIAAggICLAGIAAAhIiLgHg");
	this.shape_761.setTransform(1002.2,116.1,1.25,1.25);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.2,-7.5,0,-0.2,-7.5,19.7).s().p("Ai6AjIAAghIFFAOQAMgQALgbIAEgIIAFgQIAQABIAAAPIAAA1IAAAiIl1gRg");
	this.shape_762.setTransform(969.9,111.2,1.25,1.25);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],0,-6.8,0,0,-6.8,29.9).s().p("AjZAwIAAgcIAAgsIAAgeIAdAAQABAKAHAVIADAJQAIAXAIAMIF7AGIAAAcImzgHg");
	this.shape_763.setTransform(655.3,100.3,1.25,1.25);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.9,-3.4,0,-0.9,-3.4,27.6).s().p("AjLAxIAAgcIAAgqIAAggIARAAQACAPAFARIAJAWIAKAVIFsAEIAAAcImXgFg");
	this.shape_764.setTransform(602.5,99.6,1.25,1.25);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-3.7,-5.6,0,-3.7,-5.6,29.5).s().p("Aj1AzIAAgcIAAgpIAAghIAaAAQACAKAJAXIADAJIAOAgIG1ABIAAAcInrgBg");
	this.shape_765.setTransform(491,98.8,1.25,1.25);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-1.1,-3.9,0,-1.1,-3.9,28.5).s().p("AjbAyIAAgcIAAgpIAAghIAgAAQABAMAHAQIACAFQAIAQASAZIFzAEIAAAbIm3gDg");
	this.shape_766.setTransform(549.4,99,1.25,1.25);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-1.4,-6.2,0,-1.4,-6.2,20).s().p("Ai8AkIAAgfIEzAMQAPgLAHgGQAPgPAFgSQACgJABgJIAZABIAAASIAAA0IAAAgIl5gQg");
	this.shape_767.setTransform(922.8,109,1.25,1.25);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-1.4,-8.9,0,-1.4,-8.9,22.2).s().p("AjUAkIAAgeIF9ANQAIgOAFgSIAFgRQACgMAAgJIAYABIAAAVIAAAyIAAAfImpgQg");
	this.shape_768.setTransform(872.4,107.1,1.25,1.25);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-0.2,-8.3,0,-0.2,-8.3,24.3).s().p("AjpAlIAAgdIGcAMIAPgLQAOgMAHgYQADgLACgNIAOABIAAAXIAAAxIAAAeInTgPg");
	this.shape_769.setTransform(816.3,105.1,1.25,1.25);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-4.5,-5.8,0,-4.5,-5.8,26.1).s().p("AjWAqIAAgcIGDAIQAIgJAKgSIAIgSQAFgOACgOIAKAAIAAAcIAAAuIAAAdImugKg");
	this.shape_770.setTransform(709.6,101.9,1.25,1.25);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.rf(["#E27710","#621338","#000054"],[0,0.604,1],-1.2,-6.8,0,-1.2,-6.8,24.2).s().p("AjIApIAAgcIFYAIIAOgVQAHgMAEgNQAEgNACgNIAaABIAAAZIAAAwIAAAdImRgLg");
	this.shape_771.setTransform(761.8,103.3,1.25,1.25);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-2.7,-3.7,0,-2.7,-3.7,21.5).s().p("Ah8AQQgOgOgOgTIAAAAIExgLIAAAjIkUAJIAMANIgNgNg");
	this.shape_772.setTransform(24,107.7,1.25,1.25);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-1.9,-4.1,0,-1.9,-4.1,23.8).s().p("AilAaQAPAAgDgGIgBgCQAIAIgQAAIgDAAgAilgEIgEgKIE6gKIAZgBIAAAjQigAFikACIgLgVg");
	this.shape_773.setTransform(68.1,105.8,1.25,1.25);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-2.5,-4.6,0,-2.5,-4.6,27.5).s().p("Ai1ADIgFgOIF1gLIAAAjIlnAKIgJgUg");
	this.shape_774.setTransform(115.8,104,1.25,1.25);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-2.5,-3.5,0,-2.5,-3.5,25.2).s().p("AjCgIIgCgEIGJgKIAAAkIlxAJQgPgSgHgNg");
	this.shape_775.setTransform(167.9,102.6,1.25,1.25);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-2,-2.6,0,-2,-2.6,24.9).s().p("Ai+gIIgCgFIGBgIIAAAkIl1AIQgFgOgFgRg");
	this.shape_776.setTransform(220.1,101.5,1.25,1.25);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-1.8,-6.1,0,-1.8,-6.1,25.2).s().p("Ai9gPIF7gGIAAAmIlnAFQgLgQgJgVg");
	this.shape_777.setTransform(272,100.6,1.25,1.25);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-2,-5.1,0,-2,-5.1,31.3).s().p("AjBgKIgEgGIGLgFIAAAnIlzAEQgKgOgKgSg");
	this.shape_778.setTransform(324.5,99.9,1.25,1.25);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-1.3,-5.6,0,-1.3,-5.6,31.3).s().p("AjEAGQgEgLgDgMIGXgEIAAAoImKACIgGgPg");
	this.shape_779.setTransform(379.4,99.4,1.25,1.25);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-3.3,-5.3,0,-3.3,-5.3,27.6).s().p("AjJgPIgBgEIGVgBIAAAoImGABQgIgPgGgVg");
	this.shape_780.setTransform(434.7,99.1,1.25,1.25);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-5.6,-5.9,0,-5.6,-5.9,29.5).s().p("AjRAUIgPggIgDgIIHHAAIAAApIm1gBg");
	this.shape_781.setTransform(493.3,99.1,1.25,1.25);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-3.2,-4.2,0,-3.2,-4.2,28.5).s().p("AitAUQgRgZgIgRIGNACIAAArIl0gDg");
	this.shape_782.setTransform(552,99.4,1.25,1.25);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-2.1,-3.6,0,-2.1,-3.6,27.6).s().p("AisAUIgKgUIgJgXIF/ADIAAAsIlsgEg");
	this.shape_783.setTransform(604,99.8,1.25,1.25);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-1.8,-7,0,-1.8,-7,29.9).s().p("Ai0ATQgHgLgJgYIgCgJIGNAGIAAAtIl7gHg");
	this.shape_784.setTransform(657.6,100.5,1.25,1.25);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-3.6,-5.3,0,-3.6,-5.3,26.1).s().p("AjOATIAAgtIGdAHIgIATQgJARgJAKImDgIg");
	this.shape_785.setTransform(708.5,101.4,1.25,1.25);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],0.4,-6.2,0,0.4,-6.2,24.2).s().p("Ai4ATIAAguIFxAIQgEAOgHALIgNAWIlZgJg");
	this.shape_786.setTransform(759.7,102.4,1.25,1.25);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],0.7,-7.3,0,0.7,-7.3,24.3).s().p("AjgASIAAgvIHBAMQgHAWgOAPIgPAKImdgMg");
	this.shape_787.setTransform(815.1,103.9,1.25,1.25);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],-0.1,-7.7,0,-0.1,-7.7,22.2).s().p("AjHASIAAgwIEsAJIBjADIgFARQgFASgIAOIl9gNg");
	this.shape_788.setTransform(870.7,105.6,1.25,1.25);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],0,-4.8,0,0,-4.8,20).s().p("AiuAUIAAgzIFdANQgFASgPAOQgHAGgPALIkzgLg");
	this.shape_789.setTransform(921,107.2,1.25,1.25);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],0.9,-5.8,0,0.9,-5.8,19.7).s().p("AivATIAAgzIFfAOIgDAIQgLAagMARIlFgOg");
	this.shape_790.setTransform(968.6,109.1,1.25,1.25);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.rf(["#E28E19","#993333","#000033"],[0,0.604,1],0.1,-3.1,0,0.1,-3.1,16.6).s().p("AhFAYIAAg1ICLAGIAAA1IiLgGg");
	this.shape_791.setTransform(1002.2,110.5,1.25,1.25);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],46,-38.2,0,46,-38.2,280.9).s().p("EAhWABXIg0gCIAPgHQAXgKAEgEQgBAJALALIACACIAAABIgCAAgAFWgKIAAACIgBABIABgDgACUgkQgBgIACgBIACgBIgBAKgAYAg+IAAAAIAAAFIAAgFgAkThGIADAAIgBADIgCgDgEghXgBWIAGAAIAAAFIgGgFg");
	this.shape_792.setTransform(615,89.1,1.25,1.25);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],-4.1,-26.1,0,-4.1,-26.1,75.9).s().p("AFSB5QgMgGAAgNQAAgFAGgKQAFgJAAgCQAAgHgCgFIgMAAIgEADIgCABQABgIgEgHQgHgLgPAAQgOAAgEAHIgKAbIgHgMQAFANgOAGQgKAEgPAAQgcAAACgUIAAAAIAAAAQgBAFgIAJQgJAJgEAAQgIAAgGgKIgJgNIgHAQQgDAEgGAAQgKAAgGgJQgGgIACgIQgEAEgHADQACgHAFgMQAAgGgCgGIgOAAQgKAEgHAIIAAgCQAFgGAAgLQAAgcgUAAQgdAAgBAYQgBgKgFgKQgGgMgLAAQgTAAgBAcQAAgLgWgJIgVAAQADANAAAgIgRAAIgUgHIADABQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIAAAGQAAAIgGANQgJAQgNAAQgJAAgIgJQgFgHgJgRQgIAPgGAGQgGAFgMAAQgPAAgFgLQgEgJABgYIgOANQgOAKgGAAQgGAAgHgFQgHgGAAgIIAJgWIAIgTIgFgOQgHgOgMAAQgdAAAFApIgCgDQgHgOgEgFQgFgEgJAAQgNAAgCAOQgBAHADAZQgKgMgLgDQgEgBgTAAIgPAAQgHABAAAKQAAAGAFAHIAUAVQgCADgKAUQgLAUgQAAQgdAAAFgtQgLASgHAGQgIAEgPAAQgNAAgEgBQgGgEAAgSQAAgOAEgMQgLAKgJADIgTAAQgOAAgGgEQgMgJAAgcIAAgDIAKgHQAGgCAOAAQARgBATAMQASANAEANQACgEAHgFQAHgFAEABIAJAAQADABAEAGQAAgdAOADIgTgVQgMgOAAgHQAAgGAKgCQAHgDAFAAQAMAAAOAJIAcAUIACAAQgCgDAAgKQAHgCAKgBIAPABQAGABACAGIAIgGQAHgEAEABQgGgLgOgUQgGgIAAgLQAAgHAFgDQAEgCALAAQAUAAAUAOIAgAdQgCgNAGgDQACgBALAAIANAAQAGACAFAKQgHgpAKgKQAHgIAhAAQAaAAANAMQAOAOAEAkIAIgLQAJgJAMAAQAHAAADACQADACAFAGQAEgZAEgFQAFgFAYAAQAVAAALAPQANAQACAeIAAADQADgKAFgFIABgBIAKgJIAlAAIADASQAGgKAXgLQAXgLAQAAQATAAAEAYIABAjQAGgIAOgEQAOgGAJAEQACgXAYAAQAYAAAKAYQAJAVgFAaQAJgHAFgBQAIABAFAFIALARQAAgKAJgLQAHgIAFAAQAOAAAKAbQAHAVAAAQIAqggQAPgLARABQATAAACAXIADAkQACgDAZgMQAbgNALgBQAUAAAAAXQAAAQgLAQIgIALIijAEIghAAIgDgBgAE6BKIADgGIgBAGgAlAAgIAAABIAAACIAAgDg");
	this.shape_793.setTransform(165.3,79.9,1.25,1.25);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],9.6,-12,0,9.6,-12,63.6).s().p("AEtB5QgFgEgOAAQgHAAgMACIAAgCQAOgFAEgLIABgQQAAgJgDgCQgDgCgMAAQgQgBgHAHIgMAUIAAgDQABgJgPgOQgQgPgLAAQgQAAgHASQgEANABAKIgHgPQgGgJgLAAQgPAAgKAJQgJAJABAKQgBgJgHgKQgKgOgOgDIgYAAIAAAdIgRgNQgSgNgGAAQACAKgBAIQgDASgNgBQgIABgIgFIgRgJQgDADgHAQQgJANgPAAQgLAAgJgGQgJgIAAgLQAAgJAKgQIALgPQAAgLgMgLQgMgMgJAAQgcAAgMAOQgIAKAAAQQgHgOgFgQQgFgKgPAAQgWAAgIAFQgIAEgBAMQgDgLgJgGQgKgGgTgBQgSAAgFAHIgBADQgEgRgIgNQgUgeguAAQgKAAgIAFIAAhVQAQgTAeAAQA4AAAbA6QAIASAFAWIADAUIAHgDQADgBAEAAQADAAAEAFQAFAFAAAEQAVgIAFABQgFgTAFgOQAGgPARAAQARAAATAZQATAYgCAQQABgIADgBIANAAQAEgBAJAEQAIAEAEAAQABggAWABQAPAAARAdQAOAaABALIAAADQALgaALgJQAMgLARABQAZAAAWAXQALALAOAZIADAAQAJgoAoAAQATgBATAUQARARAHAUQAIggAIgNQAKgRAVAAQARABAEAFIALAaIACAAQAAgOACgFQALgDADAOIABASQAAARgFAUIAAACQAHgaAZAAQANAAAOAOQARARAAAZIAAABIg9ACIgQAAIgOABQgBgFgDgDgACiBiIABACIAAACIgBgEgAijBAIABABIAAABIgBgCgAjqAwIAAgDQADAHAAAKQgDgCAAgMg");
	this.shape_794.setTransform(49.5,82.5,1.25,1.25);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.rf(["#ECD210","#A1EC07","#27A327","#2F3F2E"],[0,0.298,0.761,1],2.1,-18.9,0,2.1,-18.9,57.5).s().p("AgnBzIgJgYIgNAQQgGAFgHAAQgHAAgKgFQgMgHAAgKQAAgHAFgEQAGgFABgJQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgRADQgFgQgDgDQgFgFgQAAQgMAAgGAFQgGAGADAKQgEgDgFgHQgGgGgPAAQgUAAAAAMQAAAGAHAKQAGAKAAADQAAADgIAJQgKALgPAAQgNAAgHgGIgOgSQgJAOgJAGQgIAGgMAAQgTAAgDgLQgBgCgBgZQgKAFgLAAQgOAAgFgDQgJgFAAgUQAAgLAEgLQAFgMAHgHQgjAJgZgZQgYgaACgmIANgBQALAAAMAHIAVANQgBgDABgDQABgFAHAAQAFAAAGAFIAJAHIAAgJIAXAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIABADIACAAQgDgEgDgIQgEgJAAgFQAAgHAIgBIAJAAQALAAACABQADABANANIAAgKIALAAQAJAEAEADQADADABAHQAAgMAEgCIALgBQAGAAAEACIAJAHQgGgTAVAAQADAAADACIAHAGQAAgMACgCIAdAAQABgBAAAHQAAAFgEAHQgFAHAAAGQAAAHAFAFQAFAEAFAAQAIAAACgBQAHgDgDgMIACAAQAAAIAGAHQAHAIAMAAQAVAAACgVQAHAKADAAQAJAAgBgYQgBgYATAAQAKAAAIAJIAPAQQgFgTAEgKQAFgPAZAAQAIAAADAFIAJATIADgOIAMAAQASALABASIgBASQABgFAEgEQAHgKALAAQAIAAADAFQACACAFAMIADACQgCgSADgHQADgFAHAAQAJAAAIAOQAHAMAAANIgCALIgDALQATgDAAAZIAFgEQAHgEAJAAQALAAAIAKQAGAHACAFQAAgNAFgGQAFgFAKAAQAKAAAFAGQAGAHgBAQQAHgIAEAAQAJAAAFAYQACANAAAIIgBABIABAAIAAAEIAOAAIAJALQADAFACAIQAIgRAcgaIARgOQAOAHALASQAPAYgDANIAEAAIgCgJQgCgIAAgHQAAgOAOgJIAHgFQALgFANAAQALAAAJAFIgJAAIgBAKIgKgGQgEgCgHAAQgMAAgCABQgGADgDANIAAAOQAWAFAAATQAAAKgHAEQgEACgLAAIgJAAQgDgBgEgGQAIAYgjAAQgIAAgEgCQgFgDgIgJQgKAOgMAAQgJAAgKgLQgLgMAAgKIAAACQgMAAgGAGQgGAGgHAAQgNAAgMgFQgMgGgBgFQgBAPgJAHQgIAGgSAAQgTAAgDgBQgHgDABgPQgDALgFAHQgGAGgFAAQgOAAAAgPQAAgHAEgJQAFgJAAgHQAAgJgDgEQgEgHgNAAQgPAAgBABQgCACgCATIgIgJQgGgHgDgBIgaAAIAAARIAPAVQgaAEgKAAQgCAZgZAAQgRAAgCgHg");
	this.shape_795.setTransform(292.6,74.4,1.25,1.25);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],6.1,-3.9,0,6.1,-3.9,16.5).s().p("Ag5jYQASgRATgJQADBXATCKQAWCNAiBzIhzAEg");
	this.shape_796.setTransform(9.9,72.8);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],1.4,5.2,0,1.4,5.2,16.5).s().p("AAagiIgDgUQgKg9gTgYQgLgNgWgIQAngFAoAjIAABgIAAAwIAABwIAAAkQgHiLgHg5g");
	this.shape_797.setTransform(14.7,63.7);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],2.8,-3.3,0,2.8,-3.3,16.5).s().p("AgdgLQgViKgDhXQAOgHAOgCQAWAIAKAOQAUAXAKA9IADAUQAHA7AHCJIAAAuIAAAfIAABaIgdABQgghzgWiNg");
	this.shape_798.setTransform(13.2,72.2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.4,1.3,0,-1.4,1.3,83.1).s().p("ArIglIWRgUIgNBXI1yAcQgNg8gFgjg");
	this.shape_799.setTransform(102.6,54);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1,0.5,0,-1,0.5,83.5).s().p("AqTgkIFDgIIPkAPIgLAtI0GAdQgLgngLgqg");
	this.shape_800.setTransform(102.8,79.6);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0.1,1.5,0,0.1,1.5,83.5).s().p("As8ANIAAghIC0gFQALAqALAmIjKAFgAKfgTIAJglICRgDIAEBSIiqAEIAMgug");
	this.shape_801.setTransform(101.7,78.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.rf(["#C6F24F","#00D6BA","#008AC9"],[0,0.455,1],576.8,-24.4,0,576.8,-24.4,660.6).s().p("AqsHiIAAhaIADAAIDQgFQJ5gRJ8gNIAEAAIAgBNIg+ABIl2ALQmhAMmjAQIjuAIIgGAAgAqsCnICZgEQJxgRJzgMQASA4ATA4QnXAJnUAMIlDAIIi0AFgAs/niIV7AAQAlDeBCDvQprARpnAVIgnABIgJABIhNACQgpgggoAFQgOACgPAFQgTAIgSASg");
	this.shape_802.setTransform(87.3,48.3);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0,-4.1,0,0,-4.1,83.5).s().p("As9AhIAAgeIDLgDIUFgcICqgEIABAdIivADIgEAAQp7ALp5ARIjQAFIgEAAg");
	this.shape_803.setTransform(101.8,84.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-17.6,5.4,0,-17.6,5.4,83.4).s().p("An2AEQHXgKHVgKIBBgBIgJAjg");
	this.shape_804.setTransform(119.4,74.7);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0,-5.7,0,0,-5.7,83.1).s().p("As3gHICPgDIVygcIBtgCIABArIh2ACIh8ACQpxANpzAQIiZAFg");
	this.shape_805.setTransform(101.2,61);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],5.8,-1.4,0,5.8,-1.4,15.8).s().p("AgoCmIgBgeIgEhTIgGhuIgBgtIgGhyQAQgRASgIQACA4AMBRQAHA1AIA7QAYCRAeBXIheACg");
	this.shape_806.setTransform(188.9,67.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],1.9,12.1,0,1.9,12.1,15.8).s().p("AAfAcQgKgwgRgiQgWgygagJQAogJAnAlIAGBxIACAtIACAqQgFgwgJgng");
	this.shape_807.setTransform(192.8,53.7);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],2.2,-0.9,0,2.2,-0.9,15.8).s().p("AgdANQgKg8gHg0QgLhRgDg4IAIgEIAMgDQAZAJAWAxQARAjALAyQAIAmAFAxIAEBEIAEBYIABAZIAEBLIgIAAIgeABQgchWgYiRg");
	this.shape_808.setTransform(192.5,66.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-1.5,7.4,0,-1.5,7.4,83.1).s().p("ArKAVQJqgVJogQIDDgFIgDAXI2SAUg");
	this.shape_809.setTransform(102.8,47.9);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0.1,2.5,0,0.1,2.5,83.1).s().p("As2gVIBNgCIAJgBIAngBIAAAAQAFAhANA+IiPADgALYgsIAEgaIBWgCIAGBwIhtACIANhWg");
	this.shape_810.setTransform(101.1,52.7);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],-0.2,-4.8,0,-0.2,-4.8,100.3).s().p("AvlgCID1gCIYAgOIDWgCIAAARIg9AAIieABQr5AFr1ANIkAAFg");
	this.shape_811.setTransform(297.9,81.4);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.5,0.5,0,-1.5,0.5,100.3).s().p("AsegZIY9gVIgWA8IgGAUI4AANQgRghgQgng");
	this.shape_812.setTransform(299.3,76.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-1.5,5,0,-1.5,5,100.3).s().p("AskACQMkgMMlgGIgGAPI49ATIgGgQg");
	this.shape_813.setTransform(299.2,71.6);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0,1.3,0,0,1.3,100.3).s().p("AvmgdIACAAIDPgFIAHAQQAQAnAQAhIj1ADgAMZAVIAVg7IAGgQIAQAAICkgBIAABeIjWACIAHgUg");
	this.shape_814.setTransform(297.7,75.4);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],-0.3,-6.1,0,-0.3,-6.1,101.1).s().p("AvqgIICogCIargXICCgBIAAArIiMABIhuABQsSAGsVAOIiyAEg");
	this.shape_815.setTransform(297.4,57.5);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],7.5,-2.7,0,7.5,-2.7,14.6).s().p("AgsD0IAAgNIAAg5IAAgRIAAhgIAAhuIAAgtIAAh6QAVgRAVgKQgEAXgCAiIAABXIAAAFQAAB8AhCOQAKAmAKAhIhLABIgOAAg");
	this.shape_816.setTransform(402.2,63.5);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.6,0.9,0,-1.6,0.9,101.1).s().p("Atsg5IbZAFIgEAXIgNBAI6rAWQgUhEgJgug");
	this.shape_817.setTransform(298.7,50.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-1.9,7.9,0,-1.9,7.9,101.1).s().p("AtvAMQL2gQLzgIID2gDIgGAfg");
	this.shape_818.setTransform(299,43.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0,2.2,0,0,2.2,101.1).s().p("AvtgoIBygCIASgBIAOAAQAIArAUBHIioACgAN5gPIAFgYIAFggIBrgBIAAB4IiBABIAMhAg");
	this.shape_819.setTransform(297,49.2);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],0.5,8.9,0,0.5,8.9,14.6).s().p("AAkAdIgGgXQghh/g2gLQA+gWA1A1IAACCIAAAjIAABMQgKg/gMgwg");
	this.shape_820.setTransform(409.2,51.9);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],1.6,-2.4,0,1.6,-2.4,14.6).s().p("AggCvQgjiNAAh9IAAgEIAAhYQACgiAEgWIAPgGQAzALAkCBIAGAXQAMAwAJA9IAAAkIAABQIAAAhIAABGIhQAAQgKghgKgmg");
	this.shape_821.setTransform(408.1,63.2);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-0.4,1.6,0,-0.4,1.6,104.8).s().p("AuQhAIchAqQgFAkgJAsI7pAHQgWg+gUhDg");
	this.shape_822.setTransform(519.9,48.2);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0.1,-4.1,0,0.1,-4.1,104.6).s().p("AwTAQIAAgfIEMABIZSADIDIABIAAAXIjRAAQsfgCsdADQiDABiEABIgSAAg");
	this.shape_823.setTransform(519.4,79.2);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0.1,-6.3,0,0.1,-6.3,104.8).s().p("AwTgMICzgBIbogGICLgBIAAAmIiSAAQtsgEtpAFIi/ACg");
	this.shape_824.setTransform(519.4,56.2);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-2.9,3.9,0,-2.9,3.9,104.6).s().p("AtFgLIgDgEQNIgENIACIgLAkg");
	this.shape_825.setTransform(522.4,71.1);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-2.4,1.2,0,-2.4,1.2,104.6).s().p("AsgAlQgRglgQgnIaDAgIgQAvg");
	this.shape_826.setTransform(521.9,73.9);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0.1,1.4,0,0.1,1.4,104.6).s().p("ANLAqIAQgvIALglICtAAIAABVgAwTAmIAAhNIAGAAIBagBICJgBIACAEQAQAnARAlg");
	this.shape_827.setTransform(519.4,73.6);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],-7.3,-1.4,0,-7.3,-1.4,15.1).s().p("AgrDwIAfjKQAai1AAhKIAAgXQARAIANAOIAAB1IAAArIAABuIAABMIAAAlIAABMIhXgBg");
	this.shape_828.setTransform(638.3,64.1);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-0.7,6.2,0,-0.7,6.2,104.8).s().p("AuSgSIgBgBQOTgFOUAIIgFAmg");
	this.shape_829.setTransform(520.2,43.6);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0.1,1.6,0,0.1,1.6,104.8).s().p("AwThAIBygBIAVAAIABABQAUBDAXA+IizABgAOWgWIAGgoIB3ABIAAB3IiLAAQAJgsAFgkg");
	this.shape_830.setTransform(519.4,48.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],3.8,-1,0,3.8,-1,15.1).s().p("AggDzIAAhLIAAgZIAAhXIAAhvIAAgoIAAh5QAigTAfgHQgZBIgIArIgFAgQgSBiAACMIAAAPQAAAeADA3IgMAAg");
	this.shape_831.setTransform(627.2,63.7);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.3,-0.8,0,-1.3,-0.8,15.1).s().p("AhHD1QgDg3AAgeIAAgPQABiMARhiIAGggQAJgrAZhIQAzgNAnATIABAXQAABKgcC1IgfDKIhXgBg");
	this.shape_832.setTransform(632.3,63.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.rf(["#FF9810","#8ABF15","#589F25","#568020"],[0.008,0.486,0.863,1],-8.7,-412.7,0,-8.7,-412.7,650.6).s().p("ALQHMIBBg4QBuheAdAAQASAAG/BDQHwBBELAAQKggBF8hWQHJhpCFj4QB4gCDBgrQDlg1DNhVQElh7ClibIAAOXgEhOHAHMIAAtOIANAOQCRCmCGBDQBfAxEpBUQENBJDNAqQDfAyCJAbQD3AvCxAHQDegCA/ABQBhAAAWAkQBCBwCSA9IAnAMg");
	this.shape_833.setTransform(504.1,702.8);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-2.8,5.1,0,-2.8,5.1,100.5).s().p("At/gjIAAgBQN/AKOAAYIgHAng");
	this.shape_834.setTransform(744.8,46);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],66.1,3.4,0,66.1,3.4,73.3).s().p("AhAAiIAAhHIBGACIAHAAIAjABIAAAAQAIAnAJAhg");
	this.shape_835.setTransform(865.4,75.3);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-2.2,3.8,0,-2.2,3.8,99.7).s().p("AtLgaIgBgDQM+AENbANIgNAqg");
	this.shape_836.setTransform(744.2,72.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0,-3.7,0,0,-3.7,99.7).s().p("APcAfIiegDQs0gQsZgGIjPgBIAAgjIDBADIZmAaICWABIAAAfIgDAAg");
	this.shape_837.setTransform(741.9,80.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1.6,1.5,0,-1.6,1.5,99.7).s().p("AsuAYQgMgegJgjIgCgIIaLA4IgOArg");
	this.shape_838.setTransform(743.6,74.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-2.4,1.7,0,-2.4,1.7,100.5).s().p("AtrAtIgRhyIb5BIIgOBDg");
	this.shape_839.setTransform(744.4,49.5);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0,1.6,0,0,1.6,99.7).s().p("ANJAzIAOgrIANgqIB6ACIABAAIAABVgAveAVIAAhJIBoAAIBBABIABADIACAIQAJAiAMAfg");
	this.shape_840.setTransform(741.9,74.7);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0,-5.8,0,0,-5.8,100.5).s().p("AOAAeQtzgOtYgEIiTgBIAAgpICMACIbaAZIBXABIAAAhIhfgBg");
	this.shape_841.setTransform(741.9,57);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],1.1,7.8,0,1.1,7.8,15.8).s().p("AgrAuIAAgjIAAhqQAwglAngGQgdAqgQAyQgfBPgLBqg");
	this.shape_842.setTransform(845.5,55.5);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],0,1.7,0,0,1.7,100.5).s().p("AOIBHIAOhEIAHgnIBCACIAABqgAveAsIAAhzIBpABIASAAIAAABIARBzg");
	this.shape_843.setTransform(741.9,49.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],68.3,3.2,0,68.3,3.2,73.3).s().p("AgqAzIAAhoIA0ACIARAAIAAABIAQBog");
	this.shape_844.setTransform(863.2,51.7);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-1,-3.5,0,-1,-3.5,15.9).s().p("Ag9D7IgCAAIAAhXIAAgfIAAhYIAAgTQAKhoAfhSQATgxAagqQAOgCANACIAFAoQAGAyACA+IABBGQAACmgaB0IhjgCg");
	this.shape_845.setTransform(847.5,66.8);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.rf(["#DE6B2C","#A81E27","#000000"],[0,0.604,1],-8.6,-3.7,0,-8.6,-3.7,15.9).s().p("AgkD8QAah1AAimIgBhFQgCg/gGgyIgFgnQAjAFAaAqIAABqIAAAlIAABrIAABJIAAAkIAABjIhJgBg");
	this.shape_846.setTransform(855.1,67);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.rf(["#EDE746","#00FFCC","#0099CC"],[0,0.455,1],23.6,-22.8,0,23.6,-22.8,660.6).s().p("EAk6AHNIizgFIAAhjICOADQCeADCdAFQggAngjAmIgVAWIi+gGgAcNG/Qr/gTsAgKIj4gDIAAhMIDPABQMbAGM0APICeAEIADAAIAABWIjIgEgAmZGbQr8gGr8ADIkmADIgXAAIAAhGIASAAQCEgCCDAAQMfgEMfACIDRABIAABLIjzgCgEgm3AFXIA9gBIAAA5QgggcgdgcgEAj5AD6IgjgBIgHAAIhIgCIAAhtIBdABIH6AJQgdA6giA1QjUgGjSgDgAfUD2Ih6gCQtdgMs9gFIhBgBIhpAAIAAhwICTABQNbAENyAOIBfABIAABcIAAAUIgBAAgEgoqADZQgngwgkgyIBugBICNgBIAABwIikACIgMgOgEgjOADkIAAglIAAhLIC/gCQNrgFNsADICSABIAABwIitAAQtJgCtJADIiJABIhaABIgGAAgEAjOgABIgSAAIg1gCQgagpglgGQgNgDgOACQgnAGgxAmIhCgCQuBgYuAgKIgTAAIhpgBQgNgOgPgJQgngSg1ANQgfAHglATIh3gBQuVgIuVAFIgVAAIhyABQg1g1g/AWIgPAFQgVAKgUARIhsACIj1ACQhojCg4jkMBb3AAAQgPCtgfCFQgWBcggBTQklgKklgGg");
	this.shape_847.setTransform(640.5,46.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.rf(["#FFBB10","#AADE1E","#7EBD28","#75A02B"],[0.008,0.486,0.863,1],-8.7,-110,0,-8.7,-110,650.6).s().p("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");
	this.shape_848.setTransform(504.1,400.1);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.rf(["#FFA110","#9BC21E","#66AD1C","#569120"],[0.008,0.486,0.863,1],-8.7,-128,0,-8.7,-128,650.6).s().p("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");
	this.shape_849.setTransform(504.1,418.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-3.5,4.7,0,-3.5,4.7,73.3).s().p("AqxgiIAAgCQElAJElAKQGMAMGNAOIAAAcg");
	this.shape_850.setTransform(935,50.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-3.5,1.2,0,-3.5,1.2,73.3).s().p("AqhAhIgQhnIVjBHIAABGg");
	this.shape_851.setTransform(935,53.7);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0.1,-5.3,0,0.1,-5.3,73.3).s().p("Ah+AOIn6gKIhcgBIAAgjIBWADIVTAjIAAAbQmlgLmugIg");
	this.shape_852.setTransform(931.5,60.2);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.rf(["#CCC22C","#A65A31","#502B32"],[0,0.604,1],-5.6,4,0,-5.6,4,73.3).s().p("AqbgcIgBgBQDTAEDUAFQHIAKHKAKIAAAeg");
	this.shape_853.setTransform(937.1,74.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.rf(["#CC9933","#993333","#000033"],[0,0.604,1],-5.6,1,0,-5.6,1,73.3).s().p("AqLAOQgIgfgJgpIU4A6IAAA7g");
	this.shape_854.setTransform(937.2,77.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.rf(["#DE4D23","#6A0A13","#000000"],[0,0.604,1],0.1,-3.6,0,0.1,-3.6,73.3).s().p("AkLALQiegEiegDIiNgEIAAgjICCAEIUnArIAAAYIvggZg");
	this.shape_855.setTransform(931.5,82.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.rf(["#F5F338","#00EEB6","#008AC9"],[0,0.455,1],89.8,-24.7,0,89.8,-24.7,660.6).s().p("EAyOAHAIAVgWQAjglAggoIPjAZIAABvQodgVoegQgEg/kAFjICugEIAFBNIiTAEIgghNgEg6vAFdIEAgFQL3gNL5gGICegBQAdAcAgAcIAAANIj3ACQrOAHrNAQIk1AHgEA01ADwQAig1Adg5QGvAIGmALIAABwQnKgLnKgKgEhAzACDIB8gCIB2gDIAGBxIiRADIhCABQgTg3gSg5gEg60ADsIgEhGIgCgqICzgEQMUgNMUgHQAkAyAnAxIAMANIgQAAQslAHsmANIjPAEIgCAAgEA2ugACQAghVAWhcQAfiFAPisIK3AAIAAH8QmNgPmOgLgEhDIgHkIfjAAQA4DjBoDCQr2AJr1ARIgNAAIgSABIhzACQgoglgpAJIgLADIgIAEQgSAIgQAQIhWADIjDAFQhCjwgljdg");
	this.shape_856.setTransform(574.3,48.6);

	this.addChild(this.shape_856,this.shape_855,this.shape_854,this.shape_853,this.shape_852,this.shape_851,this.shape_850,this.shape_849,this.shape_848,this.shape_847,this.shape_846,this.shape_845,this.shape_844,this.shape_843,this.shape_842,this.shape_841,this.shape_840,this.shape_839,this.shape_838,this.shape_837,this.shape_836,this.shape_835,this.shape_834,this.shape_833,this.shape_832,this.shape_831,this.shape_830,this.shape_829,this.shape_828,this.shape_827,this.shape_826,this.shape_825,this.shape_824,this.shape_823,this.shape_822,this.shape_821,this.shape_820,this.shape_819,this.shape_818,this.shape_817,this.shape_816,this.shape_815,this.shape_814,this.shape_813,this.shape_812,this.shape_811,this.shape_810,this.shape_809,this.shape_808,this.shape_807,this.shape_806,this.shape_805,this.shape_804,this.shape_803,this.shape_802,this.shape_801,this.shape_800,this.shape_799,this.shape_798,this.shape_797,this.shape_796,this.shape_795,this.shape_794,this.shape_793,this.shape_792,this.shape_791,this.shape_790,this.shape_789,this.shape_788,this.shape_787,this.shape_786,this.shape_785,this.shape_784,this.shape_783,this.shape_782,this.shape_781,this.shape_780,this.shape_779,this.shape_778,this.shape_777,this.shape_776,this.shape_775,this.shape_774,this.shape_773,this.shape_772,this.shape_771,this.shape_770,this.shape_769,this.shape_768,this.shape_767,this.shape_766,this.shape_765,this.shape_764,this.shape_763,this.shape_762,this.shape_761,this.shape_760,this.shape_759,this.shape_758,this.shape_757,this.shape_756,this.shape_755,this.shape_754,this.shape_753,this.shape_752,this.shape_751,this.shape_750,this.shape_749,this.shape_748,this.shape_747,this.shape_746,this.shape_745,this.shape_744,this.shape_743,this.shape_742,this.shape_741,this.shape_740,this.shape_739,this.shape_738,this.shape_737,this.shape_736,this.shape_735,this.shape_734,this.shape_733,this.shape_732,this.shape_731,this.shape_730,this.shape_729,this.shape_728,this.shape_727,this.shape_726,this.shape_725,this.shape_724,this.shape_723,this.shape_722,this.shape_721,this.shape_720,this.shape_719,this.shape_718,this.shape_717,this.shape_716,this.shape_715,this.shape_714,this.shape_713,this.shape_712,this.shape_711,this.shape_710,this.shape_709,this.shape_708,this.shape_707,this.shape_706,this.shape_705,this.shape_704,this.shape_703,this.shape_702,this.shape_701,this.shape_700,this.shape_699,this.shape_698,this.shape_697,this.shape_696,this.shape_695,this.shape_694,this.shape_693,this.shape_692,this.shape_691,this.shape_690,this.shape_689,this.shape_688,this.shape_687,this.shape_686,this.shape_685,this.shape_684,this.shape_683,this.shape_682,this.shape_681,this.shape_680,this.shape_679,this.shape_678,this.shape_677,this.shape_676,this.shape_675,this.shape_674,this.shape_673,this.shape_672,this.shape_671,this.shape_670,this.shape_669,this.shape_668,this.shape_667,this.shape_666,this.shape_665,this.shape_664,this.shape_663,this.shape_662,this.shape_661,this.shape_660,this.shape_659,this.shape_658,this.shape_657,this.shape_656,this.shape_655,this.shape_654,this.shape_653,this.shape_652,this.shape_651,this.shape_650,this.shape_649,this.shape_648,this.shape_647,this.shape_646,this.shape_645,this.shape_644,this.shape_643,this.shape_642,this.shape_641,this.shape_640,this.shape_639,this.shape_638,this.shape_637,this.shape_636,this.shape_635,this.shape_634,this.shape_633,this.shape_632,this.shape_631,this.shape_630,this.shape_629,this.shape_628,this.shape_627,this.shape_626,this.shape_625,this.shape_624,this.shape_623,this.shape_622,this.shape_621,this.shape_620,this.shape_619,this.shape_618,this.shape_617,this.shape_616,this.shape_615,this.shape_614,this.shape_613,this.shape_612,this.shape_611,this.shape_610,this.shape_609,this.shape_608,this.shape_607,this.shape_606,this.shape_605,this.shape_604,this.shape_603,this.shape_602,this.shape_601,this.shape_600,this.shape_599,this.shape_598,this.shape_597,this.shape_596,this.shape_595,this.shape_594,this.shape_593,this.shape_592,this.shape_591,this.shape_590,this.shape_589,this.shape_588,this.shape_587,this.shape_586,this.shape_585,this.shape_584,this.shape_583,this.shape_582,this.shape_581,this.shape_580,this.shape_579,this.shape_578,this.shape_577,this.shape_576,this.shape_575,this.shape_574,this.shape_573,this.shape_572,this.shape_571,this.shape_570,this.shape_569,this.shape_568,this.shape_567,this.shape_566,this.shape_565,this.shape_564,this.shape_563,this.shape_562,this.shape_561,this.shape_560,this.shape_559,this.shape_558,this.shape_557,this.shape_556,this.shape_555,this.shape_554,this.shape_553,this.shape_552,this.shape_551,this.shape_550,this.shape_549,this.shape_548,this.shape_547,this.shape_546,this.shape_545,this.shape_544,this.shape_543,this.shape_542,this.shape_541,this.shape_540,this.shape_539,this.shape_538,this.shape_537,this.shape_536,this.shape_535,this.shape_534,this.shape_533,this.shape_532,this.shape_531,this.shape_530,this.shape_529,this.shape_528,this.shape_527,this.shape_526,this.shape_525,this.shape_524,this.shape_523,this.shape_522,this.shape_521,this.shape_520,this.shape_519,this.shape_518,this.shape_517,this.shape_516,this.shape_515,this.shape_514,this.shape_513,this.shape_512,this.shape_511,this.shape_510,this.shape_509,this.shape_508,this.shape_507,this.shape_506,this.shape_505,this.shape_504,this.shape_503,this.shape_502,this.shape_501,this.shape_500,this.shape_499,this.shape_498,this.shape_497,this.shape_496,this.shape_495,this.shape_494,this.shape_493,this.shape_492,this.shape_491,this.shape_490,this.shape_489,this.shape_488,this.shape_487,this.shape_486,this.shape_485,this.shape_484,this.shape_483,this.shape_482,this.shape_481,this.shape_480,this.shape_479,this.shape_478,this.shape_477,this.shape_476,this.shape_475,this.shape_474,this.shape_473,this.shape_472,this.shape_471,this.shape_470,this.shape_469,this.shape_468,this.shape_467,this.shape_466,this.shape_465,this.shape_464,this.shape_463,this.shape_462,this.shape_461,this.shape_460,this.shape_459,this.shape_458,this.shape_457,this.shape_456,this.shape_455,this.shape_454,this.shape_453,this.shape_452,this.shape_451,this.shape_450,this.shape_449,this.shape_448,this.shape_447,this.shape_446,this.shape_445,this.shape_444,this.shape_443,this.shape_442,this.shape_441,this.shape_440,this.shape_439,this.shape_438,this.shape_437,this.shape_436,this.shape_435,this.shape_434,this.shape_433,this.shape_432,this.shape_431,this.shape_430,this.shape_429,this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.mcRoute,this.mcCastSiTask_0,this.mcCastSiObstacle_0,this.mcCastSiObstacle_1,this.mcCastSiObstacle_2,this.mcCastSiTask_1,this.mcCastSiTask_2,this.mcCastSiTask_3,this.mcCastSiTask_4,this.mcCastSiTask_5,this.mcCastSiTask_6,this.mcCastSiTask_7,this.mcCastSiTask_8,this.mcCastSiTask_9,this.mcCastSiUser,this.mcCastMiEnemy_0,this.mcCastMiEnemy_1,this.mcCastMiEnemy_2,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.mcLife,this.mcResult_0,this.mcResult_1,this.mcResult_2,this.mcResult_3,this.mcResult_4,this.pbHelp,this.pbBack,this.mcMessages,this.mcExit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;