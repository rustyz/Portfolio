import { useEffect, useRef } from "react";
import gsap from "gsap";

const CONTACTS = [
  { label: "Work email", value: "rishi.pandey@tus.ie", href: "mailto:rishi.pandey@tus.ie" },
  { label: "Personal email", value: "prishi34@gmail.com", href: "mailto:prishi34@gmail.com" },
  { label: "Phone", value: "+353 89 973 2098", href: "tel:+353899732098" },
  {
    label: "LinkedIn",
    value: "in/rishi-pandey-aiconsultation",
    href: "https://www.linkedin.com/in/rishi-pandey-aiconsultation",
    external: true,
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/rustyz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rishi-pandey-aiconsultation" },
];

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div
        className="absolute inset-0 accent-gradient-animated opacity-[0.06]"
        aria-hidden
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="overflow-hidden mb-16 md:mb-24 select-none" aria-hidden>
          <div ref={marqueeRef} className="flex whitespace-nowrap text-6xl md:text-8xl font-display italic text-stroke">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="mr-8">
                BUILDING THE FUTURE •{" "}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Get in touch</p>
          <h2 className="text-4xl md:text-6xl font-display italic text-text-primary mb-10">
            Let's build something real.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="relative group flex items-center justify-between gap-4 rounded-2xl border border-stroke bg-surface/60 px-5 py-4 hover:border-transparent transition-all"
              >
                <span className="absolute -inset-[1px] rounded-2xl accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted">{c.label}</span>
                  <span className="block text-sm md:text-base text-text-primary truncate">{c.value}</span>
                </span>
                <span aria-hidden className="text-muted group-hover:text-text-primary">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted hover:text-text-primary transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for projects
          </div>
        </div>
      </div>
    </footer>
  );
}
