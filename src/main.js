import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Swiper from 'swiper';
// import 'swiper/css';

const app = createApp(App);
app.use(router);
app.mount('#app')
// app.use(Swiper);