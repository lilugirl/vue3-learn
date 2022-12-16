<script>
  import BlogPostRow from "./BlogPostRow.vue";
  export default {
    props: ["title"],
    emits: ["enlarge-text"],
    components: {
      BlogPostRow,
    },
  };
</script>
<template>
  <h4>{{ title }}</h4>
  <button @click="$emit('enlarge-text')">放大字体</button>
  <table>
    <tr is="vue:blog-post-row"></tr>
  </table>
</template>
