"use client";

import { useState, useEffect, useRef } from "react";
import { lerp } from "@/lib/utils";

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return mousePosition;
}

export default function CustomCursor() {
    const mousePosition = useMousePosition();
    const [isPointer, setIsPointer] = useState(false);
    const outerCursorRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>();

    const outerPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        document.documentElement.classList.add("cursor-none");

        return () => {
            document.documentElement.classList.remove("cursor-none");
        };
    }, []);

    useEffect(() => {
        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isPointerElement =
                target.hasAttribute("data-cursor") &&
                target.getAttribute("data-cursor") === "pointer";
            const isButton = target.tagName === "BUTTON";
            const isLink = target.tagName === "A";

            setIsPointer(isPointerElement || isButton || isLink);
        };

        window.addEventListener("mousemove", checkHover);

        return () => {
            window.removeEventListener("mousemove", checkHover);
        };
    }, []);

    useEffect(() => {
        const animate = () => {
            outerPosition.current.x = lerp(
                outerPosition.current.x,
                mousePosition.x,
                0.12
            );
            outerPosition.current.y = lerp(
                outerPosition.current.y,
                mousePosition.y,
                0.12
            );

            if (outerCursorRef.current) {
                outerCursorRef.current.style.transform = `translate(${outerPosition.current.x}px, ${outerPosition.current.y}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [mousePosition]);

    return (
        <>
            {/* Inner dot - sharp and precise */}
            <div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isPointer ? 0.5 : 1})`,
                }}
            />
            {/* Outer ring - fluid and glowing */}
            <div
                ref={outerCursorRef}
                className={`pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 backdrop-blur-[2px] transition-all duration-500 ease-out ${isPointer
                    ? "h-16 w-16 bg-accent/5 border-accent/50 shadow-[0_0_40px_rgba(129,140,248,0.3)]"
                    : "h-10 w-10 bg-transparent shadow-[0_0_20px_rgba(129,140,248,0.1)]"
                    }`}
            />
        </>
    );
}
