import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="page-width simple-page">
      <div className="hero">
        <p className="eyebrow">ABOUT SHOPEASY</p>
        <h1>Simple shopping, <span>made easy.</span></h1>
        <p className="hero-copy">ShopEasy is a small demonstration store built to practise React pages, navigation, shared cart state, and a simple checkout flow.</p>
      </div>
      <div className="content-card">
        <h2>What this store offers</h2>
        <p>Browse everyday products, search by name, filter by category, and add items to your cart. You can update quantities, remove items, and view the total before placing a demo order.</p>
        <p>The cart is managed with Redux Toolkit and saved in your browser using localStorage. This project is a front-end learning demo and does not process real payments.</p>
        <Link to="/" className="primary-button inline-button">Back to Home</Link>
      </div>
    </section>
  );
}
