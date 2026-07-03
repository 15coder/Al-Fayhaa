import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Tracks } from "@/components/home/tracks";
import { Teachers } from "@/components/home/teachers";
import { Cta } from "@/components/home/cta";
import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Tracks />
        <Teachers />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
