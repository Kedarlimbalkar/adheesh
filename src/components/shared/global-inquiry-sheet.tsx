"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useInquiryModal } from "@/context/inquiry-modal-context";
import { InquiryForm } from "./inquiry-form";
import { getProductById } from "@/data/products";

export function GlobalInquirySheet() {
  const { isOpen, closeInquiry, selectedProductId } = useInquiryModal();
  const product = selectedProductId ? getProductById(selectedProductId) : undefined;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeInquiry()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Request a Quote</SheetTitle>
          <SheetDescription>
            {product
              ? `Send us your requirement for ${product.name} and we'll get back within 24 hours.`
              : "Tell us what you need and our export team will get back within 24 hours."}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <InquiryForm defaultProductId={selectedProductId} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
