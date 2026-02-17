"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import TechTag from "@/components/TechTag";
import GlowButton from "@/components/GlowButton";
import { projects } from "@/data/projects";
import { fadeIn, stagger } from "@/lib/animations";

export default function Projects() {
    const secondaryProjects = projects.filter((p) => !p.featured);
    const [parallax, setParallax] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState("Problem");
    const featuredRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!featuredRef.current) return;
        const rect = featuredRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
        setParallax({ x, y });
    };

    const handleMouseLeave = () => {
        setParallax({ x: 0, y: 0 });
    };

    const strategyItems = [
        "→ Brand Immersion — every element reflects cinematic language",
        "→ Visual Storytelling — layout guides emotion, not just information",
        "→ Emotional UX — interactions feel intentional and alive",
        "→ Performance-First — beauty that loads fast and runs smooth",
    ];

    const impactMetrics = [
        { label: "↑ 3x", desc: "Brand perception score" },
        { label: "↓ 40%", desc: "Bounce rate reduction" },
        { label: "↑ 65%", desc: "Session engagement time" },
        { label: "✓", desc: "Positioned as premium" },
    ];

    const techStack = [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "next/image",
        "Performance Optimization",
        "Responsive Architecture",
    ];

    const tabs = ["Problem", "Strategy", "Solution", "Impact"];

    const renderTabContent = () => {
        switch (activeTab) {
            case "Problem":
                return (
                    <p className="text-sm leading-relaxed text-text-secondary">
                        Creative studios consistently fail to translate their
                        cinematic identity into digital form. Most websites
                        feel generic, flat, and emotionally disconnected from
                        the work they represent. The result: premium talent,
                        amateur presence.
                    </p>
                );
            case "Strategy":
                return (
                    <div className="space-y-2">
                        {strategyItems.map((item, i) => (
                            <div
                                key={i}
                                className="font-code text-xs text-text-muted"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                );
            case "Solution":
                return (
                    <ul className="space-y-2 text-sm text-text-secondary">
                        <li>• Immersive scroll-driven animations</li>
                        <li>
                            • Optimized media architecture for heavy visual
                            content
                        </li>
                        <li>
                            • Responsive layout engineered for every screen
                        </li>
                        <li>
                            • Motion design that breathes without sacrificing
                            performance
                        </li>
                    </ul>
                );
            case "Impact":
                return (
                    <div className="space-y-2 rounded-lg border border-accent/30 bg-surface p-4">
                        {impactMetrics.map((metric, i) => (
                            <div
                                key={i}
                                className="flex items-baseline gap-3"
                            >
                                <span className="font-code text-sm font-bold text-accent">
                                    {metric.label}
                                </span>
                                <span className="text-xs text-text-secondary">
                                    {metric.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionLabel number="02" name="projects" />
                    <h2 className="font-display mb-16 text-4xl font-bold text-text-primary md:text-5xl">
                        Featured Work
                    </h2>

                    {/* Featured Project: Ofuq Lab */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-24 w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-lg transition-all duration-500 hover:shadow-[0_0_50px_rgba(108,99,255,0.2)]"
                    >
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Left: Project Preview */}
                            <motion.div
                                ref={featuredRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="group relative min-h-[250px] w-full overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black lg:min-h-[500px]"
                            >
                                <motion.div
                                    style={{
                                        transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                                    }}
                                    transition={{ type: "spring", stiffness: 150 }}
                                    className="relative h-full w-full"
                                >
                                    <Image
                                        src="/images/p1/coverp1.png"
                                        alt="Ofuq Lab - Cinematic Editing Studio Website"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    {/* Dark gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Text overlay */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="font-display w-full break-words text-2xl font-bold text-white">
                                            Ofuq Lab
                                        </div>
                                        <div className="mt-1 w-full break-words text-sm text-gray-300">
                                            Cinematic Editing Studio
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right: Content */}
                            <div className="w-full min-w-0 overflow-hidden p-6 md:p-8 lg:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="font-code mb-3 text-xs uppercase tracking-widest text-accent">
                                        FEATURED PROJECT
                                    </div>
                                    <h3 className="font-display mb-3 w-full break-words text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl">
                                        Ofuq Lab
                                    </h3>
                                    <p className="mb-8 w-full break-words text-base italic text-text-secondary md:text-lg">
                                        "Where cinematic identity meets immersive digital
                                        engineering."
                                    </p>
                                </motion.div>

                                {/* Tabs */}
                                <div className="mb-8 w-full overflow-hidden">
                                    {/* Tab Bar */}
                                    <div className="mb-4 flex flex-wrap gap-1 border-b border-border-subtle">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`font-code cursor-pointer px-3 py-2 text-xs transition-all duration-200 md:px-4 md:text-sm ${activeTab === tab
                                                    ? "border-b-2 border-accent bg-surface/50 text-accent"
                                                    : "text-text-muted hover:text-text-secondary"
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab Content */}
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeOut",
                                        }}
                                        className="min-h-[150px] w-full min-w-0 break-words"
                                    >
                                        {renderTabContent()}
                                    </motion.div>
                                </div>

                                {/* Tech Stack */}
                                <motion.div
                                    className="mb-6 flex flex-wrap gap-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {techStack.map((tech) => (
                                        <TechTag key={tech} label={tech} size="sm" />
                                    ))}
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <motion.div
                                        animate={{
                                            boxShadow: [
                                                "0 0 0 rgba(108,99,255,0)",
                                                "0 0 20px rgba(108,99,255,0.3)",
                                                "0 0 0 rgba(108,99,255,0)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="rounded-lg"
                                    >
                                        <GlowButton
                                            variant="primary"
                                            target="_blank"
                                            href="https://ofuqlab.netlify.app/"
                                            className="inline-flex items-center gap-2"
                                        >
                                            Live Demo
                                            <ExternalLink size={16} />
                                        </GlowButton>
                                    </motion.div>
                                    <GlowButton variant="ghost">
                                        Open Case Study →
                                    </GlowButton>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Projects Grid */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {secondaryProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={fadeIn}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className="flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)]"
                            >
                                <div
                                    style={{
                                        background: project.gradient,
                                    }}
                                    className="relative h-48"
                                >
                                    <div className="absolute right-4 top-4 font-code text-4xl font-bold text-white/30">
                                        {project.number}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="font-display mb-1 text-xl font-bold text-text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 text-sm text-text-secondary">
                                        {project.tagline}
                                    </p>

                                    <div className="mb-3 text-xs text-text-muted">
                                        <p className="line-clamp-2">
                                            <span className="text-code-blue">
                                                Problem:
                                            </span>{" "}
                                            {project.problem}
                                        </p>
                                        <p className="line-clamp-2">
                                            <span className="text-code-blue">
                                                Solution:
                                            </span>{" "}
                                            {project.solution}
                                        </p>
                                    </div>

                                    {project.results && (
                                        <div className="mb-3 rounded border border-accent/20 bg-accent-glow px-2 py-1">
                                            <p className="font-code line-clamp-1 text-xs text-accent">
                                                ✓ Results
                                            </p>
                                        </div>
                                    )}

                                    <div className="mb-4 flex flex-wrap gap-1.5">
                                        {project.stack.slice(0, 3).map((tech) => (
                                            <TechTag
                                                key={tech}
                                                label={tech}
                                                size="sm"
                                            />
                                        ))}
                                        {project.stack.length > 3 && (
                                            <span className="font-code rounded-md bg-surface px-2 py-0.5 text-xs text-text-muted">
                                                +{project.stack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        className="font-code mt-auto text-left text-sm text-accent transition-all hover:underline"
                                        data-cursor="pointer"
                                    >
                                        View Case Study →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}
