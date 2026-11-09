import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";

const spanFor = (i: number) => (i % 3 === 2 ? "md:col-span-7" : "md:col-span-5");
const hueFor = (i: number) => (i * 47) % 360;

export default function SelectedWorks() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
              Real projects — deployed agents, a live manufacturing platform, and the
              infrastructure most AI demos skip: evals, cost routing, and
              hybrid search. Cards without a public repo expand in place
              instead of linking to an empty page.
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
          {projects.map((project, i) => {
            const isExpandable = !project.link || !!project.caseStudy;
            const isExpanded = expandedId === project.id;

            const cardInner = (
              <>
                {project.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                    aria-hidden
                  />
                ) : (
                  <div
                    className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, hsl(${hueFor(i)} 60% 55%), transparent 60%)`,
                    }}
                    aria-hidden
                  />
                )}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                  aria-hidden
                />
                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" aria-hidden />
                )}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">{project.category}</span>
                  <div>
                    <h3 className="text-2xl font-display text-text-primary mb-2">{project.title}</h3>
                    <p className="text-xs text-muted line-clamp-2 max-w-sm">{project.description}</p>
                  </div>
                </div>
                {!isExpandable && (
                  <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="relative rounded-full">
                      <span className="absolute -inset-[2px] rounded-full accent-gradient-animated" />
                      <span className="relative flex items-center gap-2 bg-surface text-text-primary rounded-full px-5 py-2.5 text-sm">
                        {project.linkLabel ?? "View"} — <span className="font-display italic">{project.title}</span>
                      </span>
                    </div>
                  </div>
                )}
                {isExpandable && !isExpanded && (
                  <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 flex items-center justify-center p-6">
                    <span className="flex items-center gap-2 bg-surface text-text-primary rounded-full px-5 py-2.5 text-sm">
                      {project.video ? "Watch the demo & read the case study" : "Tap to read what's built"}{" "}
                      <span aria-hidden>+</span>
                    </span>
                  </div>
                )}
              </>
            );

            if (!isExpandable) {
              return (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true, margin: "-80px" }}
                  className={`group relative aspect-[4/3] md:aspect-auto md:h-72 rounded-3xl border border-stroke bg-surface overflow-hidden ${spanFor(i)}`}
                >
                  {cardInner}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-80px" }}
                className={isExpanded ? "md:col-span-12" : spanFor(i)}
              >
                {!isExpanded ? (
                  <motion.button
                    layout
                    type="button"
                    onClick={() => setExpandedId(project.id)}
                    aria-expanded={false}
                    className="group relative w-full text-left rounded-3xl border border-stroke bg-surface overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto md:h-72"
                  >
                    {cardInner}
                  </motion.button>
                ) : (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative w-full text-left rounded-3xl border border-stroke bg-surface overflow-hidden"
                  >
                    <ExpandedProject project={project} hue={hueFor(i)} onClose={() => setExpandedId(null)} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-stroke bg-bg/60 px-4 py-2.5">
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted">{label}</div>
        <div className="font-mono text-sm text-text-primary truncate">{value}</div>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        }}
        className="shrink-0 text-xs text-muted border border-stroke rounded-full px-3 py-1 hover:text-text-primary transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function ExpandedProject({ project, hue, onClose }: { project: Project; hue: number; onClose: () => void }) {
  return (
    <div>
      <div className="relative">
        {project.video ? (
          <video
            className="w-full aspect-video bg-black"
            src={project.video}
            poster={project.videoPoster}
            controls
            playsInline
            preload="metadata"
          />
        ) : project.image ? (
          <div className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
        ) : (
          <div
            className="h-32"
            style={{ background: `radial-gradient(circle at 30% 20%, hsl(${hue} 60% 55%), transparent 70%)` }}
          />
        )}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-xs text-muted bg-bg/70 backdrop-blur rounded-full px-3 py-1 hover:text-text-primary"
        >
          Close ✕
        </button>
      </div>
      <div className="p-6 md:p-8">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">{project.category}</span>
        <h3 className="text-2xl md:text-3xl font-display text-text-primary mt-2 mb-4">{project.title}</h3>

        {project.caseStudy ? (
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <p className="text-sm md:text-base text-muted leading-relaxed">{project.description}</p>
              {project.caseStudy.map((sec) => (
                <div key={sec.heading}>
                  <h4 className="text-lg font-display text-text-primary mb-2">{sec.heading}</h4>
                  {sec.body && <p className="text-sm text-muted leading-relaxed">{sec.body}</p>}
                  {sec.bullets && (
                    <ul className="space-y-2">
                      {sec.bullets.map((b) => (
                        <li key={b} className="text-sm text-muted leading-relaxed flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-primary/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {project.demo && (
              <aside className="md:col-span-4">
                <div className="md:sticky md:top-24 rounded-2xl border border-stroke bg-bg/40 p-5 space-y-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">Try the live demo</div>
                  <CopyField label="Username" value={project.demo.username} />
                  <CopyField label="Password" value={project.demo.password} />
                  <a
                    href={project.demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block rounded-full text-center group"
                  >
                    <span className="absolute -inset-[1px] rounded-full accent-gradient-animated" />
                    <span className="relative block bg-surface text-text-primary rounded-full px-5 py-2.5 text-sm">
                      {project.linkLabel ?? "Open live demo"} <span aria-hidden>↗</span>
                    </span>
                  </a>
                  {project.demo.note && <p className="text-xs text-muted leading-relaxed">{project.demo.note}</p>}
                </div>
              </aside>
            )}
          </div>
        ) : (
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-3xl mb-5">
            {project.details ?? project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted border border-stroke rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
