import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">

        {/* Logo + Name */}
        <div className="flex items-center gap-2.5">
          <img src="/favicon.png" alt="معهد الفيحاء التعليمي" className="h-8 w-8 rounded-lg object-cover" />
          <div className="text-right">
            <p className="font-bold text-sm leading-tight">معهد الفيحاء التعليمي</p>
            <p className="text-primary-foreground/50 text-xs">تأسس عام 2018 — الرقة، سوريا</p>
          </div>
        </div>

        {/* Developer + Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-1">
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <span>تصميم وبرمجة</span>
            <span className="font-bold text-white">نداء الرحمن عبود</span>
            <ExternalLink className="h-3 w-3" />
          </a>
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>

      </div>
    </footer>
  );
}
