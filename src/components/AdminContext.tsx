"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Photo = { id: string; label: string; src: string };

type AdminCtx = {
  isAdmin: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
  photos: Photo[];
  addPhoto: (label: string, src: string) => void;
  removePhoto: (id: string) => void;
};

const Ctx = createContext<AdminCtx | null>(null);

// Admin credentials
const ADMIN_USER = "ashu";
const ADMIN_PASS = "9107";

const AUTH_KEY = "hanuman_admin";
const PHOTO_KEY = "hanuman_photos";

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  // Load saved state from the browser
  useEffect(() => {
    try {
      setIsAdmin(localStorage.getItem(AUTH_KEY) === "1");
      const raw = localStorage.getItem(PHOTO_KEY);
      if (raw) setPhotos(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (next: Photo[]) => {
    setPhotos(next);
    try {
      localStorage.setItem(PHOTO_KEY, JSON.stringify(next));
    } catch {
      alert(
        "Could not save photo — browser storage is full. Try a smaller image."
      );
    }
  };

  const login = (user: string, pass: string) => {
    if (user.trim() === ADMIN_USER && pass === ADMIN_PASS) {
      setIsAdmin(true);
      try {
        localStorage.setItem(AUTH_KEY, "1");
      } catch {}
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch {}
  };

  const addPhoto = (label: string, src: string) => {
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : String(Date.now());
    persist([{ id, label, src }, ...photos]);
  };

  const removePhoto = (id: string) => {
    persist(photos.filter((p) => p.id !== id));
  };

  return (
    <Ctx.Provider
      value={{ isAdmin, login, logout, photos, addPhoto, removePhoto }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAdmin must be used inside <AdminProvider>");
  return ctx;
}
