<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="slide.id">
        <img :src="slide.imgUrl" :class="{active:currentIndex==index}" @click="changeIndex(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    data() {
      return {
        currentIndex:0
      }
    },
    props:['skuImageList'],
    watch:{
      //通过watch监听skuImageList属性 的属性值的变化
      //如果执行handler方法，代表组件实例身上的这个属性的属性值已经有了但是只能保证数据已经有了，不能保证v-for已经把结构渲染完毕
        skuImageList(newValue,oldValue){
          //$nextTick:在下次DOM更新循环结束之后，执行延迟回调。在修改数据之后，立即使用这个方法，获取更新后的DOM。可以保证页面中的结构一定是有的
          this.$nextTick(()=>{
           new Swiper(this.$refs.cur, {
            navigation:{
              nextEl:'.swiper-button-next',
              prevEl:'.swiper-button-prev'
            },
            slidesPerView :3
          })
      })
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex=index
      this.$bus.$emit('getIndex',this.currentIndex)
    }
  },
}
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>