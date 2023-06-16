import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import '@/styles/common.scss';
import { lazyPlugin } from '@/directives';
import { componentsPlugin } from '@/components/index.ts';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router);
app.use(pinia);
app.use(lazyPlugin);
app.use(componentsPlugin);
app.mount('#app');
