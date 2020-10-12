$(function(){
	$("ul > li ").hover(function(){
		$(this).find("ul").stop().slideDown();
		$(this).children("a").addClass("on");
	},function(){
		$(this).find("ul").stop().slideUp();
		$(this).children("a").removeClass("on");
	});
	});