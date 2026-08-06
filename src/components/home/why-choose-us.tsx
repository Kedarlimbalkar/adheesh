import { Tractor, FlaskConical, PackageCheck, Ship } from "lucide-react";

const REASONS = [
  {
    icon: Tractor,
    title: "Direct Farm Sourcing",
    description: "Unmatched freshness and traceability through direct partnerships with producer groups.",
  },
  {
    icon: FlaskConical,
    title: "Strict Quality Assurance",
    description: "Custom curcumin %, moisture control, and lab certification on every batch.",
  },
  {
    icon: PackageCheck,
    title: "Custom B2B Packaging",
    description: "Jute bags, PP bags, vacuum-sealed bags, and private labeling to your spec.",
  },
  {
    icon: Ship,
    title: "Seamless Global Logistics",
    description: "FOB / CIF shipping capabilities from major Indian ports worldwide.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/5 border-y border-secondary/10 py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Why Choose Adheesh Overseas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card rounded-2xl border border-border p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-5">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-semibold text-ink mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
