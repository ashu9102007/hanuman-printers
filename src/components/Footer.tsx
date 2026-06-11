export default function Footer() {
  return (
    <footer className="border-t border-gold/15 py-8">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#fff7e6]/60">
        <p className="flex items-center gap-2">
          <span className="grid place-items-center h-7 w-7 rounded-full bg-gradient-to-br from-gold to-saffron text-[#1a0f02] font-bold text-xs">
            ॐ
          </span>
          Hanuman Printers — Shankarpally, Hyderabad
        </p>
        <p>© {new Date().getFullYear()} Hanuman Printers. All rights reserved.</p>
      </div>
    </footer>
  );
}
