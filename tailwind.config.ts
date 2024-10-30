import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7DC5ED",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to left, #7DC5ED 0%, #12A7FB 75%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
