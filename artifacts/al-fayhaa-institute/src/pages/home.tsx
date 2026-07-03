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
    <div className="relative flex min-h-screen flex-col font-sans overflow-x-hidden">
      {/* Unified page-level background */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_10%,hsl(var(--primary)/0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_80%,hsl(var(--secondary)/0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,hsl(var(--primary)/0.03),transparent)]" />
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
