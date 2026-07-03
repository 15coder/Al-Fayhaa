import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const subjectDecorators: Record<string, { symbol: string; color: string }> = {
  "رياضيات":          { symbol: "π",  color: "text-blue-400" },
  "عربي":             { symbol: "ع",  color: "text-amber-400" },
  "علوم":             { symbol: "⚗",  color: "text-emerald-400" },
  "فيزياء":           { symbol: "⚡", color: "text-yellow-400" },
  "فيزياء + كيمياء":  { symbol: "⚡", color: "text-yellow-400" },
  "كيمياء":           { symbol: "⚗",  color: "text-purple-400" },
  "جغرافيا":          { symbol: "🌍", color: "text-teal-400" },
  "تاريخ":            { symbol: "📜", color: "text-orange-400" },
  "لغة إنكليزية":     { symbol: "A",  color: "text-sky-400" },
  "لغة فرنسية":       { symbol: "⚜",  color: "text-indigo-400" },
  "ديانة":            { symbol: "☽",  color: "text-green-400" },
  "علم الأحياء":      { symbol: "🧬", color: "text-lime-400" },
  "فلسفة":            { symbol: "💡", color: "text-rose-400" },
};

const teachersData = {
  ninth: [
    { subject: "رياضيات", name: "جاسم الجاسم" },
    { subject: "عربي", name: "حمود الجابر" },
    { subject: "علوم", name: "ياسر السفيرة" },
    { subject: "فيزياء + كيمياء", name: "دحام السلمان" },
    { subject: "جغرافيا", name: "محمد نداء عبود" },
    { subject: "تاريخ", name: "عبد الله العلي" },
    { subject: "لغة إنكليزية", name: "فواز الدليمي" },
    { subject: "لغة فرنسية", name: "محمد النعمات" },
    { subject: "ديانة", name: "عبد الله العلي" },
  ],
  scientific: [
    { subject: "رياضيات", name: "محسن الكرط / أسعد الأحمد" },
    { subject: "عربي", name: "حمود الجابر" },
    { subject: "فيزياء", name: "دحام السلمان" },
    { subject: "كيمياء", name: "خالد العطية" },
    { subject: "علم الأحياء", name: "فواز العجيل" },
    { subject: "لغة إنكليزية", name: "حسان الموسى" },
    { subject: "لغة فرنسية", name: "محمد النعمات" },
    { subject: "ديانة", name: "عبد الله العلي" },
  ],
  literary: [
    { subject: "فلسفة", name: "محمد درويش" },
    { subject: "عربي", name: "حمود الجابر" },
    { subject: "جغرافيا", name: "محمد نداء عبود" },
    { subject: "تاريخ", name: "عبد الله العلي" },
    { subject: "لغة إنكليزية", name: "فواز الدليمي" },
    { subject: "لغة فرنسية", name: "محمد النعمات" },
    { subject: "ديانة", name: "عبد الله العلي" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Teachers() {
  return (
    <section id="teachers" className="py-24 sm:py-32 md:py-40 bg-muted/40 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-primary md:text-4xl mb-3 sm:mb-4 dark:text-white"
          >
            نخبة الكادر التدريسي
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base sm:text-lg"
          >
            مجموعة من أكفأ الأساتذة وأصحاب الخبرة الطويلة، يجتمعون لهدف واحد: تفوق أبنائنا.
          </motion.p>
        </div>

        <Tabs defaultValue="scientific" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 sm:mb-12 -mx-4 px-4 overflow-x-auto">
            <TabsList className="bg-muted p-1 rounded-xl h-auto min-w-max">
              <TabsTrigger value="ninth" className="text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الصف التاسع</TabsTrigger>
              <TabsTrigger value="scientific" className="text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الثالث الثانوي العلمي</TabsTrigger>
              <TabsTrigger value="literary" className="text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الثالث الثانوي الأدبي</TabsTrigger>
            </TabsList>
          </div>

          {(["ninth", "scientific", "literary"] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0 outline-none">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {teachersData[tab].map((teacher, i) => (
                  <TeacherCard key={i} teacher={teacher} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function TeacherCard({ teacher }: { teacher: { subject: string; name: string } }) {
  const decorator = subjectDecorators[teacher.subject] ?? { symbol: "★", color: "text-secondary" };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group flex flex-col bg-card border border-border p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:border-secondary/40 relative overflow-hidden"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Decorative subject symbol — large, behind content */}
      <motion.span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute -bottom-3 -left-2 text-[6rem] leading-none font-black opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-500 ${decorator.color}`}
        animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.06, 0.97, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        {decorator.symbol}
      </motion.span>

      {/* Small floating badge top-left */}
      <motion.span
        aria-hidden="true"
        className={`absolute top-4 left-4 text-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${decorator.color}`}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        {decorator.symbol}
      </motion.span>

      {/* Card content */}
      <span className="text-xs sm:text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">
        {teacher.subject}
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-foreground">الأستاذ {teacher.name}</h3>
    </motion.div>
  );
}
