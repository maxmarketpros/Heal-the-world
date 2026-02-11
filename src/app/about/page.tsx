import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Heal The World Collection",
    description:
        "About the Heal The World Rock n' Roll Memorabilia Collection. Two decades of meticulous curation by Paul Myhill.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding py-20 md:py-28 text-center">
                <p className="subheading text-gold mb-4">The Story</p>
                <h1 className="heading-editorial text-4xl md:text-6xl mb-6">
                    About the Collection
                </h1>
            </section>

            <div className="divider max-w-3xl mx-auto" />

            {/* Content */}
            <section className="section-padding py-16 md:py-24">
                <div className="max-w-3xl mx-auto space-y-8 text-charcoal/80 leading-relaxed">
                    <p>
                        The <strong>Heal The World</strong> collection is a premier private
                        archive of authenticated rock n&apos; roll memorabilia, meticulously
                        assembled over more than two decades by collector Paul Myhill.
                    </p>

                    <p>
                        Spanning nearly 70 years of rock history — from the 1950s to the
                        present — the collection encompasses over 2,000 items including
                        signed guitars, drumheads, posters, photographs, backstage passes,
                        vinyl, and more. Artists range from AC/DC to ZZ Top, including many
                        legends no longer with us whose signatures can never again be
                        obtained.
                    </p>

                    <div className="border-l-2 border-gold pl-6 my-10">
                        <p className="font-serif text-xl italic text-charcoal">
                            &ldquo;Up to 85% of rock n&apos; roll memorabilia sold online is
                            fake. This collection exists as a counterpoint to that
                            reality — every item authenticated, every provenance verified,
                            every instrument real.&rdquo;
                        </p>
                    </div>

                    <h2 className="font-serif text-2xl text-charcoal pt-4">
                        Museum-Grade Instruments
                    </h2>
                    <p>
                        The guitar collection features instruments matched to each
                        artist&apos;s standards and affiliations. B.B. King required a Gibson
                        Lucille — the model he famously named after a woman who sparked a
                        near-fatal fight. Every guitar was strummed by the artist at signing,
                        and select instruments were used on tour.
                    </p>
                    <p>
                        Most guitars are signed directly on the body — not just a
                        pickguard — on Gibson, Fender, PRS, and Custom Shop instruments.
                    </p>

                    <h2 className="font-serif text-2xl text-charcoal pt-4">
                        Forensic Authentication
                    </h2>
                    <p>
                        Every item undergoes rigorous third-party forensic review by trusted
                        authenticators including PSA/DNA, JSA, REAL, and Beckett. Supporting
                        documentation — signing photographs, letters of provenance,
                        certificates of authenticity — is maintained for each piece.
                    </p>

                    <div className="text-center pt-8">
                        <Link href="/contact" className="btn-gold">
                            Inquire About the Collection
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
