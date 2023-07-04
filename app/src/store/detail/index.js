import {reqDetailInfo} from '@/api'

const actions={
    async getDetailInfo({commit},skuId){
        let result = await reqDetailInfo(skuId)
        if(result.code==200) commit('GETDETAILINFO',result.data)
    }
}
const mutations={
    GETDETAILINFO(state,value){
        state.detailInfo=value
    }
}
const state={
    detailInfo:{}
}
const getters={
    categoryView(state){
        return state.detailInfo.categoryView||{}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo||{}
    }

}

export default{
    actions,mutations,state,getters
}
