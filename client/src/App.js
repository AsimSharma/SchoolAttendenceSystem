import React from 'react';
//import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import LoginUi from './components/LoginUi';
import Register from './components/Register';
import Userdetails from './components/Admin/Userdetails';
import Edit from './components/Edit';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}/> <Route/>
          <Route path='/about' element={<About/>}/> <Route/>
          <Route path='/sign-up' element={<SignUp/>}/> <Route/>
          <Route path='/login' element={<LoginUi/>}/> <Route/>
          <Route path='/register'element={<Register/>}/> <Route/>
          <Route path='/admin'element={<Userdetails/>}/> <Route/>

          <Route path='/edituser/:id'element={<Edit/>}/> <Route/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
