//search模块小仓库
import {reqGetSearchInfo} from '@/api'
//准备actions对象--响应组件中用户的动作
const actions = {
    async getSearchList({commit},params={}){
        //当前这个reqGetSearchInfo函数在调用获取服务器数据时，至少传递一个参数（空对象）
        //params形参：是当用户派发actions时，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code==200)
        {
            commit('GETSEARCHLIST',result.data)
        }
    }
}
//准备mutations对象--修改state中的数据
const mutations = {
    GETSEARCHLIST(state,value){
        state.searchList = value
    }
}
//准备state对象--保存具体的数据
const state = {
    searchList:{}
}

const getters ={
    //以防没有网络返回undefined，计算新的属性的属性值至少是一个空数组
    //当前形参state，是当前仓库中的state，不是大仓库中的那个state
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}
//创建并暴露store
export default ({
    actions,
    mutations,
    state,
    getters
})