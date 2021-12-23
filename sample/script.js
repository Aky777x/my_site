(function () {
  var change_scale = {
    //
    container: 500,
    percent: 1,
    function: function () {
      "use strict";
      if (change_scale.percent === window.devicePixelRatio) {
        var scale = document.documentElement.clientWidth;
        scale = scale / change_scale.container;
        scale = "scale(" + scale + ")";
        document.body.style.transform = scale;
      } else {
        change_scale.percent = window.devicePixelRatio;
      }
    },
  };
  (function () {
    "use strict";
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      if (window.devicePixelRatio !== 1) {
        alert(
          "申し訳ございません。スタイルが崩れている可能性があります。恐れ入りますが、倍率を100%に変更後、リロードしてください。"
        );
      }
    }
    change_scale.function();
  })();

  window.addEventListener("resize", function (event) {
    "use strict";
    change_scale.function();
  });
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
