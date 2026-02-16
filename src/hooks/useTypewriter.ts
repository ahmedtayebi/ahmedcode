"use client";

import { useState, useEffect } from "react";

interface TypewriterConfig {
    speed?: number;
    lineDelay?: number;
    startDelay?: number;
}

interface TypewriterResult {
    displayedLines: string[];
    currentLine: string;
    isComplete: boolean;
    currentLineIndex: number;
}

export function useTypewriter(
    lines: string[],
    config?: TypewriterConfig
): TypewriterResult {
    const speed = config?.speed ?? 40;
    const lineDelay = config?.lineDelay ?? 600;
    const startDelay = config?.startDelay ?? 300;

    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState<string>("");
    const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
    const [isComplete, setIsComplete] = useState<boolean>(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            setDisplayedLines(lines);
            setCurrentLine("");
            setIsComplete(true);
            setCurrentLineIndex(lines.length);
            return;
        }

        if (currentLineIndex >= lines.length) {
            setIsComplete(true);
            return;
        }

        const targetLine = lines[currentLineIndex];

        if (currentCharIndex === 0 && currentLineIndex === 0) {
            const startTimer = setTimeout(() => {
                setCurrentCharIndex(1);
            }, startDelay);
            return () => clearTimeout(startTimer);
        }

        if (currentCharIndex === 0 && currentLineIndex > 0) {
            const delayTimer = setTimeout(() => {
                setCurrentCharIndex(1);
            }, lineDelay);
            return () => clearTimeout(delayTimer);
        }

        if (currentCharIndex <= targetLine.length) {
            const typingTimer = setTimeout(() => {
                setCurrentLine(targetLine.slice(0, currentCharIndex));
                setCurrentCharIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(typingTimer);
        }

        if (currentCharIndex > targetLine.length) {
            setDisplayedLines((prev) => [...prev, targetLine]);
            setCurrentLine("");
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
        }
    }, [
        currentLineIndex,
        currentCharIndex,
        lines,
        speed,
        lineDelay,
        startDelay,
    ]);

    return {
        displayedLines,
        currentLine,
        isComplete,
        currentLineIndex,
    };
}
