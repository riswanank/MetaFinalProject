
import Head from './Components/Head';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Reservation from './Pages/Reservation';
import Onlineorder from './Pages/Onlineorder';
import SignIn from './Pages/SignIn';
import { Route,  Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
    
    <Head />
    <Nav />
    <Hero/>
    <Main />
    <Footer />
       <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Onlineorder />} />
          <Route path="/login" element={<SignIn />} />
        
      </Routes>
          </>
    
  );
}


export default App;
