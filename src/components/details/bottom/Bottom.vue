<template>
    <div>
        <div class="list" v-if="flag">
          <div class="lists" v-show="list.length!=0">
            <img :src="list.swiperImgArr[0]" alt="">
            <span class="price">
              <p class="first">￥{{list.reduct_price}}</p>
              <p class="second">库存<b>99</b>件</p>
              <p class="second">请选择商品属性</p>
            </span>
            <i class="close" @click="close">x</i>
            <p class="num">购买数量<span class="compute"><b @click="minus">-</b><strong>{{msg}}</strong><b @click="add">+</b></span></p>
            <div>
            <h5>{{list.buySelect[0].name }}</h5>
            <p class="size"><span v-for="(item,i) in list.buySelect[0].list" :key="i" :class="{tabs:val == i?true:false}" @click="tabs(i,item)" >{{item}}</span></p>
            </div>
            <div>
            <h5>{{list.buySelect[1].name}}</h5>
            <p class="size"><span v-for="(item,i) in list.buySelect[1].list" :key="i" :class="{tabs:index == i?true:false}" @click="tab(i,item)" >{{item}}</span></p></div>
          </div>
        </div>
        <div class="buy" v-show="list.length!=0">
          <span class="left"><b>总价：</b><strong>￥{{price}}</strong></span><span class="add" @click="open(list.pid)">加入购物车</span><span class="buy1" @click="goShop">立即购买</span>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import Loading from '../../../assets/loading/loading/Loading'
export default {
    name: 'Bottom',
    data () {
      return{
        flag: false,
        msg: 0,
        val: 0,
        index:0,
        uid: this.$route.params.id,
        list:[],
        price:0,
        objList:[],
        sizes:'',
        ages:''
      }
    },
    
    mounted () {
     console.log(this.uid)
     this.$http({url:'/api/getDetails',params:{pid:this.uid}}).then(res => {
        this.list = res.data.data
    })
    },
    methods: {
      goShop(){
        if(localStorage.getItem('user').length!=0){
           this.$router.push('/home/shopCart')
        }else{
              MessageBox.alert('请先登录你的帐号').then(action => {
           });
        }
       
      },
      open(id){
        this.flag = true
        if(this.flag && this.msg > 0){        
         let obj = {
              list: this.list,
              price:this.price,
              msg: this.msg,
              flag:this.flag,
              size:this.sizes,
              age:this.ages
          }
          
          if(localStorage.getItem('arr')){
         let arr = JSON.parse(localStorage.getItem('arr')) 
            arr.push(obj)
            localStorage.setItem('arr',JSON.stringify(arr))
          }else{
            let arr=[]
            arr.push(obj)
            localStorage.setItem('arr',JSON.stringify(arr))
          }
          //   MessageBox.alert('成功加入到购物车').then(action => {
          //  });
           Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        });
        }      
      },
    close(){
      this.flag =false
      this.price = 0
    },
    tabs(op,sizes){
      this.val = op
      console.log(sizes)
      this.sizes = sizes

    },
    tab(i,ages){
      this.index =i
      console.log(ages)
      this.ages = ages
    },
    minus () {
      if(this.msg<=0){
        this.msg = 0
        this.price=0
      }else{
        this.msg--
         this.price = this.list.reduct_price*this.msg
      }
    },
    add () {     
      this.msg++
      this.price = this.list.reduct_price*this.msg 
    }
  }

}
</script>
<style lang="stylus" scoped>
.buy
 position fixed
 bottom 0
 height 1.29rem
 width 10rem
 border-top 1px solid #999
 background white
 span 
  display inline-block
  height 1.29rem
  line-height 1.29rem
  text-align center
  font-size .4rem
 .left
  width 4.67rem
  b
   color #999
  strong 
   color #eb2222
 .add
  width 2.64rem
  background #ff9900
  color white
 .buy1
  width 2.64rem
  background #eb2222
  color white
.list
 position fixed
 bottom 1.29rem
 width 10rem
 height 16.53rem
 background rgba(0,0,0,0.5)
 z-index 99
 .lists
  position absolute
  bottom 0
  width 10rem - .57rem*2
  height 7.67rem
  background white
  padding 0 .57rem
  h5
   font-size .4rem
  img
   position absolute
   left .6rem
   top -.33rem
   width 2.67rem
   height 2.67rem
   border 10px solid #ccc
   border-radius .13rem
  .price
   display block
   margin-left 3.73rem
   .first
    font-size .4rem
    color #eb2222
   .second 
    font-size .32rem
  .close
   position absolute
   right .4rem
   top .4rem
   display block  
   width .73rem
   height .73rem
   border .07rem solid #666
   font-style normal
   text-align center
   line-height .73rem
   font-size .67rem
   border-radius 50%
  .num
   padding-top .4rem 
   font-size .4rem
   .compute
    float right
    height .67rem
    b
     float left
     display inline-block
     width .67rem
     height .67rem
     background #666
     font-size .53rem
     color white
     text-align center
     line-height .67rem
    strong
     float left
     display inline-block
     width 1.36rem
     height .64rem
     border-top 1px solid #cccccc
     border-bottom 1px solid #cccccc
     text-align center
     line-height .67rem
  .size
   .tabs
    background #ff9900
   span
    text-align center
    line-height .6rem
    display inline-block
    height .6rem
    width 120px
    background #dddddd
    border-radius .27rem
    margin-left .29rem
  .age
   .tabs
    background #ff9900
   span
    text-align center
    line-height .6rem
    display inline-block
    width 2.33rem
    height .67rem
    background #dddddd
    border-radius .27rem
    margin-left .27rem


</style>