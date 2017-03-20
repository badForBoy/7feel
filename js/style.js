
$(document).ready(function() {
	var $ul = $(".wrap-banner ul");
	var next,pre,$sc,t1,num,j;
	var index = 1;



	/*动态设置banner板块的高度*/
	var $height = $(".banner").height();
	if ($(window).width() < 768) {
		$(".service").css({
			marginTop: 265
		});
	} else {
		$(".service").css({
			marginTop: $height
		});
	}

	/*轮播图点击翻页效果*/
	var $width = $(window).width();
	$(".next").click(function(num) {
		$ul.stop();
		index++;
		var num = -$width * index;
		move(num)
	});
	$(".pre").click(function(num) {
		//debugger
		$ul.stop();
		index--;
		var num = -$width * index;
		move(num)
	});

	function move(num){
		$ul.stop();
		if (index >= 3) {
			index = 0;
		} else if (index <= 0) {
			index = 3;
		}
		$ul.animate({left: num}, 600,function(){
			if (parseInt($ul.css('left')) < -$width * 2) {
				$ul.css({
					left: '-100%',
					backgroundColor:'#111119'
				});
				index = 1;
			} else if (parseInt($ul.css('left')) == 0 ) {
				$ul.css({
					left: '-200%',
					backgroundColor:'#161616'
				});
				index = 2;
			}
			//console.log(parseInt($ul.css('left')))
		});
	}

	if (parseInt($(window).width()) > 768) {
		$(".service .item").eq(0).css({left: '-400px'});//服务板块过渡效果
		$(".service .item").eq(1).css({left: '-100px'});//服务板块过渡效果
		$(".service .item").eq(3).css({right: '-100px'});//服务板块过渡效果
		$(".service .item").eq(4).css({right: '-400px'});//服务板块过渡效果
		$(".procedure .wrap .item .box-item").css({top: '400px'});//合作流程
		$(".case .wrap .item .box-item").css({top: '400px'});//优质案例
		$(".news .modal .item").css({top: '300px'});
		$(".contact .aside").css({left:'-400px'});
		$(".contact .form").css({right:'-400px'});
	}

	

	//console.log($(".case").offset().top)
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

			switch(true)
			{//服务板块过渡效果
				case $sc > $height/2 && $sc < $height*5/4:
				var time0 = setTimeout(function(){
					$(".service .item:eq(0)").animate({left: 0},600);
				},0);
				var time1 = setTimeout(function(){
					$(".service .item:eq(1)").animate({left: 0},600);
				},100);
				var time2 = setTimeout(function(){
					$(".service .item:eq(3)").animate({right: 0},600);
				},100);
				var time3 = setTimeout(function(){
					$(".service .item:eq(4)").animate({right: 0},600);
				},0);
				break;
				default:;
			}

			switch(true)
			{//服务项目 内容
				case $sc > $height*4/5 && $sc < $height*2:
				$modalItem.eq(0).find('p').animate({top:0}, 600);
				setTimeout(function(){
					$modalItem.eq(0).find('.img').animate({top:0}, 600);
				},200);
				break;
				default:;
			}

			switch(true)
			{//合作流程
				case $sc > $(".procedure").offset().top - $height/2 && $sc < $(".procedure").offset().top + 250:
				var time10 = setTimeout(function(){
					$(".procedure .wrap .item1 .box-item").animate({top: 0},600);
				},100);
				var time11 = setTimeout(function(){
					$(".procedure .wrap .item2 .box-item").animate({top: 0},600);
				},200);
				var time12 = setTimeout(function(){
					$(".procedure .wrap .item3 .box-item").animate({top: 0},600);
				},300);
				var time13 = setTimeout(function(){
					$(".procedure .wrap .item4 .box-item").animate({top: 0},600);
				},400);
				var time14 = setTimeout(function(){
					$(".procedure .wrap .item5 .box-item").animate({top: 0},600);
				},500);
				var time15 = setTimeout(function(){
					$(".procedure .wrap .item6 .box-item").animate({top: 0},600);
				},600);
				var time16= setTimeout(function(){
					$(".procedure .wrap .item7 .box-item").animate({top: 0},600);
				},700);
				var time17= setTimeout(function(){
					$(".procedure .btn a").fadeIn(600);
				},900);
				break;
				default:;
			}

			switch(true)
			{//优质案例
				case $sc > $(".case").offset().top - $height/2 && $sc < $(".case").offset().top + 600:
				//debugger
				setTimeout(function(){
					$(".case .wrap .item").eq(0).find(".box-item").animate({top: 0},600);
				},100);
				setTimeout(function(){
					$(".case .wrap .item").eq(1).find(".box-item").animate({top: 0},600);
				},200);
				setTimeout(function(){
					$(".case .wrap .item").eq(2).find(".box-item").animate({top: 0},600);
				},300);
				break;
				case $sc > $(".case").offset().top - 500 && $sc < $(".case").offset().top + 1000:
				setTimeout(function(){
					$(".case .wrap .item").eq(3).find(".box-item").animate({top: 0},600);
				},100);
				setTimeout(function(){
					$(".case .wrap .item").eq(4).find(".box-item").animate({top: 0},600);
				},200);
				setTimeout(function(){
					$(".case .wrap .item").eq(5).find(".box-item").animate({top: 0},600);
				},300);
				break;
				default:;
			}
			
			
			switch(true)
			{//新闻
				case $sc > $(".case").offset().top + 1200 && $sc < $(".case").offset().top + 1700:
				setTimeout(function(){
					$(".news .modal .item").eq(0).animate({top: 0},600);
				},100);
				setTimeout(function(){
					$(".news .modal .item").eq(1).animate({top: 0},600);
				},200);
				setTimeout(function(){
					$(".news .modal .item").eq(2).animate({top: 0},600);
				},300);
				setTimeout(function(){
					$(".news .modal .item").eq(3).animate({top: 0},600);
				},400);
				break;
				default:;
			}


			switch(true)
			{//联系我们
				case $sc > $(".contact").offset().top - $height/3 :
				setTimeout(function(){
					$(".contact .aside").animate({left: 0},600);
				},100);
				setTimeout(function(){
					$(".contact .form").animate({right: 0},600);
				},200);
				break;
				default:;
			}
		

	});

	/*服务项目tab切换*/
	var $modalItem = $(".modal").find(".item");
	$(".tab").find('.item').click(function(event) {
		//debugger
		for (var i = 0; i < $modalItem.length; i++) {
			$modalItem.eq(i).stop(true);
		}
		var num = $(this).index();
		$modalItem.eq(num).fadeIn(200).siblings($modalItem).fadeOut(0);
		$modalItem.eq(num).find('p').animate({top:0}, 600);
		var time7 = setTimeout(function(){
			$modalItem.eq(num).find('.img').animate({top:0}, 600);
		},200);
	});

	/*tab切换*/
	var $newsModalwrap = $(".news .modal").find(".wrap");
	$(".news .tab").find('a').click(function(event) {
		//debugger
		var num = $(this).index();
		$newsModalwrap.eq(num).fadeIn(200).siblings($newsModalwrap).fadeOut(0);
		setTimeout(function(){
			$newsModalwrap.eq(num).find(".item").animate({top: 0},600);
		},600)
	});

	var $caseModalwrap = $(".case .modal").find(".wrap");
	$(".case .tab").find('a').click(function(event) {
		//debugger
		var num = $(this).index();
		$caseModalwrap.eq(num).fadeIn(200).siblings($caseModalwrap).fadeOut(0);
		setTimeout(function(){
			$caseModalwrap.eq(num).find(".item .box-item").animate({top: 0},600);
		},0)
		//$(".case .modal .item").animate({top: 0},600);
	});

	/*合作单位*/
	var $newsItemWidth = $(".news .modal .item").width();
	var $length = 
	$(".news .modal .wrap").css({width: 'value1'});

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
	$(".header .nav li").eq(3).click(function(event) {
		//debugger
		var scroll_offset = $(".contact").offset(); //得到pos这个div层的offset，包含两个值，top和left 
		$("body,html").animate({scrollTop:scroll_offset.top },1000); 
	});

});