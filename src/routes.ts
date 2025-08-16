import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue'),
    },
    { path: '/', component: () => import('./views/AuthView.vue') },
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
