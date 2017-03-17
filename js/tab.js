$(document).ready(function() {

	var $caseModalwrap = $(".function .modal").find(".wrap");
	$(".function .tab").find('a').click(function(event) {
		//debugger
		var num = $(this).index();
		$caseModalwrap.eq(num).fadeIn(200).siblings($caseModalwrap).fadeOut(0);
		
	});


});