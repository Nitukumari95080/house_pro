import houseData from '../../House.json';
import Card from '../Card/Card';

const Cabins = () => {
  const cabins = houseData.houses.filter(house => house.type === 'Cabin');

  return (
    <div id="cabins">
      <h1>Cabins</h1>
      <div className="house-list">
        {cabins.map((house, index) => (
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

export default Cabins;
