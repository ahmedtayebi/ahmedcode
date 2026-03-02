"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import TerminalWindow from "@/components/TerminalWindow";
import { skills } from "@/data/skills";
import { Skill } from "@/types";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";

type Category = "frontend" | "mobile" | "design" | "tools" | "all";

export default function Skills() {
    const [filter, setFilter] = useState<Category>("all");
    const [animationKey, setAnimationKey] = useState(0);

    const filteredSkills =
        filter === "all"
            ? skills
            : skills.filter((s) => s.category === filter);

    const categories: { label: string; value: Category }[] = [
        { label: "All", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Mobile", value: "mobile" },
        { label: "Design", value: "design" },
        { label: "Tools", value: "tools" },
    ];

    useEffect(() => {
        setAnimationKey((prev) => prev + 1);
    }, [filter]);

    const renderSkillBar = (skill: Skill) => {
        const blocks = 10;
        const filled = Math.round((skill.percentage / 100) * blocks);
        const empty = blocks - filled;

        return (
            <div key={skill.name} className="font-code text-xs">
                <span className="text-text-primary">
                    {skill.name.padEnd(20, " ")}
                </span>
                <span className="text-accent">
                    {"█".repeat(filled)}
                </span>
                <span className="text-text-muted">
                    {"░".repeat(empty)}
                </span>
                <span className="text-text-secondary ml-2">
                    {skill.percentage}%
                </span>
            </div>
        );
    };

    const getSkillsByCategory = (category: Exclude<Category, "all">) => {
        return skills.filter((s) => s.category === category);
    };

    return (
        <section id="skills" className="section-glow relative py-24">
            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionLabel number="03" name="skills" />
                    <h2 className="font-display mb-16 text-4xl font-bold text-text-primary md:text-5xl">
                        What I Do
                    </h2>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <TerminalWindow title="skills.json">
                                <div className="space-y-2">
                                    <div className="font-code text-xs text-code-blue">
                                        &gt; loading skills.json...
                                    </div>
                                    <div className="my-4 h-px bg-border-subtle" />

                                    <div className="space-y-1">
                                        {filteredSkills.map((skill) =>
                                            renderSkillBar(skill)
                                        )}
                                    </div>

                                    <div className="my-4 h-px bg-border-subtle" />

                                    <div className="font-code text-xs text-code-blue">
                                        &gt; filter --category
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.value}
                                                onClick={() =>
                                                    setFilter(cat.value)
                                                }
                                                className={cn(
                                                    "font-code rounded-md border px-3 py-1 text-xs transition-all",
                                                    filter === cat.value
                                                        ? "border-accent bg-accent text-white"
                                                        : "border-border-subtle bg-surface text-text-secondary hover:border-accent hover:text-accent"
                                                )}
                                                data-cursor="pointer"
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </TerminalWindow>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {(
                                [
                                    "frontend",
                                    "mobile",
                                    "design",
                                    "tools",
                                ] as const
                            ).map((category) => {
                                const categorySkills =
                                    getSkillsByCategory(category);
                                const isActive =
                                    filter === category || filter === "all";

                                return (
                                    <motion.div
                                        key={category}
                                        variants={fadeIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        whileHover={{ y: -5 }}
                                        viewport={{ once: true }}
                                        className={cn(
                                            "rounded-2xl border transition-all duration-500 p-8 flex flex-col justify-between",
                                            isActive
                                                ? "border-white/10 bg-bg-secondary shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                                                : "border-white/5 bg-surface opacity-60 grayscale scale-95"
                                        )}
                                    >
                                        <div>
                                            <h3 className="font-code mb-6 text-xs uppercase tracking-[0.3em] text-accent font-bold">
                                                {category}
                                            </h3>
                                            <div className="space-y-5">
                                                {categorySkills.map(
                                                    (skill, index) => (
                                                        <div
                                                            key={`${skill.name}-${animationKey}`}
                                                        >
                                                            <div className="mb-2 flex justify-between text-xs items-center">
                                                                <span className="font-display text-text-primary/90 font-medium tracking-tight">
                                                                    {skill.name}
                                                                </span>
                                                                <span className="font-code text-[10px] text-text-secondary opacity-80">
                                                                    {
                                                                        skill.percentage
                                                                    }
                                                                    %
                                                                </span>
                                                            </div>
                                                            <div className="h-[2px] overflow-hidden rounded-full bg-white/5">
                                                                <motion.div
                                                                    initial={{
                                                                        width: 0,
                                                                    }}
                                                                    whileInView={{
                                                                        width: `${skill.percentage}%`,
                                                                    }}
                                                                    viewport={{
                                                                        once: false,
                                                                    }}
                                                                    transition={{
                                                                        duration: 1.5,
                                                                        delay:
                                                                            index *
                                                                            0.1,
                                                                        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smoother feel
                                                                    }}
                                                                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary shadow-[0_0_15px_rgba(129,140,248,0.4)]"
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
