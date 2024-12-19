import React, { useState } from 'react'
import './Nav.css'
import logo  from '../../assets/p.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdBedroomParent, MdOutlinePool, MdOutlineWhatshot } from "react-icons/md";
import { PiFarm } from 'react-icons/pi';
import { LuTentTree } from 'react-icons/lu';
import { GiWoodCabin } from 'react-icons/gi';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaTreeCity } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

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
          <button> <span>Search</span><IoSearch/></button>
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
      <div className="nav2">
        <div className="svg11"><MdOutlineWhatshot /><h3>Treding</h3></div>
        <div className="svg11"><MdBedroomParent/><h3>Rooms</h3></div>
        <div className="svg11"><PiFarm/><h3>Farm Houses</h3></div>
        <div className="svg11"><MdOutlinePool/><h3>Pool Houses</h3></div>
        <div className="svg11"><LuTentTree/><h3>Tent House</h3></div>
        <div className="svg11"><GiWoodCabin/><h3>Cabins</h3></div>
        <div className="svg11"><SiHomeassistantcommunitystore/><h3>Shops</h3></div>
        <div className="svg11"><FaTreeCity/><h3>Forest Houses</h3></div>
      </div>
    </div>
  )
}

export default Nav
