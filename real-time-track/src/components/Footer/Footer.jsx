import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        &copy; 2025, All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-200"
        >
          <FaFacebook size={20} />
          Facebook
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-200"
        >
          <FaXTwitter size={20} />
           Twitter
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-200"
        >
          <FaInstagramSquare size={20} />
           Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
