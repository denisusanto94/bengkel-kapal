import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../src/assets/style/main.scss';

import VueGoodTablePlugin from 'vue-good-table';

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

Vue.use(DatePicker);

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
