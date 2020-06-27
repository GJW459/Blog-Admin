import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引用全局样式表
import './assets/global.css'
//引用 axios
import axios from 'axios'
//定义全局变量 $http
//设置请求的根路径axios.defaults.baseURL="http://localhost:3306"
Vue.prototype.$http = axios

//main.js映入Element-ui和font-awesome
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
