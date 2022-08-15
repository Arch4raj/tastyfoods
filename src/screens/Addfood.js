import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../actions/foodActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loader from "../components/Loader";

export default function Addfood() {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();
 
  const addfoodstate=useSelector(state=>state.addFoodReducer)
 
  const {success , error , loading } = addfoodstate

  const addfood = (e) => {
    e.preventDefault();
    const food = {
       foodName: name,
      price: price,
      countInStock: countinstock,
      image: imageurl,
      description: description,
      category,
    };
    
    dispatch(addFood(food));
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">

          {success && (<Success success='Food Item Added Succesfully'/>)}
          {loading && (<Loader />)}
          {error && (<Error error='Something went wrong'/>)}

          <h2>Add Food Items</h2>
          <form onSubmit={addfood}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="price"
              value={price}
              required
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="decription"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="count in stock"
              value={countinstock}
              onChange={(e) => {
                setcountinstock(e.target.value);
              }}
            />
            <button
              className="btn mt-5"
              type="submit"
              style={{ float: "left" }}
            >
              Add FoodItems
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}