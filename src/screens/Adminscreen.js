import React from 'react';
import { Link, Switch , Route } from 'react-router-dom';
import Addfood from './Addfood';
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Foodslist from './Foodslist';
import Editfood from './Editfood';

export default function Adminscreen(){

    return(
        <div>
           <div className='row justify-content-center text-center mt-2'>

            <div className='col-md-10'>
                 <h2 className='mb-4'>Admin Panel</h2>
                <ul className='admin p-2'>
                    <li><Link to='/admin/userslist' style={{color :'black'}}>UsersList</Link></li>
                    <li><Link to='/admin/foodslist' style={{color :'black'}}>FoodssList</Link></li>
                    <li><Link to='/admin/addnewfood' style={{color :'black'}}>Add New Food</Link></li>
                    <li><Link to='/admin/orderslist' style={{color :'black'}}>Order List</Link></li>
                </ul>


                <Switch>
                       <Route path='/admin/' component={Userslist} exact />
                          <Route path='/admin/userslist' component={Userslist} />
                          <Route path='/admin/orderslist' component={Orderslist} />
                          <Route path='/admin/addnewfood' component={Addfood} />
                          <Route path='/admin/foodslist' component={Foodslist} />
                          <Route path='/admin/editfood/:foodid' component={Editfood} />
                         

                       </Switch>


            </div>

           </div>
        </div>
    )
}