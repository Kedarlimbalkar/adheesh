export interface Product {
  id: string;
  name: string;
  botanicalName: string;
  category: "turmeric" | "spices" | "oil-seeds" | "pulses-grains";
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

export const CATEGORIES: { id: Product["category"]; label: string }[] = [
  { id: "turmeric", label: "Turmeric" },
  { id: "spices", label: "Whole & Ground Spices" },
  { id: "oil-seeds", label: "Oil Seeds" },
  { id: "pulses-grains", label: "Pulses & Grains" },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "turmeric-mukra-ghatta",
    name: "Turmeric Mukra Ghatta",
    botanicalName: "Curcuma Longa",
    category: "turmeric",
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
    category: "turmeric",
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
    category: "turmeric",
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
    category: "turmeric",
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
    category: "turmeric",
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
    category: "turmeric",
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
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1200&auto=format&fit=crop",
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
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-45e3d8b6a3c7?q=80&w=1200&auto=format&fit=crop",
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
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1599909533144-cf3a4b6a8f1e?q=80&w=1200&auto=format&fit=crop",
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
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?q=80&w=1200&auto=format&fit=crop",
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
    id: "sesame-seeds",
    name: "Sesame Seeds (Natural / Hulled)",
    botanicalName: "Sesamum Indicum",
    category: "oil-seeds",
    image:
      "https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=1200&auto=format&fit=crop",
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
    category: "oil-seeds",
    image:
      "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=1200&auto=format&fit=crop",
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
  {
    id: "basmati-rice",
    name: "Basmati Rice (1121 / Traditional)",
    botanicalName: "Oryza Sativa",
    category: "pulses-grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Extra-long grain aromatic basmati rice, aged for enhanced aroma and consistent elongation on cooking.",
    specifications: {
      moisture: "Max 12%",
      purity: "Sortex Clean, 2% Broken",
      origin: "Punjab & Haryana, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags", "Custom Retail Packs"],
    },
    featured: true,
  },
  {
    id: "chickpeas",
    name: "Chickpeas (Kabuli / Desi)",
    botanicalName: "Cicer Arietinum",
    category: "pulses-grains",
    image:
      "https://images.unsplash.com/photo-1612257998990-3d5b3c9c0c1a?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Machine-cleaned chickpeas with uniform size grading, sourced for bulk B2B food processing needs.",
    specifications: {
      moisture: "Max 12%",
      purity: "99% Clean, Machine Sorted",
      origin: "Madhya Pradesh, India",
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
