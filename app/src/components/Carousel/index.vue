<template>
  <div class="swiper-container" ref="floor2Swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
                      <img :src="carousel.imgUrl" />
                    </div>
                  </div>
                  <!-- 如果需要分页器 -->
                  <div class="swiper-pagination"></div>

                  <!-- 如果需要导航按钮 -->
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                </div>
              
</template>

<script>
import Swiper from 'swiper'
export default {
    props:['list'],
    watch:{
      //通过watch监听bannerList属性 的属性值的变化
      list:{
        //立即监听：不管数据有没有变化，上来立即监听一次
        immediate:true,
        //如果执行handler方法，代表组件实例身上的这个属性的属性值已经有了（数组：四个元素）。但是只能保证数据已经有了，不能保证v-for已经把结构渲染完毕
        handler(newValue,oldValue){
          //$nextTick:在下次DOM更新循环结束之后，执行延迟回调。在修改数据之后，立即使用这个方法，获取更新后的DOM。可以保证页面中的结构一定是有的
          this.$nextTick(()=>{
            var mySwiper = new Swiper(this.$refs.floor2Swiper, {
              loop:true,
              pagination:{
                el:'.swiper-pagination',
                clickable:true
              },
            navigation:{
              nextEl:'.swiper-button-next',
              prevEl:'.swiper-button-prev'
            }
    })
      })
    }
   }
  }
}
</script>

<style>

</style>