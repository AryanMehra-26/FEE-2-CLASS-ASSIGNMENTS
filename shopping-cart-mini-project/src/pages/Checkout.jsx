import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../store/cartSlice.js';

const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  function placeOrder() {
    if (cart.length === 0) return;
    const order = { items: cart, totalItems, totalPrice };
    dispatch(clearCart());
    navigate('/order-success', { state: { order } });
  }

  return (
    <section className="page-width simple-page">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">CHECKOUT</p>
          <h1>Order summary</h1>
          <p className="page-intro">Review your items before completing this demo order.</p>
        </div>
        <Link className="secondary-button" to="/cart">Back to cart</Link>
      </div>

      {cart.length === 0 ? (
        <div className="content-card empty-checkout">
          <h2>Your cart is empty</h2>
          <p>Add some products before checking out.</p>
          <button className="primary-button large-button" onClick={() => navigate('/products')} type="button">Browse products</button>
        </div>
      ) : (
        <div className="checkout-layout">
          <div className="content-card checkout-items">
            <h2>Items in your order</h2>
            {cart.map((item) => (
              <div className="checkout-row" key={item.id}>
                <span className="checkout-product-icon" role="img" aria-label={item.name}>{item.emoji}</span>
                <div className="checkout-product-name"><strong>{item.name}</strong><span>Qty: {item.quantity}</span></div>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </div>
            ))}
          </div>
          <aside className="content-card order-summary">
            <h2>Payment summary</h2>
            <div className="summary-line"><span>Total items</span><span>{totalItems}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Free</span></div>
            <div className="cart-total"><span>Total price</span><strong>{formatPrice(totalPrice)}</strong></div>
            <button className="checkout-button" onClick={placeOrder} type="button">Place demo order</button>
            <p className="demo-note">No payment details are collected and no payment is processed.</p>
          </aside>
        </div>
      )}
    </section>
  );
}
