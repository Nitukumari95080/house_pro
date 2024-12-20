import React from 'react'
import  "./Listinging.css";
import { IoMdAddCircleOutline } from 'react-icons/io';
const Listinging = () => {
  return (
    <div id='listning'>
       <form action="">
            <span id="listtitle">Add your Listing</span>
              <div className="list">
                <label htmlFor="title">Title</label>
                <input type="text"  id="title" placeholder="" required/>
              </div>
              <div className="list">
                <label htmlFor="des">Description</label>
                <textarea  id="des" rows='4' cols='96'></textarea>
              </div>
              <div className="list">
                <label htmlFor="img1">Image URL1</label>
                <input type="file"  id="img1" placeholder="" required/>
              </div>
              <div className="list">
                <label htmlFor="img2">Image URL2</label>
                <input type="file"  id="img2" placeholder="" required/>
              </div>
              <div className="list">
                <label htmlFor="img3">Image URL3</label>
                <input type="file"  id="img3" placeholder="" required/>
              </div>
              <div className="list">
                <label htmlFor="price">Price</label>
                <input type="text"  id="price" placeholder="" required/>
              </div>
              <div className="list">
                <label htmlFor="loc">Location</label>
                <input type="text"  id="loc" placeholder="" required/>
              </div>
              <button id="loginbtn">Add<IoMdAddCircleOutline/></button>
            </form>
    </div>
  )
}

export default Listinging
