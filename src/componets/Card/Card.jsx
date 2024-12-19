import  './Card.css'

const Card = ({ img1, img2, img3, title, price }) => {
  return (
    <div className="card">
      <div className="card-images">
        <img src={img1} alt="House Image 1" />
        <img src={img2} alt="House Image 2" />
        <img src={img3} alt="House Image 3" />
      </div>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Card
