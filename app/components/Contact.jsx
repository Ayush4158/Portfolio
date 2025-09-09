"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side - Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Got a project idea or just want to say hi?  
            Fill out the form and I’ll get back to you as soon as possible.  
            I’m always open to discussing new projects, creative ideas,  
            or opportunities to collaborate.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>
              📍 <span className="ml-2">Mumbai, India</span>
            </li>
            <li>
              📧 <span className="ml-2">ayush@example.com</span>
            </li>
            <li>
              📞 <span className="ml-2">+91 98765 43210</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 rounded-2xl p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
