import Vue from 'vue';

import AppLayout from './theme/Layout.vue';
import store from './vuex';
import router from './router';

const app = new Vue({
  router,
  ...AppLayout,
  store,
});

export { app, router };
