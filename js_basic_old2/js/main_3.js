'use strict'; //お約束（javascriptには必須）

function sample(){

  let age = testForm.textbox.value;//testFormフォームのnameがtextboxから内容を取得
  let message = "";//表示メッセージは一旦空にするよ
  if( isNaN( age )){//入力された値が非数（数値じゃない）か判断するよ
    alert('数値を入力せよ');//非数の場合は警告するよ
    location.reload();//alertが解除されたらリロードするよ
  } else {//非数じゃない場合は
    let ages = parseInt( age );//整数にするよ
    if( ages<= 12 ){ //12歳までは幼い
        message = "幼いですね！";
    } else if( ages > 12 &&  31 > ages ){ //13歳から30歳までは若い
        message = "若いですね！";
} else if( ages > 30 && 61 > ages){//31歳から60歳までは実年
        message = "実年ですね！！";
        } else{ //61歳からは壮年
        message = "壮年ですね！！";
        }
        //っていう能書きをhtmlに出力すんのね
    let messageArea = document.getElementById("answer");
    messageArea.innerHTML = message;
  }
  }

/*コンソールに表示する版 */
/*
{
 let moji = prompt('年齢を入力せよ');
 if( isNaN( moji )){
   console.log('数値を入力せよ');
 } else {
//   console.log(`${ moji }` + ('歳ですね!') )
// }
 let age = parseInt( moji );
 if( age<= 6 ){
   console.log('幼女ですね！');
 } else{
   console.log('許容範囲外です');
 }
}
}
*/