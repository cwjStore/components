<template>
  <transition name="el-message-fade">
    <div v-show="visible" class="my-msg">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      visible: true,
    };
  },
  methods: {
    close() {
      setTimeout(() => {
        this.visible = false;
      }, 2000);
    },
  },
  mounted() {
    this.close();
  },
};
</script>