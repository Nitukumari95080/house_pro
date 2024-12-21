import React, { useState, createContext } from "react";

export let dataContext = createContext();

const UserContext = ({ children }) => { // Destructure children properly
  let [title, setTitle] = useState("");
  let [addListing, setAddListing] = useState(false);
  let [addImage1, setImage1] = useState(null);
  let [addImage2, setImage2] = useState(null);
  let [addImage3, setImage3] = useState(null);
  let [price, setPrice] = useState(null);

  let value = {
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
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContext;
