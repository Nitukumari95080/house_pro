import './Home.css';
import Card from '../Card/Card';
import houseData from '../../House.json';

const Home = () => {
  return (
    <div id="home">
      {houseData.houses.map((house, index) => (
        <Card
          key={index}
          img1={house.images[0]} // Use public URL for first image
          img2={house.images[1]} // Use public URL for second image
          img3={house.images[2]} // Use public URL for third image
          title={house.title}
          price={house.price}
        />
      ))}
    </div>
  );
};

export default Home;
