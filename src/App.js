import React from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import Home from './pages/Home';
import Single from './pages/Single';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          ed
        </Route>
      </Routes>
    </div>
  );
}

export default App;
