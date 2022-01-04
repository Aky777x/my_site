(function () {
  /* デバイスの確認※iOSかどうかを判定したい */
  const ua = navigator.userAgent;
  // iOS用処理 ※iOSはバグや特殊な仕様があるので、処理を分ける
  const iosFlg = ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0;

  if (iosFlg) {
    alert("ipadだよ");
    let elm = document.getElementsByTagName("html")[0];
    elm.style.transformOrigin = "top left";
    elm.style.transform = "scale(0.5)";
  } else {
    console.log("not iPad");
  }

  const width = new Vue({
    el: ".width",
    data: {
      width: "",
      height: "",
    },
    mounted: function () {
      let checkWidth = setInterval(this.checkWidth, 500);
    },
    methods: {
      checkWidth: function () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      },
    },
  });
})();
