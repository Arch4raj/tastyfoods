import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import {Link} from 'react-router-dom'
import { getAllFoods , deleteFood } from '../actions/foodActions'
export default function Foodslist() {
    const dispatch = useDispatch()
    const getallfoodsstate = useSelector(state =>state.getAllFoodsReducer)
    const {foods , loading , error} = getallfoodsstate

    useEffect(() => {

        dispatch(getAllFoods())
        
    }, [])
    return (
        <div>

            <h2>Foods list</h2>

            <table className='table table-bordered table-responsive-sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                {loading && (<Loader/>)}
            {error && (<Error error='something went wrong'/>)}
            {foods && (foods.map(food=>{

                  return <tr>
                      <td>{food.foodName}</td>
                      <td>{food.price}</td>
                      <td>{food.countInStock}</td>
                      <td>{food._id}</td>
                      <td>
                          <i className="far fa-trash-alt" style={{marginRight:'10px'}} onClick={()=>{dispatch(deleteFood(food._id))}}></i>
                          <Link to={`/admin/editfood/${food._id}`}><i className="fas fa-edit"></i></Link>
                    </td>
                      
                  </tr>

            }))}

                </tbody>
            </table>

         
            
        </div>
    )
}