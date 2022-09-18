import React, { useState } from 'react'
import Userdetails from './Userdetails'
import { Routes, useNavigate } from 'react-router-dom';
const Adminlogin = () => {
     const navigate = useNavigate();

    const submit = () => {
      navigate('/adminpage');
    };
  return (
  
    <div>
        <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder='enter your email'/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" placeholder='enter your password' class="form-control" id="inputPassword"/>
    </div>
    <br/>
    <div class="col-auto">
    <button type="submit" onClick={submit} class="btn btn-primary mb-3" >Confirm identity</button>
  </div>
  </div>
    </div>
  )
}

export default Adminlogin
