import { ProductsCatalog } from "./products-catalog";

export const metadata = {
  title: "Products | Adheesh Overseas",
  description: "Browse our full catalog of premium Indian turmeric, spices, oil seeds, pulses and grains for B2B export.",
};

export default function ProductsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-2xl mb-10">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Catalog</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-3">Our Products</h1>
        <p className="mt-4 text-muted-foreground">
          Search or filter by category, then click any product to view detailed specifications
          and send a direct inquiry.
        </p>
      </div>
      <ProductsCatalog />
    </div>
  );
}
