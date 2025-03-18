import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
      <div className="flex gap-4">
        <a href="/support">Support</a>
        <a href="/about">About Us</a>
      </div>
    </footer>
  );
}

export default Footer;
