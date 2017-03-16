
$(document).ready(function() {
	var $ul = $(".wrap-banner ul");
	var next,pre,$sc,t1,num,j;
	var index = 1;



	/*动态设置banner板块的高度*/
	var $height = $(".banner").height();
	$(".service").css({
		marginTop: $height
	});

	/*轮播图点击翻页效果*/
	var $width = $(window).width();
	$(".next").click(function(num) {
		$ul.stop();
		index++;
		var num = -$width * index;
		//console.log(index)
		move(num)
	});
	$(".pre").click(function(num) {
		$ul.stop();
		index--;
		var num = -$width * index;
		//console.log(index)
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

	/*首屏导航过渡效果*/
	$(window).scroll(function(event) {
		$(".header").stop(true);
		var $sc = $(window).scrollTop();
		//console.log($sc)
		if ($sc > 160) {
			$(".header").addClass('move')
		} else if ($sc < 160) {
			$(".header").removeClass('move')
		}
	});


	$(".service .item").eq(0).css({left: '-400px'});//服务板块过渡效果
	$(".service .item").eq(1).css({left: '-100px'});//服务板块过渡效果
	$(".service .item").eq(3).css({right: '-100px'});//服务板块过渡效果
	$(".service .item").eq(4).css({right: '-400px'});//服务板块过渡效果
	$(".procedure .wrap .item .box-item").css({top: '400px'});//合作流程


	$(".case .wrap .item .box-item").css({top: '400px'});//优质案例


	$(window).scroll(function(event) {
		//$(".service .item").stop(true);
		var $sc = $(window).scrollTop();
		if ($sc > $height/2) {//服务板块过渡效果
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
		} else if ($sc < 160) {
			$(".header").removeClass('move')
		}

		if ($sc > $height*4/5) {
			$modalItem.eq(0).find('p').animate({top:0}, 600);
			var time6 = setTimeout(function(){
				$modalItem.eq(0).find('.img').animate({top:0}, 600);
			},200);
		} else if ($sc > $height*2) {
			debugger
			$modalItem.eq(0).find('p').animate({top:400}, 600);
			var time6 = setTimeout(function(){
				$modalItem.eq(0).find('.img').animate({top:400}, 600);
			},200);
		}

		if ($sc > $height*2) {
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
		}

		if ($sc > $height*2) {//优质案例
			for (var i = 0; i < $(".case .wrap .item").length; i++) {
				//debugger
				//$(".case .wrap .item").eq(i).find(".box-item").animate({top: 0},600);
				var t = setTimeout(function(){
					//var j = i;
					$(".case .wrap .item").eq(i).find(".box-item").animate({top: 0},600);
				},100*(i+1));
				console.log(i)
			}
		}

	});

	/*tab切换*/
	var $modalItem = $(".modal").find(".item");
	$(".tab").find('.item').click(function(event) {
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

});