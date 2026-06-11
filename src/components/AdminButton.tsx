"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useAdmin } from "./AdminContext";

export default function AdminButton() {
  const { isAdmin, login, logout } = useAdmin();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user, pass)) {
      setOpen(false);
      setUser("");
      setPass("");
      setError("");
    } else {
      setError("Wrong username or password");
    }
  };

  if (isAdmin) {
    return (
      <button
        onClick={logout}
        className="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold text-gold hover:bg-gold/10 transition-colors"
        title="You are logged in as admin"
      >
        🔓 Logout
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-gold/30 px-4 py-1.5 text-xs font-semibold text-[#fff7e6]/80 hover:text-gold hover:border-gold/50 transition-colors"
      >
        🔐 Admin
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.form
              onClick={(e) => e.stopPropagation()}
              onSubmit={submit}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="w-full max-w-sm rounded-2xl border border-gold/25 bg-deep p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gradient-gold">
                  Admin Login
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xl text-[#fff7e6]/60 hover:text-gold"
                >
                  ✕
                </button>
              </div>

              <label className="mt-5 block text-xs text-[#fff7e6]/70">
                Username
              </label>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                autoFocus
                className="mt-1 w-full rounded-lg border border-gold/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-gold/60"
                placeholder="Enter username"
              />

              <label className="mt-4 block text-xs text-[#fff7e6]/70">
                Password
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gold/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-gold/60"
                placeholder="Enter password"
              />

              {error && (
                <p className="mt-3 text-xs text-red-400">⚠ {error}</p>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-gradient-to-r from-saffron to-gold py-2.5 font-semibold text-[#1a0f02] hover:scale-[1.02] transition-transform"
              >
                Login
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
