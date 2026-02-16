"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export default function TerminalWindow({
    children,
    title = "terminal",
    className,
}: TerminalWindowProps) {
    return (
        <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className={cn(
                "overflow-hidden rounded-xl border border-border-subtle bg-surface",
                "shadow-[0_0_40px_rgba(108,99,255,0.08)]",
                className
            )}
        >
            <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-secondary px-4 py-3">
                <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-code text-xs text-text-muted">
                    {title}
                </span>
            </div>
            <div className="font-code p-6">{children}</div>
        </motion.div>
    );
}
