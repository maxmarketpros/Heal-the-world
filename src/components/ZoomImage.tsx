"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface ZoomImageProps {
    src: string;
    alt: string;
    zoomLevel?: number;
}

export default function ZoomImage({ src, alt, zoomLevel = 2.5 }: ZoomImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [zooming, setZooming] = useState(false);
    const [position, setPosition] = useState({ x: 50, y: 50 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
    }

    return (
        <div
            ref={containerRef}
            className="relative aspect-[3/4] overflow-hidden bg-warm-gray cursor-crosshair group"
            onMouseEnter={() => setZooming(true)}
            onMouseLeave={() => setZooming(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Base image */}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
            />

            {/* Zoomed overlay */}
            {zooming && (
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: `${zoomLevel * 100}%`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        backgroundRepeat: "no-repeat",
                    }}
                />
            )}

            {/* Hint label */}
            <div
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-charcoal/70 backdrop-blur-sm text-ivory text-xs tracking-widest uppercase px-4 py-2 transition-opacity duration-300 ${zooming ? "opacity-0" : "opacity-100"
                    }`}
            >
                Hover to Zoom
            </div>
        </div>
    );
}
