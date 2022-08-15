import React from 'react'
import { useState,useDispatch, useSelector } from 'react-redux'
import {addToCart, deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'
export default function Cartscreen(){
const cartreducerstate = useSelector(state=>state.cartReducer)
  const  dispatch = useDispatch()
const {cartItems} = cartreducerstate

var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity) , 0)

return(
    <div>
      <div className='row justify-content-center mt-3'>
        <div className='col-md-8 card shadow p-3 mb-5 bg-white rounded'>
           <h2 className='text-center m-5'>MY CART</h2>
             <table className='table table-bordered'>
              
             <thead>
             <tr>
             
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
               </tr>
             </thead>

             <tbody>

                 {cartItems.map(item=>{

                    return <tr>
                    

                     <td>{item.foodName}</td>
                     <td>{item.price}</td>
                     <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}>
                        
                        {[...Array(item.countInStock).keys()].map((x,i)=>{

                            return <option value={i+1}>{i+1}</option>
                        })}
                        </select></td>
                     <td>{item.quantity * item.price}</td>
                      <td><i style={{color:'red'}} class="far fa-trash-alt" onClick={()=>{dispatch(deleteFromCart(item))}}></i></td>
                    </tr>
                 })}

             </tbody>

              

            </table>

            <hr/>

            <h2 className='text-center'>SubTotal : {subtotal} Rs/-</h2>

            <hr/>
          
           <div className='text-center'>
           <Checkout amount={subtotal}/>
           </div>
            
        </div>

      </div>
    </div>
)

}