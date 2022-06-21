import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerScrollSpy } from 'vue3-scroll-spy';

import AOS from "aos";
import "aos/dist/aos.css";
//import { VueReCaptcha } from 'vue-recaptcha-v3'

const app = createApp(App);
registerScrollSpy(app);
app.use(store).use(router);
app.use({
  install: () => {
    AOS.init();
  },
});
app.mount('#app')
