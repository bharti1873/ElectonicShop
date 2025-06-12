import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Naigation from './Navigation';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Services from './Services';
import Feedback from './Feedback';
import Footer from './Footer';
import Registration from './Registration';
import BuyNow from './BuyNow';
import Login from './LogIn';
import Cart from './Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Naigation" element={<Naigation />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/Footer" element={<Footer />} />

        <Route path="/BuyNow/:id" element={<BuyNow />} />
         <Route path="/Cart" element={<Cart />} />

        {/* User */}
         <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // <Naigation />
  );
}

export default App;
