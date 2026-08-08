"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/product-card";
import { CATEGORIES, PRODUCTS_DATA, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductsCatalog() {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<Product["parentCategory"] | "all">("all");

  const filtered = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.parentCategory === activeCategory;
    const matchesQuery =
      query.trim() === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.botanicalName.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="grid lg:grid-cols-[220px_1fr] gap-10">
      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Categories
          </p>
          <div className="flex flex-col gap-1">
            <Button
              variant={activeCategory === "all" ? "default" : "ghost"}
              size="sm"
              className={cn("justify-start rounded-lg", activeCategory !== "all" && "text-ink/70")}
              onClick={() => setActiveCategory("all")}
            >
              All Products
            </Button>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "ghost"}
                size="sm"
                className={cn("justify-start rounded-lg", activeCategory !== cat.id && "text-ink/70")}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </aside>

      {/* Product grid */}
      <div>
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm py-16 text-center">
            No products match your search. Try a different keyword or category.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
