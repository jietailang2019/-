<!-- 组件说明 -->
<template>
  <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">硅谷外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on:loginType==='MSG'}" @click="switchLoginType('MSG')">短信登录</a>
            <a href="javascript:;" :class="{on:loginType==='PWD'}" @click="switchLoginType('PWD')">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div :class="{on:loginType==='MSG'}">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="user.phone">
                <button 
                  :disabled="!checkPhone" 
                  class="get_verification" 
                  :class="{on:checkPhone}" 
                  @click.prevent="getMsgCode()"
              >{{countTime>0 ? `已发送${countTime}秒` : '获取验证码'}}</button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="user.code">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on:loginType==='PWD'}">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="user.name">
                </section>
                <section class="login_verification">
                  <input :type="showpwd?'text':'password'" maxlength="8" placeholder="密码" v-model="user.pwd">
                  <div class="switch_button" @click="triggleShowPwd" :class="showpwd ? 'on' :'off' ">
                    <div class="switch_circle" :class="{right:showpwd} "></div>
                    <span class="switch_text">{{showpwd?'abc':'...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="user.captcha">
                  <img class="get_verification" src="" alt="captcha" @click="getCaptcha" ref="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
      <alert-tip :alertText="alertText" @closeTip="closeTip" v-show="alertShow"></alert-tip>
    </section>
</template>

<script>
  //import x from ''
  import {loginPwd,LoginSms,getSendCode,getCaptcha} from "../../api/index"
  import {mapActions} from "vuex"
  import AlertTip from "../../components/AlertTip"
  export default {
    data(){
      return {
        loginType:'MSG',//登录方式
        user:{
          phone:'', //手机号
          code:'',  //短信验证码
          name:'',  //用户名
          pwd:'',   //密码
          captcha:''//图形验证码
        }, //用户输入表单数据
        countTime:0,
        showpwd:false, //切换显示密码
        alertText:'',
        alertShow:false
      }
    },
    mounted(){
      this.getCaptcha()
    },
    methods:{
      ...mapActions(['saveUserInfo']),
      switchLoginType(type){
        this.loginType=type
      },
      //获取图形验证码
      getCaptcha(){
        this.$refs.captcha.src='http://localhost:4000/captcha?time='+Date.now()
      },
     async getMsgCode(){
        if(!this.countTime){
          //启动倒计时
        this.countTime=30
        this.thirtyTimer=setInterval(() => {
          this.countTime--;
          if(!this.countTime){
            clearInterval(this.thirtyTimer)
          }
        }, 1000);
        //发送ajax获取验证码
          const result = await getSendCode(this.user.phone)
          if(result.code ===1){//获取验证码失败
            //this.user.code = result.data
            this.showAlert(result.msg)
            //停止倒计时
            if(this.countTime>0){
              this.countTime=0;
              clearInterval(this.thirtyTimer)
            }
          }
        }
      },
      triggleShowPwd(){
        this.showpwd = !this.showpwd
      },
      showAlert(alertText){
        this.alertText=alertText
        this.alertShow=true
      },
      async login(){
        let result
        if(this.loginType==='MSG'){
         const {phone,code} = this.user
          if(!this.checkPhone){
           // alert("手机号码格式不正确，请输入11位手机号码")
           // return
           this.showAlert("请输入11位手机号码")
           return 
          }else if(!(/^\d{6}$/.test(code))){
           // alert("请输入6位数字验证码")
           this.showAlert("请输入6位数字验证码")
           return 
          }
          //发送短信登录
          result= await LoginSms(phone,code)
        }else{
          const {name,pwd,captcha} = this.user
          if(!name){
            this.showAlert("请输入用户名")
            return
          }else if(!pwd){
            this.showAlert("请输入密码") 
            return
          }else if(!captcha){
            this.showAlert("请输入图形验证码")
            return
          }
          //发送用户名密码登录
          result = await loginPwd(name,pwd,captcha)
        }
        if(result.code ===0){
            const userInfo = result.data
            this.saveUserInfo(userInfo)
            this.$router.replace('/profile')
          }else{
            const msg = result.msg
            this.getCaptcha()
            this.showAlert(msg)
          }
          if(this.countTime>0){
            this.countTime=0
            clearInterval(this.thirtyTimer)
          }
      },
      closeTip(){
        this.alertText=''
        this.alertShow=false
      }
    },
    computed:{
      checkPhone(){
        return /^1[3456789]\d{9}$/.test(this.user.phone)
      }
    },
    components:{
      AlertTip
    }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import "../../common/stylus/mixins.styl"
    .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #ccc
                  font-size 14px
                  background transparent
                  &.on
                    color #000
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 30px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd
                  &.on
                    background #02a774
                  >.switch_circle
                    //transform translateX(27px)
                    position absolute
                    top -1px
                    left -1px
                    width 16px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.right
                      transform translateX(27px)
              .login_hint
                margin-top 12px
                color #999
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #999
</style>