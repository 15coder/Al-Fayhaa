import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-14 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8"
        >
          <div className="flex items-center gap-4 text-center sm:text-right flex-col sm:flex-row">
            <div className="h-14 w-14 shrink-0 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
              <MapPin className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">موقع المعهد</h3>
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
        </motion.div>
      </div>
    </section>
  );
}
