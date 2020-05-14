'use strict';

{/*
  function update(){
    // document.querySelector('h1').textContent = '変わったよ！';
    // document.querySelector('#target').textContent = '変わったよ！';
    document.getElementById('target').textContent = '変わったよ！';
    // document.querySelector('p').textContent = 'はまちちゃん！こんばんは！！';
    // document.querySelectorAll('p')[3].textContent = 'はまちちゃん！はまちちゃん！はまちちゃん！';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のはまちちゃん！`
    });
  }
  */
 /*
  document.querySelector('button').addEventListener('click', () => {
        document.getElementById('target').textContent = '変わったよ！';
        document.querySelectorAll('p').forEach((p, index) => {
          p.textContent = `${index}番目のはまちちゃん！`;
        });
      });
      */
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
  //   targetNode.textContent = '変わったよ！';
  //   targetNode.title = '見出しであることには変わりはない！';
  //   targetNode.style.color = 'blue';
  //   targetNode.style.backgroundColor = '#aaa';
  // });
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
  //   targetNode.textContent = '変わったよ！';
  //   targetNode.title = '見出しであることには変わりはない！';
  //   // targetNode.className = 'my-color my-border';
  //   // targetNode.classList.add('my-color');
  //   /*　つけたり外したり
  //   // if(targetNode.classList.contains('my-color') === true){
  //   //   targetNode.classList.remove('my-color');
  //   // } else {
  //   //   targetNode.classList.add('my-color');
  //   // }
  //   */
  //   targetNode.classList.toggle('my-color');
  // });

  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');

  //   // targetNode.textContent = 'ど っ と い ん す と ー る';
  //   targetNode.textContent = targetNode.dataset.translasion;
  // });

  // document.querySelector('button').addEventListener('click', () => {
  //   const item5 = document.createElement('li');
  //   item5.textContent= 'item5';

  //   const ul = document.querySelector('ul');
  //   ul.appendChild(item5);
  // });
  
  // document.querySelector('button').addEventListener('click', () => {
  //   const item0 = document.querySelectorAll('li')[0];
  //   const copy = item0.cloneNode(true);

  //   const ul = document.querySelector('ul');
  //   const item4 = document.querySelectorAll('li')[4];
  //   ul.insertBefore(copy, item4);
  // });
  document.querySelector('button').addEventListener('click', () => {
    const item2 = document.querySelectorAll('li')[2];
    document.querySelector('ul').removeChild(item2);
    ul.insertBefore(copy, item4);
  });
}