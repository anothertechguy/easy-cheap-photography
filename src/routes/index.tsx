import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Easy Cheap Photography — Denver Portraits, Same-Day Delivery" },
      {
        name: "description",
        content:
          "Affordable Denver portrait photography. Pro camera, no awkward lighting rigs. Unedited high-res photos delivered to your phone the same day.",
      },
      { property: "og:title", content: "Easy Cheap Photography — Denver Portraits" },
      {
        property: "og:description",
        content:
          "Just a guy with a great camera. Affordable Denver portraits, delivered before we even say goodbye.",
      },
    ],
  }),
  component: Index,
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function Index() {
  const scrollY = useParallax();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero scrollY={scrollY} />
      <Differentiators />
      <Gallery scrollY={scrollY} />
      <About />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display font-extrabold text-xl tracking-tighter">EASYCHEAP</span>
          <span className="font-mono text-[10px] bg-accent/10 text-accent px-1.5 py-0.5 rounded">
            DENVER
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#gallery" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">
            The Deal
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </a>
          <a
            href="#book"
            className="bg-foreground text-background px-4 py-2 rounded-full hover:bg-primary transition-colors"
          >
            Book Session
          </a>
        </div>
        <a
          href="#book"
          className="md:hidden bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium"
        >
          Book
        </a>
      </div>
    </nav>
  );
}

