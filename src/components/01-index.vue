<template>
   <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(itemson, indexson) in item.subcates" :key="itemson.id" >
                                                {{itemson.title}}&nbsp;
                                            </span>
                                            
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a v-for="(itemSon, indexSon) in item.subcates" :key="itemSon.id" href="/goods/43.html">{{itemSon.title}}</a>
                                                
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                         <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="item in sliderlist" >
                            <a href="#">
                                <img :src="item.img_url" alt="">
                            </a>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id" >
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | capitalize}}</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item) in getgoodsgroup" >
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a v-for="(itemSon) in item.level2catelist"  href="/goods/43.html">{{itemSon.subcatetitle}}</a>
                    
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">   
                        <li v-for="(itemSon) in item.datas" :key="itemSon.artID">
                           <router-link :to=" `/Prodct/`+ itemSon.artID ">
                                <div class="img-box">
                                    <!-- <img  :src="itemSon.img_url"> -->
                                    <!-- 懒加载 -->
                                    <img v-lazy="itemSon.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{itemSon.artitle}}</h3>
                                    <p class="price">   
                                        <b>{{itemSon.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{itemSon.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{itemSon.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import axios from "axios"    

export default {
    name:"index",
    data:function(){
        return {
            catelist:[],
            sliderlist:[],
            toplist:[],
            getgoodsgroup:[]
        }
    },
    // 生命周期函数,在创建vue实例后生效
    created() {
        axios.get(`http://47.106.148.205:8899/site/goods/gettopdata/goods`).then(response=>{
            
            this.catelist=response.data.message.catelist
            this.sliderlist=response.data.message.sliderlist
            this.toplist=response.data.message.toplist
        });
         axios.get(`http://47.106.148.205:8899/site/goods/getgoodsgroup`).then(response=>{
            
            this.getgoodsgroup=response.data.message
        })
    },

}
</script>
<style>
 .el-carousel__container {
      height: 341px !important;
  }
  .Img {
      width: 100%;
      height: 100%;
  }
</style>


