import React from 'react'
import '../../App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Home';
import Login from '../Login'
import Auth from '../../layouts/Auth'
import Register from '../Register';



const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
             <Route path='/home' element={<Home />}/>
             <Route path='/login' element={<Login />}/>
             <Route path='/auth' element={<Auth />}/>
             <Route path='/register' element={<Register />}/>
            </Routes>
        </BrowserRouter>
   );
  }

export default App;

