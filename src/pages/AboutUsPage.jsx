import React from 'react'
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return  (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Container for the about us content */}
      <div className="container mx-auto px-4 py-12">
        {/* Heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl font-bold text-center mb-10"
        >
          About Us
        </motion.h1>

        {/* About Us content */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2"
          >
            <img
              src="/"
              alt="Team"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text section */}
          <div className="w-full md:w-1/2 text-lg leading-relaxed text-gray-300">
            <p className="mb-6">
              We are a team of passionate professionals dedicated to delivering excellence in everything we do. Our goal is to create innovative solutions that make a difference and provide exceptional value to our clients.
            </p>
            <p className="mb-6">
              With years of experience in the industry, we pride ourselves on our expertise, integrity, and commitment to our customers. We believe in the power of collaboration and innovation to drive success, and we’re always looking forward to new challenges.
            </p>
            <p>
              Our mission is simple: to empower our clients with the tools and support they need to thrive in today’s fast-paced world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage