import React, { Fragment } from 'react';
import {useState} from  'react';
import './BookingForm.css';
const BookingForm = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")
 
    const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
    };
 
    const handleChange = (e) => {
     setDate(e);
     props.dispatch(e);
    }
        return(

         <>
            <br></br>
            <div class="RservTbl"><h1>Reserve Your Table</h1></div>
            <form id="BkngForm" class="BkngForm" name="BkngForm" onSubmit={handleSumbit}>
             
             <div class="row"> <div class="col1"> <label for="res-date">Choose date</label></div> 
              <div class="col2"> <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)}  required/></div> 
              </div>
              <div class="row">
                    <div class="col3"><label for="res-time">Choose time</label>
                    </div>
                    <div class="col4">
                    <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                        <option value="">Select a Time</option>
                        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select>
                     </div>
            </div>
            <div class="row">
                <div class="col5">
                 <label for="book-guests">Number of guests</label>
                 </div>
                 <div class="col6">
                 <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={1} max={10} required></input>
                 </div>
            </div>   
            <div class="row">
               <div class="col7">  <label htmlFor="book-occasion">Occasion</label></div>
                    <div class="col8">
                   
                    <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value="">Select an Option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                     </select>
                     </div>
            </div>
            <div>
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
            
            </form>
        </>

        );
    }
export default BookingForm;