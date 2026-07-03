import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { News } from "@/components/home/news";
import { Tracks } from "@/components/home/tracks";
import { Teachers } from "@/components/home/teachers";
import { ExamDownloads } from "@/components/home/exam-downloads";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <div className="dark relative flex min-h-screen flex-col font-sans overflow-x-hidden">
      {/* Page-wide background — matches CTA dark navy style */}
      <div className="fixed inset-0 -z-10 bg-primary">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-secondary)_0%,transparent_50%)]"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary)_0%,transparent_40%)]"
          animate={{ opacity: [0.15, 0.32, 0.15] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-secondary)_0%,transparent_35%)]"
          animate={{ opacity: [0.06, 0.14, 0.06] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <Header />
      <main className="flex-1">
        <Hero />
        <News />
        <Tracks />
        <Teachers />
        <ExamDownloads />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
