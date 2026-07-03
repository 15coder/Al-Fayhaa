import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft } from "lucide-react";
import VerticalLogo from "@assets/20260703_055612_1783047654649.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background/80 backdrop-blur-sm pt-8 sm:pt-14 md:pt-20 lg:pt-24 pb-12 sm:pb-20 md:pb-28">
      {/* Soft glow blobs */}
      <motion.div
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="h-[240px] w-[240px] sm:h-[380px] sm:w-[380px] rounded-full bg-secondary/15 blur-[80px]" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
      >
        <div className="h-[280px] w-[280px] sm:h-[450px] sm:w-[450px] rounded-full bg-primary/5 blur-[100px]" />
      </motion.div>

      <div className="container relative mx-auto px-5 sm:px-6">

        {/* ── MOBILE layout: stacked text → image ── */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            تأسس عام 2018 — سوريا، الرقة
          </motion.div>

          {/* Title — one line on mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-3xl font-extrabold tracking-tight text-primary whitespace-nowrap leading-tight"
          >
            معهد الفيحاء{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-primary">
              التعليميّ
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-center text-base font-semibold text-muted-foreground leading-relaxed"
          >
            دورات مكثفة تحضّر طلاب الصف التاسع والبكالوريا للنجاح والتفوق
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-col gap-3"
          >
            <Button size="lg" className="rounded-full h-13 text-base font-bold shadow-lg shadow-primary/20" asChild>
              <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
                سجل الآن
                <MessageCircle className="mr-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 text-base font-bold hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors" asChild>
              <a href="#tracks">
                تصفح المسارات
                <ArrowLeft className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Image — below all text on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto w-full max-w-xs"
          >
            <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 border border-border shadow-xl flex items-center justify-center p-5">
              <motion.img
                src={VerticalLogo}
                alt="شعار معهد الفيحاء التعليمي"
                className="relative z-10 w-3/4 object-contain drop-shadow-xl rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── DESKTOP layout: side by side ── */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary"
            >
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              تأسس عام 2018 — سوريا، الرقة
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl xl:text-6xl font-extrabold tracking-tight text-primary leading-tight"
            >
              معهد الفيحاء
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-primary">
                التعليميّ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-xl font-bold text-foreground"
            >
              نصنع <span className="text-secondary">التفوق</span>، وليس مجرد وعود
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              دورات مكثفة ومختصة تحضّر طلاب الصف التاسع والبكالوريا (علمي وأدبي) للنجاح والتفوق.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex gap-4 mt-2"
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
                  سجل الآن
                  <MessageCircle className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-bold hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors" asChild>
                <a href="#tracks">
                  تصفح المسارات
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 border border-border shadow-2xl flex items-center justify-center p-8">
              <motion.img
                src={VerticalLogo}
                alt="شعار معهد الفيحاء التعليمي"
                className="relative z-10 w-3/4 object-contain drop-shadow-xl rounded-xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-8 right-8 h-14 w-14 rounded-2xl bg-secondary/20 backdrop-blur-md border border-secondary/30 flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <div className="h-5 w-5 rounded-full bg-secondary/60" />
              </motion.div>
              <motion.div
                className="absolute bottom-16 left-6 h-16 w-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="h-7 w-7 rounded-sm bg-primary/60 rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
