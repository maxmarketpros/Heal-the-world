"use client";

import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // mailto fallback
        const subject = encodeURIComponent(
            `Inquiry from ${form.name} — Heal The World Collection`
        );
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:agustinmartinezmd@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero */}
            <section className="section-padding py-20 md:py-28 text-center">
                <p className="subheading text-gold mb-4">Private Inquiries</p>
                <h1 className="heading-editorial text-4xl md:text-6xl mb-6">
                    Get in Touch
                </h1>
                <p className="font-sans text-medium-gray max-w-2xl mx-auto leading-relaxed">
                    Every inquiry is handled with discretion and care. Whether you&apos;re
                    interested in a specific piece, have questions about provenance, or
                    would like to arrange a viewing — we&apos;d love to hear from you.
                </p>
            </section>

            <div className="divider max-w-7xl mx-auto" />

            {/* Contact Section */}
            <section className="section-padding py-16 md:py-24">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="font-serif text-2xl mb-6">Contact Information</h2>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="subheading text-gold mb-1 text-xs">Phone</p>
                                    <a
                                        href="tel:+19568218789"
                                        className="text-charcoal hover:text-gold transition-colors"
                                    >
                                        +1 (956) 821-8789
                                    </a>
                                </div>
                                <div>
                                    <p className="subheading text-gold mb-1 text-xs">Email</p>
                                    <a
                                        href="mailto:agustinmartinezmd@gmail.com"
                                        className="text-charcoal hover:text-gold transition-colors"
                                    >
                                        agustinmartinezmd@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl mb-3">Inquiries Welcome</h3>
                            <p className="text-sm text-medium-gray leading-relaxed">
                                This is a private collection. Viewing is by appointment only.
                                Please include details about the piece(s) you are interested in
                                and we will respond promptly.
                            </p>
                        </div>

                        <div className="p-6 border border-light-border">
                            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                                Authentication
                            </p>
                            <p className="text-sm text-medium-gray leading-relaxed">
                                All items are backed by forensic third-party authentication
                                including PSA/DNA, JSA, REAL, and Beckett verification.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-gold/30 bg-warm-gray">
                                <div className="text-5xl mb-4">✓</div>
                                <h3 className="font-serif text-2xl mb-3">
                                    Thank You for Your Inquiry
                                </h3>
                                <p className="text-sm text-medium-gray">
                                    Your email client should have opened with your message. We
                                    will respond within 24–48 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn-primary mt-8 text-xs"
                                >
                                    Send Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs tracking-[0.15em] uppercase text-medium-gray mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                        className="w-full border border-light-border bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs tracking-[0.15em] uppercase text-medium-gray mb-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        className="w-full border border-light-border bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-xs tracking-[0.15em] uppercase text-medium-gray mb-2"
                                    >
                                        Phone (Optional)
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                        className="w-full border border-light-border bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs tracking-[0.15em] uppercase text-medium-gray mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                        className="w-full border border-light-border bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about the piece you're interested in..."
                                    />
                                </div>

                                <button type="submit" className="btn-gold w-full text-center">
                                    Send Inquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
