import Vue from 'vue'
import VueRouter from 'vue-router'
import error from '../components/404'
import login from "../components/login";
import Home from "../components/Home";
Vue.use(VueRouter)

  const routes = [
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
      path: '/'
    },
    {
      //主页
      name:'home',
      component: Home,
      path: '/home'
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
