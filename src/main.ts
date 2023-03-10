import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import './lib/chypre.scss';
import {router} from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
