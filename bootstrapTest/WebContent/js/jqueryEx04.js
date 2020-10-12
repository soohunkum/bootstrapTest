//$(function(){
//	$("ul > li ").hover(function(){
//		$(this).find("ul").stop().slideDown();
//		$(this).children("a").addClass("on");
//	},function(){
//		$(this).find("ul").stop().slideUp();
//		$(this).children("a").removeClass("on");
//	});
//	});

$(function(){
	$("html, body").on("DOMMouseScroll", function(e){
		console.log("e.originalEvent.detail :" + e.originalEvent.detail);
	});
	$("html, body").on("mousewheel",function(e){
		console.log("e.originalEvent.wheelDelta:" + e.originalEvent.wheelDelta);
	});
	$("html, body").on("mousewheel DOMMouseScroll", function(e){
		if(e.originalEvent.wheelDelta == 120 || e.originalEvent.detail == -3){
			$(".container").text("up scroll event");
		}else if(e.originalEvent.wheelDelta == -120 || e.originalEvent.detail == 3){
			$(".container").text("down scroll event");
		}
	});
	
});