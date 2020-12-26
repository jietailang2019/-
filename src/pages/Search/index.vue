<!-- 组件说明 -->
<template>
  <section class="search">
        <header-top title="搜索"/>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
          <input type="submit" name="submit" class="search_submit">
        </form>
      </section>
</template>

<script>
  //import x from ''
  import HeaderTop from "../../components/HeaderTop"
  export default {
    components:{
      HeaderTop
    }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
//@import url()
</style>