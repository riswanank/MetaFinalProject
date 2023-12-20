import BookingPage from './BookingPage';
import   './Hero.css';
import { Link as LinkR } from 'react-router-dom';
function Hero() {
    return (
        <>
        <div id="hero-div" class="hero-div" name="hero-div">
            <div class="item1">
             <h1>Little Lemon</h1>
             <p> <h3>Chicago</h3>
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern 
                twist.
                </p>
                <button type='submit' class="Reserve-btn" ><LinkR to='/booking' className='reserve-button'>
          Reserve a Table
        </LinkR></button>
            </div>
            <div class="item2">
                <img src={require("../images/11.png")}></img>
            </div>

        </div>
        </>
    );
}

export default Hero;