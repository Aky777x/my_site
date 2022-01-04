(function () {
  /* デバイスの確認※iOSかどうかを判定したい */
  const ua = navigator.userAgent;
  // iOS用処理 ※iOSはバグや特殊な仕様があるので、処理を分ける
  const iosFlg = ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0;

  if (iosFlg) {
    // document.getElementById("kv-wrap").style.height = "75vh";
    // document.getElementsByClassName("site-name-wrap")[0].style.height = "75vh";
    let elm = document.getElementsByTagName("html")[0];
    elm.style.transformOrigin = "top left";
    elm.style.transform = "scale(0.5)";
  } else {
    console.log("not iPad");
  }

  function delayScrollAnime() {
    var time = 0.2; //遅延時間を増やす秒数の値
    var value = time;
    $(".delayScroll").each(function () {
      var parent = this; //親要素を取得
      var elemPos = $(this).offset().top; //要素の位置まで来たら
      var scroll = $(window).scrollTop(); //スクロール値を取得
      if (iosFlg) {
        scroll += 300; //iOS端末の場合、スクロールの判定を操作する
      }
      var windowHeight = $(window).height(); //画面の高さを取得
      var childs = $(this).children(); //子要素を取得

      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        //指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
        $(childs).each(function () {
          JSON.stringify("親: " + parent);
          JSON.stringify("子: " + childs);
          if (!$(this).hasClass("fadeUp")) {
            //アニメーションのクラス名が指定されているかどうかをチェック

            $(parent).addClass("play"); //親要素にクラス名playを追加
            console.log("対象: " + $(this));
            console.log("対象: " + this);
            $(this).css("animation-delay", value + "s"); //アニメーション遅延のCSS animation-delayを追加し
            $(this).addClass("fadeUp"); //アニメーションのクラス名を追加
            value = value + time; //delay時間を増加させる

            //全ての処理を終わったらplayを外す
            var index = $(childs).index(this);
            if (childs.length - 1 == index) {
              $(parent).removeClass("play");
            }
          }
        });
      } else {
        $(childs).removeClass("fadeUp"); //アニメーションのクラス名を削除
        value = time; //delay初期値の数値に戻す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

  const width = new Vue({
    el: ".width",
    data: {
      width: "",
      device: "",
    },
    mounted: function () {
      let checkWidth = setInterval(this.checkWidth, 500);
    },
    methods: {
      checkWidth: function () {
        this.width = window.innerWidth;
        this.device = this.checkDevice(window.innerWidth);
      },
      checkDevice: function (w) {
        if (w > 1440) {
          return "デスクトップPC相当";
        } else if (w >= 1200) {
          return "ノートPC相当";
        } else if (w >= 1080) {
          return "サイネージ相当";
        } else if (w >= 992) {
          return "タブレット(横)相当";
        } else if (w >= 744) {
          return "タブレット(縦)相当";
        } else if (w >= 620) {
          return "スプリットビュー等相当";
        } else {
          return "※非対応のためスクロール必須";
        }
      },
    },
  });
})();
