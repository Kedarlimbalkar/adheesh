export type ParentCategory = "turmeric" | "spices" | "oil-seeds";

export interface ProductSubType {
  id: string;
  parentCategory: ParentCategory;
  label: string;
  englishName: string;
  botanicalName: string;
}

export const SUBCATEGORIES: ProductSubType[] = [
  // spices
  { id: "chilli", parentCategory: "spices", label: "Chilli", englishName: "Red Chilli", botanicalName: "Capsicum Annuum" },
  { id: "jeera", parentCategory: "spices", label: "Jeera", englishName: "Cumin Seeds", botanicalName: "Cuminum Cyminum" },
  { id: "dhaniya", parentCategory: "spices", label: "Dhaniya", englishName: "Coriander Seeds", botanicalName: "Coriandrum Sativum" },
  { id: "black-pepper", parentCategory: "spices", label: "Black Pepper", englishName: "Black Pepper", botanicalName: "Piper Nigrum" },
  { id: "green-cardamom", parentCategory: "spices", label: "Green Cardamom", englishName: "Green Cardamom", botanicalName: "Elettaria Cardamomum" },
  // turmeric
  { id: "mukra-ghatta", parentCategory: "turmeric", label: "Mukra Ghatta", englishName: "Turmeric Powder (Mukra Ghatta)", botanicalName: "Curcuma Longa" },
  { id: "turmeric-broken", parentCategory: "turmeric", label: "Broken Turmeric", englishName: "Broken Turmeric", botanicalName: "Curcuma Longa" },
  { id: "turmeric-bulb", parentCategory: "turmeric", label: "Turmeric Bulb", englishName: "Turmeric Bulb", botanicalName: "Curcuma Longa" },
  { id: "turmeric-finger", parentCategory: "turmeric", label: "Turmeric Finger", englishName: "Turmeric Finger", botanicalName: "Curcuma Longa" },
];

export interface Product {
  id: string;
  name: string;
  botanicalName: string;
  parentCategory: ParentCategory;
  subType?: string; // references ProductSubType.id, when applicable
  comingSoon?: boolean; // true = not yet stocked, show "Stocking Soon" state
  image: string;
  shortDescription: string;
  curcuminContent?: string;
  specifications: {
    moisture: string;
    purity: string;
    origin: string;
    packaging: string[];
  };
  featured: boolean;
}

