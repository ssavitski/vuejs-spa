import Vue from 'vue';
import VueRouter from 'vue-router';

const Category = () => System.import('./theme/Category.vue');
const Login = () => System.import('./theme/Login.vue');
const NotFound = () => System.import('./theme/NotFound.vue');

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
