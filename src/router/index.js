import { createRouter, createWebHistory } from 'vue-router'
//import Home from '@/views/Home.vue'
import Databinding from '@/views/databinding/Databinding.router.js'
import NestRouter from '@/views/nested/Nested.router.js'
import ModalRouter from "@/views/modal/modal.router.js"
import Provide from '@/views/provide/provide.router.js'
import Composition from '@/views/composition/Composition.router.js'
import Vuex from '@/views/vuex/vuex.router.js'
import KakaoLogin from '@/views/login/KakaoLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: KakaoLogin
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/About.vue')
  },
  Databinding,
  NestRouter,
  ModalRouter,
  Provide,
  Composition,
  Vuex
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
