import React from "react";
import {Link} from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import Rating from "react-rating";
export default function Food({food}){
return(
    <div className="" >
           <Link to={`food/${food._id}`}>
           <img src={food.image} className='img-fluid'/>
             <h1>{food.foodName}</h1>
             {/* <ReactStars
             style={{color:'orange'}}
            
             initialRating={food.rating}
            emptySymbol="fa fa-star-0 fa-1x"
           fullSymbol="fa fa-star fa-2x"
           readonly={true}
             /> */}


          <Rating
            style={{ color: "orange" }}
            initialRating={food.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly={true}
          /> 


             {/* <h1>Rating : {food.rating}</h1> */}
             <h1>price :{food.price}</h1>
           </Link> 
             
     </div>
)
}