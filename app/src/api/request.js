import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
    //基础路径，发请求的时候，路径当中会出现api，不用自己手动书写了
    baseURL:'/api',
    //代表请求超时的时间，超过5s自动取消
    timeout:5000
})

//请求拦截器：在发请求前，请求拦截器可以检测到，可以在请求发出去之前处理一些业务
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象中有一个属性很重要：headers请求头
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{ 
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，做一些事情
    nprogress.done()
    return res.data
  },(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

export default requests