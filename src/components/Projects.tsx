"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
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
    const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    const nextImage = () => {
        if (!selectedGallery) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length);
    };

    const prevImage = () => {
        if (!selectedGallery) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
    };

    return (
        <section id="projects" className="mesh-gradient relative overflow-hidden py-24">
            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionLabel number="02" name="projects" />
                    <h2 className="font-display mb-16 text-4xl font-bold text-text-primary md:text-5xl">
                        Featured Work
                    </h2>

                    {/* Featured Project: Ofuq Lab */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-24 w-full overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary/50 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_80px_rgba(129,140,248,0.15)]"
                    >
                        <div className="flex flex-col lg:grid lg:grid-cols-2">
                            {/* Left: Project Preview */}
                            <motion.div
                                ref={featuredRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="group relative h-[300px] w-full overflow-hidden bg-bg-primary lg:h-[600px]"
                            >
                                <motion.div
                                    style={{
                                        transform: `translate(${parallax.x * 2}px, ${parallax.y * 2}px) scale(1.05)`,
                                    }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="relative h-full w-full"
                                >
                                    <Image
                                        src="/images/p1/coverp1.png"
                                        alt="Ofuq Lab - Cinematic Editing Studio Website"
                                        fill
                                        className="object-cover transition-opacity duration-700 group-hover:opacity-90"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Glassy overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />

                                    {/* Text overlay */}
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="font-display text-3xl font-bold text-white tracking-tight">
                                            Ofuq Lab
                                        </div>
                                        <div className="mt-2 text-sm text-text-secondary uppercase tracking-widest bg-white/5 backdrop-blur-md px-3 py-1 rounded-full w-fit border border-white/10">
                                            Cinematic Studio
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right: Content */}
                            <div className="w-full min-w-0 overflow-hidden p-8 md:p-10 lg:p-16 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="font-code mb-4 text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                                        Case Study
                                    </div>
                                    <h3 className="font-display mb-4 w-full break-words text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl tracking-tight">
                                        Ofuq Lab
                                    </h3>
                                    <p className="mb-10 w-full break-words text-lg text-text-secondary leading-relaxed border-l-2 border-accent/30 pl-6 italic">
                                        &quot;Where cinematic identity meets immersive digital
                                        engineering.&quot;
                                    </p>
                                </motion.div>

                                {/* Tabs */}
                                <div className="mb-10 w-full overflow-hidden">
                                    {/* Tab Bar */}
                                    <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`relative font-code whitespace-nowrap px-4 py-2 text-xs transition-colors duration-300 rounded-lg ${activeTab === tab
                                                    ? "text-accent"
                                                    : "text-text-muted hover:text-text-secondary"
                                                    }`}
                                            >
                                                {activeTab === tab && (
                                                    <motion.div
                                                        layoutId="activeTab"
                                                        className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                <span className="relative z-10">{tab}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab Content */}
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                        className="min-h-[140px] w-full min-w-0 break-words"
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

                        {secondaryProjects.map((project) => {
                            const isArabicProject = project.id === "lespub-dz";
                            return (
                                <motion.div
                                    key={project.id}
                                    variants={fadeIn}
                                    whileHover={{ y: -8 }}
                                    className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group"
                                >
                                    <div
                                        style={{
                                            background: project.gradient,
                                        }}
                                        className="relative h-56 overflow-hidden"
                                    >
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60" />
                                        <div className="absolute right-6 top-6 z-10 font-code text-5xl font-bold text-white/10 italic">
                                            {project.number}
                                        </div>
                                    </div>

                                    <div
                                        className={`flex flex-1 flex-col p-8 ${isArabicProject ? "text-right" : "text-left"}`}
                                        dir={isArabicProject ? "rtl" : "ltr"}
                                    >
                                        <h3 className="font-display mb-2 text-2xl font-bold text-text-primary tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="mb-6 text-sm text-text-secondary font-medium uppercase tracking-widest opacity-80">
                                            {project.tagline}
                                        </p>

                                        <div className="mb-6 space-y-4 text-sm text-text-muted leading-relaxed">
                                            <div className="space-y-1">
                                                <p className="text-accent/80 font-code text-xs font-bold uppercase tracking-wider">
                                                    {isArabicProject ? "التحدي:" : "Challenge:"}
                                                </p>
                                                <p className={isArabicProject ? "leading-relaxed" : "line-clamp-2"}>
                                                    {project.problem}
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-accent/80 font-code text-xs font-bold uppercase tracking-wider">
                                                    {isArabicProject ? "الحل:" : "Solution:"}
                                                </p>
                                                <p className={isArabicProject ? "leading-relaxed" : "line-clamp-2"}>
                                                    {project.solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {project.stack.slice(0, 3).map((tech) => (
                                                <div key={tech} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] uppercase font-bold text-text-secondary tracking-wider">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>

                                        {project.galleryImages && (
                                            <motion.button
                                                onClick={() => {
                                                    setSelectedGallery(project.galleryImages!);
                                                    setCurrentImageIndex(0);
                                                }}
                                                whileHover={{ x: isArabicProject ? -5 : 5 }}
                                                className={`font-code mt-auto flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest ${isArabicProject ? "w-fit self-end justify-start text-right" : "text-left"}`}
                                                data-cursor="link"
                                            >
                                                {isArabicProject ? "معرض الصور" : "View Gallery"}
                                                <ImageIcon size={14} />
                                            </motion.button>
                                        )}

                                        {!project.galleryImages && project.links?.live && (
                                            <motion.a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: isArabicProject ? -5 : 5 }}
                                                className={`font-code mt-auto flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest ${isArabicProject ? "w-fit self-end justify-start text-right" : "text-left"}`}
                                                data-cursor="link"
                                            >
                                                {isArabicProject ? "عرض المشروع" : "Explore Case"}
                                                <ExternalLink size={14} />
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedGallery(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/95 backdrop-blur-xl p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute right-6 top-6 z-[110] p-2 text-white/50 hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedGallery(null);
                            }}
                        >
                            <X size={32} />
                        </motion.button>

                        <div
                            className="relative flex h-full w-full max-w-5xl items-center justify-center cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevImage}
                                className="absolute left-0 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>

                            <div className="relative h-full w-full flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative h-full w-full max-h-[80vh] flex items-center justify-center"
                                    >
                                        <Image
                                            src={selectedGallery[currentImageIndex]}
                                            alt={`Project screen ${currentImageIndex + 1}`}
                                            width={1000}
                                            height={2000}
                                            className="h-full w-auto object-contain rounded-xl shadow-2xl"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Mobile Controls Overlay */}
                                <div className="absolute inset-0 flex md:hidden">
                                    <div className="w-1/2 h-full" onClick={prevImage} />
                                    <div className="w-1/2 h-full" onClick={nextImage} />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextImage}
                                className="absolute right-0 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </motion.button>

                            {/* Pagination */}
                            <div className="absolute bottom-[-40px] flex gap-2">
                                {selectedGallery.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-8 bg-accent" : "w-1.5 bg-white/20"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
