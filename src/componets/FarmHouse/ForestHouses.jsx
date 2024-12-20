import houseData from '../../House.json';
import Card from '../Card/Card';

const ForestHouses = () => {
  const forestHouses = houseData.houses.filter(house => house.type === 'Forest House');

  return (
    <div id="foresthouses">
      <h1>Forest Houses</h1>
      <div className="house-list">
        {forestHouses.map((house, index) => (
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

export default ForestHouses;
