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
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                );
            case "instagram":
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
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                );
            case "facebook":
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                );
            case "x":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                );
            case "tiktok":
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
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z"></path>
                    </svg>
                );
            case "behance":
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
                        <path d="M15 11h6v-2h-6M15 6h6v4h-6M4.5 9h-2M4 7h6M8 11h-2M8 14h-2M11 11h-2M11 7h-2M11 14h-2M8 9h3" stroke="none" fill="none" />
                        <circle cx="6" cy="11" r="3" />
                        <path d="M17 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path d="M14 6h6" />
                        {/* Simplified Behance using basic shapes as placeholder if complex path fails */}
                        <path d="M3 9h5c1 0 1.5-.5 1.5-1.5S9 6 8 6H3v8h5.5c1 0 1.5-.5 1.5-1.5S9.5 11 8.5 11H3M13.5 9h7M17 6c-2.5 0-4 1.5-4 4s1.5 4 4 4 4-1.5 4-4H13.5" stroke="currentColor" />
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
