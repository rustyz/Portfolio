import { motion } from "framer-motion";
import { projects } from "../data/projects";

const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5"];
const HUES = [210, 260, 160, 30, 340, 190];

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-3">
              Featured <span className="italic">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md">
              Six real, working projects — from a deployed production agent to
              the infrastructure most AI demos skip: evals, cost routing, and
              hybrid search.
            </p>
          </div>
          <a
            href="https://github.com/rustyz"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-4 py-2 text-sm text-muted hover:text-text-primary hover:border-transparent relative group transition-colors"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
            View all on GitHub <span aria-hidden>↗</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link ?? "https://github.com/rustyz"}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative aspect-[4/3] md:aspect-auto md:h-72 rounded-3xl border border-stroke bg-surface overflow-hidden ${SPANS[i]}`}
            >
              <div
                className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 20%, hsl(${HUES[i]} 60% 55%), transparent 60%)`,
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
                aria-hidden
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="text-xs text-muted uppercase tracking-[0.2em]">{project.category}</span>
                <div>
                  <h3 className="text-2xl font-display text-text-primary mb-2">{project.title}</h3>
                  <p className="text-xs text-muted line-clamp-2 max-w-sm">{project.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="relative rounded-full">
                  <span className="absolute -inset-[2px] rounded-full accent-gradient-animated" />
                  <span className="relative flex items-center gap-2 bg-surface text-text-primary rounded-full px-5 py-2.5 text-sm">
                    View — <span className="font-display italic">{project.title}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
