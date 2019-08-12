<template>
  <div class="classify">
    <div class="search">
      <input type="text" placeholder="Montagne jeunesse">
      <img src="../../../assets/png/search.png" alt="" >
    </div>
    <div class="sort">
      <ul class="category">
        <li v-for="(item,i) in classList" :key="i" @click="tab(i)"><span :class="{class:msg == i}" ></span>{{item.name}}</li>
      </ul>
      <ul class="list" v-for="(item,i) in classList" :key="i" v-show="msg == i">
        <li v-for="dome in classList[i].list" :key="dome.id">
          <img :src="dome.thumbnail" alt=""><span>{{dome.name}}</span></li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Classify',
  data () {
    return {
      classList:[],
      msg:0
    }
    
  },
  methods: {
    tab (op) {
      this.msg = op
    }
  },
  mounted () {  
      this.$http.get('/api/getClassify').then(res => {  
        // console.log(res)   
        res.data.data.forEach((val,i) => {
           this.classList.push(val)
        })
    })
  }
}
</script>
<style lang="stylus" scoped>
.search
  position relative
  width 10rem
  height 1.39rem
  background #ff9900
  img
    width .506667rem
    height .506667rem
    position absolute
    right 1.866667rem
    top .53rem
  input
   margin-top 0.3rem
   margin-left 1.56rem
   width 6.853333rem
   height .8rem
   border 1px solid #ffe1b5 
   border-radius 20px
   background #ffe1b5   
   &::placeholder
    color #cccccc
    font-size .37rem
.sort
  .category
   float left
   height 100%
   width 3.12rem
   background #eee
   li
    width 3.12rem
    height 1.24rem
    text-align center
    line-height 1.24rem
    font-size .37rem
    .class
     float left
     display block
     width .13rem
     height 1.24rem
     background #1d84a7
  .list
    float right 
    width 6.37rem
    li
     position relative
     float left
     margin-top .28rem
     margin-left .1rem
     width 3.01rem
     height 3.13rem
     border 1px solid #1d84a7
     border-radius .27rem
     img
      margin-left .44rem
      margin-top .28rem
      width 2.2rem
      height 2.29rem
     span
      position absolute
      bottom 0
      display block
      width 3.01rem
      height .63rem
      background #1d84a7
      text-align center
      line-height .63rem
      color white
</style>