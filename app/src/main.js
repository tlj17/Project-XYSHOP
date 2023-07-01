import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

//三级联动--全局组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false

//轮播图全局组件
import Carousel from '@/components/Carousel'
Vue.component('Carousel',Carousel)
new Vue({
  render: h => h(App),
  //注册路由：组件身上都拥有了$route和$router属性
  router,
  //注册仓库，组件实例身上会多一个$store属性
  store
}).$mount('#app')
