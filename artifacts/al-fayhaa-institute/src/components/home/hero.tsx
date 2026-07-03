import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft } from "lucide-react";
import VerticalLogo from "@assets/20260703_055612_1783047654649.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[80px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary lg:self-start">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              معهد الفيحاء التعليمي — تأسس عام 2018
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl/tight">
              نصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">التفوق</span>,<br />
              وليس مجرد وعود.
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              دورات مكثفة ومختصة تحضّر طلاب الصف التاسع والبكالوريا (علمي وأدبي) للنجاح والتفوق. نتائج حقيقية وأرقام تتحدث عن نفسها.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
                  سجل الآن
                  <MessageCircle className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-bold hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors" asChild>
                <a href="#tracks">
                  تصفح المسارات
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Visual focus replacing real photo */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 border border-border shadow-2xl flex items-center justify-center p-8">
              {/* Dynamic shapes inside */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[gradient_8s_linear_infinite]" />
              
              <motion.img 
                src={VerticalLogo} 
                alt="شعار معهد الفيحاء التعليمي" 
                className="relative z-10 w-3/4 object-contain drop-shadow-xl rounded-xl"
                initial={{ y: 20 }}
                animate={{ y: [20, -10, 20] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-10 right-10 h-16 w-16 rounded-2xl bg-secondary/20 backdrop-blur-md border border-secondary/30 flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <div className="h-6 w-6 rounded-full bg-secondary/60" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 left-8 h-20 w-20 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="h-8 w-8 rounded-sm bg-primary/60 rotate-45" />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
