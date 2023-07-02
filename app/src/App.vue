<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
  
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  components: {
   Header,
   Footer
  },
  //优化：请求写在了typeNav组件中，每次当home组件挂载完毕和home|search组件切换（组件从无到有，销毁又挂载）时都会发起获取三级列表的请求，优化成只发一次请求
  mounted(){
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>
