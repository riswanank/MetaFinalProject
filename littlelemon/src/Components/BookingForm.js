import {useState} from  'react';
import './BookingForm.css';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../utils/temp';
const BookingForm = ({ availableTimes, dispatch }) => {
    const navigate = useNavigate();
    const { times } = availableTimes;
    const [bookings, setBookings] = useState({
      date: '',
      time: '17:00',
      guests: '',
      occasion: 'Birthday',
    });
  
    useEffect(() => {
      localStorage.setItem('Bookings', JSON.stringify(bookings));
    }, [bookings]);
  
    // SUBMIT HANDLER
    const handleSubmit = e => {
      e.preventDefault();
  
      // SUBMIT LOGIC
      if ((bookings.date, bookings.time, bookings.guests !== '')) {
        submitAPI();
        navigate('/confirmed');
  
        console.log(`
        Date: ${bookings.date},
        Time: ${bookings.time},
        Number of Guests: ${bookings.guests},
        Occasion: ${bookings.occasion}`);
  
        // RESET VALUE TO INITIAL STATE
        setBookings({
          date: '',
          time: '17:00',
          guests: '',
          occasion: 'Birthday',
        });
      } else {
        console.log('THERE IS AN ERROR SUBMITTING YOUR FORM');
      }
    };
  
    // HANDLING MULTIPLE INPUTS
    const handleChange = e => {
      const { name, value } = e.target;
  
      // [e.target.name] = e.target.time || e.target.guests || e.target.occasion
      setBookings({ ...bookings, [name]: value });
    };
  
        return(

         <>
            <br></br>
            <div class="RservTbl"><h1>Reserve Your Table</h1></div>
            <center>
            <form id="BkngForm" className="BkngForm"  
          onSubmit={handleSubmit} aria-label='On Submit'>
             
             <div class="row"> <div class="col1"> <label for="res-date">Choose date</label></div> 
              <div class="col2"> <input type='date'
            name='date'
            id='res-date'
            value={bookings.date}
            aria-label='On Change'
            onChange={e => {
              setBookings({ ...bookings, date: e.target.value });
              // new Date (e.target.value),  date argument on fetchAPI function can access .getDate() and set availableTimes different based on a given Date
              dispatch({
                type: 'UPDATE_TIMES',
                date: new Date(e.target.value),
              });
            }}
            required={true}/>
            </div> 
              </div>
              <div class="row">
                    <div class="col3"><label for="res-time">Choose time</label>
                    </div>
                    <div class="col4">
                    <select
            id='res-time'
            name='time'
            value={bookings.time}
            onChange={handleChange}
            aria-label='On Change'
            required={true} >
            {times.map(time => (
              <option key={time}>{time}</option>
            ))}
          </select>
                     </div>
            </div>
            <div class="row">
                <div class="col5">
                 <label for="book-guests">Number of guests</label>
                 </div>
                 <div class="col6">
                 <input
            type='number'
            placeholder='1-20'
            min='1'
            max='20'
            id='guests'
            name='guests'
            value={bookings.guests}
            onChange={handleChange}
            aria-label='On Change'
            required={true}
          />
                 </div>
            </div>   
            <div class="row">
               <div class="col7">  <label htmlFor="book-occasion">Occasion</label></div>
                    <div class="col8">
                   
                    <select
            id='occasion'
            value={bookings.occasion}
            name='occasion'
            onChange={handleChange}
            aria-label='On Change'
            required={true}
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Wedding</option>
          </select>
                     </div>
            </div>
            <div>
            <button type='submit' className='booking-button'>
            Make Your reservation
          </button>
            </div>
            
            </form>
            </center>
        </>

        );
    }
export default BookingForm;