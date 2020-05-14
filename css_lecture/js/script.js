(() => {
  'use strict';
  document.querySelector('body').addEventListener('click', () => {
    document.querySelectorAll('.box').forEach((box) => {
      box.classList.add('moved');
      });
  });
})();
