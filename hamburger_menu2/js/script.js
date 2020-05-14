
(function(){
  'use stridt';
let show = document.getElementById('show');
let main = document.getElementById('main');
show.addEventListener('click', function(){
  // if(main.className === 'open'){
  //   main.className = '';
  // } else {
  //   main.className = 'open';
// }
  main.className = main.className === 'open' ? '' : 'open'; //条件演算子
});
})();
