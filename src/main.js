

// 引入vue
import Vue from 'vue'
// 引入路由文件
import VueRouter from 'vue-router'

import App from './App.vue'
// 引入首页路由
import Index from "./components/01-index.vue"
// 引入商品详情路由prodctDetail路由
import Product from "./components/02-productDetail.vue"
// 引入element包
import ElementUI from 'element-ui';
// 引入element样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入懒加载包
import VueLazyload from 'vue-lazyload'

// 引入事件插件moment包
import moment from "moment"
// y引入iview包
import iView from 'iview';
// 引入iview样式
import 'iview/dist/styles/iview.css';
// 全局过滤器
Vue.filter('capitalize', function (value) {
  return moment(value).format('YYYY年MM月DD日')
})
// 注册路由标签
Vue.use(VueRouter)
// 注册element标签
Vue.use(ElementUI)
// 注册iview
Vue.use(iView);
// 注册懒加载属性  注意图片需要用require模块化导入
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading:require("./assets/img/10.gif"),
  attempt: 1
})

let routes=[
  {
    path:"/",
   redirect:"/Index"
  },
  {
    path:"/Index",
    component:Index
  },
  {
    path:"/Prodct/:id",
    component:Product
  },
]
let router=new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
