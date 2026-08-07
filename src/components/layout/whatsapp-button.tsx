"use client";

import { MessageCircle } from "lucide-react";

// Internal reference only - names are not shown on the website
const CONTACTS = [
  { ref: "nagesh", phone: "918888540721" },
  { ref: "dinkarappa", phone: "919822368877" },
];

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {CONTACTS.map((contact) => (
        <a
          key={contact.phone}
          href={`https://wa.me/${contact.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
