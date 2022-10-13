import React, { useContext } from 'react';
//import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Adminlogin from "./components/Admin/Adminlogin"
import Result from "./components/Admin/Result"
import SignUp from './components/pages/SignUp';
import LoginUi from './components/LoginUi';
import Register from './components/Register';
import Userdetails from './components/Admin/Userdetails';
import Edit from './components/Edit';
import RedirecToLogin from  './components/RedirecToLogin'
import {Authcontext} from "./context/authCont/authContext.js"
function App() {

  const {user} = useContext(Authcontext)
  return (
    <>
    {user
      ?
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin'element={<Userdetails/>}/> <Route/> 
                    <Route path='/admin'element={<Userdetails/>}/> 
                    <Route path='/edituser/:id'element={<Edit/>}/> 
                    <Route path='/register'element={<Register/>}/> <Route/>
                    <Route path='/result'element={<Result/>}/> <Route/>
          
        </Routes>
      </Router>
      :
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/services' element={<Services/>}/> <Route/>
      <Route path='/adminlogin' element={<Adminlogin/>}/> <Route/>
        <Route path='/sign-up' element={<SignUp/>}/> <Route/>
        <Route path='*'element={<RedirecToLogin/>}/> <Route/>
        {/*<Route path='/login' element={<LoginUi/>}/> <Route/>*/}
        



        <Route path='/login'element={<LoginUi/>}/> <Route/>
                  
        <Route path="/login" element={!user ? <Navigate to="/admin" replace /> :  <LoginUi />}  ></Route>
        </Routes>
      </Router>
    }

    </>
  );
}

export default App;
