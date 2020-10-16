<template>
  <div class="toast">
    <transition name="fade">
      <div class="little-tip" v-show="showTip">
        <span>{{msg}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'wjToast',
  data() {
    return {
      showTip: true,
      msg: "",
      type: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.showTip = false;
    }, 1500);
  },
};
</script>
