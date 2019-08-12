<template>
  <div class="logins">
      <div class="top">
        <i @click="goBack"></i><b>登录</b><b @click="jump">注册</b>
      </div>
      <div class="main">
        <form action="#" method="GET" >
        <div class="phone">
          手机号:<input type="text" v-model="phone">
        </div>
        <div class="phone">
          密&nbsp;&nbsp;码:<input type="password" v-model="pass">
        </div>
        <a href="#">忘记密码</a>

        <input type="button" value="登录" class="btn" @click="login">
        </form>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
  name: 'Logins',
  data () {
    return{
      phone:'',
      pass:''
    }
  },
  methods: {
    jump () {
      this.$router.push('/register')
    },
    goBack () {
            this.$router.push('/home/mine')
        },
login(){
   let regpass=/\w{6,16}/
   let regphone=/^1\d{10}$/
    if(this.phone==''&& this.pass==''){
       MessageBox.alert('请输入手机号').then(action => {
      });
    }else if(!regphone.test(this.phone)){
             MessageBox.alert('请输入正确手机号').then(action => {
              
           });
    }else if(!regpass.test(this.pass)){
      MessageBox.alert('请输入正确格式密码').then(action => {
              
           });
    }else{
       this.$http.get('/api/login',{params:{phone:this.phone,password:this.pass}}).then(res=>{
         console.log(res)
         if(res.status==200){
            Toast({
          message: '登录成功',
          iconClass: 'mintui mintui-success'
        });
        setTimeout(
          ()=>{
              this.$router.push('/home/homePage')
          },1000
        )
        
         }
          let user = {
               phone:this.phone,
               pass:this.pass
             }
             
              localStorage.setItem('user',JSON.stringify(user))
       })
    }
}

  }
}
</script>
<style lang="stylus" scoped>
.top
  width 10rem - .63rem*2
  height 1.24rem - .36rem
  background #ff9900
  display flex
  justify-content space-between
  padding-top .36rem
  padding-left .63rem
  padding-right .63rem
  i
   display block
   background url('../../../assets/png/nav_icon_back@2x.png')
   width .31rem
   height .55rem
   background-size .31rem .55rem
  b
   color white
   font-size .49rem
.main
  padding-top 2.67rem
  padding-left 1rem
  padding-right 1rem
 .phone
  line-height 1.75rem
  width 8rem
  height 1.75rem
  border-bottom 2px solid #999
  font-size .43rem
  input
   border none
   background #f3f3f3
   outline none
 a
  float right
  margin-top .56rem
  margin-bottom .4rem
  font-size .37rem
 .btn
  border none
  width 8rem
  height 1.33rem
  line-height 1.33rem
  color white
  background #ff9900
  border-radius .13rem
</style>