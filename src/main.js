

// 引入vue
import Vue from 'vue'
// 引入路由文件
import VueRouter from 'vue-router'

import App from './App.vue'
// 引入首页路由
import Index from "./components/01-index.vue"

Vue.use(VueRouter)
let routes=[
  {
    path:"/",
   redirect:"/Index"
  },
  {
    path:"/Index",
    component:Index
  }
]
let router=new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
