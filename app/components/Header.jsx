'use client'

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // X for close icon

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "service" },
    { name: "Projects", id: "projects" },
    { name: "Reviews", id: "reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 cursor-pointer drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
          LOGO
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative cursor-pointer text-gray-300 font-medium tracking-wide transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r from-indigo-500 to-pink-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-7 w-7 text-gray-300 cursor-pointer hover:text-indigo-400 transition-colors" />
            ) : (
              <Menu className="h-7 w-7 text-gray-300 cursor-pointer hover:text-indigo-400 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-gray-300 font-medium text-lg hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block mt-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 text-center text-white font-semibold shadow-md hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
