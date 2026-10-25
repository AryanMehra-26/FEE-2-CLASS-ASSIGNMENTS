import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function OrderSuccess() {
  const { state } = useLocation();
  const order = state?.order;

  return (
    <section className="page-width simple-page">
      <div className="content-card success-card">
        <span className="success-icon" aria-hidden="true">✓</span>
        <p className="eyebrow">DEMO ORDER COMPLETE</p>
        <h1>Thank you for shopping!</h1>
        <p>Your demo order has been placed. This is a learning project, so no real payment was taken.</p>
        {order && (
          <div className="success-summary">
            <p><span>Items ordered</span><strong>{order.totalItems}</strong></p>
            <p><span>Order total</span><strong>{formatPrice(order.totalPrice)}</strong></p>
          </div>
        )}
        <Link to="/products" className="primary-button inline-button">Continue shopping</Link>
      </div>
    </section>
  );
}
