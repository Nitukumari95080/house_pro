import houseData from '../../House.json';
import Card from '../Card/Card';

const FarmHouses = () => {
  const farmHouses = houseData.houses.filter(house => house.type === 'Farm House');

  return (
    <div id="farmhouses">
      <h1>Farm Houses</h1>
      <div className="house-list">
        {farmHouses.map((house, index) => (
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

export default FarmHouses;
