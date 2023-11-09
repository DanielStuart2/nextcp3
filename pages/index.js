import React from 'react';
import productsData from '../data/products.json';
import Link from 'next/link';

function ECommerceHomePage() {
  return (

    <div>
      <header className="header">
        <h1>Welcome to My E-commerce Store</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>

      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-list">
          {productsData.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price.toFixed(2)}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 My E-commerce Store</p>
      </footer>
    </div>
  );
}

export default ECommerceHomePage;