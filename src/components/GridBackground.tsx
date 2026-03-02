"use client";

export default function GridBackground() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-[-10] animate-grid-drift opacity-60"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(129, 140, 248, 0.4) 1.5px, transparent 1.5px)`,
                backgroundSize: "44px 44px",
            }}
        />
    );
}
