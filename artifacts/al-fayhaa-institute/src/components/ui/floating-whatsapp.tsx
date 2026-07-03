import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/963934311019"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
      </span>
    </a>
  );
}
