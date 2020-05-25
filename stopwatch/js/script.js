'use strict';

{
  const timer = document.getElementById('timer');　//タイマー全体
  const start = document.getElementById('start');  //スタートボタン
  const stop = document.getElementById('stop'); //ストップボタン
  const reset = document.getElementById('reset');  //リセットボタン
  let startTime; //スタート時の時間の取得
  let timeoutID; //解除したいタイマーのID
  let elapsedTime = 0; //経過時間の取得

  const countUp = function () {
    //.padStartはその桁数に満たない場合は不足した桁数を指定の文字で埋めるメソッド
    //new Date.getTime　と Date.now()　は同じメソッド
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');

    timer.textContent = `${m}:${s}.${ms}`;　//テンプレートリテラルで表示内容を整形

    //10マイクロ秒で表示を書き換え
    timeoutID = setTimeout(() => {
      countUp();
    }, 10);
  }

  //以下はボタン制御-------------------------------------------

  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  //ここまで------------------------------------------------------------

  setButtonStateInitial();

  //スタートをクリックしたらスタート時間を取得する
  //10マイクロ秒で表示を書き換え
  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateRunning();
    startTime = Date.now(); //
    countUp();
  });

  //ストップをクリックしたらタイマーを停止させて経過時間を取得
  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutID);
    elapsedTime += Date.now() - startTime;
  });

  //リセットをクリックしたら経過時間と表示をゼロに戻す
  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
}
