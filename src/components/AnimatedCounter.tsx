"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

export default function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const currentCount =
                suffix === "∞"
                    ? end
                    : Math.floor(progress * end);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, end, duration, suffix]);

    return (
        <motion.div
            ref={ref}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <span className="font-display text-5xl font-bold text-accent">
                {suffix === "∞" ? "∞" : `${count}${suffix}`}
            </span>
        </motion.div>
    );
}
