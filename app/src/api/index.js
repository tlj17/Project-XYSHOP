//当前这个模块，api进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',methods:'get'})
export const reqgetBannerList = ()=>mockRequests.get('/banner')
export const reqFloorList = ()=>mockRequests.get('/floor')
export const reqGetSearchInfo = (params)=>requests({
    url:'/list',
    method:'post',
    data:params
})

export const reqGetCode = (phone)=>requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})