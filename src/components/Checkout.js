import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';

export default function Checkout({amount}){

   const dispatch =useDispatch()

    function  tokenHandler(token)
    {
        console.log(token)
    dispatch(placeOrder(token,amount))

    }

   function validate()
   {
    if(!localStorage.getItem('currentUser'))
        {
             window.location.href ='/login'
        }
   }

    return(
        <div>
 
         <StripeCheckout 
           
           token={tokenHandler}
           amount={amount *100}
           shippingAddress
           currency='INR'
           stripeKey='pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ'
           >
        
        <button className='btn' onClick={validate}>PAY NOW</button>


         </StripeCheckout>

        </div>
    )
}