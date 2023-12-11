import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Home from './pages/users/Home';
import AddUser from './pages/users/AddUser';
import User from './pages/users/User';
import EditUser from './pages/users/EditUser';
import Cart from './pages/users/Cart';
import Profile from './pages/users/Profile';
import Dashboard from './pages/users/Dashboard';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import AdminRoute from './route/AdminRoute';
import UserRoute from './route/UserRoute';

import AdminDashboard from './pages/admin/AdminDashboard';


function App() {
    return(
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='/home' element={<Home/>}/>

                <Route path='/dashboard' element={<UserRoute/>}> 
                
                       <Route path='user' element={<User/>}/>
                      <Route path='adduser' element={<AddUser/>}/>
                      <Route path='edituser/:id' element={<EditUser/>}/>
                      <Route path='cart' element={<Cart/>}/>
                      <Route path='profile' element={<Profile/>}/>
                
                </Route>


                <Route path='/dashboard' element={<AdminRoute/>}>
                    <Route path='admin' element={<AdminDashboard/>}/>
                </Route>


          </Routes>
      </BrowserRouter>
    )
}

export default App;
