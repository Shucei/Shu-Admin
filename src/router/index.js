import { createRouter, createWebHashHistory } from "vue-router";

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path:'/',
    component:()=>import('@/views/layout')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router