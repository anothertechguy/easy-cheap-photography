import { useState } from 'react';

// The only React island — needs useState for form submission feedback
export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest">Let's shoot</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
            Drop me a note.<br />I usually reply same day.
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
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-stone-100 rounded-3xl p-6 md:p-8 space-y-4"
          aria-label="Book a photography session"
        >
          <div>
            <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Your name</label>
            <input id="name" name="name" placeholder="Alex Rivera" required
              className="mt-2 w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="contact" className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Email or phone</label>
            <input id="contact" name="contact" placeholder="alex@example.com" required
              className="mt-2 w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="session-type" className="font-mono text-[10px] uppercase tracking-widest text-stone-500">Session</label>
            <select id="session-type" name="session"
              className="mt-2 w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary">
              <option>The Quickie — 30 min · $99</option>
              <option>The Full Session — 60 min · $175</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-stone-500">What are you thinking?</label>
            <textarea id="message" name="message" rows={4}
              placeholder="Family of four, sometime in the next couple weekends, maybe Wash Park…"
              className="mt-2 w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-primary transition-colors disabled:bg-accent disabled:cursor-not-allowed"
          >
            {sent ? 'Got it — talk soon ✓' : 'Send the note'}
          </button>
          <p className="text-[11px] text-stone-500 text-center">
            No spam, no mailing list, just a real reply from a real guy.
          </p>
        </form>
      </div>
    </section>
  );
}
