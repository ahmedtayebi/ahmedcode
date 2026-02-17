"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import TerminalWindow from "@/components/TerminalWindow";
import GlowButton from "@/components/GlowButton";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const renderSocialIcon = (icon: string) => {
        switch (icon) {
            case "github":
                return (
                    <svg
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                );
            case "tiktok":
                return (
                    <svg
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
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
                        {/* Placeholder backup if complex path fails is omitted to keep it clean, utilizing the explicit paths above */}
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="bg-bg-secondary px-6 py-24">
            <div className="mx-auto max-w-3xl">
                <AnimatedSection>
                    <SectionLabel number="04" name="contact" />
                    <h2 className="font-display mb-16 text-center text-4xl font-bold text-text-primary md:text-5xl">
                        Let's Build Together
                    </h2>

                    <TerminalWindow title="contact.sh" className="mb-8">
                        <div className="space-y-1 text-sm">
                            <div className="text-code-blue">
                                &gt; init contact --mode=collaboration
                            </div>
                            <div className="text-code-green">
                                Ready to build something remarkable.
                            </div>
                            <div className="text-code-green">Let's talk.</div>
                        </div>
                    </TerminalWindow>

                    {!submitted ? (
                        <motion.form
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="font-code mb-2 block text-sm text-code-blue"
                                >
                                    // your_name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tayebi Ahmed"
                                    className="font-code w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-all focus:border-accent focus:shadow-[0_0_20px_rgba(108,99,255,0.15)] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-code mb-2 block text-sm text-code-blue"
                                >
                                    // your_email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="hello@example.com"
                                    className="font-code w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-all focus:border-accent focus:shadow-[0_0_20px_rgba(108,99,255,0.15)] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="font-code mb-2 block text-sm text-code-blue"
                                >
                                    // message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="font-code w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-all focus:border-accent focus:shadow-[0_0_20px_rgba(108,99,255,0.15)] focus:outline-none"
                                />
                            </div>

                            <GlowButton variant="terminal" type="submit">
                                send_message
                            </GlowButton>
                        </motion.form>
                    ) : (
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            className="rounded-xl border border-accent bg-accent-glow p-8 text-center"
                        >
                            <div className="font-code mb-2 text-code-green">
                                &gt; message_sent ✓
                            </div>
                            <p className="font-display text-text-secondary">
                                I'll get back to you within 24 hours.
                            </p>
                        </motion.div>
                    )}

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="font-display mb-6 text-sm text-text-muted">
                            Or reach me directly:
                        </p>
                        <div className="flex justify-center gap-6">
                            {SOCIAL_LINKS.map((social) => (
                                <motion.a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className="flex flex-col items-center gap-2 text-text-muted transition-all hover:text-accent hover:drop-shadow-[0_0_10px_rgba(108,99,255,0.5)]"
                                    data-cursor="pointer"
                                    aria-label={social.label}
                                >
                                    {renderSocialIcon(social.icon)}
                                    <span className="font-code text-xs">
                                        {social.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}
