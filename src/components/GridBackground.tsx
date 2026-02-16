"use client";

export default function GridBackground() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 animate-grid-drift"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(30, 30, 46, 0.35) 2px, transparent 2px)`,
                backgroundSize: "32px 32px",
            }}
        />
    );
}
