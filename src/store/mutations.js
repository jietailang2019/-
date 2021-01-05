import Vue from "vue"
import {
  GET_FOODS_CATEGORY,
  GET_SHOPS,
  GET_ADDRESS,
  USER_INFO,
  LOG_OUT,
  SHOP_GOODS,
  SHOP_RATINGS,
  SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_SHOP_CART
} from "./mutaitions-types"
export default{
  //存储食品分类信息
  [GET_FOODS_CATEGORY](state,{categorys}){
    state.FoodsCategory=categorys
  },
  //存储商家信息
  [GET_SHOPS](state,{shops}){
    state.shops = shops
  },
  //获取定位信息
  [GET_ADDRESS](state,{address}){
    state.address = address
  },
  //存储用户信息
  [USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  //退出登录
  [LOG_OUT](state){
    state.userInfo={}
  },
  //存储goods信息
  [SHOP_GOODS](state,{goods}){
    state.goods = goods
  },
  //存储商户评价信息
  [SHOP_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  //存储商户信息
  [SHOP_INFO](state,{info}){
    state.shopInfo = info
  },
  //增加food.count
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){//第一次food中并不存在count
     //利用对象展开符  新对象替换老对象 数值变了，但是界面没有响应更新
     //food=Object.assign(food,{count:1})无效
      //food={...food,count:1} 无效
      Vue.set(food,"count",1) //有效
      state.shopCart.push(food)
      //food.count=1 //新增属性
    }else{
      food.count++
    }
  },
  //减少food.count
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
        state.shopCart.splice(state.shopCart.indexOf(food),1)
      }
    }
  },
  //清空购物车
  [CLEAR_SHOP_CART](state){
    if(state.shopCart){
      state.shopCart.forEach(food=>{
        food.count=0
      })
      state.shopCart=[]
    }
  }
}