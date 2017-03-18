$(document).ready(function() {

	var $caseModalwrap = $(" .modal").find(".wrap");
	$(".tab").find('a').click(function(event) {
		//debugger
		var num = $(this).index();
		$caseModalwrap.eq(num).fadeIn(200).siblings($caseModalwrap).fadeOut(0);
		
	});


});