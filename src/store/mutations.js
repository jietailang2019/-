import {
  GET_FOODS_CATEGORY,
  GET_SHOPS,
  GET_ADDRESS,
  USER_INFO,
  LOG_OUT,
  SHOP_GOODS,
  SHOP_RATINGS,
  SHOP_INFO
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
  }
}