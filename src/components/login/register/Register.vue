<template>
   <div class="logins">
      <div class="top">
        <i @click="goBack"></i><b>注册</b><b @click="jump">登录</b>
      </div>
      <div class="main">
        <form action="http://47.106.12.223:8569/register" method="POST" onsubmit="return checkLength()">
        <div class="phone">
          手机号:<input type="text" name="phone" v-model="phone">
        </div>
        <div class="phone">
          密&nbsp;&nbsp;码:<input type="password" name="password" v-model="password">
        </div>
        <div class="phone">
          验证码:<input type="text" name="num" v-model="nums"><b @click="acquire" v-if="flag">点击获取</b>
          <b v-if="!flag">还有{{this.num}}s</b>
        </div>
        <input type="button" value="下一步" class="btn"  @click="open">
        <p><input type="checkbox" class="check" checked>我已阅读并同意使用<a href="#" class="">条款和隐私政策</a></p>
        </form>
      </div>  
  </div>
</template>
<script>
import Loading from '../../../assets/loading/loading/Loading'
import { MessageBox } from 'mint-ui';
import { setInterval, clearInterval } from 'timers';
export default {
    name: 'Register',
    data () {
        return {
            flag: true,
            num: 10,
            phone:'',
            password:'',
            nums:'',
        }
    },
    mounted(){
      
      
    },
    methods: {
      open(){
        let regpass=/\w{6,16}/
        if(this.password=='' && this.password =='' && this.nums==''){
          MessageBox.alert('请完善输入信息').then(action => {
           });
        }else if(!regpass.test(this.password)){
            MessageBox.alert('请输正确格式密码').then(action => {
           });
        }else{
           this.$http.post('/api/register',{params:{phone:this.phone,password:this.password}}).then(res=>{
             if(res.status==200){
               console.log(res)
                MessageBox.alert('注册成功').then(action => {
            
           });
             }
      })         
        }   
      },
        jump () {
            this.$router.push('/logins')
        },
        goBack () {
            this.$router.push('/logins')
        },
        acquire () {
          let regphone=/^1\d{10}$/
          if(this.phone==''){
            MessageBox.alert('请输入手机号').then(action => {
              
           });
          }else if(!regphone.test(this.phone)){
             MessageBox.alert('请输入正确手机号').then(action => {
              
           });
          }
          else{
            this.flag = false
           let time= setInterval(() => {
                console.log(1111)
                if(this.num>1){
                    this.num--            
                }else{
                  this.flag = true
                    clearInterval(time)
                    this.num=10
                }               
            },1000
            )
          }
            
        }, 
    }
}
</script>
<style lang="stylus" scoped>
.el-message-box
  width 6.67rem
  height 6.67rem
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
  b
   color #fe0041
  input
   width 4.27rem
   border none
   background #f3f3f3
   outline none
 .btn
  border none
  width 8rem
  height 1.33rem
  line-height 1.33rem
  color white
  background #ff9900
  border-radius .13rem
  margin .64rem 0
 .check
  width .37rem
  height .37rem
 p
  font-size .37rem
</style>