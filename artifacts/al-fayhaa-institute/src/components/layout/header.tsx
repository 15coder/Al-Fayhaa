import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/favicon.png"
            alt="معهد الفيحاء"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-cover"
          />
          <span className="font-bold text-sm text-primary">معهد الفيحاء</span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/963934311019"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-bold px-5 py-2 hover:bg-primary/90 transition-colors shadow-sm"
        >
          سجل الآن
        </a>

        {/* Mobile: hamburger only */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-background/98 backdrop-blur-md border-b border-border/30 transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/963934311019"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary text-primary-foreground text-base font-bold py-3 text-center hover:bg-primary/90 transition-colors"
          >
            سجل الآن
          </a>
        </nav>
      </div>
    </header>
  );
}
