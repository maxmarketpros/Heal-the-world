import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
    { href: "/guitars", label: "Guitars" },
    { href: "/drumheads", label: "Drumheads" },
    { href: "/posters", label: "Posters" },
    { href: "/photographs", label: "Photographs" },
    { href: "/vinyl", label: "Vinyl" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-charcoal text-ivory/80">
            {/* Top Section */}
            <div className="section-padding py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Image
                            src="/logo.png"
                            alt="Heal The World — Rock N' Roll Memorabilia Collection"
                            width={560}
                            height={160}
                            className="h-32 md:h-36 w-auto object-contain mb-6"
                        />
                        <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
                            A premier private collection of authenticated,
                            artist-signed instruments and artifacts. Meticulously assembled
                            over two decades by Paul Myhill.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="subheading text-ivory/40 mb-6">Archive</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="subheading text-ivory/40 mb-6">Inquiries</h4>
                        <div className="space-y-3 text-sm text-ivory/60">
                            <p>
                                <a
                                    href="tel:+19568218789"
                                    className="hover:text-gold transition-colors duration-300"
                                >
                                    +1 (956) 821-8789
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:agustinmartinezmd@gmail.com"
                                    className="hover:text-gold transition-colors duration-300"
                                >
                                    agustinmartinezmd@gmail.com
                                </a>
                            </p>
                            <div className="pt-4">
                                <Link href="/contact" className="btn-gold text-xs">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Authenticity Statement */}
            <div className="border-t border-ivory/10">
                <div className="section-padding py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-ivory/40 text-center md:text-left">
                        Every item in this collection is backed by forensic third-party
                        authentication including PSA/DNA, JSA, REAL, and Beckett verification.
                    </p>
                    <p className="text-xs text-ivory/30">
                        &copy; {new Date().getFullYear()} Heal The World. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
