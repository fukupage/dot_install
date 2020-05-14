		'use strict'; //お約束（javascriptには必須）

		//定数
		/*
		console.log('Hello World from main.js!');
		console.log('it's me!');
		*/

		/*
		console.log("it's me!");
		console.log('it\'s me!');
		*/

		/*
		console.log('Hello\n\tWorld!');
		console.log('Hello' + 'World!');
		*/
		/*
		console.log(10 + 3); //13
		console.log(10 - 3); //7
		console.log(10 * 3); //30
		console.log(10 / 3); //3.333333.....
		console.log(10 % 3); // 1
		console.log(10 ** 3); //1000
		console.log(2 + 10 * 3); //32
		console.log((2 + 10) * 3); //36
		*/

	//変数
	/*
	let price = 150;
	const b = 140;
	const c = 160;
	console.log(price * b);
	console.log(price * c);

	price = 170;
	console.log(price * b);
	console.log(price * c);
	*/
/*
let price = 500;
    
//price = price + 100;

price += 100;

//price = price * 2;

price *= 2;

//price = price + 1;

price++;

//price = price - 1;

price--;

console.log(price);
*/
/*
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof '5');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log('5' * 3);
console.log('5' - '3');
console.log('5' + 3);
console.log(parseInt('5', 10) + 3);
console.log(parseInt('hello', 10));
*/
//真偽値（Boolean）
/*
const price = 1200;
console.log(price > 1000); //true
console.log(price < 1000); //false
console.log(price >= 1000); //true
console.log(price <= 1000); //false
console.log(price === 1000); //false
console.log(price !== 1000); //true

//false -> 0, null undefined, '', false
//true -> それ以外

console.log(Boolean(0));
console.log(Boolean('hello!'));
*/

//条件分岐
/*
const score = 75;

if(score >= 80){
	console.log('Great!!');
} else if(score >= 60) {
	console.log('Good!');
} else {
	console.log('OK...');	
}
*/
/*
//条件演算子 
//条件 ? true : false ;
const score = 85;

score >= 80 ? console.log('Great!!') : console.log('OK...');
*/

/*
//論理演算子
// && なおかつ(AND)
// || もしくは(OR)
// ! 〜ではない(NOT)
const score = 85;
const name = 'Rei';

if (score >= 50){
   if(name === 'Rei'){
	   console.log('Good Job!!');
   }
}

if (score >= 50 && name === 'Rei'){
	console.log('Good Job!!')
}
*/
/*
//switchによる条件分岐

const signal = 'pink';

if(signal === 'red'){
	console.log('STOP!!!')
} else if(signal === yellow){
	console.log('Cation!!')
} 
} else if(signal === blue){
	console.log('GOOOOOOOOOOOOOO!')	 
 }
switch (signal){
	case 'red':
		console.log('STOP!!!');
		break;
	case 'yellow':
		console.log('Cation!!')
		break;
	case 'blue':
	case 'green':
		console.log('GOOOOOOOOOOOOOO!')	 
		break;
	default:
		console.log('Wrong Way!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}
*/
/*
//forを使ったループ処理
for (let i = 1; i <= 10; i++){
	console.log('hello!' + i);
	console.log(`hello World! ${i}`);
}
*/
//whileを使ったループ処理
/*
let hp = 100;

while(hp > 0){
	console.log(`${hp} HP left`);
	hp -= 15;

let hp = -15;

do{
	console.log(`${hp} HP left`);
	hp -= 15;
} while(hp > 0);
*/
//continue・break

// for (let i = 1;i <= 10 ; i++){
// 	if(i === 4){
// 		break;
// //	if(i % 3 === 0){
// //		continue;
// 	}
// 	console.log(i);
// }

/*
//関数・引数（引数）

// function showAd(message = 'Ads'){ //仮引数(かりひきすう)
// 	console.log('---------------------');
// 	console.log(`-      ${message}       -`);
// 	console.log('---------------------');
// }

// showAd('Header Ad'); //実引数（じつひきすう）
// console.log('Tom is great!');
// showAd('Ad');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// showAd('Footer Ad');
// console.log('Richard is great!');
// showAd('Ad');

// function sum(a, b, c){
// //	console.log(a + b + c);
// 	return a + b + c;
// }
*/

/*

//アロー関数

// const sum = function(a, b, c){
// 	return a + b + c;
// };

const sum = (a, b, c) => a + b + c;

// sum(1, 2, 3);
// sum(4, 5, 6);

const total = sum(1, 2, 3) + sum(4, 5, 6);
console.log(total);

// const double = function(a){
// 	return a * 2;
// };

const double = a => a * 2;
console.log(double(12));
*/

//スコープ
{
const x = 10;

function f(){
	// const x = 1;
	console.log(x);
};

f();

console.log(x);
}