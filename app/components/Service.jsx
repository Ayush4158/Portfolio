"use client";

import { motion } from "framer-motion";
import { Store, Layout, Code2, Rocket, Settings, Globe } from "lucide-react";

const services = [
  {
    title: "Shopify Development",
    desc: "Custom Shopify themes, optimized storefronts, and seamless integrations to help your business sell more effectively online.",
    icon: <Store className="h-10 w-10 text-indigo-400" />,
  },
  {
    title: "Wix Websites",
    desc: "Modern, responsive, and professional Wix websites tailored to your brand with smooth animations and easy management.",
    icon: <Layout className="h-10 w-10 text-pink-400" />,
  },
  {
    title: "React Dashboards",
    desc: "Interactive dashboards, admin panels, and user-friendly web apps built using React for maximum performance.",
    icon: <Code2 className="h-10 w-10 text-green-400" />,
  },
  {
    title: "Next.js Applications",
    desc: "High-performance, SEO-optimized Next.js applications with server-side rendering and modern workflows.",
    icon: <Rocket className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Web Management",
    desc: "Complete website management including updates, optimizations, content handling, and security monitoring.",
    icon: <Settings className="h-10 w-10 text-yellow-400" />,
  },
  {
    title: "AI-Powered Features",
    desc: "Enhancing websites with AI tools like chat assistants, content generation, and workflow automation.",
    icon: <Globe className="h-10 w-10 text-purple-400" />,
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
