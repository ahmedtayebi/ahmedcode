"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";

const processSteps = [
    {
        number: "01",
        title: "Discover",
        icon: Search,
        description:
            "Deep dive into your business goals, target audience, and competitive landscape to uncover opportunities and define success metrics.",
        gradient: "from-violet-500/20 to-purple-500/20",
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
    },
    {
        number: "02",
        title: "Design",
        icon: PenTool,
        description:
            "Transform insights into beautiful, intuitive interfaces. Iterative wireframing and prototyping ensure every detail serves a purpose.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    },
    {
        number: "03",
        title: "Build",
        icon: Code2,
        description:
            "Convert designs into clean, performant code using modern frameworks. Rigorous testing ensures quality across all devices and browsers.",
        gradient: "from-emerald-500/20 to-green-500/20",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
    },
    {
        number: "04",
        title: "Ship",
        icon: Rocket,
        description:
            "Launch with confidence. Continuous monitoring, optimization, and support keep your product running smoothly and evolving with user needs.",
        gradient: "from-orange-500/20 to-red-500/20",
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-400",
    },
];

export default function Process() {
    const lineRef = useRef(null);
    const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

    return (
        <section id="process" className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedSection>
                    <SectionLabel>// my workflow</SectionLabel>
                    <h2 className="font-display mb-6 text-4xl font-bold text-text-primary md:text-5xl">
                        How I Work
                    </h2>
                    <p className="mb-16 max-w-2xl text-lg text-text-secondary">
                        A proven process that transforms ideas into exceptional
                        digital products. From discovery to deployment, every step
                        is designed for measurable impact.
                    </p>

                    {/* Desktop: Horizontal Layout */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Connecting Line */}
                            <div
                                ref={lineRef}
                                className="absolute left-0 right-0 top-[80px] z-0 mx-auto h-[2px]"
                                style={{
                                    left: "12%",
                                    right: "12%",
                                    width: "76%",
                                }}
                            >
                                <div className="h-full w-full bg-gradient-to-r from-violet-500/30 via-blue-500/30 via-emerald-500/30 to-orange-500/30 opacity-30" />
                                <motion.div
                                    className="absolute inset-0 h-full w-full origin-left bg-gradient-to-r from-violet-500 via-blue-500 via-emerald-500 to-orange-500"
                                    initial={{ scaleX: 0 }}
                                    animate={
                                        lineInView ? { scaleX: 1 } : { scaleX: 0 }
                                    }
                                    transition={{
                                        duration: 2,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>

                            {/* Steps */}
                            <motion.div
                                className="relative z-10 grid grid-cols-4 gap-8"
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={step.number}
                                        variants={fadeUp}
                                        className="group"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:shadow-[0_8px_50px_rgba(108,99,255,0.15)]">
                                            {/* Gradient Overlay */}
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                            />

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div
                                                    className={`mb-6 flex h-20 w-20 items-center justify-center rounded-xl ${step.iconBg} backdrop-blur-sm transition-transform duration-500 group-hover:scale-110`}
                                                >
                                                    <step.icon
                                                        className={`h-10 w-10 ${step.iconColor} transition-transform duration-500 group-hover:rotate-12`}
                                                        strokeWidth={1.5}
                                                    />
                                                </div>

                                                {/* Number */}
                                                <div
                                                    className={`font-code mb-3 text-sm font-medium ${step.iconColor}`}
                                                >
                                                    {step.number}
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-display mb-4 text-2xl font-bold text-text-primary">
                                                    {step.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm leading-relaxed text-text-muted">
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Bottom accent line */}
                                            <div
                                                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile: Vertical Layout */}
                    <motion.div
                        className="flex flex-col gap-6 md:hidden"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {processSteps.map((step) => (
                            <motion.div
                                key={step.number}
                                variants={fadeUp}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:shadow-[0_8px_50px_rgba(108,99,255,0.15)]">
                                    {/* Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                    />

                                    <div className="relative z-10 flex items-start gap-5">
                                        {/* Icon */}
                                        <div
                                            className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl ${step.iconBg} backdrop-blur-sm`}
                                        >
                                            <step.icon
                                                className={`h-8 w-8 ${step.iconColor}`}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            {/* Number */}
                                            <div
                                                className={`font-code mb-2 text-sm font-medium ${step.iconColor}`}
                                            >
                                                {step.number}
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-display mb-3 text-xl font-bold text-text-primary">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm leading-relaxed text-text-muted">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}

