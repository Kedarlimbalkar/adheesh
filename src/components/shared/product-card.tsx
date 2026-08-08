"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProductModal } from "./product-modal";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Dialog>
      <Card className="overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={cn(
              "object-cover group-hover:scale-105 transition-transform duration-300",
              product.comingSoon && "opacity-90"
            )}
          />
          {product.comingSoon ? (
            <Badge className="absolute top-3 left-3 bg-forest text-white border-none">
              Stocking Soon
            </Badge>
          ) : (
            product.curcuminContent && (
              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-none">
                Curcumin {product.curcuminContent}
              </Badge>
            )
          )}
        </div>
        <CardContent className="p-5">
          <p className="text-xs italic text-muted-foreground mb-1">{product.botanicalName}</p>
          <h3 className="font-display font-semibold text-ink mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {product.shortDescription}
          </p>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              {product.comingSoon ? "Notify Me When Available" : "Inquire Now"}
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <ProductModal product={product} />
    </Dialog>
  );
}
