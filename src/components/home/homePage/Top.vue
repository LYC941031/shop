<template>
  <div class="top">
    <div class="search">
      <input type="text" placeholder="Montagne jeunesse">
      <img src="../../../assets/png/search.png" alt="" >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Top'
}
</script>
<style lang="stylus" scoped>
.top
 background #fafafa
.search
  position relative
  width 100%
  height 6.33rem
  background url('../../../assets/png/bannner_02.png') no-repeat
  background-size 10rem 6.33rem
  img
    width .506667rem
    height .506667rem
    position absolute
    right 1.866667rem
    top .67rem
  input
    margin-top .47rem
    margin-left 1.56rem
    width 6.853333rem
    height .8rem
    border 1px solid #fb7c9d
    border-radius 20px
    background #fedee6   
    &::placeholder
      color #cccccc
      font-size .37rem

</style>