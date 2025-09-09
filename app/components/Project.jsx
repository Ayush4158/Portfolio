"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Shopify Store",
    desc: "Custom Shopify storefront built for high conversions and smooth user experience.",
    link: "https://example.com/shopify",
    img: "https://source.unsplash.com/600x400/?ecommerce,shopify",
  },
  {
    title: "Wix Website",
    desc: "A modern Wix-based website for a creative agency with animations and CMS features.",
    link: "https://example.com/wix",
    img: "https://source.unsplash.com/600x400/?website,design",
  },
  {
    title: "React Dashboard",
    desc: "Interactive admin panel with data visualization, charts, and responsive layout.",
    link: "https://example.com/react-dashboard",
    img: "https://source.unsplash.com/600x400/?dashboard,react",
  },
  {
    title: "Next.js App",
    desc: "SEO-optimized Next.js app with server-side rendering and API integration.",
    link: "https://example.com/nextjs",
    img: "https://source.unsplash.com/600x400/?coding,nextjs",
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio with animations, blog integration, and projects.",
    link: "https://example.com/portfolio",
    img: "https://source.unsplash.com/600x400/?portfolio,developer",
  },
  {
    title: "AI-Powered Tool",
    desc: "Web app enhanced with AI chat features, code generation, and content automation.",
    link: "https://example.com/ai-tool",
    img: "https://source.unsplash.com/600x400/?artificial,intelligence",
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
