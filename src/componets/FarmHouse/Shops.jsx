import houseData from '../../House.json';
import Card from '../Card/Card';

const Shops = () => {
  const shops = houseData.houses.filter(house => house.type === 'Shop');

  return (
    <div id="shops">
      <h1>Shops</h1>
      <div className="house-list">
        {shops.map((house, index) => (
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

export default Shops;
