// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, setUser, cartCount }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <nav className="navbar">
      <h1>StreamList</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/subscriptions">Subscriptions</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
        {user ? (
          <>
            <li>Hello, {user}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
