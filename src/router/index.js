import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Groups = () => import('../views/Groups/Groups.vue')
const CreateGroup = () => import('../views/Groups/CreateGroup/CreateGroup.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/new',
    name: 'Group',
    component: CreateGroup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
