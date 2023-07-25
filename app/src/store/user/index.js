//登录与注册模块
import {reqGetCode ,reqUserRegister,reqLogin,reqUserInfo,reqLogOut} from '@/api'
import {getToken, setToken,removeToken} from '@/utils/token'
const state = {
    code:'',
    token:getToken('TOKEN'),
    nickName:''
}
const mutations = {
    GETCODE(state,value){
        state.code=value
    },
    USERLOGIN(state,value){
        state.token=value
    },
    GETUSERINFO(state, nickName) {
        state.nickName = nickName;
   },
   CLEARTOKEN(state){
    state.token=''
    state.nickName=''
    removeToken()
   }
}
const actions = {
     async getCode({commit},phone){
        let result = await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({commit},data){
        let result = await reqUserRegister(data)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
        
    },
    async userLogin({commit},data){
        let result = await reqLogin(data)
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
             //持久化存储token
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
             commit('GETUSERINFO', result.data.nickName);
             return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
   },
   
    async logOut({commit}){
        let result = await reqLogOut()
        if(result.code==200)
        {
            commit('CLEARTOKEN')
            return 'ok'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    getters,
    actions
}