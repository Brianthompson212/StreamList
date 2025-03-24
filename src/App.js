import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import StreamList from "./components/StreamList";
import MovieSearch from "./components/MovieSearch";
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

  // Add to Cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Update Item Quantity
  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
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
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
