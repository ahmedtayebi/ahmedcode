"use client";

import { motion } from "framer-motion";
import { 
    SiReact, SiNextdotjs, SiFlutter, SiFigma, SiTailwindcss, SiTypescript, SiFramer,
    SiPython, SiJavascript, SiCplusplus, SiGo, SiRust, SiDocker, SiGit, SiVercel,
    SiFirebase, SiNodedotjs, SiMongodb, SiPostgresql, SiPhp, SiRuby,
    SiPostman, SiSwift, SiRedis, SiSass
} from "react-icons/si";

interface TechIcon {
    Icon: React.ComponentType<{ className?: string }>;
    color: string;
    radius: number;
    speed: number;
    delay: number;
    name: string;
}

const techLogos: TechIcon[] = [
    // Orbit 1 (Inner) - r=80
    { Icon: SiReact, color: "text-[#61DAFB]", radius: 80, speed: 20, delay: 0, name: "React" },
    { Icon: SiTypescript, color: "text-[#3178C6]", radius: 80, speed: 20, delay: 5, name: "TypeScript" },
    { Icon: SiNextdotjs, color: "text-white", radius: 80, speed: 20, delay: 10, name: "Next.js" },
    
    // Orbit 2 - r=130
    { Icon: SiJavascript, color: "text-[#F7DF1E]", radius: 130, speed: 28, delay: 2, name: "JavaScript" },
    { Icon: SiTailwindcss, color: "text-[#06B6D4]", radius: 130, speed: 28, delay: 7, name: "Tailwind" },
    { Icon: SiFramer, color: "text-white", radius: 130, speed: 28, delay: 12, name: "Motion" },
    { Icon: SiNodedotjs, color: "text-[#339933]", radius: 130, speed: 28, delay: 17, name: "Node.js" },

    // Orbit 3 - r=180
    { Icon: SiFlutter, color: "text-[#02569B]", radius: 180, speed: 38, delay: 1, name: "Flutter" },
    { Icon: SiFirebase, color: "text-[#FFCA28]", radius: 180, speed: 38, delay: 7, name: "Firebase" },
    // { Icon: SiMongodb, color: "text-[#47A248]", radius: 180, speed: 38, delay: 13, name: "MongoDB" },
    { Icon: SiPython, color: "text-[#3776AB]", radius: 180, speed: 38, delay: 19, name: "Python" },
    { Icon: SiPostgresql, color: "text-[#4169E1]", radius: 180, speed: 38, delay: 25, name: "Postgres" },

    // Orbit 4 - r=230
    { Icon: SiFigma, color: "text-[#F24E1E]", radius: 230, speed: 48, delay: 0, name: "Figma" },
    { Icon: SiDocker, color: "text-[#2496ED]", radius: 230, speed: 48, delay: 8, name: "Docker" },
    { Icon: SiGit, color: "text-[#F05032]", radius: 230, speed: 48, delay: 16, name: "Git" },
    { Icon: SiVercel, color: "text-white", radius: 230, speed: 48, delay: 24, name: "Vercel" },
    // { Icon: SiGo, color: "text-[#00ADD8]", radius: 230, speed: 48, delay: 32, name: "Go" },

    // Orbit 5 (Outer) - r=280
    // { Icon: SiRust, color: "text-[#DEA584]", radius: 280, speed: 60, delay: 5, name: "Rust" },
    // { Icon: SiCplusplus, color: "text-[#00599C]", radius: 280, speed: 60, delay: 13, name: "C++" },
    // { Icon: SiKotlin, color: "text-[#7F52FF]", radius: 280, speed: 60, delay: 21, name: "Kotlin" },
    // { Icon: SiSwift, color: "text-[#F05138]", radius: 280, speed: 60, delay: 29, name: "Swift" },
    // { Icon: SiPhp, color: "text-[#777BB4]", radius: 280, speed: 60, delay: 37, name: "PHP" },
    // { Icon: SiRuby, color: "text-[#CC342D]", radius: 280, speed: 60, delay: 45, name: "Ruby" },
    // { Icon: SiPostman, color: "text-[#FF6C37]", radius: 280, speed: 60, delay: 53, name: "Postman" },
    // { Icon: SiRedis, color: "text-[#DC382D]", radius: 280, speed: 60, delay: 61, name: "Redis" },
    // { Icon: SiSass, color: "text-[#CC6699]", radius: 280, speed: 60, delay: 69, name: "Sass" },
];

export default function TechOrbital() {
    // Unique radii to draw orbit rings
    const orbits = Array.from(new Set(techLogos.map(t => t.radius))).sort((a, b) => a - b);

    return (
        <div className="relative h-[650px] w-full items-center justify-center hidden lg:flex overflow-visible scale-90 xxl:scale-100">
             {/* Central Core (The "Sun") */}
             <div className="relative flex items-center justify-center">
                 <motion.div 
                     animate={{ 
                         scale: [1, 1.3, 1],
                         opacity: [0.3, 0.6, 0.3]
                 }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute h-32 w-32 rounded-full bg-accent/30 blur-[60px]" 
                 />
                 {/* <div className="relative z-20 h-16 w-16 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(108,99,255,0.2)]">
                     <div className="h-2 w-2 rounded-full bg-accent animate-ping" />
                 </div> */}
             </div> 
            
            {/* Orbit Rings Rendering with Glow */}
            {orbits.map((radius) => (
                <div 
                    key={radius}
                    className="absolute rounded-full border border-white/[0.03] pointer-events-none"
                    style={{
                        width: radius * 2,
                        height: radius * 2,
                    }}
                >
                    {/* Subtle Inner Glow for Ring */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
                </div>
            ))}

            {/* Tech Icons Rendering */}
            {techLogos.map((tech, index) => (
                <div
                    key={index}
                    className="absolute flex items-center justify-center pointer-events-none"
                    style={{
                        width: tech.radius * 2,
                        height: tech.radius * 2,
                    }}
                >
                    {/* Orbital Path Carrier */}
                    <motion.div
                        className="absolute h-full w-full pointer-events-auto"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: tech.speed,
                            repeat: Infinity,
                            ease: "linear",
                            delay: -tech.delay,
                        }}
                    >
                        {/* Icon Container (at the edge of the orbit) */}
                        <div 
                            className="absolute"
                            style={{ 
                                top: 0, 
                                left: '50%', 
                                transform: 'translate(-50%, -50%)' 
                            }}
                        >
                            {/* Counter-rotation to keep icon upright */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: tech.speed,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: -tech.delay,
                                }}
                                className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-surface/30 backdrop-blur-md shadow-xl transition-all hover:border-accent/80 hover:bg-surface/90 hover:scale-125 hover:z-50 active:scale-95"
                                data-cursor="pointer"
                            >
                                <tech.Icon className={`h-7 w-7 ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-accent/0 to-accent/20 opacity-0 transition-opacity group-hover:opacity-100" />
                                
                                {/* Label on Hover - Styled as a Tooltip */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-lg bg-bg-secondary border border-accent/30 px-3 py-1.5 text-[10px] font-bold tracking-wider text-text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-14 whitespace-nowrap backdrop-blur-md shadow-2xl pointer-events-none">
                                    {tech.name}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-bg-secondary border-t border-l border-accent/30" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
