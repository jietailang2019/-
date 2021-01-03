
import ajax from "./ajax"
/**
 * 接口请求集合
 * 
*/
const BaseUrl='/api'
//根据经纬度获取位置详情
const getAddress = (geohash) => ajax(`${BaseUrl}/position/${geohash}`)
//获取食品分类列表
const getFoodsCategory = () => ajax(BaseUrl+"/index_category")

//根据经纬度获取商铺列表
const getShops = (longitude,latitude) => ajax(BaseUrl+'/shops',{longitude,latitude})

//根据经纬度和关键字搜索商铺列表
const getSearchShops = (keyword,geohash) => ajax(BaseUrl+"/search_shops",{keyword,geohash})

//获取一次性验证码
const getCaptcha = () => ajax(BaseUrl+"/captcha")

//用户名密码登陆
const loginPwd = (name,pwd,captcha) => ajax(BaseUrl+'/login_pwd',{name,pwd,captcha},"POST")

//发送短信验证码
const getSendCode = (phone) => ajax(BaseUrl+"/sendcode",{phone})

//手机号验证码登陆
const LoginSms = (phone,code) => ajax(BaseUrl+"/login_sms",{phone,code},"POST")

//根据会话获取用户信息
const getUserInfo = () => ajax(BaseUrl+"/userinfo")

//用户登出
const userLogout = () => ajax(BaseUrl+"/logout")

//获取商家商品信息（数组）
const mockUrl  = '/mock'
const getShopGoods = () =>ajax(mockUrl+"/goods")
//获取商家评价信息（数组）
const getShopRatings = () =>ajax(mockUrl+"/ratings")
//获取商家信息（数组）
const getShopInfo = () =>ajax(mockUrl+"/info")

export {
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
}