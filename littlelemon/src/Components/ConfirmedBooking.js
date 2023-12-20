import { useEffect, useState } from 'react';
import './ConfirmedBooking.css';
import restaurant from '../images/restaurant.jpg';
import location from '../images/location.svg';
import { Link as LinkR } from 'react-router-dom';

const ConfirmedBooking = () => {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Bookings');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

  return (
    <section name='booking-confirmation' className='booking-confirmation'>
      

      <h1 className='confirmation-confirmed'>Your reservation is confirmed!</h1>
      <h2 className='confirmation-reserved'>Modern Restaurant & Bar</h2>
      <div className='confirmation-details-container'>
        <h2>
          DATE:{' '}
          <span className='confirmation-details'>{reservedDetails.date}</span>
        </h2>
        <h3>
          TIME:{' '}
          <span className='confirmation-details'>{reservedDetails.time}</span>
        </h3>
        <h3>
          GUESTS:{' '}
          <span className='confirmation-details'>{reservedDetails.guests}</span>
        </h3>
        <h3>
          OCCASION:
          <span className='confirmation-details'>
            {' '}
            {reservedDetails.occasion}
          </span>
        </h3>
      </div>

     
      <LinkR to='/' className='confirmation-home'>
        Go Home
      </LinkR>
    </section>
  );
};

export default ConfirmedBooking;