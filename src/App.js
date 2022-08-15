import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Ordersscreen from './screens/Ordersscreen';
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen';
import Fooddescscreen from './screens/Fooddescscreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen'
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
function App() {
  return (
   <div>
    <Navbar/>

    <BrowserRouter>

    <Route path='/' component={Homescreen} exact/>
    <Route path='/food/:id' component={Fooddescscreen} />
    <Route path='/cart' component={Cartscreen} />
    <Route path='/register' component={Registerscreen}/>
    <Route path='/login' component={Loginscreen}/>
    <Route path='/orders' component={Ordersscreen}/>
    <Route path='/profile'component={Profilescreen}/>
    <Route path='/admin' component={Adminscreen}/>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
