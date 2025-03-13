import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom to link to routes
import "./Navbar.css";  // Import the Navbar-specific styles

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
