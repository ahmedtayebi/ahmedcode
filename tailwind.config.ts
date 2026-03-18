import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        surface: "var(--surface)",
        "border-subtle": "var(--border-subtle)",
        accent: "var(--accent)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-hover": "var(--accent-hover)",
        "accent-glow": "var(--accent-glow)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "code-green": "var(--code-green)",
        "code-blue": "var(--code-blue)",
        "code-purple": "var(--code-purple)",
        "code-orange": "var(--code-orange)",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
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
