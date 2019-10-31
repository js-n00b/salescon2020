(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 12,
	color: "#FF00FF",
	manifest: []
};



// symbols:



(lib.Symbol5copy = function() {
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


(lib.mcTopic_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.1,0,356.1,62.6);


(lib.mcGrade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARnMlQgnghgRg1IhEjYIqAAAIhFDVQgRA3gnAiQgnAghGABQhIgBgxgtQgugsgChGQABgcAFgVIAJgbIHOzhQAehSA+g0QBBg2BYgCQBcABA+A1QA/A1AeBTIHDThQAKAbADAXQAFAXAAAMQgCBEguApQgtAphCABQhHgBgpgggAODC5IjXqYIgEAAIjaKYIG1AAgAlyMqQgngbgwg1IpTqDIAAJLQgBBEguAvQguAvhPACQhMgBgwgsQgvgrgChMIAA0xQAChHAtgwQAvgwBPgCQBLABAwAsQAwAtABBPIAAHyII2pbQATgVAhgVQAigVAwgBQBDABAxAtQAzAsADBLQAAAsgcAqQgdArg4A3ImzGtIITInQAqArAbAoQAbApABAzQgCBRg1AmQg0AnhIAAQgxAAgogcg");
	this.shape.setTransform(133.1,135.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AknMkQgogcgvg0IpUqEIAAJLQgBBEgtAvQgvAvhOADQhMgBgwgsQgwgsgBhMIAA0wQABhIAugwQAugvBQgDQBLABAvAsQAxAtAABQIAAHxII3pbQASgVAigVQAhgVAxgBQBDABAxAtQAzAsACBLQAAAsgcArQgdArg4A3ImyGsIITInQApArAbAoQAbAqACAyQgDBRg1AmQgzAohJAAQgwAAgogcgAE8MyQhRgBgzguQgzgugChRIAA0JQAChTAygsQAxgtBSAAIG5AAQB5ABBhAxQBiAzA5BaQA6BbABB6QABB5g1BUQg0BThuAzIAAAFQBjAOBPA2QBOA1AvBTQAuBUABBlQgBChhDBwQhDBvh3A5Qh4A5ifAAgAHcIDIEQAAQBgAAA7g0QA7gzADhhQgBhTg9gwQg+gyh4gBIj1AAgAHcioIC0AAQBVAAAzgwQAxgvABhXQgChSg1goQg0gqhPAAIi0AAg");
	this.shape_1.setTransform(125.8,136.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ANpMlQgnghgRg1IhFjZIqAAAIhEDWQgRA3gmAiQgnAhhGABQhHgBgxgtQgwgugChFQABgcAFgVIAJgcIHNzgQAehSA/g0QBAg2BZgDQBcACA+A0QA/A1AdBUIHETgQAKAdADAWQAEAWAAANQgCBEgtApQguAqhBABQhIgBgoghgAKFC5IjXqYIgEAAIjaKYIG1AAgAshMZQgwgugBhYIAAx/IiIAAQhSgDglgwQgngvACg+QAAg+ApgvQApgvBKgDIFGAAQBLADAnAtQAoAuAABGIAAUaQgBBYgwAuQgvAuhMAAQhMAAgvgug");
	this.shape_2.setTransform(124.5,135.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ArXMLQgwgugBhYIAAx/IiIAAQhSgDglgwQgmgvABg+QAAg9AqgwQAogvBKgCIFHAAQBKACAnAuQApAtAABHIAAUZQgBBYgxAuQgvAuhLAAQhMAAgwgugAA9MsQhPgBgygvQg0gugBhRIAA0JQABhTAzgsQAxgtBPAAIG5AAQB6ABBhAxQBiAzA5BaQA6BbABB7QABB5g1BTQg0BThuAzIAAAFQBjAOBPA2QBOA2AuBTQAvBTABBlQgBCihDBvQhDBvh3A5Qh4A6igAAgADeH8IEQAAQBfAAA8g0QA7gzAChgQAAhUg9gwQg+gxh4gBIj1AAgADeivIC0AAQBVAAAygwQAygvABhWQgChSg1gpQg1gqhOAAIi0AAg");
	this.shape_3.setTransform(123.5,136.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AQ8MlQgnghgRg1IhEjZIqAAAIhFDWQgRA3gnAiQgnAhhGABQhIgBgugtQgxgugChFQABgcAGgVIAJgcIHNzgQAehSA/g0QBAg2BZgDQBcACA9A0QA/A1AeBUIHDTgQAKAdADAWQAFAWAAANQgCBEgtApQguAqhBABQhIgBgpghgANYC5IjWqYIgFAAIjaKYIG1AAgAyWM5QhOAAgygkQgyglgChPQABgjARgfQARgeASgVQCRioCUimQCTilCFi5QAggtAYg3QAXg1ABg+QgBhIgug0QgugyhIgCQhOABgoAlQgoAkgTA5QgTA3gRA3QgRA3ggAlQggAlhBABQhTgBgqgwQgqgxAAhFQACiSBKh2QBLh2B7hGQB6hECQgDQCOACBzA6QB0A7BDBqQBFBrABCTQgDB4g4B2Qg5B2hWBwQhYBwhdBoQhdBphMBcIGkAAQBOAAAyAjQAyAmACBOQgCBPgxAlQgvAkhDAAg");
	this.shape_4.setTransform(126.8,135.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AERNAQhRgBgzguQgzgugBhRIAA0KQABhTAygsQAygtBRAAIG5AAQB5ABBiAyQBiAyA5BaQA5BbABB7QABB5g0BTQg0BThuA0IAAAEQBjAPBOA0QBPA3AuBTQAuBTABBlQgBCihCBvQhEBvh3A5Qh4A6ifAAgAGxIRIEQAAQBgAAA7g0QA8g0AChgQAAhTg+gxQg+gxh4gBIj1AAgAGxibIC0AAQBVAAAzgwQAxgvABhWQgChSg1gpQg0gphPAAIi0AAgAxMNAQhNAAgzgkQgxglgChPQABgkARgeQAQgeASgVQCRioCUimQCUilCEi6QAhgtAXg2QAYg1ABg+QgBhIgug0QgugzhIgCQhPABgnAlQgoAlgUA5QgTA3gQA3QgRA3ghAlQgfAlhBABQhUgBgpgwQgrgxAAhFQACiSBLh2QBLh2B6hGQB7hECPgDQCPACBzA6QBzA6BEBrQBEBrABCTQgCB4g4B2Qg5B0hXBxQhYBxhdBoQhdBohLBdIGkAAQBNAAAzAjQAxAmADBOQgDBPgwAlQgvAkhEAAg");
	this.shape_5.setTransform(125.8,134.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AwWMjQhngphHhBQhIhBgmhLQgnhLABhFQABgtAagjQAbgjAogTQApgUAqAAQA4ACAhAoQAfAoAeA1QAfAzAzApQAzAnBgACQBcgCA9g6QA9g8AChdQgBhegngpQgngng6gMQg6gMg7gIQg5gIgnggQgogegBhOQAChHAggfQAhghAwgNQAxgNAvgOQAxgOAggiQAigjABhKQgBhEgrgqQgsgrhOgBQhQABgsAiQgrAhgdAsQgcAsggAiQgfAhg5ABQhIgCgngyQgngzAAhCQAChcBHhVQBHhVByg2QByg3CBgCQB8ABBdAnQBbAoA+BAQA8A/AeBJQAdBJAABEQAABtgtBbQgwBaheA+QB9A6BMBpQBNBrABCJQgBCNhMByQhNBziBBEQiDBFilACQh/gBhmgpgARLMeQgnghgRg0IhFjZIqAAAIhEDVQgRA3goAiQgnAhhGABQhHgBgugtQgxgtgChGQABgcAGgUIAJgcIHMzgQAehSBAg1QA/g2BagCQBbABA+A1QA/A1AeBUIHDTgQAKAcADAWQAEAXABAMQgDBFgsAoQgvAqhBABQhIgBgoghgANnCyIjWqYIgFAAIjaKYIG1AAg");
	this.shape_6.setTransform(125.4,136.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AvLMjQhngphIhBQhHhBgnhLQgmhLAAhFQABgtAagjQAbgjAogTQApgUAqAAQA5ACAgAoQAfAoAfA1QAeAzA0ApQAzAnBgACQBbgCA+g6QA9g8AChdQgBhegogpQgngng5gMQg6gMg7gIQg5gIgnggQgogegBhOQABhHAhgfQAgghAxgNQAwgNAwgOQAxgOAggiQAigjABhKQgChEgqgqQgsgrhPgBQhPABgsAiQgsAhgcAsQgcAsggAiQggAhg5ABQhHgCgogyQgmgzgBhCQAChcBHhVQBHhVBzg2QBxg3CCgCQB8ABBcAnQBcAoA9BAQA9A/AeBJQAdBJAABEQAABtguBbQgwBaheA+QB+A6BMBpQBMBrACCJQgCCNhLByQhNBziCBEQiCBFilACQh/gBhmgpgAEgMyQhSgBgyguQg0gugBhRIAA0JQAChTAygsQAxgtBRAAIG5AAQB6ABBiAxQBiAzA4BaQA6BbABB6QABB5g0BUQg0BThuAzIAAAFQBiAOBPA2QBPA1AtBTQAvBUABBlQgBChhDBwQhDBvh3A5Qh4A5igAAgAHAIDIEQAAQBfAAA8g0QA8gzAChhQAAhTg+gwQg+gyh4gBIj1AAgAHAioIC0AAQBVAAAzgwQAxgvABhXQgChSg1goQg0gqhPAAIi0AAg");
	this.shape_7.setTransform(124.4,136.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ARdMlQgmghgSg1IhEjZIqAAAIhEDWQgRA3goAiQgnAhhGABQhIgBgvgtQgwgugBhFQAAgcAGgVIAJgcIHNzgQAehSA/g0QBAg2BZgDQBcACA9A0QBAA1AdBUIHETgQAJAdADAWQAFAWAAANQgCBEgtApQguAqhBABQhIgBgpghgAN5C5IjWqYIgEAAIjaKYIG0AAgAp4MbQgpgtABhbIAAjDIoqAAQg5gBgigWQgkgVgRgeQgRgfAAgfQABgmAKgXQALgYALgQIIDujQAkhEA3ghQA3ggBYgBQBEABA7AeQA+AdAlBBQAmBCAABoIAAK/IAoAAQBFACAsAoQAvAoAABGQAABGgvAoQgsAphFABIgoAAIAADDQACBbgoAtQgoAshWAAQhYAAgngsgAvbCgIE7AAIAAp/IgEAAg");
	this.shape_8.setTransform(123.5,135.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AouMbQgogtABhbIAAjDIorAAQg4gBgjgWQgjgVgSgeQgQgfgBgfQABgmALgXQAKgYALgQIIDujQAlhEA2ghQA4ggBXgBQBFABA7AeQA9AdAlBBQAmBCABBoIAAK/IAoAAQBEACAtAoQAuAoABBGQgBBGguAoQgtAphEABIgoAAIAADDQACBbgpAtQgnAshXAAQhYAAgngsgAuQCgIE7AAIAAp/IgFAAgAEyM5QhRgBgyguQg0gugBhRIAA0KQABhTAygsQAygsBRgBIG5AAQB6ACBhAxQBiAzA5BZQA5BcACB6QABB5g1BUQg0BThuAzIAAAEQBjAPBOA0QBPA3AuBTQAvBTAABmQgBChhCBvQhDBwh3A5Qh5A5ifAAgAHSIKIEQAAQBgAAA7g0QA8g0AChgQAAhTg+gwQg9gyh5gBIj1AAgAHSiiIC0AAQBVABAzgxQAxguAChXQgDhSg0goQg1gqhPAAIi0AAg");
	this.shape_9.setTransform(122.5,135.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AvyM5QhUgThSgnQhTgng1g6Qg2g5gChNQAChBAsgtQAtgrBCgDQAtAEA1AiQA1AkBAAjQBAAkBNACQBRgBA2gtQA2grAchFQAbhEAAhLQAAhog6g/Qg4g9hsgBQhAABgnAQIhLAlQgkASg5ABQgsAAgegTQgfgSgOgYQgQgYAAgVQAAgWACgSIAFglIA5nlQAKhZAVgwQAWgvAkgSQAkgSA2ABIIqAAQBQABArAoQAsApABA/QgCBOgeAlQgfAlgmALQgmALgWgBImwAAIgiDzQApgJAsgGQAsgIAsAAQCLACBqBBQBsBBA8BvQA9BtABCHQAADChGCOQhFCPiHBOQiIBPjHABQhAAAhUgUgARLMeQgnghgRg0IhFjZIqAAAIhEDVQgRA3goAiQgnAhhGABQhHgBgugtQgxgtgChGQABgcAGgUIAJgcIHMzgQAehSBAg1QA/g2BagCQBbABA+A1QA/A1AeBUIHDTgQAKAcADAWQAEAXABAMQgDBFgsAoQgvAqhBABQhIgBgoghgANnCyIjWqYIgFAAIjaKYIG1AAg");
	this.shape_10.setTransform(125.4,136.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AunMrQhVgThSgnQhSgmg2g6Qg2g6gChMQAChBAsgtQAtgsBCgCQAuADA1AjQA1AkBAAjQBAAkBNACQBQgBA2gtQA2gsAchEQAbhFAAhKQAAhpg5g+Qg4g9hsgBQhAABgnAQIhMAlQgjASg5ABQgtAAgegTQgfgSgOgXQgQgaAAgUQAAgWACgSIAFgmIA5nlQAKhYAWgxQAVgvAkgSQAkgSA3ABIIqAAQBQABArApQAsAoABA/QgCBPgeAlQggAlglAKQgmALgXgBImvAAIgiD0QApgJArgHQAsgIAtAAQCKADBrBBQBrBBA9BvQA8BsACCIQAADBhGCPQhGCOiHBPQiHBPjHABQhBAAhTgVgAEgMlQhSgBgyguQg0gugBhRIAA0KQAChTAygsQAxgtBRAAIG5AAQB6ABBiAyQBiAyA4BaQA6BbABB7QABB5g0BTQg0BThuA0IAAAEQBiAPBPA2QBPA1AtBTQAvBTABBlQgBCihDBvQhDBvh3A5Qh4A6igAAgAHAH2IEQAAQBfAAA8g0QA8g0AChgQAAhTg+gxQg+gxh4gBIj1AAgAHAi2IC0AAQBVAAAzgwQAxgvABhWQgChSg1gpQg0gphPAAIi0AAg");
	this.shape_11.setTransform(124.4,137.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AwtL9QiBhNhGiBQhGiBgBibQACiEA4iSQA6iUBYiSQBbiSBjh8QBlh7BZhTQAOgOAUgNIAogcQAUgMASgCQARgCANAAQAjABAlAYQAlAYAbAmQAbAnACApQgCAZgMAWQgNAXgWAZQgvA5g8BAIhzCAQg4BAgnA3IAEAEQAfgOAlgHQAngHAmAAQCLADBsBGQBsBIA/ByQA9B1ACCJQgCCXhICBQhKCCiBBOQiBBQirACQizgCiBhOgAuYBpQg7BCgCBoQAABBAaA2QAaA2AyAgQAvAhBHABQBjgCA6hEQA8hCABhnQAAg+gZg2QgYg2gxgiQgvghhJgBQhlACg6BCgAQtMeQgmghgSg0IhEjZIqAAAIhEDVQgRA3goAiQgnAhhGABQhHgBgvgtQgxgtgBhGQAAgcAGgUIAJgcIHNzgQAehSA/g1QBAg2BZgCQBcABA9A1QBAA1AdBUIHETgQAJAcADAWQAFAXAAAMQgCBFgtAoQguAqhBABQhIgBgpghgANJCyIjWqYIgEAAIjaKYIG0AAg");
	this.shape_12.setTransform(128.3,136.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AvjL9QiAhNhGiBQhHiBAAibQACiEA4iSQA5iUBZiSQBaiSBkh8QBlh7BZhTQAOgOATgNIApgcQATgMASgCQARgCAOAAQAiABAmAYQAlAYAbAmQAbAnABApQgBAZgNAWQgNAXgVAZQgwA5g7BAIhzCAQg5BAgnA3IAFAEQAfgOAlgHQAngHAmAAQCKADBsBGQBsBIA/ByQA+B1ABCJQgBCXhJCBQhJCCiBBOQiCBQirACQiygCiChOgAtOBpQg7BCgBBoQAABBAZA2QAbA2AxAgQAwAhBGABQBkgCA6hEQA7hCAChnQAAg+gZg2QgZg2gwgiQgwghhJgBQhkACg7BCgAECMyQhRgBgyguQg0gugBhRIAA0JQABhTAygsQAygtBRAAIG5AAQB6ABBhAxQBiAzA5BaQA5BbACB6QABB5g1BUQg0BThuAzIAAAFQBjAOBOA2QBPA1AuBTQAvBUAABlQgBChhCBwQhDBvh3A5Qh5A5ifAAgAGiIDIEQAAQBgAAA7g0QA8gzAChhQAAhTg+gwQg9gyh5gBIj1AAgAGiioIC0AAQBVAAAzgwQAxgvAChXQgDhSg0goQg1gqhPAAIi0AAg");
	this.shape_13.setTransform(127.3,136.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AQcMlQgnghgRg1IhEjZIqAAAIhFDWQgRA3gnAiQgnAhhGABQhGgBgwgtQgxgugChFQABgcAGgVIAJgcIHNzgQAehSA/g0QBAg2BZgDQBcACA9A0QA/A1AeBUIHDTgQAKAdADAWQAFAWAAANQgCBEgtApQguAqhBABQhIgBgpghgAM4C5IjWqYIgFAAIjaKYIG1AAgAw0MrQgrgbgVgkQgVgnAAghQAAgUAFgUQAGgRAMgYII/w/IpMAAQhcgDgpgwQgngvABg+QgBg+AngvQAmgvBfgDINAAAQA6ABAkAeQAlAcARAmQARAnAAAfQgBAigPAlQgPAlgWAsIo6SDQgfBBgYAnQgZAmgfARQggARgyAAQg/gBgrgbg");
	this.shape_14.setTransform(125.9,135.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AwCMdQgrgagWglQgVgmAAgiQAAgUAGgTQAFgSANgYII/w/IpNAAQhcgDgogwQgogvACg+QgCg9AogwQAmgvBegCINAAAQA7ABAkAdQAlAdARAlQARAnAAAfQgCAigOAlQgQAmgVArIo7SEQgeBAgZAnQgYAnggAQQgfARgzAAQg/gBgqgbgAEKMsQhRgBgzgvQgzgugBhRIAA0JQABhTAygsQAygtBRAAIG5AAQB5ABBiAxQBiAzA5BaQA5BbABB7QABB5g0BTQg0BThuAzIAAAFQBjAOBOA2QBPA2AuBTQAuBTABBlQgBCihCBvQhEBvh3A5Qh4A6ifAAgAGqH8IEQAAQBgAAA7g0QA8gzAChgQAAhUg+gwQg+gxh4gBIj1AAgAGqivIC0AAQBVAAAzgwQAxgvABhWQgChSg1gpQg0gqhPAAIi0AAg");
	this.shape_15.setTransform(122.4,136.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Aw4MKQiAhChLh2QhKh2gCibQACiKBChkQBEhiBug8QhTg6gthRQguhRgChsQADiIBChhQBChjBxg2QBvg2CLgBQCGABBxA1QBxA2BDBjQBFBhACCJQgBBigtBYQgtBXhWA3QB2A8BABkQA/BmABCGQgCCghNB1QhMB2iABAQiBBAibABQiggBiBhCgAuyCGQg3BBAABjQAAA8AYAzQAWA0AvAhQAuAgBHABQBBgBAvggQAughAag0QAYgzABg8QgBhug4g7Qg5g8hfgBQhlACg2BAgAuTnqQgqAwgBBLQABBQAqAvQArAvBRABQBPgBAsgvQAsgvAAhQQAAhLgsgwQgrgyhQgBQhSABgqAygARCMeQgnghgRg0IhFjZIqAAAIhEDVQgRA3goAiQgnAhhGABQhHgBgugtQgxgtgChGQABgcAGgUIAJgcIHMzgQAehSBAg1QA/g2BagCQBbABA+A1QA/A1AeBUIHDTgQAKAcADAWQAEAXABAMQgDBFgsAoQgvAqhBABQhIgBgoghgANeCyIjWqYIgFAAIjaKYIG1AAg");
	this.shape_16.setTransform(126.3,136.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AvtMKQiBhChLh2QhKh2gCibQACiKBChkQBEhiBug8QhSg6guhRQguhRgBhsQACiIBChhQBChjBxg2QBvg2CMgBQCGABBwA1QByA2BDBjQBFBhACCJQgBBiguBYQgtBXhVA3QB1A8BBBkQA+BmACCGQgDCghMB1QhMB2iBBAQiBBAiaABQihgBiAhCgAtnCGQg3BBAABjQAAA8AXAzQAWA0AwAhQAtAgBIABQBBgBAuggQAvghAZg0QAZgzAAg8QgBhug4g7Qg4g8hfgBQhmACg1BAgAtInqQgrAwAABLQAABQArAvQArAvBRABQBPgBAsgvQArgvAAhQQAAhLgrgwQgrgyhQgBQhSABgqAygAEXMyQhSgBgyguQg0gugBhRIAA0JQAChTAygsQAxgtBRAAIG5AAQB6ABBiAxQBiAzA4BaQA6BbABB6QABB5g0BUQg0BThuAzIAAAFQBiAOBPA2QBPA1AtBTQAvBUABBlQgBChhDBwQhDBvh3A5Qh4A5igAAgAG3IDIEQAAQBfAAA8g0QA8gzAChhQAAhTg+gwQg+gyh4gBIj1AAgAG3ioIC0AAQBVAAAzgwQAxgvABhXQgChSg1goQg0gqhPAAIi0AAg");
	this.shape_17.setTransform(125.3,136.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA0IdQg0gLgtgWQgwgUgpgdQgogegjglQghglgbgsQgbgtgTgxQgSgzgKg2QgJg3AAg5QAAg5AJg3QAKg2ASgzQATgxAbgtQAagsAiglQAiglApgeQApgdAvgUQAugVA0gLQA1gLA4AAIBhAIQA8AJAuARQA3AWAeAeQAjAkABAvQAAApgbAdQgbAegoAAQgXAAhDgaQhFgbhHAAQhDAAg3AcQgyAagkAwQgjAugSA+QgTA9ABBEQgBBDATA8QASA8AjAuQAmAuAxAZQA3AbBCAAQA/AABRgfQBIgfAXAAQAtAAAeAmQAYAfAAAgQAAAzgmAmQgfAgg6AVQgxATg+AJIhkAIQg4AAg1gLgALpH5QgfggAAglQAAgXAPgeIF4rFImBAAQg5AAgdggQgZgcAAgrQAAgsAZgbQAcghA6AAIIgAAQAyAAAgAoQAZAfAAAlQAAAbgiBIIl1LzQgiBFgTASQgZAagwAAQg4AAglglgApgIIQgYgTgMglIgtiNImhAAIgtCMQgMAlgZAUQgcAWgrAAQguAAgggeQghgeAAgtQAAgXAKgbIEustQAUg3ApghQAsglA3AAQA6AAAqAjQApAhATA5IEnMtQAMAhAAAXQAAArgfAdQgeAbgqAAQgtAAgdgWgAwRB1IEdAAIiMmyIgDAAg");
	this.shape_18.setTransform(131.5,141.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,0.5,289.6,291.3);


(lib.mcGameType_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01AAAD").s().p("A4nDJQhSAAg7g5IgBgCQg7g7AAhTIAAAAQAAhSA7g7QA7g7BTAAMA0YAAAIAAGRg");
	this.shape.setTransform(-177.7,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("A4wAnQhUABg8g6QgKgKgIgLQA7A4BSAAMA0YAAAIAAAWg");
	this.shape_1.setTransform(-174.7,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01AAAD").s().p("A0qDJQhUAAg7g7Qg6g7AAhTIAAAAQAAhSA6g7QA7g7BUAAMAseAAAIAAGRg");
	this.shape_2.setTransform(-152.5,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("A0gDJQhUABg7g8Qg6g6AAhUIAAAAQAAhSA6g8QA8g6BTgBMAsKAAAIAAGSg");
	this.shape_3.setTransform(-151.5,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01AAAD").s().p("AnxDJQhTAAg6g5IgCgCQg7g7AAhTIAAAAQAAhSA7g7QA7g7BUAAIStAAIAAGRg");
	this.shape_4.setTransform(-70,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("An7AnQhUABg8g6QgKgKgHgLQA6A4BSAAIStAAIAAAWg");
	this.shape_5.setTransform(-67,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.4,0,355.5,42.6);


(lib.Symbol33 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAWQgMgIgIgNQgHgKAAgPIAAgEQABAOAGAMQAIALAMAHQANAHANABQAOgBANgHQAMgHAIgLQAGgMABgOIAAAEQAAAPgHAKQgIANgMAIQgNAGgOAAQgNAAgNgGg");
	mask.setTransform(317.1,120.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgXAWQgMgIgIgNQgHgKAAgPIAAgEQABAOAGAMQAIALAMAHQANAHAMABQAPgBANgHQAMgHAIgLIABgCIAAAEIgBABQgIANgMAIQgNAGgPAAQgMAAgNgGg");
	this.shape.setTransform(316.8,120.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AgBABIADgHIAAAGIgDAHg");
	this.shape_1.setTransform(322.2,119.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AAAABIAAgGIAAAFIAAAGg");
	this.shape_2.setTransform(322.4,118.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#929292").s().p("AAAAAIAAgEIAAADIAAAGg");
	this.shape_3.setTransform(322.5,118.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(311.7,117.5,10.9,5.8);


(lib.Symbol32 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAAIAAgDIAAADIAAAEIAAgEg");
	mask.setTransform(318.3,120.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AAAAAIAAgDIAAADIAAAEIAAgEg");
	this.shape.setTransform(318.3,120.3);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(318.2,119.9,0.2,0.9);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAAIAAgDIAAADIAAAEIAAgEg");
	mask.setTransform(318.2,120);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AAAAAIAAgDIAAADIAAAEIAAgEg");
	this.shape.setTransform(318.2,120);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(318.2,119.6,0,0.9);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAgBIAAgFIAAAIIAAAFIAAgIg");
	mask.setTransform(318.2,119.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AAAgBIAAgFIAAAIIAAAFIAAgIg");
	this.shape.setTransform(318.2,119.1);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(318.1,118.4,0.1,1.5);


(lib.Symbol29 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AACABIgFgBIAAgDQADAAACABIACACIAAAEIgCgDg");
	mask.setTransform(317.7,118.5);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AACABIgFAAIAAgEQADAAACABIACACIAAAEIgCgDg");
	this.shape.setTransform(317.6,118.4);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(317.3,118,0.8,0.8);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBAAQACgBABgDIAAAEIgDAFg");
	mask.setTransform(319.2,117.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgBAAQACgBABgDIAAAEQgBACgCADg");
	this.shape.setTransform(319.1,117.4);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(318.9,116.9,0.5,1.1);


(lib.Symbol27 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAegEQgMgNgSAAQgQAAgNANQgMAKgBARIAAgEQAAgSANgLQANgMAQAAQASAAAMAMQANALAAASIAAAEQgBgRgMgKg");
	mask.setTransform(317.1,115.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAABIAAgFIAAAEIAAAFg");
	this.shape.setTransform(312.8,117.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AAAAAIAAgEIAAAEIAAAFg");
	this.shape_1.setTransform(312.9,116.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AAAABIABgGIAAAFIgBAFg");
	this.shape_2.setTransform(313.1,115.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AAbgEQgMgNgQAAQgSAAgNANQgEAEgDAEIAAgEQADgFAEgFQANgMASAAQAQAAAMAMQAOALAAASIAAAEQgBgRgNgKg");
	this.shape_3.setTransform(317.4,115.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(312.8,113,8.6,4.7);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAAIAAgEIAAAEQAAACAAADg");
	mask.setTransform(319.5,116.8);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898989").s().p("AAAAAIAAgCIAAADIAAACg");
	this.shape.setTransform(319.5,117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AAAAAIAAgCIAAADIAAACg");
	this.shape_1.setTransform(319.5,116.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(319.5,116.4,0.1,0.9);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AADAAQgCAAgFAAIAAgFQAFAAACACQACACAAABIAAAGQAAgEgCgCg");
	mask.setTransform(317.8,116.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AADAAQgCAAgFAAIAAgFQAFAAACACQACACAAABIAAAGQAAgEgCgCg");
	this.shape.setTransform(317.8,116.1);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(317.3,115.5,1,1.2);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjUBWQhXhOgSh2IAAgBIAAgHQASB2BXBOQBYBOB8ADQCFgDBbhdQBahaAEiMIAAAJQgECLhaBbQhbBciFAEQh8gDhYhPg");
	mask.setTransform(92,168.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AjBA+QhXhNgRh3IAAgJQARB4BXBMQBYBPB6ADQBcgBBKgvQBKguAphMIAAAIQhaChi/AKQh6gDhYhPg");
	this.shape.setTransform(90,170.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AgKAYQAMgZAJgeIAAAJQgJAbgMAbg");
	this.shape_1.setTransform(121.1,164.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AgEAVQAGgXADgbIAAAJQgDAYgGAag");
	this.shape_2.setTransform(122.8,159.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#929292").s().p("AAAAOQAAgRABgSQAAAVgBAXg");
	this.shape_3.setTransform(123.6,154.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(60.2,152.3,63.6,32.8);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiCAmQg3gsgQhHIAAgBIAAgHQAQBGA3AsQA4AvBLABQBIgBA2gpQA2goAUhDIAAAJQgUBBg2ApQg2AqhIABQhLgCg4gug");
	mask.setTransform(91.6,164.9);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("Ah5AmQg4gsgPhHIAAgBIAAgHQAPBGA4AsQA3AvBLABQB+gGA7hoIAAAJQg7Boh+AGQhLgCg3gug");
	this.shape.setTransform(90.8,164.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AgGAOQAHgQAGgTIAAAJQgGARgHARg");
	this.shape_1.setTransform(111,160);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AAAgCIAAgCIAAAHIAAACg");
	this.shape_2.setTransform(111.7,158.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(71.4,156.3,40.3,17.3);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBACIAAgHQABgBACAFIAAAHQgCgFgBABg");
	mask.setTransform(115.6,158.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgBACIAAgHQABgBACAFIAAAHQgCgFgBABg");
	this.shape.setTransform(115.6,158.2);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(115.4,157.6,0.4,1.3);


(lib.Symbol21 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBADIAAgGIADABIAAAGQgFAAACgBg");
	mask.setTransform(60.1,152.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgBADIAAgGIADABIAAAGQgFAAACgBg");
	this.shape.setTransform(60.1,152.6);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(59.8,152.1,0.6,1);


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBAEIAAgGQABAAACgCIAAAHIgCACIgBgBg");
	mask.setTransform(78,152.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgBgDQABABACgCIAAAIIgDAAg");
	this.shape.setTransform(77.9,152.6);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(77.7,152.1,0.5,1);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAACIAAgHIAAAGIAAAFIAAgEg");
	mask.setTransform(105.3,151.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AAAACIAAgHIAAAGIAAAFIAAgEg");
	this.shape.setTransform(105.3,151.2);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(105.3,150.6,0,1.4);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiCA/QACg6AmgkQAngmA3gBQBcAFAjBQIAAAJQgjhQhcgFQg3ABgnAmQgmAkgCA5g");
	mask.setTransform(91.4,145.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAAGQAAgHAAgJIAAAJIAAAMg");
	this.shape.setTransform(78.3,150.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AgBAFIADgSIAAAJQgCAIgBAKg");
	this.shape_1.setTransform(78.6,148.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AgDAHQADgKAEgMIAAAJQgEAJgDANg");
	this.shape_2.setTransform(79.3,146.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AgCgmQhSAEgmBCIAAgIQAmhCBSgFQBaAGAjBQIAAAJQgjhQhagGg");
	this.shape_3.setTransform(92.1,142.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78.3,137.9,26.2,14);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBAGIAAgHQABABACgFIAAAHQgCAEAAAAIgBAAg");
	mask.setTransform(123.1,146.8);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgBAFIAAgHQABABACgDIAAAHIgCACIgBAAg");
	this.shape.setTransform(123,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AAAgDIAAAAIAAAHIAAAAg");
	this.shape_1.setTransform(123.3,146.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(122.9,146.3,0.5,1.1);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACdgmQhDg6hbgCQhYAChBA0QhCAygVBQIAAgHIAAgCQAVhOBCg0QBBg0BYgCQBbACBDA6QBDA3ASBbIAAAJQgShbhDg3g");
	mask.setTransform(92,136.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D8D8D").s().p("AAAABIABgJIAAAIIgBAKg");
	this.shape.setTransform(67.9,144.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AgHAQQAGgUAJgUIAAAJQgJASgGAWg");
	this.shape_1.setTransform(69,141.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848484").s().p("ACTgmQhDg6hbgCQiXAIhFB7IAAgJQBFh7CXgIQBbACBDA6QBCA3ATBbIAAAJQgThbhCg3g");
	this.shape_2.setTransform(93,136.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(67.8,125.8,48.5,21.6);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBAGIAAgHQABABACgFIAAAHQgCAEAAAAIgBAAg");
	mask.setTransform(111.8,146.9);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgBAFIAAgHQABAAAAAAQAAAAAAAAQAAgBAAAAQABAAABgBIAAAHIgCACIgBAAg");
	this.shape.setTransform(111.8,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AAAgDIAAAAIAAAHIAAAAg");
	this.shape_1.setTransform(112,146.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(111.6,146.3,0.5,1.1);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0gVIAAgJQAEAvAwAFQAxgFAEgvIAAAJQgEAvgxAFQgwgFgEgvg");
	mask.setTransform(271.4,39.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AgxgVIAAgJQAEAvAwAFQAggCAPgZIAAAHQgPAbggACQgwgFgEgvg");
	this.shape.setTransform(271.1,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AAAAAIABgHIAAAHIgBAJg");
	this.shape_1.setTransform(276.3,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AAAAAIABgHIAAAHIgBAIg");
	this.shape_2.setTransform(276.6,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#929292").s().p("AAAAAIAAgGIAAAGIAAAHg");
	this.shape_3.setTransform(276.7,36.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(266,36.1,10.7,6.3);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAgsQhRAAgEBhIAAgJQAEhhBRAAQBSAAAEBhIAAAJQgEhhhSAAg");
	mask.setTransform(220.5,41.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAAIQAAgKAAgKIAAAJIAAAQg");
	this.shape.setTransform(211.8,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AgBAFIADgRIAAAJIgDARg");
	this.shape_1.setTransform(212.1,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AgCAEQACgHADgIIAAAJIgFAOg");
	this.shape_2.setTransform(212.7,41.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AgFgsQgzAAgXApIAAgIQAXgpAzgBQBRAAAEBhIAAAJQgEhhhRAAg");
	this.shape_3.setTransform(221.1,41.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(211.8,35.8,17.3,10.8);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiBhwQAGDZDjgCQAOAAAMgCIAAAJQgMACgOAAIgCABQjlAAgCjhg");
	mask.setTransform(167.6,70.8);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AiBhvQAGDYDjgBQAOAAAMgDIAAAJQgMACgOABIgCAAQjlAAgCjgg");
	this.shape.setTransform(167.6,70.8);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(154.6,59.5,26.1,22.6);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAcBnQhggCgyg4Qgzg2gBhdQADBXAxAzQAyA4BgACQBaAFA0hHIAAAJQgwBChRAAIgNAAg");
	mask.setTransform(108.9,71.8);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AAcBnQhggCgyg4Qgzg2gBhdQADBXAxAzQAyA4BgACQBaAFA0hHIAAAJQgwBChRAAIgNAAg");
	this.shape.setTransform(108.9,71.7);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(91.8,61.4,34.2,20.7);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAgfQhNACgIBGIAAgJQAIhGBNgCQBOACAIBGIAAAJQgIhGhOgCg");
	mask.setTransform(116.6,57);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAADIAAgJIAAAHIAAAGg");
	this.shape.setTransform(108,59.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AAAABIABgKIAAAJIgBAKg");
	this.shape_1.setTransform(108.1,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AgBABIADgKIAAAJQgCADgBAHg");
	this.shape_2.setTransform(108.5,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AgCgfQg3AAgYAmIAAgHQAYgnA3gBQBMACAIBGIAAAJQgIhGhMgCg");
	this.shape_3.setTransform(117,56.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(108,52.8,17.3,8.3);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABngVQgcgUg4ACQhNABhHAhIAAgJQBIghBMgBQA4gCAcAUQAbAUAAA3IAAAFQgBg1gagSg");
	mask.setTransform(112.2,39.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("ABngVQgcgUg4ACQhNABhHAhIAAgJQBIghBMgBQA4gCAcAUQAbAUAAA3IAAAFQgBg1gagSg");
	this.shape.setTransform(112.2,39.6);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(99.2,34.7,26.1,10);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiABZQg2gTg8gvIAAgIQA8AuA2ATQA4ATBJgBQBfAABHg1QBJgyADhmIAAAJQgDBkhJA0QhHA1hfAAIgBABQhKAAg2gTg");
	mask.setTransform(287.4,174.3);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("Ah1AsQg2gTg8gtIAAgJQA8AtA2ATQA3ATBKgBQBFAAA8gdQA8gcAfg5IAAAJQgfA3g8AdQg8AehFAAIgHAAQhFAAg1gSg");
	this.shape.setTransform(286.3,178.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AgFALQAGgNAFgRIAAAJQgFAPgGAPg");
	this.shape_1.setTransform(310.2,171.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AgCAKQADgMACgQIAAAJQgCANgDAPg");
	this.shape_2.setTransform(311.2,168.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#929292").s().p("AAAAHIAAgWIAAAEQAAANAAAOg");
	this.shape_3.setTransform(311.6,165.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(263,163.9,48.7,21.2);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABFBSQhFgKhEgkQhFgkgFh3IAAgJQAFB4BFAjQBEAlBFAJQBFAJAFAmIAAAJQgFgmhFgJg");
	mask.setTransform(280,151.7);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("ABFBSQhFgKhEgkQhFgkgFh3IAAgJQAFB4BFAjQBEAlBFAJQBFAJAFAmIAAAJQgFgmhFgJg");
	this.shape.setTransform(280,151.7);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(265.7,138.7,28.7,25.9);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAOQACgWAVgHQAVgHATABQA2ACAqAeIAAAJQgqgeg2gCQgTgBgVAHQgVAGgCAXg");
	mask.setTransform(291.1,136.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAAAIAAgFIAAAHIAAAEg");
	this.shape.setTransform(283,138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AAAAAIAAgFIAAAHIAAAEg");
	this.shape_1.setTransform(283.1,137.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AAAAAIABgFIAAAHIgBAEg");
	this.shape_2.setTransform(283.2,137.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AgSgLQgkgEgXAYIAAgJQAXgXAkADQA2ACAqAeIAAAJQgqgeg2gCg");
	this.shape_3.setTransform(291.2,136.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(283,134.2,16.1,4.5);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAgB/Qh7gCgzhHQgyhDABhyQABBsAwBBQAzBHB7ACQAoABAugWQAtgWAdg8IAAAJQgdA7gtAXQgrAVgmAAIgFgBg");
	mask.setTransform(217.5,172.3);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AAjB/Qh7gCgzhHQgyhDABhyQABBsAwBBQAzBHB7ACQAmABArgUQAsgTAdg1IAAAJQgdA0gsAUQgpATglAAIgDgBg");
	this.shape.setTransform(217.2,172.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#898989").s().p("AgBACIAEgLIAAAJIgEAKg");
	this.shape_1.setTransform(236.5,174.9);

	this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(198.3,159.4,38.5,25.6);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai+BAQhZhbgCiAIAAgEQAEB9BXBZQBZBcCeAEQA3AABAgTQBBgUAogoIAAAJQgoAohBATQhAAUg3AAQiegEhZhcg");
	mask.setTransform(161.4,169);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("Ai+BAQhZhbgBiAIAAgEQADB9BXBZQBZBcCfAEQA2AABBgTQBBgUAogoIAAAJQgoAohBATQhBAUg2AAQifgEhZhcg");
	this.shape.setTransform(161.3,169);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(133.2,152.9,56.4,32.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiHBGQAChCArgnQAsgpA+gBQBEAAA0ArIAAAJQg0gshEABQg+ABgsAoQgrAngCBCg");
	mask.setTransform(165.5,143.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAAJQAAgJAAgKIAAAJIAAAMg");
	this.shape.setTransform(151.9,149.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AgBAHQABgKACgLIAAAIQgCAKgBAMg");
	this.shape_1.setTransform(152.2,147.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AgDAHQADgKAEgMIAAAJQgEAJgDANg");
	this.shape_2.setTransform(153,145);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("Ah/AjQArhKBbgEQBEAAA1ArIAAAHQg1gphEAAQhbADgrBLg");
	this.shape_3.setTransform(166.3,139.8);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(151.8,135.4,27.4,15.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAgSQgngBgCAwIAAgJQACgvAnAAQApgBABAwIAAAJQgBgwgpABg");
	mask.setTransform(295.7,54.4);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AAAACIAAgJIAAAHIAAAIg");
	this.shape.setTransform(291.4,56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8D8D").s().p("AAAAAIABgIIAAAIIgBAJg");
	this.shape_1.setTransform(291.6,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898989").s().p("AAAAAIABgHIAAAHIgBAIg");
	this.shape_2.setTransform(291.8,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AgBgSQgagBgMATIAAgHQAMgUAaAAQAngBABAwIAAAJQgBgwgnABg");
	this.shape_3.setTransform(296,54.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(291.4,51.5,8.6,5.8);


(lib.Symbolcopy = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0.824,0.925],0.3,-4.5,0,0.3,-4.5,39.6).s().p("Aj0D1QhlhmAAiPQAAiOBlhmQBmhlCOAAQCPAABlBlQBmBmAACOQAACPhmBmQhlBliPAAQiOAAhmhlg");
	this.shape.setTransform(37.4,28.5,1,1,0,0,0,-0.3,-9.2);

	// Layer 1
	this.instance = new lib.Symbol5copy();
	this.instance.setTransform(37.8,37.5,0.3,0.3,0,0,0,132.2,132.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.4,75.4);


(lib.pbGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBDYQgwgfgbg3Qgbg2gBhEQABhDAbg2QAbg2AwggQAuggBAAAQA/AAAxAgQAwAgAbA2QAbA2ABBDQgBBEgbA2QgbA3gwAfQgxAgg/ABQhAgBgugggABPg7QgOAKgJARQgHASgBAWQABAXAHASQAJASAOAKQANAKARAAQARAAANgKQAOgKAIgSQAJgSAAgXQAAgWgJgSQgIgRgOgKQgNgLgRAAQgRAAgNALgAmbDYQgugfgag3Qgbg2AAhEQAAhDAbg2QAag2AuggQAuggA6AAQAoAAAcALQAdALATAOQATAOAKALIAJALIhCB+IgKgKQgKgJgQgIQgQgJgUgBQgdABgSAWQgSAVgBAiQABAjASAWQASAVAdABIAIAAIAEAAIAAhPICDAAIAAChIgJANQgJAMgUAPQgTAQgfALQgeAMgpABQg6gBgugggAF+DvIAAiEIB0AAIAACEgAGEBDIgTk7ICPAAIgTE7g");
	this.shape.setTransform(68.7,70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.902)","rgba(255,255,255,0.702)","rgba(255,255,255,0.012)"],[0,0.133,0.62],-37.4,-46.6,0,-37.4,-46.6,96.3).s().p("AoxFWQgthtAAiAQAAj+C2i2QAKgLANgLQCuifDtAAQDxAACuCfIAXAWQAnAnAfAqQA8BUAdBhQp+A5mmINQhGhPgmhcg");
	this.shape_1.setTransform(71,72.5,1,1,0,0,0,2.1,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(237,237,237,0.8)").s().p("AgBDuQg1gjgeg8Qgeg7AAhLQAAhKAeg8QAeg7A1gjQAygjBHAAQBGAAA1AjQA1AjAeA7QAdA8ABBKQgBBLgdA7QgeA8g1AjQg1AjhGABQhHgBgygjgABXhBQgQALgJATQgJAUAAAYQAAAZAJAUQAJAUAQALQAOALATAAQASAAAPgLQAPgLAJgUQAJgUAAgZQAAgYgJgUQgJgTgPgLQgPgMgSAAQgTAAgOAMgAnEDuQgzgjgdg8Qgdg7gBhLQABhKAdg8QAdg7AzgjQAygjBAAAQArAAAgAMQAgAMAVAQQAVAPAKAMIAKAMIhICKIgLgKQgLgKgSgJQgRgKgWgBQggABgUAYQgUAYAAAlQAAAnAUAXQAUAYAgABIAIAAIAEAAIAAhXICRAAIAACxIgKAPQgKAMgWARQgVARghANQgiANgtABQhAgBgygjgAGkEHIAAiRICAAAIAACRgAGrBKIgWlbICeAAIgVFbg");
	this.shape_2.setTransform(68.7,70.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,98,101,0.8)").s().p("AgBDYQgwgfgbg3Qgbg2gBhEQABhDAbg2QAbg2AwggQAuggBAAAQA/AAAxAgQAwAgAbA2QAbA2ABBDQgBBEgbA2QgbA3gwAfQgxAgg/ABQhAgBgugggABPg7QgOAKgJARQgHASgBAWQABAXAHASQAJASAOAKQANAKARAAQARAAANgKQAOgKAIgSQAJgSAAgXQAAgWgJgSQgIgRgOgKQgNgLgRAAQgRAAgNALgAmbDYQgugfgag3Qgbg2AAhEQAAhDAbg2QAag2AuggQAuggA6AAQAoAAAcALQAdALATAOQATAOAKALIAJALIhCB+IgKgKQgKgJgQgIQgQgJgUgBQgdABgSAWQgSAVgBAiQABAjASAWQASAVAdABIAIAAIAEAAIAAhPICDAAIAAChIgJANQgJAMgUAPQgTAQgfALQgeAMgpABQg6gBgugggAF+DvIAAiEIB0AAIAACEgAGEBDIgTk7ICPAAIgTE7g");
	this.shape_3.setTransform(68.7,70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// hit
	this.instance = new lib.Symbolcopy("synched",0);
	this.instance.setTransform(70,70,1.857,1.857,0,0,0,37.7,37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25AAE2").s().p("AkjD+QglAAghgMQghgMgcgYQgcgZgRgnQgUgrgDgsQgDgrAKgmQAKgoAWgkQAVgkAfgdQAegdAmgUQAlgUAqgJIANgBQALgCAVABQAWABAbAIQAaAHAgARQAOAIAdAWQALALADAKIABABQACALgBANQgCAMgHANQgGANgLAMQgLALgMAIQgOAHgMADQgJACgLgBQgPgBgHgIQgFgFgMgHQgUgLgRAAQgWAAgXAJQgXAKgTAQQgTARgNAYQgMAXAAAfQgBAcAKARQAJARAPAIQAPAHARgBQATgBARgHQASgIAOgNQAOgNAHgRIhBAMQgGABgGgCIgFgBIgJgEQgGgGgCgIQgCgHABgJQABgKAFgJQAEgJAJgHIAHgGIAKgHQAJgGAJgBIDigdQAFAlgJAhQgIAkgPAeQgOAdgRAYQgQAXgLAMIgMAOQgUAUgeAQQgeAQgjAIQggAHgiAAIgEAAgACRDxQgigMgbgYQgcgZgRgnQgUgrgEgrQgEgrAKgmQAJgnAVgkQAVgjAdgcQAdgdAmgVQAlgVApgLQAngKAjAEQAiAEAcAMQAcANATATQAUASAKASQASAjAJAsQAJAsgFAtQgFAugVAwQgWAwgqAsQgVAUgeAQQgeAQgiAIQgiAIgkAAQglgBghgMgAEHhdQgSABgUAKQgSAJgQARQgQARgKAZQgKAWAAAeQgBAbAJASQAIASANAIQANAIARABQARABAQgGQARgFAPgMQAOgLAKgPQAOgXAHgTQAGgUACgOQABgQgDgNQgCgOgGgKQgIgTgQgIQgNgHgQAAIgGAAg");
	this.shape_4.setTransform(61.6,72.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25AAE2").s().p("AgFEfQgRgBgTgFQgRgIgPgJQgOgKgJgNQgJgMgDgNQgDgNAFgMQAEgNAKgJQALgIAOgEQAPgFASACQARABARAFQARAHAOAKQAOAKAJAMQAJAMADAOQADANgEAMQgEAMgKAJQgLAIgPAEQgMAEgNAAIgFAAgAAKCWQgNAAgPgFQgPgGgNgJIgIgIIgMgNQgHgMgDgMIgBgKIAAgCIAAAAIAYk0IAAgDIACgLQADgLAJgJIACgBQAJgIAOgEQAOgFAOABQAQABARAGIAPAGQAIAFAHAFQANALAIAMQAJAMADANIAAAMIgkEwIAAACIgCAMIAAABIAAAAQgDAMgJAIIgCACQgJAGgLAEQgKADgLAAIgHgBg");
	this.shape_5.setTransform(123.6,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,140,139.9);


(lib.mcTopic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMgBnQgFgEAAgHIABgFIACgFIAUgkQACgEAEgCQAEgCAEAAQAGAAAFAFQAFAEAAAHIgBAFIgCAFIgUAkQgDAEgEACQgEACgDAAQgHAAgEgFgASYBGQgMgIgHgNQgIgNgDgPQgDgQAAgNQAAgPADgPQADgPAIgNQAHgOAMgIQAMgIATAAQASAAAMAIQAMAIAIAOQAHANADAPQADAPAAAPQAAANgDAQQgDAPgHANQgIANgMAIQgMAIgSABQgTgBgMgIgASog5QgFAGgDAJIgDASIgBAQIABAOIADASQADAKAFAGQAGAGAJAAQAJAAAFgGQAFgGADgKIADgSIABgOIgBgQIgDgSQgDgJgFgGQgFgGgJAAQgJAAgGAGgAQOBGQgMgIgHgNQgIgNgDgPQgDgQAAgNQAAgPADgPQADgPAIgNQAHgOAMgIQAMgIATAAQASAAAMAIQAMAIAIAOQAHANADAPQADAPAAAPQAAANgDAQQgDAPgHANQgIANgMAIQgMAIgSABQgTgBgMgIgAQeg5QgFAGgDAJIgDASIgBAQIABAOIADASQADAKAFAGQAGAGAJAAQAJAAAFgGQAFgGADgKIADgSIABgOIgBgQIgDgSQgDgJgFgGQgFgGgJAAQgJAAgGAGgAOEBGQgMgIgHgNQgIgNgDgPQgDgQAAgNQAAgPADgPQADgPAIgNQAHgOAMgIQAMgIATAAQASAAAMAIQAMAIAIAOQAHANADAPQADAPAAAPQAAANgDAQQgDAPgHANQgIANgMAIQgMAIgSABQgTgBgMgIgAOUg5QgFAGgDAJIgDASIgBAQIABAOIADASQADAKAFAGQAGAGAJAAQAJAAAFgGQAFgGADgKIADgSIABgOIgBgQIgDgSQgDgJgFgGQgFgGgJAAQgJAAgGAGgAk7BFQgNgJgIgPQgIgPAAgSQAAgQAIgPQAIgPAOgJQAOgKASAAQASAAAOAKQAOAJAIAPQAIAPAAAQQAAASgIAPQgIAPgNAJQgOAJgTABQgTgBgOgJgAkqgQQgGAGgCAIQgDAGAAAIQAAAJADAIQACAHAHAGQAGAFAJAAQAJAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgGQgCgIgGgGQgHgFgJAAQgJAAgHAFgAomBFQgOgJgIgPQgHgPAAgSQAAgQAIgPQAHgPAOgJQAOgKASAAIANABIAOAEQAGACAFAFIADADQABgFADgDQAEgEAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHAAAFADQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABOQgBAJgEAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAhOIgIAAQgHAAgEgEIgCgCIgBADQgBADgDADQgDACgFABIgIgCIgJgDQgEgCgGAAQgKAAgGAFQgHAFgDAIQgDAGAAAJQAAAJAEAIQADAIAGAFQAHAFAJAAIAKgCIAJgDIAHgCQAGAAAEAEQAFAFAAAGQAAAGgFAFQgFAFgHACQgHADgHABIgMACQgSgBgOgJgAqyBGQgMgIgIgPQgHgPAAgUQAAgRAHgPQAIgPANgJQANgJAQAAQAJAAAJAEQAJAEAGAIQAAgGAFgEQAFgEAGAAQAIAAAEADQADAEABAFIABAKIAABUIgBAJQgBAGgDADQgEAEgIAAQgHAAgEgEQgEgEgBgGQgHAHgIAEQgIAFgKAAQgRgBgNgIgAqfgQQgGAGgDAIQgDAGAAAIQAAAJADAIQADAHAGAGQAGAFAKAAQAIAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgGQgDgIgFgGQgGgFgJAAQgKAAgGAFgAu5BLQgJgEgFgIQgBAHgFADQgEAEgHAAQgIAAgEgFQgFgFAAgJIAAiSQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAAAvQAHgGAJgDQAIgDAJAAQAOAAAKAGQALAGAHAKQAHAKADAMQAEAKAAANQAAAMgEAMQgEALgIAJQgHAKgLAFQgKAFgNABQgJAAgJgEgAu7gQQgGAFgDAIQgDAFAAAJQAAAJADAIQADAIAGAFQAGAGAJAAQAJAAAGgFQAGgGADgIQADgIAAgIQAAgIgDgGQgDgIgGgGQgGgFgJAAQgJAAgGAFgAxgBBQgPgOAAgXIAAg8QAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAAA7QAAAIADAFQADAFAFACQAFADAGAAQAGAAAFgDQAFgCADgFQADgFAAgIIAAg7QAAgJAFgFQAFgFAIAAQAHAAAFAFQAFAFAAAJIAAA8QAAAXgPAOQgPANgbABQgbgBgPgNgAzMBOIgTgEQgJgDgHgGQgGgFAAgIQAAgIAEgEQAEgFAIAAQAGAAAGACIANAFQAHACAIAAQAMAAAGgGQAHgGAAgJQAAgHgGgEQgGgEgJgCIgTgGQgLgBgJgFQgJgFgFgIQgGgJAAgNQAAgRAIgMQAIgNANgGQAOgHAQAAIANABQAIABAIADQAHADAGAEQAFAFAAAHQAAAHgEAGQgFAFgHAAQgFAAgEgCIgKgDQgGgCgHAAQgIAAgGAEQgFAEgBAHQABAGAFAEQAGADAJADIAUAGQAKADAJAGQAJAFAGAKQAFAIABAPQgBARgIANQgIAMgOAHQgOAGgRABIgRgBgALuBIQgFgEAAgKIAAh2IgOAAQgJAAgEgFQgEgFAAgHQAAgGAFgFQAEgFAIAAIAiAAQAHAAAEAFQAFAFAAAHIAACGQAAAKgFAEQgFAFgIAAQgIAAgFgFgAJcBIQgFgFAAgJIAAg6QAAgMgGgGQgHgGgJAAQgLAAgGAHQgFAHAAAKIAAA6QAAAJgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAHAAAEADQAEADABAGQAFgHAIgDQAIgEANAAQANAAALAGQALAFAGALQAGAKAAAPIAABAQAAAJgFAFQgFAFgHAAQgIAAgFgFgAHXBIQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAABaQAAAJgFAFQgFAFgIAAQgHAAgFgFgAGhBIQgFgFAAgJIAAg6QAAgMgGgGQgHgGgJAAQgLAAgGAHQgFAHAAAKIAAA6QAAAJgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAiSQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAIIAAAvIAAAAQAGgGAJgDQAIgDAJAAQANAAALAGQALAFAGALQAGAKAAAPIAABAQAAAJgFAFQgFAFgHAAQgIAAgFgFgAETBIQgEgFAAgJIAAhOIgIAAQgHAAgEgEQgEgEAAgHQAAgGAEgFQAEgEAHAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAAVIAKAAQAHAAAFADQAEAEAAAIQAAAIgEAEQgFADgHAAIgKAAIAABOQAAAJgFAFQgFAFgHAAQgIAAgFgFgADVBIQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAABaQAAAJgFAFQgFAFgIAAQgHAAgFgFgAB+BIQgGgFgCgHIgchbIgBAAIgbBbQgDAHgGAFQgGAFgJAAQgKAAgGgFQgGgGgCgIIgciAIgBgEIAAgFQAAgGAEgEQAFgFAGgBQAIABAFAEQAEAFACAIIAUBkIABAAIAfhnQACgHAFgEQAFgDAHgBQAGABAFADQAFAEACAHIAgBnIAAAAIAVhkQABgIAFgFQAEgEAJgBQAIABAEAFQAFAEAAAGIgBAFIAAAEIgfCAQgCAIgFAGQgGAFgKAAQgJAAgHgFgAh5BIQgFgFAAgJIAAg6QAAgMgHgGQgGgGgKAAQgKAAgGAHQgGAHAAAKIAAA6QAAAJgFAFQgEAFgIAAQgIAAgEgFQgFgFAAgJIAAhaQAAgJAFgFQAEgFAIAAQAHAAAEADQAEADABAGQAFgHAIgDQAIgEAMAAQAOAAAKAGQALAFAGALQAGAKAAAPIAABAQAAAJgFAFQgEAFgIAAQgIAAgEgFgAmEBIQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAABaQAAAJgFAFQgFAFgIAAQgHAAgFgFgAsUBIQgFgFAAgJIAAhcQAAgGADgEQACgEAFgCQADgBAFAAQAHgBAFAEQAEADABAIIAAAAQAFgHAGgEQAFgDAIAAQAHAAAFAEQAFAFAAAJQAAAGgDACQgDADgEACIgKAEIgKAFQgFADgDAEQgDAEAAAFIAAA1QAAAJgFAFQgFAFgIAAQgHAAgFgFgAtSBIQgFgFAAgJIAAhOIgIAAQgHAAgEgEQgEgEAAgHQAAgGAFgFQAEgEAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHAAAFADQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABOQgBAJgEAFQgFAFgIAAQgHAAgFgFgAHWhGQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgJABQgIgBgFgFgADUhGQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgJABQgIgBgFgFgAmFhGQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgJABQgIgBgFgFg");
	this.shape.setTransform(203,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5B1IgSgFQgJgDgGgFQgHgFAAgHQAAgEACgDQACgEAEgCQADgCADAAQAFAAAHADIANAEQAIAEAKAAQANgBAIgGQAIgIABgNIAAgIIgBAAQgGAIgIAEQgJAFgMAAQgSgBgMgJQgLgKgHgOQgFgPAAgSQAAgQAHgOQAHgQANgJQAMgKASAAQAJAAAIAEQAJAEAGAIQABgHAEgEQAFgDAHAAQAHAAAFAEQAFAGAAAIIAABiQAAAVgIAOQgJAOgPAHQgOAHgVAAIgOgBgAA9gaQgFAGgDAHQgDAIAAAGQAAAKADAHQADAJAFAEQAGAGAJgBQAKABAFgGQAHgFACgHQAEgIAAgJQAAgGgEgIQgCgIgHgGQgFgFgKgBQgJABgGAFgAjZA8QgPgJgIgPQgIgPAAgTQAAgQAIgPQAHgPAPgJQAOgKARAAQAPAAALAFQAMAGAIAJQAIAKAFALQAEALAAALQAAAGgDAEQgFADgHAAIhKAAQACAJAEAFQAFAGAGADQAIACAIAAQAJAAAHgDIAMgHQAGgEAFABQAGgBAEAFQAEAEAAAGQAAAGgFAFQgFAFgIAFQgJAEgJACIgUADQgUgBgOgIgAifgIQgBgMgHgGQgHgIgNAAQgLAAgHAIQgHAHgCALIA3AAIAAAAgAE5A+QgFgGAAgJIAAg5QAAgMgGgGQgHgGgJAAQgLAAgGAHQgGAGAAALIAAA5QAAAJgEAGQgFAFgIAAQgIAAgEgFQgFgGAAgJIAAiRQAAgIAFgGQAEgFAIAAQAIAAAFAFQAEAGAAAIIAAAvIABAAQAFgHAJgDQAJgCAIAAQAOAAALAFQAKAGAHAKQAFALAAAPIAAA/QAAAJgEAGQgFAFgIAAQgHAAgFgFgACrA+QgFgGABgJIAAhNIgIAAQgIAAgDgEQgFgEAAgHQABgGAEgFQAEgEAHAAIAIAAIAAgVQgBgIAFgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAAVIAKAAQAHAAAFADQAEAEAAAIQAAAIgEAEQgFADgHAAIgKAAIAABNQAAAJgFAGQgFAFgHAAQgIAAgFgFgAgbA+QgFgGgBgJIAAg5QABgMgHgGQgGgGgKAAQgKAAgHAHQgFAGAAALIAAA5QAAAJgFAGQgEAFgJAAQgHAAgFgFQgEgGAAgJIAAhaQAAgIAEgGQAFgEAHAAQAHAAAFADQADADABAGQAGgHAIgEQAHgDANAAQANAAALAFQALAGAGAKQAEALAAAPIAAA/QAAAJgDAGQgFAFgHAAQgIAAgEgFgAlDBBQgJABgFgGQgEgFgBgJIAAiEQAAgJAGgFQAEgFAIAAQAIAAAFAFQAFAFABAJIAAB3IAqAAQAGAAAEACQAEADABAEQADADAAAEQgBAHgFAFQgEAEgIAAg");
	this.shape_1.setTransform(295.3,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ALHBnQgFgEAAgHIABgFIACgFIAUgkQACgEAEgCQAEgCAEAAQAGAAAFAFQAFAEAAAHIgBAFIgCAFIgUAkQgDAEgEACQgEACgDAAQgHAAgEgFgAQ/BGQgMgIgHgNQgIgNgDgPQgDgQAAgNQAAgPADgPQADgPAIgNQAHgOAMgIQAMgIATAAQASAAAMAIQAMAIAIAOQAHANADAPQADAPAAAPQAAANgDAQQgDAPgHANQgIANgMAIQgMAIgSABQgTgBgMgIgARPg5QgFAGgDAJIgDASIgBAQIABAOIADASQADAKAFAGQAGAGAJAAQAJAAAFgGQAFgGADgKIADgSIABgOIgBgQIgDgSQgDgJgFgGQgFgGgJAAQgJAAgGAGgAO1BGQgMgIgHgNQgIgNgDgPQgDgQAAgNQAAgPADgPQADgPAIgNQAHgOAMgIQAMgIATAAQASAAAMAIQAMAIAIAOQAHANADAPQADAPAAAPQAAANgDAQQgDAPgHANQgIANgMAIQgMAIgSABQgTgBgMgIgAPFg5QgFAGgDAJIgDASIgBAQIABAOIADASQADAKAFAGQAGAGAJAAQAJAAAFgGQAFgGADgKIADgSIABgOIgBgQIgDgSQgDgJgFgGQgFgGgJAAQgJAAgGAGgAMrBGQgMgIgHgNQgIgNgDgPQgDgQAAgNQAAgPADgPQADgPAIgNQAHgOAMgIQAMgIATAAQASAAAMAIQAMAIAIAOQAHANADAPQADAPAAAPQAAANgDAQQgDAPgHANQgIANgMAIQgMAIgSABQgTgBgMgIgAM7g5QgFAGgDAJIgDASIgBAQIABAOIADASQADAKAFAGQAGAGAJAAQAJAAAFgGQAFgGADgKIADgSIABgOIgBgQIgDgSQgDgJgFgGQgFgGgJAAQgJAAgGAGgAJhBGQgNgIgHgNQgHgNgDgPQgEgQABgNQgBgPAEgPQADgPAHgNQAHgOANgIQAMgIASAAQASAAANAIQAMAIAHAOQAHANAEAPQADAPAAAPQAAANgDAQQgEAPgHANQgHANgMAIQgNAIgSABQgSgBgMgIgAJxg5QgGAGgCAJIgEASIAAAQIAAAOIAEASQACAKAGAGQAFAGAJAAQAJAAAGgGQAFgGACgKIAEgSIAAgOIAAgQIgEgSQgCgJgFgGQgGgGgJAAQgJAAgFAGgAoeBFQgNgJgIgPQgIgPAAgSQAAgQAIgPQAIgPAOgJQAOgKASAAQASAAAOAKQAOAJAIAPQAIAPAAAQQAAASgIAPQgIAPgNAJQgOAJgTABQgTgBgOgJgAoNgQQgGAGgCAIQgDAGAAAIQAAAJADAIQACAHAHAGQAGAFAJAAQAJAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgGQgCgIgGgGQgHgFgJAAQgJAAgHAFgAtWBJQgKgFgIgKQgHgJgEgLQgEgMAAgMQAAgNAEgKQADgMAHgKQAHgKAKgGQALgGAOAAQAJAAAIADQAJADAHAGIAAgvQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAACSQAAAJgFAFQgEAFgIAAQgHAAgEgEQgFgDgBgHQgGAIgIAEQgJAEgJAAQgNgBgLgFgAtIgQQgGAGgDAIQgDAGAAAIQAAAIADAIQADAIAGAGQAGAFAIAAQAKAAAGgGQAGgFADgIQADgIAAgJQAAgJgDgFQgDgIgGgFQgGgFgKAAQgIAAgGAFgAvgBJQgKgFgIgKQgHgJgEgLQgEgMAAgMQAAgNAEgKQADgMAHgKQAHgKAKgGQALgGAOAAQAJAAAIADQAJADAHAGIAAgvQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAACSQAAAJgFAFQgEAFgIAAQgHAAgEgEQgFgDgBgHQgGAIgIAEQgJAEgJAAQgNgBgLgFgAvSgQQgGAGgDAIQgDAGAAAIQAAAIADAIQADAIAGAGQAGAFAIAAQAKAAAGgGQAGgFADgIQADgIAAgJQAAgJgDgFQgDgIgGgFQgGgFgKAAQgIAAgGAFgAILBIQgFgEAAgKIAAh2IgOAAQgJAAgEgFQgEgFAAgHQAAgGAFgFQAEgFAIAAIAiAAQAHAAAEAFQAFAFAAAHIAACGQAAAKgFAEQgFAFgIAAQgIAAgFgFgAF5BIQgFgFAAgJIAAg6QAAgMgGgGQgHgGgJAAQgLAAgGAHQgFAHAAAKIAAA6QAAAJgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAHAAAEADQAEADABAGQAFgHAIgDQAIgEANAAQANAAALAGQALAFAGALQAGAKAAAPIAABAQAAAJgFAFQgFAFgHAAQgIAAgFgFgAD0BIQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAABaQAAAJgFAFQgFAFgIAAQgHAAgFgFgAC+BIQgFgFAAgJIAAg6QAAgMgGgGQgHgGgJAAQgLAAgGAHQgFAHAAAKIAAA6QAAAJgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAiSQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAIIAAAvIAAAAQAGgGAJgDQAIgDAJAAQANAAALAGQALAFAGALQAGAKAAAPIAABAQAAAJgFAFQgFAFgHAAQgIAAgFgFgAAwBIQgEgFAAgJIAAhOIgIAAQgHAAgEgEQgEgEAAgHQAAgGAEgFQAEgEAHAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAAVIAKAAQAHAAAFADQAEAEAAAIQAAAIgEAEQgFADgHAAIgKAAIAABOQAAAJgFAFQgFAFgHAAQgIAAgFgFgAgMBIQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAGAAAFAFQAFAFAAAJIAABaQAAAJgFAFQgFAFgGAAQgHAAgFgFgAhjBIQgGgFgCgHIgchbIgBAAIgbBbQgDAHgGAFQgGAFgJAAQgKAAgGgFQgGgGgCgIIgeiAIgBgEIAAgFQAAgGAEgEQAFgFAIgBQAIABAFAEQAEAFACAIIAUBkIABAAIAfhnQACgHAFgEQAFgDAHgBQAGABAFADQAFAEACAHIAgBnIAAAAIAVhkQABgIAFgFQAEgEAJgBQAIABAEAFQAFAEAAAGIgBAFIAAAEIgfCAQgCAIgFAGQgGAFgKAAQgJAAgHgFgAlcBIQgFgFAAgJIAAg6QAAgMgHgGQgGgGgKAAQgKAAgGAHQgGAHAAAKIAAA6QAAAJgFAFQgEAFgIAAQgIAAgEgFQgFgFAAgJIAAhaQAAgJAFgFQAEgFAIAAQAHAAAEADQAEADABAGQAFgHAIgDQAIgEAMAAQAOAAAKAGQALAFAGALQAGAKAAAPIAABAQAAAJgFAFQgEAFgIAAQgIAAgEgFgApnBIQgFgFAAgJIAAhaQAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAABaQAAAJgFAFQgFAFgIAAQgHAAgFgFgAqlBIQgFgFAAgJIAAhOIgIAAQgHAAgEgEQgEgEAAgHQAAgGAFgFQAEgEAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHAAAFADQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABOQgBAJgEAFQgFAFgIAAQgHAAgFgFgArjBIQgFgFAAgJIAAhaQAAgJAFgFQAEgFAIAAQAIAAAEAFQAFAFAAAJIAABaQAAAJgFAFQgEAFgIAAQgIAAgEgFgAwiBKQgEgEgCgFIgHgXIhDAAIgHAWQgCAGgEAEQgEADgHAAQgIAAgFgFQgFgEAAgIIAAgFIABgDIAxiAQADgJAGgFQAHgGAJAAQAKAAAGAGQAHAFADAJIAvCAIABAGIABADQAAAHgFAFQgFAEgHAAQgHAAgEgDgAw6AJIgWhEIgBAAIgXBEIAuAAgADzhGQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgJABQgIgBgFgFgAgNhGQgGgGAAgIQAAgIAGgFQAFgGAIAAQAGAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgHABQgIgBgFgFgApohGQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgJABQgIgBgFgFgArlhGQgFgGAAgIQAAgIAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAIQAAAIgFAGQgGAFgIABQgIgBgGgFg");
	this.shape_2.setTransform(211.9,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AtBBwQgFgEAAgJIAAiOQAAgIAFgGQAEgEAIAAQAHAAAEADQAFAEABAHQAFgIAJgEQAJgEAKAAQAOAAAKAGQALAFAHAKQAHALADAMQAEALAAALQAAAMgEAMQgEAMgIAJQgHAJgLAGQgKAFgNABQgIgBgJgDQgIgDgHgGIAAArQAAAJgFAEQgEAGgIAAQgIAAgEgGgAsYgaQgGAFgDAHQgDAIAAAGQAAAJADAJQADAHAGAGQAGAFAJAAQAJABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgGgGQgGgFgJgBQgJAAgGAGgAR1A7QgNgJgIgPQgIgPAAgSQAAgQAIgPQAIgPAOgJQAOgKASAAQASAAAOAKQAOAJAIAPQAIAPAAAQQAAASgIAPQgIAPgNAJQgOAJgTABQgTgBgOgJgASGgaQgGAGgCAHQgDAJAAAGQAAAIADAIQACAIAHAFQAGAGAJgBQAJABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgCgHgGgGQgHgFgJgBQgJABgHAFgAPbBCQgJgCgHgDQgHgEgFgEQgFgGAAgFIACgGIAFgHQADgDAFABQAHAAAFACIAKAGQAGADAIAAQAIAAADgCQADgDgBgFQAAgFgGgDIgPgGQgJgDgIgEQgJgFgGgGQgGgHgBgMQABgMAGgJQAGgJAKgFQAKgFAOAAIAOACQAIABAGADQAHADAEAFQAEAFAAAGQAAAGgEAFQgDAEgHAAIgIgCIgLgFQgGgCgGgBQgEAAgEACQgDADAAAFQAAAFAGACQAGAEAJADIASAIQAIACAGAIQAGAHABAMQgBALgGAJQgGAKgLAFQgLAFgPABQgHgBgIgCgAGZA/QgKgGgIgJQgHgJgEgMQgEgMAAgMQAAgLAEgLQADgMAHgLQAHgKAKgFQALgGAOAAQAJAAAIADQAJADAHAGIAAgvQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAACRQAAAJgFAGQgEAFgIAAQgHAAgEgEQgFgEgBgGQgGAHgIAEQgJAEgJABQgNgBgLgFgAGngaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAIgBQAKAAAGgFQAGgGADgHQADgJAAgJQAAgGgDgIQgDgHgGgFQgGgGgKAAQgIABgGAFgACEA8QgMgJgIgPQgHgPAAgTQAAgRAHgQQAIgOANgJQANgJAQAAQAJAAAJAEQAJADAGAJQAAgGAFgFQAFgDAGAAQAIAAAEADQADAEABAFIABAKIAABUIgBAJQgBAGgDADQgEAEgIAAQgHAAgEgEQgEgEgBgGQgHAHgIAEQgIAFgKAAQgRgBgNgIgACXgaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAKgBQAIABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgFgGQgGgFgJgBQgKABgGAFgAjEA7QgNgJgIgPQgIgPAAgSQAAgQAIgPQAIgPAOgJQAOgKASAAQASAAAOAKQAOAJAIAPQAIAPAAAQQAAASgIAPQgIAPgNAJQgOAJgTABQgTgBgOgJgAizgaQgGAGgCAHQgDAJAAAGQAAAIADAIQACAIAHAFQAGAGAJgBQAJABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgCgHgGgGQgHgFgJgBQgJABgHAFgAnMA8QgMgJgIgPQgHgPAAgTQAAgRAHgQQAIgOANgJQANgJAQAAQAJAAAJAEQAJADAGAJQAAgGAFgFQAFgDAGAAQAIAAAEADQADAEABAFIABAKIAABUIgBAJQgBAGgDADQgEAEgIAAQgHAAgEgEQgEgEgBgGQgHAHgIAEQgIAFgKAAQgRgBgNgIgAm5gaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAKgBQAIABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgFgGQgGgFgJgBQgKABgGAFgAo5A7QgOgJgIgPQgHgPAAgSQAAgQAIgPQAHgPAOgJQAOgKASAAIANABIAOADQAGADAFAFQAFADAAAHIgCAIQgBADgDADQgDACgFAAIgIgBIgJgEQgEgCgGAAQgKABgGAFQgHAFgDAIQgDAIAAAHQAAAIAEAIQADAJAGAEQAHAGAJgBIAKgBIAJgEIAHgCQAGABAEAEQAFAFAAAGQAAAGgFAFQgFAEgHADQgHADgHABIgMACQgSgBgOgJgAxvA3QgPgOAAgXIAAg9QAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIIAAA8QAAAIADAEQADAFAFADQAFACAGAAQAGAAAFgCQAFgDADgFQADgEAAgIIAAg8QAAgIAFgGQAFgEAIAAQAHAAAFAEQAFAGAAAIIAAA9QAAAXgPAOQgPANgbABQgbgBgPgNgAU3A+QgFgGAAgJIAAg5QAAgMgHgGQgGgGgKAAQgKAAgGAHQgGAGAAALIAAA5QAAAJgFAGQgEAFgIAAQgIAAgEgFQgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAHAAAEADQAEADABAGQAFgHAIgEQAIgDAMAAQAOAAAKAFQALAGAGAKQAGALAAAPIAAA/QAAAJgFAGQgEAFgIAAQgIAAgEgFgAQsA+QgFgGAAgJIAAhaQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIIAABaQAAAJgFAGQgFAFgIAAQgHAAgFgFgAORA+QgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAIAAAEAEQAFAGAAAIIAABaQAAAJgFAGQgEAFgIAAQgIAAgEgFgAM+A/QgEgEgCgGIgjhYIgCgGIAAgEQAAgIAGgFQAFgDAHAAQAHAAAEADQADAFABADIAWBDIABAAIAWhDQABgDAEgFQADgDAHAAQAIAAAFADQAFAFAAAIIAAAEIgCAGIgjBYQgCAGgEAEQgEAEgIAAQgJAAgEgEgALsA+QgFgGAAgJIAAhaQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIIAABaQAAAJgFAGQgFAFgIAAQgHAAgFgFgAFMA+QgFgGAAgJIAAg5QAAgMgHgGQgGgGgKAAQgKAAgGAHQgGAGAAALIAAA5QAAAJgFAGQgEAFgIAAQgIAAgEgFQgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAHAAAEADQAEADABAGQAFgHAIgEQAIgDAMAAQAOAAAKAFQALAGAGAKQAGALAAAPIAAA/QAAAJgFAGQgEAFgIAAQgIAAgEgFgAgCA+QgFgGAAgJIAAg5QAAgMgHgGQgGgGgKAAQgKAAgGAHQgGAGAAALIAAA5QAAAJgFAGQgEAFgIAAQgIAAgEgFQgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAHAAAEADQAEADABAGQAFgHAIgEQAIgDAMAAQAOAAAIAFQALAGAGAKQAGALAAAPIAAA/QAAAJgFAGQgEAFgIAAQgIAAgCgFgAkNA+QgFgGAAgJIAAhaQAAgIAFgGQAFgEAHAAQAIAAAFAEQAFAGAAAIIAABaQAAAJgFAGQgFAFgIAAQgHAAgFgFgAlLA+QgFgGAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgGAFgFQAEgEAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHAAAFADQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABNQgBAJgEAGQgFAFgIAAQgHAAgFgFgAqCA+QgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAIAAAEAEQAFAGAAAIIAABaQAAAJgFAGQgEAFgIAAQgIAAgEgFgAq4A+QgFgGAAgJIAAiRQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAIIAACRQAAAJgFAGQgFAFgIAAQgHAAgFgFgAt3A+QgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAIAAAEAEQAFAGAAAIIAABaQAAAJgFAGQgEAFgIAAQgIAAgEgFgAu2A+QgEgGAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgGAEgFQAEgEAHAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAAVIAKAAQAHAAAFADQAEAEAAAIQAAAIgEAEQgFADgHAAIgKAAIAABNQAAAJgFAGQgFAFgHAAQgIAAgFgFgAv0A+QgFgGAAgJIAAiRQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAIIAACRQAAAJgFAGQgFAFgIAAQgHAAgFgFgAysA/QgEgEgCgJIgOhfIAAAAIgdBiIgDAGQgCADgEACQgEADgGAAQgHAAgEgDQgEgCgCgDIgDgGIgchiIgBAAIgOBfQgBAJgEAEQgFAEgJAAQgHAAgFgFQgFgEAAgJIAAgCIAAgCIAWiDQABgFADgEQAEgEAFgDQAFgCAGgBQAJAAAHAGQAGAFACAGIAcBeIABAAIAcheQACgGAHgFQAGgGAJAAQAHABAFACQAFADADAEQADAEABAFIAWCDIAAACIAAACQAAAJgFAEQgFAFgHAAQgJAAgEgEgAJcBBQgFABgEgCQgEgCgDgEQgDgDAAgIIAAiEQAAgIAFgFQAFgFAIgBIAoAAQAbABATAKQASAMAKATQAKAUAAAaQAAAYgKATQgKASgTAKQgSAKgZAAgAJtAhIAYAAQAPgBAKgGQAKgIAFgLQAFgKAAgOQAAgPgFgMQgFgNgLgGQgKgHgRAAIgVAAgAQrhQQgGgGAAgJQAAgHAGgFQAFgGAIgBQAIABAGAGQAGAFAAAHQAAAJgGAGQgFAFgJAAQgIAAgFgFgAOPhQQgFgGAAgJQAAgHAFgFQAGgGAIgBQAIABAFAGQAGAFAAAHQAAAJgFAGQgGAFgIAAQgIAAgGgFgALrhQQgGgGAAgJQAAgHAGgFQAFgGAIgBQAIABAGAGQAGAFAAAHQAAAJgGAGQgFAFgJAAQgIAAgFgFgAkOhQQgGgGAAgJQAAgHAGgFQAFgGAIgBQAIABAGAGQAGAFAAAHQAAAJgGAGQgFAFgJAAQgIAAgFgFgAqEhQQgFgGAAgJQAAgHAFgFQAGgGAIgBQAIABAFAGQAGAFAAAHQAAAJgFAGQgGAFgIAAQgIAAgGgFgAt5hQQgFgGAAgJQAAgHAFgFQAGgGAIgBQAIABAFAGQAGAFAAAHQAAAJgFAGQgGAFgIAAQgIAAgGgFg");
	this.shape_3.setTransform(196.1,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AGUBbQgJgCgHgDQgHgEgFgFQgFgFAAgGIACgGIAFgGQADgDAFAAQAHAAAFADIAKAGQAGADAIAAQAIAAADgDQADgCgBgFQAAgFgGgDIgPgGQgJgDgIgFQgJgEgGgIQgGgHgBgMQABgKAGgJQAGgJAKgFQAKgFAOAAIAOABQAIACAGADQAHADAEAFQAEAEAAAHQAAAGgEAEQgDADgHAAIgIgBIgLgEQgGgDgGAAQgEAAgEACQgDADAAADQAAAEAGADQAGAEAJADIASAHQAIAFAGAHQAGAIABAMQgBALgGAJQgGAJgLAGQgLAFgPAAQgHAAgIgCgADSBVQgNgJgHgPQgIgPAAgTQAAgTAIgOQAHgPANgIQANgJAQAAQAKAAAJAEQAIADAGAJQABgHAFgEQAEgEAHAAQAIAAADAEQAEAEABAFIAAAKIAABTIAAAKQgBAFgEAEQgDADgIABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgQAAgNgIgADkgBQgGADgCAIQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAJAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgDQgGgFgJgBQgJABgHAFgAicBUQgNgJgIgPQgIgPAAgSQAAgSAIgNQAIgPAOgKQAOgJASAAIAMABIAOADQAHADAFAEQAEAEAAAHIgBAHQgCAEgDACQgDADgEAAIgIgCIgJgDQgFgCgFAAQgKAAgHAGQgGADgDAIQgDAIAAAJQAAAIADAIQADAIAHAFQAGAFAKAAIAJgBIAKgEIAGgCQAHAAAEAFQAEAEAAAGQAAAHgFAFQgEAEgHADQgHADgHABIgMABQgTAAgOgJgAkeBUQgOgIgIgPQgIgPAAgTQAAgSAIgNQAHgPAOgKQAOgJASAAQAPAAALAFQAMAGAIAJQAIAKAEAJQAFALAAALQAAAHgEAEQgEAEgHAAIhKAAQABAIAFAGQAFAFAGADQAHADAJAAQAIAAAIgEIAMgGQAGgEAFAAQAFAAAFAFQAEAEAAAGQAAAFgFAGQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAjjAPQgBgMgHgFQgHgHgNAAQgLAAgHAHQgHAGgCALIA3AAIAAAAgAFKBWQgFgFAAgJIAAiRQAAgJAFgFQAEgFAIAAQAIAAAEAFQAFAFAAAJIAACRQAAAJgFAFQgEAGgIAAQgIAAgEgGgACKBWQgFgFAAgJIAAg8QAAgKgGgFQgFgGgJAAQgKAAgFAGQgGAFAAAKIAAA8QAAAJgFAFQgEAGgIAAQgIAAgEgGQgFgFAAgJIAAg8QAAgKgGgFQgFgGgJAAQgLAAgFAGQgFAFAAAKIAAA8QAAAJgFAFQgEAGgIAAQgGAAgEgGQgFgFAAgJIAAhaQAAgIAFgGQAEgFAGAAQAHAAAEAEQAEADABAGQAGgHAIgEQAIgDAKAAQALAAAJAEQAJAFAHAIQAHgIAKgFQAKgEAJAAQAOAAALAFQAKAFAGALQAGAKAAANIAABCQAAAJgFAFQgEAGgIAAQgIAAgEgGgAhABWQgFgFAAgJIAAhaQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAABaQAAAJgFAFQgEAGgIAAQgIAAgEgGgAnBBaQgEAAgEgBQgFgCgDgEQgDgEAAgHIAAiEQAAgJAFgEQAFgFAJgBIAnAAQAbABATAKQATALAKAUQAKATAAAZQAAAagLASQgKATgSAKQgSAKgZAAgAmwA5IAYAAQAQAAAKgHQAKgHAFgLQAEgMAAgOQAAgOgFgMQgFgMgKgHQgLgGgQAAIgWAAgAhCg4QgFgFAAgJQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAFAAAIQAAAJgFAFQgGAGgIAAQgIAAgGgGg");
	this.shape_4.setTransform(283.5,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah/DzQgFgFAAgKIAAiPQAAgIAFgFQAFgFAHgBQAIAAAEAEQAEAEACAHQAEgIAJgEQAJgEAKAAQAOAAALAGQAKAGAHAKQAHAJAEAMQADANAAANQAAAMgEALQgEAMgHAJQgIAKgKAEQgLAGgNAAQgIAAgJgCQgHgEgHgFIAAApQgBAKgEAFQgFAEgIABQgHgBgFgEgAhVBlQgHAGgCAIQgDAHAAAIQAAAKACAHQADAJAGAFQAGAGAKgBQAIAAAGgEQAHgGACgIQADgIABgIQgBgJgDgHQgCgJgHgFQgGgFgIAAQgKAAgFAEgAMADFQgJgCgIgEQgGgEgFgFQgFgFAAgGIABgGIAGgGQADgDAFAAQAGAAAFAEIALAFQAFADAJAAQAHAAADgDQADgCAAgFQAAgEgGgDIgPgHQgJgDgJgFQgJgEgGgHQgGgIAAgLQAAgNAGgJQAGgJAKgFQALgFAOAAIAOABQAIACAGADQAGADAFAFQAEAFAAAGQAAAGgEAEQgDAFgHABIgJgEIgKgEQgGgDgGAAQgEAAgEADQgEACAAAFQABAEAFADQAHAEAJADIASAHQAIAFAGAHQAGAIAAAMQAAALgGAKQgGAIgLAGQgLAFgPAAQgIAAgHgBgAHzC9QgNgJgIgPQgHgPAAgSQgBgSAJgPQAHgPAOgKQAOgJASAAQATAAANAJQAPAKAHAPQAIAPAAASQAAASgHAPQgJAPgNAJQgOAJgTAAQgSAAgPgJgAIFBmQgGAFgDAJQgDAHAAAJQAAAJADAHQACAIAHAGQAGAEAJAAQAKAAAFgEQAHgGACgIQAEgHAAgJQAAgJgEgHQgCgJgGgFQgGgFgKAAQgJAAgGAFgADsC+QgNgIgHgQQgIgOAAgUQAAgTAIgPQAHgQANgIQANgJAQAAQAJAAAJAEQAJAEAGAIQAAgGAFgEQAFgFAHAAQAHAAAEAEQAEAEAAAFIABAKIAABVIgBAKQAAAFgEAEQgEADgHABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgRAAgMgIgAD+BmQgGAFgCAJQgDAHAAAJQAAAJADAHQACAIAHAGQAFAEAKAAQAJAAAFgEQAHgGACgIQADgHABgJQgBgJgDgHQgDgJgFgFQgGgFgJAAQgKAAgGAFgAAbC+QgOgJgJgPQgFgPgBgTQABgSAFgPQAIgPAOg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AAQgHAAgEgEQgEgDgCgIQgGAIgIAFQgJADgJAAQgNAAgKgGgAMDicQgGAFgDAJQgDAHAAAJQAAAIADAIQADAIAGAFQAGAFAJABQAJAAAGgGQAHgFACgJQADgIAAgIQAAgJgDgHQgDgIgGgGQgGgEgJAAQgJAAgGAFgAHhhEQgNgIgHgPQgIgQAAgTQAAgTAIgPQAHgQANgIQANgJAQAAQAJAAAJAEQAJADAGAJQAAgHAGgDQAEgEAHgBQAHAAAEAEQADAEACAFIAAAKIAABVIAAAKQgCAFgDAEQgEADgHABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgQAAgNgIgAHzicQgGAFgDAJQgCAHAAAJQAAAJACAIQADAHAGAFQAHAFAJABQAJgBAFgFQAHgFACgHQAEgIAAgJQAAgJgEgHQgDgJgFgFQgGgFgJAAQgJAAgHAFgAE9g9QgJgCgHgEQgIgDgEgGQgFgEAAgHIABgGIAGgGQADgDAFAAQAGABAFADIALAFQAFADAJAAQAHAAAEgDQACgCAAgFQAAgEgGgDIgPgHQgJgDgJgFQgIgEgHgHQgFgIgBgLQABgNAFgJQAGgJAKgFQALgFAOAAIAOABQAHACAHADQAGADAFAFQAEAFAAAGQAAAGgEAEQgEAFgGABIgJgEIgKgEQgGgDgGAAQgFAAgDADQgEACAAAFQABAFAFADQAGADAKADIASAHQAIAFAGAHQAGAIAAAMQAAALgGAKQgGAJgLAFQgLAFgPAAQgIAAgHgBgABphFQgOgIgIgPQgIgPAAgTQAAgSAIgPQAIgPANgKQAOgJATAAQAOAAAMAGQALAFAIAKQAIAJAEALQAFALAAALQAAAHgEAFQgEADgHAAIhKAAQABAJAFAFQAFAFAHADQAGADAJAAQAJAAAHgEIANgGQAFgDAFgBQAGABAEAEQAEAFAAAFQAAAGgFAFQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgACliKQgCgLgHgIQgHgHgMAAQgMAAgHAHQgHAIgBALIA3AAIAAAAgAgFg/QgJgFgFgIQgCAIgEADQgEAEgIAAQgHAAgFgGQgEgFgBgIIAAiUQABgIAEgGQAFgFAHAAQAJAAAEAFQAFAGAAAIIAAAvQAHgGAIgDQAHgDAJAAQAOAAAKAGQAKAGAIAKQAGAJAEAMQADA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");
	this.shape_5.setTransform(201.7,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AGODdQgJgCgHgDQgHgEgFgFQgFgFAAgGIACgGIAFgGQADgDAFAAQAHAAAFADIAKAGQAGADAIAAQAIAAADgDQADgCgBgFQAAgFgGgDIgPgGQgJgDgIgFQgJgEgGgIQgGgHgBgMQABgMAGgJQAGgJAKgFQAKgFAOAAIAOABQAIACAGADQAHADAEAFQAEAEAAAHQAAAGgEAEQgDAFgHAAIgIgDIgLgEQgGgDgGAAQgEAAgEACQgDADAAAFQAAAEAGADQAGAEAJADIASAHQAIAFAGAHQAGAIABAMQgBALgGAJQgGAJgLAGQgLAFgPAAQgHAAgIgCgADMDXQgNgJgHgPQgIgPAAgTQAAgTAIgQQAHgPANgIQANgJAQAAQAKAAAJAEQAIADAGAJQABgHAFgEQAEgEAHAAQAIAAADAEQAEAEABAFIAAAKIAABVIAAAKQgBAFgEAEQgDADgIABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgQAAgNgIgADeB/QgGAFgCAIQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAJAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgFQgGgFgJgBQgJABgHAFgAiiDWQgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAIAMABIAOADQAHADAFAEQAEAEAAAHIgBAHQgCAEgDACQgDADgEAAIgIgCIgJgDQgFgCgFAAQgKAAgHAGQgGAFgDAIQgDAIAAAJQAAAIADAIQADAIAHAFQAGAFAKAAIAJgBIAKgEIAGgCQAHAAAEAFQAEAEAAAGQAAAHgFAFQgEAEgHADQgHADgHABIgMABQgTAAgOgJgAkkDWQgOgIgIgPQgIgPAAgTQAAgSAIgPQAHgPAOgKQAOgJASAAQAPAAALAFQAMAGAIAJQAIAKAEALQAFALAAALQAAAHgEAEQgEAEgHAAIhKAAQABAIAFAGQAFAFAGADQAHADAJAAQAIAAAIgEIAMgGQAGgEAFAAQAFAAAFAFQAEAEAAAGQAAAFgFAGQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAjpCRQgBgMgHgHQgHgHgNAAQgLAAgHAHQgHAIgCALIA3AAIAAAAgAFEDYQgFgFAAgJIAAiTQAAgJAFgFQAEgFAIAAQAIAAAEAFQAFAFAAAJIAACTQAAAJgFAFQgEAGgIAAQgIAAgEgGgACEDYQgFgFAAgJIAAg8QAAgKgGgHQgFgGgJAAQgKAAgFAGQgGAHAAAKIAAA8QAAAJgFAFQgEAGgIAAQgIAAgEgGQgFgFAAgJIAAg8QAAgKgGgHQgFgGgJAAQgLAAgFAGQgFAHAAAKIAAA8QAAAJgFAFQgEAGgGAAQgIAAgEgGQgFgFAAgJIAAhcQAAgIAFgGQAEgFAIAAQAFAAAEAEQAEADABAGQAGgHAIgEQAIgDAKAAQALAAAJAEQAJAFAHAIQAHgIAKgFQAKgEAJAAQAOAAALAFQAKAFAGALQAGAKAAAPIAABCQAAAJgFAFQgEAGgIAAQgIAAgEgGgAhGDYQgFgFAAgJIAAhcQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAABcQAAAJgFAFQgEAGgIAAQgIAAgEgGgAnHDcQgEAAgEgBQgFgCgDgEQgDgEAAgHIAAiGQAAgJAFgEQAFgFAJgBIAnAAQAbABATAKQATALAKAUQAKATAAAbQAAAagLASQgKATgSAKQgSAKgZAAgAm2C7IAYAAQAQAAAKgHQAKgHAFgLQAEgMAAgOQAAgQgFgMQgFgMgKgHQgLgGgQAAIgWAAgAhIBIQgFgFAAgJQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAFAAAIQAAAJgFAFQgGAGgIAAQgIAAgGgGgAkQAHQgFgFAAgHIAAiPQAAgIAFgGQAFgFAHAAQAIAAAEAEQAEAEACAHQAFgIAJgEQAJgEAKAAQAOAAAKAGQAKAFAHAKQAHAKAEAMQADAMAAANQAAAMgEAMQgEAMgHAJQgIAJgKAFQgLAGgNAAQgIAAgIgDQgIgDgHgGIAAAqQAAAHgFAFQgFAFgIABQgHgBgFgFgAjmiEQgGAFgDAIQgDAIAAAIQAAAJACAIQADAIAGAGQAGAFAKAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgFQgGgFgJgBQgJAAgGAFgAMUgsQgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAQASAAAOAJQAOAKAIAPQAIAPAAASQAAASgIAPQgIAPgNAJQgOAJgTAAQgTAAgOgJgAMliDQgGAFgCAIQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAJAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgCgIgGgFQgHgFgJgBQgJABgHAFgAJvglQgJgCgHgDQgHgEgFgFQgFgFAAgGIACgGIAFgGQADgDAFAAQAHAAAFADIAKAGQAGADAIAAQAIAAADgDQADgCgBgFQAAgFgGgDIgPgGQgJgDgIgFQgJgEgGgIQgGgHgBgMQABgMAGgJQAGgJAKgFQAKgFAOAAIAOABQAIACAGADQAHADAEAFQAEAEAAAHQAAAGgEAEQgDAFgHAAIgIgDIgLgEQgGgDgGAAQgEAAgEACQgDADAAAFQAAAEAGADQAGAEAJADIASAHQAIAFAGAHQAGAIABAMQgBALgGAJQgGAJgLAGQgLAFgPAAQgHAAgIgCgAFjgsQgOgJgIgPQgHgPAAgSQAAgSAIgPQAHgPAOgKQAOgJASAAQATAAAOAJQAOAKAHAPQAIAPAAASQAAASgHAPQgIAPgOAJQgOAJgTAAQgSAAgOgJgAF0iDQgGAFgDAIQgDAIAAAJQAAAIADAIQADAIAGAFQAGAFAJAAQAKAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgFQgGgFgKgBQgJABgGAFgABbgrQgNgJgHgPQgIgPAAgTQAAgTAIgQQAHgPANgIQANgJAQAAQAKAAAJAEQAIADAGAJQABgHAFgEQAEgEAHAAQAIAAADAEQAEAEABAFIAAAKIAABVIAAAKQgBAFgEAEQgDADgIABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgQAAgNgIgABtiDQgGAFgCAIQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAJAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgFQgGgFgJgBQgJABgHAFgAh0gsQgOgIgIgPQgIgPAAgTQAAgSAIgPQAHgPAOgKQAOgJASAAQAPAAALAFQAMAGAIAJQAIAKAEALQAFALAAALQAAAHgEAEQgEAEgHAAIhKAAQABAIAFAGQAFAFAGADQAHADAJAAQAIAAAIgEIAMgGQAGgEAFAAQAFAAAFAFQAEAEAAAGQAAAFgFAGQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAg5hxQgBgMgHgHQgHgHgNAAQgLAAgHAHQgHAIgCALIA3AAIAAAAgAmhgvQgSgLgLgUQgKgUAAgZQAAgZAKgUQALgUASgMQATgLAYAAQAZAAASAMQATALAKAUQALAUAAAZQAAAZgKAUQgLAUgSALQgTAMgZAAQgYAAgTgMgAmPiqQgKAHgFANQgFAMAAAPQAAAPAFAMQAFANAKAHQAKAIAPAAQAQAAAKgIQAKgHAFgNQAFgMAAgPQAAgPgFgMQgFgNgLgHQgKgIgPAAQgPAAgKAIgArKgxQgOgNAAgXIAAg/QAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAAA+QAAAHADAFQADAFAGADQAFACAGAAQAFAAAFgCQAFgDAEgFQADgFAAgHIAAg+QAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAAA/QAAAXgOANQgPAOgbAAQgcAAgPgOgAtGgsQgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAQASAAAOAJQAOAKAIAPQAIAPAAASQAAASgIAPQgIAPgNAJQgOAJgTAAQgTAAgOgJgAs1iDQgGAFgCAIQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAJAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgCgIgGgFQgHgFgJgBQgJABgHAFgAOOgqQgEgFAAgJIAAhPIgIAAQgHAAgEgEQgEgEAAgHQAAgHAEgEQAEgEAHAAIAIAAIAAgSQAAgTAKgKQAKgKAQAAQAGAAAFABQAGABADAEQAEADAAAGQAAAIgEADQgDAEgHAAIgGAAQgCABgCADQgCACAAAGIAAAPIALAAQAIgBAFAEQAEADAAAJQAAAIgFADQgEAEgIAAIgLAAIAABPQAAAJgFAFQgEAGgIAAQgIAAgFgGgAIkgqQgFgFAAgJIAAg8QAAgMgGgGQgHgFgJAAQgLAAgGAGQgFAHAAAKIAAA8QAAAJgFAFQgFAGgIAAQgHAAgFgGQgFgFAAgJIAAhcQAAgIAFgGQAFgFAHAAQAHAAAEAEQAEADABAGQAFgHAIgEQAIgDANAAQANAAALAFQALAGAGAKQAGALAAAOIAABCQAAAJgFAFQgFAGgHAAQgIAAgFgGgAEagqQgFgFAAgJIAAhcQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAABcQAAAJgFAFQgEAGgIAAQgIAAgEgGgADbgqQgEgFAAgJIAAhPIgIAAQgHAAgEgEQgEgEAAgHQAAgHAEgEQAEgEAHAAIAIAAIAAgVQAAgJAEgFQAFgFAIAAQAHAAAFAFQAFAFAAAJIAAAVIAKAAQAHgBAFAEQAEADAAAJQAAAIgEADQgFAEgHAAIgKAAIAABPQAAAJgFAFQgFAGgHAAQgIAAgFgGgAgFgqQgFgFAAgJIAAheQAAgFACgEQADgEAEgCQACgCAEAAQAHAAAFADQAFADAAAJIABAAQAEgIAGgDQAGgEAIAAQAGAAAFAFQAFAEABAKQAAAFgDADQgDADgFABIgKAEIgKAFQgFADgDAEQgDAFAAAGIAAA1QAAAJgFAFQgEAGgIAAQgGAAgEgGgApOgqQgFgFAAgJIAAheQAAgFACgEQADgEAEgCQAEgCAEAAQAHAAAFADQAFADAAAJIABAAQAEgIAGgDQAGgEAIAAQAGAAAFAFQAFAEABAKQAAAFgDADQgDADgFABIgKAEIgKAFQgFADgDAEQgDAFAAAGIAAA1QAAAJgFAFQgEAGgIAAQgIAAgEgGgAvCgpQgFgFAAgJIAAiHQAAgHAEgGQAFgFAJgBIA+AAQAIABAEAFQAEAEAAAHQAAAGgEAFQgEAFgIABIgsAAIAAAiIAlAAQAIAAAFAFQAEAFAAAHQAAAGgEAFQgFAFgIAAIglAAIAAA1QgBAJgFAFQgFAFgHAAQgIAAgFgFgAEYi6QgFgFAAgJQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAFAAAIQAAAJgFAFQgGAGgIAAQgIAAgGgGg");
	this.shape_6.setTransform(236.2,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACiBSQgOgJgIgPQgHgPAAgSQAAgSAIgNQAHgPAOgJQAOgKASAAQATAAAOAKQAOAJAHAPQAIANAAASQAAASgHAPQgIAPgOAJQgOAJgTABQgSgBgOgJgACzgDQgGAEgDAHQgDAJAAAIQAAAIADAIQADAIAGAFQAGAGAJgBQAKABAGgGQAGgFADgIQADgIAAgIQAAgIgDgJQgDgHgGgEQgGgFgKgBQgJABgGAFgAhkBTQgNgJgHgPQgIgPAAgTQAAgTAIgOQAHgOANgJQANgJAQAAQAKAAAJAEQAIADAGAJQABgGAFgFQAEgDAHAAQAIAAADADQAEAEABAFIAAAKIAABUIAAAJQgBAGgEADQgDAEgIAAQgIAAgEgEQgDgEgCgGQgHAHgIAEQgIAFgKAAQgQgBgNgIgAhSgDQgGAEgCAHQgDAJAAAIQAAAIADAIQACAIAHAFQAGAGAJgBQAJABAGgGQAGgFADgIQADgIAAgIQAAgIgDgJQgDgHgGgEQgGgFgJgBQgJABgHAFgABZBVQgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAIAAAEAEQAFAGAAAIIAABaQAAAJgFAGQgEAFgIAAQgIAAgEgFgAAaBVQgEgGAAgJIAAhNIgIAAQgHAAgEgEQgDgEAAgHQAAgGADgFQAEgEAHAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAAVIAKAAQAHAAAFADQAEAEAAAIQAAAIgEAEQgFADgHAAIgKAAIAABNQAAAJgFAGQgFAFgHAAQgIAAgFgFgAifBYQgEgBgDgDIg1hBIAAA0QgBAJgFAFQgFAFgHAAQgIAAgFgFQgFgFAAgJIAAiFQAAgIAEgFQAFgFAJgBIAqAAQAcABAQANQAQANAAAcQAAANgGAKQgGAHgKAFQgKAHgMABIAoAsIAEAFIABAFQAAAIgFAFQgFAGgIAAIgHgCgAjbgFIAYAAQAKAAAGgFQAHgGAAgKQAAgLgHgFQgGgFgKAAIgYAAgABXg5QgFgGAAgJQAAgHAFgFQAGgGAIgBQAIABAFAGQAGAFAAAHQAAAJgFAGQgGAFgIAAQgIAAgGgFg");
	this.shape_7.setTransform(305.9,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABTBOQgPgJgIgPQgHgPAAgTQAAgSAHgNQAIgPAOgJQAOgKASAAQAPAAALAFQAMAGAHAJQAJAKAEALQAFAJgBALQABAIgEAEQgEADgHAAIhLAAQACAJAEAFQAFAGAHADQAHACAIAAQAJAAAIgDIAMgHQAGgEAEABQAGgBAFAFQAEAEAAAGQAAAGgGAFQgEAFgJAFQgIAEgKACIgUADQgTgBgPgIgACOAIQgCgKgGgGQgIgIgMAAQgLAAgIAIQgGAHgCAJIA3AAIAAAAgAgZBNQgOgJgIgPQgHgPAAgSQAAgSAIgNQAHgPAPgJQAOgKAPAAIANABIAOADQAGADAGAFQAEADAAAHIgBAIQgCADgDADQgDACgEAAIgIgBIgJgEQgFgCgFAAQgIABgHAFQgGAFgDAGQgEAIAAAJQAAAIAEAIQADAJAHAEQAGAGAIgBIAJgBIAKgEIAGgCQAGABAFAEQAEAFAAAGQAAAGgFAFQgEAEgIADQgGADgHABIgNACQgQgBgOgJgAjrBOQgPgJgHgPQgJgPABgTQgBgSAJgNQAHgPAOgJQAOgKASAAQAOAAAMAFQALAGAJAJQAHAKAFALQAEAJABALQgBAIgDAEQgEADgIAAIhJAAQABAJAFAFQAFAGAGADQAHACAJAAQAIAAAHgDIANgHQAGgEAFABQAFgBAEAFQAEAEAAAGQAAAGgEAFQgFAFgJAFQgIAEgKACIgUADQgUgBgOgIgAiwAIQgBgKgHgGQgIgIgMAAQgMAAgGAIQgIAHgBAJIA3AAIAAAAgAFPBQQgEgGAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgGAEgFQAFgEAGAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAHAAAGAFQAEAGAAAIIAAAVIAKAAQAHAAAFADQAFAEgBAIQABAIgFAEQgFADgHAAIgKAAIAABNQAAAJgEAGQgGAFgHAAQgIAAgFgFgAERBQQgFgGAAgJIAAg7QAAgKgGgGQgHgGgKAAQgKAAgGAHQgGAGABAJIAAA7QgBAJgEAGQgFAFgIAAQgHAAgFgFQgFgGAAgJIAAhaQAAgIAFgGQAFgEAHAAQAHAAAEADQAEADABAGQAFgHAIgEQAIgDAMAAQAOAAALAFQAKAGAHAKQAFALAAANIAABBQAAAJgEAGQgFAFgIAAQgHAAgFgFgAh8BQQgGgGAAgJIAAhbQABgGACgEQACgEAFgCQADgCAFABQAHgBAFADQAEADABAJIABAAQAEgIAGgDQAFgDAJAAQAGAAAFAEQAFAFABAJQgBAGgDACQgDADgEABIgKAFIgKAEQgFAEgDABQgDAFAAAGIAAA1QAAAJgFAGQgEAFgJAAQgHAAgEgFgAmBBQQgGgFAAgJIAAiFQABgIAEgFQAFgFAJgBIArAAQARABAOAHQAOAHAIANQAIANAAARQgBARgHALQgJANgNAHQgNAHgRAAIgbAAIAAAnQAAAJgFAFQgFAFgIAAQgHAAgFgFgAljgDIAZAAQALAAAHgHQAHgHAAgLQAAgMgHgGQgHgIgLABIgZAAg");
	this.shape_8.setTransform(292.2,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AE6D2IgSgEQgJgDgHgFQgGgFAAgHQAAgDACgEQACgDADgDQADgCAEAAQAFAAAGACIAOAGQAIACAKAAQANABAIgIQAIgGAAgOIAAgIIAAAAQgGAIgIAEQgJAEgMAAQgSAAgMgJQgMgJgGgQQgFgPAAgRQAAgRAHgPQAHgQAMgKQANgJASAAQAJAAAIAEQAJAEAFAIQACgHAEgEQAEgEAHAAQAIABAFAFQAFAFAAAIIAABlQAAAUgJAOQgIAOgPAHQgPAHgUAAIgOgCgAE+BmQgGAGgDAHQgDAIAAAJQAAAJADAHQADAJAGAFQAGAEAJAAQAJAAAGgEQAGgFADgIQADgIAAgIQAAgJgDgIQgCgIgHgGQgGgFgJAAQgJAAgGAFgAG2C+QgPgJgIgPQgIgPAAgTQAAgSAIgPQAIgPAOgKQAOgJASAAQAOAAAMAGQALAGAIAIQAIAKAFALQAEALAAALQAAAHgDAEQgEAEgIAAIhKAAQACAIAEAGQAFAFAHADQAHADAIAAQAJAAAHgEIANgGQAGgDAEgBQAGABAEAEQAEAEAAAGQAAAGgFAFQgFAFgIAFQgJADgJADIgUACQgUAAgOgIgAHxB4QgCgLgHgIQgHgHgMAAQgMAAgHAHQgHAIgBALIA3AAIAAAAgAAcC+QgNgIgHgQQgIgOAAgUQAAgTAIgPQAHgQANgIQANgJAQAAQAKAAAJAEQAIAEAGAIQABgGAFgEQAEgFAHAAQAIAAADAEQAEAEABAFIAAAKIAABVIAAAKQgBAFgEAEQgDADgIABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgQAAgNgIgAAuBmQgGAFgCAJQgDAHAAAJQAAAJADAHQACAIAHAGQAGAEAJAAQAJAAAGgEQAGgGADgIQADgHAAgJQAAgJgDgHQgDgJgGgFQgGgFgJAAQgJAAgHAFgAjvC7QgTgMgKgUQgKgUgBgZQAAgZALgUQAKgUATgLQASgMAZAAIAPABIARAFQAIADAGAFQAFAFAAAHQAAAIgEAEQgEAEgGABQgFAAgFgCIgLgFQgGgCgKAAQgPAAgKAIQgKAHgFAMQgFANAAAPQAAAOAFAMQAFAMAKAHQAKAIAPgBQAKABAGgDIAMgFIAKgDQAFABAEACQADAEACADIACAHQAAAIgGAGQgGAFgJAEQgIADgJABIgQABQgZAAgSgLgAoGC9QgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAQASAAAOAJQAOAKAIAPQAIAPAAASQAAASgIAPQgIAPgNAJQgOAJgTAAQgTAAgOgJgAn1BmQgGAFgCAJQgDAHAAAJQAAAJADAHQACAIAHAGQAGAEAJAAQAJAAAGgEQAGgGADgIQADgHAAgJQAAgJgDgHQgCgJgGgFQgHgFgJAAQgJAAgHAFgADjC/QgFgFAAgIIAAg8QAAgNgGgFQgHgGgJAAQgLAAgGAGQgFAIAAAKIAAA8QAAAIgFAFQgFAGgIAAQgHAAgFgGQgFgFAAgIIAAhdQAAgIAFgFQAFgFAHgBQAHAAAEAEQAEADABAGQAFgHAIgDQAIgEANAAQANAAALAGQALAFAGALQAGAKAAAOIAABDQAAAIgFAFQgFAGgHAAQgIAAgFgGgAgqC/QgFgFAAgIIAAg8QAAgNgHgFQgGgGgKAAQgKAAgGAGQgGAIAAAKIAAA8QAAAIgFAFQgEAGgIAAQgIAAgEgGQgFgFAAgIIAAiUQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAAAvIABAAQAFgGAJgEQAJgCAIAAQAOAAAKAGQALAFAGALQAGAKAAAOIAABDQAAAIgFAFQgEAGgIAAQgIAAgEgGgAmMC/QgEgFAAgIIAAhQIgIAAQgHAAgEgEQgEgEAAgHQAAgGAEgFQAEgEAHAAIAIAAIAAgSQAAgTAKgKQAKgKAQAAQAGAAAFABQAGABADAEQAEAEAAAGQAAAHgEADQgDAEgHAAIgGABQgCAAgCADQgCADAAAGIAAAOIALAAQAIAAAFADQAEAEAAAIQAAAIgFADQgEAEgIAAIgLAAIAABQQAAAIgFAFQgEAGgIAAQgIAAgFgGgAtWgPQgFgFAAgKIAAiOQAAgJAFgGQAFgEAHgBQAIAAAEAEQAEAEACAHQAFgIAJgEQAJgEAKAAQAOAAAKAGQAKAGAHAKQAHAJAEAMQADANAAANQAAAMgEAMQgEALgHAJQgIAKgKAEQgLAGgNAAQgIAAgIgCQgIgEgHgFIAAApQAAAKgFAFQgFAEgIABQgHgBgFgEgAssidQgGAGgDAIQgDAHAAAJQAAAIACAIQADAJAGAFQAGAGAKAAQAJgBAGgFQAGgFADgIQADgIAAgIQAAgJgDgHQgDgJgGgFQgGgFgJAAQgJAAgGAEgAOBhFQgOgIgIgPQgIgPAAgTQAAgSAIgPQAHgPAOgKQAOgJASAAQAPAAALAGQAMAFAIAKQAIAJAEALQAFALAAALQAAAHgEAFQgEADgHAAIhKAAQABAJAFAFQAFAFAGADQAHADAJAAQAIAAAIgEIAMgGQAGgDAFgBQAFABAFAEQAEAFAAAFQAAAGgFAFQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAO8iKQgBgLgHgIQgHgHgNAAQgLAAgHAHQgHAIgCALIA3AAIAAAAgAMThFQgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAIAMABIAOAEQAHACAFAFQAEAEAAAGIgBAIQgCADgDACQgDADgEABIgIgDIgJgDQgFgBgFAAQgKgBgHAGQgGAFgDAIQgDAIAAAJQAAAJADAIQADAIAHAEQAGAFAKABIAJgCIAKgEIAGgBQAHgBAEAFQAEAEAAAGQAAAHgFAFQgEAFgHACQgHADgHABIgMABQgTAAgOgJgAJBhFQgOgIgIgPQgIgPAAgTQAAgSAIgPQAHgPAOgKQAOgJASAAQAPAAALAGQAMAFAIAKQAIAJAEALQAFALAAALQAAAHgEAFQgEADgHAAIhKAAQABAJAFAFQAFAFAGADQAHADAJAAQAIAAAIgEIAMgGQAGgDAFgBQAFABAFAEQAEAFAAAFQAAAGgFAFQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAJ8iKQgBgLgHgIQgHgHgNAAQgLAAgHAHQgHAIgCALIA3AAIAAAAgAD2hCQgKgEgIgKQgHgJgEgLQgEgMAAgMQAAgNAEgNQADgMAHgJQAHgKAKgGQALgGAOAAQAJAAAIADQAJADAHAGIAAgvQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAACUQAAAIgFAFQgEAGgIAAQgHAAgEgEQgFgDgBgIQgGAIgIAFQgJADgJAAQgNAAgLgGgAEEicQgGAFgDAJQgDAHAAAJQAAAIADAIQADAIAGAFQAGAFAIABQAKAAAGgGQAGgFADgJQADgIAAgIQAAgJgDgHQgDgIgGgGQgGgEgKAAQgIAAgGAFgAgdhEQgMgIgIgPQgHgQAAgTQAAgTAHgPQAIgQANgIQANgJAPAAQAIAAAJAEQAJADAGAJQAAgHAFgDQAFgEAGgBQAIAAAEAEQADAEABAFIABAKIAABVIgBAKQgBAFgDAEQgEADgIABQgHAAgEgEQgEgEgBgHQgHAIgIAEQgIAEgJAAQgQAAgNgIgAgKicQgGAFgDAJQgDAHAAAJQAAAJADAIQADAHAGAFQAGAFAIABQAIgBAGgFQAGgFADgHQADgIAAgJQAAgJgDgHQgDgJgFgFQgGgFgJAAQgIAAgGAFgAlnhFQgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAQASAAAOAJQAOAKAIAPQAIAPAAASQAAASgIAPQgIAPgNAJQgOAJgTAAQgTAAgOgJgAlWicQgGAFgCAJQgDAHAAAJQAAAJADAIQACAHAHAFQAGAFAJABQAJgBAGgFQAGgFADgHQADgIAAgJQAAgJgDgHQgCgJgGgFQgHgFgJAAQgJAAgHAFgAq5hFQgNgJgIgPQgIgPAAgSQAAgSAIgPQAIgPAOgKQAOgJASAAQASAAAOAJQAOAKAIAPQAIAPAAASQAAASgIAPQgIAPgNAJQgOAJgTAAQgTAAgOgJgAqoicQgGAFgCAJQgDAHAAAJQAAAJADAIQACAHAHAFQAGAFAJABQAJgBAGgFQAGgFADgHQADgIAAgJQAAgJgDgHQgCgJgGgFQgHgFgJAAQgJAAgHAFgAvIhFQgOgJgIgPQgHgPAAgSQAAgSAIgPQAHgPAOgKQAOgJASAAQATAAAOAJQAOAKAHAPQAIAPAAASQAAASgHAPQgIAPgOAJQgOAJgTAAQgSAAgOgJgAu3icQgGAFgDAJQgDAHAAAJQAAAJADAIQADAHAGAFQAGAFAJABQAKgBAGgFQAGgFADgHQADgIAAgJQAAgJgDgHQgDgJgGgFQgGgFgKAAQgJAAgGAFgAR+hDQgFgFAAgIIAAhQIgIAAQgHAAgEgEQgEgEAAgHQAAgHAFgEQAEgEAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHgBAFAEQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABQQgBAIgEAFQgFAGgIAAQgHAAgFgGgAQ/hDQgFgFAAgIIAAg9QAAgLgGgHQgHgFgJAAQgLAAgGAGQgFAIAAAJIAAA9QAAAIgFAFQgFAGgIAAQgHAAgFgGQgFgFAAgIIAAhcQAAgJAFgGQAFgEAHgBQAHAAAEAEQAEADABAGQAFgHAIgDQAIgEANAAQANAAALAGQALAFAGALQAGAKAAAOIAABDQAAAIgFAFQgFAGgHAAQgIAAgFgGgAKwhDQgFgFAAgIIAAhfQAAgFACgEQADgEAEgCQAEgCAEAAQAHAAAFAEQAFACAAAJIABAAQAEgHAGgEQAGgEAIAAQAGAAAFAFQAFAFABAJQAAAFgDADQgDADgFACIgKADIgKAGQgFACgDAFQgDAEAAAHIAAA1QAAAIgFAFQgEAGgIAAQgIAAgEgGgAGrhCQgFgEAAgKIAAiGQAAgJAEgFQAFgFAJAAIArAAQASAAANAHQAOAHAIANQAIAMAAASQAAASgIANQgIAMgOAHQgNAHgRAAIgaAAIAAAnQgBAKgFAEQgFAFgHAAQgIAAgFgFgAHKiXIAYAAQALAAAHgHQAHgHAAgMQAAgKgHgIQgHgGgLgBIgYAAgACphDQgFgFAAgIIAAg9QAAgLgHgHQgGgFgKAAQgKAAgGAGQgGAIAAAJIAAA9QAAAIgFAFQgEAGgIAAQgIAAgEgGQgFgFAAgIIAAhcQAAgJAFgGQAEgEAIgBQAHAAAEAEQAEADABAGQAFgHAIgDQAIgEAMAAQAOAAAKAGQALAFAGALQAGAKAAAOIAABDQAAAIgFAFQgEAGgIAAQgIAAgEgGgAilhDQgFgFAAgIIAAg9QAAgLgHgHQgGgFgKAAQgKAAgGAGQgGAIAAAJIAAA9QAAAIgFAFQgEAGgIAAQgIAAgEgGQgFgFAAgIIAAhcQAAgJAFgGQAEgEAIgBQAHAAAEAEQAEADABAGQAFgHAIgDQAIgEAMAAQAOAAAKAGQALAFAGALQAGAKAAAOIAABDQAAAIgFAFQgEAGgIAAQgIAAgEgGgAmwhDQgFgFAAgIIAAhcQAAgJAFgGQAFgEAHgBQAIABAFAEQAFAGAAAJIAABcQAAAIgFAFQgFAGgIAAQgHAAgFgGgAnuhDQgFgFAAgIIAAhQIgIAAQgGAAgEgDIgFADIgKADIgKAGQgFACgDAFQgDAEAAAHIAAA1QAAAIgFAFQgFAGgIAAQgHAAgFgGQgFgFAAgIIAAhfQAAgFADgEQACgEAFgCQADgCAFAAQAHAAAFAEQAEACABAJIAAAAQAFgHAGgEQAFgEAIAAQAHAAAFAFIAAAAQAEgDAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHgBAFAEQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABQQgBAIgEAFQgFAGgIAAQgHAAgFgGgAwshDQgFgFAAgIIAAhfQAAgFADgEQACgEAFgCQADgCAFAAQAHAAAFAEQAEACABAJIAAAAQAFgHAGgEQAFgEAIAAQAHAAAFAFQAFAFAAAJQAAAFgDADQgDADgEACIgKADIgKAGQgFACgDAFQgDAEAAAHIAAA1QAAAIgFAFQgFAGgIAAQgHAAgFgGgAywhCQgFgEAAgKIAAiGQAAgJAFgFQAFgFAJAAIAqAAQASAAAOAHQAOAHAIANQAHAMABASQgBASgIANQgIAMgNAHQgOAHgQAAIgbAAIAAAnQAAAKgFAEQgFAFgIAAQgIAAgFgFgAyRiXIAZAAQALAAAHgHQAGgHAAgMQAAgKgGgIQgHgGgLgBIgZAAgAmxjTQgGgFAAgIQAAgIAGgGQAFgFAIAAQAIAAAGAFQAGAGAAAIQAAAIgGAFQgFAGgJAAQgIAAgFgGg");
	this.shape_9.setTransform(211.4,31);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ALFBUQgOgJgIgPQgHgPAAgSQAAgSAIgNQAHgPAOgKQAOgJASAAQATAAAOAJQAOAKAHAPQAIANAAASQAAASgHAPQgIAPgOAJQgOAJgTAAQgSAAgOgJgALWgBQgGADgDAIQgDAIAAAJQAAAIADAIQADAIAGAFQAGAFAJAAQAKAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgDQgGgFgKgBQgJABgGAFgAG9BVQgNgJgHgPQgIgPAAgTQAAgTAIgOQAHgPANgIQANgJAQAAQAKAAAJAEQAIADAGAJQABgHAFgEQAEgEAHAAQAIAAADAEQAEAEABAFIAAAKIAABTIAAAKQgBAFgEAEQgDADgIABQgIAAgEgEQgDgEgCgHQgHAIgIAEQgIAEgKAAQgQAAgNgIgAHPgBQgGADgCAIQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAJAAQAJAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgDQgGgFgJgBQgJABgHAFgADyBUQgOgJgIgPQgHgPAAgSQAAgSAIgNQAHgPAOgKQAOgJASAAQATAAAOAJQAOAKAHAPQAIANAAASQAAASgHAPQgIAPgOAJQgOAJgTAAQgSAAgOgJgAEDgBQgGADgDAIQgDAIAAAJQAAAIADAIQADAIAGAFQAGAFAJAAQAKAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgIgGgDQgGgFgKgBQgJABgGAFgAhgBUQgOgJgIgPQgHgPAAgSQAAgSAIgNQAHgPAOgKQAOgJASAAIANABIAOADQAGADAFAEQAFAEAAAHIgCAHQgBAEgDACQgDADgFAAIgIgCIgJgDQgEgCgGAAQgKAAgGAGQgHADgDAIQgDAIAAAJQAAAIAEAIQADAIAGAFQAHAFAJAAIAKgBIAJgEIAHgCQAGAAAEAFQAFAEAAAGQAAAHgFAFQgFAEgHADQgHADgHABIgMABQgSAAgOgJgAphBUQgOgIgIgPQgIgPAAgTQAAgSAIgNQAHgPAOgKQAOgJASAAQAPAAALAFQAMAGAIAJQAIAKAEAJQAFALAAALQAAAHgEAEQgEAEgHAAIhKAAQABAIAFAGQAFAFAGADQAHADAJAAQAIAAAIgEIAMgGQAGgEAFAAQAFAAAFAFQAEAEAAAGQAAAFgFAGQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAomAPQgBgMgHgFQgHgHgNAAQgLAAgHAHQgHAGgCALIA3AAIAAAAgAsEBUQgOgJgIgPQgHgPAAgSQAAgSAIgNQAHgPAOgKQAOgJASAAIANABIAOADQAGADAFAEQAFAEAAAHIgCAHQgBAEgDACQgDADgFAAIgIgCIgJgDQgEgCgGAAQgKAAgGAGQgHADgDAIQgDAIAAAJQAAAIAEAIQADAIAGAFQAHAFAJAAIAKgBIAJgEIAHgCQAGAAAEAFQAFAEAAAGQAAAHgFAFQgFAEgHADQgHADgHABIgMABQgSAAgOgJgAt5BcIgTgEQgKgDgGgFQgGgFgBgJQAAgHAFgFQAEgFAHAAQAGAAAGADIAOAEQAHACAIAAQAMAAAGgFQAGgGAAgJQAAgHgGgEQgGgEgJgDIgTgFQgKgDgJgFQgJgFgGgHQgGgIAAgOQAAgRAIgMQAJgMANgHQANgGARAAIANABQAHABAIADQAIACAFAFQAFAEABAIQAAAHgFAFQgEAFgIAAQgEAAgFgCIgKgDQgFgCgHAAQgIAAgGAEQgGAEAAAIQAAAGAGADQAGAEAJACIATAGQAKADAJAGQAJAEAGAJQAGAKAAAPQAAASgIAMQgJAMgOAHQgOAHgQAAIgRgBgAOGBWQgFgFAAgJIAAg8QAAgMgGgEQgHgFgJAAQgLAAgGAGQgFAFAAAKIAAA8QAAAJgFAFQgFAGgIAAQgHAAgFgGQgFgFAAgJIAAhaQAAgIAFgGQAFgFAHAAQAHAAAEAEQAEADABAGQAFgHAIgEQAIgDANAAQANAAALAFQALAGAGAKQAGALAAAMIAABCQAAAJgFAFQgFAGgHAAQgIAAgFgGgAJ8BWQgFgFAAgJIAAhaQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAABaQAAAJgFAFQgEAGgIAAQgIAAgEgGgAI9BWQgEgFAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgHAEgEQAEgEAHAAIAIAAIAAgVQAAgJAEgFQAFgFAIAAQAHAAAFAFQAFAFAAAJIAAAVIAKAAQAHgBAFAEQAEADAAAJQAAAIgEADQgFAEgHAAIgKAAIAABNQAAAJgFAFQgFAGgHAAQgIAAgFgGgAFsBWQgEgFAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgHAEgEQAEgEAHAAIAIAAIAAgVQAAgJAEgFQAFgFAIAAQAHAAAFAFQAFAFAAAJIAAAVIAKAAQAHgBAFAEQAEADAAAJQAAAIgEADQgFAEgHAAIgKAAIAABNQAAAJgFAFQgFAGgHAAQgIAAgFgGgACsBZQgEgCgDgDIhMhjIAAAAIAABYQgBAJgFAFQgEAFgIAAQgIAAgFgFQgFgFAAgJIAAiGQAAgJAFgFQAFgFAIAAIAIACQAEADADADIBMBjIAAAAIAAhYQAAgJAFgFQAFgFAIAAQAIAAAFAFQAFAFAAAJIAACGQAAAJgFAFQgFAFgIAAQgDAAgFgDgAipBWQgFgFAAgJIAAhaQAAgIAFgGQAEgFAIAAQAIAAAEAFQAFAGAAAIIAABaQAAAJgFAFQgEAGgIAAQgIAAgEgGgAjoBWQgFgFAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgHAFgEQAEgEAGAAIAIAAIAAgSQAAgTAKgKQAKgKAQAAQAGAAAGABQAFABAEAEQADADAAAGQAAAIgDADQgEAEgHAAIgFAAQgDABgCADQgBACAAAGIAAAPIAKAAQAIgBAFAEQAFADAAAJQAAAIgFADQgFAEgIAAIgKAAIAABNQAAAJgFAFQgFAGgIAAQgHAAgFgGgAkmBWQgFgFAAgJIAAhaQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAIIAABaQAAAJgFAFQgFAGgIAAQgHAAgFgGgAlkBWQgFgFAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgHAFgEQAEgEAGAAIAIAAIAAgVQAAgJAFgFQAFgFAHAAQAIAAAFAFQAEAFABAJIAAAVIAJAAQAHgBAFAEQAFADAAAJQAAAIgFADQgFAEgHAAIgJAAIAABNQgBAJgEAFQgFAGgIAAQgHAAgFgGgAmjBWQgFgFAAgJIAAg8QAAgMgGgEQgHgFgJAAQgLAAgGAGQgFAFAAAKIAAA8QAAAJgFAFQgFAGgIAAQgHAAgFgGQgFgFAAgJIAAhaQAAgIAFgGQAFgFAHAAQAHAAAEAEQAEADABAGQAFgHAIgEQAIgDANAAQANAAALAFQALAGAGAKQAGALAAAMIAABCQAAAJgFAFQgFAGgHAAQgIAAgFgGgAqpBWQgFgFAAgJIAAhaQAAgIAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAIIAABaQAAAJgFAFQgFAGgIAAQgHAAgFgGgAJ6g4QgFgFAAgJQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAFAAAIQAAAJgFAFQgGAGgIAAQgIAAgGgGgAirg4QgFgFAAgJQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAFAAAIQAAAJgFAFQgGAGgIAAQgIAAgGgGgAkng4QgGgFAAgJQAAgHAGgGQAFgFAIgBQAIABAGAFQAGAFAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGgAqqg4QgGgFAAgJQAAgHAGgGQAFgFAIgBQAIABAGAFQAGAFAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGg");
	this.shape_10.setTransform(236.4,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AknD8QgEgCgDgDQgDgDgBgEIAAg6QgHAFgIAEQgIADgIAAQgOgBgKgFQgLgFgHgKQgHgJgEgLQgEgMAAgMQAAgNADgMQADgMAIgKQAGgKALgGQAKgGAOAAQAKAAAJAEQAJAEAFAIQACgHAEgEQAEgDAHAAQAIgBAFADQAFACAAAIIAAB9IABgBIACgCQAEgDAEAAQAFgBADABQAGADADAGQADAGgCAGIgDAEIgDAEIggAbQgDADgFAAIgDABIgEgBgAlcBhQgGAGgDAIQgDAIAAAIQAAAIADAIQADAIAGAGQAGAFAJAAQAJAAAGgGQAHgFACgIQADgIAAgJQAAgJgDgHQgDgIgGgFQgGgFgJAAQgJAAgGAFgAGzDAQgJgCgHgEQgHgDgFgFQgFgFAAgGIACgGIAFgHQADgCAFAAQAHAAAFADIAKAFQAGADAIAAQAIAAADgCQADgDgBgFQAAgEgGgDIgPgHQgJgDgIgEQgJgFgGgHQgGgIgBgLQABgNAGgJQAGgJAKgFQAKgFAOAAIAOACQAIABAGADQAHADAEAFQAEAFAAAGQAAAGgEAFQgDAEgHABIgIgDIgLgFQgGgCgGgBQgEAAgEADQgDACAAAFQAAAFAGADQAGADAJADIASAIQAIAFAGAHQAGAHABAMQgBAMgGAJQgGAJgLAFQgLAFgPABQgHAAgIgCgACnC4QgOgJgIgPQgHgPAAgSQAAgSAIgPQAHgPAOgJQAOgKASAAQATAAAOAKQAOAJAHAPQAIAPAAASQAAASgHAPQgIAPgOAJQgOAJgTABQgSgBgOgJgAC4BhQgGAGgDAIQgDAIAAAIQAAAJADAIQADAHAGAGQAGAFAJAAQAKAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgIQgDgIgGgGQgGgFgKAAQgJAAgGAFgAhfC5QgNgIgHgPQgIgPAAgUQAAgTAIgPQAHgPANgJQANgJAQAAQAKAAAJAEQAIAEAGAIQABgGAFgEQAEgEAHAAQAIAAADADQAEAEABAFIAAAKIAABWIAAAJQgBAGgEADQgDAEgIAAQgIAAgEgEQgDgEgCgGQgHAHgIAEQgIAFgKAAQgQgBgNgIgAhNBhQgGAGgCAIQgDAIAAAIQAAAJADAIQACAHAHAGQAGAFAJAAQAJAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgIQgDgIgGgGQgGgFgJAAQgJAAgHAFgAjtC0QgOgOAAgXIAAg+QAAgJAFgFQAEgFAIAAQAIAAAEAFQAFAFAAAJIAAA9QAAAIADAFQADAFAGACQAFADAGAAQAFAAAFgDQAFgCAEgFQADgFAAgIIAAg9QAAgJAFgFQAEgFAIAAQAIAAAEAFQAFAFAAAJIAAA+QAAAXgOAOQgPANgbABQgcgBgPgNgAFoC7QgFgFAAgJIAAg8QAAgMgGgGQgHgGgJAAQgLAAgGAHQgFAHAAAKIAAA8QAAAJgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAhcQAAgJAFgFQAFgFAHAAQAHAAAEADQAEADABAGQAFgHAIgDQAIgEANAAQANAAALAGQALAFAGALQAGAKAAAPIAABCQAAAJgFAFQgFAFgHAAQgIAAgFgFgABeC7QgFgFAAgJIAAhcQAAgJAFgFQAEgFAIAAQAIAAAEAFQAFAFAAAJIAABcQAAAJgFAFQgEAFgIAAQgIAAgEgFgAAfC7QgEgFAAgJIAAhQIgIAAQgHAAgEgEQgEgEAAgHQAAgGAEgFQAEgEAHAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAAVIAKAAQAHAAAFADQAEAEAAAIQAAAIgEAEQgFADgHAAIgKAAIAABQQAAAJgFAFQgFAFgHAAQgIAAgFgFgAnhC/QgIAAgFgFQgFgFAAgIIAAiEQAAgJAEgGQAFgGAJAAIA8AAQAIAAAFAFQAEAFAAAGQAAAHgFAFQgEAFgIAAIgqAAIAAAjIAnAAQAJAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgJAAIgnAAIAAAlIAsAAQAIAAAFAFQAEAFAAAGQAAAHgEAEQgFAGgIAAgABcArQgFgGAAgIQAAgIAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAIQAAAIgFAGQgGAFgIABQgIgBgGgFgAr3gUQgFgEAAgGIABgFIACgFIAPglIgnhgIgBgEIAAgFQAAgEACgDQADgEAEgBQADgCAEAAQAGAAAFADQAEADACAGIAYBBIAahBQACgGAEgDQAFgDAGAAQADAAAEACQAEABACAEQADADAAAEIAAAFIgBAEIg6CQQgCAGgEAEQgFAEgGAAQgIAAgFgFgALQhJQgMgIgIgPQgHgPAAgUQAAgTAHgPQAIgPANgJQANgJAQAAQAJAAAJAEQAJAEAGAIQAAgGAFgEQAFgEAGAAQAIAAAEADQADAEABAFIABAKIAABWIgBAJQgBAGgDADQgEAEgIAAQgHAAgEgEQgEgEgBgGQgHAHgIAEQgIAFgKAAQgRgBgNgIgALjihQgGAGgDAIQgDAIAAAIQAAAJADAIQADAHAGAGQAGAFAKAAQAIAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgIQgDgIgFgGQgGgFgJAAQgKAAgGAFgAJQhJQgPgJgIgPQgIgPAAgTQAAgSAIgPQAIgPAOgJQAOgKASAAQAOAAAMAGQALAGAIAJQAIAJAFALQAEALAAALQAAAIgDAEQgEADgIAAIhKAAQACAJAEAFQAFAGAHADQAHACAIAAQAJAAAHgDIANgHQAGgDAEAAQAGAAAEAEQAEAFAAAFQAAAGgFAFQgFAFgIAFQgJAEgJACIgUADQgUgBgOgIgAKLiPQgCgLgHgHQgHgIgMAAQgMAAgHAIQgHAHgBALIA3AAIAAAAgAAjhKQgOgJgIgPQgHgPAAgSQAAgSAIgPQAHgPAOgJQAOgKASAAQATAAAOAKQAOAJAHAPQAIAPAAASQAAASgHAPQgIAPgOAJQgOAJgTABQgSgBgOgJgAA0ihQgGAGgDAIQgDAIAAAIQAAAJADAIQADAHAGAGQAGAFAJAAQAKAAAGgFQAGgGADgHQADgIAAgJQAAgIgDgIQgDgIgGgGQgGgFgKAAQgJAAgGAFgAiBhCQgIgCgIgEQgHgDgFgFQgEgFAAgGIABgGIAFgHQAEgCAEAAQAHAAAFADIALAFQAFADAIAAQAIAAADgCQADgDAAgFQAAgEgGgDIgPgHQgJgDgJgEQgJgFgGgHQgGgIAAgLQAAgNAGgJQAGgJAKgFQALgFAOAAIAOACQAHABAHADQAGADAFAFQAEAFAAAGQAAAGgEAFQgEAEgGABIgJgDIgLgFQgFgCgGgBQgFAAgDADQgEACAAAFQAAAFAGADQAGADAJADIASAIQAJAFAGAHQAGAHAAAMQAAAMgGAJQgGAJgLAFQgLAFgPABQgIAAgIgCgAnQhJQgPgJgIgPQgIgPAAgTQAAgSAIgPQAIgPAOgJQAOgKASAAQAOAAAMAGQALAGAIAJQAIAJAFALQAEALAAALQAAAIgDAEQgEADgIAAIhKAAQACAJAEAFQAFAGAHADQAHACAIAAQAJAAAHgDIANgHQAGgDAEAAQAGAAAEAEQAEAFAAAFQAAAGgFAFQgFAFgIAFQgJAEgJACIgUADQgUgBgOgIgAmViPQgCgLgHgHQgHgIgMAAQgMAAgHAIQgHAHgBALIA3AAIAAAAgAp7hCQgJgCgHgEQgHgDgFgFQgFgFAAgGIACgGIAFgHQADgCAFAAQAHAAAFADIAKAFQAGADAIAAQAIAAADgCQADgDgBgFQAAgEgGgDIgPgHQgJgDgIgEQgJgFgGgHQgGgIgBgLQABgNAGgJQAGgJAKgFQAKgFAOAAIAOACQAIABAGADQAHADAEAFQAEAFAAAGQAAAGgEAFQgDAEgHABIgIgDIgLgFQgGgCgGgBQgEAAgEADQgDACAAAFQAAAFAGADQAGADAJADIASAIQAIAFAGAHQAGAHABAMQgBAMgGAJQgGAJgLAFQgLAFgPABQgHAAgIgCgAtlhBIgTgEQgJgDgHgGQgGgFAAgIQAAgIAEgEQAEgFAIAAQAGAAAGACIANAFQAHACAIAAQAMAAAGgGQAHgGAAgJQAAgHgGgEQgGgEgJgCIgTgGQgLgDgJgFQgJgFgFgIQgGgJAAgNQAAgRAIgMQAIgNANgGQAOgHAQAAIANABQAIABAIADQAHADAGAEQAFAFAAAHQAAAHgEAGQgFAFgHAAQgFAAgEgCIgKgDQgGgCgHAAQgIAAgGAEQgFAEgBAHQABAGAFAEQAGADAJADIAUAGQAKADAJAGQAJAFAGAKQAFAKABAPQgBARgIANQgIAMgOAHQgOAGgRABIgRgBgANIhHQgFgFAAgJIAAheQAAgGADgEQACgEAFgCQADgBAFAAQAHgBAFAEQAEADABAIIAAAAQAFgHAGgEQAFgDAIAAQAHAAAFAEQAFAFAAAJQAAAGgDACQgDADgEACIgKAEIgKAFQgFADgDAEQgDAEAAAHIAAA1QAAAJgFAFQgFAFgIAAQgHAAgFgFgAIHhHQgFgFAAgJIAAg8QAAgMgGgGQgHgGgJAAQgLAAgGAHQgFAHAAAKIAAA8QAAAJgFAFQgFAFgIAAQgHAAgFgFQgFgFAAgJIAAhcQAAgJAFgFQAFgFAHAAQAHAAAEADQAEADABAGQAFgHAIgDQAIgEANAAQANAAALAGQALAFAGALQAGAKAAAPIAABCQAAAJgFAFQgFAFgHAAQgIAAgFgFgAGChHQgFgFAAgJIAAhcQAAgJAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAJIAABcQAAAJgFAFQgFAFgIAAQgHAAgFgFgACdhHQgFgFAAgJIAAhQIgIAAQgHAAgEgEQgEgEAAgHQAAgGAFgFQAEgEAGAAIAIAAIAAgSQAAgTAKgKQAKgKAQAAQAGAAAGACQAFABAEADQADAEAAAGQAAAHgDAEQgEADgHAAIgFABQgDAAgCADQgBADAAAGIAAAOIAKAAQAIAAAFADQAFAEAAAIQAAAIgFAEQgFADgIAAIgKAAIAABQQAAAJgFAFQgFAFgIAAQgHAAgFgFgAjLhHQgFgFAAgJIAAg8QAAgLgGgGQgFgHgJAAQgKAAgFAHQgGAGAAALIAAA8QAAAJgFAFQgEAFgIAAQgIAAgEgFQgFgFAAgJIAAg8QAAgLgGgGQgFgHgJAAQgLAAgFAHQgFAGAAALIAAA8QAAAJgFAFQgEAFgIAAQgIAAgEgFQgFgFAAgJIAAhcQAAgJAFgFQAEgFAIAAQAHAAAEADQAEADABAHQAGgHAIgEQAIgEAKAAQALAAAJAFQAJAEAHAJQAHgJAKgEQAKgFAJAAQAOAAALAGQAKAFAGAKQAGALAAAPIAABCQAAAJgFAFQgEAFgIAAQgIAAgEgFgAohhHQgFgFAAgJIAAhQIgIAAQgHAAgEgEQgEgEAAgHQAAgGAFgFQAEgEAGAAIAIAAIAAgVQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIIAAAVIAJAAQAHAAAFADQAFAEAAAIQAAAIgFAEQgFADgHAAIgJAAIAABQQgBAJgEAFQgFAFgIAAQgHAAgFgFgAErhDQgJAAgFgGQgEgFAAgJIAAiGQAAgJAFgFQAFgFAIAAQAHAAAFAFQAFAFABAJIAAB5IAqAAQAGAAAEACQAEADACAEQACAEAAAEQgBAGgEAFQgFAFgIAAgAGBjXQgGgGAAgIQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgFAFgJABQgIgBgFgFg");
	this.shape_11.setTransform(240.2,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AGlBOQgOgIgIgPQgIgPAAgTQAAgSAIgNQAHgPAOgKQAPgJASAAQAOAAAMAFQALAGAIAJQAIAKAEALQAFAJAAALQAAAHgEAEQgEAEgHAAIhKAAQACAIAEAGQAFAFAHADQAGADAJAAQAIAAAIgEIANgGQAFgEAFAAQAFAAAFAFQAEAEAAAGQAAAFgFAGQgFAFgJAEQgIAEgKADIgUACQgTAAgPgJgAHgAJQgBgKgHgHQgHgHgMAAQgMAAgHAHQgHAIgBAJIA2AAIAAAAgABYBOQgPgIgHgPQgJgPAAgTQAAgSAJgNQAHgPAOgKQAOgJASAAQAOAAAMAFQALAGAJAJQAHAKAFALQAEAJABALQgBAHgDAEQgEAEgIAAIhJAAQABAIAFAGQAFAFAGADQAHADAJAAQAIAAAHgEIANgGQAGgEAFAAQAFAAAFAFQADAEAAAGQAAAFgEAGQgGAFgIAEQgIAEgKADIgUACQgUAAgOgJgACTAJQgBgKgIgHQgHgHgMAAQgMAAgGAHQgIAIgBAJIA3AAIAAAAgAiEBJQgPgNAAgXIAAg9QAAgIAGgGQAEgFAHAAQAJAAAEAFQAFAGAAAIIAAA8QAAAHADAFQADAFAFADQAGACAFAAQAGAAAFgCQAFgDAEgFQADgFAAgHIAAg8QAAgIAEgGQAFgFAIAAQAHAAAFAFQAFAGAAAIIAAA9QAAAXgPANQgPAOgbAAQgbAAgPgOgAjfBVQgJgCgHgDQgIgEgFgFQgEgFAAgGIABgGIAGgGQADgDAFAAQAHAAAFADIAKAGQAFADAJAAQAIAAADgDQADgCgBgFQAAgFgGgDIgPgGQgJgDgIgFQgJgEgHgIQgFgHgBgKQABgMAFgJQAHgJAKgFQAKgFAOAAIAOABQAHACAHADQAHADAEAFQAEAEAAAHQAAAGgEAEQgDAFgHAAIgIgDIgLgEQgGgDgGAAQgEAAgEACQgDADgBAFQAAAEAHABQAGAEAIADIASAHQAJAFAGAHQAGAIABAMQgBALgGAJQgGAJgLAGQgLAFgPAAQgIAAgHgCgAlsBPQgMgJgIgPQgHgPAAgTQAAgTAHgOQAIgPAMgIQAOgJAPAAQAKAAAJAEQAIADAHAJQAAgHAFgEQAEgEAHAAQAIAAADAEQAEAEABAFIABAKIAABTIgBAKQgBAFgEAEQgDADgIABQgHAAgFgEQgDgEgBgHQgIAIgIAEQgHAEgLAAQgQAAgNgIgAlagHQgFAFgDAGQgDAIAAAJQAAAIADAIQACAIAHAFQAGAFAKAAQAIAAAGgFQAGgFADgIQADgIAAgIQAAgJgDgIQgDgGgGgFQgGgFgIgBQgKABgHAFgAnsBOQgPgIgIgPQgIgPAAgTQAAgSAIgNQAHgPAPgKQAOgJARAAQAPAAALAFQAMAGAIAJQAIAKAFALQAEAJAAALQAAAHgDAEQgFAEgHAAIhKAAQACAIAEAGQAFAFAGADQAIADAIAAQAJAAAHgEIANgGQAFgEAFAAQAFAAAFAFQAEAEAAAGQAAAFgFAGQgFAFgIAEQgJAEgJADIgVACQgTAAgOgJgAmyAJQgBgKgHgHQgHgHgNAAQgLAAgHAHQgHAIgCAJIA3AAIAAAAgAKiBQQgEgFAAgJIAAhNIgJAAQgGAAgEgEQgEgEgBgHQAAgHAFgEQAEgEAGAAIAJAAIAAgVQAAgJAEgFQAFgFAIAAQAHAAAFAFQAEAFABAJIAAAVIAKAAQAGgBAFAEQAFADAAAJQAAAIgFADQgFAEgGAAIgKAAIAABNQgBAJgEAFQgFAGgHAAQgIAAgFgGgAJkBQQgGgFAAgJIAAg8QAAgKgGgGQgHgFgJAAQgLAAgFAGQgGAHAAAIIAAA8QAAAJgFAFQgEAGgJAAQgHAAgEgGQgGgFAAgJIAAhaQAAgIAGgGQAEgFAHAAQAIAAADAEQAFADABAGQAFgHAHgEQAJgDAMAAQANAAALAFQALAGAGAKQAGALAAAMIAABCQAAAJgFAFQgFAGgHAAQgIAAgEgGgAFdBQQgFgFAAgJIAAg8QAAgIgGgHQgEgGgKAAQgKAAgFAGQgGAHAAAIIAAA8QAAAJgEAFQgFAGgIAAQgHAAgFgGQgFgFAAgJIAAg8QAAgIgFgHQgGgGgJAAQgLAAgEAGQgGAHAAAIIAAA8QABAJgGAFQgEAGgIAAQgHAAgFgGQgFgFAAgJIAAhaQAAgIAFgGQAFgFAHAAQAHAAAEAEQAEADABAGQAHgHAHgEQAIgDAKAAQALAAAJAEQAJAFAHAIQAIgIAJgFQALgEAIAAQAOAAALAFQAKAFAGALQAGAKABANIAABCQgBAJgFAFQgEAGgHAAQgJAAgEgGgAgJBQQgEgFAAgJIAAhcQgBgFADgEQADgEAEgCQAEgCACAAQAHAAAFADQAEADABAJIABAAQAEgIAGgDQAGgEAHAAQAHAAAFAFQAFAEAAAKQAAAFgDADQgCADgFABIgKAEIgKAFQgFADgDACQgDAFAAAGIAAA1QAAAJgFAFQgFAGgHAAQgGAAgFgGgAoyBRQgEgEgCgIIgNhgIgBAAIgdBjIgDAGQgCADgDACQgFADgGAAQgGAAgFgDQgDgCgCgDIgEgGIgchjIgBAAIgOBgQgBAIgEAEQgEAFgKAAQgHAAgFgFQgEgFgBgIIAAgCIAAgCIAXiDQAAgFADgEQAEgEAFgDQAFgDAHAAQAIAAAHAFQAGAGACAGIAcBdIABAAIAdhdQACgGAGgGQAHgFAIAAQAHAAAFADQAFADADAEQADAEABAFIAWCDIAAACIAAACQAAAIgEAFQgGAFgHAAQgIAAgFgFg");
	this.shape_12.setTransform(258.4,18.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AL9BwQgEgEgBgJIAAiOQABgIAEgGQAFgEAHAAQAIAAAEADQAEAEACAHQAFgIAJgEQAJgEAKAAQAOAAAKAGQAKAFAIAKQAGALAEAMQADALAAALQAAAMgDAMQgFAMgHAJQgIAJgKAGQgKAFgNABQgJgBgIgDQgIgDgHgGIAAArQAAAJgFAEQgEAGgJAAQgHAAgFgGgAMngaQgGAFgDAHQgDAIAAAGQAAAJADAJQACAHAHAGQAFAFAKAAQAJABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgGgGQgGgFgJgBQgJAAgGAGgAQdBCQgJgCgIgDQgGgEgFgEQgFgGAAgFIABgGIAFgHQAEgDAFABQAGAAAFACIALAGQAFADAJAAQAHAAADgCQADgDAAgFQAAgFgGgDIgPgGQgJgDgJgEQgJgFgGgGQgGgHAAgMQAAgMAGgJQAGgJAKgFQALgFAOAAIAOACQAIABAGADQAGADAFAFQAEAFAAAGQAAAGgEAFQgEAEgGAAIgJgCIgLgFQgFgCgGgBQgEAAgEACQgEADAAAFQABAFAFACQAHAEAJADIASAIQAIACAGAIQAGAHAAAMQAAALgGAJQgGAKgLAFQgLAFgPABQgIgBgHgCgAOZA8QgOgJgIgPQgIgPAAgTQAAgQAIgPQAIgPANgJQAOgKATAAQAOAAAMAFQALAGAIAJQAIAKAEALQAFALAAALQAAAGgEAEQgEADgHAAIhKAAQABAJAFAFQAFAGAHADQAGACAJAAQAJAAAHgDIANgHQAFgEAFABQAGgBAEAFQAEAEAAAGQAAAGgFAFQgFAFgJAFQgIAEgKACIgUADQgTgBgPgIgAPVgIQgCgMgHgGQgHgIgMAAQgMAAgHAIQgHAHgBALIA3AAIAAAAgAKFA8QgNgJgHgPQgIgPABgTQgBgRAIgQQAHgOAOgJQANgJAQAAQAJAAAJAEQAIADAHAJQAAgGAFgFQAEgDAHAAQAIAAAEADQADAEABAFIAAAKIAABUIAAAJQgBAGgDADQgEAEgIAAQgIAAgEgEQgDgEgBgGQgIAHgHAEQgJAFgJAAQgRgBgNgIgAKYgaQgHAGgCAHQgDAJAAAGQAAAIADAIQACAIAHAFQAGAGAJgBQAJABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgGgGQgFgFgKgBQgJABgGAFgAGMBDIgTgEQgJgCgHgGQgGgFgBgIQAAgIAFgFQAEgEAHAAQAHAAAFACIAOAEQAHADAIAAQAMAAAGgGQAHgGgBgJQAAgHgFgEQgHgCgIgDIgTgFQgLgDgJgFQgJgFgGgJQgFgIgBgNQABgRAHgMQAJgNANgGQANgHARAAIANABQAIABAHADQAIACAGAFQAFAFAAAHQAAAHgEAFQgFAFgIABQgEgBgFgCIgKgDQgFgBgHAAQgIAAgGADQgGAFAAAHQAAAGAGAEQAGADAJACIATAHQALACAIAHQAKAFAGAKQAFAJABANQgBASgIANQgIALgPAIQgNAGgRABIgRgCgAC6A/QgLgGgHgJQgHgJgFgMQgDgMAAgMQAAgLADgLQADgMAHgLQAHgKAKgFQALgGAOAAQAJAAAIADQAJADAHAGIAAgvQAAgIAFgGQAFgFAHAAQAIAAAEAFQAFAGABAIIAACRQgBAJgFAGQgEAFgIAAQgHAAgEgEQgEgEgCgGQgGAHgIAEQgIAEgKABQgNgBgKgFgADHgaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAJgBQAJAAAGgFQAGgGADgHQADgJAAgJQAAgGgDgIQgDgHgGgFQgGgGgJAAQgJABgGAFgAg5A7QgNgJgJgPQgHgPAAgSQAAgQAIgPQAHgPAOgJQAOgKATAAQASAAAMAKQAOAJAHAPQAJAPAAAQQgBASgHAPQgIAPgNAJQgNAJgSABQgTgBgOgJgAgogaQgGAGgDAHQgCAJAAAGQAAAIACAIQADAIAGAFQAGAGAKgBQAJABAGgGQAGgFADgIQABgIAAgIQAAgGgBgJQgDgHgFgGQgHgFgJgBQgKABgGAFgAiuBDIgTgEQgKgCgGgGQgGgFAAgIQgBgIAFgFQAEgEAIAAQAFAAAHACIANAEQAHADAIAAQAMAAAGgGQAGgGABgJQAAgHgHgEQgFgCgKgDIgTgFQgKgDgJgFQgJgFgFgJQgHgIABgNQgBgRAJgMQAIgNANgGQAOgHAQAAIANABQAHABAJADQAHACAFAFQAFAFABAHQAAAHgFAFQgEAFgHABQgFgBgEgCIgKgDQgGgBgHAAQgIAAgGADQgFAFgBAHQABAGAFAEQAGADAJACIAUAHQAJACAKAHQAIAFAGAKQAGAJAAANQAAASgIANQgIALgOAIQgOAGgRABIgRgCgAmAA/QgLgGgIgJQgHgJgDgMQgFgMAAgMQAAgLAEgLQADgMAIgLQAGgKALgFQAKgGAOAAQAJAAAIADQAJADAHAGIAAgvQAAgIAFgGQAFgFAHAAQAIAAAEAFQAGAGAAAIIAACRQAAAJgGAGQgEAFgIAAQgHAAgEgEQgEgEgCgGQgGAHgIAEQgJAEgIABQgOgBgKgFgAlzgaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAIgBQAKAAAGgFQAHgGACgHQADgJAAgJQAAgGgDgIQgDgHgGgFQgGgGgKAAQgIABgGAFgAqWA8QgMgJgHgPQgIgPAAgTQAAgRAIgQQAHgOANgJQANgJAQAAQAKAAAJAEQAIADAGAJQAAgGAGgFQAEgDAGAAQAJAAADADQAEAEABAFIAAAKIAABUIAAAJQgBAGgEADQgDAEgJAAQgHAAgEgEQgDgEgCgGQgHAHgIAEQgIAFgKAAQgQgBgOgIgAqDgaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAHAGAJgBQAIABAHgGQAFgFAEgIQACgIAAgIQAAgGgCgJQgEgHgFgGQgGgFgJgBQgKABgGAFgAunA8QgMgJgIgPQgHgPAAgTQAAgRAHgQQAIgOANgJQANgJAPAAQAKAAAJAEQAIADAHAJQAAgGAFgFQAFgDAGAAQAIAAAEADQADAEABAFIAAAKIAABUIAAAJQgBAGgDADQgEAEgIAAQgHAAgFgEQgDgEgBgGQgIAHgIAEQgHAFgLAAQgQgBgNgIgAuUgaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAKgBQAIABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgGgGQgGgFgIgBQgKABgGAFgAI9A+QgFgGAAgJIAAg5QAAgMgHgGQgGgGgJAAQgLAAgGAHQgFAGgBALIAAA5QAAAJgEAGQgFAFgIAAQgHAAgFgFQgFgGAAgJIAAiRQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGAAAIIAAAvIABAAQAFgHAKgDQAIgCAJAAQANAAAKAFQAMAGAFAKQAHALAAAPIAAA/QAAAJgGAGQgEAFgIAAQgIAAgEgFgABtA+QgFgGgBgJIAAhaQABgIAFgGQAEgEAHAAQAJAAAEAEQAFAGAAAIIAABaQAAAJgFAGQgEAFgJAAQgHAAgEgFgAA3A+QgFgGAAgJIAAiRQAAgIAFgGQAEgFAIAAQAIAAAFAFQAEAGAAAIIAACRQAAAJgEAGQgFAFgIAAQgIAAgEgFgAnOA+QgFgGAAgJIAAg5QAAgMgHgGQgGgGgKAAQgKAAgGAHQgFAGAAALIAAA5QAAAJgGAGQgEAFgIAAQgIAAgEgFQgFgGAAgJIAAhaQAAgIAFgGQAEgEAIAAQAHAAAEADQAEADABAGQAFgHAIgEQAIgDAMAAQAOAAAKAFQAMAGAFAKQAGALABAPIAAA/QgBAJgFAGQgEAFgHAAQgJAAgEgFgAsnA+QgEgGAAgJIAAhNIgIAAQgHAAgEgEQgEgEAAgHQAAgGAFgFQAEgEAGAAIAIAAIAAgVQAAgIAEgGQAFgFAIAAQAIAAAFAFQAEAGAAAIIAAAVIAKAAQAHAAAFADQAFAEgBAIQABAIgFAEQgFADgHAAIgKAAIAABNQAAAJgEAGQgFAFgIAAQgIAAgFgFgAvuA+QgFgGgBgJIAAiRQABgIAFgGQAEgFAHAAQAJAAAEAFQAFAGAAAIIAACRQAAAJgFAGQgEAFgJAAQgHAAgEgFgAxYA+QgEgFAAgJIAAiFQgBgHAFgFQAFgGAJgBIA+AAQAIABAEAFQADAFAAAGQAAAGgDAFQgEAGgIAAIgsAAIAAAjIAlAAQAIAAAEAEQAFAGAAAGQAAAHgFAFQgEAEgIAAIglAAIAAAzQgBAJgFAFQgFAFgHAAQgIAAgGgFgABrhQQgFgGgBgJQABgHAFgFQAGgGAHgBQAJABAFAGQAGAFAAAHQAAAJgFAGQgGAFgJAAQgHAAgGgFg");
	this.shape_13.setTransform(218.6,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AOBDCQgNgIgHgOQgHgNAAgRQAAgQAHgOQAHgOANgJQANgIAQAAQARAAANAIQANAJAHAOQAHAOAAAQQAAARgHANQgHAOgNAIQgMAJgSAAQgRAAgMgJgAOQBzQgFAEgDAIQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAIAAQAJAAAGgFQAFgFADgHQADgHAAgIQAAgIgDgHQgDgIgFgEQgGgFgJAAQgIAAgGAFgAKPDDQgMgIgHgNQgHgOAAgSQAAgSAHgNQAHgOAMgIQAMgIAPAAQAIAAAIADQAIAEAGAHQABgGAEgDQAEgEAGAAQAHAAAEADQADAEABAFIAAAJIAABOIAAAJQgBAFgDADQgEADgHABQgHgBgDgDQgEgEgBgGQgGAHgIAEQgHAEgJAAQgPAAgMgIgAKgBzQgGAEgCAIQgDAHAAAIQAAAIADAHQACAHAGAFQAFAFAJAAQAIAAAGgFQAFgFADgHQACgHAAgIQAAgIgCgHQgDgIgFgEQgGgFgIAAQgJAAgFAFgAExDCQgNgIgHgOQgHgNAAgRQAAgQAHgOQAIgOAMgJQANgIARAAQARAAANAIQAMAJAHAOQAIAOAAAQQAAARgHANQgHAOgNAIQgNAJgRAAQgRAAgNgJgAFBBzQgGAEgCAIQgDAHAAAIQAAAIADAHQACAHAGAFQAFAFAJAAQAIAAAGgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgIgGgEQgFgFgJAAQgJAAgFAFgACKDCQgNgIgHgOQgHgNAAgRQAAgQAHgOQAIgOAMgJQANgIARAAIALABIANADQAGACAEAEIADAEQABgFADgDQADgEAHAAIAHAAIAAgTQAAgIAEgFQAEgEAHAAQAHAAAFAEQAEAFAAAIIAAATIAJAAQAGAAAFADQAEADAAAIQAAAHgEAEQgFADgGAAIgJAAIAABJQAAAIgEAFQgFAEgHABQgHgBgEgEQgEgFAAgIIAAhJIgHAAQgHAAgEgEIgCgDIgBADQgBAEgDACQgDADgDAAIgIgCIgIgDQgEgBgGAAQgJAAgFAEQgGAFgDAHQgDAIAAAIQAAAIADAHQADAHAGAFQAGAFAIAAIAJgCIAJgDIAGgCQAGAAAEAEQADAEABAGQgBAGgEAEQgEAFgGACQgHADgGABIgLABQgRAAgNgJgAAKDDQgKgIgGgNQgHgOAAgSQAAgSAHgNQAGgOALgIQALgIAPAAQAJAAAIADQAIAEAFAHQABgGAEgDQAFgEAFAAQAIAAADADQADAEABAFIABAJIAABOIgBAJQgBAFgDADQgDADgIABQgGgBgEgDQgDgEgCgGQgGAHgHAEQgIAEgJAAQgPAAgMgIgAAbBzQgFAEgDAIQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAIAAQAJAAAFgFQAFgFADgHQADgHAAgIQAAgIgDgHQgCgIgGgEQgFgFgJAAQgIAAgGAFgAkGDDQgNgIgIgOQgHgNAAgSQAAgQAHgOQAHgOANgJQANgIARAAQANAAAKAFQALAFAHAIQAHAJAFAKQAEAKAAAKQAAAHgEAEQgDADgHAAIhEAAQABAIAFAFQAEAFAGADQAHACAHAAQAIAAAHgDIAMgGQAFgDAEgBQAFABAEAEQAEAEAAAFQAAAFgFAFQgEAFgIAEIgRAGQgJACgJAAQgSAAgNgIgAjQCDQgBgKgHgHQgGgHgLAAQgLAAgHAHQgGAHgBAKIAyAAIAAAAgAtrDGQgKgFgHgJQgHgIgDgLQgEgKAAgMQAAgLADgMQADgLAHgJQAGgJAKgFQAJgFANAAQAJAAAHACQAIADAGAGIAAgrQAAgIAFgFQAEgFAHAAQAHAAAFAFQAEAFAAAIIAACHQAAAIgEAFQgFAEgHABQgGgBgEgDQgEgDgCgHQgEAIgIADQgIAEgJAAQgMAAgJgFgAtfBzQgGAEgCAIQgDAHAAAIQAAAHADAIQACAHAGAFQAFAFAIAAQAJAAAGgFQAFgFADgIQACgHAAgIQAAgIgCgHQgDgHgFgFQgGgEgJAAQgIAAgFAFgAxpDDQgMgIgHgNQgHgOAAgSQAAgSAHgNQAHgOAMgIQAMgIAPAAQAIAAAIADQAIAEAGAHQABgGAEgDQAEgEAGAAQAHAAAEADQADAEABAFIAAAJIAABOIAAAJQgBAFgDADQgEADgHABQgHgBgDgDQgEgEgBgGQgGAHgIAEQgHAEgJAAQgPAAgMgIgAxYBzQgGAEgCAIQgDAHAAAIQAAAIADAHQACAHAGAFQAFAFAJAAQAIAAAGgFQAFgFADgHQACgHAAgIQAAgIgCgHQgDgIgFgEQgGgFgIAAQgJAAgFAFgAQyDFQgFgFAAgIIAAg3QAAgLgGgGQgGgFgIAAQgKAAgFAGQgGAGAAAKIAAA3QAAAIgEAFQgEAEgHABQgHgBgFgEQgEgFAAgIIAAhVQAAgIAEgEQAFgFAHAAQAGAAAEADQADADABAGQAFgHAHgDQAIgDALAAQAMAAAKAFQAKAFAFAJQAGAKAAANIAAA9QAAAIgEAFQgFAEgHABQgHgBgEgEgAM9DFQgEgFAAgIIAAhVQAAgIAEgEQAFgFAHAAQAHAAAEAFQAEAEABAIIAABVQgBAIgEAFQgEAEgHABQgHgBgFgEgAMFDFQgFgFAAgIIAAhJIgHAAQgHAAgDgEQgEgEAAgGQAAgGAEgEQAEgEAGAAIAHAAIAAgTQAAgIAFgFQAEgEAHAAQAHAAAEAEQAFAFAAAIIAAATIAJAAQAGAAAEADQAFADAAAIQAAAHgFAEQgEADgGAAIgJAAIAABJQAAAIgFAFQgEAEgHABQgHgBgEgEgAHjDFQgFgFAAgIIAAhVQAAgIAFgEQAEgFAHAAQAHAAAFAFQAEAEAAAIIAABVQAAAIgEAFQgFAEgHABQgHgBgEgEgAGZDFQgEgFAAgIIAAhWQAAgGACgDQADgEADgBQAEgCAEAAQAHAAAEADQAEADABAHQAEgHAGgDQAFgDAHAAQAGAAAFAEQAEAEABAJQgBAFgCACQgDADgEACIgJADIgJAFQgFACgDAEQgCAEAAAGIAAAxQgBAIgEAFQgEAEgHABQgHgBgFgEgAhlDFQgEgEAAgJIAAh7QAAgHAEgFQAFgFAIAAIA4AAQAHAAAEAEQAEAFAAAGQAAAGgEAEQgDAFgIAAIgoAAIAAAgIAiAAQAIAAAEAFQAEAEAAAGQAAAGgEAEQgEAFgIAAIgiAAIAAAwQAAAJgFAEQgFAFgHAAQgHAAgFgFgAlIDFQgFgFAAgIIAAg3QAAgKgFgGQgFgGgIAAQgJAAgFAGQgFAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAg3QAAgKgFgGQgFgGgIAAQgKAAgFAGQgEAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAhVQAAgIAFgEQAEgFAHAAQAGAAAEADQAEADABAGQAFgHAIgDQAHgDAJAAQAKAAAIAEQAJAEAGAIQAHgIAJgEQAJgEAIAAQANAAAKAFQAKAEAFAKQAGAJAAAOIAAA9QAAAIgFAFQgEAEgHABQgHgBgEgEgAoEDFQgEgFAAgIIAAhVQAAgIAEgEQAFgFAHAAQAHAAAEAFQAEAEABAIIAABVQgBAIgEAFQgEAEgHABQgHgBgFgEgApNDFQgFgFAAgIIAAhWQAAgGADgDQACgEAEgBQAEgCAEAAQAGAAAEADQAFADAAAHQAFgHAFgDQAFgDAIAAQAGAAAEAEQAFAEAAAJQAAAFgDACQgCADgFACIgJADIgJAFQgEACgDAEQgDAEAAAGIAAAxQAAAIgEAFQgFAEgHABQgHgBgEgEgArGDFQgFgEAAgJIAAh7QAAgIAFgFQAEgEAIAAIAnAAQARAAAMAGQANAHAHAMQAHALAAAQQAAAQgHAMQgHAMgNAGQgMAGgQAAIgYAAIAAAkQAAAJgFAEQgEAFgHAAQgIAAgEgFgAqqB3IAXAAQAKAAAGgGQAGgHAAgKQAAgKgGgHQgGgGgKAAIgXAAgAuzDFQgEgFAAgIIAAg3QAAgLgGgGQgGgFgJAAQgKAAgFAGQgFAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAhVQAAgIAFgEQAEgFAHAAQAGAAAEADQAEADABAGQAEgHAIgDQAHgDALAAQANAAAKAFQAJAFAGAJQAFAKABANIAAA9QgBAIgEAFQgEAEgHABQgHgBgFgEgAIWDIQgFAAgEgCQgEgDAAgFIABgFIACgEIAyhGIglAAQgGAAgEgEQgEgDAAgHQAAgHAEgDQAEgEAGAAIBIAAIAEABIAEADQACACAAAEIAAAFIgDAEIgyBHIAqAAQAGAAAEADQAEAEAAAGQAAAHgEAEQgEADgGAAgAM8BBQgFgGAAgHQAAgHAFgFQAFgFAIgBQAHABAFAFQAFAFAAAHQAAAHgFAGQgFAFgHAAQgIAAgFgFgAHiBBQgFgGgBgHQABgHAFgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFgAoFBBQgFgGAAgHQAAgHAFgFQAFgFAIgBQAHABAFAFQAFAFAAAHQAAAHgFAGQgFAFgHAAQgIAAgFgFgAYNgIQgEgEgBgGIABgEIACgFIASghQADgDAEgCQADgCADAAQAGAAAFAEQAEAEAAAGIAAAFIgDAEIgSAhQgCAEgEACQgEACgDAAQgGgBgEgEgAgwgIQgFgEAAgGIABgEIACgFIASghQACgDAEgCQAEgCADAAQAGAAAEAEQAFAEAAAGIgBAFIgCAEIgTAhQgCAEgEACQgDACgDAAQgGgBgEgEgAXNggQgHgCgHgDQgHgDgEgFQgEgEgBgGQAAgCACgDQACgEADgCQADgDAEAAQAGABAFACIAJAFQAGADAHAAQAHAAADgCQACgCAAgFQAAgEgFgDIgOgGIgQgHQgIgEgGgHQgFgHgBgKQAAgMAGgIQAFgIAKgFQAKgEAMAAIANABQAHABAGADQAGADAEAEQAEAFAAAFQAAAGgEAEQgDAEgGABIgIgDIgKgEIgKgDQgFAAgDACQgDACAAAFQAAAEAFADIAOAGIAQAHQAIAEAGAHQAGAHAAALQAAAKgGAJQgFAIgKAFQgLAFgNAAIgPgCgAUMgmQgNgIgIgOQgHgNAAgSQAAgQAHgOQAHgOANgJQANgIARAAQANAAAKAFQALAFAHAIQAHAJAFAKQAEAKAAAKQAAAHgEAEQgDADgHAAIhEAAQABAIAFAFQAEAFAGADQAHACAHAAQAIAAAHgDIAMgGQAFgDAEgBQAFABAEAEQAEAEAAAFQAAAFgFAFQgEAFgIAEIgRAGQgJACgJAAQgSAAgNgIgAVChmQgBgKgHgHQgGgHgLAAQgLAAgHAHQgGAHgBAKIAyAAIAAAAgASlgiQgIgDgFgIQgCAHgDADQgEADgHABQgHgBgEgEQgFgFAAgIIAAiHQAAgIAFgFQAEgFAHAAQAHAAAEAFQAFAFAAAIIAAArQAGgGAIgDQAIgCAIAAQANAAAJAFQAKAFAGAJQAHAJADALQADAMAAALQAAAMgDAKQgEALgHAIQgHAJgJAFQgKAFgMAAQgIAAgIgEgASjh3QgGAFgCAHQgDAHAAAIQAAAIADAHQACAIAGAFQAFAFAJAAQAIAAAGgFQAFgFADgHQACgIAAgHQAAgIgCgHQgDgIgFgEQgGgFgIAAQgJAAgFAEgANQgrQgOgMAAgVIAAg6QAAgIAFgEQAEgFAHAAQAHAAAEAFQAFAEAAAIIAAA5QAAAHADAEQADAFAEACQAFACAFAAQAGAAAEgCQAFgCADgFQADgEAAgHIAAg5QAAgIAEgEQAFgFAHAAQAHAAAEAFQAEAEABAIIAAA6QgBAVgNAMQgNANgaAAQgZAAgNgNgAIQgmQgNgIgIgOQgHgNAAgSQAAgQAHgOQAHgOANgJQANgIARAAQANAAAKAFQALAFAHAIQAHAJAFAKQAEAKAAAKQAAAHgEAEQgDADgHAAIhEAAQABAIAFAFQAEAFAGADQAHACAHAAQAIAAAHgDIAMgGQAFgDAEgBQAFABAEAEQAEAEAAAFQAAAFgFAFQgEAFgIAEIgRAGQgJACgJAAQgSAAgNgIgAJGhmQgBgKgHgHQgGgHgLAAQgLAAgHAHQgGAHgBAKIAyAAIAAAAgAhwggQgIgCgHgDQgGgDgFgFQgEgEAAgGQAAgCACgDQABgEADgCQADgDAFAAQAGABAEACIAKAFQAFADAHAAQAIAAACgCQADgCAAgFQAAgEgGgDIgNgGIgRgHQgIgEgFgHQgGgHAAgKQAAgMAFgIQAGgIAJgFQAKgEANAAIANABQAGABAGADQAHADADAEQAEAFAAAFQAAAGgDAEQgEAEgGABIgHgDIgKgEIgLgDQgEAAgEACQgDACAAAFQAAAEAGADIAOAGIAQAHQAIAEAGAHQAFAHAAALQAAAKgFAJQgGAIgKAFQgKAFgOAAIgOgCgAkxgmQgOgIgHgOQgHgNgBgSQABgQAHgOQAHgOANgJQAMgIARAAQANAAALAFQAKAFAIAIQAHAJAEAKQAEAKAAAKQAAAHgDAEQgEADgHAAIhDAAQABAIAEAFQAFAFAGADQAGACAIAAQAIAAAGgDIAMgGQAFgDAFgBQAFABAEAEQADAEAAAFQAAAFgEAFQgFAFgHAEIgRAGQgJACgJAAQgSAAgNgIgAj8hmQgBgKgGgHQgHgHgLAAQgLAAgGAHQgHAHgBAKIAyAAIAAAAgAmZgiQgIgDgFgIQgBAHgEADQgEADgGABQgHgBgFgEQgEgFAAgIIAAiHQAAgIAEgFQAFgFAHAAQAHAAAEAFQAEAFAAAIIAAArQAHgGAIgDQAHgCAJAAQAMAAAKAFQAKAFAGAJQAGAJADALQAEAMAAALQAAAMgEAKQgEALgGAIQgHAJgKAFQgKAFgMAAQgIAAgIgEgAmbh3QgFAFgDAHQgDAHAAAIQAAAIADAHQADAIAFAFQAGAFAIAAQAJAAAFgFQAGgFACgHQADgIAAgHQAAgIgDgHQgCgIgGgEQgFgFgJAAQgIAAgGAEgArugrQgNgMAAgVIAAg6QAAgIAEgEQAFgFAHAAQAHAAAEAFQAEAEAAAIIAAA5QABAHACAEQADAFAFACQAFACAFAAQAFAAAFgCQAFgCACgFQADgEAAgHIAAg5QAAgIAFgEQAEgFAHAAQAHAAAFAFQAEAEAAAIIAAA6QAAAVgNAMQgOANgZAAQgZAAgOgNgAwtgmQgOgIgHgOQgHgNgBgSQABgQAHgOQAHgOANgJQAMgIARAAQANAAALAFQAKAFAIAIQAHAJAEAKQAEAKAAAKQAAAHgDAEQgEADgHAAIhDAAQABAIAEAFQAFAFAGADQAGACAIAAQAIAAAGgDIAMgGQAFgDAFgBQAFABAEAEQADAEAAAFQAAAFgEAFQgFAFgHAEIgRAGQgJACgJAAQgSAAgNgIgAv4hmQgBgKgGgHQgHgHgLAAQgLAAgGAHQgHAHgBAKIAyAAIAAAAgAzYgnQgNgIgHgOQgHgNAAgRQAAgQAHgOQAIgOAMgJQANgIARAAQARAAANAIQAMAJAHAOQAIAOAAAQQAAARgHANQgHAOgNAIQgNAJgRAAQgRAAgNgJgAzIh2QgGAEgCAIQgDAHAAAIQAAAIADAHQACAHAGAFQAFAFAJAAQAIAAAGgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgIgGgEQgFgFgJAAQgJAAgFAFgAVxgkQgFgFAAgIIAAhWQAAgGADgDQACgEAEgBQAEgCAEAAQAGAAAEADQAFADAAAHQAFgHAFgDQAFgDAIAAQAGAAAEAEQAFAEAAAJQAAAFgDACQgCADgFACIgJADIgJAFQgEACgDAEQgDAEAAAGIAAAxQAAAIgEAFQgFAEgHABQgHgBgEgEgARLgkQgEgFgBgIIAAg3QAAgKgEgGQgFgGgJAAQgJAAgFAGQgFAGAAAKIAAA3QAAAIgEAFQgEAEgHABQgIgBgEgEQgEgFAAgIIAAg3QAAgKgFgGQgFgGgJAAQgKAAgEAGQgFAGAAAKIAAA3QAAAIgEAFQgEAEgHABQgHgBgFgEQgEgFAAgIIAAhVQAAgIAEgEQAFgFAHAAQAGAAAEADQADADABAGQAGgHAHgDQAIgDAJAAQAKAAAIAEQAIAEAGAIQAHgIAJgEQAKgEAIAAQANAAAKAFQAJAEAGAKQAFAJAAAOIAAA9QAAAIgEAFQgFAEgHABQgHgBgEgEgAMZgiQgEgCgCgDIhGhcIgBAAIAABSQAAAJgEAEQgFAFgHAAQgHAAgFgFQgFgEAAgJIAAh8QAAgJAFgEQAFgFAHAAQADAAAEACIAHAGIBFBdIABAAIAAhTQAAgJAFgEQAEgFAHAAQAIAAAEAFQAFAEAAAJIAAB8QAAAJgFAEQgEAFgIAAIgHgDgAHOgkQgFgFAAgIIAAg3QAAgKgFgGQgFgGgIAAQgJAAgFAGQgFAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAg3QAAgKgFgGQgFgGgIAAQgKAAgFAGQgEAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAhVQAAgIAFgEQAEgFAHAAQAGAAAEADQAEADABAGQAFgHAIgDQAHgDAJAAQAKAAAIAEQAJAEAGAIQAHgIAJgEQAJgEAIAAQANAAAKAFQAKAEAFAKQAGAJAAAOIAAA9QAAAIgFAFQgEAEgHABQgHgBgEgEgAESgkQgEgFAAgIIAAhVQAAgIAEgEQAFgFAHAAQAHAAAEAFQAEAEABAIIAABVQgBAIgEAFQgEAEgHABQgHgBgFgEgADJgkQgFgFAAgIIAAhWQAAgGADgDQACgEAEgBQAEgCAEAAQAGAAAEADQAFADAAAHQAFgHAFgDQAFgDAIAAQAGAAAEAEQAFAEAAAJQAAAFgDACIgHAFIgJADIgJAFQgEACgDAEQgDAEAAAGIAAAxQAAAIgEAFQgFAEgHABQgHgBgEgEgABQgkQgFgEAAgJIAAh7QAAgIAFgFQAEgEAIAAIAnAAQARAAAMAGQANAHAHAMQAHALAAAQQAAAQgHAMQgHAMgNAGQgMAGgQAAIgYAAIAAAkQAAAJgFAEQgEAFgHAAQgIAAgEgFgABshyIAXAAQAKAAAGgGQAGgHAAgKQAAgKgGgHQgGgGgKAAIgXAAgAjNgkQgEgFAAgIIAAhWQAAgGACgDQADgEADgBQAEgCAEAAQAHAAAEADQAEADABAHQAEgHAGgDQAFgDAHAAQAGAAAFAEQAEAEABAJQgBAFgCACQgDADgEACIgJADIgJAFQgFACgDAEQgCAEAAAGIAAAxQgBAIgEAFQgEAEgHABQgHgBgFgEgAnygkQgFgFAAgIIAAg3QAAgKgFgGQgFgGgIAAQgJAAgFAGQgFAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAg3QAAgKgFgGQgFgGgIAAQgKAAgFAGQgEAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAhVQAAgIAFgEQAEgFAHAAQAGAAAEADQAEADABAGQAFgHAIgDQAHgDAJAAQAKAAAIAEQAJAEAGAIQAHgIAJgEQAJgEAIAAQANAAAKAFQAKAEAFAKQAGAJAAAOIAAA9QAAAIgFAFQgEAEgHABQgHgBgEgEgAskgiQgEgCgDgDIhGhcIAAAAIAABSQAAAJgFAEQgEAFgIAAQgHAAgEgFQgFgEAAgJIAAh8QAAgJAFgEQAEgFAHAAQAEAAAEACIAGAGIBGBdIAAAAIAAhTQAAgJAFgEQAFgFAHAAQAHAAAFAFQAEAEAAAJIAAB8QAAAJgEAEQgFAFgHAAIgHgDgAxwgkQgEgFAAgIIAAiHQAAgIAEgFQAFgFAHAAQAHAAAEAFQAEAFABAIIAACHQgBAIgEAFQgEAEgHABQgHgBgFgEgA0cgkQgEgFAAgIIAAg3QAAgLgGgGQgGgFgJAAQgKAAgFAGQgFAGAAAKIAAA3QAAAIgFAFQgEAEgHABQgHgBgEgEQgFgFAAgIIAAiHQAAgIAFgFQAEgFAHAAQAHAAAEAFQAFAFAAAIIAAArIAAAAQAGgGAIgDQAIgDAHABQANAAAKAFQAJAFAGAJQAFAKABANIAAA9QgBAIgEAFQgEAEgHABQgHgBgFgEgA20gkQgGgFgCgGIgahVIAAAAIgaBVQgCAGgFAFQgGAEgIABQgKgBgFgFQgGgEgBgIIgch4IgBgDIAAgEQAAgGAEgEQAEgEAIgBQAHAAAFAFQAEAEABAHIATBeIAAAAIAdhhQACgGAEgDQAFgEAGAAQAGAAAFAEQAEADACAGIAdBhIAAAAIATheQABgHAFgEQAEgFAIAAQAHABAEAEQAEAEAAAGIAAAEIgBADIgcB4QgBAIgGAEQgFAFgJABQgJgBgFgEgAERioQgFgGAAgHQAAgHAFgFQAFgFAIgBQAHABAFAFQAFAFAAAHQAAAHgFAGQgFAFgHAAQgIAAgFgFg");
	this.shape_14.setTransform(174.5,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACsBwQgFgEAAgJIAAiOQAAgIAFgGQAFgEAHAAQAIAAAEADQAEAEACAHQAFgIAJgEQAJgEAKAAQAOAAAKAGQAKAFAHAKQAHALAEAMQADALAAALQAAAMgEAMQgEAMgHAJQgIAJgKAGQgLAFgNABQgIgBgIgDQgIgDgHgGIAAArQAAAJgFAEQgFAGgIAAQgHAAgFgGgADWgaQgGAFgDAHQgDAIAAAGQAAAJACAJQADAHAGAGQAGAFAKAAQAJABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgGgGQgGgFgJgBQgJAAgGAGgAttB1IgSgFQgJgDgGgFQgGgFgBgHQAAgEACgDQACgEAEgCQADgCADAAQAGAAAGADIAOAEQAHAEAKAAQANgBAIgGQAIgIABgNIAAgIIgBAAQgFAIgJAEQgJAFgMAAQgSgBgMgJQgLgKgGgOQgGgPAAgSQAAgQAHgOQAHgQANgJQAMgKASAAQAJAAAJAEQAIAEAGAIQABgHAFgEQAEgDAHAAQAIAAAEAEQAFAGAAAIIAABiQAAAVgIAOQgJAOgPAHQgOAHgUAAIgPgBgAtogaQgGAGgDAHQgDAIAAAGQAAAKADAHQADAJAGAEQAGAGAIgBQAKABAGgGQAGgFADgHQADgIAAgJQAAgGgDgIQgDgIgGgGQgGgFgKgBQgIABgGAFgAQoBCQgJgCgHgDQgHgEgFgEQgFgGAAgFIACgGIAFgHQADgDAFABQAHAAAFACIAKAGQAGADAIAAQAIAAADgCQADgDgBgFQAAgFgGgDIgPgGQgJgDgIgEQgJgFgGgGQgGgHgBgMQABgMAGgJQAGgJAKgFQAKgFAOAAIAOACQAIABAGADQAHADAEAFQAEAFAAAGQAAAGgEAFQgDAEgHAAIgIgCIgLgFQgGgCgGgBQgEAAgEACQgDADAAAFQAAAFAGACQAGAEAJADIASAIQAIACAGAIQAGAHABAMQgBALgGAJQgGAKgLAFQgLAFgPABQgHgBgIgCgAMcA7QgOgJgIgPQgHgPAAgSQAAgQAIgPQAHgPAOgJQAOgKASAAQATAAAOAKQAOAJAHAPQAIAPAAAQQAAASgHAPQgIAPgOAJQgOAJgTABQgSgBgOgJgAMtgaQgGAGgDAHQgDAJAAAGQAAAIADAIQADAIAGAFQAGAGAJgBQAKABAGgGQAGgFADgIQADgIAAgIQAAgGgDgJQgDgHgGgGQgGgFgKgBQgJABgGAFgAKBBCQgIgCgIgDQgHgEgFgEQgEgGAAgFIABgGIAFgHQAEgDAEABQAHAAAFACIALAGQAFADAIAAQAIAAADgCQADgDAAgFQAAgFgGgDIgPgGQgJgDgJgEQgJgFgGgGQgGgHAAgMQAAgMAGgJQAGgJAKgFQALgFAOAAIAOACQAHABAHADQAGADAFAFQAEAFAAAGQAAAGgEAFQgEAEgGAAIgJgCIgLgFQgFgCgGgBQgFAAgDACQgEADAAAFQAAAFAGACQAGAEAJADIASAIQAJACAGAIQAGAHAAAMQAAALgGAJQgGAKgLAFQgLAFgPABQgIgBgIgCgAIbBCQgIgCgIgDQgHgEgFgEQgEgGAAgFIABgGIAFgHQAEgDAEABQAHAAAFACIALAGQAFADAIAAQAIAAADgCQADgDAAgFQAAgFgGgDIgPgGQgJgDgJgEQgJgFgGgGQgGgHAAgMQAAgMAGgJQAGgJAKgFQALgFAOAAIAOACQAHABAHADQAGADAFAFQAEAFAAAGQAAAGgEAFQgEAEgGAAIgJgCIgLgFQgFgCgGgBQgFAAgDACQgEADAAAFQAAAFAGACQAGAEAJADIASAIQAJACAGAIQAGAHAAAMQAAALgGAJQgGAKgLAFQgLAFgPABQgIgBgIgCgAGYA8QgOgJgIgPQgIgPAAgTQAAgQAIgPQAHgPAOgJQAOgKASAAQAPAAALAFQAMAGAIAJQAIAKAEALQAFALAAALQAAAGgEAEQgEADgHAAIhKAAQABAJAFAFQAFAGAGADQAHACAJAAQAIAAAIgDIAMgHQAGgEAFABQAFgBAFAFQAEAEAAAGQAAAGgFAFQgFAFgJAFQgIAEgKACIgUADQgTgBgPgIgAHTgIQgBgMgHgGQgHgIgNAAQgLAAgHAIQgHAHgCALIA3AAIAAAAgAjVA7QgOgJgIgPQgHgPAAgSQAAgQAIgPQAHgPAOgJQAOgKASAAIANABIAOADQAGADAFAFQAFADAAAHIgCAIQgBADgDADQgDACgFAAIgIgBIgJgEQgEgCgGAAQgKABgGAFQgHAFgDAIQgDAIAAAHQAAAIAEAIQADAJAGAEQAHAGAJgBIAKgBIAJgEIAHgCQAGABAEAEQAFAFAAAGQAAAGgFAFQgFAEgHADQgHADgH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");
	this.shape_15.setTransform(222,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[]},1).to({state:[{t:this.shape_1}]},3).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},1).to({state:[{t:this.shape_3}]},3).to({state:[]},1).to({state:[{t:this.shape_4}]},3).to({state:[]},1).to({state:[{t:this.shape_5}]},3).to({state:[]},1).to({state:[{t:this.shape_6}]},3).to({state:[]},1).to({state:[{t:this.shape_7}]},3).to({state:[]},1).to({state:[{t:this.shape_8}]},3).to({state:[]},1).to({state:[{t:this.shape_9}]},3).to({state:[]},1).to({state:[{t:this.shape_10}]},3).to({state:[]},1).to({state:[{t:this.shape_11}]},3).to({state:[]},1).to({state:[{t:this.shape_12}]},3).to({state:[]},1).to({state:[{t:this.shape_13}]},3).to({state:[]},1).to({state:[{t:this.shape}]},3).to({state:[]},1).to({state:[{t:this.shape_14}]},28).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer 1
	this.instance = new lib.mcTopic_bg("single",1);
	this.instance.setTransform(178,31.3,1,1,0,0,0,-178.1,31.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#25AAE2").s().p("AzfDJIAAmRMAruAAAIAAGRgA1FDJQhTAAg6g6IgBgBQg7g7AAhTIAAAAQAAhRA7g8QA6g7BUAAIBlAAIAAGRg");
	this.shape_16.setTransform(201,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.2)").s().p("Az9AnIAAgWMAruAAAIAAAWgA1PAnQhTABg8g6QgKgKgIgLQA6A4BTAAIBlAAIAAAWg");
	this.shape_17.setTransform(204,38.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.2)").s().p("AlfAnIhRAAQhUABg8g6QgKgKgIgLQA7A4BSAAIBmAAIOyAAIAAAWg");
	this.shape_18.setTransform(296.6,38.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#25AAE2").s().p("AlBDJIhmAAQhSAAg7g6IgBgBQg7g7AAhTIAAAAQAAhRA7g8QA7g7BTAAIBmAAIOyAAIAAGRg");
	this.shape_19.setTransform(293.6,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#25AAE2").s().p("AyLDJIhmAAQhSAAg7g6IgBgBQg7g7AAhTIAAAAQAAhRA7g8QA7g7BTAAIBmAAMApGAAAIAAGRg");
	this.shape_20.setTransform(209.4,20.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.2)").s().p("AypAnIhRAAQhUABg8g6QgKgKgIgLQA7A4BSAAIBmAAMApGAAAIAAAWg");
	this.shape_21.setTransform(212.4,38.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#25AAE2").s().p("A0zDJIAAmRMAuVAAAIAAGRgA2ZDJQhSAAg7g6IgBgBQg7g7ABhTIAAAAQgBhRA7g8QA7g7BTAAIBmAAIAAGRg");
	this.shape_22.setTransform(192.6,20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.2)").s().p("A1RAnIAAgWMAuVAAAIAAAWgA2iAnQhUABg8g6QgJgKgJgLQA7A4BSAAIBmAAIAAAWg");
	this.shape_23.setTransform(195.6,38.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#25AAE2").s().p("AnBDJIhmAAQhSAAg7g6IgBgBQg7g7AAhTIAAAAQAAhRA7g8QA7g7BTAAIBmAAISyAAIAAGRg");
	this.shape_24.setTransform(280.8,20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.2)").s().p("AnfAnIhRAAQhUABg8g6QgKgKgIgLQA7A4BSAAIBmAAISyAAIAAAWg");
	this.shape_25.setTransform(283.8,38.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#25AAE2").s().p("AzSEtIgkAAIgJAAIhBAAIgaAAQhTAAg6g5IgCgCQg6g6AAhRIgBAAIAAjOIABAAQAAhQA6g6QA7g7BUAAMAt/AAAIAAJZg");
	this.shape_26.setTransform(198.8,30.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.2)").s().p("A1kAoQhVAAg7g6QgKgKgHgKQA6A3BSAAIAaAAIBBAAIAKAAIAjAAMAr4AAAIAAAXg");
	this.shape_27.setTransform(201.8,58.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#25AAE2").s().p("AuJEtIgiAAIhLAAIgaAAQhTAAg6g5IgCgCQg6g6gBhRIAAAAIAAjOIAAAAQABhQA6g6QA7g7BUAAMAjrAAAIAAJZg");
	this.shape_28.setTransform(231.7,30.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.2)").s().p("AwbAoQhUAAg7g6QgKgKgHgKQA6A3BSAAIAaAAIBLAAIAiAAMAhkAAAIAAAXg");
	this.shape_29.setTransform(234.8,58.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#25AAE2").s().p("AjlDJIhlAAQhTAAg6g6IgCgBQg6g7AAhTIAAAAQAAhRA6g8QA7g7BUAAIBlAAIL5AAIAAGRg");
	this.shape_30.setTransform(302.8,20.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.2)").s().p("AkDAnIhRAAQhUABg7g6QgKgKgIgLQA6A4BTAAIBlAAIL5AAIAAAWg");
	this.shape_31.setTransform(305.8,38.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#25AAE2").s().p("AlwDJIhlAAQhTAAg6g6IgCgBQg6g7AAhTIAAAAQAAhRA6g8QA7g7BUAAIBlAAIQPAAIAAGRg");
	this.shape_32.setTransform(289,20.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.2)").s().p("AmOAnIhRAAQhUABg7g6QgKgKgIgLQA6A4BTAAIBlAAIQPAAIAAAWg");
	this.shape_33.setTransform(292,38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#25AAE2").s().p("AxvEtIgpAAIhLAAIgaAAQhTAAg6g5IgCgCQg6g6gBhRIAAAAIAAjOIAAAAQABhQA6g6QA7g7BUAAMArFAAAIAAJZg");
	this.shape_34.setTransform(208.1,30.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.2)").s().p("A0IAoQhUAAg7g6QgKgKgIgKQA6A3BTAAIAaAAIBLAAIAqAAMAo3AAAIAAAXg");
	this.shape_35.setTransform(211.1,58.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#25AAE2").s().p("AuTDJIhlAAQhTAAg6g6IgCgBQg6g7AAhTIAAAAQAAhRA6g8QA7g7BUAAIBlAAMAhVAAAIAAGRg");
	this.shape_36.setTransform(234.3,20.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.2)").s().p("AuxAnIhRAAQhUABg7g6QgKgKgIgLQA6A4BTAAIBlAAMAhVAAAIAAAWg");
	this.shape_37.setTransform(237.3,38.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#25AAE2").s().p("AtaEtIghAAIhKAAIgbAAQhSAAg6g5IgCgCQg6g6gBhRIAAAAIAAjOIAAAAQABhQA6g6QA7g7BTAAMAiKAAAIAAJZg");
	this.shape_38.setTransform(236.6,30.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.2)").s().p("AvqAoQhUAAg7g6QgKgKgIgKQA6A3BTAAIAaAAIBLAAIAhAAMAgEAAAIAAAXg");
	this.shape_39.setTransform(239.7,58.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#25AAE2").s().p("ArFDJIhlAAQhTAAg6g6IgCgBQg6g7AAhTIAAAAQAAhRA6g8QA7g7BUAAIBlAAIa5AAIAAGRg");
	this.shape_40.setTransform(254.9,20.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.2)").s().p("ArjAnIhRAAQhUABg7g6QgKgKgIgLQA6A4BTAAIBlAAIa5AAIAAAWg");
	this.shape_41.setTransform(257.9,38.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#25AAE2").s().p("AxJDJIhlAAQhTAAg6g6IgCgBQg6g7AAhTIAAAAQAAhRA6g8QA7g7BUAAIBlAAMAnBAAAIAAGRg");
	this.shape_42.setTransform(216.1,20.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.2)").s().p("AxnAnIhRAAQhUABg7g6QgKgKgIgLQA6A4BTAAIBlAAMAnBAAAIAAAWg");
	this.shape_43.setTransform(219.1,38.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#25AAE2").s().p("A3aEtIg2AAIhKAAIgbAAQhTAAg6g5IgBgCQg6g6gBhRIgBAAIAAjOIABAAQABhQA6g6QA6g7BUAAMA21AAAIAAJZg");
	this.shape_44.setTransform(170.5,30.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.2)").s().p("A5/AoQhUAAg8g6QgJgKgIgKQA6A3BSAAIAbAAIBKAAIA2AAMA0aAAAIAAAXg");
	this.shape_45.setTransform(173.6,58.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#25AAE2").s().p("Aw8DJIAAAAIhlAAQhTAAg6g6IgCgBQg6g7gBhTIAAAAQABhRA6g8QA7g7BUAAIBlAAIAAAAMAmoAAAIAAGRg");
	this.shape_46.setTransform(217.3,20.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.2)").s().p("AxaAnIAAAAIhRAAQhUABg7g6QgLgKgHgLQA6A4BTAAIBlAAIAAAAMAmoAAAIAAAWg");
	this.shape_47.setTransform(220.3,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{startPosition:1}}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},4).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},3).to({state:[]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},3).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},3).to({state:[]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},3).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},3).to({state:[]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},3).to({state:[]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},3).to({state:[]},1).to({state:[{t:this.instance,p:{startPosition:0}},{t:this.shape_33},{t:this.shape_32}]},3).to({state:[]},1).to({state:[{t:this.instance,p:{startPosition:1}},{t:this.shape_35},{t:this.shape_34}]},3).to({state:[]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},3).to({state:[]},1).to({state:[{t:this.instance,p:{startPosition:1}},{t:this.shape_39},{t:this.shape_38}]},3).to({state:[]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},3).to({state:[]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},3).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_17}]},3).to({state:[]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},28).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.1,-63.9,305,237.1);


(lib.mcGameType = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD3BiQgSgLgKgTQgKgSAAgYQAAgWAKgRQAJgTASgLQARgNAXAAQASABAOAGQAOAIALALQAKAMAFANQAGAMAAAOQAAAJgFAGQgEAEgKAAIhcAAQABALAGAGQAGAIAJADQAIADALAAQALAAAJgFIAQgIQAHgEAGAAQAHAAAFAFQAFAGAAAIQAAAGgGAHQgHAGgKAGQgKAFgNADQgMADgMAAQgZgBgSgKgAFBALQgCgMgJgKQgJgIgPgBQgOAAgJAKQgJAJgCAMIBFAAIAAAAgAhEBjQgQgLgJgTQgKgSAAgZQABgYAJgRQAJgTARgKQAQgMAUAAQAMAAALAFQAIAFAIAKQABgIAGgFQAGgFAIAAQAKAAAEAFQAEAEABAHIABANIAABoIgBANQgBAFgEAFQgEAFgKABQgKgBgFgFQgEgEgCgJQgIAKgJAFQgKAFgMAAQgVAAgQgKgAgtgJQgHAHgEAHQgEAKAAALQAAAKAEAKQAEAKAHAHQAIAGAMABQALgBAHgGQAHgHACgKQAEgKAAgKQAAgLgEgKQgCgHgHgHQgHgHgLAAQgMAAgIAHgAiaBmQgFgFgCgLIgSh3IAAAAIgkB7IgEAIQgCADgFADQgFADgIABQgIgBgFgDQgFgDgDgDIgDgIIgkh7IgBAAIgSB3QgBALgFAFQgGAFgLABQgJgBgGgGQgGgFgBgLIAAgCIABgCIAcimQABgGAEgFQADgFAHgDQAGgEAIAAQALAAAIAHQAIAGADAIIAjB1IABAAIAkh1QACgIAIgGQAIgHAMAAQAIAAAGAEQAGADAEAFQAEAFABAGIAcCmIAAACIAAACQAAALgGAFQgGAGgJABQgMgBgFgFgABSBqQgHAAgFgEQgFgEAAgHQAAgEABgDIADgFIBDheIgyAAQgIABgGgGQgFgEAAgJQAAgKAFgEQAGgFAIAAIBiAAIAGABQADAAADADQACAEAAAFQABAEgCADIgDAGIhEBdIA5AAQAIABAGAFQAFAFAAAIQAAAKgFAEQgGAFgIABg");
	this.shape.setTransform(294.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(247.8,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AutCNQgGgHAAgKIAAixQAAgLAGgHQAGgGAKgBQAJAAAFAGQAFAEACAIQAHgJALgFQALgFAMAAQASAAANAIQANAHAJAMQAIAMAFAPQAEAQAAANQAAAPgFAPQgFAOgJAMQgKALgNAIQgNAGgQAAQgKAAgLgDQgKgEgJgHIAAA1QAAAKgGAHQgGAGgJAAQgKAAgGgGgAt5giQgHAHgEAKQgEAKAAAIQAAAKAEALQADAKAIAHQAHAGAMABQALgBAIgGQAHgHAEgKQAEgJAAgLQAAgIgEgKQgEgKgHgHQgIgGgLgBQgLABgIAFgAQKBTQgKgDgJgEQgJgEgGgHQgGgGAAgGQAAgFACgDQACgFAEgDQAEgEAGAAQAIAAAHAEIANAHQAHAEAKgBQAKAAAEgCQADgEAAgFQAAgGgIgEIgSgIQgLgEgMgGQgLgGgHgHQgIgJAAgPQAAgPAIgLQAHgMANgFQANgHASAAIARABQAJACAJAFQAIADAFAGQAFAGABAIQgBAHgEAHQgFAFgIAAQgEAAgHgDIgNgGQgIgDgHgBQgGAAgEADQgEAEAAAFQAAAGAHAFIATAHQALAFALAFQALADAIAKQAHAJABAPQgBAOgHAMQgIALgNAHQgOAHgTgBQgJAAgLgCgAK1BLQgQgLgKgTQgJgSAAgZQAAgWAJgTQAKgSAQgLQAQgLAUAAQAMAAALAEQALAGAHAJQABgHAGgFQAGgGAIAAQAKABAFAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgFAFgKAAQgJAAgFgFQgFgFgCgJQgIALgKAFQgKAEgNAAQgUABgQgLgALMghQgIAHgDAKQgEAKAAAIQAAALAEAKQADAKAIAGQAIAGALABQALgBAIgGQAHgGAEgKQADgKAAgLQAAgIgDgKQgEgKgHgHQgHgGgMgBQgMABgHAGgAHNBPQgNgIgKgLQgJgMgFgOQgFgPAAgPQAAgNAFgQQAEgPAJgMQAIgMANgHQANgIASAAQALAAALADQAKAFAJAHIAAg7QAAgLAGgGQAGgHAKAAQAJAAAGAHQAGAGAAALIAAC3QAAAKgGAHQgGAGgJABQgJAAgGgFQgFgEgCgKQgGALgLAFQgLAEgMAAQgQAAgNgGgAHdghQgHAHgEAKQgEAKAAAIQAAALAEAJQAEAKAHAHQAIAGALABQAMgBAHgGQAIgHADgKQAEgLAAgKQAAgIgEgKQgDgKgIgHQgHgFgMgBQgLABgIAGgAC2BLQgQgLgJgTQgKgSAAgZQABgWAJgTQAJgSARgLQAQgLAUAAQAMAAALAEQAKAGAIAJQABgHAGgFQAGgGAIAAQAKABAEAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgEAFgKAAQgKAAgFgFQgEgFgCgJQgIALgLAFQgKAEgMAAQgVABgQgLgADNghQgHAHgEAKQgEAKAAAIQAAALAEAKQAEAKAHAGQAIAGAMABQALgBAHgGQAIgGADgKQAEgKAAgLQAAgIgEgKQgDgKgIgHQgHgGgLgBQgMABgIAGgAAFBFQgQgRAAgeIAAhLQAAgLAGgHQAFgGAIgBQAKABAGAGQAGAHAAALIAABKQAAAJAEAHQAEAGAGADQAGADAIAAQAHAAAGgDQAHgDAEgGQADgHABgJIAAhKQAAgLAGgHQAGgGAJgBQAKABAGAGQAGAHAAALIAABLQAAAegTARQgSAQgiAAQgjAAgSgQgAi0BHQgXgPgNgZQgNgYgBgeQABggANgYQAMgZAYgOQAXgPAfAAQAXAAASAGQATAHALAJQALAKAAAKQAAAKgFAFQgFAGgIAAQgIAAgGgDIgLgIQgHgEgJgDQgJgDgOAAQgTgBgNAKQgMAKgHAPQgGAQAAASQAAASAGAOQAGAQANAKQAMAJAUAAQAMAAALgFQAMgEAIgLQAHgLABgOIgfAAQgJAAgGgGQgGgGAAgKQAAgJAGgFQAGgFAJgBIAzAAQAOAAAGAIQAHAGgBAPQAAAcgMAWQgMAXgVANQgWANgeAAQgfAAgXgOgAmzBKQgSgKgKgTQgKgSAAgZQAAgTAKgTQAJgUASgLQARgMAXAAQASAAAOAHQAOAHALAMQAKALAFAOQAGAOAAAOQAAAHgFAFQgEAEgKABIhcAAQABAKAGAHQAGAHAJAEQAIACALAAQALABAJgFIAQgIQAHgFAGAAQAHAAAFAGQAFAFAAAIQAAAHgGAHQgHAGgKAFQgKAFgNADQgMADgMAAQgZAAgSgLgAlpgKQgCgOgJgKQgJgJgPAAQgOAAgJAJQgJAKgCAOIBFAAIAAAAgAo9BKQgRgLgJgTQgKgSAAgYQAAgUAKgSQAKgUARgLQARgMAXAAIAQABIARAFQAIADAGAFQAGAFAAAIQAAAFgCAEQgCAFgEAEQgDACgGAAQgFAAgFgCIgLgDQgGgDgHAAQgMAAgIAHQgIAGgEAKQgEAKAAAJQAAAMAEAKQAEAJAJAGQAIAHALAAQAGAAAGgCIAMgFIAIgCQAIAAAFAGQAGAFAAAIQAAAIgGAGQgGAGgJADQgIADgJACIgPABQgXAAgSgLgArqBLQgQgLgKgTQgJgSAAgZQAAgWAJgTQAKgSAQgLQAQgLAUAAQAMAAALAEQALAGAHAJQABgHAGgFQAGgGAIAAQAKABAFAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgFAFgKAAQgJAAgFgFQgFgFgCgJQgIALgKAFQgKAEgNAAQgUABgQgLgArTghQgIAHgDAKQgEAKAAAIQAAALAEAKQADAKAIAGQAIAGALABQALgBAIgGQAHgGAEgKQADgKAAgLQAAgIgDgKQgEgKgHgHQgHgGgMgBQgMABgHAGgAwnBUQgMgBgMgEQgMgDgHgHQgIgGgBgLQABgJAFgGQAFgGAKgBQAHABAIADIAQAFQAJADAKABQAPgBAIgHQAIgHAAgLQgBgJgHgFQgHgDgLgEIgZgGQgMgEgMgHQgLgFgHgLQgHgLgBgRQABgVAKgQQAKgPARgHQARgJAUAAIAQABQAKACAJADQAKADAHAHQAGAFAAAJQAAAJgFAGQgFAHgKAAQgGAAgFgDIgNgEQgGgCgJAAQgKAAgIAFQgHAFAAAKQAAAHAHAEQAIAFALADIAYAIQANAEALAGQAMAIAHALQAHANAAARQAAAWgLAPQgKAPgRAJQgSAJgVgBIgVgBgAOtBNQgGgHAAgKIAAhKQAAgOgIgIQgIgHgMAAQgOAAgHAJQgHAHAAANIAABKQAAAKgGAHQgGAGgJABQgKgBgGgGQgGgHAAgKIAAhxQAAgLAGgHQAGgGAKgBQAIABAFAEQAFAEACAIQAGgJAKgFQAKgEAPAAQARAAAOAHQANAHAIANQAHANAAASIAABRQAAAKgGAHQgGAGgJABQgKgBgGgGgAJbBNQgGgHAAgKIAAhxQAAgLAGgHQAGgGAKgBQAJABAGAGQAGAHAAALIAABxQAAAKgGAHQgGAGgJABQgKgBgGgGgAFLBNQgGgHAAgKIAAh0QAAgHADgFQAEgFAFgCQAFgCAFgBQAJAAAGAFQAGADAAAKIABAAQAGgJAHgEQAHgEAKgBQAIAAAGAHQAHAFAAAMQAAAGgEAEQgDAEgGABIgNAFIgMAHQgGADgEAGQgEAFAAAIIAABBQAAAKgGAHQgGAGgJABQgKgBgGgGgAJahlQgHgHgBgKQABgKAHgHQAHgHAKAAQAKAAAGAHQAIAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(219.4,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AJXBuQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAGAHABAJQgBAKgGAHQgHAGgKAAQgJAAgHgGgAG5BuQgNgIgKgLQgJgMgFgOQgFgPAAgPQAAgPAFgQQAEgNAJgMQAIgMANgHQANgIASAAQALAAALADQAKAFAJAHIAAg7QAAgLAGgGQAGgHAKAAQAJAAAGAHQAGAGAAALIAAC3QAAAKgGAHQgGAGgJABQgJAAgGgFQgFgEgCgKQgGALgLAFQgLAEgMAAQgQAAgNgGgAHJgCQgHAFgEAKQgEAKAAAKQAAALAEAJQAEAKAHAHQAIAHALAAQAMAAAHgHQAIgHADgKQAEgLAAgKQAAgKgEgKQgDgKgIgFQgHgFgMgBQgLABgIAGgAESBpQgTgKgKgTQgKgSAAgZQAAgVAKgRQAKgUARgLQASgMAXAAQARAAAOAHQAPAHAKAMQAKALAGAMQAFAOAAAOQAAAJgEAFQgFAEgKABIhcAAQACAKAGAHQAGAHAIAEQAJACAKAAQALABAJgFIAQgIQAHgFAGAAQAHAAAFAGQAFAFABAIQgBAHgGAHQgGAGgKAFQgLAFgMADQgNADgMAAQgYAAgSgLgAFbATQgCgOgIgIQgJgJgPAAQgPAAgJAJQgJAIgCAOIBFAAIAAAAgADJBxQgFgEgFgGIg1hAIAAAAIAAA0QAAAKgGAHQgGAGgKABQgJgBgGgGQgGgHAAgKIAAi3QAAgLAGgGQAGgHAJAAQAKAAAGAHQAGAGAAALIAABjIAvgsQAFgFAFgCQAFgCAFgBQAIABAFAGQAFAFAAAIQAAAEgCAFQgCAEgEAEIgnAhIAzA7QADADABAEIABAHQAAAJgGAGQgFAFgJAAQgGAAgFgDgAgMBpQgRgLgKgTQgKgSAAgYQAAgWAKgQQAKgUARgLQAQgMAXAAIAPABIARAFQAJADAGAFQAFAFAAAIQAAAFgCAEQgBAFgEAEQgEACgFAAQgFAAgGgCIgLgDQgFgDgHAAQgNAAgIAHQgIAEgCAKQgEAKAAALQAAAMAFAKQACAJAIAGQAIAHAMAAQAFAAAHgCIAMgFIAIgCQAIAAAFAGQAFAFAAAIQAAAIgGAGQgFAGgJADQgJADgIACIgPABQgYAAgPgLgAi6BqQgQgLgJgSQgKgTAAgZQABgYAJgRQAJgSARgLQAQgLAUAAQAMAAALAEQAKAGAIAJQABgHAGgFQAGgGAIAAQAKABAEAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgEAFgKAAQgKAAgFgFQgEgFgCgJQgIALgLAFQgKAEgMAAQgVABgQgLgAijgCQgHAFgEAKQgEAKAAAKQAAALAEAKQAEAKAHAGQAIAHAMAAQALAAAHgHQAIgGADgKQAEgKAAgLQAAgKgEgKQgDgKgIgFQgHgGgLgBQgMABgIAGgApKBzQgMgBgMgEQgMgDgHgHQgIgGgBgLQABgJAFgGQAFgGAKgBQAHABAIADIAQAFQAJADAKABQAPgBAIgHQAIgHAAgLQgBgJgHgFQgHgFgLgEIgZgGQgMgEgMgHQgLgFgHgJQgHgLgBgRQABgVAKgQQAKgPARgHQARgJAUAAIAQABQAKACAJADQAKADAHAHQAGAFAAAJQAAAJgFAGQgFAHgKAAQgGAAgFgDIgNgEQgGgCgJAAQgKAAgIAFQgHAFAAAKQAAAHAHAEQAIAFALADIAYAIQANAEALAGQAMAGAHALQAHANAAATQAAAWgLAPQgKAPgRAJQgSAJgVgBIgVgBgAkUBsQgGgHAAgKIAAhMQAAgNgHgGQgGgIgMAAQgMAAgHAIQgHAGAAANIAABMQAAAKgGAHQgGAGgJABQgKgBgGgGQgGgHAAgKIAAhMQAAgNgHgGQgGgIgMAAQgNAAgHAIQgGAGAAANIAABMQAAAKgGAHQgGAGgJABQgKgBgGgGQgGgHAAgKIAAhxQAAgLAGgHQAGgGAKgBQAIABAFAEQAFAEACAIQAHgJALgFQAKgEAMAAQANAAAMAGQALAFAIALQAKgLAMgFQANgGALAAQASAAANAHQANAGAIANQAHANAAARIAABTQAAAKgGAHQgGAGgJABQgKgBgGgGgAJYAvQgGgGAAgKIAAhxQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJIAABxQAAAKgGAGQgGAFgKAAQgJAAgGgFg");
	this.shape_3.setTransform(264.8,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhjCKQgGgGAAgLIAAixQAAgLAGgGQAGgHAKAAQAJAAAEAFQAGAFACAIQAGgJALgFQALgFANAAQASAAAKAHQANAHAKANQAIAMAEAPQAFAPAAAOQAAAPgFAPQgFAOgKAMQgJALgNAHQgLAHgQAAQgKAAgLgEQgLgDgIgIIAAA1QAAALgGAGQgGAHgJAAQgKAAgGgHgAgvgkQgHAHgEAJQgEAKAAAKQAAAJAEALQADAKAIAHQAHAGAMABQALgBAHgGQAIgHACgKQADgKABgKQgBgIgDgKQgCgKgIgHQgHgHgLAAQgLAAgIAGgAEBBRQgKgDgJgEQgJgFgHgGQgFgGgBgHQAAgEADgEQACgEAEgEQAEgDAGAAQAIAAAGAEIAOAHQAHADAJAAQALAAADgDQAEgDAAgGQAAgGgIgDIgTgIQgKgEgMgGQgLgGgHgHQgIgJAAgPQAAgPAIgLQAHgMANgGQANgGASAAIAQABQAKACAIAEQAJAEAFAGQAFAGABAIQgBAHgFAGQgEAGgIAAQgFAAgGgDIgNgGQgIgDgHgBQgGAAgFADQgDADAAAGQgBAGAIAEIATAIQALAEALAGQALAEAHAJQAIAJAAAPQAAAOgIAMQgHALgNAHQgOAGgTAAQgKAAgKgCgABeBIQgTgKgJgTQgKgTAAgYQAAgUAKgTQAJgTASgLQARgMAXAAQASAAAOAHQAOAHAKALQAKAMAGAOQAFANABAOQgBAIgEAFQgFAEgJAAIhdAAQACALAGAHQAGAHAJADQAIADALAAQALAAAIgEIARgIQAHgFAFAAQAHAAAGAGQAEAFABAIQgBAHgFAGQgHAHgKAFQgKAFgNADQgNADgLAAQgZAAgSgLgACngMQgBgPgJgJQgJgJgPAAQgPAAgIAJQgKAJgCAPIBFAAIAAAAgAimBLQgGgHAAgLIAAhxQAAgLAGgGQAGgHAJAAQAKAAAGAHQAGAGAAALIAABxQAAALgGAHQgGAGgKABQgJgBgGgGgAlLBMQgHgHABgLIAAimQAAgLAFgGQAHgHALAAIA1AAQAWAAASAJQARAJAKAQQAJAQABAWQgBAWgJAQQgKAQgRAGQgSAJgVAAIggAAIAAAxQAAALgHAHQgGAGgKAAQgKAAgGgGgAkkgdIAeAAQAPAAAIgJQAIgJAAgNQAAgOgIgJQgIgJgPAAIgeAAgAinhnQgIgHAAgLQAAgJAIgHQAHgHAJAAQAKAAAHAHQAHAGAAAKQABALgIAHQgGAHgLAAQgJAAgHgHg");
	this.shape_4.setTransform(300.9,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AJ6COQgGgGAAgIIABgFIACgHIASguIgvh2IgCgFIAAgGQAAgFADgFQADgDAFgDQAEgCAFgBQAIAAAGAFQAFAEADAHIAdBPIAghPQADgHAFgEQAGgFAIAAQAEABAFACQAFADADADQADAFAAAFIAAAGIgCAFIhICyQgDAHgFAFQgFAFgIAAQgLAAgFgFgAspCOQgGgGAAgIIABgFIACgHIATguIguhyQgEAEgGABIgMAFIgNAHQgGADgDAGQgEAFAAAIIAABBQAAAKgGAHQgGAGgKABQgKgBgFgGQgGgHgBgKIAAh0QABgHADgFQADgFAFgCQAFgCAGgBQAJAAAFAFQAGADABAKIAAAAQAGgJAHgEQAIgEAKgBQAIAAAGAHIADADIAAgBQADgDAEgDQAFgCAFgBQAHAAAGAFQAFAEADAHIAeBPIAghPQACgHAGgEQAFgFAIAAQAFABAEACQAFADADADQADAFABAFIgBAGIgBAFIhJCyQgCAHgFAFQgGAFgHAAQgLAAgGgFgARnBLQgQgLgJgTQgKgSAAgZQABgWAJgTQAJgSARgLQAQgLAUAAQAMAAALAEQAKAGAIAJQABgHAGgFQAGgGAIAAQAKABAEAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgEAFgKAAQgKAAgFgFQgEgFgCgJQgIALgLAFQgKAEgMAAQgVABgQgLgAR+ghQgHAHgEAKQgEAKAAAIQAAALAEAKQAEAKAHAGQAIAGAMABQALgBAHgGQAIgGADgKQAEgKAAgLQAAgIgEgKQgDgKgIgHQgHgGgLgBQgMABgIAGgAHcBPQgNgIgKgLQgJgMgFgOQgFgPAAgPQAAgNAFgQQAEgPAJgMQAIgMANgHQANgIASAAQALAAALADQAKAFAJAHIAAg7QAAgLAGgGQAGgHAKAAQAJAAAGAHQAGAGAAALIAAC3QAAAKgGAHQgGAGgJABQgJAAgGgFQgFgEgCgKQgGALgLAFQgLAEgMAAQgQAAgNgGgAHsghQgHAHgEAKQgEAKAAAIQAAALAEAJQAEAKAHAHQAIAGALABQAMgBAHgGQAIgHADgKQAEgLAAgKQAAgIgEgKQgDgKgIgHQgHgFgMgBQgLABgIAGgACCBLQgQgLgJgTQgKgSAAgZQABgWAJgTQAJgSARgLQAQgLAUAAQAMAAALAEQAKAGAIAJQABgHAGgFQAGgGAIAAQAKABAEAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgEAFgKAAQgKAAgFgFQgEgFgCgJQgIALgLAFQgKAEgMAAQgVABgQgLgACZghQgHAHgEAKQgEAKAAAIQAAALAEAKQAEAKAHAGQAIAGAMABQALgBAHgGQAIgGADgKQAEgKAAgLQAAgIgEgKQgDgKgIgHQgHgGgLgBQgMABgIAGgAlABKQgSgKgKgTQgKgSAAgZQAAgTAKgTQAJgUASgLQARgMAXAAQASAAAOAHQAOAHALAMQAKALAFAOQAGAOAAAOQAAAHgFAFQgEAEgKABIhcAAQABAKAGAHQAGAHAJAEQAIACALAAQALABAJgFIAQgIQAHgFAGAAQAHAAAFAGQAFAFAAAIQAAAHgGAHQgHAGgKAFQgKAFgNADQgMADgMAAQgZAAgSgLgAj2gKQgCgOgJgKQgJgJgPAAQgOAAgJAJQgJAKgCAOIBFAAIAAAAgAyVBLQgQgLgKgTQgJgSAAgZQAAgWAJgTQAKgSAQgLQAQgLAUAAQAMAAALAEQALAGAHAJQABgHAGgFQAGgGAIAAQAKABAFAFQAEAEABAHIABAMIAABoIgBANQgBAGgEAFQgFAFgKAAQgJAAgFgFQgFgFgCgJQgIALgKAFQgKAEgNAAQgUABgQgLgAx+ghQgIAHgDAKQgEAKAAAIQAAALAEAKQADAKAIAGQAIAGALABQALgBAIgGQAHgGAEgKQADgKAAgLQAAgIgDgKQgEgKgHgHQgHgGgMgBQgMABgHAGgAVgBNQgGgHAAgKIAAhKQgBgOgIgIQgIgHgMAAQgNAAgHAJQgHAHAAANIAABKQAAAKgGAHQgGAGgKABQgJgBgGgGQgGgHAAgKIAAhxQAAgLAGgHQAGgGAJgBQAJABAFAEQAFAEABAIQAGgJAKgFQALgEAPAAQARAAANAHQANAHAIANQAIANAAASIAABRQAAAKgGAHQgGAGgKABQgJgBgGgGgAQRBPQgFgGgCgKIgSh4IAAAAIgkB7IgEAIQgCAEgFADQgFADgIAAQgIAAgFgDQgFgDgDgEIgDgIIgkh7IgBAAIgSB4QgBAKgFAGQgGAFgLAAQgJAAgGgGQgGgGgBgKIAAgCIABgDIAcilQABgGAEgFQADgFAHgDQAGgEAIgBQALABAIAHQAIAGADAIIAjB1IABAAIAkh1QACgIAIgGQAIgHAMgBQAIABAGAEQAGADAEAFQAEAFABAGIAcClIAAADIAAACQAAAKgGAGQgGAGgJAAQgMAAgFgFgAF7BNQgGgHAAgKIAAhKQgBgOgIgIQgIgHgMAAQgNAAgHAJQgHAHAAANIAABKQAAAKgGAHQgGAGgKABQgJgBgGgGQgGgHAAgKIAAhxQAAgLAGgHQAGgGAJgBQAJABAFAEQAFAEABAIQAGgJAKgFQALgEAPAAQARAAANAHQANAHAIANQAIANAAASIAABRQAAAKgGAHQgGAGgKABQgJgBgGgGgAAlBOQgGgHAAgKIAAhBIhcAAIAABBQAAAKgHAHQgGAGgKAAQgKAAgGgGQgGgHAAgKIAAipQAAgMAGgFQAGgHAKAAQAKAAAGAHQAHAFAAAMIAAA/IBcAAIAAg/QAAgMAGgFQAHgHAKAAQAJAAAHAHQAGAFAAAMIAACpQAAAKgGAHQgHAGgJAAQgKAAgHgGgAmbBNQgGgHAAgKIAAhKQAAgOgIgIQgIgHgMAAQgOAAgHAJQgHAHAAANIAABKQAAAKgGAHQgGAGgJABQgKgBgGgGQgGgHAAgKIAAi3QAAgLAGgGQAGgHAKAAQAJAAAGAHQAGAGAAALIAAA7IABAAQAHgJALgDQALgDAKAAQARAAAOAHQANAHAIANQAHANAAASIAABRQAAAKgGAHQgGAGgJABQgKgBgGgGgApMBNQgGgHAAgKIAAhiIgKAAQgJAAgFgFQgFgFAAgJQAAgIAFgFQAGgGAIAAIAKAAIAAgaQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKIAAAaIAMAAQAJAAAGAFQAFAEABAKQgBAKgFAEQgGAFgJAAIgMAAIAABiQAAAKgGAHQgGAGgKABQgJgBgGgGgAwABNQgGgHgBgKIAAh0QABgHADgFQADgFAFgCQAFgCAGgBQAJAAAFAFQAGADABAKIAAAAQAGgJAHgEQAIgEAKgBQAIAAAGAHQAGAFABAMQgBAGgDAEQgEAEgGABIgMAFIgNAHQgGADgDAGQgEAFAAAIIAABBQAAAKgGAHQgGAGgKABQgKgBgFgGgAzyBOQgGgHAAgKIAAhBIhfAAIAABBQAAAKgGAHQgGAGgKAAQgKAAgGgGQgHgHAAgKIAAipQAAgMAHgFQAGgHAKAAQAKAAAGAHQAGAFAAAMIAAA/IBfAAIAAg/QAAgMAGgFQAGgHAKAAQAKAAAGAHQAGAFABAMIAACpQgBAKgGAHQgGAGgKAAQgKAAgGgGg");
	this.shape_5.setTransform(192.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.instance = new lib.mcGameType_bg("single",2);
	this.instance.setTransform(203,21.3,1,1,0,0,0,-152.5,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(215.5,0,140,42.6);


// stage content:



(lib.Title_Canvas = function() {
	this.initialize();

	// Buttons
	this.pbGo = new lib.pbGo();
	this.pbGo.setTransform(822,510);

	// Content
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B6A57").s().p("A15ArQgJgFgHgKQgFgJgBgNQABgKAFgJQAHgKAJgGQAKgFAMgBQAMABAKAFQAJAGAGAKQAGAJAAAKQAAANgGAJQgGAKgJAFQgKAHgMAAQgMAAgKgHgA12gYQgIAGgFAIQgFAIAAAIQAAALAFAIQAFAIAIAGQAIAEALAAQALAAAHgEQAJgGAFgIQAFgIAAgLQAAgIgFgIQgFgIgJgGQgHgEgLAAQgLAAgIAEgAWDAwIAAgPIANAAIAAAPgAVnAwIAAgLQgEAGgHACQgFADgHAAQgLAAgIgFQgJgFgFgHQgEgIAAgJQgBgKAFgFQAFgJAIgEQAJgEAKAAQAHAAAGACQAGACAFAEIAAgmIAMAAIAABggAVCgEQgFADgEACQgDAGAAAHQAAAGADAFQAEAGAFADQAGADAIAAQAGAAAFgDQAGgEADgFQADgFAAgGQAAgHgDgFQgEgDgFgDQgGgDgGgBQgIABgFADgAUSAwIgEgBIgEgCQgDgCgBgDQgCgDAAgFIAAgnIgMAAIAAgLIAMAAIAAgeIAMAAIAAAeIAOAAIAAALIgOAAIAAAnQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAEAAIAFgBIADgBIAAAKIgCABIgDACIgFACgAS+AwIAAhgIAMAAIAABUIAkAAIAAAMgAR/AwIAAgPIAMAAIAAAPgAQ7ArQgIgFgFgHQgEgIgBgJQABgKAEgFQAFgIAIgEQAIgFAKAAQAKAAAIAFQAIAEAEAIQAGAHAAAMIg8AAQABAFAEAEQADAFAFACQAFADAGAAQAGAAAEgCQAFgCAEgEIAOAAQgEAFgEAFQgGAEgFACQgHADgHAAQgKAAgIgFgARlAHQgDgHgGgDQgGgEgKAAQgIAAgGAFQgGACgDAHIAwAAIAAAAgAQRAwIgEgBIgEgCQgCgCgCgDQgCgDABgFIAAgnIgNAAIAAgLIANAAIAAgeIALAAIAAAeIAPAAIAAALIgPAAIAAAnQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAIAFAAIAEgBIAEgBIAAAKIgCABIgEACIgEACgAOyAwIAAhgIAaAAQASAAAJAHQAIAHAAAQQAAAJgEAHQgDAFgIADQgHADgMAAIgQAAIAAAngAO9gBIAPAAQAJAAAEgBQAFgCADgEQACgEAAgGQAAgHgCgDQgCgEgDgCQgDgCgFAAIgMgBIgLAAgAN1AwIAAgjQAAgIgCgFQgDgDgFgDQgDgCgGAAQgIAAgGAFQgEADAAALIAAAlIgMAAIAAhCIAMAAIAAAHQADgEAFgCQAFgBAGAAQAIAAAIADQAGAEAEAHQADAFAAAMIAAAjgAMAArQgJgFgEgHQgEgIgBgKQABgJAEgGQAFgHAIgEQAIgFAKAAQALAAAHAFQAJAEAEAHQAEAGABAKQgBAJgEAIQgEAHgJAFQgHAEgKABQgLgBgIgEgAMFgEQgFADgDACQgDAFAAAIQAAAGAEAFQADAGAFADQAGADAGAAQAIAAAEgDQAGgDACgFQAEgGAAgGQAAgHgEgFQgDgDgFgDQgGgDgHAAQgGAAgGADgALVAwIAAhCIAMAAIAABCgAK3AwIgEgBIgEgCQgDgCgBgDQgCgDAAgFIAAgnIgNAAIAAgLIANAAIAAgeIAMAAIAAAeIAOAAIAAALIgOAAIAAAnQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAEAAIAFgBIADgBIAAAKIgCABIgDACIgFACgAKGAwIAAgLQgFAGgGACQgFADgIAAQgKAAgJgFQgIgEgFgHQgFgHABgKQgBgLAFgFQAFgIAIgEQAIgFALAAQAHAAAGACQAGACAFAGIAAgKIAMAAIAABCgAJhgEQgFADgEADQgCAFgBAHQABAGACAGQAEAFAFADQAGADAHAAQAHAAAFgDQAFgDADgFQAEgGAAgGQAAgHgEgFQgDgDgFgDQgGgEgGAAQgHAAgGAEgAINArQgJgFgEgHQgFgIAAgJQAAgKAFgFQAEgIAJgEQAIgFAKAAQAMAAAJAGQAKAFAEAKIgNAAQgDgEgHgDQgFgEgHAAQgHAAgFAEQgGADgDADQgEAFAAAHQAAAHAEAEQADAGAGADQAGADAGAAQAHAAAFgDQAFgDAGgGIAMAAQgEAIgFAGQgGAEgGACQgGACgHABQgLAAgIgFgAHjAwIAAgIQgDAEgFABQgEACgHABQgJgBgGgDQgHgDgEgHQgDgHAAgMIAAghIALAAIAAAhQAAAMAFAFQAFAFAIAAQAGAAAEgCQAEgDADgFQACgEAAgJIAAggIAMAAIAABCgAGZAwIAAgLQgFAGgGACQgFADgHAAQgLAAgJgFQgIgFgFgHQgEgIgBgJQAAgKAFgFQAFgJAIgEQAJgEAJAAQAIAAAGACQAGACAFAEIAAgmIAMAAIAABggAF0gEQgGADgDACQgDAGAAAHQAAAGADAFQAEAGAFADQAGADAIAAQAGAAAGgDQAFgEADgFQAEgFgBgGQABgHgEgFQgDgDgGgDQgFgDgIgBQgGABgGADgAEgAwIAAhgIAzAAIAAALIgnAAIAAAfIAlAAIAAAKIglAAIAAAgIAnAAIAAAMgADjAwIAAgkQAAgMgFgCQgFgGgIAAQgGAAgEACQgEADgDADQgCAEAAAHIAAAlIgMAAIAAhgIAMAAIAAAlQAEgEAFgCQAEgBAGAAQAJAAAHADQAHAEADAHQAEAFAAALIAAAkgAB5AtQgGgDgEgFQgEgFAAgHIANAAQABAEACADQACACAEABIAIACIAIgBIAFgDQADgCAAgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgFgDIgKgDIgJgEIgFgBIgDgCQgEgCgCgEIgCgGQABgFADgEQADgFAGgCQAHgCAHAAQAIAAAFACQAHACADAFQADAEABAFIgOAAQAAgCgCgCIgFgEIgGgBQgGAAgDABQgDABgBADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIABABIAEAEIAIACIACABIAFACIAIACQAGABAFAEQAEADAAAHQABAGgDAEQgFAFgGADQgGADgJAAQgJAAgHgDgABRAwIAAhCIALAAIAABCgAAzAwIAAgLQgEAGgGACQgGADgHAAQgKAAgJgFQgIgFgDgHQgFgIAAgJQAAgKAEgFQAEgJAIgEQAIgEAKAAQAIAAAFACQAHACAEAEIAAgmIANAAIAABggAAOgEQgFADgDACQgDAGgBAHQABAGADAFQADAGAGADQAGADAHAAQAGAAAGgDQAFgEADgFQAEgFAAgGQAAgHgEgFQgDgDgGgDQgFgDgHgBQgHABgGADgAgfAwIAAgjQgBgIgBgFQgDgDgFgDQgDgCgGAAQgIAAgGAFQgEADAAALIAAAlIgMAAIAAhCIAMAAIAAAHQADgEAFgCQAFgBAGAAQAIAAAIADQAGAEAEAHQADAFAAAMIAAAjgAiTArQgIgFgFgHQgEgIgBgJQABgKAEgFQAFgIAIgEQAIgFAKAAQAKAAAIAFQAIAEAFAIQAEAHAAAMIg6AAQAAAFADAEQAEAFAFACQAFADAGAAQ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");
	this.shape.setTransform(861,724.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,201,7,0.902)").s().p("AMeCKQgYgOgNgZQgOgZAAggQAAgdANgYQAOgZAXgQQAXgPAegBQAYAAATAKQATAJAOAQQANAPAIASQAHARAAATQAAAMgGAHQgGAGgNAAIh7AAQACAOAIAJQAIAJALAFQAMAFANgBQAPAAAMgGQAMgFAJgGQAKgGAIABQAJAAAHAHQAHAIAAAJQAAAJgIAJQgJAJgOAGQgOAIgQADQgRAFgQAAQggAAgZgPgAOAAWQgCgTgMgKQgLgMgVAAQgTAAgMAMQgMALgCASIBbAAIAAAAgADjCKQgVgOgNgYQgMgZAAghQAAggANgXQAMgZAWgOQAVgPAbgBQAQABAPAGQAOAHAKANQABgLAIgHQAIgGAKAAQAOAAAGAGQAGAHABAIIABARIAACLIgBARQgBAIgGAHQgGAGgOABQgMgBgGgGQgGgHgDgLQgLANgOAHQgOAGgQABQgbgBgWgOgAECgGQgKAHgFAOQgFANAAAOQAAAOAFAOQAFANAKAIQAKAIAQABQAPgBAKgIQAKgIAFgNQAEgOAAgOQAAgOgEgNQgFgOgKgHQgKgJgPAAQgQAAgKAJgAgiCFQgfgUgRggQgSgiAAgpQAAgpASghQARggAfgUQAfgTAngBQAeABAZAIQAZAIAPANQAOANABAOQgBANgGAIQgHAGgLABQgKgBgHgEIgQgKQgIgFgNgEQgMgFgTAAQgZAAgPANQgRAMgIAWQgJAUAAAXQAAAYAJAVQAIAVARAMQAOANAaABQAQgBAPgGQAQgGAKgOQAKgOABgWIgpAAQgNgBgHgHQgIgIAAgNQAAgKAIgIQAIgGAMgBIBEAAQATAAAIAKQAIAJAAASQAAAngQAeQgQAegdASQgdARgoABQgnAAgfgUgAKlCOQgIgJAAgPIAAhkQAAgRgJgJQgJgLgQAAQgQAAgJALQgIAJgBARIAABkQAAAPgIAJQgIAIgMABQgNgBgIgIQgIgJAAgPIAAhkQAAgRgJgJQgJgLgQAAQgRAAgJALQgIAJAAARIAABkQAAAPgIAJQgIAIgMABQgNgBgIgIQgIgJAAgPIAAiXQAAgPAIgJQAIgIANAAQALAAAHAFQAGAGACALQAKgMAOgGQANgHAQAAQATAAAPAIQAPAHALAOQANgOAQgHQARgIAPAAQAXABASAIQASAJAKARQAJASABAXIAABuQgBAPgIAJQgHAIgNABQgNgBgIgIgAkXCOQgIgJAAgPIAAiXQAAgPAIgJQAIgIANAAQAMAAAIAIQAIAJAAAPIAACXQAAAPgIAJQgIAIgMABQgNgBgIgIgAlxCOQgIgJAAgPIAAhkQAAgSgLgKQgKgKgRABQgRAAgKALQgJAJAAARIAABkQAAAPgIAJQgIAIgNABQgNgBgIgIQgIgJAAgPIAAiXQAAgPAIgJQAIgIANAAQALAAAHAFQAHAGABAKQAJgMANgFQAOgHAUAAQAXAAASAKQARAJAKARQALASAAAWIAABuQAAAPgIAJQgIAIgNABQgNgBgIgIgApOCOQgIgJgBgPIAAiXQABgPAIgJQAHgIANAAQANAAAIAIQAIAJAAAPIAACXQAAAPgIAJQgIAIgNABQgNgBgHgIgAqjCQQgHgIgCgNIgXiiIgBAAIgwCmIgFAKQgDAGgHADQgGAEgLABQgLgBgHgEQgGgDgEgGIgEgKIgwimIgBAAIgYCiQgCANgHAIQgHAGgPABQgMgBgIgHQgIgIgBgOIAAgDIABgDIAljdQABgHAFgIQAGgGAIgFQAIgFALAAQAPAAALAJQALAJADALIAvCcIABAAIAvicQAEgLAKgJQALgJAPAAQALAAAJAFQAIAFAFAGQAFAIACAHIAlDdIAAADIAAADQAAAOgIAIQgIAHgMABQgQgBgHgGgAkZhhQgJgJgBgOQABgNAJgJQAJgJAOAAQANAAAJAJQAKAJAAANQAAAOgJAJQgKAKgNAAQgOAAgJgKgApQhhQgKgJAAgOQAAgNAKgJQAJgJANAAQAOAAAJAJQAJAJABANQgBAOgJAJQgJAKgOAAQgNAAgJgKg");
	this.shape_1.setTransform(907.8,74.2);

	this.instance = new lib.mcGameType("single",0);
	this.instance.setTransform(846.3,126.8,1,1,0,0,0,177.7,21.3);

	this.instance_1 = new lib.mcTopic("single",40);
	this.instance_1.setTransform(846.7,186.6,1,1,0,0,0,178.1,31.3);

	this.instance_2 = new lib.mcGrade("single",18);
	this.instance_2.setTransform(834.6,388.4,1,1,9,0,0,105.2,168.3);

	// BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUBxIAAhsQADgTgXgBQgLAAgIAEIAAB8IguAAIAAjiIAuAAIAABOQAPgIAQAAQA5AFgDArIAABsg");
	this.shape_2.setTransform(532.1,569);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBGIALgeQAKAIASACQAQgCACgQQAAgOgSgHQgngRADgZQADgtAwgEQAcAAAQALIgKAbQgHgHgRgBQgQABAAAPQABAOARAHQApARgEAcQgCAsg4AFQgdgCgQgJg");
	this.shape_3.setTransform(517.4,572.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBvIAAibIArAAIAACbgAgXhZQABgUAWgBQAWABABAUQgBAUgWABQgWgBgBgUg");
	this.shape_4.setTransform(507.3,569.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDAjQAEhNA/gDQAOABAJADIAAhJIAtAAIAADaQgUALgoAAQhIgBgDhPgAgWAhQgBA0AgACQAKAAAEgDIAAhlQgFgBgHgBQgjADACAxg");
	this.shape_5.setTransform(494.6,569.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBPIAAhqQADgVgYgCQgMAAgGADIAAB+IguAAIAAiSQAXgKAqgBQBGAEgEAtIAABsg");
	this.shape_6.setTransform(478.3,572.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDAAQAChMBCgEQBFACgDBQIhcANQAFAjAgAAQAbgCAOgHIAKAdQgSAJgnACQhHgEgChNgAAAg1QgcAAABAwIA1gIQgBgogXAAIgCAAg");
	this.shape_7.setTransform(461.9,572.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBOIgyibIAvAAIAXBYIABAYIAGgYIAWhYIAqAAIgyCbg");
	this.shape_8.setTransform(446.8,572.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/AgQAIg2BMgCIAAgGQAAgXgZACQgYABgRAIIgJgZQARgLAngCQA6gCAEA7IAABdQgVAJgpACQhBAAAAgxgAgVAeQAAAaAaAAQAKAAAGgDIAAg4QgoABgCAgg");
	this.shape_9.setTransform(431.4,572.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8AAQgBhaBOgLQAeAAAOALIgKAcQgHgGgQAAQgqAJADA7QgCA6ApAIQANgBAJgGIALAfQgQAMgcAAQhOgLABhbg");
	this.shape_10.setTransform(417.1,570.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBxIAAjiIAtAAIAADig");
	this.shape_11.setTransform(397.9,569);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVBxIAAjiIArAAIAADig");
	this.shape_12.setTransform(389.6,569);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag/AgQAIg2BMgCIAAgGQAAgXgZACQgYABgQAIIgKgZQARgLAngCQA6gCAFA7IAABdQgWAJgpACQhBAAAAgxgAgVAeQAAAaAaAAQAJAAAHgDIAAg4QgoABgCAgg");
	this.shape_13.setTransform(377.4,572.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUBxIAAhsQACgTgXgBQgKAAgJAEIAAB8IgtAAIAAjiIAtAAIAABOQAPgIARAAQA4AFgCArIAABsg");
	this.shape_14.setTransform(361.5,569);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBGIALgeQALAIARACQARgCABgQQABgOgTgHQgngRAEgZQACgtAwgEQAbAAARALIgKAbQgHgHgQgBQgRABAAAPQABAOARAHQApARgEAcQgCAsg3AFQgdgCgRgJg");
	this.shape_15.setTransform(346.8,572.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoBPIAAiSQAXgNA6ADIgIAfQgRgHgNAGIAAB+g");
	this.shape_16.setTransform(336.2,572.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhAAgQAJg2BNgCIAAgGQgBgXgZACQgXABgSAIIgJgZQARgLAogCQA4gCAGA7IAABdQgVAJgpACQhDAAAAgxgAgVAeQAAAaAbAAQAJAAAHgDIAAg4QgpABgCAgg");
	this.shape_17.setTransform(322.1,572.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA7BjIgFg8IgFg0IAAgYQgCABgFAXIgQA0QgOAvgDANIgWAAQgFgMgNgwIgRg0IgFgYIgBAAQABABgBAXQgBAHgEAtIgFA8IgnAAIAUjFIAvAAIAeBuIAGAWIAAAAIAEgWIAhhuIAtAAIAWDFg");
	this.shape_18.setTransform(302.9,570.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBbQAAgGADgGIASgtIgvhyQgCgDAAgHQAEgRAQgBQAPAAAGAPIAcBPIAehPQAFgPAQAAQAQABADARQABAHgDADIhECtQgFAOgOACQgWgCAAgQg");
	this.shape_19.setTransform(276.4,575.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfBeQgEARgRAAQgUgBgBgWIAAiwQABgWAUgCQAUACABAWIAAA4QARgPAUAAQBEAMAABFQgDBFhCAKQgWAAgOgTgAgfAfQgBAmAgAGQAggHAAgjQAAgjgggFQgfAEAAAig");
	this.shape_20.setTransform(261.4,569.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBZQgYgPgOgXQgOgYAAgbQAAgaAOgZQAOgYAXgNQAZgOAaAAQAbAAAZAOQAYANANAYQAOAZAAAaQAAAbgOAYQgNAXgYAPQgZANgbAAIgCABQgZAAgXgOgAg4g5QgZAYAAAhQABAVAKATQALASAUAMQATAKAUAAQAVAAATgKQAUgMAKgSQAMgTAAgVQgBghgXgYQgYgYgiAAQggABgYAXgAAXA5IgDgIIAAgMQAAgOgCgDQgBgEgDgDIgNAAIgRAAIAAAsIgZAAIAAhwIAwAAQAQAAAHAEQAIADAEAIQAFAHAAALIgDAPQgDAFgHADQAFAEADAFQACADABAMQAAAVABAEIAGAHgAgQgGIATAAQAMAAADgEQAFgDAAgHQAAgHgFgDQgDgEgMAAIgTAAg");
	this.shape_21.setTransform(687.6,352.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ApNE/QgOgCACgBIAAgNQAHkJCriuQCsivD/gHQDqAGCkCSQCkCSAkDdQgDANgGgCIh9AAQgiish/hrQh/hviwgCQimACh8BkQh7BggpCZQADAMAGgCIBFAAQAoh9BlhMQBmhMCFgDQCQADBoBVQBpBSAfCCQgCANgHgCIiGAAQhCiaivgLQhsAChIBIQhJBJgCBtIAAANQgFADgFAAg");
	this.shape_22.setTransform(259.6,387.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AmUCmQiliWghjgQAEgOAFADIB9AAQAgCwB/BvQCABwCzADQCngDB8hkQB8hiAoiaQgDgNgGACIhEAAQgoB+hlBOQhmBPiHACQiTgDhphYQhqhWgdiFQADgOAGADICGAAQA+CkC2ALQBsgDBIhIQBHhIAEhtIAAgQQAEgEAGABIFIAAQAOACgCABIAAAQQgHEIirCuQisCvj/AHQjsgFimiVg");
	this.shape_23.setTransform(260.4,448);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhkAAQAIhbBcgJQBdAJAIBbQgIBdhdAIQhcgIgIhdg");
	this.shape_24.setTransform(600.8,199);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ACkBoQgHi7idABQibgBgJC7IAAJvIlJAiIAA3PIFJgiIAAHlQBvhkCWgDQDcAEBbB9QBZB9gEDNIAAKGIlJAig");
	this.shape_25.setTransform(504.2,206.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AjPEoIAAmUIitAAIBEkSIBpAAIAAjXIFHh/IAAFWIC8AAIAAESIi8AAIAAF7QABBQA0AdQAzAeBHgBQA2gCAggLIheFGIgyADIgGAAQmzAAgDmtg");
	this.shape_26.setTransform(400.1,212.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhaJCQi5gChhhsQhfhqgCixQAFinBvhcQBwheCigCQCBADBxBQQADgQgBgTQAAhug1glQg0glhnADQiVACiJBAIAvklQBBgWBRgMQBRgOBEAAQDOgBB8BaQB7BcAEDHIAALVIkgAiIAAhsIgEAAQhbB+iZAAIgYgBgAiiC1QAOCLCVAEQCUgEAOiLQgOiKiUgEQiVAEgOCKg");
	this.shape_27.setTransform(307.1,226.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AFvA8IgDAAIl3KxIgDAAIlXquIgEAAIh7KuIlrgyIGI2nIAEAAIHDNqIHQtqIAEAAIF8WnIllAyg");
	this.shape_28.setTransform(170.8,209.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AjzJLQhogkhxhZICzjyQBrBpCWACQAuABA2gRQA1gRAEg9QgKhIiCgRQiDgSiChFQiEhEgKjlQAGjDCBhdQCAheCyABQDfAKClCZIjDDGQhSg+hpgEQgjgBgnANQgpAOgDAsQALBYCBARQCCASCEBAQCDBCAKDoQgHDAiIBkQiIBli0AAIgGAAQiKAAhmgjg");
	this.shape_29.setTransform(631.1,418);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhmJlQjtgFhhiGQhhiHAEjeIAAq1IFjgkIAALBQAHDKCngBQCpABAJjKIAAqdIFhgkIAASSIlGAkIAAixIgFAAQg3ByhWAqQhRAohJAAIgHAAg");
	this.shape_30.setTransform(515.1,418.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AlqG3QipiwgDjzQAFkiCwiuQCxitEegEQDmACC3COIi4D/QhmhRh/AAQh4ADhTBNQhTBNgEB8QACCKBOBcQBPBcCJAEQB+ACBjhWIDCD7QhNBMh6AmQh8AlhmAAQkwgIioivg");
	this.shape_31.setTransform(392,418);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnIsSIM1AAIBcFiIoQAAIAAFNIF/AAIAAFIIl/AAIAAIcImBATg");
	this.shape_32.setTransform(143.1,399.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABSgpQgFhehNABQhNgBgEBeIAAEzIijARIAAojICXgRIAABRIABAAQBFhYBGAHQDSANgMDXIAAE/IijARg");
	this.shape_33.setTransform(647,241.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhQkEIChgRIAAIaIihARg");
	this.shape_34.setTransform(601.2,242.3);

	this.instance_3 = new lib.Symbol33("synched",0);
	this.instance_3.setTransform(85.6,130.4,1.897,1.897);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D4D4D4").s().p("AgyBaQgYgPgOgYQgOgXAAgcQAAgaAOgYQAOgYAXgNQAZgPAaAAQAbAAAZAPQAYANANAYQAOAZAAAZQAAAcgOAXQgNAYgYAPQgZANgbAAIgCAAQgZAAgXgNgAg4g3QgZAXABAgQgBAWALASQALATAUALQATAKAUAAQAVAAATgKQAUgLAKgTQAMgSgBgWQABgggYgXQgYgagiAAQggAAgYAag");
	this.shape_35.setTransform(687.6,353.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D4D4D4").s().p("AASA4IgCgIIgBgKQAAgPgBgEIgFgFQgDgCgHAAIgUAAIAAAsIgZAAIAAhvIAwAAQAQAAAHADQAIAEAEAHQAGAIAAALQgBAJgDAFQgDAGgHAEIAIAHQACAFACAMIABAXQABAEAEADgAgVgHIAVAAQAKAAAEgDQAEgDAAgHQAAgIgEgDQgEgCgKAAIgVAAg");
	this.shape_36.setTransform(688.1,353.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#808080").s().p("AgMAEIAAgHIAaAAIAAAHg");
	this.shape_37.setTransform(691.3,359.3);

	this.instance_4 = new lib.Symbol32("synched",0);
	this.instance_4.setTransform(85.6,130.4,1.897,1.897);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#808080").s().p("AgLAEIAAgHIAXAAIAAAHg");
	this.shape_38.setTransform(684.6,359.3);

	this.instance_5 = new lib.Symbol31("synched",0);
	this.instance_5.setTransform(85.6,130.4,1.897,1.897);

	this.instance_6 = new lib.Symbol30("synched",0);
	this.instance_6.setTransform(85.6,130.4,1.897,1.897);

	this.instance_7 = new lib.Symbol29("synched",0);
	this.instance_7.setTransform(85.6,130.4,1.897,1.897);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#808080").s().p("AgIAFIAAgJIARAAIAAAJg");
	this.shape_39.setTransform(686.8,355);

	this.instance_8 = new lib.Symbol28("synched",0);
	this.instance_8.setTransform(85.6,130.4,1.897,1.897);

	this.instance_9 = new lib.Symbol27("synched",0);
	this.instance_9.setTransform(85.6,130.4,1.897,1.897);

	this.instance_10 = new lib.Symbol26("synched",0);
	this.instance_10.setTransform(85.6,130.4,1.897,1.897);

	this.instance_11 = new lib.Symbol25("synched",0);
	this.instance_11.setTransform(85.6,130.4,1.897,1.897);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#808080").s().p("AgJAEIAAgHIATAAIAAAHg");
	this.shape_40.setTransform(686.9,350.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F1F2F2").s().p("AgyBZQgYgOgOgYQgOgXAAgcQAAgaAOgYQAOgYAXgNQAZgOAaAAQAbAAAZAOQAYANANAYQAOAYAAAaQAAAcgOAXQgNAYgYAOQgZANgbAAIgCAAQgZAAgXgNgAg4g4QgZAYAAAgQABAWAKASQALASAUAMQATALAUAAQAVAAATgLQAUgMAKgRQAMgTAAgWQgBgggXgYQgYgYgiAAQggABgYAXgAAXA5IgDgIIAAgLQAAgPgCgDQgBgEgDgCQgDgBgKAAIgRAAIAAAsIgZAAIAAhwIAwAAQAQAAAHAEQAIAEAEAIQAFAHAAAKIgDAQIgKAIQAFADADAGQACADABALQAAAVABAEIAGAHgAgQgGIATAAQAMAAADgEQAFgDAAgHQAAgHgFgDQgDgDgMAAIgTAAg");
	this.shape_41.setTransform(687.6,353.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D4D4D4").s().p("AmUCmQiliWghjgQADgOAHADIB8AAQAgCwB/BvQCABwCzADQCngDB9hkQB7hiAoiaQgDgNgGACIhEAAQgnCAhmBMQhlBPiIACQiSgDhqhYQhphWgeiFQAEgOAEADICHAAQA/CkC1ALQBrgDBIhIQBJhIADhtIAAgQQAEgEAGABIFHAAQAQACgDABIAAAQQgHEIirCuQisCvj/AHQjsgGimiUg");
	this.shape_42.setTransform(260.4,448);

	this.instance_12 = new lib.Symbol24("synched",0);
	this.instance_12.setTransform(85.6,130.4,1.897,1.897);

	this.instance_13 = new lib.Symbol23("synched",0);
	this.instance_13.setTransform(85.6,130.4,1.897,1.897);

	this.instance_14 = new lib.Symbol22("synched",0);
	this.instance_14.setTransform(85.6,130.4,1.897,1.897);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#808080").s().p("AghAIIAAgPIBDAAIAAAPg");
	this.shape_43.setTransform(301.4,430.5);

	this.instance_15 = new lib.Symbol21("synched",0);
	this.instance_15.setTransform(85.6,130.4,1.897,1.897);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#808080").s().p("Ag8AIIAAgPIB5AAIAAAPg");
	this.shape_44.setTransform(206.6,420.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#808080").s().p("AgkAIIAAgPIBJAAIAAAPg");
	this.shape_45.setTransform(216.6,420.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#808080").s().p("Ag/AIIAAgPIB/AAIAAAPg");
	this.shape_46.setTransform(226.8,420.3);

	this.instance_16 = new lib.Symbol20("synched",0);
	this.instance_16.setTransform(85.6,130.4,1.897,1.897);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D4D4D4").s().p("AkFE+IlIAAIgMgBIAAgOQAHkJCritQCsiwD/gGQDpAGClCSQCkCSAkDdQgDANgFgDIh+AAQgiirh/hsQh+huixgCQimACh8BjQh7BggpCZQACANAHgDIBFAAQAoh8BlhMQBmhNCFgDQCQADBoBVQBpBSAfCDQgCANgHgDIiGAAQhCiaivgLQhsADhIBIQhJBJgCBsIAAAOQgDABgDAAIgEAAg");
	this.shape_47.setTransform(259.6,387.5);

	this.instance_17 = new lib.Symbol18("synched",0);
	this.instance_17.setTransform(85.6,130.4,1.897,1.897);

	this.instance_18 = new lib.Symbol17("synched",0);
	this.instance_18.setTransform(85.6,130.4,1.897,1.897);

	this.instance_19 = new lib.Symbol16("synched",0);
	this.instance_19.setTransform(85.6,130.4,1.897,1.897);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#808080").s().p("AhCAIIAAgPICFAAIAAAPg");
	this.shape_48.setTransform(290.8,409.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#808080").s().p("Ag9AIIAAgPIB7AAIAAAPg");
	this.shape_49.setTransform(312.7,409.7);

	this.instance_20 = new lib.Symbol15("synched",0);
	this.instance_20.setTransform(85.6,130.4,1.897,1.897);

	this.instance_21 = new lib.Symbol14("synched",0);
	this.instance_21.setTransform(85.6,130.4,1.897,1.897);

	this.instance_22 = new lib.Symbol13("synched",0);
	this.instance_22.setTransform(85.6,130.4,1.897,1.897);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D4D4D4").s().p("AhkAAQAIhbBcgJQBdAJAIBbQgIBchdAJQhcgJgIhcg");
	this.shape_50.setTransform(600.8,199.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#808080").s().p("AijAJIFHghIAAASIlHAfg");
	this.shape_51.setTransform(471.3,282.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#808080").s().p("AijAJIFHghIAAASIlHAfg");
	this.shape_52.setTransform(537.2,282.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D4D4D4").s().p("ACkBoQgIi6icAAQibAAgJC6IAAJvIlJAiIAA3PIFJgiIAAHmQBvhlCWgCQDcAEBbB9QBYB9gDDMIAAKGIlJAig");
	this.shape_53.setTransform(504.2,206.8);

	this.instance_23 = new lib.Symbol12("synched",0);
	this.instance_23.setTransform(85.6,130.4,1.897,1.897);

	this.instance_24 = new lib.Symbol11("synched",0);
	this.instance_24.setTransform(85.6,130.4,1.897,1.897);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D4D4D4").s().p("AjPEoIAAmUIitAAIBGkSIBnAAIAAjXIFHh/IAAFWIC8AAIAAESIi8AAIAAF7QADBQAyAdQAzAeBHgBQA2gCAggMIheFFQgYAEgaABIgDAAQm2AAgDmtg");
	this.shape_54.setTransform(400.1,212.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#898989").s().p("AguCbIBdlEIAAARIhdFCg");
	this.shape_55.setTransform(433.5,268.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#808080").s().p("AhVAIIAAgPICrAAIAAAPg");
	this.shape_56.setTransform(370.5,202.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#808080").s().p("AhcAIIAAgPIC6AAIAAAPg");
	this.shape_57.setTransform(421.5,202.2);

	this.instance_25 = new lib.Symbol10("synched",0);
	this.instance_25.setTransform(85.6,130.4,1.897,1.897);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D4D4D4").s().p("AhaJCQi5gDhghqQhghqgCiyQAFimBvhdQBwheCigBQCBACBxBPQADgPAAgSQAAhug2glQg0glhnACQiVACiJA/IAvkjQBBgXBSgMQBQgNBEAAQDOgCB8BaQB7BcAEDIIAALUIkgAiIAAhsIgEAAQhbB9iZAAIgYAAgAiiC2QAOCLCVAEQCUgEAOiLQgOiKiUgFQiVAFgOCKg");
	this.shape_58.setTransform(307.1,226.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#808080").s().p("AiOAJIEdghIAAASIkdAfg");
	this.shape_59.setTransform(339.8,282.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#808080").s().p("AgBAIIAAgPIADAAIAAAPg");
	this.shape_60.setTransform(325.2,273.1);

	this.instance_26 = new lib.Symbol9("synched",0);
	this.instance_26.setTransform(85.6,130.4,1.897,1.897);

	this.instance_27 = new lib.Symbol8("synched",0);
	this.instance_27.setTransform(85.6,130.4,1.897,1.897);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808080").s().p("Ai0gOIAAgSIFpAxIAAAQg");
	this.shape_61.setTransform(104.1,282.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8C8C8C").s().p("Ag+FPIB9qtIAAARIh9Ksg");
	this.shape_62.setTransform(128.6,251.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#808080").s().p("AislNIAAgRIFZKtIAAAQg");
	this.shape_63.setTransform(152.3,251.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D4D4D4").s().p("AFvA8Il5KxIlbquIh/KuIlrgyIGI2nIHHNqIHQtqIGAWnIllAyg");
	this.shape_64.setTransform(170.8,209.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#808080").s().p("Ag8lPIAAgRIB5KvIAAASg");
	this.shape_65.setTransform(213.8,251.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#808080").s().p("AixARIFjgxIAAASIljAvg");
	this.shape_66.setTransform(237.7,282.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#848484").s().p("Ai8FPIF5qvIAAARIl5Kwg");
	this.shape_67.setTransform(188.6,251.1);

	this.instance_28 = new lib.Symbol7("synched",0);
	this.instance_28.setTransform(85.6,130.4,1.897,1.897);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D4D4D4").s().p("AjzJMQhogkhxhaICzjyQBrBqCWABQAuACA2gRQA1gRAEg+QgJhHiDgSQiDgRiChGQiEhDgKjlQAGjDCAhdQCBheCyAAQDfALClCZIjDDGQhSg/hpgEQgjAAgnAMQgpAOgDAtQALBYCBARQCCARCEBCQCDBBAKDnQgHDBiIBkQiIBji0ABIgKAAQiIAAhkgig");
	this.shape_68.setTransform(631.1,417.8);

	this.instance_29 = new lib.Symbol6("synched",0);
	this.instance_29.setTransform(85.6,130.4,1.897,1.897);

	this.instance_30 = new lib.Symbol5("synched",0);
	this.instance_30.setTransform(85.6,130.4,1.897,1.897);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#808080").s().p("AhgBaIDBjEIAAARIjBDEg");
	this.shape_69.setTransform(663.3,382.7);

	this.instance_31 = new lib.Symbol4("synched",0);
	this.instance_31.setTransform(85.6,130.4,1.897,1.897);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D4D4D4").s().p("AhmJlQjtgFhhiGQhhiHAEjeIAAq1IFhgkIAALBQAKDKCmgBQCpABAJjKIAAqdIFhgkIAASSIlGAkIAAixIgFAAQg3ByhWAqQhRAohJAAIgHAAg");
	this.shape_70.setTransform(515.1,418.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#808080").s().p("AiiAJIFFgiIAAARIlFAig");
	this.shape_71.setTransform(552,477.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#808080").s().p("AgBAIIAAgPIADAAIAAAPg");
	this.shape_72.setTransform(535.4,461.4);

	this.instance_32 = new lib.Symbol3("synched",0);
	this.instance_32.setTransform(85.6,130.4,1.897,1.897);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D4D4D4").s().p("AlqG2QipivgDjzQAFkiCwitQCxiuEegEQDmADC3CMIi4EBQhmhSh/AAQh4AChTBOQhTBNgDB9QABCKBOBbQBPBdCJADQB+ACBjhWIDCD8QhNBLh6AlQh8AmhmAAQkwgIioiwg");
	this.shape_73.setTransform(392,417.8);

	this.instance_33 = new lib.Symbol2("synched",0);
	this.instance_33.setTransform(85.6,130.4,1.897,1.897);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#828282").s().p("AhaB3IC1j/IAAASIi1D+g");
	this.shape_74.setTransform(435.2,383.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#808080").s().p("Ai/AAIF/gQIAAAQIl/ARg");
	this.shape_75.setTransform(116.6,478.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D4D4D4").s().p("AnIsSIM1AAIBcFhIoQAAIAAFOIF/AAIAAFHIl/AAIAAIdImBASg");
	this.shape_76.setTransform(143.1,399.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#808080").s().p("Ai/AIIAAgPIF/AAIAAAPg");
	this.shape_77.setTransform(155.1,423.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#808080").s().p("AkHAIIAAgPIIPAAIAAAPg");
	this.shape_78.setTransform(162.4,356.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#808080").s().p("AhQAAIChgPIAAAPIihAQg");
	this.shape_79.setTransform(630.6,270.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#808080").s().p("AhQAAIChgPIAAAPIihAQg");
	this.shape_80.setTransform(663.4,270.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D4D4D4").s().p("ABSgpQgFhehNABQhNgBgEBeIAAEzIijARIAAojICXgRIAABRIABAAQBFhYBHAHQDRANgMDXIAAE/IijARg");
	this.shape_81.setTransform(647,242);

	this.instance_34 = new lib.Symbol1("synched",0);
	this.instance_34.setTransform(85.6,130.4,1.897,1.897);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("AhQAAIChgPIAAAPIihAQg");
	this.shape_82.setTransform(601.2,270.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D4D4D4").s().p("AhQkEIChgRIAAIaIihARg");
	this.shape_83.setTransform(601.2,242.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgnBGQgUgKgLgTQgLgTAAgWQAAgUALgUQALgTAUgLQATgLAUAAQAWAAATALQATALAMATQAKAUAAAUQABAWgLATQgMATgTAKQgTAMgWAAQgUAAgTgMgAgtgtQgTATAAAaQAAAQAJAQQAIAPAQAIQAPAJAQAAQARAAAQgJQAPgIAJgPQAJgPgBgRQABgagUgTQgTgUgbABQgZgBgUAUgAATAtIgCgFIgBgJQAAgNgBgCIgEgEQgCgCgIAAIgOAAIAAAjIgUAAIAAhaIAmAAIATADQAGAFADAGQAEAFAAAIQAAAIgBAFQgDAEgGACQAFADABAEQADADAAAJIABAUQAAACAEADgAgNgEIAPAAQAKgBADgCQACgDAAgGQAAgFgCgEQgDgBgKAAIgPAAg");
	this.shape_84.setTransform(530.7,520.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAjB0IAAhfQgDgkggAAQghAEAAAgIAABfQgDAdgZACQgZgCgDgdIAAjnQADgdAZgCQAZACADAdIAABKQAVgUAbABQBFADAGBFIAABoQgCAdgaACQgZgCgCgdg");
	this.shape_85.setTransform(510.1,526.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAAB+QgZgKgEgwIAAg2IAAgkIgNAAQgWAAgBgXQACgYAVgBIANAAIAAggQABgdAbgCQAXACACAdIAAAgIAPAAQAYgBADAaQgDAYgYgBIgPAAIAAAfIAAA2QAJAeAIgIQAUgFACAcQgGAcgggDIgCABQgFAAgSgIg");
	this.shape_86.setTransform(493,528.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhhAAQAIhgBTgIQAeAAAUAZQAFgVAWgBQAgAHgHAcIAACFQAHAcggAIQgXgBgEgWQgVAZgdAAQhUgGgHhjgAgpAAQgBAvAqAIQAqgIAAgvQAAgugqgIQgqAIABAug");
	this.shape_87.setTransform(475.5,531.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("ABjBuIgXiYIgBAAIgtCcQgBASgdAFQgbgFgDgSIgticIgWCYQgCAbgcAAQgagCgCgaIAAgGIAljSQAEgYAggFQAeAEAJAXIArCUIABAAIAsiUQAHgXAfgEQAgAFAFAYIAjDSIAAAGQgCAagZACQgcAAgBgbg");
	this.shape_88.setTransform(448.4,527.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AhhAAQAGhcBbgMQBdAPAFBVQAAAVgYAAIhzAAQAKApAogBQApgLAUgKQAVACACAVQgOAphLAFQhfgHgGhigAgqgRIBVAAQgFgmgmgEQglAEgFAmg");
	this.shape_89.setTransform(411.6,531.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag7BIIAAiTQAEgbAYAAQAYgCADAYQAMgWAYAAQAYAAAEAdQgFAVgdAGQgbAHgDAdIAABSQgCAcgaADQgZgDgCgcg");
	this.shape_90.setTransform(396.3,531.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AhgAAQAGhcBagMQBcAMAFBcQgEBfhdAKQhbgKgFhfgAgpAAQgBAvAqAIQAsgIAAgvQABgugtgIQgqAIABAug");
	this.shape_91.setTransform(378.1,531.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhgBzIAAjiQABgdAbgBQAWAAAFAXQASgZAfAAQBZAOAABeQgEBYhXAMQgYABgXgUIAABFQgCAbgZACQgbgCgBgbgAgpgmQgCAuArAIQAqgIAAgtQAAgvgqgJQgqAGABAxg");
	this.shape_92.setTransform(357.2,535.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhgAAQAHhgBTgIQAeAAAUAZQAFgVAVgBQAhAHgHAcIAACFQAHAcghAIQgWgBgEgWQgVAZgdAAQhUgGgGhjgAgpAAQgBAvAqAIQAqgIAAgvQAAgugqgIQgqAIABAug");
	this.shape_93.setTransform(335.1,531.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag6CGQgggJgCgVQACgUATgFQAYAJAtAIQApAAADgqIAAgOIgBAAQgRAZgjAAQhWgLABhbQAEheBWgMQAeAAASAZQAFgXAWAAQAaABACAdIAACcQgGBjhiAAQgUAAgfgKgAgpglQgBAuAqAHQAqgHAAgtQABgwgrgJQgpAJAAAvg");
	this.shape_94.setTransform(313.3,535.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAiBKIAAheQgCgmggAAQgiAEAAAiIAABeQgCAbgZADQgagDgCgbIAAiRQACgdAagBQAWAAACAUQAQgWAjAAQBGACAGBIIAABnQgCAbgaADQgZgDgDgbg");
	this.shape_95.setTransform(292.3,531.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgZByIAAiRQAAgdAZgBQAZABABAdIAACRQgBAbgZADQgYgDgBgbgAgdhxQACgbAbgDQAbADADAbQgDAdgbADQgbgEgCgcg");
	this.shape_96.setTransform(277.5,527.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ag6CDQghgIgCgaQABgZAYgCIA/APQAlgDABgfQgIgbg2gJQg3gJgIg6QAJhTBTgDQASAAAbAHQAbAJADAWQgCAagYACQgUgGgdgFQgcAAgDAZQAIAWA2ALQA3AKAIBCQgJBVhXADIgFAAQgWAAgdgIg");
	this.shape_97.setTransform(263.1,527.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E7E8").s().p("AhIAeQBIgfA9guIAMAPQhCAwhIAgg");
	this.shape_98.setTransform(298.1,481.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E6E7E8").s().p("AisBwQi/iHhQjgIASgGQBODZC6CFQC3CFD1AEQBZAABTgTIAFASQhVAUhcABQj7gEi8iKg");
	this.shape_99.setTransform(233.3,468.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E6E7E8").s().p("ACahhQi3iFj0gDQhRAAhLARIgHgTQBPgSBUAAQD6AEC8CKQC/CIBRDeIgTAHQhPjbi5iEg");
	this.shape_100.setTransform(287.5,369.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E6E7E8").s().p("AhPAlQBIg0BRgkIAGATQhQAghDA0g");
	this.shape_101.setTransform(222.8,355.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#392350").s().p("Eg05AnFMAAAg59ITizdIACgHIAEAAIE3JfIJdpeIABgBIAEAAIDQMdIGSmSIAAgEIAFgCQA1gSBBgLIAMgCIALgCIALgBICHgNIACAAIAEAAQDOgBB6BaQAfAYAZAfIAEAFIE5k6IAEAAIAAgBIFJiAIAAFXIAXAAIGQmRIAEAEIFJgiIAAHmQBvhlCYgDQDcAFBaB9QBZB9gDDNIAAABIAABuIAzAAIFdlbQAZgUAvgFQAvAFAZAaQAWAXAGAnIABAJIAAABIgDAcIAAgJIgBAIIgDALIABAAQgEANgEAJQgMAVgQANQgJAGg/BAIBjgKIAABzIAYAAIBqhpIAAgCIABAAICXgRIAABSIAAAAQBFhZBJAHQAyADAkAQQBvAqABCQIgBAXIAAABIAAFRIwJP/IAABFIB5h3QAOgOARgMQCAheC0ABQAtACArAIQA1gKA7AAQDfAKClCaIk3E5QApAIAqANQAtAOAuAVQAUAIATAKQCEBBAJDnIAAADIAAABQgBAkgGAgIgBACIAAACQgEAbgHAaQgIAYgKAVIgHAQIgBADIgBACIgFAIQglA9g2ArIgEADIgjAYQgDAB4hYig");
	this.shape_102.setTransform(338.7,380.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.051)").s().p("EgHGAglQrAn8l4r7IAYidQFxM1LiIYQNDJaRPAcIAABcQxtgetYptgAkPWDQr3quiVwNQAQg+AZAOII8AAQCSMiJFIHQJBH2MdAbIAAJyQwjggrrqhgAGgK8QnlmSiFpiQAOg+AcAOIJkAAQEWLbMlBAIAAKrQqLgYnUmKgAyGqVQhAgJALgDIAAg9QAYuOG9qoQCOjZC4jCIQCAAQjIBkiyCQQhkBPhXBYQmYGWibJCQALA5AbgJIFAAAQCzo9HRllQBJg4BNguQGQj0H1gTIAAKoQngAVk+FAQlQFMgLH0QAAAnACAWQgZAMgWAAg");
	this.shape_103.setTransform(1027.2,203.9,1,1,0,0,0,156.7,-69.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AB499C").s().p("EASlApcIAAABMgspgHeMALrhMqMAofAAAMAAABVXg");
	this.shape_104.setTransform(857,314.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#653694","#653694"],[0,1],-1982.8,0,2439.4,0).s().p("EhP/AuFMAAAhcJMCf/AAAMAAABcJg");
	this.shape_105.setTransform(512,336);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.2)").s().p("EgF0AglQtqp3lywBIBTgeQFoPmNTJpQNEJaRPAcIAABcQxtgetYptgAi9WDQr3quiWwNQARg+AZAOII7AAQCTMiJEIHQJBH2MeAbIAAJyQwkggrqqhgAHxK8QnnmSiCpiQAOg+AbAOIJkAAQEWLbMmBAIAAKrQqLgYnVmKgAw1qVQhAgJALgDIAAg9QAgyxL8sgIQCAAQjIBkiyCQQozHBi8K+QAMA5AbgJIE/AAQCzo9HRllQHFlWJXgXIAAKoQngAVk/FAQlPFMgLH0QAAAnACAWQgZAMgXAAg");
	this.shape_106.setTransform(1027.2,203.9,1,1,0,0,0,164.9,-69.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F7941C").s().p("EBJXAyiIjbDvIjajvIjaDvIjajvIjbDvIjZjvIjaDvIjajvIjbDvIjajvIjaDvIjajvIjaDvIjajvIjbDvIjZjvIjaDvIjbjvIjaDvIjZjvIjbDvIjYjvIjaDvIjajvIjaDvIjajvIjbDvIjajvIjZDvIjajvIjbDvIjajvIjaDvIjajvIjbDvIjZjvIjaDvIjajvIjbDvIjajvIjaDvIjajvIjaDvIjajvIjbDvMAAAhshMCf/AAAMAAABo/IjPDig");
	this.shape_107.setTransform(512,347.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFC907").s().p("EhP/A2NMAAAho3IDQjiIDaDuIDajuIDaDuIDajuIDaDuIDajuIDbDuIDajuIDaDuIDZjuIDbDuIDajuIDaDuIDajuIDaDuIDbjuIDZDuIDbjuIDZDuIDbjuIDaDuIDajuIDYDuIDbjuIDaDuIDZjuIDaDuIDbjuIDaDuIDajuIDaDuIDajuIDbDuIDZjuIDaDuIDajuIDbDuIDajuIDZDuIDbjuIDaDuIDajuIDaDuIDajuIDbDuIDajuMAAABsZg");
	this.shape_108.setTransform(512,421.1);

	this.addChild(this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.instance_34,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.instance_33,this.shape_73,this.instance_32,this.shape_72,this.shape_71,this.shape_70,this.instance_31,this.shape_69,this.instance_30,this.instance_29,this.shape_68,this.instance_28,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.instance_27,this.instance_26,this.shape_60,this.shape_59,this.shape_58,this.instance_25,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.instance_24,this.instance_23,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.instance_22,this.instance_21,this.instance_20,this.shape_49,this.shape_48,this.instance_19,this.instance_18,this.instance_17,this.shape_47,this.instance_16,this.shape_46,this.shape_45,this.shape_44,this.instance_15,this.shape_43,this.instance_14,this.instance_13,this.instance_12,this.shape_42,this.shape_41,this.shape_40,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.shape_39,this.instance_7,this.instance_6,this.instance_5,this.shape_38,this.instance_4,this.shape_37,this.shape_36,this.shape_35,this.instance_3,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_2,this.instance_1,this.instance,this.shape_1,this.shape,this.pbGo);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(512,384,1024.7,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;