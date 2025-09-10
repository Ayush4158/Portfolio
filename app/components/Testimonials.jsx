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
        console.log(data)

        if (res.ok) {
          // Map MongoDB fields into InfiniteMovingCards format
          const formatted = data.map((r) => ({
            quote: r.message,
            name: r.name,
            image: r.file || null, // Cloudinary file URL if available
          }));
          setTestimonials(data);
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
    <div className="rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-14  bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
            What Our Client Say's About Us
          </h2>
      {testimonials.length > 0 ? (
        <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
      ) : (
        <p className="text-gray-400 py-10">No reviews yet...</p>
      )}
    </div>
  );
}
