(function () {
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
