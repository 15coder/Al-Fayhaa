import { motion } from "framer-motion";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

export function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden min-h-screen flex items-center justify-center py-24"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-primary to-[#0a3d4a]" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-semibold text-teal-300 mb-8"
          >
            <Navigation className="h-3.5 w-3.5" />
            موقعنا الجغرافي
          </motion.div>

          {/* Glowing icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="relative mx-auto mb-8 w-fit"
          >
            <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl mx-auto">
              <MapPin className="h-12 w-12 sm:h-14 sm:w-14 text-teal-300" />
            </div>
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{ boxShadow: "0 0 40px 10px rgba(20,184,166,0.3)" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            موقع المعهد
          </motion.h2>

          {/* Address */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed"
          >
            سوريا — الرقة — معدان جديد
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-white font-bold text-base sm:text-lg px-8 py-4 shadow-xl transition-colors duration-200"
              style={{ boxShadow: "0 8px 32px rgba(20,184,166,0.4)" }}
            >
              <ExternalLink className="h-5 w-5" />
              فتح في خرائط جوجل
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
