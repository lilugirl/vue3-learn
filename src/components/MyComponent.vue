<template>
  <slot :text="greetingMessage" :count="1"></slot>
  <p>问一个问题<input v-model="question" ref="input" /></p>
  <p>{{ answer }}</p>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item.todo }}
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        greetingMessage: "你好 圣诞快乐",
        question: "",
        answer: "问题通常包含一个问号 ;-)",
        list: [{ todo: "洗碗" }, { todo: "刷锅" }],
      };
    },
    mounted() {
      this.$refs.input.focus();
      console.log(this.$refs.items);
    },
    watch: {
      question(newQuestion, oldQuestion) {
        if (newQuestion.includes("?")) {
          this.getAnswer();
        }
      },
    },
    methods: {
      async getAnswer() {
        this.answer = "思索中...";
        try {
          const res = await fetch("https://yesno.wtf/api");
          this.answer = (await res.json()).answer;
        } catch (error) {
          this.answer = "啊呀 API出错" + error;
        }
      },
    },
  };
</script>
<style>
  .active {
    background: pink;
  }
</style>
