import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tracks", label: "المسارات" },
  { href: "#teachers", label: "المدرسون" },
  { href: "#news", label: "الأخبار" },
  { href: "#exams", label: "الأسئلة" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main bar */}
      <div className="flex h-14 items-center justify-between bg-background/90 backdrop-blur-md border-b border-border/30 px-4 shadow-sm">
        {/* Hamburger — right in RTL layout = visual left */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-foreground/70 hover:text-primary transition-colors"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop nav (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Logo + Name — always visible */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-sm text-primary leading-none">معهد الفيحاء التعليمي</span>
          <img
            src="/favicon.png"
            alt="معهد الفيحاء"
            className="h-8 w-8 rounded-lg object-cover"
          />
        </Link>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/20 transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/963934311019"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1.5 rounded-xl bg-primary text-primary-foreground text-base font-bold py-3 text-center"
          >
            سجل الآن
          </a>
        </nav>
      </div>
    </header>
  );
}
