<template>
  <div id="app">
    <wj-text></wj-text>
    <wj-button></wj-button>
    <button @click="click">按钮</button>
    <!-- <app-vue></app-vue> -->
  </div>
</template>

<script>
import MyMsg from "../packages/alert/src/main";
export default {
  name: "App",
  mounted() {
    console.log("MyMsg", typeof MyMsg);
  },
  methods: {
    click() {
      this.$wjToast({ msg: "cheng" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
