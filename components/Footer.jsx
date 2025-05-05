import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20 border-t pt-10 px-[10%] bg-white dark:bg-gray-900 text-center text-gray-700 dark:text-white">
      {/* Logo + Email */}
      <div className="mb-6">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-32 mx-auto mb-3"
        />
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-white/80">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email"
            className="w-5"
          />
          <a href="mailto:ajaykumargunji79@gmail.com">ajaykumargunji79@gmail.com</a>
        </div>
      </div>

      {/* Social Links */}
      <div className="sm:flex justify-between items-center border-t border-gray-300 dark:border-white/20 pt-6">
        <p className="text-sm mb-4 sm:mb-0">© 2025 Ajaykumar Gunji. All rights reserved.</p>
        <ul className="flex justify-center gap-6 text-sm">
          <li>
            <a
              href="https://github.com/Ajay-tech-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ajaykumar-gunji-a1439a170/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="tel:+19015654936"
              className="hover:text-teal-500 transition"
            >
              Call Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
