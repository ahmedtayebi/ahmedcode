"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "ghost" | "terminal";
    onClick?: () => void;
    href?: string;
    target?: string;
    className?: string;
}

export default function GlowButton({
    children,
    variant = "primary",
    onClick,
    href,
    target,
    className,
}: GlowButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97]";

    const variantClasses = {
        primary:
            "bg-accent text-white font-display hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(108,99,255,0.4)]",
        ghost:
            "border border-accent bg-transparent text-accent font-display hover:bg-accent hover:text-white",
        terminal:
            "border border-border-subtle bg-surface font-code text-text-secondary hover:border-accent hover:text-accent before:content-['>_']",
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, target } : { onClick };

    return (
        <Component
            {...props}
            whileHover={{ y: -2 }}
            className={cn(baseClasses, variantClasses[variant], className)}
            data-cursor="pointer"
        >
            {children}
        </Component>
    );
}
