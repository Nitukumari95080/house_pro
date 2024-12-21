import { useState } from 'react';
import './Nav.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import { MdBedroomParent, MdOutlinePool, MdOutlineWhatshot } from 'react-icons/md';
import { PiFarm } from 'react-icons/pi';
import { LuTentTree } from 'react-icons/lu';
import { GiWoodCabin } from 'react-icons/gi';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaTreeCity } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false); // State for hamburger menu visibility

  return (
    <div id="nav">
      {/* Hamburger Menu */}
      {isVisible && (
        <div className="hamburger">
          <Link to={"/Login"}>
            <div className="ham1">Login</div>
          </Link>
          <Link to={"/Signup"}>
            <div className="ham1">Sign Up</div>
          </Link>
          <Link to={"/Listing"}>
          <div className="ham1">List Your Home</div>
          </Link>
          <Link to={"/Contact"}>
          <div className="ham1">Help Center</div>
          </Link>
        </div>
      )}

      {/* Main Navigation */}
      <div className="nav1">
        <Link to="/">
          <div className="logo">
            <img src="/assets/p.jpg" alt="Rental House Logo" width="50px" />
            <h1>
              Rental <span>House</span>
            </h1>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search Destination" />
          <button>
            <span>Search</span>
            <IoSearch />
          </button>
        </div>

        <div className="ham">
        <Link to={"/Listing"}> <button id="btnHome">List Your Home</button></Link>
          <button
            id="btnHome1"
            onClick={() => setIsVisible((prev) => !prev)} // Toggle menu visibility
          >
            <RxHamburgerMenu id="svg1" />
            <CgProfile id="svg2" />
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="nav2">
      <NavLink to=""><div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
      <NavLink to="/rooms"><div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div></NavLink>
      <NavLink to="/farmhouses"><div className="svg11"><PiFarm /><h3>Farm Houses</h3></div></NavLink>
      <NavLink to="/poolhouses"><div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div></NavLink>
      <NavLink to="/tenthouses"><div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div></NavLink>
      <NavLink to="/cabins"><div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div></NavLink>
      <NavLink to="/shops"><div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div></NavLink>
      <NavLink to="/foresthouses"><div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div></NavLink>
    </div>
    </div>
  );
};

export default Nav;
