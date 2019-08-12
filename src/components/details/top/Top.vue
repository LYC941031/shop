<template>
  
  <div class="Top" >
    <Loading v-if="list.length == 0" class="loading"></Loading>
    <div class="main" v-if="list.length!=0">
      <i class="left" @click="fanhui"><img src="../../../assets/png/xiangqing/icon_back.png" alt=""></i><i class="center"><img src="../../../assets/png/xiangqing/icon_shopping.png" alt=""></i><i class="right"><img src="../../../assets/png/xiangqing/icon_menu.png" alt=""></i>
    <div class="block">
    <el-carousel>
      <el-carousel-item v-for="(items,i) in list.swiperImgArr" :key="i">
        <img :src="items" alt="" class="picture">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="introduce" >
    <b>{{list.name}}</b>
     <span class="sc"><em></em><span class="sc1">收藏</span></span>
     <div class="pirce">
      <p class="price1">￥{{list.reduct_price}}</p> 
      <p class="price2">￥{{list.original_price}}</p>
      </div>
      <div class="label">
        <div class="tops">
          <span class="top">{{(list.allowance*10).toFixed(1)}}折</span>
          <span class="top">{{list.isFreeShip?'包邮':'不包邮'}}</span>
        </div>
        <span class="bottom" v-for="(item,index) in list.describe" :key="index">{{item}}</span>
      </div>
  </div>
  </div>
  <div class="presentation" v-if="list.length!=0">
    <span class="shop1" :class="{shop:index == 1?true:false}" @click="jump(1)">商品详情</span><span :class="{shop:index == 2?true:false}" @click="jump(2)">买家口碑</span>
    <img v-for="(item,index) in list.shopDes" :key="index" :src="item" alt="" v-show="flag" class="jieshao">
    <div class="comment" v-if="!flag">
      <ul>
        <li :class="{tabs:val == 1?true:false}" @click="tabs(1)">全部评价</li>
        <li :class="{tabs:val == 2?true:false}" @click="tabs(2)">好评</li>
        <li :class="{tabs:val == 3?true:false}" @click="tabs(3)">差评</li>
        <li :class="{tabs:val == 4?true:false}" @click="tabs(4)">晒单</li>
      </ul>
      <ol>
        <li v-for="(item,index) in list.buyerReviews.all" :key="index">
            <p><span>{{item.buyerName}}</span><b>2015-10-03 21:47:13</b></p>
            <img src="../../../assets/png/pictrue.png" alt="">
            <p class="text">{{item.postDescribe}}</p>
            <p class="commt">管理员：{{item.adminReviews}}</p>
        </li>
      </ol>
    </div>
  </div>
</div>
</template>
<script>
import Loading from '../../../assets/loading/loading/Loading'
export default {
  name: "Top",
  components:{
    Loading
  },
  data () {
    return {
      index: 1,
      flag: true,
      val : 1,
      uid: this.$route.params.id,
      list:[]
    }
  },
  mounted () {
    console.log(this.uid)
    this.$http({url:'/api/getDetails',params:{pid:this.uid}}).then(res => {

        this.list = res.data.data
        // console.log(this.list)
    })
  },
  methods: {
    fanhui(){
      this.$router.push('/home/homePage')
    },
    jump (op) {
      this.index = op
      if(op == 1){
        this.flag = true
      }else{
        this.flag = false
      }
      
    },
    tabs (op) {
      this.val = op
    }
  }

}
</script>
<style lang="stylus" scoped>
.loading{
 width 100%
}

.main
  position relative
  width: 10rem
  height: 9.65rem
  border-bottom: 1px solid #999
  background white 
  i 
   display block
   width .75rem
   height .75rem
   background #b2b2b2
   border-radius 50%
   text-align center
   z-index 88
  .left
   position absolute
   left .31rem
   top .13rem
   line-height .75rem
   img
    width .23rem
    height .37rem
    
  .center
   position absolute
   right 1.63rem
   top .13rem
   line-height .75rem
   img
    width .4rem
    height .36rem
  .right
   position absolute
   right .31rem
   top .13rem
   line-height .6rem
   img
    width .35rem
    height .08rem
 .el-carousel
  height 6.33rem
  .is-animating
   height 6.33rem
   text-align center
   .picture
    width 6.67rem
    height 6.33rem
.el-carousel >>> button
    width .27rem
    height .27rem
    background white
    border-radius 50%
 .introduce
  margin-top .37rem
  width 10rem - .8rem
  height 2.4rem
  padding 0 .4rem
  b
   float left
   display block
   border-right 1px solid #999
   width 7.6rem
   font-size .4rem
   height .93rem
  .sc
   display block
   height .93rem
   width .89rem
   em
    display block
    width .47rem
    height .47rem
    background url(../../../assets/png/xiangqing/sc.png)
    background-size .47rem
   float right
   color #e71f19
  .pirce
   float left
   p
    margin 20px 0 0 10px
   .price1
    color #e71f19
    font-size .44rem
   .price2
    font-size .31rem
    color #999
    text-decoration line-through
  .label
   float right
   margin-top .27rem
   width 6.93rem
   .tops
    height .4rem
    margin-bottom .27rem
    .top
     float left
     font-size .27rem
     text-align center
     margin-left .13rem
     color white
     display inline-block
     width .93rem
     height .4rem
     background #ff9900
   .bottom
    margin-left .13rem
    font-size .27rem
    float left
    display block
    height .35rem
    width 1.35rem
    border 2px solid #ff9900
    color #ff9900
 .presentation
  margin-top .4rem
  background white
  width 10rem
  height 44rem
  
  span
   display inline-block
   width 2rem
   height .76rem
   font-size .35rem
   line-height .76rem
   text-align center
  .shop
   border-bottom 3px solid #ff9900
   color #ff9900
  .shop1
   margin-right 3.33rem
   margin-left .93rem
  .jieshao
   margin-top .33rem
   width 8.87rem
   height 9.33rem
   margin-left .61rem
  .comment
   width 10rem
   ul
    width 9.2rem
    height .93rem
    display flex
    justify-content space-around
    border-bottom 1px solid #666
    padding-top .13rem
    margin-left .4rem
    .tabs
     background #ff9900
    li
     width 1.8rem
     height .67rem
     background #999
     text-align center
     line-height .67rem
     border-radius .27rem
     color white
   ol
    width 10rem - .8rem
    height 4.6rem
    padding 0 .4rem
    border-bottom 1px solid #666
    li  
     width 9.27rem
     height 4.6rem
     span
      color #ff9900
      font-size .32rem
     b
      margin-left 2.67rem
      color #666
     p
      margin 0
     img
      display block
      width 2rem
      height 2rem
     .commt
      width 9.27rem
      height 1rem
      background #ccc
      border-radius 10px
      line-height .47rem
      font-size .25rem
     .text
      line-height .67rem
      color #666

</style>
