import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import StreamList from "./components/StreamList";
import MovieSearch from "./components/MovieSearch";
import Subscriptions from "./components/Subscriptions";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);

  // Load user from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Load cart from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart with Duplicate Handling
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      // If it's a subscription and already exists in the cart, show an alert and return the original cart
      if (existingItem && item.subscription) {
        alert("You can only add one subscription at a time.");
        return prevCart;
      }

      // If item already exists and it's not a subscription, increase the quantity
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // If item doesn't exist, add it to the cart
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Update Item Quantity
  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  return (
    <Router>
      <Navbar user={user} setUser={setUser} cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/subscriptions" element={<Subscriptions addToCart={addToCart} cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
