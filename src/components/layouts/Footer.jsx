import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-gray-900 text-white py-10"
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
        <div className="mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-pink-500">
            Instagram
          </a>
        </div>
        <div className="mb-4">
          <p className="text-lg">123 Street Name, City, Country</p>
          <p className="text-lg">Email: <a href="mailto:contact@example.com" className="hover:text-blue-300">contact@example.com</a></p>
        </div>
        <p className="text-gray-500 text-sm">© 2024 Stunning Page. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

