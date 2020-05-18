'use strict';

{
  const words = [
    'document',
    'queryselector',
    'getelementsby',
    'classname',
    'addevent',
    'listener',
    'false',
    'else',
    'target',
    'true',
    'while',
    'cssstyle',
    'declaration',
    'var',
    'function',
    'if',
    'parseint',
    'math.random',
    'math.floor',
    'window',
    'sessionstorage',
    'localstorage',
    'location',
    'Keyboardevent',
    'mswriteprofilerMark',
    'z-index',
    'pageyoffset',
    'xmldocument',
    'queuemicrotask',
    'return',
    'speechSynthesis',
    'textContent',
    'unescape',
    'void',
    'hogefuga'
  ];

  let word = words[Math.floor(Math.random() * words.length)];
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  let loc = 0;
  let score = 0;
  let miss = 0;
  const timeLimit = 3 * 1000;
  let startTime;
  let isPlaying = false;


  let uppdateTarget = function () {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  };

  let updateTimer = function(){
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    const timeoutID = setTimeout(() =>{
      updateTimer();
    }, 10);

    if (timeLeft < 0){
      isPlaying = true;
      clearTimeout(timeoutID);
      timerLabel.textContent = "0.00";
      setTimeout(() => {
        target.textContent = 'Game Over!';
      }, 100);
    }
  }

  window.addEventListener('click', () => {
    if(isPlaying === true){
      return;
    }
    isPlaying = true;

    target.textContent = word;
    startTime = Date.now();
    updateTimer()
  });

  window.addEventListener('keydown', (e) => {
    if(isPlaying !== true){
      return;
    }
    if (e.key === word[loc]) {
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      uppdateTarget();
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });



}
