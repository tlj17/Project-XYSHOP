import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from '@/store/home'
import search from '@/store/search'
import user from './user'

//创建并暴露store
export default new Vuex.Store({
   modules:{
    home,
    search,
    user
   }
})
