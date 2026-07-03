import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, Target } from "lucide-react";

const stats = [
  {
    label: "سنوات من الخبرة",
    value: "+6",
    icon: Target,
    delay: 0.1,
  },
  {
    label: "طالب متفوق",
    value: "+800",
    icon: Trophy,
    delay: 0.2,
  },
  {
    label: "نسبة النجاح",
    value: "%95",
    icon: GraduationCap,
    delay: 0.3,
  },
  {
    label: "خريج منذ 2018",
    value: "+3000",
    icon: Users,
    delay: 0.4,
  },
];

export function Stats() {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-primary-foreground">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
