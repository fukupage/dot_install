'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const result = ['だいきち','ちゅうきち','しょうきち','すえきち','きょう','だいきょう'];
    btn.textContent = result[Math.floor(Math.random() * result.length)];
  });
}


