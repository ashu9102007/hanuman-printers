"use client";

import { motion } from "motion/react";

const services = [
  {
    icon: "💍",
    title: "Wedding Invitation Cards",
    desc: "Elegant traditional & modern designs, premium paper, gold foiling and custom matter.",
  },
  {
    icon: "🪔",
    title: "Festival & Function Cards",
    desc: "Housewarming, naming ceremony, pooja & event invitations printed in bulk.",
  },
  {
    icon: "💼",
    title: "Business Cards",
    desc: "Professional visiting cards with matte, glossy and textured finishes.",
  },
  {
    icon: "📜",
    title: "Normal & Greeting Cards",
    desc: "Everyday cards, thank-you cards and greeting cards at affordable rates.",
  },
  {
    icon: "📦",
    title: "Bulk Order Printing",
    desc: "Large quantity orders handled with consistent quality and fast turnaround.",
  },
  {
    icon: "🎨",
    title: "Custom Design",
    desc: "Bring your idea — our team designs and prints exactly what you imagine.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mt-3 text-[#fff7e6]/70">
            Every kind of card you need — printed with precision and delivered on
            time.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gold/15 bg-deep/60 p-6 hover:border-gold/40 transition-colors"
            >
              <div className="grid place-items-center h-14 w-14 rounded-xl bg-gradient-to-br from-saffron/20 to-gold/20 text-3xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[#fff7e6]/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
