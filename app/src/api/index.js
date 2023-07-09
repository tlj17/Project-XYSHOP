//当前这个模块，api进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',methods:'get'})
export const reqgetBannerList = ()=>mockRequests.get('/banner')
export const reqFloorList = ()=>mockRequests.get('/floor')
//获取搜索模块数据
//当前这个接口，给服务器传递一个默认参数，至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({
    url:'/list',
    method:'post',
    data:params
})


//获取产品信息详情
export const reqDetailInfo = (skuId)=>requests({url:`/item/${ skuId }`,method:'get'})
//将产品添加到购物车中/获取更新某一个产品的个数
export const reqShopCart=(skuId,skuCount)=>requests({url:`/cart/addToCart/${ skuId }/${ skuCount }`,method:'post'})
//获取购物车列表
export const  reqCartList=()=>requests({url:'/cart/cartList',method:'get'})
//删除购物车产品
export const reqDeleteCart =(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//修改商品的选中状态
export const reqUpdateChecked=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//获取验证码
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册 /api/user/passport/register
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})
//登录 /api/user/passport/login
export const reqLogin=(data)=>requests({url:'/user/passport/login',data,method:'post'})
//获取用户信息
export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})