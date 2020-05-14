const addTask = document.querySelector('.add'); //addクラスのセレクターを返す
const list = document.querySelector('.todos'); //todosクラスのセレクターを返す
const search = document.querySelector('.search input'); //searchクラスのinputタグを返す

//### 追加 ####
(function(){
  // 初期化処理
  // ローカルストレージに格納されている値を取得し、リストを生成する
  for(let key in localStorage){
    let html = localStorage.getItem(key); //ローカルストレージのkeyを取得する
    if(html){
      list.innerHTML += localStorage.getItem(key); //ローカルストレージから取得した内容をhtmlとして挿入する
    }
  }
})();

const saveTaskToLocalStorage = (task, html) => {//ローカルストレージに内容を保存するメソッド
  //nullは、localStorageに保存しない
  if(html){
    //localStorageは0からはじまる
    localStorage.setItem(task, html);//ローカルストレージに「task」を挿入した「html」をセットする
    return;//値を保持したまま処理を戻す。
  }
  return;
}

const deleteTaskFromLocalStorage = task => {//ローカルストレージからタスクをデリートする定数
  localStorage.removeItem(task);//ローカルストレージからtaskを削除する
  return;//処理を戻す
}

// ########

const createTodoList = task => {
  // HTML テンプレートを生成
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span><!-- 変数「task」の内容を挿入して表示 -->
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
  //############# 追加 ###################
  saveTaskToLocalStorage(task, html);// ローカルストレージにデータをセーブする

}

addTask.addEventListener('submit', e => { //submitが入力された場合（Enter？）
  // デフォルトのイベントを無効
  e.preventDefault();

  // タスクに入力した値を空白を除外して格納
  const task = addTask.add.value.trim();
  if(task.length){
    // Todo List の HTML を作成
    createTodoList(task);//「task」の値を保持して
    // タスクに入力した文字をクリア
    addTask.reset();//addフォームに入っている文字をクリア
  }
});

//削除機能
list.addEventListener('click', e => {//ゴミ箱を押されたか
  if (e.target.classList.contains('delete')) {//クリックされた要素は.delete（FontAwesomeのゴミ箱）が？
    e.target.parentElement.remove();//ゴミ箱を押されたliの要素を削除
    // ## 追加 ##
    const task = e.target.parentElement.textContent.trim();//改行も削除
    deleteTaskFromLocalStorage(task);//ローカルストレージからもタスクを削除
  }
});

//----------filterTasks
const filterTasks = (term) => {//termという変数をもったfilterTasksという定数を宣言する

  Array.from(list.children)
    //フィルター条件
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))//
    .forEach((todo) => todo.classList.remove('filtered'));//
};
//----------------------------


search.addEventListener('keyup', () => {//searchにキー入力がされた場合
  //空白削除かつ小文字に変換（大文字・小文字の区別をなくす）
  const term = search.value.trim().toLowerCase();
  filterTasks(term);//filterTasksを呼ぶ
});