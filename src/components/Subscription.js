import React from 'react';
import products from '../Data';

const Subscription = ({ addToCart, cartItems }) => {
  const handleAdd = (product) => {
    const alreadyAdded = cartItems.find(item => item.id === product.id);
    
    if (product.subscription && alreadyAdded) {
      alert('Subscription already added!');
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="subscription-page">
      <h2>Available Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAdd(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Subscription;
