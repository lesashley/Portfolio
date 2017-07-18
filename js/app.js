$('.menu').click(function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});


$(document).on('scroll', function () {
    if ( $(this).scrollTop() > 220 ) {
      $('.description__title h2').addClass('animated slideInLeft');
      $('.description__skills h2').addClass('animated slideInLeft');
    }
    if ( $(this).scrollTop() > 1200 ) {
      $('.portafolio__item').addClass('animated zoomIn');
    }
  });


// $('.preload').show(9000);
// $('.body-container').hide();
// $(document).ready(function(){
//   $('.preload').hide(1000);
//   $('.body-container').show(2000)
//   });
