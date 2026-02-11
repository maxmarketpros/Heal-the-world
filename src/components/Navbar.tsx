"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const MAIN_LINKS = [
    { href: "/", label: "Home" },
    { href: "/guitars", label: "Guitars" },
    { href: "/drumheads", label: "Drumheads" },
    { href: "/posters", label: "Posters" },
    { href: "/vinyl", label: "Vinyl" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const MORE_LINKS = [
    { href: "/photographs", label: "Photographs" },
    { href: "/backstage-passes", label: "Backstage Passes" },
    { href: "/pit-guards", label: "Pit Guards" },
    { href: "/pick-guards", label: "Pick Guards" },
];

const ALL_LINKS = [...MAIN_LINKS, ...MORE_LINKS];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);

    // Close "More" dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
                setMoreOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                    {MAIN_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-charcoal/70 hover:text-charcoal transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* More Dropdown */}
                    <div ref={moreRef} className="relative">
                        <button
                            onClick={() => setMoreOpen(!moreOpen)}
                            className="flex items-center gap-1 text-charcoal/70 hover:text-charcoal transition-colors duration-300"
                        >
                            More
                            <svg
                                className={`w-3 h-3 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {moreOpen && (
                            <div className="absolute top-full right-0 mt-3 bg-ivory border border-light-border shadow-lg min-w-[200px] py-2 z-50">
                                {MORE_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal hover:bg-warm-gray transition-colors duration-200"
                                        onClick={() => setMoreOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop CTA */}
                <Link href="/contact" className="hidden xl:block btn-gold text-xs">
                    Get in Touch
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="xl:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`w-6 h-px bg-charcoal transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-px bg-charcoal transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-px bg-charcoal transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu Overlay — show ALL links flat */}
            {mobileOpen && (
                <div className="xl:hidden bg-ivory border-t border-light-border">
                    <div className="flex flex-col py-6 section-padding gap-4">
                        {ALL_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-gold text-xs text-center mt-4"
                            onClick={() => setMobileOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
