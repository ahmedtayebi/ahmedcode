"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import TerminalWindow from "@/components/TerminalWindow";
import AnimatedCounter from "@/components/AnimatedCounter";
import { fadeIn } from "@/lib/animations";

const stats = [
    { value: 15, label: "Projects Shipped", suffix: "+" },
    { value: 3, label: "Years Experience", suffix: "+" },
    { value: 8, label: "Mobile Apps", suffix: "" },
    { value: 0, label: "Cups of Coffee", suffix: "∞" },
];

export default function About() {
    return (
        <section id="about" className="section-glow relative py-24">
            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionLabel number="01" name="about" />
                    <h2 className="font-display mb-16 text-4xl font-bold text-text-primary md:text-5xl">
                        Who I Am
                    </h2>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <TerminalWindow title="ahmed.config.ts">
                                <div className="space-y-1 text-sm">
                                    <div className="italic text-text-muted">
                                        // Tayebi Ahmed — Product Engineer
                                    </div>
                                    <div>
                                        <span className="text-code-blue">
                                            const
                                        </span>{" "}
                                        <span className="text-text-primary">
                                            ahmed
                                        </span>{" "}
                                        <span className="text-text-secondary">
                                            =
                                        </span>{" "}
                                        <span className="text-text-secondary">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            location
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Algeria · Remote-friendly"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            experience
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "3+ years building products"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            mobileStack
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-text-secondary">
                                            [
                                        </span>
                                        <span className="text-code-green">
                                            "Flutter"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Dart"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Firebase"
                                        </span>
                                        <span className="text-text-secondary">
                                            ]
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            webStack
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-text-secondary">
                                            [
                                        </span>
                                        <span className="text-code-green">
                                            "React"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Next.js"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "TypeScript"
                                        </span>
                                        <span className="text-text-secondary">
                                            ]
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            design
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-text-secondary">
                                            [
                                        </span>
                                        <span className="text-code-green">
                                            "Figma"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "UX Research"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Design Systems"
                                        </span>
                                        <span className="text-text-secondary">
                                            ]
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            mindset
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Product-first &gt; feature-first"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            availability
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Open for freelance & full-time
                                            remote"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-code-blue">
                                            values
                                        </span>
                                        <span className="text-text-secondary">
                                            :
                                        </span>{" "}
                                        <span className="text-text-secondary">
                                            [
                                        </span>
                                        <span className="text-code-green">
                                            "Ship fast"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Design is thinking"
                                        </span>
                                        <span className="text-text-secondary">
                                            ,
                                        </span>{" "}
                                        <span className="text-code-green">
                                            "Code is craft"
                                        </span>
                                        <span className="text-text-secondary">
                                            ]
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-text-secondary">
                                            {"}"}
                                        </span>
                                    </div>
                                </div>
                            </TerminalWindow>
                        </div>

                        <div className="flex flex-col gap-8">
                            {/* Profile Photo */}
                            <div className="flex justify-center lg:block lg:justify-start">
                                <div className="group relative h-[220px] w-[220px] md:h-[280px] md:w-[280px]">
                                    {/* Premium Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-[80px] opacity-40 transition-all duration-700 group-hover:bg-accent/40 group-hover:opacity-60" />

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ y: -10 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 25
                                        }}
                                        viewport={{ once: true }}
                                        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary p-1"
                                    >
                                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                                            <NextImage
                                                src="/images/profile.jpg"
                                                alt="Tayebi Ahmed"
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                unoptimized={true}
                                                priority
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Interactive Decorative Ball */}
                                    <motion.div
                                        drag
                                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 90, 0]
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -bottom-4 -right-4 h-8 w-8 cursor-grab rounded-full border border-accent/40 bg-accent/20 backdrop-blur-md shadow-[0_0_20px_rgba(129,140,248,0.3)] active:cursor-grabbing"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        variants={fadeIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-bg-secondary p-6 transition-all duration-500 hover:border-accent/30 hover:bg-bg-secondary/80"
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <AnimatedCounter
                                            end={stat.value}
                                            suffix={stat.suffix}
                                        />
                                        <p className="font-code mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 group-hover:text-text-secondary">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
