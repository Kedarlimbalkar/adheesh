"use client";

import Image from "next/image";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInquiryModal } from "@/context/inquiry-modal-context";
import type { Product } from "@/data/products";

export function ProductModal({ product }: { product: Product }) {
  const { openInquiry } = useInquiryModal();

  return (
    <DialogContent>
      <div className="relative h-56 w-full rounded-xl overflow-hidden mb-2 bg-muted">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        {product.comingSoon && (
          <Badge className="absolute top-3 left-3 bg-forest text-white border-none">
            Stocking Soon
          </Badge>
        )}
      </div>

      <DialogHeader>
        <DialogTitle>{product.name}</DialogTitle>
        <DialogDescription className="italic">{product.botanicalName}</DialogDescription>
      </DialogHeader>

      <p className="text-sm text-muted-foreground leading-relaxed">{product.shortDescription}</p>

      {product.comingSoon ? (
        <div className="rounded-xl border border-dashed border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          We're finalizing specifications and packaging for this product. Send an inquiry and our
          team will reach out as soon as it's ready for export.
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {product.curcuminContent && (
                <tr className="border-b border-border">
                  <td className="px-4 py-2.5 font-medium text-ink bg-muted/60 w-1/2">Curcumin Content</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{product.curcuminContent}</td>
                </tr>
              )}
              <tr className="border-b border-border">
                <td className="px-4 py-2.5 font-medium text-ink bg-muted/60">Moisture Content</td>
                <td className="px-4 py-2.5 text-muted-foreground">{product.specifications.moisture}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-2.5 font-medium text-ink bg-muted/60">Purity</td>
                <td className="px-4 py-2.5 text-muted-foreground">{product.specifications.purity}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-2.5 font-medium text-ink bg-muted/60">Origin</td>
                <td className="px-4 py-2.5 text-muted-foreground">{product.specifications.origin}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-ink bg-muted/60">Packaging Available</td>
                <td className="px-4 py-2.5 text-muted-foreground">
                  {product.specifications.packaging.join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <DialogClose asChild>
        <Button size="lg" className="w-full" onClick={() => openInquiry(product.id)}>
          {product.comingSoon ? "Notify Me When Available" : "Send Direct Inquiry for this Product"}
        </Button>
      </DialogClose>
    </DialogContent>
  );
}
