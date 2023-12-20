import React from "react"
import './Footer.css';
function Footer ()
{
    return (
        <div class="foot" >
        <section>
        <div class="logo1">
            <img src="" alt="logo"  />
        </div>
        <div class="foot1">
            <h3>Document Navigation</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </div>
        <div class="foot2"> 
            <h3>Contact</h3>
        <ul>
            <li>You may also want to visit us:<br/>
Little Lemon
331 E Chicago<br/>
LaSalle Street Chicago, 
<br/>Illinois 60602
USA

</li>
            <li>jim@rock.com
(311) 555-2368r</li>
            <li>littlemon@bookings.com
</li>
        </ul>
        </div>
        <div class="foot3">
            <h3>Social Media Links</h3>
        <ul>
            <li>Facebooks</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>
        </div>
        </section>
    </div>
)
    }

export default Footer;