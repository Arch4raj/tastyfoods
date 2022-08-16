
import axios from 'axios'
export const getAllFoods=()=>dispatch=>{

dispatch({type:'GET_FOODS_REQUEST'})
    
    axios.get('https://tastyfoods.herokuapp.com/api/foods/getallfoods').then(res =>{
        console.log(res);
        
        dispatch({type:'GET_FOODS_SUCCESS',payload : res.data})
    }).catch(err =>{
        console.log(err);
        dispatch({type:'GET_FOODS_FAILED',payload : err})
    })
}

export const getFoodById=(foodid)=>dispatch=>{

    dispatch({type:'GET_FOODBYID_REQUEST'})
        
        axios.post('https://tastyfoods.herokuapp.com/api/foods/getfoodbyid',{foodid}).then(res =>{
            console.log(res);
            
            dispatch({type:'GET_FOODBYID_SUCCESS',payload : res.data})
        }).catch(err =>{
            console.log(err);
            dispatch({type:'GET_FOODBYID_FAILED',payload : err})
        })
    }

    export const filterfoods=(searchkey,category)=>dispatch=>{

        var filteredfoods ;
        dispatch({type : 'GET_FOODS_REQUEST'})
        axios.get('https://tastyfoods.herokuapp.com/api/foods/getallfoods').then(res=>{

            filteredfoods = res.data
          if(searchkey)
          {
            filteredfoods =res.data.filter(food=>{return food.foodName.toLowerCase().includes(searchkey)})
          }

          if(category!=='all')
          {
            filteredfoods =res.data.filter(food=>{return food.category.toLowerCase().includes(category)})
          }

          dispatch({type : 'GET_FOODS_SUCCESS' , payload : filteredfoods})

        }).catch(err=>{
            dispatch({type :'GET_FOODS_FAILED'})
        })
    }


    export const deleteFood=(foodid)=>dispatch=>{


        dispatch({type:'DELETE_FOOD_REQUEST'})
      
        axios.post('https://tastyfoods.herokuapp.com/api/foods/deletefood' , {foodid}).then(res=>{
      
          dispatch({type:'DELETE_FOOD_SUCCESS' , payload : res.data})
          alert('Food deleted successfully')
          window.location.reload()
      
      
        }).catch(err=>{
          dispatch({type:'DELETE_PRODUCT_FAILED' , payload : err})
      
        })
      
      
      }


      export const addFood =(food)=> dispatch=>{

        dispatch({type:'ADD_FOOD_REQUEST'})
  
        axios.post('https://tastyfoods.herokuapp.com/api/foods/addfood' , {food}).then(res=>{
          console.log(res);
          dispatch({type:'ADD_FOOD_SUCCESS'})
          window.location.reload()
        }).catch(err=>{
          dispatch({type:'ADD_FOOD_FAILED'})
  
        })
  
  }
  

  export const updateFood =(foodid , updatedfood)=> dispatch=>{

    dispatch({type:'UPDATE_PRODUCT_REQUEST'})
  
    axios.post('https://tastyfoods.herokuapp.com/api/foods/updatefood' , {foodid , updatedfood}).then(res=>{
      console.log(res);
      dispatch({type:'UPDATE_FOOD_SUCCESS'})
      window.location.href='/admin/foodslist'
      
    }).catch(err=>{
      dispatch({type:'UPDATE_PRODUCT_FAILED'})
  
    })
  
  }