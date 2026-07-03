import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { News } from "@/components/home/news";
import { Tracks } from "@/components/home/tracks";
import { Teachers } from "@/components/home/teachers";
import { ExamDownloads } from "@/components/home/exam-downloads";
import { Cta } from "@/components/home/cta";
import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp";
import { ScientificBackground } from "@/components/ui/scientific-background";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans overflow-x-hidden">
      <ScientificBackground />
      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <News />
        <Tracks />
        <Teachers />
        <ExamDownloads />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
