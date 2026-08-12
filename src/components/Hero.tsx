import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ROLES = ["AI Engineer", "LLM Builder", "Backend Developer", "Systems Thinker"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, delay: 0.3 },
        "<"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gradient background — no video, see conversation for why */}
      <div
        className="absolute inset-0 accent-gradient-animated opacity-[0.08]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, transparent 0%, hsl(var(--bg)) 70%)",
        }}
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" aria-hidden />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Portfolio — 2026
        </p>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Rishi Pandey
        </h1>
        <p className="blur-in text-lg md:text-xl text-muted mb-2">
          A{" "}
          <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">
            {ROLES[roleIndex]}
          </span>{" "}
          shipping real, tested software.
        </p>
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Building working AI agents and backend systems end to end — from a
          production LangGraph chatbot to eval infrastructure and hybrid
          retrieval pipelines.
        </p>
        <div className="blur-in inline-flex gap-4">
          <a
            href="#work"
            className="rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:scale-105 transition-transform"
          >
            See work
          </a>
          <a
            href="mailto:prishi34@gmail.com"
            className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:scale-105 hover:border-transparent transition-all relative group"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-3 text-muted">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
