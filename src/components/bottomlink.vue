<template>
  <div class="bottombox">
    <div :class="item.active?'bottomboxevent2':'bottomeveny'" :style="'color: '+item.color" v-for="item in bottombox" @click="clickfn(item)">
      <!--//style那一部分是使用父传子过来的颜色参数-->
      <div :class="item.icon"></div>
      <div class="bottomtext">{{item.val}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
              // bottombox:[
              //   {val:'首页',active:true,icon:'iconfont icon-shouye',color:'rgb(50,50,50)'},
              //   {val:'活动',active:false,icon:'iconfont icon-icon--',color:'rgb(255,131,21)'},
              //   {val:'消息',active:false,icon:'iconfont icon-dibudaohanglan-',color:'rgb(255,131,21)'},
              //   {val:'我的',active:false,icon:'iconfont icon-daohanglan-05',color:'rgb(255,131,21)'},
              // ],
            }
        },
        props: {
          bottombox:{}
        },
        methods: {
          clickfn(item){
            for(let i = 0 ; i < this.bottombox.length ; i++){
              this.bottombox[i].active = false
            }
            item.active = true;
            if (item.val=='首页') {
              window.location.href = '#/home'
              // console.log(22)
            }else if(item.val=='活动') {
              window.location.href = '#/hot'
              // console.log(22)
            } else if(item.val=='我的') {
              window.location.href = '#/my'
              // console.log(22)
            };
          },
        },
        mounted() {
        },
        created() {
          // console.log(this.bottombox)
        },
    }
</script>

<style scoped lang="less">
  .bottombox{
    height: 45px;
    line-height: 20px;
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    font-size: 1em;
    .bottomboxevent2,.bottomeveny{
      width: 25%;
      text-align: center;
    }
    .bottomboxevent2{
      color: orangered;
    }
  }
</style>
