// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from "./router"
import store from "./store"
import "./filter"
import loading from "@/common/images/loading.gif"
Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
