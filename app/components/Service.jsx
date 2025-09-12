"use client";

import { motion } from "framer-motion";
import { Store, Layout, Code2, Settings, Share2, Video } from "lucide-react";

const services = [
  {
    title: "Shopify Development & Management",
    desc: "Custom Shopify stores with tailored themes, optimized checkout flows, and ongoing store management to boost sales and ensure smooth operations.",
    icon: <Store className="h-10 w-10 text-indigo-400" />,
  },
  {
    title: "Wix Website Development & Management",
    desc: "Professional, responsive Wix websites with stunning designs, smooth animations, and complete website management for effortless updates.",
    icon: <Layout className="h-10 w-10 text-pink-400" />,
  },
  {
    title: "Website Development",
    desc: "Modern, responsive websites built with clean code, fast load times, and an emphasis on user experience — perfect for businesses and startups.",
    icon: <Code2 className="h-10 w-10 text-green-400" />,
  },
  {
    title: "Website Management",
    desc: "End-to-end website care including regular updates, bug fixes, performance optimization, content management, and security monitoring.",
    icon: <Settings className="h-10 w-10 text-yellow-400" />,
  },
  {
    title: "Content Creation",
    desc: "Creative assets that elevate your brand — banners, promo videos, reels, and other engaging content to boost your online presence.",
    icon: <Video className="h-10 w-10 text-orange-400" />, // 🎥 Perfect for videos/reels/banners
  },
  {
    title: "Social Media Management",
    desc: "Strategic social media management — from content planning and posting to engagement and growth strategies across all major platforms.",
    icon: <Share2 className="h-10 w-10 text-purple-400" />, // 🔗 Great for social sharing & growth
  },
];


const Service = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Pulsing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-16 text-white tracking-tight">
          Our <span className="text-indigo-500">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.07 }}
              className="group relative rounded-2xl border border-slate-700/80 
                         bg-slate-800/60 backdrop-blur-xl 
                         p-8 shadow-lg hover:shadow-indigo-500/30 
                         transition-all overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
