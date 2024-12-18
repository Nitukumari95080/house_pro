import React, { useState } from 'react'
import './Nav.css'
import logo  from '../../assets/p.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  let [visible,setvisible]=useState(false)
  return (
    <div id='nav'>
      {visible?<div className="hamburger">
        <div className="ham1">Login</div>
        <div className="ham1">sign up</div>
        <div className="ham1">list your home</div>
        <div className="ham1">help center</div>
      </div>:<div></div>}
      <div className="nav1">
        <div className="logo">
          <img src={logo} alt="" width='50px'/>
          <h1>Rental<span>House</span></h1>
        </div>
        <div className="search">
          <input type="text" placeholder='Search Destination'/>
          <button>Search <CiSearch/></button>
        </div>
        <div className="ham">
          <button id='btnHome'>List Your Home</button>
          <button id="btnHome1" onClick={()=>{
            setvisible(prev=>!prev)
          }}>
            <RxHamburgerMenu id='svg1' />
            <CgProfile id='svg2' />
          </button>
        </div>
      </div>
      <div className="nav2"></div>
    </div>
  )
}

export default Nav