function Hero({ scrollY }: { scrollY: number }) {
  return (
    <section id="top" className="relative h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={hero}
          alt="Denver family portrait at golden hour"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-parallax will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.05)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl animate-fade-up">
          <span className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2 mb-6">
            <span className="size-1.5 bg-accent rounded-full animate-pulse" />
            Serving Denver &amp; the Front Range
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-balance mb-6 leading-[0.95]">
            Just a guy with a <span className="text-primary italic">great</span> camera.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 text-pretty mb-10 leading-relaxed max-w-xl">
            High-end portraits without the studio ego. No umbrellas, no weird poses. Just natural
            photos of you — delivered to your phone before we say goodbye.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#book"
              className="px-7 py-4 bg-foreground text-background font-bold rounded-xl text-base md:text-lg hover:bg-primary transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-foreground/10"
            >
              Book 30 mins for $99
            </a>
            <a
              href="#gallery"
              className="px-6 py-4 font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              See the work →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
        <span>Shot on professional mirrorless</span>
        <span>Unedited · High resolution</span>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    {
      no: "01",
      tag: "The Speed",
      title: "Instant Delivery",
      body: "I dump every high-res file straight to your phone or laptop on-site. A full set lands in your inbox within the hour — no waiting weeks for a download link.",
    },
    {
      no: "02",
      tag: "The Vibe",
      title: "No Lighting Gear",
      body: "No umbrellas, no crew, no tangled cords. It's just two people hanging out in the park. Natural light, natural you, zero awkwardness.",
    },
    {
      no: "03",
      tag: "The Files",
      title: "Zero Edits",
      body: "You get the raw, unedited beauty of professional glass and sensors. No filters, no Photoshop — just high-resolution honesty you actually look like.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            What makes it easy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
            The pro-camera shortcut.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {items.map((it, i) => (
            <RevealItem key={it.no} item={it} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealItem({
  item,
  delay,
}: {
  item: { no: string; tag: string; title: string; body: string };
  delay: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="font-mono text-xs text-primary mb-4 block uppercase tracking-widest">
        {item.no}. {item.tag}
      </span>
      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 tracking-tight">
        {item.title}
      </h3>
      <p className="text-stone-600 leading-relaxed">{item.body}</p>
    </div>
  );
}

function Gallery({ scrollY }: { scrollY: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  // Subtle parallax offsets for the alternating columns
  const colA = scrollY * 0.04;
  const colB = scrollY * -0.04;

  const col1 = [
    { src: g1, alt: "Woman laughing in a sunlit field", ratio: "aspect-[2/3]" },
    { src: g2, alt: "Child smiling in golden bokeh", ratio: "aspect-square" },
  ];
  const col2 = [
    { src: g3, alt: "Couple walking at Red Rocks", ratio: "aspect-square" },
    { src: g4, alt: "Outdoor headshot portrait", ratio: "aspect-[2/3]" },
  ];
  const col3 = [
    { src: g5, alt: "Family on a park bench in autumn", ratio: "aspect-[2/3]" },
    { src: g6, alt: "Golden retriever in golden hour light", ratio: "aspect-square" },
  ];
  const col4 = [
    { src: g7, alt: "Artist in a sunlit studio", ratio: "aspect-square" },
    { src: g8, alt: "Man leaning against a brick wall in LoDo", ratio: "aspect-[2/3]" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Sample Shots
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
              Straight off the memory card.
            </h2>
            <p className="text-stone-600 mt-3 max-w-md">
              Exactly the files you'd get — no edits, no filters, no fuss.
            </p>
          </div>
          <span className="font-mono text-[10px] hidden md:block uppercase tracking-widest text-stone-500">
            Shot in Denver, CO
          </span>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColumnStack offset={colA} items={col1} delay={0} shown={shown} />
          <ColumnStack offset={colB} items={col2} delay={120} shown={shown} pad />
          <ColumnStack offset={colA} items={col3} delay={240} shown={shown} />
          <ColumnStack offset={colB} items={col4} delay={360} shown={shown} pad />
        </div>
      </div>
    </section>
  );
}

function ColumnStack({
  items,
  offset,
  delay,
  shown,
  pad,
}: {
  items: { src: string; alt: string; ratio: string }[];
  offset: number;
  delay: number;
  shown: boolean;
  pad?: boolean;
}) {
  return (
    <div
      className={`space-y-4 will-change-transform ${pad ? "md:pt-12" : ""}`}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {items.map((it, i) => (
        <div
          key={it.src}
          className={`w-full ${it.ratio} bg-stone-100 rounded-2xl overflow-hidden group transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
            transitionDelay: `${delay + i * 80}ms`,
          }}
        >
          <img
            src={it.src}
            alt={it.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <section className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            About the guy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
            Not a studio. <br />
            Just a Denver buddy with nice glass.
          </h2>
          <div className="mt-6 space-y-4 text-stone-600 leading-relaxed text-lg max-w-xl">
            <p>
              This is a one-person side hustle. I bring the same camera body and lenses a working
              pro would bring — and I charge a fraction of what they do.
            </p>
            <p>
              I don't do events, weddings, or anything that needs a three-person crew. I do
              portraits: families, couples, individuals, headshots. We pick a spot, we wander, we
              chat, we make some great frames. That's it.
            </p>
            <p className="text-foreground font-medium">
              You'll have your photos before you get back to the car.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          <Stat label="Photos delivered" value="100%" sub="unedited & full-res" />
          <Stat label="Editing time" value="0 hrs" sub="what you see is what you get" />
          <Stat label="Crew size" value="1" sub="that's me, hi" />
          <Stat label="Delivery" value="< 1 hr" sub="straight to your phone" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-background rounded-2xl p-5 border border-border">
      <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{label}</div>
      <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-primary">
        {value}
      </div>
      <div className="text-xs text-stone-500 mt-1">{sub}</div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-foreground text-background rounded-t-[40px]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            Simple pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold mt-4 tracking-tight">
            Pick a session.
          </h2>
          <p className="text-background/60 mt-4 max-w-md mx-auto">
            No hidden fees. No upsells. You keep every single photo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <PricingCard
            tag="The Quickie"
            sub="Perfect for headshots, LinkedIn, or a quick set for Instagram."
            price="$99"
            features={[
              "30 minute session",
              "50+ unedited high-res shots",
              "One Denver Metro location",
              "Instant on-site phone transfer",
            ]}
            ctaLabel="Book 30 Mins"
            ctaHref="#book"
          />
          <PricingCard
            highlight
            tag="The Full Session"
            sub="Best for families, couples, and anyone who wants room to wander."
            price="$175"
            features={[
              "60 minute session",
              "100+ unedited high-res shots",
              "Up to 2 Denver locations",
              "All originals delivered within the hour",
            ]}
            ctaLabel="Book 60 Mins"
            ctaHref="#book"
          />
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-background/50 text-sm italic leading-relaxed">
            "Literally the easiest photos I've ever had taken. I had my headshots on my laptop by
            the time I got to my car."
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-background/40">
            — Sarah G., Denver
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  tag,
  sub,
  price,
  features,
  ctaLabel,
  ctaHref,
  highlight,
}: {
  tag: string;
  sub: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-8 md:p-10 rounded-3xl bg-background/5 hover:bg-background/10 transition-colors relative group ${
        highlight ? "border-2 border-primary" : "border border-background/10"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
          Best Value
        </div>
      )}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{tag}</h3>
          <p className="text-background/60 text-sm mt-1 max-w-[26ch]">{sub}</p>
        </div>
        <span className="font-mono text-primary font-bold text-lg">{price}</span>
      </div>
      <ul className="space-y-3.5 mb-10">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-background/85">
            <span className="text-primary font-mono">+</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`block w-full text-center py-4 font-bold rounded-xl transition-all ${
          highlight
            ? "bg-primary text-background hover:scale-[1.02]"
            : "bg-background text-foreground group-hover:bg-primary group-hover:text-background"
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}

function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            Let's shoot
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
            Drop me a note. <br />I usually reply same day.
          </h2>
          <p className="text-stone-600 mt-5 max-w-md leading-relaxed">
            Tell me roughly when you're free and what you're thinking. We'll figure out a Denver
            spot together — park, neighborhood, mountains, your backyard, whatever feels right.
          </p>
          <div className="mt-8 space-y-2 font-mono text-sm">
            <div className="text-stone-500 text-[10px] uppercase tracking-widest">Or just email</div>
            <a
              href="mailto:hello@easycheapphotography.com"
              className="text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40"
            >
              hello@easycheapphotography.com
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-stone-100 rounded-3xl p-6 md:p-8 space-y-4"
        >
          <Field label="Your name" name="name" placeholder="Alex Rivera" />
          <Field label="Email or phone" name="contact" placeholder="alex@example.com" />
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
              Session
            </label>
            <select className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary">
              <option>The Quickie — 30 min · $99</option>
              <option>The Full Session — 60 min · $175</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
              What are you thinking?
            </label>
            <textarea
              rows={4}
              placeholder="Family of four, sometime in the next couple weekends, maybe Wash Park…"
              className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-primary transition-colors disabled:bg-accent disabled:cursor-not-allowed"
          >
            {sent ? "Got it — talk soon ✓" : "Send the note"}
          </button>
          <p className="text-[11px] text-stone-500 text-center">
            No spam, no mailing list, just a real reply from a real guy.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-widest text-stone-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold tracking-tighter">EASYCHEAP</span>
          <span className="text-stone-500 text-xs font-mono">EST. 2026</span>
        </div>
        <div className="text-stone-500 text-xs font-mono uppercase tracking-widest text-center">
          Based in Denver, Colorado · Just a guy with a camera
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-stone-500 hover:text-foreground transition-colors">
            Instagram
          </a>
          <a
            href="mailto:hello@easycheapphotography.com"
            className="text-stone-500 hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
