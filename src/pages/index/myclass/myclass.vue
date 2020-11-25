<template>
  <div class="overall">
    <div class="topbox">
      <div class="iconfont icon-zuojiantou" @click="myfn"></div>
      <div class="p">我的课程</div>
    </div>
    <div class="link">
      <tab >
        <tab-item selected @on-item-click="onItemClick">视频</tab-item>
        <tab-item @on-item-click="onItemClick">电子书</tab-item>
        <tab-item @on-item-click="onItemClick">音频</tab-item>
      </tab>
    </div>
    <div class="kong"></div>
    <div class="cont1" v-if="type==0">
      <!--//如果等于0时才显示-->
      <div class="thing" v-model="text" v-for="item in thing">
        <div class="eveny1">
          <img :src="item.img" style="width: 140px;height: 82px;margin-right: 10px">
          <div class="evenyright1">
            <div class="rightpbox1">
              <div class="video1">视频</div>
              <div class="rightp1">{{item.text}}</div>
            </div>
            <div class="righttext1">{{item.text}}</div>
            <div class="rightbottom1">
              <div class="renshu1">
                <div class="iconfont iconfont1 icon-yanjing"></div>
                <div class="renshu1text">{{item.number}}人</div>
              </div>
              <div class="jindubox1">
                <div class="iconfont icon-59"></div>
                <div class="jindu1text">已学{{item.yixue}}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont2" v-if="type==1">
      <!--//如果等于1时才显示-->
      <div class="thing2" v-model="text" v-for="item in thing1">
        <div class="eveny2">
          <img :src="item.img" style="width: 106px ;height: 141px">
          <div class="text2">{{item.text}}</div>
          <div class="bottom2box">
            <img src="/static/images/douimg.png">
            <div class="moeny" style="color: red">{{item.number}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont3" v-if="type==2">
      <!--//如果等于2时才显示-->
      <div class="thing3" v-model="text" v-for="item in thing3">
        <!--//分别循环出所有数据,css样式三种数据显示都写用不一样的选择器名字分开-->
        <div class="eveny3">
          <img :src="item.img" style="width: 140px;height: 82px;margin-right: 10px">
          <div class="evenyright1">
            <div class="rightpbox1">
              <div class="video1">视频</div>
              <div class="rightp1">{{item.text}}</div>
            </div>
            <div class="righttext1">{{item.text}}</div>
            <div class="rightbottom1">
              <div class="renshu1">
                <div class="iconfont iconfont1 icon-yanjing"></div>
                <div class="renshu1text">{{item.number}}人</div>
              </div>
              <div class="jindubox1">
                <div class="iconfont icon-59"></div>
                <div class="jindu1text">已学{{item.yixue}}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  export default {
    components: {Tab, TabItem},
    data() {
      return {
        thing:[
          {img:'/static/images/orderimg.png',text:'北大学霸给8-18岁孩子成长悄悄话',number:'80',yixue:'66'},
          {img:'/static/images/orderimg.png',text:'北大学霸给8-18岁孩子成长悄悄话',number:'80',yixue:'66'},
          {img:'/static/images/orderimg.png',text:'北大学霸给8-18岁孩子成长悄悄话',number:'80',yixue:'66'},
        ],
        thing1:[
          {img:'/static/images/bookimg.png',text:'真实的自我表达',number:'200'},
          {img:'/static/images/bookimg.png',text:'真实的自我表达',number:'200'},
          {img:'/static/images/bookimg.png',text:'真实的自我表达',number:'200'},
          {img:'/static/images/bookimg.png',text:'真实的自我表达',number:'200'},
        ],
        thing3:[
          {img:'/static/images/hisimg.png',text:'北大学霸给8-18岁孩子成长悄悄话',number:'80',yixue:'66'},
          {img:'/static/images/hisimg.png',text:'北大学霸给8-18岁孩子成长悄悄话',number:'80',yixue:'66'},
          {img:'/static/images/hisimg.png',text:'北大学霸给8-18岁孩子成长悄悄话',number:'80',yixue:'66'},
        ],
        text:[],
        type:0,
      }
    },
    props: {},
    methods:{
      myfn(){
        window.location.href = '#/my'
      },
      onItemClick(index){
        var _this=this
        console.log(index)//知道点到哪了,index可以拿到0.1.2，3个值
        this.type = index//将type赋值成0或1或2
        console.log(_this.text)
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
      width: 100%;
      height: 44px;
      line-height: 44px;
      display: flex;
      border-bottom: 1px solid rgb(245,245,245);
      .iconfont{
        position: relative;
        left: 20px;
        font-size: 20px;
        font-weight: bold;
      }
      .p{
        width: 100%;
        text-align: center;
        font-size: 16px;
      }
    }
    .link{
      width: 100%;
    }
    .kong{
      width: 100%;
      height: 10px;
      background-color: rgb(245,245,245);
    }
    .cont1{
      width: 100%;
      .thing{
        width: 100%;
        .eveny1{
          width: 90%;
          margin: 10px auto;
          display: flex;
          .evenyright1{
            width: 100%;
            .rightpbox1{
              width: 100%;
              display: flex;
              height: 40px;
              line-height: 20px;
              margin-top: 5px;
              /*flex: 1;*/
              /*flex-wrap: nowrap;*/
              .video1{
                width: 40px;
                height: 20px;
                color: #46b3e6;
                line-height: 20px;
                text-align: center;
                border: 1px solid #46b3e6;
                border-radius: 5px;
              }
            }
            .righttext1{
              font-size: 10px;
              color: #969696;
              margin-top: 3px;
            }
            .rightbottom1{
              display: flex;
              justify-content: space-between;
              font-size: 10px;
              color: #969696;
              margin-top: 3px;
              .renshu1{
                display: flex;
              }
              .jindubox1{
                display: flex;
              }
            }
          }
        }
      }
    }
    .cont2{
      width: 100%;
      .thing2{
        width: 125px;
        display: inline-flex;
        text-align: center;
        .eveny2{
          width: 125px;
          text-align: center;
        }
      }
    }
    .cont3{
      width: 100%;
      .thing3{
        width: 100%;
        .eveny3{
          width: 90%;
          margin: 10px auto;
          display: flex;
          .evenyright1{
            width: 100%;
            .rightpbox1{
              width: 100%;
              display: flex;
              height: 40px;
              line-height: 20px;
              margin-top: 5px;
              /*flex: 1;*/
              /*flex-wrap: nowrap;*/
              .video1{
                width: 40px;
                height: 20px;
                color: #46b3e6;
                line-height: 20px;
                text-align: center;
                border: 1px solid #46b3e6;
                border-radius: 5px;
              }
            }
            .righttext1{
              font-size: 10px;
              color: #969696;
              margin-top: 3px;
            }
            .rightbottom1{
              display: flex;
              justify-content: space-between;
              font-size: 10px;
              color: #969696;
              margin-top: 3px;
              .renshu1{
                display: flex;
              }
              .jindubox1{
                display: flex;
              }
            }
          }
        }
      }
    }
  }
</style>
