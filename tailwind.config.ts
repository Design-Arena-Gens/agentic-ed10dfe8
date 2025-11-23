import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99ccff',
          300: '#66b2ff',
          400: '#3399ff',
          500: '#0080ff',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        },
        accent: {
          50: '#e6f9f0',
          100: '#ccf3e1',
          200: '#99e7c3',
          300: '#66dba5',
          400: '#33cf87',
          500: '#00c369',
          600: '#009c54',
          700: '#00753f',
          800: '#004e2a',
          900: '#002715',
        },
      },
    },
  },
  plugins: [],
};
export default config;
