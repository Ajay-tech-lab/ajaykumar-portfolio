import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-16 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className='text-4xl font-bold text-center mb-2'>About Me</h2>
      <p className='text-center text-gray-500 dark:text-gray-400 mb-10'>Let me introduce myself.</p>

      {/* Profile and Bio */}
      <div className='flex flex-col lg:flex-row items-center gap-12'>
        {/* Profile Image */}
        <div className='w-60 h-60 relative'>
          <Image src={assets.user_image} alt='Ajaykumar Gunji' className='rounded-2xl object-cover' fill />
        </div>

        {/* Bio */}
        <div className='flex-1 text-base leading-relaxed'>
          <p className='mb-4'>
            I’m <strong>Ajaykumar Gunji</strong>, a Full-Stack Developer with over <strong>4 years of experience</strong>, and a Master’s degree in Computer Science from the University of Memphis.
          </p>
          <p className='mb-4'>
            I specialize in building scalable and user-friendly applications using <strong>Java, React, Next.js</strong>, and modern web technologies.
            I'm experienced with backend services, REST APIs, JWT authentication, and responsive UI development.
          </p>
          <p>
            I enjoy solving real-world problems, collaborating with teams, and delivering clean, maintainable code.
            I'm always curious and passionate about learning new tools and building practical solutions.
          </p>
        </div>
      </div>

      {/* Info Cards (Education, Languages, Projects) */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16'>
        {infoList.map(({ icon, iconDark, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className='border rounded-xl p-6 text-center shadow-md dark:border-white/20 dark:bg-darkHover/40 transition'
          >
            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-8 h-8 mx-auto mb-4' />
            <h4 className='font-semibold text-lg mb-2'>{title}</h4>
            <p className='text-sm text-gray-600 dark:text-white/80'>{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <div className='mt-16'>
        <h3 className='text-2xl font-semibold text-center mb-6'>🛠 Tools I Use</h3>
        <ul className='flex flex-wrap justify-center gap-6'>
          {toolsData.map((tool, index) => (
            <li key={index} className='w-16 h-16 flex items-center justify-center border rounded-lg p-2 bg-white dark:bg-darkHover/30 shadow-md'>
              <Image src={tool} alt="Tool" className="w-8 h-8" />
            </li>
          ))}
        </ul>
      </div>

{/* Skills Section */}
<div className="mt-20 max-w-5xl mx-auto">
  <h3 className="text-2xl font-semibold text-center mb-6">💻 Core Skills</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
    {[
      'Java', 'Python', 'JavaScript',
      'React.js', 'Next.js', 'Node.js',
      'MySQL', 'PostgreSQL', 'MongoDB',
      'Git & GitHub', 'Microservices', 'JWT/Auth'
    ].map((skill, index) => (
      <div key={index} className="bg-white dark:bg-darkHover/30 border rounded-lg p-4 shadow-sm hover:shadow-md transition">
        {skill}
      </div>
    ))}
  </div>
</div>



    </motion.div>
  );
};

export default About;
