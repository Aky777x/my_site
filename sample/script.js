(function () {
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
