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
    component: () => import('../pages/Tasks'),
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
