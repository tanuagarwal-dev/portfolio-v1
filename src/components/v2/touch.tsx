'use client';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Touch() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Pending');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch('https://formspree.io/f/xdklzagy', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setStatus("Success! I'll get back to you soon.");
      form.reset();
    } else {
      setStatus('Error');
    }
  };
  return (
    <div
      className="relative  dark:bg-black overflow-hidden w-full px-2 min-h-screen flex "
      id="contact"
    >
      {/* Grid Overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2  opacity-10 z-0 contact-bg" />

      {/* Green Gradient Blur */}
      <div className="absolute bottom-[-60px] left-[-80px] w-1/2 h-2/3 bg-radial from-green-600 via-green-700 to-green-900 rounded-full blur-3xl opacity-20 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-around my-4 dark:text-white text-center px-6">
        <h1 className="lg:text-6xl md:text-6xl text-5xl font-bold text-left w-full text-gray-700 dark:text-gray-500">
          Get in touch.
        </h1>
        <div className="flex flex-wrap gap-4 w-full justify-around">
          <div className=" dark:text-gray-400 text-gray-700 mt-8">
            <form className="w-full max-w-xl space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="E.g. John Doe"
                    className="p-3 rounded-lg dark:rounded-none bg-white dark:bg-transparent border-b  focus:outline-none focus:ring-2 focus:rounded-md  focus:ring-green-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E.g. you@example.com"
                    className="p-3 rounded-lg dark:rounded-none bg-white dark:bg-transparent  border-b focus:outline-none focus:ring-2 focus:rounded-md focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-8">
                <label className="text-sm font-medium mb-1">
                  Message / Enquiry
                </label>
                <textarea
                  placeholder="Enter your message here"
                  name="message"
                  className="p-3 rounded-lg dark:rounded-none bg-white dark:bg-transparent  border-b focus:outline-none focus:ring-2 focus:ring-green-500 focus:rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
              {status && <p className="mt-2 text-sm">{status}</p>}
            </form>
          </div>

          <div className="mt-8 space-y-4 text-lg font-bold lg:w-1/3 mb-8 text-left text-green-700 dark:text-white tracking-tight">
            <p>
              I am always on the look out for opportunities that enable me to
              grow personally and professionally, as well as to connect with
              like-minded, or different-minded, individuals.
            </p>
            <p>
              Whether you have an opportunity, piece of advice, question, or
              simply want to say hi, my inbox is always open!
            </p>
            <div className="flex gap-6 mt-6 text-slate-800 dark:text-white bg-slate-100 w-fit p-4 dark:bg-neutral-900 ">
              {/* <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 hover:text-emerald-600 transition" />
                </Link>
              </motion.div> */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://linkedin.com/in/tanu-agarwal0101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 hover:text-emerald-600 transition" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://github.com/tanuagarwal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 hover:text-emerald-600 transition" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
