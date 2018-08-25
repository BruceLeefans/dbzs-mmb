# 18-08-23
用vue create 06.start命令创建了一个脚手架
首页在componets文件夹中的App.vue中
将html写进template标签中,注意,因为组件只能有一个根标签,所以需要用一个div包裹住内容
然后在style标签中用@import url()引入css文件
最后因为顶部的组件按钮需要js效果,找了一个基于jq的插件,所以需要在创建的06.start这个路径里用命令输入 npm||cnpm istall jquery --save
下载jquery这个包,然后在App.vue中的script标签导入 import $ from "jquery" ,将插件的js代码直接复制进script标签中,然后插件需要的样式css文件跟img图片文件夹,在assets文件夹下创建了一个lib文件夹用来放各种第三方文件,最后在style标签中用@import url(),将插件需要的样式导入
如果需要更改样式可以修改css文件或者在style标签中覆盖即可
然后中间样式用一个单文件组件来完成,在components文件夹下创建一个01-index.vue文件,这个文件中只能有三个标签,templa,script style 模板,js样式.
然后在回来main.js中 引入路由,但是要下好依赖文件, npm istall vue-router --save ,然后再用import VueRouter from "vue-router"的方式导入模块,在引入路由, import Index from "路劲/文件名"
注意使用单文件组件引入路由时,需要在上方使用Vue.use(VueRouter) // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter) 
然后定义组件 (路由)
let routes=[ {
    path:"/",
    redirect:"/Index"  注意,这里是重定向,意思是刚进来地址来是/会帮你补全成/index  
},
{
    path:"/Index",
    component:Index
}
]
创建 router 实例，然后传 `routes` 配置
let router=new VueRouter({
    routes
})
// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
    render:h>=h(App)
    router
}).$mount('#app')
路由启动后从首页进来中间就有东西了,然后回到01-index.vue文件中写逻辑代码
因为要请求数据,所以我要导入axios包 npm istall axios --save
vue代码写在export default {}中 其中多了一个name:""属性,目前不知道干吗用的,
data数据需要用data:funtion(){return{}} 在对象中创建的方式完成 因为事件需要页面加载时就触发
如果写到外面就不能用this指向data的数据,所以用到了vue中的生命周期函数(钩子函数)在首页搜索生命即可
用到了created()函数,这个方法是在实例化后生效的函数,用以保障可以用this指向数据,还讲到了一个beforeCreated()函数,这是在实例化钱生效的函数,然后在这个函数中使用axios的get方法请求数据,将数据赋值给data的数据里,再用for循环生成在页面上,由于
import moment from "moment" 使用过滤器,在首页搜索过滤器即可,(管道符) 可以用在{{ message | capitalize }} 或者用在v-bind中 <div v-bind:id="rawId | formatId"></div>   
后台返回的事件不规范,我们需要使用一个js插件,moment.首先需要下包 npm istall moment --save 然后在引包
用filters: {
  capitalize: function (value) {
   return moment(value).format('YYYY年MM月DD日')
  }
}
这个对象是跟data同级的,就可以改变时间的格式了  提交 2018-8-23 晚九点


#18-08-25
上面轮播部分通过element-ui这个插件,先下包,然后在导入包 css也导入 还需要使用Vue.ues(Element)
在到文档中选中走马灯的部分,将自定义标签在轮播图的html部分进行替换,img插入,然后设置大小,将请求来的数据的图片地址v-for循环生成就好了
在到文档中请求商品详细的api 请求数据后vfor循环生成
然后在新建一个02-productDetail.vue文件,将静态赋值过来,在main.js中将文件引入 import Product from "./components/02-productDetail.vue" 
引入后注册进路由  {
    path:"/Prodct/:id",
    component:Product
  },
  然后在01-index.vue将a标签替换成router-link标签 :to属性:"/prodct/+item.artID",这样就可以将id传值过去了,可以在02页面的生命周期函数中打印一下this.$route.params 看看是否获得参数,然后在将整个id作为参数去请求api,渲染页面
  提交于18-08-25 2点

