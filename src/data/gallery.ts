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
    id: "godown-1",
    src: "/gallery/godown-1.jpg",
    alt: "Adheesh Overseas godown exterior",
    caption: "Main storage godown, Hingoli",
    category: "Godown",
  },
  {
    id: "godown-2",
    src: "/gallery/godown-2.jpg",
    alt: "Turmeric sacks stacked in godown",
    caption: "Turmeric stock ready for dispatch",
    category: "Godown",
  },
  {
    id: "processing-1",
    src: "/gallery/processing-1.jpg",
    alt: "Spice cleaning and grading process",
    caption: "Cleaning & grading in progress",
    category: "Processing",
  },
  {
    id: "loading-1",
    src: "/gallery/loading-1.jpg",
    alt: "Container loading for export",
    caption: "Container loading for export shipment",
    category: "Dispatch",
  },
  // Add more entries here following the same shape.
];
