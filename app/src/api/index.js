//当前这个模块，api进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',methods:'get'})
export const reqgetBannerList = ()=>mockRequests.get('/banner')
export const reqFloorList = ()=>mockRequests.get('/floor')
//当前这个接口，给服务器传递一个默认参数，至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({
    url:'/list',
    method:'post',
    data:params
})

export const reqGetCode = (phone)=>requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})

export const reqDetailInfo = (skuId)=>requests({url:`/item/${ skuId }`,methods:'get'})