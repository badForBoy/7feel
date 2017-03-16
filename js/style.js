$(function(){
	var $mlNav = $('.ml-nav');
	var $header = $(".header");

	$('#dowebok').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		verticalCentered: !1,
		navigation: !0,
		afterRender: function(){
			//$header.animate({top:0}, 600);
			$('.banner-title span').animate({width: 1160},400, function() {
				$('.banner-title h1').animate({'bottom': -20}, 400,function(){
					setTimeout(function(){
						$('.banner-title').animate({width:0},400,function(){
							$('.aside-left').animate({left:0}, 600);
								$('.aside-right').animate({right:0}, 600,function(){
									$('.aside-left').hover(function() {
										$('.aside-left').stop()
										$(this).animate({width:'68%'},600)
									}, function() {
										$('.aside-left').stop()
										$(this).animate({width:'50%'},600)
									});
								})
							})
					},800)
				})
			});
		},
		onLeave: function(index,nextIndex,direction){
			if (direction == 'up') {
				$header.animate({top:0}, 200);
			}
			else if (direction == 'down' ) {
				$header.animate({top:-61}, 200);
			}
			else if(index ==2 ) {
				$header.animate({top:0}, 600);
			}
		},
		afterLoad: function(anchorLink,index){
			var loadedSection = $(this);
			if (anchorLink == 'secondPage') {
				//debugger
				$('.secondPage .container .row1 .item').animate({top:120}, 600)
				$('.secondPage .container .row2 .item').animate({top:406}, 600)
			}
		}
	})
});