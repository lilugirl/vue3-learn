<template>
  <button @click="open = true">打开</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>哈喽 我是个modal弹框</p>
      <button @click="open = false">关闭</button>
    </div>
  </Teleport>
</template>
<script>
  export default {
    data() {
      return {
        open: false,
      };
    },
  };
</script>
<style scoped>
  .modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
  }

  /*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal,
  .modal-leave-to .modal {
    -webkit-transform: scale(10.1);
    transform: scale(10.1);
    background: red;
  }
</style>
