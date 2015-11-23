$(document).ready(function() {

	// if ($(window).scrollTop() < 100) {
 //        $('.top-border, .bottom-border').hide();
 //    };
//	if ($('.primary, .secondary').scrollTop() === 0) {
//        $('.top-border, .bottom-border').show();
//   };

//	$('h3').css('opacity','0');
	$('img').hover(function(){
		$('h3').css('opacity','1');
		$('img').mouseleave(function(){
		$('h3').css('opacity','0');
		});
	});
	
	$('img, .x-height-equals').draggable();

	$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.top-border .bottom-border').fadeIn();
  } else {
    $('.top-border .bottom-border').fadeOut();
  }
});
	
});

