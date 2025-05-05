import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Services = () => {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20 bg-white dark:bg-gray-900"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-lg text-gray-600 dark:text-white mb-2 font-Ovo"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-Ovo mb-12"
      >
        I am a Full-Stack developer from Memphis, USA with 4 years of experience across companies like Tech Mahindra and JPMorgan Chase.
      </motion.p>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-darkHover/30 p-6 hover:shadow-md hover:shadow-teal-300/20 dark:hover:shadow-white/10 transition"
          >
            <Image src={icon} alt={title} className="w-10 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-white/80 leading-6">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-teal-600 mt-4 hover:underline"
              >
                Read more
                <Image alt="" src={assets.right_arrow} className="w-3" />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
