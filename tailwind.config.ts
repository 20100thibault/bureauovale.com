import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        presidential: {
          blue: "#1a2a6c",
          gold: "#c9a227",
          "gold-light": "#d4af37",
          cream: "#f5f5dc",
          mahogany: "#4a2c2a",
          marble: "#f8f8f8",
          red: "#8b0000",
        },
        country: {
          "canada-blue": "#0033a0",
          "canada-red": "#ff0000",
          "france-blue": "#002395",
          "france-red": "#ed2939",
          "usa-blue": "#3c3b6e",
          "usa-red": "#b22234",
        },
        ink: "#1a1a1a",
        document: "#4a4a4a",
        parchment: "#f4ecd8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        serif: ["var(--font-baskerville)", "serif"],
        editorial: ["var(--font-source-serif)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #c9a227 0%, #d4af37 50%, #ffd700 100%)",
        "gold-gradient-subtle":
          "linear-gradient(135deg, #c9a227 0%, #d4af37 100%)",
        "presidential-gradient":
          "linear-gradient(180deg, #1a2a6c 0%, #0d1b4a 100%)",
        "hero-radial":
          "radial-gradient(ellipse at center, rgba(201,162,39,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        presidential:
          "0 4px 6px -1px rgba(26,42,108,0.1), 0 2px 4px -1px rgba(26,42,108,0.06)",
        "presidential-lg":
          "0 10px 15px -3px rgba(26,42,108,0.1), 0 4px 6px -2px rgba(26,42,108,0.05)",
        gold: "0 4px 14px 0 rgba(201,162,39,0.25)",
        "gold-lg": "0 8px 28px 0 rgba(201,162,39,0.3)",
        glass:
          "0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.1)",
      },
      borderRadius: {
        presidential: "2px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "gold-shimmer": "goldShimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        goldShimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      transitionTimingFunction: {
        presidential: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      typography: {
        presidential: {
          css: {
            "--tw-prose-body": "#4a4a4a",
            "--tw-prose-headings": "#1a2a6c",
            "--tw-prose-lead": "#4a4a4a",
            "--tw-prose-links": "#c9a227",
            "--tw-prose-bold": "#1a1a1a",
            "--tw-prose-quotes": "#1a2a6c",
            "--tw-prose-quote-borders": "#c9a227",
            lineHeight: "1.7",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
