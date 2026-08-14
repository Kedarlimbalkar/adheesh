import { ShieldCheck, Sprout } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, label: "100% Export Grade Quality" },
  { icon: Sprout, label: "Direct Farm Sourcing" },
];

export function TrustStats() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="container py-10 grid grid-cols-2 gap-8 max-w-lg mx-auto">
        {STATS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <p className="text-sm font-medium text-ink/80">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
