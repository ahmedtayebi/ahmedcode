import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import dynamic from "next/dynamic";

const GridBackground = dynamic(
    () => import("@/components/GridBackground"),
    { ssr: false }
);

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Tayebi Ahmed — Product Engineer & UI/UX Designer",
    description:
        "Building high-performance digital products with Flutter, React, Next.js, and modern design systems. Product Engineer and UI/UX Designer specializing in mobile and web applications.",
    keywords: [
        "Flutter",
        "React",
        "Next.js",
        "UI/UX",
        "Product Engineer",
        "Mobile Development",
        "Web Development",
        "TypeScript",
        "Figma",
        "Design Systems",
    ],
    authors: [{ name: "Tayebi Ahmed" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://tayebiahmed.com",
        title: "Tayebi Ahmed — Product Engineer & UI/UX Designer",
        description:
            "Building high-performance digital products with Flutter, React, Next.js, and modern design systems.",
        siteName: "Tayebi Ahmed Portfolio",
        images: [
            {
                url: "https://tayebiahmed.com/og.png",
                width: 1200,
                height: 630,
                alt: "Tayebi Ahmed Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tayebi Ahmed — Product Engineer & UI/UX Designer",
        description:
            "Building high-performance digital products with Flutter, React, Next.js, and modern design systems.",
        images: ["https://tayebiahmed.com/og.png"],
        creator: "@tayebiahmed",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://tayebiahmed.com",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0A0A0F",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body>
                <ThemeProvider>
                    <GridBackground />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
