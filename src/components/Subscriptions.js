// src/components/Subscriptions.js
import React, { useState } from "react";
import { subscriptions, accessories } from "./Data";
import "./Subscriptions.css";

function Subscriptions({ addToCart, cart }) {
  const [warning, setWarning] = useState("");

  const handleAddToCart = (item) => {
    // Check if the item is a subscription and if one is already in the cart
    if (item.subscription) {
      const existingSubscription = cart.find((cartItem) => cartItem.subscription);
      if (existingSubscription) {
        setWarning("You can only have one subscription in the cart!");
        return;
      }
    }
    setWarning(""); // Clear the warning if adding an accessory or first subscription
    addToCart(item);
  };

  return (
    <div className="subscriptions-container">
      <h2>Subscriptions</h2>
      {warning && <p className="warning">{warning}</p>}
      {subscriptions.map((sub) => (
        <div key={sub.id} className="subscription-item">
          <span>{sub.name}</span>
          <span>${sub.price.toFixed(2)}</span>
          <button onClick={() => handleAddToCart({ ...sub, quantity: 1, subscription: true })}>
            Add to Cart
          </button>
        </div>
      ))}
      <h2>Accessories</h2>
      {accessories.map((acc) => (
        <div key={acc.id} className="subscription-item">
          <span>{acc.name}</span>
          <span>${acc.price.toFixed(2)}</span>
          <button onClick={() => handleAddToCart({ ...acc, quantity: 1, subscription: false })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Subscriptions;
