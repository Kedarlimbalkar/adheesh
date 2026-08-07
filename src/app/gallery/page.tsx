import Image from "next/image";
import { GALLERY_DATA } from "@/data/gallery";

export const metadata = {
  title: "Gallery | Adheesh Overseas",
  description:
    "A look inside Adheesh Overseas — our godown, processing facility, and export dispatch operations.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Facility
        </h1>
        <p className="mt-3 text-muted-foreground">
          A look inside our godown, processing, and dispatch operations in
          Hingoli.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_DATA.map((image) => (
          <figure
            key={image.id}
            className="group overflow-hidden rounded-lg border bg-card shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
