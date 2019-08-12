<template>
  <div class="homepage">
    <Top></Top>
    <Content></Content>
  </div>
</template>
<script>
import Top from './Top'
import Content from './Content'
export default {
  name: 'HomePage',
  components: {
    Top, Content
  }
}
</script>
<style lang="stylus" scoped>
</style>
