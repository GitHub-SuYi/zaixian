<template>
  <div class="overall">
    <div class="p">
      <div class="iconfont icon-zuojiantou" @click="homefn"></div>
      <div class="ptext">线下活动</div>
    </div>
    <div class="linkbox1">
      <div class="linkbox1text">
        <div :class="item.buff?'linkbox1eveny':'linkbox1eveny1'" v-for="item in linkbox" @click="linkfn(item)">{{item.text}}</div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="xuanzhebox">
      <div :class="item.buff?'xuanzhe':'xuanzhe2'" v-for="item in xuanzhebox" @click="xuanzhefn(item)">{{item.text}}</div>
    </div>
    <div class="hotbox">
      <div class="hoteveny" v-for="item in hotbox">
        <div class="hotleft">
          <div class="hotp">财商教育</div>
          <img :src="item.img" style="width: 150px;height: 83px">
        </div>
        <div class="hotright">
          <div class="hottext">{{item.text}}</div>
          <div class="hotname">{{item.name}}</div>
          <div class="hottime">{{item.time}}</div>
        </div>
      </div>
    </div>
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
          {val:'活动',active:false,icon:'iconfont icon-icon--',color:'rgb(255,131,21'},
          {val:'消息',active:false,icon:'iconfont icon-dibudaohanglan-',color:'rgb(50,50,50)'},
          {val:'我的',active:false,icon:'iconfont icon-daohanglan-05',color:'rgb(50,50,50)'},
        ],
        linkbox:[
          {text:'全部视频',buff:true},
          {text:'财商教育',buff:false},
          {text:'区域连教育',buff:false},
          {text:'文化教育',buff:false},
          {text:'更多教育',buff:false},
        ],
        xuanzhebox:[
          {text:'正在进行中',buff:true},
          {text:'往期活动',buff:false},
        ],
        hotbox:[
          {text:'传递理财小知识',name:'远洋太古里',time:'05月20日结束',img:'/static/images/activeimg.png'},
          {text:'传递理财小知识',name:'远洋太古里',time:'05月20日结束',img:'/static/images/activeimg.png'},
          {text:'传递理财小知识',name:'远洋太古里',time:'05月20日结束',img:'/static/images/activeimg.png'},
        ],
      }
    },
    props: {},
    methods:{
      homefn(){
        window.location.href = '#/home'
      },
      linkfn(item){
        console.log(this.linkbox)
        for(let i = 0 ; i < this.linkbox.length ; i++){
          this.linkbox[i].buff = false
        }
        item.buff = true
      },
      xuanzhefn(item){
        for ( let i = 0 ; i < this.xuanzhebox.length ; i++) {
          this.xuanzhebox[i].buff = false
        }
        item.buff = true
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
    .p{
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      text-align: center;
      display: flex;
      border-bottom: 1px solid rgb(245,245,245);
      .ptext{
        width: 100%;
        text-align: center;
      }
      .iconfont{
        position: relative;
        left: 20px;
        font-size: 25px;
      }
    }
    .linkbox1{
      width: 100%;
      box-sizing: border-box;
      height: 53px;
      line-height: 53px;
      background-color: #fff;
      .linkbox1text{
        width: 100%;
        overflow-x: scroll;
        white-space: nowrap;
        .linkbox1eveny{
          color: rgb(0, 0, 0);
          width: 100/3%;
          height: 100%;
          text-align: center;
          display: inline-block;
        }
        .linkbox1eveny1{
          color: rgb(150, 150, 150);
          width: 100/3%;
          height: 100%;
          text-align: center;
          display: inline-block;
        }
      }
    }
    .kong{
      width: 100%;
      height: 10px;
      background-color: rgb(245,245,245);
    }
    .xuanzhebox{
      width: 100%;
      height: 48px;
      line-height: 48px;
      display: flex;
      font-size: 15px;
      border-bottom: 1px solid rgb(245,245,245);
      .xuanzhe{
        width: 30%;
        display: flex;
        justify-content: center;
        margin: 0 10%;
        color: rgb(255, 150, 0);
        border-bottom: 1px solid rgb(255, 150, 0);
      }
      .xuanzhe2{
        width: 30%;
        display: flex;
        margin: 0 10%;
        justify-content: center;
        text-align: center;
        color: rgb(0,0,0);
      }
    }
    .hotbox{
      width: 100%;
      .hoteveny{
        width: 100%;
        display: flex;
        .hotleft{
          width: 50%;
          text-align: center;
          .hotp{
            width: 35%;
            text-align: center;
            border-radius: 0 10px 10px 0;
            height: 18px;
            line-height: 18px;
            background-color: rgb(#343539);
            color: white;
            font-size: 12px;
            position: relative;
            top: 23px;
            left: 20px;
          }
        }
        .hotright{
          width: 50%;
          margin-top: 20px;
          .hottext{
            font-size: 14px;
            font-weight: bold;
            margin-top: 5px;
          }
          .hoyname{
            font-size: 9px;
            font-weight: bold;
            margin-top: 5px;
          }
          .hottime{
            color: #969696;
            margin-top: 25px;
          }
        }
      }
    }
  }
</style>
