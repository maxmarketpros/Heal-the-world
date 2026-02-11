"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CORRECT_PASSWORD = "htw2026";
const STORAGE_KEY = "htw_authenticated";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        setAuthenticated(stored === "true");
    }, []);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            sessionStorage.setItem(STORAGE_KEY, "true");
            setAuthenticated(true);
        } else {
            setError(true);
            setShake(true);
            setTimeout(() => setShake(false), 600);
        }
    }

    // Still loading auth state from sessionStorage
    if (authenticated === null) {
        return (
            <div className="fixed inset-0 bg-charcoal flex items-center justify-center z-[9999]">
                <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
        );
    }

    // Authenticated — show the site
    if (authenticated) {
        return <>{children}</>;
    }

    // Password gate
    return (
        <div className="fixed inset-0 z-[9999] bg-charcoal flex items-center justify-center overflow-hidden">
            {/* Subtle animated background texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #C9A96E 1px, transparent 1px),
                                      radial-gradient(circle at 75% 75%, #C9A96E 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Content */}
            <div className={`relative z-10 w-full max-w-md px-6 transition-transform duration-300 ${shake ? "animate-shake" : ""}`}>
                {/* Logo */}
                <div className="flex justify-center mb-12">
                    <Image
                        src="/logo.png"
                        alt="Heal The World"
                        width={400}
                        height={120}
                        className="h-20 md:h-24 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
                    <span className="text-[10px] tracking-[0.4em] uppercase text-ivory/30 font-sans">
                        Private Collection
                    </span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-[10px] tracking-[0.3em] uppercase text-ivory/40 font-sans mb-3 text-center"
                        >
                            Enter Password to Continue
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            placeholder="••••••••"
                            autoFocus
                            className="w-full bg-transparent border border-ivory/15 text-ivory text-center text-lg tracking-[0.15em] font-sans px-6 py-4 focus:outline-none focus:border-gold/50 transition-colors duration-300 placeholder:text-ivory/15"
                        />
                        {error && (
                            <p className="text-center text-xs text-red-400/80 mt-3 tracking-wide font-sans">
                                Incorrect password. Please try again.
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full border border-gold/50 text-gold text-xs tracking-[0.3em] uppercase font-sans py-4 hover:bg-gold hover:text-charcoal transition-all duration-500"
                    >
                        Enter Collection
                    </button>
                </form>

                {/* Footer note */}
                <p className="text-center text-[10px] text-ivory/20 tracking-widest uppercase font-sans mt-12">
                    Access is by invitation only
                </p>
            </div>

            {/* Shake animation */}
            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
                    20%, 40%, 60%, 80% { transform: translateX(6px); }
                }
                .animate-shake {
                    animation: shake 0.6s ease-in-out;
                }
            `}</style>
        </div>
    );
}
