import { arguments } from "file-loader"
import ajax from "./ajax"
/**
 * 接口请求集合
 * 
*/
const BaseUrl='http://localhost:4000'
export default{
  getAddress,
}
//根据经纬度获取位置详情
const getAddress = (geohash) => ajax(`/position/${geohash}`)
//获取食品分类列表
const getFoodsCategory = () => ajax("/index_category")

//根据经纬度获取商铺列表
const getShops = ({longitude,latitude}) => ajax('/shops',{longitude,latitude}=arguments)