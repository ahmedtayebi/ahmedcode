import { NavLink, SocialLink } from "@/types";

export const SITE_CONFIG = {
    name: "Tayebi Ahmed",
    title: "Tayebi Ahmed · Product Engineer & UI/UX Designer",
    description: "Frontend Engineer and Product Designer crafting exceptional digital experiences with Next.js, React, and modern design systems.",
    url: "https://tayebiahmed.com",
    ogImage: "https://tayebiahmed.com/og-image.png",
    twitterHandle: "@tayebiahmed",
};

export const NAV_LINKS: NavLink[] = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Process",
        href: "#process",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/tayebiahmed",
        icon: "github",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/tayebiahmed",
        icon: "linkedin",
    },
    {
        label: "Dribbble",
        href: "https://dribbble.com/tayebiahmed",
        icon: "dribbble",
    },
    {
        label: "Email",
        href: "mailto:hello@tayebiahmed.com",
        icon: "email",
    },
];
