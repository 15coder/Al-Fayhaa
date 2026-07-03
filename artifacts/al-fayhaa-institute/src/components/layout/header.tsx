import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#tracks", label: "المسارات" },
  { href: "#teachers", label: "الكادر التدريسي" },
  { href: "#news", label: "الأخبار" },
  { href: "#exams", label: "الأسئلة" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 sm:h-18 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/favicon.png"
            alt="معهد الفيحاء التعليمي"
            className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl object-cover shadow-sm"
          />
          <span className="hidden sm:block text-sm font-bold text-primary leading-tight">
            معهد الفيحاء<br />
            <span className="text-secondary text-xs font-semibold">التعليمي</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild className="hidden sm:inline-flex rounded-full px-6 font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-1">
            <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-5 w-5" />
              سجل الآن
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
            aria-label="فتح القائمة"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-border/40 bg-background transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full rounded-full font-bold h-12">
            <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-5 w-5" />
              سجل الآن
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
