import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 print:hidden">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex size-13 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        aria-label="Call The O.P Institute"
        className="inline-flex size-13 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-lg transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}
