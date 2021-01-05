export default{
  totalCount(state){
    return state.shopCart.reduce((preTotal,food)=>{
      return preTotal+food.count
    },0)
  },
  totalPrice(state){
    return state.shopCart.reduce((prePrice,food) =>{
      return prePrice+food.price*food.count
    },0)
  },
  ratingSize(state){
    return state.ratings.length
  },
  positiveSize(state){
    return state.ratings.reduce((pre,rating)=>{
      return pre+(rating.rateType===0?1:0)
    },0)
  }
}