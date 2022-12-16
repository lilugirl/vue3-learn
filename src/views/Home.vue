<template>
  <h1>首页</h1>
  <AlertBox> 这里有个东西 {{ $translate("greetings.hello") }}</AlertBox>

  <Transition>
    <p v-if="show">这里是个动画显示</p>
  </Transition>
  <button @click="show = !show">显/隐</button>
  <div class="demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <KeepAlive>
      <component :is="currentTab" class="tab"></component>
    </KeepAlive>
  </div>
</template>
<script>
  import About from "./About.vue";
  import Blog from "./Blog.vue";
  export default {
    components: {
      About,
      Blog,
    },
    data() {
      return {
        show: true,
        currentTab: "About",
        tabs: ["About", "Blog"],
      };
    },
  };
</script>
<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
