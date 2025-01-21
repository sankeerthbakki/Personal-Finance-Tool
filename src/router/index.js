import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue';
import Transactions from '@/views/Transactions.vue';
import Reports from '@/views/Reports.vue';

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/transactions', name: 'Transactions', component: Transactions },
    { path: '/reports', name: 'Reports', component: Reports },
  ],
})

export default router
