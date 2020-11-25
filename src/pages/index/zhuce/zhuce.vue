<template>
  <div class="overall">
    <div class="topbox">
      <div class="iconfont icon-zuojiantou" @click="fanhui"></div>
      <div class="zhucetext">注册</div>
    </div>
    <div class="inputbox">
      <div class="inputtop">
        <div class="iconfont icon-shouji"></div>
        <input class="inpter" v-model="iphone" placeholder="请输入手机号码"/>
      </div>
      <div class="inputtop">
        <div class="iconfont icon-anquanzhuye"></div>
        <input class="inpter" v-model="yanzheng" placeholder="请输入验证码"/>
        <div class="getnumber">获取验证码</div>
      </div>
      <div class="inputtop">
        <div class="iconfont icon-suo"></div>
        <input class="inpter" v-model="newpwd" placeholder="请输入新密码"/>
      </div>
      <div class="inputtop">
        <div class="iconfont icon-suo"></div>
        <input class="inpter" v-model="newpwd2" placeholder="请输入新密码"/>
      </div>
      <div class="zhucebutton">注册</div>
      <div class="xieyibox">
        <div>注册即表示同意</div>
        <div class="xieyitext">《笨鸟用户在线协议》</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        iphone:'',
        yanzheng:'',
        newpwd:'',
        newpwd2:'',

      }
    },
    props: {},
    methods:{
      fanhui(){
        window.location.href = '#/login'
      },
      btnfn(){
        //验证手机号
        if(!this.phone){
          this.toastshow = true
          this.toasttext = '请输入号码'
          this.toatype = 'cancel'
          return false
        }else if(!this.yznum(this.phone)){
          this.toastshow = true
          this.toasttext = '号码有误'
          this.toatype = 'cancel'
          return false
        }
        //验证验证码
        if(!this.code){
          this.toastshow = true
          this.toasttext = '请输入验证码'
          this.toatype = 'cancel'
          return false
        }
        //验证密码
        if(!this.pwd || !this.pwd2){
          this.toastshow = true
          this.toasttext = '请输入密码'
          this.toatype = 'cancel'
          return false
        }
        if(this.pwd != this.pwd2){
          this.toastshow = true
          this.toasttext = '两次密码不一致'
          this.toatype = 'cancel'
          return false
        }
        var data = {
          phone:this.phone,
          code:this.code,
          pwd:this.pwd,
          pwd2:this.pwd2,
        }
        var url = ''
        this.axios.post(url,data).then(function (res) {
          console.log(res)
        })
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
    .topbox{
      display: flex;
      height: 45px;
      line-height: 45px;
      font-size: 18px;
      width: 100%;
      border-bottom: 1px solid rgb(242,242,242);
      justify-content: center;
      .iconfont{
        position: fixed;
        left: 20px;
        font-size: 25px;
      }
    }
    .inputbox{
       width: 80%;
       margin: 50px auto 35px;
       .inputtop{
         display: flex;
         /*border: 1px solid red;*/
         margin-bottom: 20px;
         border-bottom: 1px solid rgb(242,242,242);
         color: rgb(187,187,187);
         padding-bottom: 10px;
         height: 35px;
         line-height: 35px  ;
         .getnumber{
           color: #ff9600;
           text-align: right;
         }
         .inpter{
           outline: none;
           border: none;
         }
         .iconfont{
           margin-right: 15px;
         }
       }
      .zhucebutton{
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;background-color: rgb(255,150,0);
        border-radius: 5px;
        margin: 30px 0 15px;
      }
      .xieyibox{
        display: flex;
        justify-content: center;
        .xieyitext{
          color: rgb(255,150,0);
        }
      }
     }
  }
</style>
