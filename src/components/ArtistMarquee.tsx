"use client";

const ARTISTS = [
    "AC/DC",
    "Aerosmith",
    "B.B. King",
    "The Beatles",
    "Black Sabbath",
    "Bon Jovi",
    "Chuck Berry",
    "Cream",
    "David Bowie",
    "Def Leppard",
    "Eagles",
    "Eric Clapton",
    "Everly Brothers",
    "Fleetwood Mac",
    "Green Day",
    "Guns N' Roses",
    "Heart",
    "Jimi Hendrix",
    "Jimmy Page",
    "Johnny Cash",
    "KISS",
    "Led Zeppelin",
    "Lynyrd Skynyrd",
    "Metallica",
    "Nirvana",
    "Ozzy Osbourne",
    "Paul McCartney",
    "Pearl Jam",
    "Pink Floyd",
    "Queen",
    "Ramones",
    "Red Hot Chili Peppers",
    "Rolling Stones",
    "Santana",
    "Slash",
    "Stevie Ray Vaughan",
    "The Who",
    "U2",
    "Van Halen",
    "ZZ Top",
];

export default function ArtistMarquee() {
    // Double the list so the animation loops seamlessly
    const doubled = [...ARTISTS, ...ARTISTS];

    return (
        <div className="bg-charcoal/90 backdrop-blur-sm border-t border-ivory/10 overflow-hidden py-3">
            <div className="marquee-track flex whitespace-nowrap">
                {doubled.map((name, i) => (
                    <span
                        key={i}
                        className="inline-block mx-6 text-xs tracking-[0.2em] uppercase text-ivory/40 font-sans"
                    >
                        {name}
                        <span className="inline-block mx-6 text-gold/50">·</span>
                    </span>
                ))}
            </div>

            <style jsx>{`
        .marquee-track {
          animation: marquee 60s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
}
