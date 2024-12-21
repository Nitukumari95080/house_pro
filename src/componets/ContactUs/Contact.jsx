import React from 'react';
import  "./Contact.css";
import { TbFileLike } from 'react-icons/tb';
const Contact = () => {
  return (
    <div id="contact">
        {/* https://formspree.io/f/xqaazpyw -->side formsprre ye hame free me email pe sms provide karta h job koi user sms send kar to */}
      <form action='https://formspree.io/f/xqaazpyw' method='POST'>
        <span id="contacttitle">Contact Page</span>
        <div className="list">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username" // Unique ID for username
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" // Unique ID for email
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="list">
          <label htmlFor="message">Message</label>
          <textarea
            id="message" // Unique ID for message
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button id="loginbtn" type="submit">
          Submit<TbFileLike/>
        </button>
      </form>
    </div>
  );
};

export default Contact;
