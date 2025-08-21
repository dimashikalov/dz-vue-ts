import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/auth.store';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue'),
    },
    {
      path: '/',
      component: () => import('./views/AuthView.vue'),
      // redirect: { name: 'login' },
      // name: 'auth',
      children: [
        { path: '', component: () => import('./views/Welcome.vue'), name: 'auth' },
        { path: 'login', component: () => import('./views/Login.vue'), name: 'login' },
        { path: 'register', component: () => import('./views/Register.vue'), name: 'register' },
      ],
    },

    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      // name: 'main',
      children: [
        { path: '', component: () => import('./views/MeditationView.vue'), name: 'main' },
        { path: 'stat', component: () => import('./views/StatisticsView.vue') },
      ],
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  const publicPages = ['auth', 'login', 'register'];
  if (!authStore.getToken && !publicPages.includes(to.name as string)) {
    return { name: 'auth' };
  }
});
