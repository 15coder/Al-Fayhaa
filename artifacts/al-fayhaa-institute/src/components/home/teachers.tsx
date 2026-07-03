import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const subjectDecorators: Record<string, { symbol: string; color: string; bg: string }> = {
  "رياضيات":          { symbol: "π",  color: "text-blue-400",   bg: "bg-blue-500/8" },
  "عربي":             { symbol: "ع",  color: "text-amber-400",  bg: "bg-amber-500/8" },
  "علوم":             { symbol: "⚗",  color: "text-emerald-400",bg: "bg-emerald-500/8" },
  "فيزياء":           { symbol: "⚡", color: "text-yellow-400", bg: "bg-yellow-500/8" },
  "فيزياء + كيمياء":  { symbol: "⚡", color: "text-yellow-400", bg: "bg-yellow-500/8" },
  "كيمياء":           { symbol: "⚗",  color: "text-purple-400", bg: "bg-purple-500/8" },
  "جغرافيا":          { symbol: "🌍", color: "text-teal-400",   bg: "bg-teal-500/8" },
  "تاريخ":            { symbol: "📜", color: "text-orange-400", bg: "bg-orange-500/8" },
  "لغة إنكليزية":     { symbol: "A",  color: "text-sky-400",    bg: "bg-sky-500/8" },
  "لغة فرنسية":       { symbol: "⚜",  color: "text-indigo-400", bg: "bg-indigo-500/8" },
  "ديانة":            { symbol: "☽",  color: "text-green-400",  bg: "bg-green-500/8" },
  "علم الأحياء":      { symbol: "🧬", color: "text-lime-400",   bg: "bg-lime-500/8" },
  "فلسفة":            { symbol: "💡", color: "text-rose-400",   bg: "bg-rose-500/8" },
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Teachers() {
  return (
    <section id="teachers" className="py-20 sm:py-28 md:py-36 bg-muted/40 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
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
          <div className="flex justify-center mb-8 sm:mb-10 -mx-4 px-4 overflow-x-auto">
            <TabsList className="bg-muted p-1 rounded-xl h-auto min-w-max">
              <TabsTrigger value="ninth" className="text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الصف التاسع</TabsTrigger>
              <TabsTrigger value="scientific" className="text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الثالث العلمي</TabsTrigger>
              <TabsTrigger value="literary" className="text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الثالث الأدبي</TabsTrigger>
            </TabsList>
          </div>

          {(["ninth", "scientific", "literary"] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0 outline-none">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
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
  const d = subjectDecorators[teacher.subject] ?? { symbol: "★", color: "text-secondary", bg: "bg-secondary/8" };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow ${d.bg} bg-card`}
    >
      {/* Full-card animated symbol background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        animate={{ rotate: [0, 4, -3, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <span className={`text-[7rem] sm:text-[8rem] font-black leading-none opacity-[0.10] group-hover:opacity-[0.18] transition-opacity duration-500 ${d.color}`}>
          {d.symbol}
        </span>
      </motion.div>

      {/* Hover top accent */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card content — RTL layout */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-2 text-right" dir="rtl">
        {/* Subject badge — top right */}
        <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full border ${d.color} border-current/30 bg-white/60 backdrop-blur-sm`}>
          {teacher.subject}
        </span>

        {/* Teacher name */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">
          الأستاذ {teacher.name}
        </h3>
      </div>
    </motion.div>
  );
}
