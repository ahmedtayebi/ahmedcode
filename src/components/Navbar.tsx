"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import GlowButton from "@/components/GlowButton";
import { cn } from "@/lib/utils";
import { stagger } from "@/lib/animations";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleLinkClick = (href: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
                    scrolled
                        ? "border-b border-border-subtle bg-bg-primary/80 shadow-lg backdrop-blur-md"
                        : "bg-transparent backdrop-blur-md"
                )}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="font-code text-xl font-medium text-text-primary">
                        &gt; ahmed.code
                        <span className="cursor-blink ml-1 inline-block">
                            _
                        </span>
                    </div>

                    <div className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => {
                            const isActive =
                                activeSection === link.href.substring(1);
                            return (
                                <button
                                    key={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={cn(
                                        "font-display relative text-base font-medium transition-colors duration-200",
                                        isActive
                                            ? "text-accent"
                                            : "text-text-secondary hover:text-text-primary"
                                    )}
                                    data-cursor="pointer"
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        />
                                    )}
                                </button>
                            );
                        })}

                        <GlowButton variant="ghost">Hire Me</GlowButton>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex flex-col gap-1.5 md:hidden"
                        data-cursor="pointer"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? 45 : 0,
                                y: mobileMenuOpen ? 8 : 0,
                            }}
                            className="h-0.5 w-6 bg-text-primary transition-all"
                        />
                        <motion.span
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="h-0.5 w-6 bg-text-primary transition-all"
                        />
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? -45 : 0,
                                y: mobileMenuOpen ? -8 : 0,
                            }}
                            className="h-0.5 w-6 bg-text-primary transition-all"
                        />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-bg-primary md:hidden"
                    >
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                            className="flex h-full flex-col items-center justify-center gap-8"
                        >
                            {NAV_LINKS.map((link, index) => (
                                <motion.button
                                    key={link.href}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="font-display text-4xl font-medium text-text-primary transition-colors hover:text-accent"
                                    data-cursor="pointer"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <GlowButton variant="primary">
                                    Hire Me
                                </GlowButton>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
