import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Groups = () => import('../views/Groups/Groups.vue')
const CreateGroup = () => import('../views/Groups/CreateGroup/CreateGroup.vue')

const Login = () => import('../views/Login/Login.vue')
const LoginCode = () => import('../views/Login/LoginCode/LoginCode.vue')
const LoginPassword = () => import('../views/Login/LoginPassword/LoginPassword.vue')

const LoginGroup = () => import('../views/LoginGroup/LoginGroup.vue')
const LoginEmail = () => import('../views/LoginGroup/LoginEmail/LoginEmail.vue')
const LoginPass = () => import('../views/LoginGroup/LoginPass/LoginPass.vue')

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
  },
  {
    path: '/login',
    redirect: '/login/code',
    name: 'Login',
    component: Login,
    children: [
      {
        path: 'code',
        name: 'LoginCode',
        component: LoginCode
      },
      {
        path: 'user',
        name: 'LoginPassword',
        component: LoginPassword
      },
    ]
  },
  {
    path: '/group',
    redirect: '/group/mail',
    name: 'LoginGroup',
    component: LoginGroup,
    children: [
      {
        path: 'mail',
        name: 'LoginEmail',
        component: LoginEmail
      },
      {
        path: 'pass',
        name: 'LoginPass',
        component: LoginPass
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
