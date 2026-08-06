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
    id: "salem-turmeric-finger",
    name: "Salem Turmeric Finger (Whole)",
    botanicalName: "Curcuma Longa",
    category: "turmeric",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Premium bright yellow raw turmeric fingers known for high aromatic value and essential oil content.",
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
    id: "high-curcumin-turmeric-powder",
    name: "High-Curcumin Turmeric Powder",
    botanicalName: "Curcuma Longa",
    category: "turmeric",
    image:
      "https://images.unsplash.com/photo-1615485291234-4a1c1c6f6d3a?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Finely ground, deep golden turmeric powder ideal for dietary supplements, pharmaceuticals, and culinary exports.",
    curcuminContent: "4.5% - 5.5%+",
    specifications: {
      moisture: "Max 8%",
      purity: "100% Pure (Microbiologically Tested)",
      origin: "Unjha, Gujarat, India",
      packaging: ["10kg Kraft Bags", "25kg HDPE Bags", "Private Label Containers"],
    },
    featured: true,
  },
  {
    id: "nizamabad-turmeric",
    name: "Nizamabad Turmeric (Whole)",
    botanicalName: "Curcuma Longa",
    category: "turmeric",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Bold, thick fingers from the Nizamabad belt, prized for consistent colour value and shelf life.",
    curcuminContent: "3.5% - 4.8%",
    specifications: {
      moisture: "Max 10%",
      purity: "99% Clean",
      origin: "Nizamabad, Telangana, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
  {
    id: "rajapuri-turmeric",
    name: "Rajapuri Turmeric (Whole)",
    botanicalName: "Curcuma Longa",
    category: "turmeric",
    image:
      "https://images.unsplash.com/photo-1615485291235-4a1c1c6f6d3b?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Sourced from Sangli's Rajapuri belt, valued for rich colour and low fibre content.",
    curcuminContent: "3.2% - 4.0%",
    specifications: {
      moisture: "Max 10%",
      purity: "98% Clean",
      origin: "Sangli, Maharashtra, India",
      packaging: ["25kg PP Bags", "50kg Jute Bags"],
    },
    featured: false,
  },
  {
    id: "organic-turmeric-powder",
    name: "Organic Turmeric Powder",
    botanicalName: "Curcuma Longa",
    category: "turmeric",
    image:
      "https://images.unsplash.com/photo-1615485500834-bc65fd331b98?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Certified organic turmeric powder grown without synthetic inputs, for premium retail and nutraceutical brands.",
    curcuminContent: "4.0% - 5.0%",
    specifications: {
      moisture: "Max 8%",
      purity: "100% Organic Certified",
      origin: "Erode, Tamil Nadu, India",
      packaging: ["10kg Kraft Bags", "25kg HDPE Bags"],
    },
    featured: true,
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
