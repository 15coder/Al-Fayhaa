import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 sm:py-32 md:py-40 bg-transparent">
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
            يسعدنا استقبالكم في مقر المعهد، تفضلوا بزيارتنا أو افتح الموقع على الخريطة
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
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">عنوان المعهد</h3>
                <p className="text-muted-foreground text-sm sm:text-base">سوريا — الرقة — معدان جديد</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-50 px-5 py-2.5 text-sm font-bold text-teal-700 hover:bg-teal-100 transition-colors shrink-0"
            >
              فتح في خرائط جوجل
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
