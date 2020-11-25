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
        <div class="getnumber" @click="getcode">{{codeval}}</div>
      </div>
      <div class="inputtop">
        <div class="iconfont icon-suo"></div>
        <input class="inpter" v-model="newpwd" placeholder="请输入新密码"/>
      </div>
      <div class="inputtop">
        <div class="iconfont icon-suo"></div>
        <input class="inpter" v-model="newpwd2" placeholder="请输入新密码"/>
      </div>
      <div class="zhucebutton">确定</div>
    </div>
    <toast v-model="show2" type="cancel">手机号错误</toast>
    <toast v-model="show3" type="success">发送成功</toast>
  </div>
</template>

<script>
  import { Toast } from 'vux'
  export default {
    components: {Toast},
    data() {
      return {
        iphone:'',
        yanzheng:'',
        newpwd:'',
        newpwd2:'',
        codeval:'获取验证码',
        show2:false,
        show3:false,
      }
    },
    props: {},
    methods:{
      fanhui(){
        this.$router.push({path:'/login'})
      },
      checkPhone(){//判断手机号码格式是否正确
        var phone = this.iphone//定义此处的phone就是手机号码
        if(!(/^1[3456789]\d{9}$/.test(phone))){//如果手机号码有误就执行
          this.show2 = true//提示手机号码有误
          return false//反馈结果为不执行
        }else {//否则
          return true//反馈结果为为执行
        }
      },
      getcode(){//获取登录验证码函数
        console.log(222)
        var result = this.checkPhone()//定义手机正则函数
        if(result){//如果手机正则函数反馈为执行，那就执行以下操作
          this.show3 = true//提示发送成功
          var timer = null//定义定时器为空
          var alltime = 10//定义定时器的倒数时间
          let _this=  this//定义_this
          timer = setInterval(function () {//执行定时器
            if(alltime==0){//如果定时器的时间走完了
              clearInterval(timer)//清除定时器
              _this.codeval = '再次获取'//并且将内容改为在获取
            }else {//否则
              alltime--//倒数时间依次减少1
              _this.codeval = alltime+'s重试'//将定时器部分需要展示的内容做更换，显示成倒计时的秒数
            }
          },1000)//每秒钟执行一次
        }
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
