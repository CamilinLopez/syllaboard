import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
        ibm: ["ibm-plex-sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        azul: "#042F70",
        abano: "#FCFCFC",
        oscuro: "#171717",
        gris: "#ECECEC",
      },
      fontSize: {
        h1: "700px",
      },
    },
  },
  plugins: [],
};
export default config;
