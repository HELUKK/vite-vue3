import { onMounted } from 'vue'
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
    path: '/example06-1',
    component: () => import('@/views/example06/Example06-1.vue')
  },
  {
    props: true,
    path: '/example06-2',
    component: () => import('@/views/example06/Example06-2.vue')
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
  },
  {
    props: true,
    path: '/example08-1',
    component: () => import('@/views/example08/Example08-1.vue')
  },
  {
    props: true,
    path: '/example08-2',
    component: () => import('@/views/example08/Example08-2.vue')
  },
  {
    props: true,
    path: '/example08-3',
    component: () => import('@/views/example08/Example08-3.vue')
  },
  {
    props: true,
    path: '/example09-1',
    component: () => import('@/views/example09/Example09-1.vue')
  },
  {
    props: true,
    path: '/example09-2',
    component: () => import('@/views/example09/Example09-2.vue')
  },
  {
    props: true,
    path: '/example09-3',
    component: () => import('@/views/example09/Example09-3.vue')
  },
  {
    props: true,
    path: '/example09-4',
    component: () => import('@/views/example09/Example09-4.vue')
  },
  {
    props: true,
    path: '/example10-1',
    component: () => import('@/views/example10/Example10-1.vue')
  },
  {
    props: true,
    path: '/example10-2',
    component: () => import('@/views/example10/Example10-2.vue')
  },
  {
    props: true,
    path: '/example11-1',
    component: () => import('@/views/example11/Example11-1.vue')
  },
  {
    props: true,
    path: '/example12-1',
    component: () => import('@/views/example12/Example12-1.vue'),
    children: [
      {
        // 空，默认加载的组件。
        // 即路由至/example12-1，router-view直接加载此组件。也可不设置
        path: '',
        component: () => import('@/views/example12/CourseAbout.vue')
      },
      {
        // 声明相对路径。则路由到此组件的路径包含父组件路径
        // /example12-1/course
        path: 'course',
        components: {
          default: () => import('@/views/example12/CourseHome.vue'),
          button: () => import('@/views/example12/AddCourseButton.vue')
        }
      },
      {
        // 声明根路径。则路由到此组件的路径不包括父组件路径
        path: '/homework',
        components: {
          default: () => import('@/views/example12/CourseHomework.vue'),
          button: () => import('@/views/example12/AddHomeworkButton.vue')
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
