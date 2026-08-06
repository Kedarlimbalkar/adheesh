import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  const phone = "919999999999"; // TODO: replace with real WhatsApp Business number
  const message = encodeURIComponent(
    "Hi Adheesh Overseas, I'd like to enquire about your export products."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
