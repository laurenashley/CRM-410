$(document).ready(function(){


	$('li').on('click', function(e){
		var step = $(e.currentTarget).attr('data-step'),
			isSelf = $(e.currentTarget).hasClass('active');

		if(isSelf) {
			return;
		} else {
			// go to video timecode
			goToTimecode(step);
		}
	});

	function goToTimecode(step) {
		console.log('step: ',step);
	}
});