"use client";

import { motion } from "framer-motion";
import { fadeIn, VIEWPORT } from "@/lib/animations";

interface SectionLabelProps {
    number: string;
    name: string;
}

export default function SectionLabel({ number, name }: SectionLabelProps) {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-3 font-code text-sm text-accent"
        >
            {`// ${number}_${name}`}
        </motion.div>
    );
}
