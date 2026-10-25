import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="ShopEasy home">
        <span className="brand-icon">S</span>
        <span>ShopEasy</span>
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link active cart-nav-link' : 'nav-link cart-nav-link'}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>

      <div className="header-actions">
        <button className="theme-button" onClick={toggleTheme} type="button">
          {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
      </div>
    </header>
  );
}
