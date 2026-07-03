import { MapPin, MessageCircle, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      {/* Main compact row */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
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
            <a
              href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
            >
              <MapPin className="h-4 w-4 text-secondary shrink-0" />
              معدان جديد
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-primary-foreground/40">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معهد الفيحاء التعليمي.</p>
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-secondary transition-colors"
          >
            برمجة نداء الرحمن عبود
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
