"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimatedSection({
    children,
    className,
    delay = 0,
}: AnimatedSectionProps) {
    const customVariants = delay
        ? {
            hidden: fadeUp.hidden,
            visible: {
                ...fadeUp.visible,
                transition: {
                    ...(fadeUp.visible as any).transition,
                    delay,
                },
            },
        }
        : fadeUp;

    return (
        <motion.div
            variants={customVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
