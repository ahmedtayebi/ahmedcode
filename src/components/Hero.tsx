"use client";

import { motion } from "framer-motion";

import { useTypewriter } from "@/hooks/useTypewriter";
import TerminalWindow from "@/components/TerminalWindow";
import GlowButton from "@/components/GlowButton";
import TechTag from "@/components/TechTag";
import TechOrbital from "@/components/TechOrbital";
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
            className="mesh-gradient relative flex min-h-screen items-center justify-center px-6 py-24 overflow-hidden"
        >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" 
                 style={{ 
                     backgroundImage: `linear-gradient(#6C63FF 1px, transparent 1px), linear-gradient(90deg, #6C63FF 1px, transparent 1px)`,
                     backgroundSize: '40px 40px',
                     transform: `perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-500px)`,
                 }} 
            />

            {/* Animated Spotlights */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-accent/5 blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-accent-secondary/5 blur-[120px]"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Terminal */}
                    <motion.div 
                        className="lg:col-span-7"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <div className="glass rounded-xl p-1 shadow-2xl">
                            <TerminalWindow title="~/portfolio — zsh">
                                <div className="space-y-2 p-4 min-h-[320px]">
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
                        </div>

                        {isComplete && (
                            <motion.div
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                                className="mt-8 flex flex-col items-start gap-4 sm:flex-row"
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
                    </motion.div>

                    {/* Right Column: Tech Orbital */}
                    <div className="hidden lg:block lg:col-span-5 h-full min-h-[400px]">
                        <TechOrbital />
                    </div>
                </div>

                {/* {isComplete && (
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <p className="font-code text-[10px] uppercase tracking-widest text-text-muted">
                            explore
                        </p>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-accent"
                        >
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </motion.div>
                )} */}
            </div>
        </section>
    );
}
