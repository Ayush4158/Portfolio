import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, Brain, Code2, ShoppingBag, Sparkles, TrendingUp, Waves } from "lucide-react";

function Badge({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-background/60 p-4">
      <div className="mt-0.5 rounded-md bg-foreground/10 p-2">
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-foreground/70">{desc}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    // For initial fade-in effects only
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
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
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/30 via-sky-500/20 to-emerald-400/0 blur-3xl" />
          </div>
          <div className="mx-auto max-w-6xl px-4 pt-36 pb-20">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-foreground/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  Building modern web experiences
                </div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Ayush Singh — Web Developer
                </h1>
                <p className="mt-4 text-foreground/70">
                  I craft Shopify stores, React dashboards, and Next.js AI apps.
                  1 year of hands-on experience across Shopify, Wix, React, Next.js, HTML, CSS, JavaScript and design.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-foreground/5">
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="relative mx-auto mt-6 w-full max-w-sm overflow-hidden rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl md:mt-0">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground/10">
                    <Code2 className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-semibold">Tech Stack</div>
                    <div className="text-foreground/60">Shopify · Wix · React · Next.js · HTML · CSS · JS</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                    <ShoppingBag className="h-4 w-4 text-emerald-400" />
                    <div className="mt-2 font-semibold">Shopify eCommerce</div>
                    <p className="mt-1 text-foreground/70">Conversion-focused storefronts</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                    <TrendingUp className="h-4 w-4 text-sky-400" />
                    <div className="mt-2 font-semibold">React Dashboards</div>
                    <p className="mt-1 text-foreground/70">Clean UI, real-time data</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                    <Brain className="h-4 w-4 text-indigo-400" />
                    <div className="mt-2 font-semibold">Next.js AI Apps</div>
                    <p className="mt-1 text-foreground/70">AI features with great UX</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                    <BadgeCheck className="h-4 w-4 text-amber-400" />
                    <div className="mt-2 font-semibold">1 Year Experience</div>
                    <p className="mt-1 text-foreground/70">Ready for new clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Badge icon={BadgeCheck} title="Reliable" desc="Committed to quality delivery" />
            <Badge icon={Waves} title="Responsive" desc="Mobile-first, pixel-perfect" />
            <Badge icon={Sparkles} title="Modern" desc="Clean UX, subtle animations" />
            <Badge icon={Code2} title="Standards" desc="Accessible & performant" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="mt-3 text-foreground/70">
                I design and build fast, beautiful web interfaces. My focus is on
                Shopify stores, dashboards, and AI-enabled apps using Next.js.
                I value clarity, performance and maintainability.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-foreground/80">
                <li className="rounded-md border border-border px-3 py-2">Shopify</li>
                <li className="rounded-md border border-border px-3 py-2">Wix</li>
                <li className="rounded-md border border-border px-3 py-2">React</li>
                <li className="rounded-md border border-border px-3 py-2">Next.js</li>
                <li className="rounded-md border border-border px-3 py-2">HTML/CSS</li>
                <li className="rounded-md border border-border px-3 py-2">JavaScript</li>
                <li className="rounded-md border border-border px-3 py-2">Design</li>
                <li className="rounded-md border border-border px-3 py-2">Animations</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="text-sm text-foreground/70">Capabilities</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="font-semibold">Design to Code</div>
                  <p className="mt-1 text-foreground/70">Figma to responsive, accessible UI</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="font-semibold">SEO & Performance</div>
                  <p className="mt-1 text-foreground/70">Best practices for speed</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="font-semibold">E‑commerce</div>
                  <p className="mt-1 text-foreground/70">Shopify themes, custom sections</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="font-semibold">AI Features</div>
                  <p className="mt-1 text-foreground/70">Chat, generation, assisted UX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {["Shopify", "Wix", "React", "Next.js", "HTML", "CSS", "JavaScript", "Design"].map((s) => (
              <div key={s} className="rounded-lg border border-border bg-background/60 p-4 text-center text-sm font-medium">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground">Start a project →</a>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="group overflow-hidden rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="aspect-video bg-foreground/5 grid place-items-center text-foreground/50">
                <ShoppingBag className="h-10 w-10" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">Shopify eCommerce</h3>
                <p className="mt-1 text-sm text-foreground/70">High-converting storefronts with custom sections, responsive design, and performance.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="aspect-video bg-foreground/5 grid place-items-center text-foreground/50">
                <TrendingUp className="h-10 w-10" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">React Dashboard</h3>
                <p className="mt-1 text-sm text-foreground/70">Data-rich dashboards with charts, filters, and clean UX for everyday productivity.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="aspect-video bg-foreground/5 grid place-items-center text-foreground/50">
                <Brain className="h-10 w-10" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">Next.js AI Application</h3>
                <p className="mt-1 text-sm text-foreground/70">AI-powered features like chat, content generation, and smart automation.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="mt-3 text-foreground/70">
                Tell me about your project and I’ll respond within 24–48 hours.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="font-semibold">Email</div>
                  <div className="text-foreground/70">Use the form to send a message</div>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="font-semibold">Availability</div>
                  <div className="text-foreground/70">Open to new clients and collaborations</div>
                </div>
              </div>
            </div>
            <form onSubmit={onSubmit} className="rounded-xl border border-border bg-background/60 p-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm" htmlFor="name">Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30" />
                </div>
                <div>
                  <label className="text-sm" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30" />
                </div>
                <div>
                  <label className="text-sm" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30" />
                </div>
                <button disabled={submitting} className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 disabled:opacity-60">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                {status && <p className="text-sm text-foreground/80">{status}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
