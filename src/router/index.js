import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Login = () => import('../views/Login/Login.vue')
const Signup = () => import('../views/Signup/Signup.vue')
const Options = () => import('../views/Options/Options.vue')

const Groups = () => import('../views/Groups/Groups.vue')
const GroupList = () => import('../views/Groups/GroupList/GroupList.vue')



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/options',
    children: [
      {
        path: '/signup',
        name: 'Signup',
        component: Signup,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/options',
        name: 'Options',
        component: Options,
      },
    ]
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups,
    redirect: '/list',
    children: [
      {
        path: '/list',
        name: 'GroupList',
        component: GroupList,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
