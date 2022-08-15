import React ,{useState , useEffect} from 'react'
// import foods from '../foods';
import Loader from '../components/Loader'
import {useDispatch , useSelector} from 'react-redux'
import {getFoodById} from '../actions/foodActions'
import {addToCart} from '../actions/cartActions'
export default function Fooddescscreen({match}){

   
    const foodid=match.params.id;
   
    const dispatch =useDispatch();
    const [quantity , setquantity] = useState(1)
    const getfoodbyidstate =useSelector(state=>state.getFoodByIdReducer)
    const {food , loading ,error} = getfoodbyidstate;

     function addtocart()
     {
        dispatch(addToCart(food,quantity))
     }

    useEffect(() => {

        dispatch(getFoodById(foodid))
    },[])
    return(
        <div>

            {loading ?(<Loader/>) : error ? (<h1>Something went wrong</h1>) : (


<div className="row mt-5 ">
             
<div className="col-md-6">

   <div className="card p-2 m-3 shadow p-3 mb-5 bg-white rounded">
      <h1><b>{food.foodName}</b></h1>
      <img  src={food.image}  className='img-fluid m-3 bigimg'/>
       <p>{food.description}</p>
   </div>

</div>

<div className="col-md-6">
   
   <div className="m-2 shadow p-3 mb-5 bg-white rounded">
     <h1>Price :{food.price}</h1>
     <hr/>
      
      <h1>Select Quantity</h1>

   <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}} >{[...Array(food.countInStock).keys()].map((x,i)=>{

       return <option value={i+1}>{i+1}</option>

   })}

   
</select>
<hr/>
<button className='btn btn-dark' onClick={addtocart}>ADD TO CART</button>

   </div>

</div>

</div>

            )}
         
        </div>
    );
}