import { getAllFoodsReducer ,getFoodByIdReducer,deleteFoodReducer,addFoodReducer,updateFoodReducer } from "./reducers/foodReducer";
import {cartReducer} from './reducers/cartReducer'
import {loginReducer, registerNewUserReducer} from './reducers/userReducers'
import { getOrderByIdReducer,getAllOrdersReducer } from "./reducers/orderReducer";
import { getOrdersByUserIdReducer } from "./reducers/orderReducer";
import {combineReducers} from 'redux'
import {legacy_createStore ,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { placeOrderReducer } from "./reducers/orderReducer";
import { updateReducer,getAllUsersReducer,deleteUserReducer } from "./reducers/userReducers";

const finalReducer = combineReducers({
  
 getAllFoodsReducer : getAllFoodsReducer  ,
 getFoodByIdReducer : getFoodByIdReducer,
 cartReducer : cartReducer,
 registerNewUserReducer :registerNewUserReducer,
 loginReducer:loginReducer,
 placeOrderReducer:placeOrderReducer,
 getOrdersByUserIdReducer:getOrdersByUserIdReducer,
 updateReducer: updateReducer,
 getAllUsersReducer:getAllUsersReducer,
 deleteUserReducer:deleteUserReducer,
 deleteFoodReducer:deleteFoodReducer,
 addFoodReducer:addFoodReducer,
 updateFoodReducer:updateFoodReducer,
 getAllOrdersReducer : getAllOrdersReducer,
 getOrderByIdReducer:getOrderByIdReducer
 
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser =localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {

  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store = legacy_createStore(finalReducer,initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))

  export default store