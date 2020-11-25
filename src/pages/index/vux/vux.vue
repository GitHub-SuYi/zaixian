<template>
  <div class="overall">
    <x-input title="禁用验证" placeholder="I'm placeholder" novalidate  :show-clear="true"  placeholder-align="right"></x-input>
    <swiper :list="demo01_list" v-model="demo01_index" ></swiper>
    <x-button type="primary">primary</x-button>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
      <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
      <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
      <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { XInput,Swiper,XButton,SwiperItem   } from 'vux'
  export default {
    components: {XInput,Swiper,XButton,SwiperItem  },
    data() {
      return {
        demo01_list:[{
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg', // 404
          title: '送你一次旅行',
          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }],
        demo01_index: 0,
      }
    },
    props: {},
    methods:{},
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .overall{
    width: 100%;
  }
</style>
