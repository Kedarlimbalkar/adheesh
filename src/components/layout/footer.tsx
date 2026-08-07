import Link from "next/link";
import { Leaf, MapPin, Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container py-14 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display font-bold text-white">ADHEESH OVERSEAS</span>
          </div>
          <p className="text-white/55 leading-relaxed">
            Direct sourcing and global export of premium Indian turmeric, spices, oil seeds,
            pulses and grains &mdash; shipped worldwide with export-grade quality assurance.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Quick Links</p>
          <ul className="space-y-2 text-white/55">
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/products" className="hover:text-primary">Products</Link></li>
            <li><Link href="/harvest-chart" className="hover:text-primary">Harvest Chart</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Certifications</p>
          <ul className="space-y-2 text-white/55">
            <li>APEDA Registered</li>
            <li>Spices Board of India</li>
            <li>FSSAI &amp; ISO 22000</li>
            <li>HACCP, Halal, GMP</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Contact</p>
          <ul className="space-y-2.5 text-white/55">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                Shop No. 11, APMC Complex, Railway Station Road,
                <br />
                Turmeric Market Yard, Hingoli, Hingoli, 431513
              </span>
            </li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> sales@adheeshoverseas.in</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> info@adheeshoverseas.in</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> contact@adheeshoverseas.in</li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a href="tel:+918888540721" className="hover:underline whitespace-nowrap">+91 88885 40721</a>
                <span className="text-white/40">/</span>
                <a href="tel:+919822368877" className="hover:underline whitespace-nowrap">+91 98223 68877</a>
              </span>
            </li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary shrink-0" /> www.adheeshoverseas.in</li>
            <li className="text-white/40 text-xs pt-1">GSTIN: 27BXOPL7101B1ZO</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>&copy; 2026 Adheesh Overseas. All rights reserved. &nbsp;|&nbsp; GSTIN: 27BXOPL7101B1ZO</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}