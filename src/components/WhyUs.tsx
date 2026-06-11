"use client";

import { motion } from "motion/react";

const points = [
  { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround even on large bulk orders." },
  { icon: "💰", title: "Best Prices", desc: "Affordable rates without compromising quality." },
  { icon: "🎯", title: "Premium Quality", desc: "Sharp printing, rich colours and fine finishing." },
  { icon: "🤝", title: "Trusted Locally", desc: "A familiar name in Shankarpally for quality cards." },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Why Choose <span className="text-gradient-gold">Us</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center rounded-2xl border border-gold/15 bg-deep/50 p-6"
            >
              <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-gradient-to-br from-saffron/25 to-gold/25 text-3xl">
                {p.icon}
              </div>
              <h3 className="mt-4 font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-[#fff7e6]/70">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
