// Rooms.js
import houseData from '../../House.json';
import Card from '../Card/Card';

const Rooms = () => {
  const rooms = houseData.houses.filter(house => house.type === 'Room');

  return (
    <div id="rooms">
      <h1>Rooms</h1>
      <div className="house-list">
        {rooms.map((house, index) => (
          <Card
            key={index}
            img1={house.images[0]}
            img2={house.images[1]}
            img3={house.images[2]}
            title={house.title}
            price={house.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
