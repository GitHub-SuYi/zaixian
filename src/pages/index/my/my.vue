<template>
  <div class="overall">
    <div class="ptext">我的</div>
    <div class="topbox">
      <div class="iconfont iconfont1 icon-qianbi"></div>
      <img class="topimg" src="/static/images/tx.jpg" style="width: 76px;height: 76px">
      <div class="topname">挥着辣条的男孩</div>
      <div class="id">ID:{{iphone}}</div>
    </div>
    <div class="money">
      <div class="moneyleft">
        <div class="moneyname">MIC余额</div>
        <div class="moneynumber">6666</div>
      </div>
      <div class="moneyleft moneyright">
        <div class="moneyname">教育豆余额</div>
        <div class="moneynumber">123456</div>
      </div>
    </div>
    <div class="top_up">
      <div class="upleft">
        <div class="uplefttext">充值MIC</div>
      </div>
      <div class="upleft">
        <div class="uplefttext">兑换教育豆</div>
      </div>
    </div>
    <div class="historybox">
      <div class="historyboxp">
        <div class="historyboxpleft">
          <div class="iconfont iconfont2 icon-shijian"></div>
          <div class="lishi">历史浏览</div>
        </div>
        <div class="iconfont iconfont3 icon-iconfontjiantou3"></div>
      </div>
      <div class="historytext">
        <div class="historytexteveny" v-for="item in historytext">
          <img :src="item.img" style="width: 135px;height: 80px;margin-right: 5px">
          <div class="chuandi" style="font-size: 16px">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="function">
      <div class="eveny">
        <div class="evenyleft">
          <div class="iconfont iconfont0 icon-benzi"></div>
          <div class="evenything">我的订单</div>
        </div>
        <div class="iconfont iconfont3 icon-iconfontjiantou3"></div>
      </div>
      <div class="eveny" @click="myclass">
        <div class="evenyleft">
          <div class="iconfont iconfont0 icon-tv"></div>
          <div class="evenything">我的课程</div>
        </div>
        <div class="iconfont iconfont3 icon-iconfontjiantou3"></div>
      </div>
      <div class="eveny">
        <div class="evenyleft">
          <div class="iconfont iconfont0 icon-aixin"></div>
          <div class="evenything">我的收藏</div>
        </div>
        <div class="iconfont iconfont3 icon-iconfontjiantou3"></div>
      </div>
      <div class="eveny">
        <div class="evenyleft">
          <div class="iconfont iconfont0 icon-daohanglan-05"></div>
          <div class="evenything">我的关注</div>
        </div>
        <div class="iconfont iconfont3 icon-iconfontjiantou3"></div>
      </div>
      <div class="kong"></div>
      <div class="eveny">
        <div class="evenyleft">
          <div class="iconfont iconfont0 icon-shezhi"></div>
          <div class="evenything">设置</div>
        </div>
        <div class="iconfont iconfont3 icon-iconfontjiantou3"></div>
      </div>
    </div>
    <div class="kong2"></div>
    <bottomlink :bottombox="bottombox"></bottomlink>
  </div>
</template>

<script>
  import bottomlink from '@/components/bottomlink'
  export default {
    components: {bottomlink},
    data() {
      return {
        bottombox:[
          {val:'首页',active:true,icon:'iconfont icon-shouye',color:'rgb(50,50,50)'},
          {val:'活动',active:false,icon:'iconfont icon-icon--',color:'rgb(50,50,50)'},
          {val:'消息',active:false,icon:'iconfont icon-dibudaohanglan-',color:'rgb(50,50,50)'},
          {val:'我的',active:false,icon:'iconfont icon-daohanglan-05',color:'rgb(255,131,21'},
        ],
        phone:'',
        historytext:[
          {img:'/static/images/hisimg.png',name:'传递理财小知识'},
          {img:'/static/images/hisimg.png',name:'传递理财小知识'},
          {img:'/static/images/hisimg.png',name:'传递理财小知识'},
          {img:'/static/images/hisimg.png',name:'传递理财小知识'},
          {img:'/static/images/hisimg.png',name:'传递理财小知识'},
        ],
      }
    },
    props: {},
    methods:{
      myclass(){
        window.location.href = '#/myclass'
      },
    },
    mounted(){
    },
    created() {
      this.iphone = localStorage.getItem('FID')
    },
  }
</script>

<style scoped lang="less">
  .overall{
    width: 100%;
    .ptext{
      width: 100%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 17px;
    }
    .topbox{
      width: 90%;
      margin: 10px auto;
      box-sizing: border-box;
      border: 1px solid rgb(252,252,252);
      border-radius: 5px;
      text-align: center;
      background-image: url("/static/images/mybg.png");//背景图片
      background-size:cover;
      margin-bottom: 15px;
      position: relative;
      .iconfont1{
        font-size: 28px;
        font-weight: bold;
        position: absolute;
        right: 20px;
        top: 20px;
      }
      .topimg{
        border-radius: 50%;
        overflow: hidden;
      }
      .topname{
        font-size: 16px;
      }
      .id{
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 16px;
      }
    }
    .money{
      display: flex;
      width: 100%;
      .moneyright{
        border-left:1px solid #969696 ;
      }
      .moneyleft{
        width: 50%;
        text-align: center;
        .moneyname{
          font-size: 17px;
        }
        .moneynumber{
          color: #969696;
          margin-top: 5px;
        }
      }
    }
    .top_up{
      width: 100%;
      height: 35px;
      display: flex;
      line-height: 35px;
      .upleft{
        width: 50%;
        text-align: center;
        .uplefttext{
          width: 70%;
          margin: 10px auto;
          height: 34px;
          line-height: 34px;
          border: 1px solid #ff9600;
          color: #ff9600;
          border-radius: 20px;
        }
      }
    }
    .historybox{
      margin-top: 40px;
      width: 100%;
      margin-bottom: 20px;
      .historyboxp{
        display: flex;
        height: 50px;
        line-height: 50px;
        justify-content: space-between;
        padding: 0 20px;
        .iconfont3{
          font-size: 16px;
          font-weight: bold;
        }
        .historyboxpleft{
          display: flex;
          .iconfont2{
            color: #ff9600;
            margin-right: 10px;
          }
          .lishi{
            font-size: 16px;
          }
        }
      }
      .historytext{
        width: 100%;
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        white-space: nowrap;
      }
    }
    .kong{
      height: 10px;
      width: 100%;
      background-color: rgb(245,245,245);
    }
    .function{
      width: 100%;
      .kong{
        height: 10px;
        width: 100%;
        background-color: rgb(245,245,245);
      }
      .eveny{
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid rgb(245,245,245);
        height: 59px;
        line-height: 59px;
        display: flex;
        justify-content: space-between;
        .iconfont3{
          font-size: 16px;
          font-weight: bold;
        }
        .evenyleft{
          display: flex;
          .iconfont0{
            color: #ff9600;
            font-size: 25px;
            font-weight: bold;
          }
          .evenything{
            font-size: 16px;
            margin-left: 20px;
          }
        }
      }
    }
    .kong2{
      height: 60px;
      width: 100%;
      background-color: rgb(245,245,245);
    }
  }
</style>
