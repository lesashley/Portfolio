$('.menu').click(function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});


$(document).on('scroll', function () {
  const scrollTop = $(window).scrollTop();
  if ( scrollTop > 220 ) {
    $('#header').addClass('header-hidden');
  }
  else{
    $('#header').removeClass('header-hidden');
  }
  if ( scrollTop > 1200 ) {
    $('.portafolio__item').addClass('animated zoomIn');
  }
  if ( scrollTop > 0 ) {
    $('.portafolio__item').addClass('animated zoomIn');
  }
});
