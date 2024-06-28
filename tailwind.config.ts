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
const config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "skill-glow": "0 0 10px #fff ,0 0 15px #51F4BE",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.17, 0.55, 0.55, 1)",
      },
      transitionDuration: {
        "500": "0.5s",
        "800": "0.8s",
        "1000": "1s",
        "1500": "1.5s",
        "2000": "2s",
        "2500": "2.5s",
        "3000": "3s",
      },
      transitionDelay: {
        "500": "0.5s",
        "1000": "1s",
        "1500": "1.5s",
        "2000": "2s",
        "2500": "2.5s",
        "3000": "3s",
        "3500": "3.5s",
      },
      dropShadow: {
        skillGlow: [
          "0 0 5px #fff",
          "0 0 8px #fff",
          "0 0 10px #ff00ff",
          "0 0 15px #ff00ff",
        ],
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite",
        navGlow: "navGlow 1.9s ease-in-out infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        // "accordion-down": "accordion-down 0.2s ease-out",
        // "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      keyframes: {
        // "accordion-down": {
        //   from: { height: "0" },
        //   to: { height: "var(--radix-accordion-content-height)" },
        // },
        // "accordion-up": {
        //   from: { height: "var(--radix-accordion-content-height)" },
        //   to: { height: "0" },
        // },
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme, addBase }: any) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
      // button design
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
} satisfies Config;

export default config;
