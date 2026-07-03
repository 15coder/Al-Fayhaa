import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 py-8 flex flex-col items-center gap-5 text-center">

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

        {/* Prominent developer card */}
        <a
          href="https://needaa.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 hover:bg-secondary/20 hover:border-secondary/70 transition-all duration-300"
        >
          <span className="text-xs text-primary-foreground/60 font-medium">تصميم وبرمجة</span>
          <span className="text-sm font-extrabold text-white">نداء الرحمن عبود</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary">
            انقر هنا لرؤية الموقع الشخصي
            <ExternalLink className="h-3 w-3" />
          </span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-primary-foreground/30 pt-1 border-t border-primary-foreground/10 w-full">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معهد الفيحاء التعليمي.
        </p>
      </div>
    </footer>
  );
}
