"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useAdmin } from "./AdminContext";

// Downscale an uploaded image so it fits in browser storage.
function resizeImage(file: File, maxSize = 900): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("no canvas"));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function Gallery() {
  const { isAdmin, photos, addPhoto, removePhoto } = useAdmin();
  const fileRef = useRef<HTMLInputElement>(null);
  const [label, setLabel] = useState("");
  const [busy, setBusy] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const src = await resizeImage(file);
      addPhoto(label.trim() || "Card design", src);
      setLabel("");
    } catch {
      alert("Could not read that image. Try another file.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-deep/40">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Recent <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="mt-3 text-[#fff7e6]/70">
            A glimpse of the card designs we print. Custom designs available on
            request.
          </p>
          {isAdmin && (
            <p className="mt-2 text-xs text-gold/80">
              🔓 Admin mode — add or remove photos below
            </p>
          )}
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin upload tile */}
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-3 aspect-[4/5] rounded-2xl border-2 border-dashed border-gold/40 bg-black/30 p-5 text-center"
            >
              <div className="text-4xl">➕</div>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Photo name (optional)"
                className="w-full rounded-lg border border-gold/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-gold/60"
              />
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
              <button
                onClick={() => fileRef.current?.click()}
                disabled={busy}
                className="rounded-full bg-gradient-to-r from-saffron to-gold px-5 py-2 text-sm font-semibold text-[#1a0f02] disabled:opacity-60"
              >
                {busy ? "Uploading…" : "📷 Choose Photo"}
              </button>
            </motion.div>
          )}

          {/* Uploaded photos */}
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/15 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-black/50 backdrop-blur-sm">
                <p className="font-semibold">{p.label}</p>
                <p className="text-xs text-white/80">Card design</p>
              </div>
              {isAdmin && (
                <button
                  onClick={() => removePhoto(p.id)}
                  className="absolute top-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-red-600/90 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Delete photo"
                >
                  🗑
                </button>
              )}
            </motion.div>
          ))}

        </div>

        {/* Empty state when no photos are added yet */}
        {photos.length === 0 && (
          <p className="mt-10 text-center text-sm text-[#fff7e6]/50">
            {isAdmin
              ? "No photos yet — use the “Add Photo” tile above to upload your card designs."
              : "Card designs coming soon."}
          </p>
        )}
      </div>
    </section>
  );
}
