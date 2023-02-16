<template>
  <div class="app-wapper">
    <input
      class="app-inp"
      v-model="reqUrl"
      type="text"
      placeholder="输入请求地址"
    />
    <button class="app-btn" @click="_onBtnClick">发起请求</button>
    <div class="app-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      reqUrl: "",
      content: "hhhh",
    };
  },
  methods: {
    _onBtnClick() {
      if (!this.reqUrl) {
        this.content = "请求地址为空";
        return;
      }

      fetch(this.reqUrl, {})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.content = `请求错误：${err.getMessage()}`;
        });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-wapper {
  padding: 66px 0 0 66px;

  .app-inp {
    width: 60vw;
  }

  .app-content {
    margin-top: 20px;
  }
}
</style>
