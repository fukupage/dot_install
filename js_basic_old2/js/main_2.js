'use strict'; //お約束（javascriptには必須）
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
