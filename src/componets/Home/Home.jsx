import React, { useContext } from 'react'; // Import useContext
import './Home.css';
import Card from '../Card/Card';
import houseData from '../../House.json';
import { dataContext } from '../../Context/UserContext';

const Home = () => {
  const {
    title,
    addListing,
    addImage1,
    addImage2,
    addImage3,
    price,
  } = useContext(dataContext); // Correctly use useContext

  return (
    <div id="home">
      {addListing ? ( // Conditionally render cards only when addListing is true
        <Card
          img1={addImage1 ? URL.createObjectURL(addImage1) : houseData.houses[0].images[0]} // Public URL for the first image
          img2={addImage2 ? URL.createObjectURL(addImage2) : houseData.houses[0].images[1]} // Public URL for the second image
          img3={addImage3 ? URL.createObjectURL(addImage3) : houseData.houses[0].images[2]} // Public URL for the third image
          title={title || houseData.houses[0].title} // Use title from context or fallback
          price={price || houseData.houses[0].price} // Use price from context or fallback
        />
      ) : (
        houseData.houses.map((house, index) => ( // Render default listings
          <Card
            key={index}
            img1={house.images[0]} // Use default image 1
            img2={house.images[1]} // Use default image 2
            img3={house.images[2]} // Use default image 3
            title={house.title} // Default title
            price={house.price} // Default price
          />
        ))
      )}
    </div>
  );
};

export default Home;
