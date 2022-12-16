<template>
  <h1>
    关于 <button @click="increment">+1 {{ count }}</button> {{ msg }}
    {{ window }} {{ student.name }} <button @click="mutateDeeply">更新</button>
  </h1>
  <p>姓名 {{ fullName }} <button @click="changeName">改名</button></p>
  <p>当前时间 {{ now }} {{ now2() }}</p>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <TodoDeleteButton />
  <div class="static" :class="classObject">
    有错误吗？ <button @click="submit">提交</button>
  </div>
  <TODO title="日常" />
  <MyComponent :class="{ active: isActive }" />
</template>
<script>
  import { nextTick } from "vue";
  import MyComponent from "../components/MyComponent.vue";
  export default {
    inject: ["i18n"],
    components: {
      MyComponent,
    },
    data() {
      return {
        isActive: true,
        hasError: false,
        firstName: "liu",
        lastName: "yi",
        count: 0,
        student: {},
        author: {
          name: "liuyi",
          books: [
            "Vue2 - Advanced Guide",
            "Vue3 - Basic Guid",
            "Vue4 -The Mystery",
          ],
        },
      };
    },
    created() {
      this.i18n.greetings.hello = "我是黑客，你的翻译系统被黑了";
      console.log(this.i18n.greetings.hello);
    },
    methods: {
      increment() {
        console.log("increment", this.count);
        this.count++;
        console.log("increment", this.count);
        nextTick(() => {
          console.log("nextTick", this.count);
        });
      },
      mutateDeeply() {
        this.student.name = "liuyi";
      },
      now2() {
        return Date.now();
      },
      changeName() {
        this.fullName = "xiao wang";
      },
      submit() {
        this.isActive = false;
        this.hasError = true;
      },
    },
    mounted() {
      this.count++;
      const newStudent = {};
      this.student = newStudent;
      console.log(newStudent === this.student, newStudent, this.student);
    },
    computed: {
      classObject() {
        return {
          active: this.isActive,
          "text-danger": this.hasError,
        };
      },
      publishedBooksMessage() {
        return this.author.books.length > 0 ? "Yes" : "No";
      },
      now() {
        return Date.now();
      },
      fullName: {
        get() {
          return this.firstName + " " + this.lastName;
        },
        set(newValue) {
          [this.firstName, this.lastName] = newValue.split(" ");
        },
      },
    },
  };
</script>
<style scoped>
  .static {
    color: blue;
  }
  .active {
    background: yellow;
  }

  .text-danger {
    color: red;
  }
</style>
