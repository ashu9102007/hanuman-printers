"use client";

import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917660904545"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-green-500 text-2xl shadow-lg shadow-green-500/30"
    >
      💬
    </motion.a>
  );
}
