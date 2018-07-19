import Vue from 'vue';
import VueRouter from 'vue-router';

import Category from './theme/Category.vue';
import Login from './theme/Login.vue';
import NotFound from './theme/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/login', component: Login },
    { path: '/', redirect: '/category/front-end' },
    { path: '*', component: NotFound },
  ],
});

export default router;
