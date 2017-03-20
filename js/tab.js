$(document).ready(function() {

	var $caseModalwrap = $(" .modal").find(".wrap");
	$(".tab").find('a').click(function(event) {
		//debugger
		var num = $(this).index();
		$caseModalwrap.eq(num).fadeIn(200).siblings($caseModalwrap).fadeOut(0);
		$(".tab a").eq(num).addClass('on').siblings('.tab a').removeClass('on');
		
	});

	$(window).scroll(function(event) {
		var $sc = $(window).scrollTop();
		$(".header").stop(true);
		
		switch(true)
		{//首屏导航栏
			case $sc > 160:
				$(".header").addClass('move')
			break;
			case $sc < 160:
				$(".header").removeClass('move')
			break;
			default:;
		}
	})		

	//导航栏手机端点击事件
	$(".mun i").on('touchstart',function(e){
		var $length = $(".mun .box a").length;
		var $height = $(".mun .box a").height();
		//debugger
		e.preventDefault();
		//console.log($length)
		$(".mun .box").height() == 0 ? $(".mun .box").animate({height: $height * $length}, 600) : $(".mun .box").animate({height: 0}, 600);
	})

	/*页面跳转*/
	$(".header .nav li").eq(4).click(function(event) {
		//debugger
		var scroll_offset = $(".contact").offset(); //得到pos这个div层的offset，包含两个值，top和left 
		$("body,html").animate({scrollTop:scroll_offset.top },1000); 
	});

});