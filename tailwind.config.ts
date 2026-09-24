import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9ff",
        surface: "#f8f9ff",
        "surface-low": "#eff4ff",
        "surface-container": "#e5eeff",
        "surface-high": "#dce9ff",
        "surface-highest": "#d3e4fe",
        ink: "#0b1c30",
        muted: "#45464d",
        outline: "#76777d",
        "outline-variant": "#c6c6cd",
        primary: "#000000",
        secondary: "#0051d5",
        "secondary-container": "#316bf3",
        "secondary-fixed": "#dbe1ff",
        "tertiary-fixed": "#85f8c4",
        "tertiary-container": "#002114",
        error: "#ba1a1a",
        "error-container": "#ffdad6"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 1px 8px rgba(0,0,0,.04)"
      }
    }
  },
  plugins: []
};

export default config;