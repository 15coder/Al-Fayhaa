import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tracks", label: "المسارات" },
  { href: "#teachers", label: "المدرسون" },
  { href: "#news", label: "الأخبار" },
  { href: "#exams", label: "الأسئلة" },
  { href: "#location", label: "موقعنا" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div
        className={`rounded-2xl border px-4 h-14 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl shadow-lg border-border/50"
            : "bg-background/30 backdrop-blur-sm shadow-sm border-border/20"
        }`}
      >

        {/* Left: hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 hover:text-primary hover:bg-muted transition-colors"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Center: desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: name + icon */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="font-bold text-sm text-primary leading-none">معهد الفيحاء التعليمي</span>
          <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-secondary/40 shadow-sm shrink-0">
            <img src="/favicon.png" alt="معهد الفيحاء" className="h-full w-full object-cover" />
          </div>
        </Link>
      </div>

      {/* Mobile dropdown */}
      <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mt-1.5 rounded-2xl bg-background/80 backdrop-blur-xl shadow-md border border-border/40 px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/75 hover:bg-muted hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-primary text-primary-foreground text-base font-bold py-3 text-center">
            سجل الآن
          </a>
        </div>
      </div>
    </div>
  );
}
