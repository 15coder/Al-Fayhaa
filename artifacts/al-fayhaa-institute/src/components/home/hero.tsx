import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, ShieldCheck } from "lucide-react";
import VerticalLogo from "@assets/20260703_055612_1783047654649.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent min-h-screen flex items-center pt-8 sm:pt-14 pb-20 sm:pb-28" style={{ scrollSnapAlign: "start" }}>
      {/* Soft blobs */}
      <motion.div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}>
        <div className="h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-teal-400/10 blur-[80px]" />
      </motion.div>
      <motion.div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}>
        <div className="h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left: badge + title only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 text-center lg:text-right"
          >
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                مرخص من وزارة التربية والتعليم
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.4rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-primary leading-tight"
            >
              معهد الفيحاء{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-600 to-primary">
                التعليمي
              </span>
            </motion.h1>

            {/* Buttons visible only on desktop beside the title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:flex flex-row gap-3 sm:gap-4 justify-start mt-2"
            >
              <Button size="lg" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
                  سجل الآن
                  <MessageCircle className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold hover:bg-teal-50 hover:text-teal-700 hover:border-teal-400 transition-colors" asChild>
                <a href="#tracks">
                  تصفح المسارات
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: image + buttons below on all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none flex flex-col gap-5"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/5 to-teal-400/10 border border-border shadow-2xl flex items-center justify-center p-6 sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_8s_linear_infinite]" />
              <motion.img
                src={VerticalLogo} alt="شعار معهد الفيحاء التعليمي"
                className="relative z-10 w-3/4 object-contain drop-shadow-xl rounded-xl"
                initial={{ y: 20 }} animate={{ y: [20, -10, 20] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-8 right-8 h-14 w-14 rounded-2xl bg-teal-400/20 backdrop-blur-md border border-teal-400/30 flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                <div className="h-5 w-5 rounded-full bg-teal-500/60" />
              </motion.div>
              <motion.div
                className="absolute bottom-16 left-6 h-16 w-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                <div className="h-7 w-7 rounded-sm bg-primary/60 rotate-45" />
              </motion.div>
            </div>

            {/* Buttons below image — shown on mobile/tablet; hidden on desktop (shown in left col) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:hidden"
            >
              <Button size="lg" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
                  سجل الآن
                  <MessageCircle className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-13 sm:h-14 px-8 text-base font-bold hover:bg-teal-50 hover:text-teal-700 hover:border-teal-400 transition-colors" asChild>
                <a href="#tracks">
                  تصفح المسارات
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
