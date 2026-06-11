"use client";

import { motion } from "motion/react";
import { useState } from "react";
import AdminButton from "./AdminButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#1a0f02]/70 border-b border-gold/15"
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-to-br from-gold to-saffron text-[#1a0f02] font-extrabold">
            ॐ
          </span>
          <span className="font-bold tracking-wide">
            Hanuman <span className="text-gradient-gold">Printers</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#fff7e6]/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <AdminButton />
          <a
            href="tel:7660904545"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-gold px-4 py-2 text-sm font-semibold text-[#1a0f02] hover:scale-105 transition-transform"
          >
            📞 7660904545
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden border-t border-gold/15 px-5 py-3 space-y-3"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1 text-[#fff7e6]/90 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="tel:7660904545"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-gold px-4 py-2 text-sm font-semibold text-[#1a0f02]"
            >
              📞 Call
            </a>
            <AdminButton />
          </div>
        </motion.ul>
      )}
    </motion.header>
  );
}
