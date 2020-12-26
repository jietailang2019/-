<!-- 组件说明 -->
<template>
  <section class="msite">
        <!--首页头部-->
        <header-top title="上海华美整形医疗美容医院">
          <span class="header_search" slot="search">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="login">
            <span class="header_login_text">登录|注册</span>
          </span>
        </header-top>
        <!--首页导航-->
        <nav class="msite_nav">
          <SwiperNav></SwiperNav>
        </nav>
        <!--首页附近商家-->
        <shop-list></shop-list>
      </section>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop"
  import ShopList from "../../components/ShopList"
  import SwiperNav from "../../components/SwiperNav"
  //import x from ''
  export default {
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