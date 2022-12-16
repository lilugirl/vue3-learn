<template>
  <div>
    <h1>搜索 {{ localMessage }}</h1>
    <MyComponent v-slot="slotProps">
      这可如何是好 {{ slotProps.text }} {{ slotProps.count }}</MyComponent
    >
    <CustomInput v-model.capitalize="bookTitle" />
    {{ bookTitle }}

    <UserName v-model:first-name="first" v-model:last-name="last" />
    {{ first + " " + last }}

    <MyButton @click="onClick" class="bar" />
    <CustomLayout id="custom-layout">
      <template #header="healerProps">
        <h1>Here might be a page title</h1>
        {{ healerProps }}
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </CustomLayout>
    <FancyButton
      >这里是个按钮 <MyButton @click="onClick" class="bar"
    /></FancyButton>
    <FancyButton />
    <FancyList :api-url="url" :pre-page="10">
      <template #item="{ body, username, likes }">
        <p>{{ body }}</p>
        <p>by {{ username }} | {{ likes }} likes</p>
      </template>
    </FancyList>
    <MouseTracker v-slot="{ x, y }"> Mouse is at {{ x }},{{ y }} </MouseTracker>
  </div>
</template>
<script>
  import CustomInput from "../components/CustomInput.vue";
  import UserName from "../components/UserName.vue";
  import MyButton from "../components/MyButton.vue";
  import CustomLayout from "../components/CustomLayout.vue";
  import FancyButton from "../components/FancyButton.vue";
  import MyComponent from "../components/MyComponent.vue";
  import FancyList from "../components/FancyList.vue";
  import MouseTracker from "../components/MouseTrackeer.vue";
  export default {
    components: {
      CustomInput,
      UserName,
      MyButton,
      CustomLayout,
      FancyButton,
      MyComponent,
      FancyList,
      MouseTracker,
    },
    inject: {
      localMessage: {
        from: "message",
        default: "默认值",
      },
    },
    data() {
      return {
        bookTitle: "",
        first: "",
        last: "",
        url: "",
      };
    },
    methods: {
      onClick() {
        alert("父亲触发");
      },
      changeValue() {
        console.log("chang value");
      },
    },
  };
</script>
