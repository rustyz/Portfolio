import { motion } from "framer-motion";

const STATS = [
  { value: "10", label: "Real Projects Built" },
  { value: "87", label: "Automated Tests Passing" },
  { value: "2", label: "Live in Production" },
];

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-6 text-center sm:text-left">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className={i > 0 ? "sm:border-l sm:border-stroke sm:pl-6" : ""}
            >
              <div className="text-5xl md:text-6xl font-display text-text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted uppercase tracking-[0.15em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
