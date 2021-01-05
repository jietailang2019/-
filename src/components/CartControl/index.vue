<!-- 组件说明 -->
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-show="food.count" @click.stop="FoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="FoodCount(true)"></div>
  </div>
</template>

<script>
//import x from ''
import Vue from "vue"
import {mapActions} from "vuex"
export default {
  props:{
    food:Object
  },
  methods:{
    ...mapActions(['updateFoodCount']),
    FoodCount(isAdd){
      this.updateFoodCount({isAdd,food:this.food})
      // if(isAdd){
      //   if(!this.food.count){
      //     //this.food.count=1
      //     //Object.assign(this.food,{count:1})
      //     Vue.set(this.food,"count",1)
      //     console.log(this.food)
      //   }else{
      //     this.food.count++
      //   }
      // }else{
      //   if(this.food.count){
      //     this.food.count--
      //   }
      // }
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import "~@/common/stylus/mixins.styl"
  .cartcontrol 
    font-size: 0 
    .cart-decrease 
      display: inline-block 
      padding: 6px 
      line-height: 24px 
      font-size: 24px 
      color: rgb(0, 160, 220) 
    .icon-remove_circle_outline 
      display: inline-block 
      padding 6px 
      line-height 24px 
      font-size 24px 
      color $green
      &.move-enter-active,&.move-leave-active
        transition all .3s
      &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)
    .cart-count
      display: inline-block 
      vertical-align: top 
      width: 12px 
      padding-top: 6px 
      line-height: 24px 
      text-align: center 
      font-size: 10px 
      color: rgb(147, 153, 159) 
    .icon-add_circle 
      display: inline-block
      padding: 6px 
      line-height: 24px
      font-size: 24px
      color $green
</style>