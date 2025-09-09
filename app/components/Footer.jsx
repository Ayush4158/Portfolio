"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">MyPortfolio</h2>
          <p className="text-sm">
            Designing and building modern, fast, and user-friendly web
            applications with passion and precision.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li> */}
            <li>
              <Link href="/policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
