import React from 'react';
import Link from 'next/link'; // Import Link

function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
    },
    // Add more cart items here
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">Price: ${item.price.toFixed(2)}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
            <div className="item-total">
              <p className="item-total-price">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
      </div>
      <div className="button-container">
      <Link href="/">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default CartPage;