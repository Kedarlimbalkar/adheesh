"use client";

import * as React from "react";

interface InquiryModalContextValue {
  isOpen: boolean;
  selectedProductId: string | null;
  openInquiry: (productId?: string) => void;
  closeInquiry: () => void;
}

const InquiryModalContext = React.createContext<InquiryModalContextValue | undefined>(
  undefined
);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedProductId, setSelectedProductId] = React.useState<string | null>(null);

  const openInquiry = React.useCallback((productId?: string) => {
    setSelectedProductId(productId ?? null);
    setIsOpen(true);
  }, []);

  const closeInquiry = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <InquiryModalContext.Provider
      value={{ isOpen, selectedProductId, openInquiry, closeInquiry }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const ctx = React.useContext(InquiryModalContext);
  if (!ctx) {
    throw new Error("useInquiryModal must be used within an InquiryModalProvider");
  }
  return ctx;
}
