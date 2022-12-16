<template>
  <div class="btn-wrapper">
    <button class="btn" v-bind="$attrs" @click="onClick">
      按钮 <span>透传属性 {{ $attrs }}</span>
    </button>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    methods: {
      onClick() {
        alert("BaseButton被点击了");
      },
    },
  };
</script>
