import { motion } from "framer-motion";
import { FileText, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoMark from "@/assets/logo-mark.png";

export function ExamDownloads() {
  return (
    <section id="exams" className="py-24 sm:py-32 md:py-40 bg-background relative overflow-hidden">
      <motion.img
        src={LogoMark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-16 -bottom-16 h-64 w-64 sm:h-80 sm:w-80 opacity-[0.06] dark:opacity-[0.08]"
        initial={{ rotate: -6 }}
        animate={{ rotate: [-6, 2, -6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-[2rem] sm:rounded-[2.5rem] shadow-xl p-7 sm:p-10 md:p-14 text-center flex flex-col items-center gap-5 sm:gap-6"
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-white">
            تحميل الأسئلة والنماذج الامتحانية
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            احصل على نماذج الأسئلة والملخصات الخاصة بجميع المسارات مباشرة عبر بوت التلجرام الرسمي الخاص بمعهد الفيحاء التعليمي.
          </p>

          <Button size="lg" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
            <a href="https://t.me/alfayhaabot" target="_blank" rel="noopener noreferrer">
              <Send className="ml-2 h-5 w-5" />
              فتح بوت الأسئلة على تلجرام
            </a>
          </Button>

          <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Download className="h-4 w-4" />
            يتم تحديث الأسئلة بشكل دوري عبر البوت
          </p>
        </motion.div>
      </div>
    </section>
  );
}
