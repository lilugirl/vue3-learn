<template>
  <h2>我的博客</h2>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      @enlarge-text="postFontSize += 0.1"
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
    />
  </div>
  <input v-focus placeholder="修改颜色" v-model="color" />
  <div v-color="color">色块</div>
  <Todo title="看电视" v-color="color" />
</template>
<script>
  import BlogPost from "../components/BlogPost.vue";
  import Todo from "../components/Todo.vue";
  export default {
    components: {
      BlogPost,
      Todo,
    },
    directives: {
      focus: {
        mounted: (el) => el.focus(),
      },
    },
    data() {
      return {
        color: "red",
        posts: [
          { id: 1, title: "My journey with Vue" },
          { id: 2, title: "Blogging with Vue" },
          { id: 3, title: "Why Vue is so fun" },
        ],
        postFontSize: 1,
      };
    },
  };
</script>
