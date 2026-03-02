"use client";

import { cn } from "@/lib/utils";

interface TechTagProps {
    label: string;
    size?: "sm" | "md";
}

export default function TechTag({ label, size = "md" }: TechTagProps) {
    const sizeClasses = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
    };

    return (
        <span
            className={cn(
                "inline-block rounded-full border border-white/10 bg-bg-secondary/30 backdrop-blur-sm font-code text-text-secondary transition-all duration-300",
                "hover:border-accent/40 hover:text-accent hover:shadow-[0_0_15px_rgba(129,140,248,0.2)]",
                sizeClasses[size]
            )}
        >
            {label}
        </span>
    );
}
