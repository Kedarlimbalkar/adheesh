"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "@/components/shared/product-card";
import { CATEGORIES, PRODUCTS_DATA } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section id="products" className="container py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
          Featured Categories
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">What We Export</h2>
        <p className="mt-4 text-muted-foreground">
          A curated range of Indian agricultural commodities, available in bulk and
          custom-packaged formats for B2B buyers worldwide.
        </p>
      </div>

      <Tabs defaultValue="turmeric" className="flex flex-col items-center">
        <TabsList>
          {CATEGORIES.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="w-full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS_DATA.filter((p) => p.category === cat.id).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
