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
        <section id="about" className="px-6 py-24">
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
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-[60px] transition-all duration-500 group-hover:bg-accent/30" />

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                        viewport={{ once: true }}
                                        className="relative h-full w-full overflow-hidden rounded-2xl border border-accent/20 bg-surface"
                                    >
                                        <NextImage
                                            src="/images/profile.jpg"
                                            alt="Tayebi Ahmed"
                                            fill
                                            className="object-cover"
                                            unoptimized={true}
                                            priority
                                        />
                                    </motion.div>

                                    {/* Decorative Element */}
                                    <motion.div
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -bottom-2 -right-2 h-5 w-5 rounded border border-accent/50 bg-accent/30 backdrop-blur-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        variants={fadeIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex flex-col items-center justify-center rounded-xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(108,99,255,0.2)]"
                                    >
                                        <AnimatedCounter
                                            end={stat.value}
                                            suffix={stat.suffix}
                                        />
                                        <p className="font-display mt-2 text-center text-sm text-text-secondary">
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
