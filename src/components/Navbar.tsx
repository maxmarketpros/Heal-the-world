"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/guitars", label: "Guitars" },
    { href: "/drumheads", label: "Drumheads" },
    { href: "/posters", label: "Posters" },
    { href: "/photographs", label: "Photographs" },
    { href: "/backstage-passes", label: "Backstage Passes" },
    { href: "/pit-guards", label: "Pit Guards" },
    { href: "/pick-guards", label: "Pick Guards" },
    { href: "/vinyl", label: "Vinyl" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-light-border">
            <nav className="section-padding flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Heal The World"
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                    />
                    <span className="hidden sm:block font-serif text-lg tracking-wide">
                        Heal The World
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-6 text-xs tracking-[0.15em] uppercase font-sans">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-charcoal/70 hover:text-charcoal transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link href="/contact" className="hidden xl:block btn-gold text-xs">
                    Get in Touch
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="xl:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`w-6 h-px bg-charcoal transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-px bg-charcoal transition-all duration-300 ${open ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-px bg-charcoal transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {open && (
                <div className="xl:hidden bg-ivory border-t border-light-border">
                    <div className="flex flex-col py-6 section-padding gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-gold text-xs text-center mt-4"
                            onClick={() => setOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
