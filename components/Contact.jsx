import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_WEB3FORM_ACCESS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Thanks! Your message has been sent.");
      event.target.reset();
    } else {
      setResult("Oops! Something went wrong.");
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-6 md:px-[12%] py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center text-4xl font-bold mb-2">📬 Let's Connect</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Got a project in mind? Feel free to drop me a message!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded border border-gray-300 dark:border-white/30 bg-white dark:bg-darkHover dark:text-white outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 rounded border border-gray-300 dark:border-white/30 bg-white dark:bg-darkHover dark:text-white outline-none"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full p-3 rounded border border-gray-300 dark:border-white/30 bg-white dark:bg-darkHover dark:text-white outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-700 transition"
        >
          Send Message
        </button>

        {result && (
          <p className="text-center text-sm mt-4 text-gray-700 dark:text-white">
            {result}
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
