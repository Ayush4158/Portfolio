"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/review");
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          // ✅ Format data for InfiniteMovingCards
          const formatted = data.map((r) => ({
            message: r.message, // ✅ fixed: InfiniteMovingCards expects "message", not "quote"
            name: r.name,
            image: r.file || null, // Cloudinary file URL
          }));
          setTestimonials(formatted);
        } else {
          console.error("Error fetching reviews:", data.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-16 bg-black relative overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-14 bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent text-center leading-tight max-w-xl sm:max-w-3xl">
        What Our Clients Say About Us
      </h2>

      {/* Testimonials */}
      {testimonials.length > 0 ? (
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
          className="w-full"
        />
      ) : (
        <p className="text-gray-400 text-center text-sm sm:text-base py-6 sm:py-10">
          No reviews yet...
        </p>
      )}
    </section>
  );
}
