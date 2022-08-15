import React ,{useEffect, useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
export default function Loginscreen(){

    const loginreducer = useSelector(state=>state.loginReducer)
    const {success , error} = loginreducer
    const[email , setemail] = useState('')
    const[password , setpassword] = useState('')
    

    const dispatch =useDispatch()

    function login(e) {

      e.preventDefault()
      const user={
            
           email :email,
           password :password
        }
      
     dispatch(loginUser(user))
    }

  useEffect(()=>{

      if(localStorage.getItem('currentUser'))
      {
            window.location.href='/'
      }
  },[])
    

   

return(

    <div>

          <div className="row justify-content-center">

           <div className='col-md-4 card p-2 shadow p-3 mb-5 bg-white rounded' style={{marginTop:'130px'}}>
                   
                 <div className="div ">

                    <h2 className='text-center m-3' >LOGIN</h2>
                     
                      {error && (<Error error='Invalid Credentials'/>)}

                     <form onSubmit={login}>

                     

                  <input  type="text" placeholder="email" className='form-control mb-3' value={email} required onChange={(e)=>{setemail(e.target.value)}}/>

                  <input type="password" placeholder="password" className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>

                 

                       <div className='text-center'>
                             <button type='submit' className='btn mt-3 m-4' >LOGIN</button>
                       </div>  

                     </form>
                      
                      <div className='m-2 text-center'>
                      <a href="/register" >Click Here To Register</a>
                      </div>
                    
                    
                    </div>  
          
           </div>
          

          </div>

    </div>

)
};
