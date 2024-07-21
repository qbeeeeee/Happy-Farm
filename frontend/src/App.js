import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import dogs_banner from './Components/Assets/Happyfarm/dogs_banner.png';
import cats_banner from './Components/Assets/Happyfarm/cats_banner.png';
import accessories_banner from './Components/Assets/Happyfarm/accessories_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/dogs" element={<ShopCategory banner={dogs_banner} category="dogs"/>}/>
        <Route path="/cats" element={<ShopCategory banner={cats_banner} category="cats"/>}/>
        <Route path="/accessories" element={<ShopCategory banner={accessories_banner} category="accessories"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
