import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

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
export default new VueRouter({
    routes: [
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:true},
            name:'search'
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        //重定向，在项目跑起来的时候，访问/，立马让它定向到首页
        {
            path:"*",
            redirect:'/home'
        }
    ]
})