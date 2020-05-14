
(function(){
  'use stridt';
let show = document.getElementById('show');
let close = document.getElementById('close');
let content = document.getElementById('content');
show.addEventListener('click', function(){
  content.className = 'open';
});
close.addEventListener('click', function(){
  content.className = '';
});
})();
