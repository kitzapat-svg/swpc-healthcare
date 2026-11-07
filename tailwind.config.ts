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
        primary: {
          DEFAULT: "#0891B2", // Medical Cyan
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#15803D", // Pharmacy Green
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0EA5E9", // Sky Blue
          foreground: "#FFFFFF",
        },
        background: "#F0FDFA", // Soft Medical Teal Background
        health: {
          green: "#22C55E",
          teal: "#0891B2",
          blue: "#0369A1",
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
