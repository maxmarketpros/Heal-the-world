import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, getProductsByType } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featuredGuitars = getFeaturedProducts("Guitar", 10);
  const featuredDrumheads = getProductsByType("Drumhead").slice(0, 8);

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden">
        {/* Background — landscape photo with owner */}
        <Image
          src="/hero-landscape.jpg"
          alt="The Heal The World memorabilia collection with owner"
          fill
          className="object-cover opacity-35"
          priority
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Heal The World logo"
              width={100}
              height={100}
              className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-90"
            />
          </div>

          <p className="subheading text-gold mb-5 tracking-[0.35em]">
            Est. 2003&ensp;·&ensp;Private Collection
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory tracking-tight mb-4">
            Heal The World
          </h1>
          <div className="w-20 h-px bg-gold mx-auto my-6" />
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-ivory/80 italic">
            Rock n&apos; Roll Memorabilia Collection
          </p>
          <p className="font-sans text-sm md:text-base text-ivory/55 max-w-xl mx-auto mt-6 leading-relaxed">
            A premier archive of authenticated, artist-signed instruments and
            artifacts spanning nearly 70 years of rock history.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/guitars" className="btn-gold">
              Explore the Archive
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold/60 text-gold px-8 py-3 text-sm tracking-[0.15em] uppercase font-sans transition-all duration-300 hover:bg-gold hover:text-ivory"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom fade for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  WHY THIS COLLECTION IS DIFFERENT                             */}
      {/* ============================================================ */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="subheading text-gold mb-4">The Standard of Authenticity</p>
            <h2 className="heading-editorial text-3xl md:text-5xl">
              Why This Collection Is Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Authenticity Crisis */}
            <div className="p-8 border border-light-border hover:border-gold/30 transition-colors duration-500">
              <div className="text-5xl font-serif text-gold mb-4">85%</div>
              <h3 className="font-serif text-xl mb-3">
                The Authenticity Crisis
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Up to 85% of rock n&apos; roll memorabilia sold online is fake.
                Every item in this collection undergoes rigorous forensic
                authentication to ensure absolute provenance.
              </p>
            </div>

            {/* Card 2: Forensic Review */}
            <div className="p-8 border border-light-border hover:border-gold/30 transition-colors duration-500">
              <div className="text-4xl font-serif text-gold mb-4">✓</div>
              <h3 className="font-serif text-xl mb-3">
                Trusted Authenticators
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Third-party forensic review by PSA/DNA, JSA, REAL, and Beckett —
                plus supporting signing photographs and letters of provenance
                wherever available.
              </p>
            </div>

            {/* Card 3: Real Instruments */}
            <div className="p-8 border border-light-border hover:border-gold/30 transition-colors duration-500">
              <div className="text-4xl font-serif text-gold mb-4">♪</div>
              <h3 className="font-serif text-xl mb-3">
                Signed on the Body
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Most guitars are signed directly on the body — not just a
                pickguard. These are Gibson, Fender, PRS, and Custom Shop
                instruments matched to each artist&apos;s standards.
              </p>
            </div>

            {/* Card 4: Artist-Strummed */}
            <div className="p-8 border border-light-border hover:border-gold/30 transition-colors duration-500">
              <div className="text-4xl font-serif text-gold mb-4">★</div>
              <h3 className="font-serif text-xl mb-3">
                Strummed by the Artist
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed">
                Every guitar was strummed by the artist at signing. Select
                instruments were used on tour — including pieces from David
                Bowie, Dave Mustaine, and the Everly Brothers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURED GUITARS (from CSV)                                  */}
      {/* ============================================================ */}
      <section className="section-padding py-24 md:py-32 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="subheading text-gold mb-3">The Archive</p>
              <h2 className="heading-editorial text-3xl md:text-5xl">
                Signed Guitars
              </h2>
            </div>
            <Link
              href="/guitars"
              className="text-sm tracking-[0.15em] uppercase text-charcoal/60 hover:text-charcoal transition-colors border-b border-charcoal/30 pb-1"
            >
              View All Guitars →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {featuredGuitars.map((product) => (
              <ProductCard
                key={product.handle}
                product={product}
                basePath="/guitars"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURED DRUMHEADS (from CSV)                                */}
      {/* ============================================================ */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="subheading text-gold mb-3">The Archive</p>
              <h2 className="heading-editorial text-3xl md:text-5xl">
                Signed Drumheads
              </h2>
            </div>
            <Link
              href="/drumheads"
              className="text-sm tracking-[0.15em] uppercase text-charcoal/60 hover:text-charcoal transition-colors border-b border-charcoal/30 pb-1"
            >
              View All Drumheads →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDrumheads.map((product) => (
              <ProductCard
                key={product.handle}
                product={product}
                basePath="/drumheads"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  VINYL HIGHLIGHTS (placeholder)                               */}
      {/* ============================================================ */}
      <section className="section-padding py-24 md:py-32 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="subheading text-gold mb-3">Coming Soon</p>
            <h2 className="heading-editorial text-3xl md:text-5xl">
              Vinyl Collection
            </h2>
          </div>

          {/* TODO: Plug in vinyl CSV data here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Rare First Pressings", sub: "Original studio albums" },
              { title: "Signed Vinyl", sub: "Artist-autographed records" },
              { title: "Limited Editions", sub: "Numbered collector releases" },
              { title: "Concert Recordings", sub: "Live performance pressings" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square bg-ivory border border-light-border flex flex-col items-center justify-center text-center p-8 hover:border-gold/30 transition-colors duration-500"
              >
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-medium-gray">{item.sub}</p>
                <p className="text-xs text-gold mt-4 tracking-widest uppercase">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  POSTERS & PHOTOGRAPHY (placeholder)                          */}
      {/* ============================================================ */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="subheading text-gold mb-3">Coming Soon</p>
            <h2 className="heading-editorial text-3xl md:text-5xl">
              Posters &amp; Photography
            </h2>
          </div>

          {/* TODO: Plug in posters/photographs CSV data here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Concert Posters", sub: "Original venue posters from iconic tours" },
              { title: "Backstage Photography", sub: "Rare behind-the-scenes moments" },
              { title: "Tour Programs", sub: "Official tour memorabilia" },
              { title: "Promotional Material", sub: "Label and press releases" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-warm-gray border border-light-border flex flex-col items-center justify-center text-center p-8 hover:border-gold/30 transition-colors duration-500"
              >
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-medium-gray">{item.sub}</p>
                <p className="text-xs text-gold mt-4 tracking-widest uppercase">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROVENANCE / STORY SECTION                                   */}
      {/* ============================================================ */}
      <section className="section-padding py-24 md:py-32 bg-charcoal text-ivory">
        <div className="max-w-5xl mx-auto">
          <p className="subheading text-gold mb-4 text-center">
            The Collection
          </p>
          <h2 className="heading-editorial text-3xl md:text-5xl text-center mb-12">
            Two Decades. Over 2,000 Artifacts.
            <br />
            From AC/DC to ZZ Top.
          </h2>

          <div className="space-y-8 text-ivory/70 font-sans leading-relaxed max-w-3xl mx-auto">
            <p>
              Meticulously assembled over more than twenty years by collector
              Paul Myhill, this private archive represents one of the most
              comprehensive authenticated collections of rock n&apos; roll
              memorabilia ever assembled. There is simply no collection like it.
            </p>

            <p>
              Each instrument tells a story — from B.B. King&apos;s iconic
              Gibson Lucille (the only guitar model he would play, named after a
              woman who inspired a near-fatal fight) to David Bowie&apos;s
              Eastwood Airline Twin Tone used on the &ldquo;A Reality
              Tour.&rdquo;
            </p>

            <div className="border-l-2 border-gold pl-6 my-10">
              <p className="font-serif text-xl text-ivory italic">
                &ldquo;The Rolling Stones guitar includes the signature of Mick
                Taylor — the so-called &apos;fifth Stone&apos; — making it one
                of the rarest pieces in the collection.&rdquo;
              </p>
            </div>

            <p>
              The collection includes signed instruments and artifacts from
              legends no longer with us — artists whose signatures can never
              again be obtained. From the Everly Brothers&apos; 1941 Gibson
              Kalamazoo to Paul McCartney&apos;s left-handed studio guitar, each
              piece carries irreplaceable historical significance.
            </p>

            <p className="text-ivory/50 text-sm italic">
              We will not be cheap. This is a premium private collection, and
              every inquiry is treated with the discretion and care it deserves.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-gold">
              Inquire About the Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
