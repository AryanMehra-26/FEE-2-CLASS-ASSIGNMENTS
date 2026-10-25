import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import CartPanel from './components/CartPanel.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';
import OrderSuccess from './pages/OrderSuccess.jsx';
import NotFound from './pages/NotFound.jsx';
import { useTheme } from './context/ThemeContext.jsx';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-shell ${theme}`} id="top">
      <Header />
      <main className="route-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPanel />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>ShopEasy · React shopping cart mini project</span>
        <span>Built with React Router DOM and Redux Toolkit.</span>
      </footer>
    </div>
  );
}
