import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCart(cart.map(item => (
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    )));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          {!item.subscription && (
            <input 
              type="number" 
              value={item.quantity || 1} 
              min="1"
              onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
            />
          )}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
