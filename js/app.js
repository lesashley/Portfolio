 $('.menu').click(function(e){
 	e.preventDefault();
 	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
 });

(_ =>{
  // $('#description').scroll(function () {
    // var n = $('#description').scrollTop();
    // console.log(n);
    // console.log("hola");
  // });
console.log($('#description').scrollTop());
});
