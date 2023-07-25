import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'


//先把VueRouter原型对象的push方法先保存一份
let originPush = VueRouter.prototype.push
//重写push|replace
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject)
    {
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

let originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject)
    {
        originReplace.call(this,location,resolve,reject)
    }
    else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
let router = new VueRouter({
    routes,
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})

//全局守卫 前置守卫
router.beforeEach(async (to,from,next)=>{
    //to:可以获取到到跳转到那个路由的信息
    //from：可以获取到从哪个路由来的信息
    //next：放行函数  next()放行 next(path)放行到指定路由  next(false)
    // next()
   let token = store.state.user.token
   let name = store.state.user.nickName

   if(token){
    //用户已经登录，不能去login页面
    if(to.path == '/login'){
        next('/home')
    }else{//去其他页面，判断有无用户信息
        if(name){
            next()
        }else{//没有用户信息
            try{
                await store.dispatch('getUserInfo')
                next()
            }catch(error){
                //token失效获取不到用户信息，重新登陆
                //清除token
                await store.dispatch('logOut')
                next('/login')
            }
        }
   }
   }else{
    next()
   }
})

export default router