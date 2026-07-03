import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-16 sm:py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-primary md:text-4xl mb-3 sm:mb-4"
          >
            موقع المعهد
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base sm:text-lg"
          >
            يسعدنا استقبالكم في مقر المعهد، تفضلوا بزيارتنا أو تصفح الموقع مباشرة على الخريطة
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-[1.75rem] sm:rounded-[2rem] border border-border bg-card shadow-lg overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8">
            <div className="flex items-center gap-4 text-center sm:text-right flex-col sm:flex-row">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">عنوان المعهد</h3>
                <p className="text-muted-foreground text-sm sm:text-base">سوريا - الرقة - معدان جديد</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-5 py-2.5 text-sm font-bold text-secondary hover:bg-secondary/20 transition-colors shrink-0"
            >
              فتح في خرائط جوجل
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-64 sm:h-80 md:h-96 w-full overflow-hidden border-t border-border"
            aria-label="فتح موقع المعهد في خرائط جوجل"
          >
            <iframe
              title="موقع معهد الفيحاء التعليمي على الخريطة"
              src="https://maps.google.com/maps?q=%D9%85%D8%B9%D8%AF%D8%A7%D9%86%20%D8%AC%D8%AF%D9%8A%D8%AF%D8%8C%20%D8%A7%D9%84%D8%B1%D9%82%D8%A9%2C%20%D8%B3%D9%88%D8%B1%D9%8A%D8%A7&z=12&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[15%] contrast-[1.05] transition-transform duration-500 pointer-events-none group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors" />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-4 py-2 text-xs sm:text-sm font-bold text-primary shadow-lg border border-border">
              <MapPin className="h-4 w-4 text-secondary" />
              اضغط لفتح الموقع في خرائط جوجل
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
