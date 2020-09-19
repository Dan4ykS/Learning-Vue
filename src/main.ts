import { createApp, devtools } from 'vue';
import App from './components/App';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
