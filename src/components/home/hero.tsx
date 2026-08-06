"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInquiryModal } from "@/context/inquiry-modal-context";
import { Download } from "lucide-react";

export function Hero() {
  const { openInquiry } = useInquiryModal();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=2000&auto=format&fit=crop"
          alt="Golden turmeric harvest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30" />
      </div>

      <div className="container relative py-24 md:py-36">
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] text-white max-w-3xl">
          Pure Indian Spices &amp; Agro Commodities Delivered Worldwide
        </h1>
        <p className="mt-6 text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
          Specializing in High-Curcumin Turmeric, Whole Spices, Oil Seeds, and Grains &mdash;
          directly from farm clusters to global markets.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button size="lg" onClick={() => openInquiry()}>
            Explore Products
          </Button>
          <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
            <Download className="h-4 w-4" /> Download Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
