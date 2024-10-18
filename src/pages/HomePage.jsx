import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  // List of animations for the 2 sections
  const animations = [
    { animation: { x: [-200, 0], opacity: [0, 1] }, transition: { duration: 1 } }, // Slide-in from left
    { animation: { scale: [0.5, 1], opacity: [0, 1] }, transition: { duration: 1 } }, // Scale-up
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-6xl font-bold mb-6"
          >
            Welcome to Our Stunning Page
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-xl mb-8"
          >
            Explore the beauty of motion and design.
          </motion.p>
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* 2 Sections with Different Animations */}
      {[...Array(2)].map((_, index) => (
        <motion.section
          key={index}
          className={`h-96 flex items-center justify-center bg-gray-${(index % 9) + 1}00`}
          initial={{ opacity: 0 }}
          animate={animations[index % animations.length].animation}
          transition={animations[index % animations.length].transition}
        >
          <h2 className="text-4xl font-bold">
            Section {index + 1}
          </h2>
        </motion.section>
      ))}
    </div>
  );
};

export default HomePage;
