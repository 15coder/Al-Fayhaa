import { motion } from "framer-motion";
import { BookOpen, Atom, BookText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tracks = [
  {
    title: "الصف التاسع",
    description: "تأسيس قوي ومكثف للمرحلة الإعدادية يضمن انتقالاً واثقاً للمرحلة الثانوية مع التركيز على المواد الأساسية.",
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-500",
    border: "border-blue-500/20",
    delay: 0.1
  },
  {
    title: "الثالث الثانوي العلمي",
    description: "تحضير شامل لاجتياز البكالوريا العلمية بتفوق، مع شرح معمق لمواد الفيزياء والكيمياء والرياضيات والعلوم.",
    icon: Atom,
    color: "bg-primary/10 text-primary",
    border: "border-primary/20",
    delay: 0.2
  },
  {
    title: "الثالث الثانوي الأدبي",
    description: "تغطية كاملة للمنهاج الأدبي بأسلوب يسهل الفهم والحفظ، مع التركيز على اللغات والفلسفة والتاريخ والجغرافيا.",
    icon: BookText,
    color: "bg-secondary/10 text-secondary",
    border: "border-secondary/20",
    delay: 0.3
  }
];

export function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary md:text-4xl mb-4"
          >
            مساراتنا التعليمية
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            برامج مخصصة تناسب احتياجات كل مرحلة، صُممت بعناية لتوجيه الطالب نحو أقصى درجات التفوق
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: track.delay }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${track.border}`}>
                <CardHeader className="text-center pb-2">
                  <div className={`mx-auto h-20 w-20 rounded-2xl flex items-center justify-center mb-6 ${track.color}`}>
                    <track.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{track.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {track.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
