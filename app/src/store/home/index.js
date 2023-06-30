//home模块小仓库
import {reqCategoryList,reqgetBannerList,reqFloorList} from '@/api'
//准备actions对象--响应组件中用户的动作
const actions = {
    async categoryList({commit}){
        let result =await reqCategoryList()
        if(result.code==200)
        {
            commit("CATEGORY",result.data)
        }
    },
    async getBannerList({commit}){
        let result =await reqgetBannerList()
        if(result.code==200)
        {
            commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result =await reqFloorList()
        if(result.code==200)
        {
            commit('GETFLOORLIST',result.data)
        }
    }
}
//准备mutations对象--修改state中的数据
const mutations = {
    CATEGORY(state,value){
        state.categoryList = value
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,value){
        state.floorList=value
    }

}
//准备state对象--保存具体的数据
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}

//创建并暴露store
export default({
    actions,
    mutations,
    state
})