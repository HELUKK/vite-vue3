import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/example01/Example01View.vue')
  },
  {
    path: '/example02-1',
    component: () => import('@/views/example02/Example02-1.vue')
  },
  {
    path: '/example02-2',
    component: () => import('@/views/example02/Example02-2.vue')
  },
  {
    path: '/example02-3',
    component: () => import('@/views/example02/Example02-3.vue')
  },
  {
    props: true,
    path: '/example03-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example03/Example03-1.vue')
  },
  {
    props: true,
    path: '/example04-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example04/Example04-1.vue')
  },
  {
    props: true,
    path: '/example05-1',
    component: () => import('@/views/example05/Example05-1.vue')
  },
  {
    props: true,
    path: '/example05-2',
    component: () => import('@/views/example05/Example05-2.vue')
  },
  {
    props: true,
    path: '/example05-3',
    component: () => import('@/views/example05/Example05-3.vue')
  },
  {
    props: true,
    path: '/example07-1',
    component: () => import('@/views/example07/Example07-1.vue')
  },
  {
    props: true,
    path: '/example07-2',
    component: () => import('@/views/example07/Example07-2.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
