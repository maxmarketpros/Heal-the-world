import { getProductByHandle, getProductsByType } from "@/lib/catalog";
import ZoomImage from "@/components/ZoomImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { handle } = await params;
    const product = getProductByHandle(handle);
    if (!product) return { title: "Not Found" };

    return {
        title: `${product.title} — Heal The World Collection`,
        description: `Authenticated ${product.type} by ${product.artist || "artist"}. Museum-grade provenance.`,
    };
}

export async function generateStaticParams() {
    const guitars = getProductsByType("Guitar");
    return guitars.map((p) => ({ handle: p.handle }));
}

/** Strip the boilerplate gallery notice from descriptions */
function cleanDescription(html: string): string {
    return html
        .replace(/Gallery includes instrument photos followed by COA images\.?/gi, "")
        .trim();
}

export default async function GuitarDetailPage({ params }: PageProps) {
    const { handle } = await params;
    const product = getProductByHandle(handle);

    if (!product) {
        notFound();
    }

    const mainImage = product.images[0];

    return (
        <>
            {/* Breadcrumb */}
            <div className="section-padding py-4 border-b border-light-border">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs tracking-widest uppercase text-medium-gray">
                    <Link href="/" className="hover:text-charcoal transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <Link
                        href="/guitars"
                        className="hover:text-charcoal transition-colors"
                    >
                        Guitars
                    </Link>
                    <span>/</span>
                    <span className="text-charcoal">{product.title}</span>
                </div>
            </div>

            {/* Product Detail */}
            <section className="section-padding py-12 md:py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Single Image with Zoom */}
                    {mainImage && (
                        <ZoomImage
                            src={mainImage.url}
                            alt={mainImage.alt || product.title}
                        />
                    )}

                    {/* Details */}
                    <div className="space-y-8">
                        {/* Artist Tag */}
                        {product.artist && (
                            <p className="subheading text-gold">{product.artist}</p>
                        )}

                        {/* Title */}
                        <h1 className="heading-editorial text-3xl md:text-5xl">
                            {product.title}
                        </h1>

                        {/* Make/Model */}
                        {product.makeModel && (
                            <p className="font-sans text-medium-gray text-sm">
                                {product.makeModel}
                            </p>
                        )}

                        <div className="divider" />

                        {/* Description */}
                        <div
                            className="prose-product text-sm text-charcoal/80 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: cleanDescription(product.descriptionHtml) }}
                        />

                        <div className="divider" />

                        {/* Tags */}
                        {product.tags.length > 0 && (
                            <div>
                                <p className="text-xs tracking-[0.2em] uppercase text-medium-gray mb-3">
                                    Details
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs border border-light-border px-3 py-1 text-medium-gray"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Authentication */}
                        <div className="p-6 border border-gold/20 bg-warm-gray">
                            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                                Authentication &amp; Provenance
                            </p>
                            <p className="text-sm text-charcoal/70 leading-relaxed">
                                This item is backed by forensic third-party authentication.
                                Supporting documentation including Certificates of Authenticity,
                                signing photographs, and letters of provenance are available upon
                                request.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="space-y-3">
                            <Link href="/contact" className="btn-gold block text-center">
                                Inquire About This Piece
                            </Link>
                            <a
                                href="tel:+19568218789"
                                className="btn-primary block text-center text-xs"
                            >
                                Call +1 (956) 821-8789
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Link */}
            <section className="section-padding py-12 border-t border-light-border">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/guitars"
                        className="text-sm tracking-[0.15em] uppercase text-charcoal/60 hover:text-charcoal transition-colors"
                    >
                        ← Back to All Guitars
                    </Link>
                </div>
            </section>
        </>
    );
}
