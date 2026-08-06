export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "What is the Minimum Order Quantity (MOQ)?",
    answer:
      "Our standard MOQ starts at a single 20ft container (approx. 10-14 metric tons depending on the commodity). For sample orders or trial shipments, smaller quantities can be arranged on request.",
  },
  {
    question: "Do you provide product samples before placing bulk orders?",
    answer:
      "Yes. We're happy to send product samples along with a specification and lab test report so you can verify quality before committing to a bulk order.",
  },
  {
    question: "Can you customize packaging and private labeling?",
    answer:
      "Absolutely. We offer PP bags, jute bags, vacuum-sealed packs, and fully customized private-label packaging in the sizes and branding your business requires.",
  },
  {
    question: "What shipping terms do you operate under (FOB, CIF, CFR)?",
    answer:
      "We ship under FOB, CIF, and CFR terms from major Indian ports including Mundra, Nhava Sheva (JNPT), and Kandla, and can accommodate other Incoterms on request.",
  },
  {
    question: "How do you guarantee curcumin content in turmeric shipments?",
    answer:
      "Every turmeric batch is lab-tested for curcumin content, moisture, and purity before dispatch, and we can share a Certificate of Analysis (COA) with each shipment.",
  },
];
