<template>
  <div>
    <slot name="item" body="body" username="username" likes="likes" />
  </div>
</template>
<script>
  export default {
    props: ["apiUrl", "prePage"],
    data() {
      return {
        username: "liuyi",
        body: "这一篇文章",
        likes: 40,
      };
    },
  };
</script>
