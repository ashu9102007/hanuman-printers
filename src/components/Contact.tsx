"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-deep/40">
      <div className="absolute inset-0 glow-saffron opacity-60" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Visit or <span className="text-gradient-gold">Call Us</span>
          </h2>
          <p className="mt-3 text-[#fff7e6]/70 max-w-md">
            Walk in for samples or place a bulk order over the phone. We’re happy
            to help you design the perfect card.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-[#fff7e6]/75">
                  Market Road, opposite Adarsh Bank,
                  <br />
                  Shankarpally, Hyderabad — 501203
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:7660904545"
                  className="text-sm text-gold hover:underline"
                >
                  7660904545
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-sm text-[#fff7e6]/75">
                  Mon – Sat: 9:00 AM – 9:00 PM
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:7660904545"
              className="rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-semibold text-[#1a0f02] hover:scale-105 transition-transform"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/917660904545"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-400/50 px-6 py-3 font-semibold text-green-300 hover:bg-green-400/10 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-gold/20 h-80 md:h-96"
        >
          <iframe
            title="Hanuman Printers location"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Shankarpally+Market+Road+Hyderabad+501203&output=embed"
          />
        </motion.div>
      </div>
    </section>
  );
}
