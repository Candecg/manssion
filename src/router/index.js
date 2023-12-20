import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Noticias y Eventos',
    name: 'Noticias y Eventos',
    component: () => import('../views/PAG1.vue')
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/Emergentes',
    name: 'Emergentes',
    component: () => import('../views/EmergentesView.vue')
  },
  {
    path: '/1',
    name: '1',
    component: () => import('@/views/KAROL.vue')
  },
  {
    path: '/2',
    name: '2',
    component: () => import('@/views/BEEF.vue')
  },
  {
    path: '/3',
    name: '3',
    component: () => import('@/views/MAD.vue')
  },
  {
    path: '/4',
    name: '4',
    component: () => import('@/views/FYB.vue')
  },
  {
    path: '/5',
    name: '5',
    component: () => import('@/views/DK.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/MANSSION_MUSIC',
  routes
})

export default router
