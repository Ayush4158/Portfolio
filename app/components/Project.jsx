"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Shopify Store",
    desc: "I built and optimized a complete Shopify storefront for a client, focusing on high performance, mobile responsiveness, and smooth user experience. The store was customized with advanced features to increase conversions, enhance product presentation, and integrate seamless checkout flows. Along with design, I ensured speed optimization and SEO-friendly structure for better reach and sales.",
    link: "https://itrani.com/",
    img: "/The-Best-Shopify-Store-Examples-for-2022.png",
  },
  {
    title: "Wix Website",
    desc: "Developed a modern and professional Wix website for our own company with the goal of creating a strong online presence when I wanted to onboard employees. The website includes smooth animations, responsive layouts, and CMS-powered sections for easy content management. It reflects brand identity while being simple to update and maintain, making it ideal for a growing business setup.",
    link: "https://www.breakthecode.in/",
    img: "/wix.jpeg",
  },
  {
    title: "React Dashboard",
    desc: "A personal full-stack project where I built an interactive React-based admin dashboard integrated with MongoDB and Express server. The project demonstrates complete CRUD operations such as adding, updating, deleting, and viewing records. It also includes data visualization features, charts, and a responsive layout. This project helped me strengthen my skills in React, backend APIs, and database connectivity.",
    link: "https://school-board-alpha.vercel.app/",
    img: "/og-home.png",
  },
  {
    title: "Next.js App",
    desc: "Created a powerful Next.js application integrated with AI to handle user queries in real-time. The app leverages server-side rendering for SEO optimization and includes secure authentication using NextAuth. Apart from answering queries with AI, the project also demonstrates API integration, dynamic routing, and a user-friendly interface. This was a challenging project where I combined frontend, backend, and AI to deliver a complete solution.",
    link: "https://intellio-ai-eight.vercel.app/",
    img: "/nextjs.jpeg",
  },
];


const Project = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-16 text-white tracking-tight">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(proj)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg 
                         bg-slate-900/40 backdrop-blur-md border border-slate-800 
                         hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={proj.img}
                alt={proj.title}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              {/* Text */}
              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-xl font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-2">
                  {proj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-6"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-8"
            >
              <img
                src={selected.img}
                alt={selected.title}
                className="rounded-lg mb-5 w-full h-56 object-cover"
              />
              <h3 className="text-3xl font-bold text-white mb-4">
                {selected.title}
              </h3>
              <p className="text-slate-300 mb-6">{selected.desc}</p>

              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-lg transition"
              >
                Visit Project <ExternalLink size={18} />
              </a>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
