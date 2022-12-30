import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/prostration_verses',
    name: 'prostrationVerses',
    component: () => import('../views/ProstrationVerses.vue')
  },
  {
    path: '/rabbana_duas',
    name: 'RabbanaDuas',
    component: () => import('../views/RabbanDuas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
