<template>
  <header>
    <slot name="header" message="hello">头部</slot>
  </header>
  <main v-bind="$attrs">
    <slot>主体</slot>
  </main>
  <footer>
    <slot name="footer">footer</slot>
  </footer>
</template>
<script>
  export default {
    created() {
      console.log(this.$attrs);
    },
    data() {
      return {
        greetingMessage: "你好啊",
      };
    },
  };
</script>
