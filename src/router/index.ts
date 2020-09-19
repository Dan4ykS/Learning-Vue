import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Tasks'),
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../pages/Posts'),
  },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
