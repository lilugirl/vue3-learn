<template>
  <h1>组合组件</h1>
  <p>鼠标的位置在 {{ x }}, {{ y }}</p>
  <div>
    加载的文章id：
    <button v-for="i in 5" @click="id = i">{{ i }}</button>
    <div v-if="error">
      <p>呀 出错了{{ error.message }}</p>
      <button @click="retry">在次尝试</button>
    </div>
    <div v-else-if="data">
      数据：
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
<script setup>
  import { computed, ref } from "vue";
  import { useMouse } from "../hooks/mouse.js";
  import { useFetch } from "../hooks/fetch.js";
  const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
  const id = ref("1");
  const url = computed(() => baseUrl + id.value);
  const { x, y } = useMouse();
  const { data, error, retry } = useFetch(url);
</script>
