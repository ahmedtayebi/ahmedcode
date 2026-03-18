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
    type,
    className,
}: GlowButtonProps & { type?: "button" | "submit" | "reset" }) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97]";

    const variantClasses = {
        primary:
            "bg-accent text-white font-display hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(129,140,248,0.4)]",
        ghost:
            "border border-accent/50 bg-accent/5 text-accent font-display hover:bg-accent hover:text-white backdrop-blur-sm",
        terminal:
            "border border-border-subtle bg-bg-secondary/50 backdrop-blur-md font-code text-text-secondary hover:border-accent hover:text-accent before:content-['>\u00a0']",
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, target } : { onClick, type };

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
