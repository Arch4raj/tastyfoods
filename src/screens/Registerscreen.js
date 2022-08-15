import React ,{useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {registerNewUser} from '../actions/userActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'
export default function Registerscreen(){

      const registerstate = useSelector(state=>state.registerNewUserReducer)

      const {loading ,error,success} = registerstate

    const[name , setname] = useState('')
    const[email , setemail] = useState('')
    const[password , setpassword] = useState('')
    const[cpassword , setcpassword] = useState('')

    const dispatch =useDispatch()

    function register(e) {

      e.preventDefault()
      const user={
            name :name,
           email :email,
           password :password
        }
        if(password==cpassword)
         {
            dispatch(registerNewUser(user))
         }else{
            alert('password not match')
         }

    }

  
    

   

return(

    <div>

          <div className="row justify-content-center">

           <div className='col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded' style={{marginTop:'100px'}}>
                   
                 <div className="div">

                    <h2 className='text-center m-2'>REGISTER</h2>

                    {loading &&(<Loader/>)}
                    {error && (<Error error='Email Address is already registered'/>)}
                    {success && (<Success success='Your Registertion in successfull '/>)}
                     
                     <form onSubmit={register}>

                     <input type="text" placeholder="name" className='form-control mb-3' value={name} required onChange={(e)=>{setname(e.target.value)}}/>

                  <input type="email" placeholder="email" className='form-control mb-3' value={email} required onChange={(e)=>{setemail(e.target.value)}}/>

                  <input type="password" placeholder="password" className='form-control mb-3' value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>

                 <input type="password" placeholder="confirm password" className='form-control mb-3' value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>

                       <div className='text-center'>
                             <button type='submit' className='btn mt-3' onClick={register}>REGISTER</button>
                       </div>  

                     </form>
                       
                       <div className='m-3 text-center'>
                       <a href="/Login">Click Here To Login</a>
                       </div>
                     
                    
                    </div>  
          
           </div>

          </div>

    </div>

)
};
