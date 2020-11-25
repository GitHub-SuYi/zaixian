<template>
  <div class="overall">
    <div class="topbox">
      <div class="iconfont icon-daohanglan-05" style="font-weight: bold;margin-left: 10px"></div>
      <div class="inputbox">
        <div class="iconfont icon-chazhao" style="margin-left: 10px"></div>
        <x-input v-model="inputtext" placeholder="搜索您感兴趣的内容"></x-input>
      </div>
    </div>
    <swiper style="border: none;outline: none;" :auto="true" :list="demo01_list" v-model="demo01_index" ></swiper>
    <div class="jiaoyubox">
      <div class="jiaoyueveny">
        <img class="jiaoyuimg" src="/static/images/tx.jpg" style="width: 50px;height: 50px;">
        <div class="jiaoyutext">财商教育</div>
      </div>
      <div class="jiaoyueveny">
        <img class="jiaoyuimg" src="/static/images/tx.jpg" style="width: 50px;height: 50px;">
        <div class="jiaoyutext">文化教育</div>
      </div>
      <div class="jiaoyueveny">
        <img class="jiaoyuimg" src="/static/images/tx.jpg" style="width: 50px;height: 50px;">
        <div class="jiaoyutext">区域连教育</div>
      </div>
      <div class="jiaoyueveny">
        <img class="jiaoyuimg" src="/static/images/tx.jpg" style="width: 50px;height: 50px;">
        <div class="jiaoyutext">全部</div>
      </div>
    </div>
    <!--<div class="iconfont iconfont1 icon-icon&#45;&#45;" style="color: orangered" ></div>-->
    <div class="autoswiper">
      <div class="iconfont iconfont9 icon-laba"></div>
      <div class="autobox">
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
          <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
          <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
        </swiper>
      </div>
    </div>
    <div class="tuijian">
      <div class="tuijianp">-热门推荐-</div>
      <div class="tuijianelement">
        <div class="tuijianeveny">
          <img  src="/static/images/hotimg1.png" style="width: 110px;height: 110px"/>
          <div class="tuijiantext">热门电子书</div>
        </div>
        <div class="tuijianeveny">
          <img  src="/static/images/hotimg2.png" style="width: 110px;height: 110px"/>
          <div class="tuijiantext">热门视频教程</div>
        </div>
        <div class="tuijianeveny">
          <img  src="/static/images/hotimg3.png" style="width: 110px;height: 110px"/>
          <div class="tuijiantext">热门音频教程</div>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="hotbox">
      <div class="hotp">-活动专区-</div>
      <div class="hotimgbox">
        <div class="hotleft">
          <img src="/static/images/huodong1.png" style="height: 120px">
        </div>
        <div class="hotright">
          <div>
            <img src="/static/images/huodong2.png" style="height: 55px">
          </div>
          <div>
            <img src="/static/images/huodong3.png" style="height: 55px;margin-top: 5px">
          </div>
        </div>
      </div>
    </div>
    <div class="kong1"></div>
    <bottomlink :bottombox="bottombox"></bottomlink>
  </div>
</template>

<script>
  import bottomlink from '@/components/bottomlink'
  import { Swiper,XInput,SwiperItem  } from 'vux'
  export default {
    components: {Swiper,XInput,SwiperItem,bottomlink },
    data() {
      return {
        bottombox:[
          {val:'首页',active:true,icon:'iconfont icon-shouye',color:'rgb(255,131,21'},
          {val:'活动',active:false,icon:'iconfont icon-icon--',color:'rgb(50,50,50)'},
          {val:'消息',active:false,icon:'iconfont icon-dibudaohanglan-',color:'rgb(50,50,50)'},
          {val:'我的',active:false,icon:'iconfont icon-daohanglan-05',color:'rgb(50,50,50)'},
        ],
        demo01_list:[{
          url: 'javascript:',
          img: 'http://img0.imgtn.bdimg.com/it/u=2608790599,4133719683&fm=26&gp=0.jpg',
          // title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'http://img2.imgtn.bdimg.com/it/u=1125178553,2514758115&fm=26&gp=0.jpg',
          // title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', // 404
          // title: '送你一次旅行',
          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }],
        demo01_index: 0,
        inputtext: '',
      }
    },
    props: {},
    methods:{
      clickfn(item){
        for(let i = 0 ; i < this.bottombox.length ; i++){
          this.bottombox[i].active = false
        }
        item.active = true;
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
      display: flex;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      .iconfont{
        font-size:22px ;
      }
      .inputbox{
        height:35px ;
        line-height: 35px;
        margin-top: 5px;
        margin-left: 5%;
        display: flex;
        width: 75%;
        border-radius: 20px;
        background-color: rgb(238,238,238);
      }
    }
    .jiaoyubox{
      width: 100%;
      margin: 20px 0;
      display: flex;
      .jiaoyueveny{
        width: 25%;
        text-align: center;
        .jiaoyuimg{
          border-radius: 10px;
          overflow: hidden;
        }
        .jiaoyutext{
          margin-top: 5px;
        }
      }
    }
    .iconfont1{
      position: relative;
      top: 58px;
      left: 15px;
      font-weight: bold;
      font-size: 22px;
    }
    .autoswiper{
      width: 100%;
      /*overflow: hidden;*/
      box-sizing: border-box;
      background-color: rgb(245,245,245);
      display: flex;
      .iconfont9{
        line-height: 50px;
        color: rgb(255,129,22);
        margin-right: 10px;
        margin-left: 10px;
      }
      .autobox{
        height: 40px;
        flex: 1;
        position: relative;
        top: 5px;
      }
    }
    .tuijian{
      width: 100%;
      .tuijianelement{
        display: flex;
        .tuijianeveny{
          width: 33.3%;
          text-align: center;
          .tuijiantext{
            margin: 10px 0;
          }
        }
      }
      .tuijianp{
        margin: 10px 0;
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .kong{
      width: 100%;
      height: 10px;
      background-color: rgb(245,245,245);
    }
    .hotbox{
      width: 100%;
      .hotp{
        margin: 10px 0;
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
      .hotimgbox{
        display: flex;
        justify-content: center;
        .hotleft{
          width: 50%;
          margin: 10px ;
        }
        .hotright{
          width: 50%;
          margin: 10px ;
        }
      }
    }
    .kong1{
      width: 100%;
      height: 60px;
      background-color: rgb(245,245,245);
    }
  }
</style>
