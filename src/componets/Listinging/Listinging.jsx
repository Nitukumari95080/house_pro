import React, { useContext } from 'react';
import "./Listinging.css";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { dataContext } from '../../Context/UserContext';

const Listinging = () => {
  const {
    title,
    setTitle,
    addListing,
    setAddListing,
    addImage1,
    setImage1,
    addImage2,
    setImage2,
    addImage3,
    setImage3,
    price,
    setPrice,
  } = useContext(dataContext);

  return (
    <div
      id="listning"
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Add Listing Successfully..`);
        setAddListing(true);
      }}
    >
      <form>
        <span id="listtitle">Add your Listing</span>
        <div className="list">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder=""
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="list">
          <label htmlFor="des">Description</label>
          <textarea id="des" rows="4" cols="96"></textarea>
        </div>
        <div className="list">
          <label htmlFor="img1">Image URL1</label>
          <input
            type="file"
            id="img1"
            required
            onChange={(e) => {
              setImage1(e.target.files[0]);
            }}
          />
        </div>
        <div className="list">
          <label htmlFor="img2">Image URL2</label>
          <input
            type="file"
            id="img2"
            required
            onChange={(e) => {
              setImage2(e.target.files[0]);
            }}
          />
        </div>
        <div className="list">
          <label htmlFor="img3">Image URL3</label>
          <input
            type="file"
            id="img3"
            required
            onChange={(e) => {
              setImage3(e.target.files[0]);
            }}
          />
        </div>
        <div className="list">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder=""
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </div>
        <div className="list">
          <label htmlFor="loc">Location</label>
          <input type="text" id="loc" placeholder="" />
        </div>
        <button id="loginbtn">
          Add <IoMdAddCircleOutline />
        </button>
      </form>
    </div>
  );
};

export default Listinging;
