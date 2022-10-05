import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import services from '../components/Services.vue'
import technology from '../components/Technology.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'ServicesView',
    component: services
  },
  {
    path: '/technology',
    name: 'TechnologyView',
    component: technology
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
