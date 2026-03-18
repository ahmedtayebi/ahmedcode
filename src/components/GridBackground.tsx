"use client";

export default function GridBackground() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-[-10] animate-grid-drift opacity-40"
            style={{
                backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
                backgroundSize: "44px 44px",
            }}
        />
    );
}
