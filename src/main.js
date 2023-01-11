import { createApp } from 'vue';
// 匯入 GSAP 套件
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App.vue';
import router from './router';

const app = createApp(App);
// 註冊 GSAP
app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
app.use(router);
app.mount('#app');
