<template>
  <div class="overall">
    <div class="logobox">
      <img class="logoboximg" src="/static/images/birdbg.jpg">
    </div>
    <div class="inputbox">
      <div class="inputtop">
        <div class="iconfont icon-wodedangxuan"></div>
        <input class="inpter" v-model="phone" placeholder="请输入手机号码"/>
      </div>
      <div class="inputtop">
        <div class="iconfont icon-suo"></div>
        <input class="inpter" v-model="pwd" placeholder="请输入密码"/>
      </div>
      <div class="logintext" @click="loginfn">登录</div>
      <div class="thing">
        <div class="zhuce" @click="zhucefn()">注册</div>
        <div class="pwder" @click="forgetfn()">忘记密码？</div>
      </div>
    </div>
    <toast v-model="show2" type="cancel">手机号错误</toast>
    <toast v-model="show3" type="success">登录成功</toast>
  </div>
</template>

<script>
  import { Toast } from 'vux'
  export default {
    components: {Toast},
    data() {
      return {
        phone:'',
        pwd:'',
        show2:false,
        show3:false,

      }
    },
    props: {},
    methods:{
      checkPhone(){
        var phone = this.phone
        if(!(/^1[3456789]\d{9}$/.test(phone))){//手机号如果输入有误提示show2
          this.show2 = true//提示手机号码有误
          return false//反馈不执行
        }else {//否则
          return true//否则反馈执行
        }
      },
      loginfn(){
        console.log(this.checkPhone())
        if(this.checkPhone()){//如果手机号码输入正确才执行
          this.show3 = true//提示登录成功
          localStorage.setItem('FID',this.phone)//本地缓存，记住手机号码，后作为ID号
          window.location.href = '#/home'//跳转页面
        }
      },
      zhucefn(){
        window.location.href = '#/zhuce'
      },
      forgetfn(){
        window.location.href = '#/forget'
      },
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .overall{
    width: 100%;
    position: fixed;
    .logobox{
      width: 100%;
      /*border: 1px solid red;*/
      height: 20%;
      .logoboximg{
        width: 100%;
      }
    }
    .inputbox{
      position: absolute;
      bottom: 150px;
      left: 50px;
      /*border: 1px solid red;*/
      width: 80%;
      margin: 10px auto;
      .inputtop{
        display: flex;
        /*border: 1px solid red;*/
        margin-bottom: 20px;
        border-bottom: 1px solid rgb(242,242,242);
        color: rgb(187,187,187);
        padding-bottom: 10px;
        .inpter{
          outline: none;
          border: none;
        }
        .iconfont{
          margin-right: 15px;
        }
      }
      .logintext{
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: rgb(255,150,0);
        color: white;
        border-radius: 5px;
        margin-top: 30px;
      }
      .thing{
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .zhuce{
          color: rgb(255,150,0);
        }
        .pwder{
          color: rgb(187,187,187);
        }
      }
    }
  }
</style>
