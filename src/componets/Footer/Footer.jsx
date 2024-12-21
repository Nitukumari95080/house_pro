import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Street Name, City</p>
      </div>
      <div className="footer-column">
        <h3>Our Services</h3>
        <ul>
          <li>Home</li>
          <li>Add Listing</li>
          <li>Rent</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
       <Link to={""} >   <li>Home</li></Link>
          <li>About</li>
          <li>Blog</li>
          <Link to={"/Contact"}>   <li>Contact</li></Link>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Privacy</h3>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
      <div className="terms">Privacy Policy || Use of terms</div>
    </footer>
  );
};

export default Footer;
