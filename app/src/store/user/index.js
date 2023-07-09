//登录与注册模块
import {reqGetCode ,reqUserRegister,reqLogin} from '@/api'
const state = {
    code:'',
    token:'',
    nickName:''
}
const mutations = {
    GETCODE(state,value){
        state.code=value
    },
    USERLOGIN(state,value){
        state.token=value
    },
    SET_USERINFO(state, nickName) {
        state.nickName = nickName;
   },
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
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({ commit, state, dispatch }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
             commit('SET_USERINFO', result.data.nickName);
             return 'ok';
        } else {
             return Promise.reject();
        }
   },
   
    
}
const getters = {}

export default{
    state,
    mutations,
    getters,
    actions
}