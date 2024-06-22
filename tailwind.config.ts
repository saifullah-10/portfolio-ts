import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // boxShadow: {
      //   glow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #f0f, 0 0 30px #f0f, 0 0 40px #f0f",
      // },

      animation: {
        glow: "glow 1.5s ease-in-out infinite",
        navGlow: "navGlow 1.5s ease-in-out infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #fff",
          },
          "50%": {
            boxShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #f0f, 0 0 50px #f0f",
          },
        },
        navGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #fff",
          },
          "50%": {
            boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #00D3E8",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
export default config;
