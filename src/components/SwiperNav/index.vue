<!-- 组件说明 -->
<template>
      <swiper ref="mySwiper" :options="swiperOption" v-if="FoodsCategory.length">
        <swiper-slide v-for="(categorys,index) in categorysArr" :key="index">
          <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>              
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>  
</template>

<script>
  //import x from ''
  import {Swiper,SwiperSlide} from "vue-awesome-swiper"
  import Swiper2,{Navigation,Pagination} from "swiper"
  import {mapState,mapActions} from "vuex"
  Swiper2.use([Navigation,Pagination])
  import "swiper/swiper-bundle.css"
  export default {
      data(){
        return{
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            }
          },
          baseImageUrl: 'https://fuss10.elemecdn.com'
        }
      },
      components:{
        Swiper,
        SwiperSlide
      },
      mounted(){
        //this.$store.dispatch("getFoodsCategory")
        this.getFoodsCategorys()
      },
      computed:{
        ...mapState(['FoodsCategory']),
        categorysArr () {
        const {FoodsCategory} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        FoodsCategory.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if(minArr.length===8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if(minArr.length===0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })
        return arr
      }
      },
      methods:{
        ...mapActions(['getFoodsCategorys'])
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
</style>