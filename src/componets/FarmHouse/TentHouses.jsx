import houseData from '../../House.json';
import Card from '../Card/Card';

const TentHouses = () => {
  const tentHouses = houseData.houses.filter(house => house.type === 'Tent House');

  return (
    <div id="tenthouses">
      <h1>Tent Houses</h1>
      <div className="house-list">
        {tentHouses.map((house, index) => (
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

export default TentHouses;
