import React, { useEffect,useState } from 'react';
import axios from 'axios'
// import foods from '../foods';
import Filter from '../components/Filter';
import Loader from '../components/Loader'
import Food from '../components/Food'
import Error from '../components/Error';
import { useDispatch ,useSelector } from 'react-redux';
import {getAllFoods} from '../actions/foodActions'
export default function Homescreen(){
  
    const getallfoodsstate = useSelector(state=>state.getAllFoodsReducer)

    const {loading,foods,error}=getallfoodsstate
    // const [foods,setfoods]=useState([])
    const dispatch =useDispatch()
    useEffect(() => {

        // axios.get('/api/foods/getallfoods').then(res =>{
        //     console.log(res);
        //     setfoods(res.data)
        // }).catch(err =>{
        //     console.log(err);
        // })

      dispatch(getAllFoods())
    },[])
    return(
        <div>
            <Filter/>
         <div className="row justify-content-center ml-2 mr-2">
  

          {/* {foods.length && (foods.map(food =>{
           return <div className='col-md-3 m-3 card p-2' key={food._id}>
                  <Food food={food}/>
           </div>
          }))} */}
       
    {loading ?(<Loader/>
    ) : error ? (<Error error='Something went wrong...'/>
    ) :(
        foods.map(food =>{
         
            return <div className='col-md-3 m-3 p-2 shadow p-3 mb-5 bg-white rounded card'>
                <Food food={food}/>
                </div>
        })
    )}
         </div>
        </div>
    )
}