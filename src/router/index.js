import Vue from "vue"
import VueRouter from "vue-router"

import MSite from "../pages/MSite"
import Search from "../pages/Search"
import Order from "../pages/Order"
import MyProfile from "../pages/MyProfile"
import Login from "../pages/login"

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
      component:MSite,
      meta:{
        showNav:true
      }
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