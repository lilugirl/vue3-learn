
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import Search from "@/views/Search.vue";
import Advance from "@/views/Advance.vue";
import Compose from '@/views/Compose.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/about", name: "About", component: About },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/search", name: "Search", component: Search },
  { path:"/advance",name:"Advance",component:Advance},
  { path:"/compose",name:"Compose",component:Compose},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
