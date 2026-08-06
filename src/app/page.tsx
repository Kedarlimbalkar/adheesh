import { Hero } from "@/components/home/hero";
import { TrustStats } from "@/components/home/trust-stats";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CertificationsShowcase } from "@/components/home/certifications";
import { HarvestTeaser } from "@/components/home/harvest-teaser";
import { Faq } from "@/components/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <FeaturedProducts />
      <WhyChooseUs />
      <CertificationsShowcase />
      <HarvestTeaser />
      <Faq />
    </>
  );
}
