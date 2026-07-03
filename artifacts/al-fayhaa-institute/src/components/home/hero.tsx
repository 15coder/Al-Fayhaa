import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft } from "lucide-react";
import VerticalLogo from "@assets/20260703_055612_1783047654649.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 sm:pt-16 md:pt-24 lg:pt-28 pb-16 sm:pb-24 md:pb-32">
      {/* Abstract Background Shapes */}
      <motion.div
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-secondary/10 blur-[80px]" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
      >
        <div className="h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary/5 dark:bg-secondary/10 blur-[100px]" />
      </motion.div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 text-center lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[2.35rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-6xl/tight font-extrabold tracking-tight text-primary dark:text-white"
            >
              معهد الفيحاء
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-primary dark:to-secondary/70">
                التعليميّ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-xl sm:text-2xl font-bold text-foreground"
            >
              نصنع <span className="text-secondary">التفوق</span>، وليس مجرد وعود
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              دورات مكثفة ومختصة تحضّر طلاب الصف التاسع والبكالوريا (علمي وأدبي) للنجاح والتفوق. نتائج حقيقية وأرقام تتحدث عن نفسها.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-2 sm:mt-4"
            >
              <Button size="lg" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
                  سجل الآن
                  <MessageCircle className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors" asChild>
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
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            {/* Visual focus replacing real photo */}
            <div className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 border border-border shadow-2xl flex items-center justify-center p-6 sm:p-8">
              {/* Dynamic shapes inside */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[gradient_8s_linear_infinite]" />

              <motion.img
                src={VerticalLogo}
                alt="شعار معهد الفيحاء التعليمي"
                className="relative z-10 w-3/4 object-contain drop-shadow-xl rounded-xl"
                initial={{ y: 20 }}
                animate={{ y: [20, -10, 20] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              {/* Floating elements */}
              <motion.div
                className="absolute top-8 right-8 sm:top-10 sm:right-10 h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-secondary/20 backdrop-blur-md border border-secondary/30 flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-secondary/60" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-6 sm:bottom-20 sm:left-8 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-sm bg-primary/60 dark:bg-secondary/60 rotate-45" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-4 h-3 w-3 rounded-full bg-secondary/70"
                animate={{ y: [-15, 15, -15], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
