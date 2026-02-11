import Link from "next/link";

interface PlaceholderPageProps {
    title: string;
    category: string;
}

export default function PlaceholderPage({ title, category }: PlaceholderPageProps) {
    return (
        <>
            <section className="section-padding py-20 md:py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <p className="subheading text-gold mb-4">Coming Soon</p>
                <h1 className="heading-editorial text-4xl md:text-6xl mb-6">
                    {title}
                </h1>
                <p className="font-sans text-medium-gray max-w-xl mx-auto leading-relaxed mb-10">
                    Our {category} collection is being curated for online viewing. Please
                    contact us directly for inquiries about available pieces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-gold">
                        Get in Touch
                    </Link>
                    <Link href="/" className="btn-primary">
                        Return Home
                    </Link>
                </div>
            </section>

            <section className="section-padding py-16 bg-warm-gray text-center">
                <p className="text-sm text-medium-gray max-w-md mx-auto">
                    This collection includes over 2,000 authenticated artifacts spanning
                    nearly seven decades of rock history. Viewing is by appointment only.
                </p>
            </section>
        </>
    );
}
