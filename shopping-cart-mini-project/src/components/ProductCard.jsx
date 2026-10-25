import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';

const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function ProductCard({ product, onAdded }) {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(product));
    onAdded(`${product.name} added to cart!`);
  }

  return (
    <article className="product-card">
      <div className="product-art"><img src={product.image} alt={product.name} /></div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <strong>{formatPrice(product.price)}</strong>
          <button className="primary-button" onClick={handleAdd} type="button">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
