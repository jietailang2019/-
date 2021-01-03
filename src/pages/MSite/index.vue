<!-- 组件说明 -->
<template>
  <section class="msite">
        <!--首页头部-->
        <header-top :title="address.name">
          <router-link class="header_search" slot="search" to="/search" tag="span">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link class="header_login" slot="login" :to="userInfo._id ?'/profile' :'/login'" tag="span">
            <span class="header_login_text">{{userInfo._id ?'用户头像':'登录|注册'}}</span>
          </router-link>
        </header-top>
        <!--首页导航-->
        <nav class="msite_nav">
          <swiper-nav/>
        </nav>
        <!--首页附近商家-->
        <shop-list/>
      </section>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop"
  import ShopList from "../../components/ShopList"
  import SwiperNav from "../../components/SwiperNav"
  import {mapState,mapActions} from "vuex"
  //import x from ''
  export default {
    mounted(){
      this.getAddress()
    },
    computed:{
      ...mapState(['address','userInfo']),
    },
    methods:{
      ...mapActions(['getAddress'])
    },
    components:{
      HeaderTop,
      SwiperNav,
      ShopList
    }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import "../../common/stylus/mixins.styl";
        .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff        
</style>