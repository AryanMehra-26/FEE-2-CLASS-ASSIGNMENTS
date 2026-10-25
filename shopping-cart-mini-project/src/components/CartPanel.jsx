import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cartSlice.js';

const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function CartPanel() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="page-width cart-page">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">YOUR ORDER</p>
          <h1>Shopping cart</h1>
          <p className="page-intro">Review your selected products and adjust quantities before checkout.</p>
        </div>
        <span className="cart-count large">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart empty-cart-page">
          <span aria-hidden="true">🛍️</span>
          <h3>Your cart is empty</h3>
          <p>Add a product to see it here.</p>
          <button className="primary-button large-button" onClick={() => navigate('/products')} type="button">Browse products</button>
        </div>
      ) : (
        <div className="cart-page-grid">
          <div className="cart-panel cart-page-items">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-icon" role="img" aria-label={item.name}>{item.emoji}</div>
                  <div className="cart-item-main">
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)} each</p>
                    <div className="quantity-controls">
                      <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                      <span>{item.quantity}</span>
                      <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-end">
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                    <button className="remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  </div>
                </div>
              ))}
              <button className="clear-button clear-cart-page" onClick={() => dispatch(clearCart())} type="button">Clear cart</button>
            </div>
          </div>

          <aside className="cart-panel order-summary">
            <p className="eyebrow">SUMMARY</p>
            <h2>Order summary</h2>
            <div className="summary-line"><span>Items</span><span>{totalItems}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Free</span></div>
            <div className="cart-total"><span>Total</span><strong>{formatPrice(totalPrice)}</strong></div>
            <button className="checkout-button" onClick={() => navigate('/checkout')} type="button">Proceed to checkout</button>
            <button className="clear-button" onClick={() => navigate('/products')} type="button">Continue shopping</button>
            <p className="demo-note">Demo only — no payment will be taken.</p>
          </aside>
        </div>
      )}
    </section>
  );
}
