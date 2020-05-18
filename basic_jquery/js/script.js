//セレクタ：処理対象となるDOM要素を指定する方法
//メソッド：処理
//メソッドチェーン
$(function () {
  //$('p').css('color', 'red').hide('fast');
  // $('p').css('color', 'red');
  // $("#sub").css('color', 'orange');
  // $("#sub .item").css('color', 'blue');
  // $('#main > .item').css('color', 'gray');
  // $('#main > .item').css('color', 'gray');
  // $('p, .item').css('font-weight', 'bold');
  // $('.item + .item').css('text-decoration', 'underline');
  // $('#sub > li:eq(2)').css('color', 'cyan');
  // $('#sub > li:gt(1)').css('color', 'orange');
  // $('#sub > li:lt(1)').css('color', 'red');
  // $('#sub > li:even').css('font-weight', 'bold');
  // $('#sub > li:odd').css('text-decoration', 'underline');
  // $('#sub > li:contains("3")').css('color', 'red');
  //$('#sub').parent().css('color', 'red');
  // $('#sub').children().css('color', 'red');
  // $('#sub > li:eq(2)').next().css('color', 'red');
  // $('#sub > li:eq(2)').prev().css('color', 'red');
  // $('#sub > li:eq(2)').siblings().css('color', 'red');
  //---------------------------------------------------------------
  // $('a[href="https://google.com"]').css('background-color', 'red')
  // $('a[href!="https://google.com"]').css('background-color', 'green')
  // $('a[href*="dot"]').css('color', 'white')
  // $('a[href$="jp"]').css('font-weight', 'bold')
  //---------------------------------------------------------------
  // $('p').css('color', 'red');
  // console.log($('p').css('color'));
  //---------------------------------------------------------------
  // $('p').addClass('hoge');
  // $('a').parent().removeClass('hoge');
  //---------------------------------------------------------------
  // console.log($('a').attr('href'));
  // $('a').attr('href','http://amazon.co.jp');
  //---------------------------------------------------------------
  // console.log($('a').data('sitename'));
  //---------------------------------------------------------------
  // $('p').text('かわったよー');
  // $('p').html('<a href="#">くりっくみー</a>');
  // console.log($('input').val());
  // $('input').val('dadadadadadadadadada');
  // $('a').remove();
  //---------------------------------------------------------------
  // const li = $('<li>').text('ついかしたりすとたぐ');
  // const li2 = $('<li>').text('あとについかしたりすとたぐ');
  // $('#sub > li:eq(0)').before(li);
  // $('#sub > li:eq(1)').after(li2);
  // li.insertBefore('#sub > li:eq(4)');
  // $('#sub').prepend(li);
  // $('#sub').append(li2);
  // li.prependTo('#sub');
  // li2.appendTo('#sub');
  //---------------------------------------------------------------
  // $('#box').hide(1000);
  // $('#box').show(1000);
  // $('#box').fadeOut(1000);
  // $('#box').fadeIn(1000);
  // $('#box').toggle(1000);
  // $('#box').toggle(1000);
  // $('#box').fadeOut(1000, function(){
  //   alert('きえたでー');
  // });
  //---------------------------------------------------------------
  // $('#box').click(function(){
  //   alert('おしたな！？')
  // });
  // $('#box').mouseover(function(){
  //   $(this).css('background','green');
  // })
  // .mouseout(function(){
  //   $(this).css('background','red');
  // })
  // .mousemove(function(e){
  //   $(this).text(e.pageX　+ ':' +　e.pageY);
  //   console.log('まうすがうごいとるな');
  // });
  //---------------------------------------------------------------
  // $('#name').focus(function(){
  //   $(this).css('background','red');
  // }).blur(function(){
  //   $(this).css('background','white');
  // });
  // $('#members').change(function(){
  //   alert('しれっと人をかえたね？');
  // });
  // $('button').click(function(){
  //   const text = $('<p>').text('ついかしたりすとたぐ').addClass('fuga');
  //   $(this).before(text);
  // });
  // $('body').on('click','.fuga', function(){
  //   $(this).css('color','red');
  // });
  //---------------------------------------------------------------

  // $('button').click(function(){
  //   $('#result').load('post.html')
  // });

  //---------------------------------------------------------------

  //   $('button').click(function(){
  //   $('#result').load('post.html', function(){
  //     $('.message').css('color','red')
  //   });
  // });

  //---------------------------------------------------------------
  $('#greet').click(function(){
    $.get('greet.php', {
      name: $('#name').val()
    }, function(data){
      $('#result').html(data.message + '(' + data.length + ')');
  });

  });

});
