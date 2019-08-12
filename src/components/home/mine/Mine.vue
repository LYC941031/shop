<template>
  <div class="mine">
    <div class="top1">
    <div class="top">
      <i class="set"></i>
      <b>个人中心</b>
      <i class="msg"></i>
      <div class="head">
        <img src="../../../assets/png/tx1.jpeg" v-if="flag">
      </div>
    </div>
    <div class="collect">
      <b class="login" @click="jump" v-if="!flag">点击登录</b>
      <b class="login" v-if="flag">一条小团团</b>
      <p><i class="love"></i><b>我的收藏</b></p> 
    </div>
    </div>
    <div class="form">
      <h3>我的订单<b>查看全部订单</b></h3>
      <ul>
        <li v-for="item in list" :key="item.id"><img :src="item.logo" alt=""><h5>{{item.name}}</h5></li>
      </ul>
    </div>
    <div class="address">
      <p>收货地址管理</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mine',
  data () {
  
    return {
      flag: false,
      list: [
        {id: 1, name: '待付款', logo: require('../../../assets/png/me/icon_boligation.png')},
        {id: 2, name: '待发货', logo: require('../../../assets/png/me/prepare.png')},
        {id: 3, name: '待收货', logo: require('../../../assets/png/me/icon_consignee.png')},
        {id: 4, name: '待评价', logo: require('../../../assets/png/me/icon_evaluate.png')},
        {id: 5, name: '退款/售后', logo: require('../../../assets/png/me/icon_refund.png')}
      ]
    }
  },
  mounted(){
    if(localStorage.getItem('user')){
      this.flag = true
    }else{
      this.flag = false
    }
  },
  methods: {
    jump () {
      this.$router.push('/logins')
    }
  }

}
</script>
<style lang="stylus" scoped>
.top1
  width 10rem
  height 7.8rem
  background white
  margin-bottom .2rem
 .top
  position relative
  width 10rem - .8rem
  height 4.32rem - .66rem
  background #ff9900
  padding .33rem .4rem
  text-align center
  color white
  font-size 41px
  .head
    position absolute
    top 2.53rem
    left 3.63rem
    width 2.4rem
    height 2.4rem
    border-radius 50%
    border 12px solid white
    background #ccc
    overflow hidden
   
  i
    display block
    width .65rem
    height .65rem
  .set
    float left
    background url('../../../assets/png/me/set.png') no-repeat
    background-size .65rem
  .msg
    float right
    background url('../../../assets/png/me/news.png') no-repeat
    background-size .65rem
 .collect
  // text-align center
  padding-top 1.27rem
  font-size .55rem

  i
   display inline-block
   width .65rem
   height .65rem
   background url('../../../assets/png/me/keep.png') no-repeat
   background-size .65rem
   vertical-align middle
   margin-right .33rem
   margin-left .47rem
  .login
    margin-left 3.73rem
.form
  width 10rem
  height 4.16rem
  background white
  margin-bottom .2rem
  h3
   margin-left .64rem
   font-size 41px
   line-height 1.64rem
   b
    float right
    color #999
  ul
    display flex
    justify-content space-around
    border-top 1px solid #999
    width 10rem
    height 2.51rem
    text-align center
    li
     padding-top .6rem
     h5
      font-size 25px
     img
      width .73rem
      height .61rem
      margin-bottom .39rem
.address
 width 10rem
 height 1.72rem
 background white
 color #999
 font-size 34px
 p
  padding-top .64rem
  padding-left .63rem
</style>
