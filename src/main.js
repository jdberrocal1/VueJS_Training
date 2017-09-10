import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import {routes} from './routes';
import store from './store/store';
import appLoading from './components/loading/loading.vue'

Vue.use(VueRouter);

//http config
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-jdbr.firebaseio.com/';

//Global Components
Vue.component('app-loading', appLoading);

Vue.filter('currency',(value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter(
  {
    routes
  }
);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
