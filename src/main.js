import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
