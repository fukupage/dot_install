'use strict';
{
  //要素の取得
  const menuItems = document.querySelectorAll('.menu li a');//menuクラスの中のli要素の中のa要素を取得
  const contents = document.querySelectorAll('.content');//contentクラスを取得

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e =>{
      e.preventDefault();
      menuItems.forEach( item => {
        item.classList.remove('active');//リストメニューの全ての要素から一旦activeクラスを外す。
      });
      clickedItem.classList.add('active');//現在アクティブな要素にactiveクラスを付与する。

      contents.forEach( contents => {
        contents.classList.remove('active');//全てのcontentから一旦activeクラスを外す。
      });
      //clickされたリンクのdata-id属性を取得して、そこに紐づいた部分にactiveクラスを付与。
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}
