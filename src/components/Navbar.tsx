import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <nav
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#home"
          className="w-9 h-9 rounded-full p-[1.5px] accent-gradient hover:[background-image:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)] transition-transform hover:scale-110 flex-shrink-0"
        >
          <span className="w-full h-full rounded-full bg-bg flex items-center justify-center font-display italic text-[13px]">
            RP
          </span>
        </a>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActive(link.label)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
              active === link.label
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {link.label}
          </a>
        ))}

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <a href="mailto:prishi34@gmail.com" className="relative group text-xs sm:text-sm rounded-full">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-muted group-hover:text-text-primary transition-colors">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </nav>
    </div>
  );
}