export const CATEGORIES: { id: ParentCategory; label: string }[] = [
  { id: "turmeric", label: "Turmeric" },
  { id: "spices", label: "Whole & Ground Spices" },
  { id: "oil-seeds", label: "Oil Seeds" },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "turmeric-mukra-ghatta",
    name: "Turmeric Mukra Ghatta",
    botanicalName: "Curcuma Longa",
    parentCategory: "turmeric",
    subType: "mukra-ghatta",
    image: "/products/turmeric/mukra-ghatta-high-curcumin.jpg",
    shortDescription:
      "High-curcumin Mukra Ghatta turmeric, a premium bold-grade whole turmeric known for deep colour value and strong curcumin content. Suited to bulk export and pharmaceutical-grade buyers.",
    curcuminContent: "3.0% - 4.5%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "India",
      packaging: ["25kg PP Bags", "50kg Jute Bags", "Customized Vacuum Bags"],
    },
    featured: true,
  },
  {
    id: "turmeric-mukra-ghatta-bulk-lot",
    name: "Turmeric Mukra Ghatta (Bulk Lot)",
    botanicalName: "Curcuma Longa",
    parentCategory: "turmeric",
    subType: "mukra-ghatta",
    image: "/products/turmeric/mukra-ghatta-bulk-lot.jpg",
    shortDescription:
      "Bulk-lot Mukra Ghatta turmeric offered in large consignment quantities for wholesale and bulk export buyers, with consistent quality across the full lot.",
    curcuminContent: "3.0% - 4.5%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "India",
      packaging: ["50kg Jute Bags", "Bulk Container Loads"],
    },
    featured: false,
  },
  {
    id: "turmeric-broken",
    name: "Turmeric Broken",
    botanicalName: "Curcuma Longa",
    parentCategory: "turmeric",
    subType: "turmeric-broken",
    image: "/products/turmeric/turmeric-broken.jpg",
    shortDescription:
      "Broken turmeric fingers, an economical grade well suited for grinding into powder, with quality and curcumin content comparable to whole fingers.",
    curcuminContent: "3.0% - 4.5%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
  {
    id: "double-polished-super-salem-turmeric-finger",
    name: "Double Polished Super Salem Turmeric Finger",
    botanicalName: "Curcuma Longa",
    parentCategory: "turmeric",
    subType: "turmeric-finger",
    image: "/products/turmeric/double-polished-super-salem-finger.jpg",
    shortDescription:
      "Double-polished Super Salem grade turmeric fingers from Tamil Nadu, prized for bright colour, smooth finish, and high aromatic and essential oil content.",
    curcuminContent: "3.0% - 4.5%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "Salem, Tamil Nadu, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags", "Customized Vacuum Bags"],
    },
    featured: true,
  },
  {
    id: "turmeric-bulb",
    name: "Turmeric Bulb",
    botanicalName: "Curcuma Longa",
    parentCategory: "turmeric",
    subType: "turmeric-bulb",
    image: "/products/turmeric/turmeric-bulb-double-polished.jpg",
    shortDescription:
      "Whole turmeric bulb (round/mother rhizome), double polished, valued for its higher curcumin concentration and use in premium powder blends.",
    curcuminContent: "3.0% - 4.5%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
  {
    id: "turmeric-finger",
    name: "Turmeric Finger",
    botanicalName: "Curcuma Longa",
    parentCategory: "turmeric",
    subType: "turmeric-finger",
    image: "/products/turmeric/turmeric-finger-good-grade.jpg",
    shortDescription:
      "Good-grade whole turmeric fingers offering reliable colour value and curcumin content for general export and culinary use.",
    curcuminContent: "3.0% - 4.5%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
  {
    id: "black-pepper",
    name: "Black Pepper (Whole)",
    botanicalName: "Piper Nigrum",
    parentCategory: "spices",
    subType: "black-pepper",
    comingSoon: true,
    image: "/products/spices/black-pepper.jpg",
    shortDescription:
      "Bold, pungent peppercorns hand-sorted for uniform size and high oil content.",
    specifications: {
      moisture: "Max 12%",
      purity: "Sortex Clean, 550 GL / 500 GL",
      origin: "Wayanad, Kerala, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: true,
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds (Jeera)",
    botanicalName: "Cuminum Cyminum",
    parentCategory: "spices",
    subType: "jeera",
    comingSoon: true,
    image: "/products/spices/cumin-seeds-jeera.jpg",
    shortDescription:
      "Aromatic, machine-cleaned cumin seeds with strong essential oil content, singapore-grade quality.",
    specifications: {
      moisture: "Max 9%",
      purity: "99.5% Purity, Singapore Quality",
      origin: "Unjha, Gujarat, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: true,
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom (8mm+)",
    botanicalName: "Elettaria Cardamomum",
    parentCategory: "spices",
    subType: "green-cardamom",
    comingSoon: true,
    image: "/products/spices/green-cardamom.jpg",
    shortDescription:
      "Bold green pods with intense aroma, hand-picked and sun-dried for export grade colour retention.",
    specifications: {
      moisture: "Max 10%",
      purity: "8mm Bold, Machine Cleaned",
      origin: "Idukki, Kerala, India",
      packaging: ["5kg Vacuum Packs", "25kg Cartons"],
    },
    featured: false,
  },
  {
    id: "red-chili",
    name: "Red Chili (Whole / Powder)",
    botanicalName: "Capsicum Annuum",
    parentCategory: "spices",
    subType: "chilli",
    comingSoon: true,
    image: "/products/spices/red-chili.jpg",
    shortDescription:
      "Vibrant red chilies with consistent ASTA colour value, available whole, crushed or powdered.",
    specifications: {
      moisture: "Max 11%",
      purity: "ASTA 90-120",
      origin: "Guntur, Andhra Pradesh, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
  {
    id: "dhaniya-coming-soon",
    name: "Dhaniya (Coriander Seeds)",
    botanicalName: "Coriandrum Sativum",
    parentCategory: "spices",
    subType: "dhaniya",
    comingSoon: true,
    image: "/products/spices/dhaniya-coriander.jpg",
    shortDescription:
      "We're onboarding Dhaniya (Coriander Seeds) into our export catalog. Full specifications and packaging options will be published soon \u2014 reach out and we'll notify you directly.",
    specifications: {
      moisture: "To be confirmed",
      purity: "To be confirmed",
      origin: "India",
      packaging: ["To be confirmed"],
    },
    featured: false,
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds (Natural / Hulled)",
    botanicalName: "Sesamum Indicum",
    parentCategory: "oil-seeds",
    comingSoon: true,
    image: "/products/oil-seeds/sesame-seeds.jpg",
    shortDescription:
      "High-oil-content sesame seeds, sortex-cleaned, suitable for oil extraction, bakery and tahini production.",
    specifications: {
      moisture: "Max 6%",
      purity: "99.95% Purity",
      origin: "Gujarat & Rajasthan, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: true,
  },
  {
    id: "mustard-seeds",
    name: "Mustard Seeds (Yellow / Brown)",
    botanicalName: "Brassica Juncea",
    parentCategory: "oil-seeds",
    comingSoon: true,
    image: "/products/oil-seeds/mustard-seeds.jpg",
    shortDescription:
      "Clean, uniform mustard seeds with high oil yield, ideal for oil mills and condiment manufacturing.",
    specifications: {
      moisture: "Max 8%",
      purity: "99% Purity",
      origin: "Rajasthan, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS_DATA.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS_DATA.filter((p) => p.featured);
}

export function getSubType(id: string): ProductSubType | undefined {
  return SUBCATEGORIES.find((s) => s.id === id);
}
