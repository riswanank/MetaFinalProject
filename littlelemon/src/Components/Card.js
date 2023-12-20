import './Card.css';
import { specials } from '../data';


const Card = () => {
  const specialties = specials.map(
    ({ id, image, name, price, description }) => {
      return (
        <div key={id} className='card-container'>
          <div className='specials-image-container'>
            <img src={image} alt={name} className='specials-image' />
          </div>
          <div className='specials-details'>
            <div className='specials-name'>
              <p>{name}</p>
              <p className='specials-price'>{price}</p>
            </div>
            <p className='specials-description'>{description}</p>
            <div className='specials-delivery'>
              <p className='specials-name'>Order a delivery</p>
             
            </div>
          </div>
        </div>
      );
    }
  );
  return <div className='card-list'>{specialties}</div>;
};

export default Card;