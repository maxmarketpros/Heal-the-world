import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Heal The World Collection",
    description:
        "About the Heal The World Rock n' Roll Memorabilia Collection. Two decades of meticulous curation by Paul Myhill.",
};

/* ── Flat-icon SVGss ─────────────────────────────────────────────── */

function IconGuitar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-10.5M13.5 6.5L17.5 10.5M12 14a3 3 0 11-6 0 3 3 0 016 0zM9 17v4M7 19h4" />
        </svg>
    );
}

function IconShield() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}

function IconClock() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function IconStar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    );
}

function IconFingerprint() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.488 8.21M12 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-3 0a3 3 0 116 0 3 3 0 01-6 0z" />
        </svg>
    );
}

function IconGlobe() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 10.5a8.983 8.983 0 01-2.284 5.753" />
        </svg>
    );
}

/* ── Page ────────────────────────────────────────────────────────── */

export default function AboutPage() {
    return (
        <>
            {/* ── Hero (clean, no background image) ── */}
            <section className="section-padding py-20 md:py-32 text-center">
                <p className="subheading text-gold mb-4 tracking-[0.35em]">
                    Our Story
                </p>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal tracking-tight mb-6">
                    About the Collection
                </h1>
                <p className="font-sans text-charcoal/55 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Two decades of passion, authenticity, and rock n&apos; roll history —
                    meticulously curated by collector Paul Myhill.
                </p>
            </section>

            {/* ── Mission Statement ── */}
            <section className="section-padding py-20 md:py-28">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-px bg-gold mx-auto mb-10" />
                    <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed">
                        The <strong>Heal The World</strong> collection is a premier private
                        archive of authenticated rock n&apos; roll memorabilia — over 2,000
                        artifacts spanning nearly 70 years of music history, from AC/DC to
                        ZZ Top.
                    </p>
                    <div className="w-16 h-px bg-gold mx-auto mt-10" />
                </div>
            </section>

            {/* ── Collection Photo ── */}
            <section className="section-padding pb-16 md:pb-24">
                <div className="max-w-6xl mx-auto">
                    <Image
                        src="/hero-landscape.jpg"
                        alt="The Heal The World memorabilia collection with owner"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                    />
                    <p className="text-xs text-charcoal/40 tracking-widest uppercase mt-4 text-center font-sans">
                        The Heal The World Collection — Paul Myhill
                    </p>
                </div>
            </section>

            {/* ── Feature Cards ── */}
            <section className="section-padding py-16 md:py-24 bg-warm-gray">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="subheading text-gold mb-3">What Sets Us Apart</p>
                        <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
                            Built on Integrity
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-ivory p-8 md:p-10 border border-light-border hover:border-gold/30 transition-all duration-500 group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <IconShield />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Forensic Authentication</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                Every item undergoes rigorous third-party forensic review by
                                PSA/DNA, JSA, REAL, and Beckett — the gold standard in
                                authentication. No exceptions.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-ivory p-8 md:p-10 border border-light-border hover:border-gold/30 transition-all duration-500 group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <IconGuitar />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Museum-Grade Instruments</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                Each guitar is matched to the artist&apos;s preferred make and
                                model. B.B. King required a Gibson Lucille. Most are signed on
                                the body — not just a pickguard.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-ivory p-8 md:p-10 border border-light-border hover:border-gold/30 transition-all duration-500 group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <IconClock />
                            </div>
                            <h3 className="font-serif text-xl mb-3">20+ Years of Curation</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                Meticulously assembled over more than two decades. Many pieces
                                feature signatures of artists no longer with us — irreplaceable
                                history.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-ivory p-8 md:p-10 border border-light-border hover:border-gold/30 transition-all duration-500 group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <IconFingerprint />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Provenance Documented</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                Signing photographs, letters of provenance, and certificates of
                                authenticity are maintained for every piece. Full documentation
                                available upon request.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-ivory p-8 md:p-10 border border-light-border hover:border-gold/30 transition-all duration-500 group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <IconStar />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Premium &amp; Private</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                This is not a storefront. Every inquiry is handled with
                                discretion and care. We will not be cheap — this is a premium
                                private collection.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-ivory p-8 md:p-10 border border-light-border hover:border-gold/30 transition-all duration-500 group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <IconGlobe />
                            </div>
                            <h3 className="font-serif text-xl mb-3">70 Years of Rock History</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                                From Chuck Berry and the Everly Brothers to Nirvana and Green
                                Day — the archive spans nearly seven decades of music&apos;s most
                                iconic artists.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Blockquote ── */}
            <section className="section-padding py-20 md:py-28 bg-charcoal">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl text-ivory/90 italic leading-relaxed">
                        &ldquo;Up to 85% of rock n&apos; roll memorabilia sold online is
                        fake. This collection exists as a counterpoint to that reality —
                        every item authenticated, every provenance verified, every instrument
                        real.&rdquo;
                    </p>
                    <div className="w-12 h-px bg-gold mx-auto my-8" />
                    <p className="text-xs tracking-[0.2em] uppercase text-ivory/40 font-sans">
                        Paul Myhill — Founder &amp; Curator
                    </p>
                </div>
            </section>

            {/* ── Stats Banner ── */}
            <section className="section-padding py-16 md:py-20 bg-warm-gray">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { stat: "2,000+", label: "Artifacts" },
                        { stat: "100+", label: "Artists" },
                        { stat: "20+", label: "Years" },
                        { stat: "70", label: "Years of History" },
                    ].map((item, i) => (
                        <div key={i}>
                            <p className="font-serif text-3xl md:text-4xl text-gold mb-1">
                                {item.stat}
                            </p>
                            <p className="text-xs tracking-[0.15em] uppercase text-charcoal/50 font-sans">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-padding py-20 md:py-28 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                    Interested in the Collection?
                </h2>
                <p className="text-sm text-charcoal/60 max-w-md mx-auto mb-8 font-sans leading-relaxed">
                    Whether you&apos;re a collector, museum, or investor — we&apos;d love
                    to hear from you. Every inquiry is treated with discretion.
                </p>
                <Link href="/contact" className="btn-gold">
                    Get in Touch
                </Link>
            </section>
        </>
    );
}
