import houseData from '../../House.json';
import Card from '../Card/Card';

const PoolHouses = () => {
  const poolHouses = houseData.houses.filter(house => house.type === 'Pool House');

  return (
    <div id="poolhouses">
      <h1>Pool Houses</h1>
      <div className="house-list">
        {poolHouses.map((house, index) => (
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

export default PoolHouses;
