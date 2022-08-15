import React from "react";
import { getFoodById, updateFood } from "../actions/foodActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
export default function Editfood({ match }) {
  const dispatch = useDispatch();
  const foodstate = useSelector((state) => state.getFoodByIdReducer);

  const { food, error, loading } = foodstate;

  const updatefoodstate = useSelector((state) =>state.updateFoodReducer)

  const {success , updateerror , updateloading} = updatefoodstate

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (food) {
      if (food._id == match.params.foodid) {
        setname(food.foodName);
        setprice(food.price);
        setdescription(food.description);
        setimageurl(food.image);
        setcategory(food.category);
        setcountinstock(food.countInStock);
      } else {
        dispatch(getFoodById(match.params.foodid));
      }
    } else {
      dispatch(getFoodById(match.params.foodid));
    }
  }, [dispatch, food]);

  function editfood(e) {
    e.preventDefault();
    const updatedfood = {
      foodName: name,
      price: price,
      description: description,
      countInStock: countinstock,
      category: category,
      image: imageurl,
    };

    dispatch(updateFood(match.params.foodid, updatedfood));
  }

  return (
    <div>
      <h2>Edit Food</h2>
      {loading && <Loader />}

      {updateloading && <Loader />}
      {updateerror && (<Error error='Something went wrong' />)}
      {success && (<Success success='Product Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
      {food && (
        <div>
          <form onSubmit={editfood}>
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
              Edit Food
            </button>
          </form>
        </div>
      )}
    </div>
  );
}