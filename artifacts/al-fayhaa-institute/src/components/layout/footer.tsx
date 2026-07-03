import HorizontalLogo from "@assets/20260703_055249_1783047654677.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-2 rounded-lg inline-block self-start">
              <img 
                src={HorizontalLogo} 
                alt="معهد الفيحاء التعليمي" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-sm text-sm leading-relaxed mt-4">
              معهد الفيحاء التعليمي — تأسس عام 2018. خيارك الأول للنجاح والتفوق في الشهادتين الإعدادية والثانوية من خلال كادر تدريسي نخبوي وبرامج مكثفة.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-secondary">روابط سريعة</h3>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">عن المعهد</a>
              <a href="#tracks" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">المسارات التعليمية</a>
              <a href="#teachers" className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary">نخبة المدرسين</a>
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
                className="inline-flex items-center text-secondary hover:underline"
              >
                <span dir="ltr">+963 934 311 019</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/50">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معهد الفيحاء التعليمي.</p>
        </div>
      </div>
    </footer>
  );
}
