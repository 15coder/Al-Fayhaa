import { MapPin, MessageCircle, ExternalLink } from "lucide-react";
import HorizontalLogo from "@assets/20260703_055249_1783047654677.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-2 rounded-lg inline-block self-start">
              <img
                src={HorizontalLogo}
                alt="معهد الفيحاء التعليمي"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-sm text-sm leading-relaxed mt-2">
              معهد الفيحاء التعليمي — تأسس عام 2018. خيارك الأول للنجاح والتفوق في الشهادتين الإعدادية والثانوية من خلال كادر تدريسي نخبوي وبرامج مكثفة.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-secondary">روابط سريعة</h3>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">عن المعهد</a>
              <a href="#tracks" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">المسارات التعليمية</a>
              <a href="#teachers" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">نخبة المدرسين</a>
              <a href="#news" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">آخر الأخبار</a>
              <a href="#exams" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">تحميل الأسئلة</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-secondary">تواصل معنا</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>بإدارة الأستاذ: محمد نداء عبود</p>
              <a
                href="https://wa.me/963934311019"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:underline w-fit"
              >
                <MessageCircle className="h-4 w-4" />
                <span dir="ltr">+963 934 311 019</span>
              </a>
              <a
                href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-secondary transition-colors w-fit"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>سوريا - الرقة - معدان جديد</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 border-t border-primary-foreground/10 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right text-xs text-primary-foreground/50">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معهد الفيحاء التعليمي.</p>
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-secondary transition-colors"
          >
            برمجة نداء الرحمن عبود
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
