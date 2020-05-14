$(function(){

  $(window).scroll(function(){
    var dy = $(this).scrollTop();
    $('#bg1').css('background-position', '0 ' + dy +'px');
    if(dy > 340) {
      $('#bg2').css('background-position', (dy - 340)*2+'px '+ (dy - 340)+'px');
    } else {
      $('#bg2').css('background-position', '0 0');
    };
    if(dy > 680) {
      $('#bg3').css('background-position', '0 '+ (dy-680)* 2 +'px');
    } else {
      $('#bg3').css('background-position', '0 0');
    };
    if(dy > 680) {
      $('#msg').css('opacity', (dy-680)/340);
      $('#msg').css('top', 200);
      var dx = (dy-680) > 400 ? 600: (dy-680);
      $('#msg').css('left', dx);
    } else {
      $('#msg').css('opacity', 0);
    };
  });
});
