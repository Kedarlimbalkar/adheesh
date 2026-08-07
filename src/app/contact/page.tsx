import { MapPin, Mail, Phone } from "lucide-react";
import { InquiryForm } from "@/components/shared/inquiry-form";

export const metadata = {
  title: "Contact Us | Adheesh Overseas",
  description: "Get in touch with Adheesh Overseas for bulk export inquiries on turmeric, spices, oil seeds, pulses and grains.",
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-2xl mb-14">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-3">Contact &amp; Inquiry</h1>
        <p className="mt-4 text-muted-foreground">
          Share your requirement below and our export team will respond within 24 hours with
          pricing, packaging options, and lead time.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14">
        <div>
          {/* Map placeholder - swap the src below for a real Google Maps embed URL */}
          <div className="rounded-2xl overflow-hidden border border-border h-72 mb-8">
            <iframe
              title="Adheesh Overseas Registered Office - Hingoli"
              src="https://www.google.com/maps?q=APMC+Complex+Railway+Station+Road+Hingoli+431513&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="space-y-5 text-sm">
            <p className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span>
                <span className="font-semibold text-ink">Registered Office</span>
                <br />
                Shop No. 11, APMC Complex, Railway Station Road,
                <br />
                Turmeric Market Yard, Hingoli, Hingoli, 431513
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" /> sales@adheeshoverseas.in
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" /> info@adheeshoverseas.in
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" /> contact@adheeshoverseas.in
            </p>
 <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a href="tel:+918888540721" className="hover:underline">+91 88885 40721</a>
              <span className="mx-1">/</span>
              <a href="tel:+919822368877" className="hover:underline">+91 98223 68877</a>
            </p>
            <p className="text-muted-foreground text-xs pt-1">GSTIN: 27BXOPL7101B1ZO</p>
          </div>
        </div>

        <div className="bg-secondary/5 border border-secondary/15 rounded-2xl p-7 md:p-9">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
