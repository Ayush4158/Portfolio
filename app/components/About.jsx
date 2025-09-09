import React from "react";
import { Cards } from "./Cards";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-15 text-white overflow-hidden"
    >

      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center">
        {/* Left side: About text */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-300 to-indigo-100 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            I design and build{" "}
            <span className="font-semibold text-indigo-200">
              fast, elegant, and user-friendly
            </span>{" "}
            web experiences. My expertise lies in{" "}
            <span className="font-semibold text-indigo-200">Shopify stores</span>,{" "}
            <span className="font-semibold text-indigo-200">React dashboards</span>, and{" "}
            <span className="font-semibold text-indigo-200">Next.js AI applications</span>.  
            I value clarity, performance, and maintainability in every project.
          </p>

          {/* Skills */}
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              "Shopify",
              "Wix",
              "React",
              "Next.js",
              "HTML/CSS",
              "JavaScript",
              "UI/UX",
              "Animations",
            ].map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/40 
                           bg-white/10 shadow-sm 
                           transition-all duration-300 hover:border-indigo-300 hover:text-indigo-300 hover:shadow-indigo-400/30"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Capabilities / Cards */}
        <div className="relative">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default About;
