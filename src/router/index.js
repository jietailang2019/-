import Vue from "vue"
import VueRouter from "vue-router"
/**
 * 
 * 路由懒加载方式
 * 
*/
const Msite = () => import("@/pages/MSite")
const Search = () => import("@/pages/Search")
const Order = () => import("@/pages/Order")
const MyProfile = () => import("@/pages/MyProfile")
const Login = () => import("@/pages/Login")
const Shop = () => import("@/pages/Shop")
const ShopGoods = () => import("@/pages/Shop/ShopGoods")
const ShopInfo = () => import("@/pages/Shop/ShopInfo")
const ShopRatings = () => import("@/pages/Shop/ShopRatings")


/**
 * 
 * 普通加载路由组件方式
 * 
*/
// import MSite from "../pages/MSite"
// import Search from "../pages/Search"
// import Order from "../pages/Order"
// import MyProfile from "../pages/MyProfile"
// import Login from "../pages/login"
// import Shop from "../pages/Shop"
// import ShopGoods from "../pages/Shop/ShopGoods"
// import ShopInfo from "../pages/Shop/ShopInfo"
// import ShopRatings from "../pages/Shop/ShopRatings"

Vue.use(VueRouter)
export default new VueRouter({
  mode:"history",
  routes:[
    {
      path:'/',
      redirect:"msite"
    },
    {
      name:'msite',
      path:"/msite",
      component:Msite,
      meta:{
        showNav:true
      }
    },
    {
      name:'shop',
      path:'/shop/:id',
      component:Shop,
      children:[
        {
          path:'goods',
          component:ShopGoods
        },
        {
          path:'ratings',
          component:ShopRatings
        },
        {
          path:'info',
          component:ShopInfo
        },{
          path:'',
          redirect:'goods'
        }
      ]
    },
    {
      name:'search',
      path:"/search",
      component:Search,
      meta:{
        showNav:true
      }
    },
    {
      name:'order',
      path:"/order",
      component:Order,
      meta:{
        showNav:true
      }
    },
    {
      name:'profile',
      path:'/profile',
      component:MyProfile,
      meta:{
        showNav:true
      }
    },
    {
      name:'login',
      path:'/login',
      component:Login
    }
  ]
})