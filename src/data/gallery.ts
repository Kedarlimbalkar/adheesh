export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category?: string;
}

// Images live in /public/gallery/ — reference them here as "/gallery/filename.jpg"
// To add a new photo: drop the file into public/gallery/ and add an entry below.
export const GALLERY_DATA: GalleryImage[] = [
  {
    id: "turmeric-field",
    src: "/gallery/turmeric-field.jpg",
    alt: "Turmeric crop growing in the field",
    caption: "Turmeric under cultivation",
    category: "Field",
  },
  {
    id: "processing-sorting-day",
    src: "/gallery/processing-sorting-day.jpg",
    alt: "Workers hand-sorting turmeric at the processing yard",
    caption: "Hand-sorting turmeric at the processing yard",
    category: "Processing",
  },
  {
    id: "processing-sorting-night",
    src: "/gallery/processing-sorting-night.jpg",
    alt: "Turmeric processing yard operating after dark",
    caption: "Processing operations continue into the evening",
    category: "Processing",
  },
  {
    id: "processing-facility",
    src: "/gallery/processing-facility.jpg",
    alt: "Turmeric processing facility with machinery",
    caption: "Inside the processing facility",
    category: "Processing",
  },
  {
    id: "godown-stock",
    src: "/gallery/godown-stock.jpg",
    alt: "Turmeric stock in jute sacks at the godown",
    caption: "Turmeric stock ready in the godown",
    category: "Godown",
  },
  {
    id: "mandi-market-1",
    src: "/gallery/mandi-market-1.jpg",
    alt: "Turmeric mandi with large stock piles under a covered market",
    caption: "Turmeric mandi — stock piles under the covered market",
    category: "Market",
  },
  {
    id: "mandi-market-2",
    src: "/gallery/mandi-market-2.jpg",
    alt: "Team inspecting turmeric stock at the mandi",
    caption: "Inspecting stock quality at the mandi",
    category: "Market",
  },
  // Add more entries here following the same shape.
];
