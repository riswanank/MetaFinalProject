import   './Nav.css';
import React from 'react';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Reservation from '../Pages/Reservation';
import Onlineorder from '../Pages/Onlineorder';
import SignIn from '../Pages/SignIn';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <>
        
        <nav id="nav-container" name="nav" class="nav">
       <div id="logo" class= "logo">
            <img src={require('../images/logo1.png')} alt="logo"/> 
            </div>
      <div class="menu">
        <br></br><br></br>
      <ul class="nav-ul">
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/booking">Reservation</Link></li>
    <li><Link to="/order">Order online</Link></li>
   <li><Link to="/login">Login</Link></li>
</ul>
</div>

</nav>


</>
 );
}



export default Nav;

