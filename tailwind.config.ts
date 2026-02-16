import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0F",
        "bg-secondary": "#0F0F1A",
        surface: "#13131F",
        "border-subtle": "#1E1E2E",
        accent: "#6C63FF",
        "accent-hover": "#8B85FF",
        "accent-glow": "rgba(108, 99, 255, 0.15)",
        "text-primary": "#E8E8F0",
        "text-secondary": "#8888A8",
        "text-muted": "#44445A",
        "code-green": "#4ADE80",
        "code-blue": "#60A5FA",
        "code-purple": "#C084FC",
        "code-orange": "#FB923C",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(108, 99, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(108, 99, 255, 0.7)",
          },
        },
        "grid-drift": {
          "0%": {
            transform: "translateX(0) translateY(0)",
          },
          "100%": {
            transform: "translateX(4px) translateY(4px)",
          },
        },
      },
      animation: {
        blink: "blink 1s infinite",
        float: "float 3s infinite ease-in-out",
        "glow-pulse": "glow-pulse 2s infinite",
        "grid-drift": "grid-drift 20s infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
