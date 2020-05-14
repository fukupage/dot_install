'use strict'; //お約束（javascriptには必須）

function sample() {

	let age = testForm.textbox.value;//testFormフォームのnameがtextboxから内容を取得
	let message = "";//表示メッセージは一旦空にするよ
	if (isNaN(age)) {//入力された値が非数（数値じゃない）か判断するよ
		alert('数値を入力せよ');//非数の場合は警告するよ
		location.reload();//alertが解除されたらリロードするよ
	} else {//非数じゃない場合は
		let ages = parseInt(age);//整数にするよ
		if (ages <= 12) { //12歳までは幼い
			message = "幼い";
		} else if (ages > 12 && 31 > ages) { //13歳から30歳までは若い
			message = "若い";
		} else if (ages > 30 && 61 > ages) {//31歳から60歳までは実年
			message = "実年";
		} else { //61歳からは壮年
			message = "壮年";
		}
		//っていう能書きをhtmlに出力すんのね
		let messageArea = document.getElementById('answer');
		messageArea.innerHTML = `${message}ですね！`;

		//実年齢と能書きを表示します。
		const list = document.querySelector('ansLog'); 
		const cleateAddList = Task => {
		const html =`
		<li>${ages}歳の${message}の方、解答ありがとうございます！</li>;
		`;
		list.innerHTML += html;
	}
		let ansLog = document.getElementById('ans_log');
		let ansLi = document.getElementsByTagName('li');
		console.log(ansLog);
		console.log(ansLi);
		if (ansLog.hasChildNodes()){
			ansLog.appendChildNodes();
			ansLog.innerHTML = `${ages}歳の${message}　解答ありがとうございます！`;
			console.log("oh..");

		} else {
			let li = document.createElement('li');
		}
	}
}