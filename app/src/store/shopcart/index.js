import { reqCartList ,reqDeleteCart,reqUpdateChecked} from "@/api"

const actions={
    //获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code==200){
            commit('GETCARLIST',result.data)
        }
    },
    async deleteCart({commit},skuId){
         let result = await reqDeleteCart(skuId)

        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async updateChecked({commit},{skuId,isChecked}){
        let result = await reqUpdateChecked(skuId,isChecked)

       if(result.code==200){
           return 'ok'
       }else{
           return Promise.reject(new Error('fail'))
       }
   },
}
const mutations={
    GETCARLIST(state,value){
        state.cartList=value
    }
}
const state={
    cartList:[]
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
    // cartInfoList(state){
    //     return  state.cartList[0].cartInfoList||[]
    // }
}
export default{
    state,
    mutations,
    actions,
    getters
}