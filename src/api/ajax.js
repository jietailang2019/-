/**
 * 
 * 请求后台ajax函数封装
 * url:请求连接
 * data：请求携带数据
 * type:post/get
 * 返回response对象
 * **/

import axios from "axios"
export default function ajax(url='',data={},type="GET"){
  return new Promise(function(resolve,reject){
    let promise;
    if(type==="GET"){
      let queryStr='';
      Object.keys(data).forEach(key =>{
        queryStr += key +'='+ data[key] + '&'
      })
      if(queryStr !==''){
        queryStr = queryStr.substring(0,queryStr.lastIndexOf("&"))
        url=url+'?'+queryStr
      }  
      promise = axios.get(url)  
    }else{
      promise = axios.post(url,data)
    }
    promise.then(
      function(res){
        resolve(res.data)
      }
    ).catch(function(error){
      reject(error)
    })
  })
}