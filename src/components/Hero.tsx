"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import TerminalWindow from "@/components/TerminalWindow";
import GlowButton from "@/components/GlowButton";
import TechTag from "@/components/TechTag";
import { fadeIn } from "@/lib/animations";

const terminalLines = [
    "> whoami",
    "Tayebi Ahmed",
    "> title",
    "Product Engineer & UI/UX Designer",
    "> stack --primary",
    "[ Flutter ]  [ React ]  [ Next.js ]  [ Figma ]",
    "> mission",
    "Building high-performance digital products.",
    "> view_projects",
];

export default function Hero() {
    const { displayedLines, currentLine, isComplete, currentLineIndex } =
        useTypewriter(terminalLines, {
            speed: 40,
            lineDelay: 600,
            startDelay: 300,
        });

    const renderLine = (line: string, includesCursor: boolean = false) => {
        if (line.startsWith(">")) {
            const parts = line.split(" ");
            return (
                <div className="flex gap-2">
                    <span className="text-code-blue">{parts[0]}</span>
                    <span className="text-code-blue">
                        {parts.slice(1).join(" ")}
                    </span>
                    {includesCursor && (
                        <span className="cursor-blink inline-block">_</span>
                    )}
                </div>
            );
        }

        if (line === "Tayebi Ahmed") {
            return (
                <div className="font-bold text-text-primary">
                    {line}
                    {includesCursor && (
                        <span className="cursor-blink inline-block">_</span>
                    )}
                </div>
            );
        }

        if (line.startsWith("[ ")) {
            const techs = line
                .split("  ")
                .map((t) => t.replace(/[\[\]]/g, "").trim())
                .filter(Boolean);
            return (
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech, i) => (
                        <TechTag key={i} label={tech} size="sm" />
                    ))}
                    {includesCursor && (
                        <span className="cursor-blink inline-block">_</span>
                    )}
                </div>
            );
        }

        return (
            <div className="text-code-green">
                {line}
                {includesCursor && (
                    <span className="cursor-blink inline-block">_</span>
                )}
            </div>
        );
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center px-6 py-24"
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(108,99,255,0.05) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full max-w-[680px]">
                <TerminalWindow title="~/portfolio — zsh">
                    <div className="space-y-2">
                        {displayedLines.map((line, index) => (
                            <div key={index}>{renderLine(line)}</div>
                        ))}
                        {currentLine && (
                            <div>
                                {renderLine(
                                    currentLine,
                                    currentLineIndex < terminalLines.length
                                )}
                            </div>
                        )}
                    </div>
                </TerminalWindow>

                {isComplete && (
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                    >
                        <GlowButton
                            variant="primary"
                            onClick={() => {
                                document
                                    .querySelector("#projects")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            View Projects
                        </GlowButton>
                        <GlowButton variant="ghost" href="/cv.pdf">
                            Download CV
                        </GlowButton>
                    </motion.div>
                )}

                {isComplete && (
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex flex-col items-center gap-2"
                    >
                        <p className="font-code text-xs text-text-muted">
                            scroll to explore
                        </p>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-accent"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
