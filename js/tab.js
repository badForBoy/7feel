
$(document).ready(function() {
	var $ul = $(".wrap-banner ul");
	var next,pre,$sc,t1;
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

	/*服务板块过渡效果*/
	$(".service .item").css({top: '400px'});
	$(window).scroll(function(event) {
		$(".service .item").stop(true);
		var $sc = $(window).scrollTop();
		if ($sc > $height/2) {
			var time0 = setTimeout(function(){
				$(".service .item:eq(0)").animate({top: 0},600);
			},0);
			var time1 = setTimeout(function(){
				$(".service .item:eq(1)").animate({top: 0},600);
			},200);
			var time2 = setTimeout(function(){
				$(".service .item:eq(2)").animate({top: 0},600);
			},400);
			var time3 = setTimeout(function(){
				$(".service .item:eq(3)").animate({top: 0},600);
			},600);
			var time4 = setTimeout(function(){
				$(".service .item:eq(4)").animate({top: 0},600);
			},800);
			var time5 = setTimeout(function(){
				$(".service .item:eq(5)").animate({top: 0},600);
			},1000);
		} else if ($sc < 160) {
			$(".header").removeClass('move')
		}
	});

	/*view more*/
});