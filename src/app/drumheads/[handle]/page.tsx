import { getProductByHandle, getProductsByType } from "@/lib/catalog";
import Gallery from "@/components/Gallery";
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
        description: `Authenticated ${product.type} by ${product.artist || "artist"}.`,
    };
}

export async function generateStaticParams() {
    const drumheads = getProductsByType("Drumhead");
    return drumheads.map((p) => ({ handle: p.handle }));
}

/** Strip price lines from descriptions */
function cleanDescription(html: string): string {
    return html
        .replace(/<li[^>]*>\s*<strong>\s*PRICE\s*:?\s*<\/strong>[^<]*<\/li>/gi, "")
        .replace(/PRICE\s*:\s*\d[\d,.]*/gi, "")
        .trim();
}

export default async function DrumheadDetailPage({ params }: PageProps) {
    const { handle } = await params;
    const product = getProductByHandle(handle);

    if (!product) {
        notFound();
    }

    return (
        <>
            {/* Breadcrumb */}
            <div className="section-padding py-4 border-b border-light-border">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs tracking-widest uppercase text-medium-gray">
                    <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/drumheads" className="hover:text-charcoal transition-colors">Drumheads</Link>
                    <span>/</span>
                    <span className="text-charcoal">{product.title}</span>
                </div>
            </div>

            {/* Product Detail */}
            <section className="section-padding py-12 md:py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <Gallery images={product.images} title={product.title} />

                    <div className="space-y-8">
                        {product.artist && (
                            <p className="subheading text-gold">{product.artist}</p>
                        )}
                        <h1 className="heading-editorial text-3xl md:text-5xl">{product.title}</h1>

                        <div className="divider" />

                        <div
                            className="prose-product text-sm text-charcoal/80 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: cleanDescription(product.descriptionHtml) }}
                        />

                        <div className="divider" />

                        <div className="p-6 border border-gold/20 bg-warm-gray">
                            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                                Authentication &amp; Provenance
                            </p>
                            <p className="text-sm text-charcoal/70 leading-relaxed">
                                Supporting documentation is available upon request.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Link href="/contact" className="btn-gold block text-center">
                                Inquire About This Piece
                            </Link>
                            <a href="tel:+19568218789" className="btn-primary block text-center text-xs">
                                Call +1 (956) 821-8789
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding py-12 border-t border-light-border">
                <div className="max-w-7xl mx-auto">
                    <Link href="/drumheads" className="text-sm tracking-[0.15em] uppercase text-charcoal/60 hover:text-charcoal transition-colors">
                        ← Back to All Drumheads
                    </Link>
                </div>
            </section>
        </>
    );
}
