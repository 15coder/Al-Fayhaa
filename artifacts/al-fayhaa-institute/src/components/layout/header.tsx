import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import HorizontalLogo from "@assets/20260703_055249_1783047654677.jpg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={HorizontalLogo} 
            alt="معهد الفيحاء التعليمي" 
            className="h-12 w-auto object-contain rounded-sm"
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">من نحن</a>
          <a href="#tracks" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">المسارات</a>
          <a href="#teachers" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">الكادر التدريسي</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="rounded-full px-6 font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-1">
            <a href="https://wa.me/963934311019" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-5 w-5" />
              سجل الآن
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
