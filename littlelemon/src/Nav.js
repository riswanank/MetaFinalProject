import   './Nav.css';
function Nav() {
    return (
        <>
        <nav id="nav-container" name="nav" class="nav">
       <div id="logo" class= "logo">
            <img src={require('./images/logo1.png')} alt="logo"/> 
            </div>
      <div class="menu">
        <br></br><br></br>
      <ul class="nav-ul">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Reservation</a></li>
    <li><a href="">Order Online</a></li>
   <li><a href="">Login</a></li>
</ul>
</div>

</nav>
</>
 );
}



export default Nav;

