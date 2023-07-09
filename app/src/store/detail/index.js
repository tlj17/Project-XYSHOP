import {reqDetailInfo,reqShopCart} from '@/api'
//封装游客身份模块uuid：生成一个随机字符串（不能再改变）
import {getUUID} from '@/utils/uuid_token'

const actions={
    async getDetailInfo({commit},skuId){
        let result = await reqDetailInfo(skuId)
        if(result.code==200) commit('GETDETAILINFO',result.data)
    },
    async shopCart({commit},{skuId,skuCount}){
        //没有返回数据，不需要仓库存储数据
        let result = await reqShopCart(skuId,skuCount)
        if(result.code==200){
            return 'ok'
        }else{
             return Promise.reject(new Error('fail'))
        }
    }
}
const mutations={
    GETDETAILINFO(state,value){
        state.detailInfo=value
    },
}
const state={
    detailInfo:{},
    uuid_token:getUUID()
}
const getters={
    categoryView(state){
        return state.detailInfo.categoryView||{}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList||[]
    }

}

export default{
    actions,mutations,state,getters
}
