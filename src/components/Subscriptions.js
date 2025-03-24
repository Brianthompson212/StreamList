// src/components/Subscriptions.js
import React from "react";
import { subscriptions, accessories } from "./Data";
import "./Subscriptions.css";

function Subscriptions({ addToCart }) {
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="subscriptions-container">
      <h2>Subscriptions</h2>
      {subscriptions.map((sub) => (
        <div key={sub.id} className="subscription-item">
          <span>{sub.name}</span>
          <span>${sub.price.toFixed(2)}</span>
          <button onClick={() => handleAddToCart({ ...sub, quantity: 1 })}>
            Add to Cart
          </button>
        </div>
      ))}
      <h2>Accessories</h2>
      {accessories.map((acc) => (
        <div key={acc.id} className="subscription-item">
          <span>{acc.name}</span>
          <span>${acc.price.toFixed(2)}</span>
          <button onClick={() => handleAddToCart({ ...acc, quantity: 1 })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Subscriptions;
