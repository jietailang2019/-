import {
  getAddress,
  getFoodsCategory,
  getShops,
  getSearchShops,
  getCaptcha,
  loginPwd,
  getSendCode,
  LoginSms,
  getUserInfo,
  userLogout,
  getShopInfo,
  getShopGoods,
  getShopRatings
} from "../api"

export default{
  //异步获取食物分类信息
 async getFoodsCategorys({commit}){
    const result = await getFoodsCategory()
    if(result.code ===0){
      const categorys = result.data
      commit("get_foods_category",{categorys})
    }
  },
  //根据经纬度坐标获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await getShops(latitude,longitude)
    if(result.code ===0){
      const shops = result.data
      commit('get_shops',{shops})
    }
  },
  //根据经纬度获取定位地址
  async getAddress({commit,state}){
    const {latitude,longitude} = state
    const geohash = latitude+','+longitude
    const result = await getAddress(geohash)
    if(result.code ===0){
      console.log(result.data)
      const address = result.data
      commit('get_address',{address})
    }
  },
  //存储用户信息
  saveUserInfo({commit,state},userInfo){
    commit('user_info',{userInfo})
  },
  //异步获取用户登录会话  
  async getUserInfo({commit}){
    const result = await getUserInfo()
    if(result.code===0){
      const userInfo = result.data
      commit('user_info',{userInfo})
    }
  },
  //退出登录
  async log_out({commit}){
    const result = await userLogout()
    if(result.code ===0){
      commit('log_out')
    }
  },
  //  异步获取商户食物信息
  async get_shop_goods({commit},cb){
    const result = await getShopGoods()
    if(result.code ===0){
      const goods = result.data
      commit('shop_goods',{goods})
      cb&&cb()
    }
  },
  //  异步获取商户评论信息
  async get_shop_ratings({commit}){
    const result = await getShopRatings()
    if(result.code ===0){
      const ratings = result.data
      commit('shop_ratings',{ratings})
    }
  },
  //  异步获取商户信息
  async get_shop_info({commit},payload){
    const result = await getShopInfo()
    const {params,cb} = payload
    if(result.code ===0){
      const info = result.data
      commit('shop_info',{info})
      cb && cb()
    }
  }
}