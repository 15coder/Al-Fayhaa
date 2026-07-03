import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Complex Gradient Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-secondary)_0%,transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary)_0%,transparent_40%)] opacity-20" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="container relative mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            استثمر في مستقبلك، <br />
            <span className="text-secondary">وابدأ رحلة التفوق اليوم</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            المقاعد محدودة. تواصل معنا الآن عبر واتساب للاستفسار عن مواعيد الدورات وآلية التسجيل للعام الدراسي القادم.
          </p>
          
          <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold bg-white text-primary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 shadow-xl shadow-black/10 hover:scale-105" asChild>
            <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
              تواصل مع الإدارة للتسجيل
              <MessageCircle className="mr-3 h-6 w-6" />
            </a>
          </Button>
          
          <p className="mt-6 text-sm text-primary-foreground/60">
            يرد على الاستفسارات الأستاذ محمد نداء عبود مباشرة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
