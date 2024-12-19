import React from 'react'
import  './SignUp.css'

const SignUp = () => {
  return (
    <div id='signup'>
      <form action="">
      <span id="logintitle">Sign Up Page</span>
        <div className="list">
          <label htmlFor="name">UserName</label>
          <input type="text"  id="name" placeholder="Enter your email" required/>
        </div>
        <div className="list">
          <label htmlFor="password">Password</label>
          <input type="password"  id="password" placeholder="Enter passowrd" required/>
        </div>
        <div className="list">
          <label htmlFor="canpassword">Confirm Password</label>
          <input type="password"  id="canpassword" placeholder="Coform password" required/>
        </div>
        <button id="loginbtn">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
