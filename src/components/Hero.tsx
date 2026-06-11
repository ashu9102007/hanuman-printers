"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black"
    >
      {/* Hanuman background image — pinned LEFT, zoomed to fill */}
      <motion.div
        aria-hidden
        className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/hanuman.jpg')",
          backgroundPosition: "center 35%",
        }}
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: [1.12, 1.05, 1.12] }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Fade to black on the RIGHT (and soften top/bottom) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.7) 55%, #000 72%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content — pinned RIGHT */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-5">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:ml-[50%] md:w-[46%] text-right md:text-left"
        >
          <motion.span
            variants={item}
            className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-medium text-gold"
          >
            ⭐ Shankarpally, Hyderabad
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Hanuman <span className="text-gradient-gold">Printers</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg text-[#fff7e6]/85 md:max-w-md md:ml-0 ml-auto"
          >
            Premium <strong>wedding invitation cards</strong>, business cards &
            bulk card printing — crafted with devotion and delivered on time.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-base text-[#fff7e6]/65 md:max-w-md md:ml-0 ml-auto leading-relaxed"
          >
            From grand wedding invites to everyday visiting cards, we bring your
            ideas to life with rich colours, fine paper and elegant finishing.
            Bulk orders are our speciality — consistent quality, fair prices,
            and always on time. Serving Shankarpally and nearby areas with a
            name people trust.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap gap-2 justify-end md:justify-start"
          >
            {["Wedding Cards", "Business Cards", "Bulk Orders", "Custom Design"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-xs text-gold/90"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 justify-end md:justify-start"
          >
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-semibold text-[#1a0f02] hover:scale-105 transition-transform"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="rounded-full border border-gold/40 px-6 py-3 font-semibold text-gold hover:bg-gold/10 transition-colors"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex gap-8 text-sm text-[#fff7e6]/70 justify-end md:justify-start"
          >
            <div>
              <p className="text-2xl font-bold text-gold">10k+</p>
              <p>Cards printed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">100%</p>
              <p>On-time delivery</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">Bulk</p>
              <p>Orders welcome</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 text-sm z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        ↓ scroll
      </motion.div>
    </section>
  );
}
