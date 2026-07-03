import { ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 py-6 flex flex-col items-center gap-4 text-center">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="معهد الفيحاء التعليمي"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <div className="text-right">
            <p className="font-bold text-base leading-tight">معهد الفيحاء التعليمي</p>
            <p className="text-primary-foreground/60 text-xs">تأسس عام 2018 — الرقة، سوريا</p>
          </div>
        </div>

        {/* License badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/80">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary shrink-0" />
          مرخص من وزارة التربية والتعليم
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-primary-foreground/40 pt-1 border-t border-primary-foreground/10 w-full justify-between">
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
