export const addToCart=(food,quantity)=>(dispatch, getState)=>{

const cartItem = {

    foodName : food.foodName ,
    _id : food._id ,
    price :food.price ,
    countInStock : food.countInStock ,
    quantity : quantity
}
dispatch({type : 'ADD_TO_CART' ,payload : cartItem})

localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart=(item)=>(dispatch ,getState)=>{

    dispatch({type : 'DELETE_FROM_CART' , payload:item})

    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}