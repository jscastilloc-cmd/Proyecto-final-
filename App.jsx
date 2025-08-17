import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === plant.id);
      if (exist) {
        return prev.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...plant, quantity: 1 }];
      }
    });
  };

  const increase = (id) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrease = (id) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
  };

  const remove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} increase={increase} decrease={decrease} remove={remove} />} />
      </Routes>
    </Router>
  );
}



export default App;