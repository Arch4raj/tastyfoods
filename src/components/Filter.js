import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterfoods } from '../actions/foodActions';

export default function Filter(){

    const [searchkey, setsearchkey] = useState("");
    const[category,setcategory]=useState('all');

    const dispatch =useDispatch();
    return(

        <div >
            <div className='row justify-content-center shadow p-3 mb-5 bg-white rounded'>

                <div className='col-md-3 ml-2' style={{marginTop:'10px'}}>
 
                 <input type="text" value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} placeholder='search Foods' className='form-control'/>

                </div>
                <div className='col-md-2 m-2'>
 
               <select className='form-control' value={category} onChange={(e)=>{setcategory(e.target.value)}}> 
                 
                 <option value="all">All</option>
                 <option value="vegetarian">Vegetarian</option>
                 <option value="non-vegetarian">Non-Vegetarian</option>
                 <option value="chinese">Chinese</option>
               </select>

                </div>

                 <div className='col-md-2 m-2'>
                 <button className='btn' onClick={()=>{dispatch(filterfoods(searchkey,category))}}>Search</button>
                 </div>
                
            

            </div>
        </div>
    )
}