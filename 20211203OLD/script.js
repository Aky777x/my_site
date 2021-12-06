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

const width = new Vue({
  el: ".width",
  data: {
    width: "",
    device: "",
    deviceInfo: "",
  },
  mounted: function () {
    let checkWidth = setInterval(this.checkWidth, 500);
  },
  methods: {
    checkWidth: function () {
      this.width = window.innerWidth;
      this.device = this.checkDevice(window.innerWidth);
      this.deviceInfo = this.checkDeviceInfo();
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
    checkDeviceInfo: function () {
      var ua = navigator.userAgent;

      return ua;
      if (
        (ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0) &&
        ua.indexOf("Mobile") > 0
      ) {
        // スマートフォン用処理
      } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
        // タブレット用処理
      } else {
        // PC用処理
      }
    },
  },
});
