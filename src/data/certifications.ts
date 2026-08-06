export interface Certification {
  id: string;
  name: string;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  { id: "apeda", name: "APEDA", description: "Registered with the Agricultural & Processed Food Products Export Development Authority." },
  { id: "spices-board", name: "Spices Board of India", description: "Certified exporter recognised by the Spices Board of India." },
  { id: "fssai", name: "FSSAI", description: "Compliant with Food Safety and Standards Authority of India regulations." },
  { id: "iso-22000", name: "ISO 22000", description: "Certified food safety management system across our processing facility." },
  { id: "haccp", name: "HACCP", description: "Hazard Analysis & Critical Control Points certified process controls." },
  { id: "halal", name: "Halal", description: "Halal-certified processing for applicable product lines." },
  { id: "gmp", name: "GMP", description: "Good Manufacturing Practices certified facility and handling." },
];
