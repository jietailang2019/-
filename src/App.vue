<template>
  <div id="app">   
  <router-view></router-view>
  <footer-nav v-if="$route.meta && $route.meta.showNav"/>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import footerNav from "./components/FootNav"
export default {
  name: 'App',
  mounted(){
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getUserInfo'])
  },
  components:{
    footerNav
  }
}
</script>
<style lang="stylus" scoped>
  #app
    width 100% 
    height 100% 
    background #f5f5f5
</style>
