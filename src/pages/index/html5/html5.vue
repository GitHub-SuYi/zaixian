<template>
    <div class="container">
      <div class="userinfo">
        <img class="userimg" :src="userimg">
      </div>
      <div class="upfilebox">
        <input type="file" multiple accept="image/jpg,image/jpeg,image/png,image/gif" @change="getfile($event)" capture="camcorder" />
        <!--//是变化事件，当输入框内容发生变化时触发的函数-->
        <!--multiple代表多选-->
        <!--accept="image/jpg,image/jpeg,image/png,image/gif"代表当前输入框只支持上传图片-->
        <!--capture="camcorder"调用相机拍摄照片-->
        <div class="upbtn">上传头像</div>
      </div>
      <div class="upbtn" @click="savefn">保存</div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
              userimg:'/static/images/tx.jpg',
              baseval:'',
            }
        },
        props: {},
        methods: {
          savefn(){//保存的函数
            $.ajax({//ajax数据请求
              url:'',//请求地址
              data:{//请求方式
                base:this.baseval
              },
              type:'',//token请求头
              success:function (res) {//请求参数
                
              }
            })
          },
          getfile(e){//e表达的输入框里面的内容，是一个对象，里面包含有上传的图片//input的函数
            var file = e.target.files[0]//选中图片
            this.userimg= window.URL.createObjectURL(file)//本地图片的地址被重新赋值

            //选中图片文件转化为base64格式地址，以下两行代码表达该命令
            var reads= new FileReader()
            reads.readAsDataURL(file);

            // 注意在此函数过程中可能出现用户点开了上传头像，但是没有选择图片，又关闭了该窗口，所有应当做个判断，判断用图片数量大于0才执行
            let _this = this
            // reads.onload这个表达的是转化后的这个图片
            reads.onload = function (event) {
              var url = event.target.result
              // reads中有个result有一大串的代码，那个是格式转化后的图片地址
              console.log(url)//转化后的图片地址被赋值
              // _this.userimg = url
              _this.baseval=  url//图片地址在次被赋值，这一次的赋值是直接赋值给了vue的return里的数据，在全局都可以调用
            }
          },
        },
        mounted() {
        },
        created() {
        },
    }
</script>

<style scoped lang="less">
  .userinfo{
    width: 100%;
    .userimg{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  .upfilebox{
    width: 120px;
    height: 40px;
    text-align: center;
    background-color: deepskyblue;
    color: white;
    line-height: 40px;
    position: relative;
    input{
      opacity: 0;
      position: absolute;
    }
    .upbtn{
      width: 120px;
      height: 40px;
      text-align: center;
      background-color: deepskyblue;
      color: white;
      line-height: 40px;
    }
  }
  .upbtn{
    width: 120px;
    height: 40px;
    text-align: center;
    background-color: deepskyblue;
    color: white;
    line-height: 40px;
    margin-top: 20px;
  }
</style>
