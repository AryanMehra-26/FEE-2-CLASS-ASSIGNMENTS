import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="page-width home-page">
      <div className="hero home-hero">
        <p className="eyebrow">WELCOME TO SHOPEASY</p>
        <h1>Everyday essentials, <span>all in one place.</span></h1>
        <p className="hero-copy">Explore useful products, add your favourites to the cart, and try a simple checkout experience.</p>
        <div className="page-actions">
          <button className="primary-button large-button" onClick={() => navigate('/products')} type="button">Browse products</button>
          <button className="secondary-button large-button" onClick={() => navigate('/cart')} type="button">View cart</button>
        </div>
      </div>

      <div className="home-feature-grid">
        <article className="home-feature">
          <span aria-hidden="true">🛍️</span>
          <h2>Browse products</h2>
          <p>Explore the catalogue and search by product name or category.</p>
        </article>
        <article className="home-feature">
          <span aria-hidden="true">🛒</span>
          <h2>Manage your cart</h2>
          <p>Update quantities, remove products, and see the total price.</p>
        </article>
        <article className="home-feature">
          <span aria-hidden="true">💾</span>
          <h2>Cart stays saved</h2>
          <p>Your cart is saved in this browser even after you refresh the page.</p>
        </article>
      </div>
    </section>
  );
}
