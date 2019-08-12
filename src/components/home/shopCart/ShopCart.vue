<template>
  <div class="shopcart">
    <div class="top" >
      <img src="../../../assets/png/nav_icon_back@2x.png" alt=""> 
      <strong>购物车</strong>
    </div>
    <div class="empty" v-if="!buyList.length">
      <img src="../../../assets/png/tab_shopping_nor.png" alt="">
      <p>购物车还是空的赶紧去逛逛吧~</p>
    </div> 
    <div class="cart" v-if="buyList.length" >
      <ul>
         <li v-for="(item,index) in buyList" :key="index"  >
          <p class="title"><i class="house"></i>杭州保税区仓</p>
          <div id="list">
            <i class="selects" @click="check(index)" v-if="item.flag"></i><i class="select" @click="check(index)" v-if="!item.flag"></i>
            <img :src="item.list.swiperImgArr[0]" alt=""><span>
              <p class="name">{{item.list.name}}<em>{{item.size}}{{item.age}}</em></p>
              <p class="num"><b @click="minus(index)">-</b><strong>{{item.msg}}</strong><b @click="add(index)">+</b></p>
            </span>
            <strong class="price">￥{{item.list.reduct_price*item.msg}}</strong>
            <span class="del" @click="del(index)">删除</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <span class="check" @click="checks"><i class="check1" v-if="flag"></i><i class="check2" v-if="!flag"></i><p>全选</p></span><span class="compile "><i></i><p @click="compile">编辑</p></span>
     
      <div class="goBuy">去结算</div>
       <div class="prices">合计：<b>￥{{sum}}</b><p>(不包含运费)</p></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopCart',
  data () {
    return {
      flag: false,
      msg: 0,
      buyList:[],
      sum:0,
    }
  },
  mounted () {
    if(localStorage.getItem('arr')){
   this.buyList= JSON.parse(localStorage.getItem('arr'))
    }

  },
  methods: {
    checks () {
     this.flag = !this.flag
  if(this.flag){
     this.buyList.forEach((val,index)=>{
       val.flag =false
         this.sum += Number(val.price) 
           })
          
  }else{
     this.buyList.forEach((val,index)=>{
       val.flag =true
             })
   this.sum = 0
  }
    },
    check (i) {
      this.buyList[i].flag = !this.buyList[i].flag
     let flags= this.buyList.every((val,index)=>{
        return !val.flag
      })
    if(flags){
      this.flag =true
    }else{
      this.flag = false
      this.sum = 0
    }
    },
    del (ii) {
      console.log(ii)
         this.buyList.splice(ii,1)
         localStorage.removeItem('arr')
    },
    compile(){
      if(this.buyList){
var li = document.getElementById('list')
      console.log(li)
      // li.style.position = 'absoluste'
      li.style.left = -70+"px"
      }
      
    },
    minus (i) {
      console.log(i)
      if(this.buyList[i].msg<=0){
        this.buyList[i].msg = 0
      }else{
        this.buyList[i].msg--
      }
    },
    add (i) {
     this.buyList[i].msg++
    }
  }
}
</script>
<style lang="stylus" scoped>
.shopcart
 width 10rem
 height 18.67rem
 .top
  position relative
  width 10rem
  height 1.39rem
  background #ff9900
  text-align center
  line-height 1.39rem
  font-size .55rem
  color white
  img
   position absolute
   top .44rem
   left .53rem
   width .43rem
   height .49rem
 .empty
  width 3.47rem
  text-align center
  margin 50% auto
  font-size .43rem
  p
   img 
    width 1.09rem
    height 1.17rem
 .cart
  width 10rem
  ul
  position relative
   li
    
    height 4.2rem
    width 10rem - .51rem
    padding .45rem 0 .67rem .51rem
    overflow hidden
    i
     display inline-block
     width .56rem
     height .56rem
     vertical-align middle
    .title
     margin 0
     margin-bottom .67rem
     color #999
     .house
      background url('../../../assets/png/cart/store.png') no-repeat
      background-size .49rem .47rem
      margin-right .36rem
    #list
     position absolute
     width 11.33rem
     .del
      display inline-block
      width 1.5rem
      height 3rem
      float right
      background #f90
      color white 
      text-align center
      line-height 3rem
     .select
      display inline-block
      background url('../../../assets/png/cart/radio_hig.png') no-repeat
      background-size .56rem
      width .57rem
      height .57rem
     .selects
      display inline-block
      background url('../../../assets/png/cart/editor_nor.png') no-repeat
      background-size .56rem
      width .57rem
      height .57rem
     img
      margin-left .2rem
      vertical-align middle
      width 2.09rem
      height 2.09rem
     span
      display inline-block
      width 3.73rem
      margin-left .36rem
      vertical-align middle
      .name
       font-size .43rem
       color black
       width 3.67rem
       margin-bottom .53rem
       em
        color #999
        font-style normal
      .num
       width 3.07rem
       height .57rem
       border 2px solid #999
       border-radius 10px
       text-align center
       line-height .57rem
       b
        display inline-block
        width .93rem
        height .57rem
       strong
         display inline-block
         width 1.07rem
         height .57rem
         border-left 2px solid #999
         border-right 2px solid #999
     .price
      margin-left 0.6rem
      font-size .43rem  
 .bottom
  width 10rem
  height 1.67rem
  background white
  position fixed
  bottom 1.33rem
  border-top 1px solid #eee
  border-bottom 1px solid #eee
  span
   margin-top .13rem
   float left
   text-align center
   width .93rem
   p
    margin-top .13rem
    font-size .37rem
  .check
   margin-right 1rem
   margin-left .53rem
   .check1
    background url('../../../assets/png/cart/editor_hig.png') no-repeat
    margin-left .13rem
    display block
    width .57rem
    height .57rem
    background-size .56rem
   .check2
    background url('../../../assets/png/cart/editor_nor.png') no-repeat
    margin-left .13rem
    display block
    width .57rem
    height .57rem
    background-size .56rem
    
  .compile 
   i
    margin-left .13rem
    display block
    width .57rem
    height .57rem
    background url('../../../assets/png/cart/editor_nor.png') no-repeat
    background-size .56rem
  .goBuy
   float right
   width 3.09rem
   height 1.67rem
   background #f90
   text-align center
   line-height 1.67rem
   color white
   font-size .5rem
  .prices
   margin-top .33rem
   float right
   width 3.09rem
   height 1.67rem
   font-size .31rem
   color #666
   
     
</style>