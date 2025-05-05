import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Explore a collection of projects showcasing my real-world development experience.
      </motion.p>

      {/* Project 1 */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🚗 Neon Car Show</h3>
        <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-2">
          Tech: React Three Fiber, Three.js
        </p>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          A fully interactive 3D car showcase built with glowing neon aesthetics and smooth user controls.
        </p>
        <video width="640" height="360" controls className="rounded-xl shadow-lg mx-auto hover:scale-105 transition-transform duration-300">
          <source src="/neon-car-demo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Project 2 */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🌍 3D Globe Plane Animation</h3>
        <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-2">
          Tech: Three.js, Anime.js, HTML/CSS
        </p>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Realistic 3D animation of planes flying around a globe, featuring randomized paths and day-night transitions.
        </p>
        <video width="640" height="360" controls className="rounded-xl shadow-lg mx-auto hover:scale-105 transition-transform duration-300">
          <source src="/globe-animation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Project 3 */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🛒 Nxt Trendz – E-Commerce Clone</h3>
        <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-2">
          Tech: React JS, Routing, JWT, REST API, Bootstrap
        </p>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Clone of Flipkart/Amazon with login, search, filters, and auth. Designed to replicate real eCommerce UI/UX.
        </p>
        <a href="https://syame-com.netlify.app" target="_blank" rel="noopener noreferrer">
          <Image
            src="/nxt-trendz.png"
            alt="Nxt Trendz Screenshot"
            width={640}
            height={360}
            className="rounded-xl shadow-lg mx-auto hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

    </motion.div>
  )
}

export default Work
