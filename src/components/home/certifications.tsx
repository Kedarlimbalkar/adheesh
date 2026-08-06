import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";

export function CertificationsShowcase() {
  return (
    <section id="certifications" className="grain-texture py-16 border-b border-border">
      <div className="container text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Export Certifications
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="flex items-center gap-2" title={cert.description}>
              <BadgeCheck className="h-5 w-5 text-primary" />
              <span className="font-display font-semibold text-ink/80">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
