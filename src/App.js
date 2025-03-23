import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import StreamList from "./components/StreamList";
import MovieSearch from "./components/MovieSearch"; // Added
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<MovieSearch />} /> {/* Added this line */}
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
