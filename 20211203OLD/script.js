let rightTargets = document.querySelectorAll(".right"); //アニメーションさせたい要素
let leftTargets = document.querySelectorAll(".left"); //アニメーションさせたい要素
let offset = 10; //アニメーションタイミング

window.addEventListener("scroll", function () {
  //スクロールしたとき

  //スクロール量を取得
  var scroll = window.scrollY;
  //画面の高さを取得
  var h = window.innerHeight;

  for (let target of rightTargets) {
    var pos = target.getBoundingClientRect().top + scroll; //アニメーションさせたい要素の位置を取得
    //スクロール量 > アニメーションさせたい要素の位置
    if (scroll > pos - h + offset) {
      // クラスを付与し、アニメーションを実行
      target.classList.add("right-to-left");
      //   target.classList.add("is-animated");
    }
  }
  for (let target of leftTargets) {
    var pos = target.getBoundingClientRect().top + scroll; //アニメーションさせたい要素の位置を取得
    //スクロール量 > アニメーションさせたい要素の位置
    if (scroll > pos - h + offset) {
      // クラスを付与し、アニメーションを実行
      target.classList.add("left-to-right");
      //   target.classList.add("is-animated");
    }
  }
});
