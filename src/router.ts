import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue'
import SendFeedback from './pages/SendFeedback.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/send-feedback',
      component: SendFeedback,
    },
  ],
});

export default router