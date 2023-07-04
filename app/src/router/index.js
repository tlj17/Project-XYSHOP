import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'


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
    routes,
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})