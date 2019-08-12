<template>
  <div class="home">
    <router-view />
    <div class="box"></div>
    <ul>
      <li @click="jump(item.path)" v-for="item in nav" :key="item.id" :class="{text: $route.path == item.path?true:false}" > 
        <img v-if="item.isshow" :src="item.logo" alt="">
        <img v-if="item.isnone" :src="item.logo1" alt="">
       <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Home',
   
  data () {
    return {
      index : 1,
      nav: [
        {id: 1, logo: require('../../assets/png/tab_home_nor.png'), logo1: require('../../assets/png/tab_home_hig.png'), title: '首页',  isshow: false,
      isnone: true, path: '/home/homePage'},
        {id: 2, logo: require('../../assets/png/tab_menu_nor.png'), logo1: require('../../assets/png/tab_menu_hig.png'), title: '分类', isshow: true,
      isnone: false, path: '/home/classify'},
        {id: 3, logo: require('../../assets/png/tab_shopping_nor.png'), logo1: require('../../assets/png/tab_shopping_hig.png'), title: '购物车',isshow: true,
      isnone: false, path: '/home/shopCart'},
        {id: 4, logo: require('../../assets/png/tab_me_nor.png'), logo1: require('../../assets/png/tab_me_hig.png'), title: '我', isshow: true,
      isnone: false, path: '/home/mine' }
      ]
    }
  },
  mounted () {
    this.nav.forEach(val => {
      val.isnone = false
        val.isshow = true
      if(val.path == this.$route.path){
            val.isshow = false
            val.isnone = true
      }
    })
  },
  methods: {
    jump (path) {
      this.nav.forEach(val => {
        val.isnone = false
        val.isshow = true
        if(val.path == path){
            val.isshow = false
            val.isnone = true
            this.$router.push(val.path)
        }
      })
    } 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home
  width 10rem
 .box
  width 10rem
  height 1.33rem 
 ul
  position fixed
  bottom 0
  width 10rem
  height 1.333333rem - .186667rem
  border-top 2px solid #eeeeee
  display flex
  justify-content space-around
  padding .186667rem 0
  background white 
  .text
    color orange
  li
   width 1.133333rem
   text-align center
   img
    width .506667rem
    height .506667rem
</style>
