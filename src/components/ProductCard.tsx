import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

interface ProductCardProps {
    product: Product;
    /** URL prefix for the product detail page, e.g. "/guitars" */
    basePath: string;
    /** Aspect ratio class for the image wrapper, defaults to "aspect-[3/4]" */
    aspectRatio?: string;
}

export default function ProductCard({ product, basePath, aspectRatio = "aspect-[3/4]" }: ProductCardProps) {
    const mainImage = product.images[0];

    return (
        <Link
            href={`${basePath}/${product.handle}`}
            className="group block card-hover"
        >
            {/* Image */}
            <div className={`relative ${aspectRatio} overflow-hidden bg-warm-gray mb-4`}>
                {mainImage ? (
                    <Image
                        src={mainImage.url}
                        alt={mainImage.alt || product.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover img-zoom"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-medium-gray font-serif text-lg">
                        No Image
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="space-y-1.5">
                {product.artist && (
                    <p className="text-xs tracking-[0.2em] uppercase text-gold font-sans">
                        {product.artist}
                    </p>
                )}
                <h3 className="font-serif text-lg md:text-xl leading-tight group-hover:text-gold transition-colors duration-300">
                    {product.title}
                </h3>
                {product.makeModel && (
                    <p className="text-xs text-medium-gray font-sans">
                        {product.makeModel}
                    </p>
                )}
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/50 font-sans pt-2 group-hover:text-charcoal transition-colors duration-300">
                    View Details →
                </p>
            </div>
        </Link>
    );
}
