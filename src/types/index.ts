export interface Project {
    id: string;
    number: string;
    title: string;
    tagline: string;
    problem: string;
    thinking: string;
    solution: string;
    results?: string;
    stack: string[];
    type: "mobile" | "web" | "design";
    featured: boolean;
    gradient: string;
    image?: string;
    links: {
        github?: string;
        live?: string;
        caseStudy?: string;
    };
}

export interface Skill {
    name: string;
    percentage: number;
    category: "frontend" | "mobile" | "design" | "tools";
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}
