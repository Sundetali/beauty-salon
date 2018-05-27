import Vue from 'vue';
import App from './App.vue';

import BoostrapVue from 'bootstrap-vue';
Vue.use(BoostrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {store} from './store';
import {router} from './routes.js';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
