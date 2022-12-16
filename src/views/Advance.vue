<template>
  <h1>高级功能</h1>
  <div><MyModal /></div>
  <AdminPage> 这里是一个异步组件 </AdminPage>
</template>
<script>
  import { defineAsyncComponent } from "vue";
  import Loading from "../components/Loading.vue";
  import Error from "../components/Error.vue";
  import MyModal from "../components/MyModal.vue";
  export default {
    components: {
      MyModal,
      AdminPage: defineAsyncComponent({
        loader: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(import("../components/CustomLayout.vue"));
            }, 2000);
          });
        },
        loadingComponent: Loading,
        delay: 200,
        errorComponent: Error,
        timeout: 3000,
      }),
    },
  };
</script>
