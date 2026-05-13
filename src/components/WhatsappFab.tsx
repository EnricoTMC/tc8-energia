import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <div className="pointer-events-none absolute right-full mr-4 hidden w-max translate-x-2 rounded-md border border-border/60 bg-surface px-4 py-2.5 text-sm font-semibold shadow-xl transition-all duration-300 sm:block opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
        Falar com especialista
      </div>
      
      <a
        href="https://wa.me/5519974042973?text=Olá! Gostaria de falar com um especialista."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white transition-transform hover:scale-105"
      >
        <div className="absolute inset-0 rounded-full animate-radar" />
        <MessageCircle className="relative z-10 h-7 w-7" />
      </a>
    </div>
  );
}
