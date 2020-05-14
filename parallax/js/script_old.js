$(function(){
  var pos1 = $('#box1').offset();
  var pos2 = $('#box2').offset();
  var pos3 = $('#box3').offset();

  $(window).scroll(function(){
    var dy = $(this).scrollTop();
    console.log(dy);
    $('#box1').css('top', pos1.top + dy / 3);
    $('#box1').css('left', pos1.left + dy / 3);
    $('#box2').css('top', pos2.top + dy / 5);
    $('#box2').css('left', pos2.left + dy / 7);
    $('#box3').css('top', pos3.top + dy / 9);
    $('#box3').css('left', pos3.left + dy / 2);
  });
});
