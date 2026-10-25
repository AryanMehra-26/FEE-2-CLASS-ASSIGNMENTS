import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-width simple-page">
      <div className="content-card not-found-card">
        <p className="eyebrow">ERROR 404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="primary-button inline-button">Back to Home</Link>
      </div>
    </section>
  );
}
