//登录与注册模块
import {reqGetCode} from '@/api'
const state = {}
const mutations = {}
const actions = {
     getCode({commit},phone){
        let result = reqGetCode(phone)
        console.log(result);
    }
   
    
}
const getters = {}

export default{
    state,
    mutations,
    getters,
    actions
}