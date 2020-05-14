'use strict'; //お約束（javascriptには必須）
{
	const scores = [80,90,40,50];
	//配列とは
	// console.log(scores[0]);
	// console.log(scores[1]);
	// console.log(scores[2]);
	// scores[0] = 30;
	// scores[1] = 20;
	// scores[2] = 90;
	// console.log(scores[0]);
	// console.log(scores[1]);
	// console.log(scores[2]);
	// console.log(scores.length);

	// console.log(`Score: ${scores[0]}`);
	// console.log(`Score: ${scores[1]}`);
	// console.log(`Score: ${scores[2]}`);

	// for(let i = 0; i < scores.length ; i++){
	// 	console.log(`Score ${i}: ${scores[i]}`)
	// }

	//配列の操作
	/*	
	for(let i = 0 ; i < scores.length ; i++){
		console.log(`Score ${i}: ${[scores[i]}`);
	};
	scores.push(60, 50);
	console.log('\n');

	for(let i = 0 ; i < scores.length ; i++){
		console.log(`Score ${i}: ${[scores[i]}`);
	};
	scores.shift();
	console.log('\n');

	for(let i = 0 ; i < scores.length ; i++){
		console.log(`Score ${i}: ${[scores[i]}`);
	};
	*/

	//配列の操作 splice
	/*
	scores.splice(1 , 1, 120, 130);
	for(let i = 0 ; i < scores.length ; i++){
		console.log(`Score ${i}: ${scores[i]}`);
	}*/

	// //スプレッド構文
	/*
	// const otherScores = [1000, 2150];
	// const scores = [80,90,40,50, ...otherScores];

	// console.log(scores);
	// console.log(...otherScores);

	// function sum( a, b){
	// 	console.log(a + b);
	// }
	// sum(...otherScores);
*/

//分割代入
/*
	const scores = [80,90,40,50];
	// const [a, b, c, d] = scores;
	// console.log(a);
	// console.log(b);
	// console.log(c);
	// console.log(d);

	// const [a, b, ...others] = scores;
	// console.log(a);
	// console.log(b);
	// console.log(others);

	let x = 100;
	let y = 150;
	let z = 4000;

	[x, y, z] = [z, x, y];

	console.log(x);
	console.log(y);
	console.log(z);
	*/

//forEach()
/*
	// scores.forEach((score) => {
	scores.forEach((score, index) => {
	console.log(`Score ${index + 1}: ${score}`);
	});
*/

//map()
/*
	 const prices = [180, 190, 200]
	// const updatedPrices = prices.map((price) => {
	// 	return price + 20;
	// });

	const updatedPrices = prices.map(price => price + 20);
	console.log(updatedPrices);
*/

//filter()
	const numbers = [1, 4, 7, 8, 10];
	// const evenNumbers = numbers.filter(number => {
	// 	if(number % 2 === 0){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// });
	// const evenNumbers = numbers.filter(number => number % 2 === 0);
	// console.log(evenNumbers);

	// オブジェクト
	/*
	// const point = [100, 180];
	// const point = {
	// 	x: 100,
	// 	y: 180,
	// };
	// console.log(point);

	const point = {
		x: 100,
		y: 180,
	};
	point.x = 120;

	// console.log(point.x);
	// console.log(point['y']);
	point.z = 90;
	delete point.y;
	console.log(point);

	const otheProps = {
		r:4,
		color: 'red'
	}
	const point = {
		x: 100,
		y: 180,
		...otheProps,
	};
	// console.log(point);
	const {x, r, ...others} = point;
	console.log(x);
	console.log(r);
	console.log(others);
	*/

	//配列にオブジェクトを使う
	/*
	// const point = {
	// 	x: 100,
	// 	y: 180,
	// };

	// const keys = Object.keys(point);
	// keys.forEach(key => {
	// 	console.log(`key: ${key} Value: ${point[key]}`);
	// }); 

	// const points = [
	// 	{x:30, y:50},
	// 	{x:20, y:30},
	// 	{x:40, y:10},
	// ];
	// console.log(points[1].y);
	*/

	//配列の挙動
	/*
	// {
	// 	let x = 1; //xに1を代入
	// 	let y = x; //yにxを代入
	// 	x = 5;//xに5を代入
	// 	console.log(x);
	// 	console.log(y);
	// }
	// {
	// 	let x = [1, 2]; //xの配列に1と2を代入
	// 	let y = x; //yはxの配列を参照している
	// 	x[0] = 5;//xの0に5を代入
	// 	console.log(x);
	// 	console.log(y);
	// }
	// {
	// 	let x = [1, 2]; //xの配列に1と2を代入
	// 	let y = [...x]; //yにxの配列を展開している
	// 	x[0] = 5;//xの0に5を代入
	// 	console.log(x);
	// 	console.log(y);
	//
	*/

	//文字列の操作
	/*
	{
		const str = 'hello';
		console.log(str.length);//文字数を表示
		// console.log(str.substring(開始位置, 終了位置));
		console.log(str.substring(2, 4));
		console.log(str[1]);

		const d = [2020, 4 ,6];
		console.log(d.join('/'));
		console.log(d.join(''));

		const t = '09:35:15';
		// console.log(t.split(':'));
		const [hour, minute, second] = t.split(':');
		console.log(hour);
		console.log(minute);
		console.log(second);
	};
	*/

	//数値の操作
	/*
	{
		const scores = [10, 3, 9];

		let sum = 0;

		scores.forEach(score =>{
			sum += score;
		});

		const avg = sum / scores.length;

		// console.log(sum);
		// console.log(Math.floor(avg));
		// console.log(Math.ceil(avg));
		// console.log(Math.round(avg));
		// console.log(avg.toFixed(3));
		console.log(Math.random());
	}
	*/
	//特定の範囲内の乱数発生（整数）
	/*
	{
		// console.log(Math.random());
		// 0, 1, 2
		// console.log(Math.floor(Math.random()) * 3);
		// 0 〜 n
		// console.log(Math.floor(Math.random()) * (n + 1)));
		// min 〜 max
		// console.log(Math.floor(Math.random() * (max + 1 -min) + min));
		//サイコロ（1〜6の数値をランダムで作る場合）
		console.log(Math.floor(Math.random() * 6) + 1);
	}
	*/

	//日時を扱う
	/*
	const dd = new Date();
	console.log(dd);
	console.log(`${dd.getFullYear()}年 ${dd.getMonth() + 1}月 ${dd.getDate()}日`);

	//const dd = new Date(2020, 4);//2020年4月（1日）（0時0分0秒）
	dd.setHours(10, 20, 30);//同日の10時20分30秒
	dd.setDate(35);//自動的に日付は修正される
	dd.setDate(dd.getDate() + 3);//自動的に日付は修正される
	console.log(dd);*/

	//ダイアログの表示
	/*
	// {
	// 		//alert('こんにちは！こんにちは！ぼくはまちちゃん！');
	// 	const answer = confirm('こんにちは！こんにちは！ぼくはまちちゃん！');
	// 	if(answer) {
	// 		alert('ぼくはまちちゃん！');
	// 	} else {
	// 		alert('こんにちは！こんにちは！');
	// 	}
	// }
	*/

	// setInterval
/*
	// let i = 0;
	// function showTime(){
	// 	console.log(new Date());
	// 	i++;
	// 	if(i > 2){
	// 		clearInterval(intervalId);
	// 	};
	// }
	// const intervalId = setInterval(showTime, 1000);
*/

	// setTimeout
/*
	// let i = 0;
	// function showTime(){
	// 	console.log(new Date());
	// 	const timeoutId = setTimeout(showTime, 1000);
	// 	i++;
	// 	if(i > 2){
	// 		clearTimeout(timeoutId);
	// 	}
	// }
	// showTime();
*/

//例外処理
/*
const name = 'rei';
// const name = 5;
try {
	console.log(name.toUpperCase());
} catch(e) {
	console.log('えらーだよー');
	console.log(e);
}

console.log('Finish!');
*/

// クラス・メソッド・コンストラクタ
{
	class Post{ //親クラス 
		constructor(text,likeCount){
			this.text = text;
			this.likeCount = likeCount;
		}

		show1(){
			console.log(`${this.text} - ${this.likeCount}LIKE`);
		}
	}
		class SponsoredPost extends Post{
		constructor(text,likeCount,sponsor){
		super(text,likeCount);
		this.sponsor = sponsor;
		}
		show2(){
			console.log(`${this.text} - ${this.likeCount}LIKE`);
			console.log(`...posted by ${this.sponsor}`);
		}
	}
	const posts = [ //子クラス
	new Post('勉強しんどい', 10),
	new Post('だらだらしたい', 25),
	new Post('ラーメン食べたい', 25),
];

const sponsoredposts = [ //子クラス
	new SponsoredPost('遊びたい', 10,'hogehoge'),
	new SponsoredPost('寝たい', 5,'fugafuga'),
	new SponsoredPost('でも、何かしないと', 50,'hogefuga'),
];


posts[0].show1();
posts[1].show1();
posts[2].show1();
sponsoredposts[0].show2();
sponsoredposts[1].show2();
sponsoredposts[2].show2();
}
}