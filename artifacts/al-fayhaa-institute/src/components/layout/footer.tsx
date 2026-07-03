import { MapPin, MessageCircle, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground relative z-10">
      {/* Main compact row */}
      <div className="container mx-auto px-5 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8">

          {/* Logo + Name */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src="/favicon.png"
              alt="معهد الفيحاء التعليمي"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div>
              <p className="font-bold text-base leading-tight">معهد الفيحاء التعليمي</p>
              <p className="text-primary-foreground/60 text-xs">تأسس عام 2018 — الرقة، سوريا</p>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "#tracks", label: "المسارات" },
              { href: "#teachers", label: "المدرسون" },
              { href: "#news", label: "الأخبار" },
              { href: "#exams", label: "الأسئلة" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/963934311019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              <span dir="ltr">+963 934 311 019</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60">
              <MapPin className="h-4 w-4 text-secondary shrink-0" />
              معدان جديد
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/40">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معهد الفيحاء التعليمي.
          </p>

          {/* Prominent developer credit */}
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary hover:bg-secondary/20 hover:border-secondary/70 transition-all duration-200"
          >
            <Sparkles className="h-3 w-3 group-hover:scale-110 transition-transform" />
            برمجة نداء الرحمن عبود
          </a>
        </div>
      </div>
    </footer>
  );
}
