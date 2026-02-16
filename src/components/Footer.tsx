"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const handleLinkClick = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const renderSocialIcon = (icon: string) => {
        switch (icon) {
            case "github":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                );
            case "linkedin":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                );
            case "dribbble":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.692 5.442c1.465 1.794 2.371 4.068 2.432 6.558-1.885-.402-3.666-.522-5.237-.402-.163-.402-.326-.794-.5-1.185 1.848-.762 3.463-1.783 4.305-4.971zm-8.692-3.567c2.608 0 4.983.925 6.852 2.463-.73 2.926-2.128 3.891-3.817 4.543-1.196-2.204-2.536-4.067-3.817-5.518.565-.093 1.14-.155 1.782-.155zm-3.817.742c1.26 1.411 2.577 3.234 3.754 5.387-2.463.653-5.387.915-8.239 1.031.653-3.545 3.234-6.357 6.485-7.418zm-6.558 8.383c0-.065 0-.13.011-.196 3.234-.13 6.558-.457 9.346-1.228.174.347.347.705.51 1.063-3.676 1.076-6.558 3.676-8.208 6.558-1.065-1.784-1.649-3.87-1.649-6.197zm8.383 8.383c-2.39 0-4.556-.826-6.297-2.204 1.445-2.577 4.026-4.926 7.248-5.906 1.031 2.675 1.783 5.602 2.128 8.817-1.01.195-2.06.293-3.079.293zm4.926-.587c-.304-2.994-1.01-5.83-1.979-8.437 1.391-.152 3.022-.043 4.785.326-.326 3.632-2.347 6.776-5.267 8.111z" />
                    </svg>
                );
            case "email":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect
                            x="2"
                            y="4"
                            width="20"
                            height="16"
                            rx="2"
                        ></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <footer className="border-t border-border-subtle bg-bg-secondary">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <div className="font-code text-lg text-text-primary">
                            &gt; ahmed.code
                        </div>
                        <p className="font-display text-sm text-text-muted">
                            Building products people love
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <h3 className="font-code text-sm text-accent">
                            // quick_links
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="font-code text-sm text-text-muted transition-colors hover:text-accent"
                                    data-cursor="pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-code-green opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-code-green"></span>
                            </span>
                            <span className="font-display text-sm text-text-primary">
                                Available for work
                            </span>
                        </div>
                        <p className="font-code text-xs text-text-muted">
                            Open to opportunities
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-muted transition-colors hover:text-accent"
                                    data-cursor="pointer"
                                    aria-label={social.label}
                                >
                                    {renderSocialIcon(social.icon)}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 border-t border-border-subtle pt-6 text-center font-code text-xs text-text-muted"
                >
                    // designed & built by Tayebi Ahmed · 2026
                </motion.div>
            </div>
        </footer>
    );
}
