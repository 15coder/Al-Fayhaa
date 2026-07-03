import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary md:text-4xl mb-4"
          >
            نخبة الكادر التدريسي
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            مجموعة من أكفأ الأساتذة وأصحاب الخبرة الطويلة، يجتمعون لهدف واحد: تفوق أبنائنا.
          </motion.p>
        </div>

        <Tabs defaultValue="scientific" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 rounded-xl h-auto">
              <TabsTrigger value="ninth" className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الصف التاسع</TabsTrigger>
              <TabsTrigger value="scientific" className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الثالث الثانوي العلمي</TabsTrigger>
              <TabsTrigger value="literary" className="text-base py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">الثالث الثانوي الأدبي</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ninth" className="mt-0 outline-none">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {teachersData.ninth.map((teacher, i) => (
                <TeacherCard key={i} teacher={teacher} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="scientific" className="mt-0 outline-none">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {teachersData.scientific.map((teacher, i) => (
                <TeacherCard key={i} teacher={teacher} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="literary" className="mt-0 outline-none">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {teachersData.literary.map((teacher, i) => (
                <TeacherCard key={i} teacher={teacher} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TeacherCard({ teacher }: { teacher: { subject: string, name: string } }) {
  return (
    <motion.div variants={itemVariants} className="group flex flex-col bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">{teacher.subject}</span>
      <h3 className="text-xl font-bold text-foreground">الأستاذ {teacher.name}</h3>
    </motion.div>
  );
}
