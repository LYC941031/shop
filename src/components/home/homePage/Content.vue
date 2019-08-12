<template>
  <div class="content">
    <!-- <dl v-for="(list,index) in icon" :key="index" > -->
      <Loading v-if="lists.length == 0"></Loading>
    <dl v-for="item in lists" :key="item.id" v-show="lists.length != 0">
      <dt><b>{{item.name}}</b></dt>
      <dd v-for="dome in item.list" :key="dome.id" @click="jump(dome.id)"><img :src="dome.thumbnail" alt="">
        <p><b>￥{{dome.reduct_price}}元</b><i>￥{{dome.original_price}}元</i></p>
        <p class="name">{{dome.name}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
import Loading from '../../../assets/loading/loading/Loading'
export default {
  name: 'Content',
  components:{
    Loading
  },
    data () {
      return {
        lists: [],
         icon:[
        {ico: require('../../../assets/png/hot.png'), title: '今日疯抢'},
        {ico: require('../../../assets/png/baby.png'), title: '母婴专区'},
        {ico: require('../../../assets/png/meizhuang.png'), title: '美妆护肤'},
        {ico: require('../../../assets/png/furniture.png'), title: '家具生活'},
        {ico: require('../../../assets/png/food.png'), title: '营养食品'},
        {ico: require('../../../assets/png/airplane.png'), title: '全球直邮'},

      ]
      }
    },
    methods: {
      jump (id) {
        this.$router.push('/details/'+ id)
      }
    },
     mounted () {
      this.$http.get('/api/getIndexData').then(res => {        
        res.data.data.forEach((val,i) => {
          this.lists.push(val)         
        })
      })
    }, 
  }
</script>
<style lang="stylus" scoped>
.content
  width 10rem 
  // padding 0 .4rem
dl
  width 10rem
  height 7.52rem
  dt
    margin-bottom .4rem
    img
      width .506667rem
      // height .506667rem
      vertical-align middle
    b
     font-size 28px
     margin-left .266667rem
     vertical-align middle
  .first
    margin-left 0
  dd
    float left
    margin-left .32rem 
    background white
    width 4.333333rem
    height 6.2rem
    border 1px solid #eee
    .name
     margin 0
    img
     padding-top .6rem
     margin-left .63rem
     width 2.93rem
     height 2.93rem
    b
     color #e60012
     font-size .37rem
    i
     text-decoration line-through
     font-style normal
     font-size .37rem
     float right
    p
     color #666
     font-size .37rem
     margin-bottom .32rem
</style>