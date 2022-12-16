import { createApp } from "vue";
import router from '@/router'
import i18nPlugin from './plugins/i18n.js'
import App from "@/App.vue";
import TODO from './components/Todo.vue'
import AlertBox from './components/AlertBox.vue'


const app=createApp(App)
app.config.errorHandler=(err)=>{
    console.log('错误',err)
}

let window=null
app.config.globalProperties={
    window:'window',
    msg:'全局属性'
}

app.component('TODO',TODO)
app.component('AlertBox',AlertBox)
app.provide('message','hello!')
app.directive('color',(el,binding)=>{
    el.style.color=binding.value
})

app.use(i18nPlugin,{
    greetings:{
        hello:'Bonjour!'
    }
})
app.use(router).mount("#app");


// const app1=createApp(App).mount('#app1')