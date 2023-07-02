//M大写 Mock是一个对象
import  Mock from 'mockjs'
//引入JSON格式数据（没有对外暴露，但是可以引入）
//webpack默认对外暴露的：图片、JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

//Mock对象的mock方法，第一个参数请求地址，第二个参数：请求数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})