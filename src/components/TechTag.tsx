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
                "inline-block rounded-md border border-border-subtle bg-surface font-code text-text-secondary transition-all duration-200",
                "hover:border-accent hover:text-accent",
                sizeClasses[size]
            )}
        >
            {label}
        </span>
    );
}
