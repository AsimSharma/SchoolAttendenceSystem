import React, { useContext } from 'react';
//import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Adminlogin from "./components/Admin/Adminlogin"

import SignUp from './components/pages/SignUp';
import LoginUi from './components/LoginUi';
import Register from './components/Register';
import Userdetails from './components/Admin/Userdetails';
import Edit from './components/Edit';

import {Authcontext} from "./context/authCont/authContext.js"
function App() {

  const {user} = useContext(Authcontext)
  return (
    <>
      <Router>
        <Navbar />
        <Routes>


          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}/> <Route/>
        
          <Route path='/adminlogin' element={<Adminlogin/>}/> <Route/>
          <Route path='/sign-up' element={<SignUp/>}/> <Route/>
        {/*<Route path='/login' element={<LoginUi/>}/> <Route/>*/}
          <Route path='/register'element={<Register/>}/> <Route/>
          
          <Route path="/login" element={!user ? <Navigate to="/admin" replace /> :  <LoginUi />}  ></Route>

          
            user&&(
            
            <Route path='/admin'element={<Userdetails/>}/> 
            <Route path='/edituser/:id'element={<Edit/>}/> 
            
            )

            
          



        </Routes>
      </Router>

    </>
  );
}

export default App;
