import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-full max-w-4xl px-4 text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6">
      
      {/* Profile image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="Ajaykumar Gunji" className="rounded-full w-32 h-32 object-cover shadow-md" />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-lg md:text-2xl font-Ovo"
      >
        Hi! I'm <span className="font-semibold">Ajaykumar Gunji</span>
        <Image src={assets.hand_icon} alt="👋" className="w-6 h-6" />
      </motion.h3>

      {/* Main headline */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-6xl font-bold font-Ovo leading-tight"
      >
        Full-Stack Developer based in USA
      </motion.h1>

      {/* Intro paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-md text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-Ovo"
      >
        I’m a Full-Stack Developer from Memphis with 4+ years of experience, passionate about building clean, scalable, and user-friendly web applications.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-8 py-3 border border-gray-700 dark:border-white text-white bg-black dark:bg-transparent rounded-full hover:bg-gray-800 transition"
        >
          Contact Me
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="\sample-resume.pdf"
          download
          className="px-8 py-3 border border-gray-500 bg-white dark:text-black rounded-full hover:bg-gray-200 transition flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
