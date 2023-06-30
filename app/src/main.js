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
  router,
  store
}).$mount('#app')
