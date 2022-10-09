import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// router
import router from '@/router';
// 引入全局的css
import '@/style/index.scss';

// Pinia
import { createPinia } from 'pinia';



createApp(App).use(createPinia()).use(router).mount('#app');
