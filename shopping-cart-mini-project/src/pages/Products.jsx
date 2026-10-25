import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { getProducts } from '../services/productService.js';

const categories = ['All', 'Electronics', 'Accessories', 'Home'];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [notice, setNotice] = useState('');

  const loadProducts = useCallback(async (shouldFail = false) => {
    setLoading(true);
    setError('');
    try {
      const productList = await getProducts(shouldFail);
      setProducts(productList);
    } catch (requestError) {
      setError(requestError.message || 'Something went wrong while loading products.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase().trim());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  }), [products, search, category]);

  return (
    <section className="page-width products-page">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">THE SHOP</p>
          <h1>Our products</h1>
          <p className="page-intro">Choose from everyday essentials and add your favourites to the cart.</p>
        </div>
        <div className="title-actions">
          <button className="text-button" onClick={() => loadProducts(true)} title="Trigger a sample request error to test the error state" type="button">Test error state</button>
          <Link className="secondary-button" to="/cart">View cart</Link>
        </div>
      </div>

      <div className="filters">
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />
        </label>
        <div className="category-filters" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              className={category === item ? 'category-button selected' : 'category-button'}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >{item}</button>
          ))}
        </div>
      </div>

      {notice && <p className="notice" role="status">{notice}</p>}

      {loading ? (
        <div className="state-panel" role="status">
          <div className="spinner" />
          <h3>Loading products...</h3>
          <p>Please wait while we load the product list.</p>
        </div>
      ) : error ? (
        <div className="state-panel error-panel" role="alert">
          <span className="state-icon" aria-hidden="true">⚠️</span>
          <h3>We couldn't load the products</h3>
          <p>{error}</p>
          <button className="primary-button" onClick={() => loadProducts()} type="button">Try again</button>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="state-panel">
          <span className="state-icon" aria-hidden="true">🔎</span>
          <h3>No products found</h3>
          <p>Try another search or category.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdded={setNotice} />
          ))}
        </div>
      )}

      <p className="api-note">This learning project uses sample product data; no external API or server is required.</p>
    </section>
  );
}
