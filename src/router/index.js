import Vue from 'vue'
import VueRouter from 'vue-router'
import error from '../components/404'
import login from "../components/login";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/login'
    },
    {
      //404页面
      name:'error',
      component:error,
      path:'/404'
    },
    {
      //登录页面
      name:'login',
      component: login,
      path: '/login'
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
