import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { News } from "@/components/home/news";
import { Tracks } from "@/components/home/tracks";
import { Teachers } from "@/components/home/teachers";
import { ExamDownloads } from "@/components/home/exam-downloads";
import { Location } from "@/components/home/location";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_10%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_80%,hsl(167_100%_70%/0.05),transparent)]" />
      </div>

      <Header />
      <main className="flex-1">
        <Hero />
        <News />
        <Tracks />
        <Teachers />
        <ExamDownloads />
        <Location />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
