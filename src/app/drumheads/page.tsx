import { getProductsByType } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signed Drumheads — Heal The World Collection",
    description:
        "Browse our collection of authenticated, artist-signed drumheads. Museum-grade provenance.",
};

export default function DrumheadsPage() {
    const drumheads = getProductsByType("Drumhead");

    return (
        <>
            {/* Hero */}
            <section className="section-padding py-20 md:py-28 text-center">
                <p className="subheading text-gold mb-4">The Archive</p>
                <h1 className="heading-editorial text-4xl md:text-6xl mb-6">
                    Signed Drumheads
                </h1>
                <p className="font-sans text-medium-gray max-w-2xl mx-auto leading-relaxed">
                    {drumheads.length} authenticated drumheads from legendary artists and
                    bands. Each piece is backed by provenance documentation.
                </p>
            </section>

            <div className="divider max-w-7xl mx-auto" />

            {/* Grid */}
            <section className="section-padding py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {drumheads.map((product) => (
                            <ProductCard
                                key={product.handle}
                                product={product}
                                basePath="/drumheads"
                                aspectRatio="aspect-[4/3]"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding py-16 md:py-24 bg-charcoal text-center">
                <h2 className="font-serif text-3xl text-ivory mb-4">
                    Interested in a Piece?
                </h2>
                <p className="text-ivory/60 text-sm max-w-md mx-auto mb-8">
                    Contact us for details, provenance documentation, or to arrange a
                    private viewing.
                </p>
                <Link href="/contact" className="btn-gold">
                    Get in Touch
                </Link>
            </section>
        </>
    );
}
