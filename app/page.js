"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Clock,
  Code2,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Waves,
} from "lucide-react";
import About from "./components/About";
import { cn } from "../lib/utils";
import Service from "./components/Service";
import Project from "./components/Project";
import ContactSection from "./components/Contact";
import TrustBadge from "./components/TrustBadge";

function Badge({ icon: Icon, title, desc }) {
  return (
    <div className="group relative flex items-start gap-3 rounded-lg border border-border/70 bg-black/50 p-4 transition-all duration-300 hover:border-indigo-500 hover:shadow-md hover:-translate-y-1">
      <div className="mt-0.5 rounded-md bg-white/10 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-sm text-white/70">{desc}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      form.reset();
      setStatus("Thanks! I will get back to you shortly.");
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero */}
        <div className="relative flex flex-col w-full items-center justify-center bg-black">
          {/* Grid background */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />

          {/* Radial fade */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]"></div>

          {/* Hero Section */}
          <section id="home" className="relative z-20 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 relative pb-32 pt-20">
              <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
                {/* Left content */}
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-3 py-1 text-xs text-white/70">
                    <Sparkles className="h-3.5 w-3.5" />
                    Building modern web experiences
                  </div>

                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                    Ayush Singh — Web Developer
                  </h1>

                  <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed">
                    I craft Shopify stores, React dashboards, and Next.js AI
                    apps. With 1 year of hands-on experience across Shopify, Wix,
                    React, Next.js, HTML, CSS, and JavaScript — I turn ideas into
                    modern, scalable solutions.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:-translate-y-0.5"
                    >
                      View Projects <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2 text-sm font-medium transition-all hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-0.5"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>

                {/* Achievements / Highlights Card */}
                <div className="mx-auto mt-8 w-full max-w-sm overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:-translate-y-1 md:mt-0">
                  <div className="flex items-center gap-3 text-base text-white/90">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-bold text-lg">
                        Achievements / Highlights
                      </div>
                      <div className="text-white/60 text-sm">
                        Building trust with proven work
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    {[
                      {
                        icon: (
                          <ShoppingBag className="h-5 w-5 text-emerald-500" />
                        ),
                        title: "2 Projects",
                        desc: "Delivered to clients",
                      },
                      {
                        icon: (
                          <TrendingUp className="h-5 w-5 text-sky-500" />
                        ),
                        title: "10+ Projects",
                        desc: "Completed in agency",
                      },
                      {
                        icon: <Clock className="h-5 w-5 text-indigo-500" />,
                        title: "100% Delivery",
                        desc: "Always on time",
                      },
                      {
                        icon: (
                          <Briefcase className="h-5 w-5 text-amber-500" />
                        ),
                        title: "Agency Exp.",
                        desc: "Worked as Web Dev",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/30 bg-black/40 p-4 transition-all hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1"
                      >
                        {item.icon}
                        <div className="mt-2 font-semibold text-base text-white">
                          {item.title}
                        </div>
                        <p className="mt-1 text-white/70 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <section className="mx-auto max-w-6xl px-4 pb-16">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Badge
                  icon={BadgeCheck}
                  title="Reliable"
                  desc="Committed to quality delivery"
                />
                <Badge
                  icon={Waves}
                  title="Responsive"
                  desc="Mobile-first, pixel-perfect"
                />
                <Badge
                  icon={Sparkles}
                  title="Modern"
                  desc="Clean UX, subtle animations"
                />
                <Badge
                  icon={Code2}
                  title="Standards"
                  desc="Accessible & performant"
                />
              </div>
            </section>
          </section>
        </div>

        {/* About */}
        <section id="about" className="mx-auto max-w-full bg-black">
          <About />
        </section>

        {/* Service */}
        <section id="service" className="mx-auto max-w-full bg-black">
          <Service />
        </section>

        <TrustBadge />

        {/* Project */}
        <section id="projects" className="mx-auto max-w-full bg-black">
          <Project />
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-full bg-black">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
