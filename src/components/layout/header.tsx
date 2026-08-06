"use client";

import * as React from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInquiryModal } from "@/context/inquiry-modal-context";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/harvest-chart", label: "Harvest Chart" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { openInquiry } = useInquiryModal();

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            ADHEESH <span className="text-primary">OVERSEAS</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink/80">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => openInquiry()}>Request a Quote</Button>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container flex flex-col gap-4 py-5 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-ink/80 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMobileOpen(false);
                openInquiry();
              }}
              className="w-full mt-1"
            >
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
