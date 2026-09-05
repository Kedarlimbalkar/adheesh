import { Tractor, HeartHandshake, Clock } from "lucide-react";

const VALUES = [
  { icon: HeartHandshake, title: "Transparency", description: "Clear pricing, honest specifications, and open communication at every stage of the trade." },
  { icon: Clock, title: "Timely Delivery", description: "Reliable production planning and logistics coordination to meet your shipping windows." },
  { icon: Tractor, title: "Farm Partnership", description: "Long-term relationships with producer groups that support fair prices and consistent supply." },
];

export const metadata = {
  title: "About Us | Adheesh Overseas",
  description: "Learn about Adheesh Overseas, our sourcing model, processing facilities, and quality standards.",
};

export default function AboutPage() {
  return (
    <div className="container py-20 md:py-28">
      <div className="max-w-3xl mb-14">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
          Direct from the farms of India, to ports around the world.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Adheesh Overseas is a B2B export house specializing in premium Indian agricultural
          commodities &mdash; led by our flagship product, high-curcumin turmeric, alongside a
          wider range of spices and oil seeds. Headquartered in Unjha, Gujarat,
          one of India&apos;s most important agri-trading hubs, we work directly with a trusted
          network of farmers and local mandis, cutting out unnecessary middlemen so our overseas
          partners receive consistent quality at fair, transparent pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 mb-20">
        <div>
          <h2 className="font-display text-2xl font-bold mb-4">Our Sourcing Mechanism</h2>
          <p className="text-muted-foreground leading-relaxed">
            We partner directly with agricultural producer groups and regional mandis across
            India&apos;s key growing belts &mdash; from Unjha and Sangli for turmeric, to Wayanad
            for pepper and Idukki for cardamom. This direct-sourcing model gives us full
            traceability from farm to shipment, and lets us pass on better pricing and quality
            consistency to our buyers.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold mb-4">Processing &amp; Quality Testing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every consignment passes through mechanical cleaning, sortex grading, moisture
            testing, and where applicable, curcumin or oil-content analysis at our in-house and
            partner labs. Export-grade packaging &mdash; PP bags, jute bags, or vacuum-sealed
            packs &mdash; is applied before dispatch, along with full documentation for customs
            and quality compliance.
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
