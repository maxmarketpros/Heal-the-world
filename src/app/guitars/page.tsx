import { getProductsByType } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signed Guitars — Heal The World Collection",
    description:
        "Browse our complete archive of authenticated, artist-signed guitars. Every instrument backed by forensic third-party authentication.",
};

export default function GuitarsPage() {
    const guitars = getProductsByType("Guitar");

    return (
        <>
            {/* Hero */}
            <section className="section-padding py-20 md:py-28 text-center">
                <p className="subheading text-gold mb-4">The Archive</p>
                <h1 className="heading-editorial text-4xl md:text-6xl mb-6">
                    Signed Guitars
                </h1>
                <p className="font-sans text-medium-gray max-w-2xl mx-auto leading-relaxed">
                    {guitars.length} authenticated instruments from the world&apos;s most
                    iconic artists. Each guitar was strummed by the artist at signing and
                    is backed by forensic authentication.
                </p>
            </section>

            <div className="divider max-w-7xl mx-auto" />

            {/* TODO: Add filter/search controls here */}
            {/* <section className="section-padding py-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <input placeholder="Search guitars..." />
          <select>Filter by artist</select>
        </div>
      </section> */}

            {/* Grid */}
            <section className="section-padding py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {guitars.map((product) => (
                            <ProductCard
                                key={product.handle}
                                product={product}
                                basePath="/guitars"
                            />
                        ))}
                    </div>

                    {guitars.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-medium-gray font-serif text-xl">
                                No guitars found.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding py-16 md:py-24 bg-charcoal text-center">
                <h2 className="font-serif text-3xl text-ivory mb-4">
                    Interested in a Piece?
                </h2>
                <p className="text-ivory/60 text-sm max-w-md mx-auto mb-8">
                    Every inquiry is treated with discretion. Contact us for details,
                    provenance documentation, or to arrange a private viewing.
                </p>
                <Link href="/contact" className="btn-gold">
                    Get in Touch
                </Link>
            </section>
        </>
    );
}
