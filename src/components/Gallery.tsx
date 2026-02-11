"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/catalog";

interface GalleryProps {
    images: ProductImage[];
    title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = images[selectedIndex];

    if (images.length === 0) {
        return (
            <div className="aspect-square bg-warm-gray flex items-center justify-center text-medium-gray font-serif text-xl">
                No Images Available
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-warm-gray overflow-hidden">
                <Image
                    src={selected.url}
                    alt={selected.alt || title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-opacity duration-300"
                    priority
                />
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden transition-all duration-300 ${i === selectedIndex
                                    ? "ring-2 ring-gold"
                                    : "ring-1 ring-light-border opacity-60 hover:opacity-100"
                                }`}
                            aria-label={`View image ${i + 1}`}
                        >
                            <Image
                                src={img.url}
                                alt={img.alt || `${title} - Image ${i + 1}`}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
