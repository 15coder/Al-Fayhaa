import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Scalloped top edge */}
      <div className="w-full overflow-hidden leading-none -mt-px">
        <svg
          viewBox="0 0 1200 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "40px", fill: "hsl(var(--primary))" }}
        >
          <path d="M0,40 L0,20 Q25,0 50,20 Q75,40 100,20 Q125,0 150,20 Q175,40 200,20 Q225,0 250,20 Q275,40 300,20 Q325,0 350,20 Q375,40 400,20 Q425,0 450,20 Q475,40 500,20 Q525,0 550,20 Q575,40 600,20 Q625,0 650,20 Q675,40 700,20 Q725,0 750,20 Q775,40 800,20 Q825,0 850,20 Q875,40 900,20 Q925,0 950,20 Q975,40 1000,20 Q1025,0 1050,20 Q1075,40 1100,20 Q1125,0 1150,20 Q1175,40 1200,20 L1200,40 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-5 py-5 flex flex-row items-center justify-between gap-4">

        {/* RIGHT: Institute info */}
        <div className="flex items-center gap-2.5">
          <img src="/favicon.png" alt="معهد الفيحاء التعليمي" className="h-8 w-8 rounded-lg object-cover shrink-0" />
          <div className="text-right">
            <p className="font-bold text-sm leading-tight">معهد الفيحاء التعليمي</p>
            <p className="text-primary-foreground/50 text-xs">تأسس عام 2018 — الرقة، سوريا</p>
          </div>
        </div>

        {/* LEFT: Developer + Copyright */}
        <div className="flex flex-col items-end gap-0.5 text-left">
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <span>تصميم وبرمجة</span>
            <span className="font-bold text-white">نداء الرحمن عبود</span>
            <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
          <p className="text-xs text-primary-foreground/35">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>

      </div>
    </footer>
  );
}
