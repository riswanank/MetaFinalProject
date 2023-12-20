import './Specials.css';
import Card from './Card';

const Specials = () => {
  return (
    <section name='menu' className='specials'>
      <div className='specials-header'>
        <h1 className='specials-title'>This weeks Specials!</h1>
        <button className='menu-button'>Online Menu</button>
      </div>
      <Card />
    </section>
  );
};

export default Specials;