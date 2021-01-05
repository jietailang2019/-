import Vue from "vue"
import Moment from "moment"
Vue.filter('dataString',function(value,format){
  return Moment(value).format(format || 'YYYY-MM-DD HH:MM:SS')
})