export interface Certification {
  id: string;
  name: string;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  { id: "apeda", name: "APEDA", description: "Registered with the Agricultural & Processed Food Products Export Development Authority." },
  { id: "spices-board", name: "Spices Board of India", description: "Certified exporter recognised by the Spices Board of India." },
  { id: "fssai", name: "FSSAI", description: "Compliant with Food Safety and Standards Authority of India regulations." },
  { id: "halal", name: "Halal", description: "Halal-certified processing for applicable product lines." },
];
