// Design tokens extracted from the Nu Metro redesign concept.
// Drop into a Next.js + Tailwind project as tailwind.config.js (or merge
// the `theme.extend` block into an existing config).

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "media", // swap to "class" if you want a manual toggle, as the concept has
  theme: {
    extend: {
      colors: {
        // Foyer (light theme)
        bg: "#f4e7d6",
        ink: "#2b1216",
        "ink-soft": "#5f3d42",
        gold: "#b98526",
        orange: "#f26b21",
        "on-orange": "#2b1216",

        // Experience brand accents (used on the "Choose an experience" cards)
        xp: {
          standard: "#f26b21",
          vip: "#b98526",
          xtreme: "#3f9142",
          "4dx": "#e13a2e",
          screenx: "#1c1c1c",
        },
      },
      fontFamily: {
        display: ["Bodoni Moda", "Bodoni MT", "Georgia", "serif"],
        ui: ["Hanken Grotesk", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        xl2: "28px",
        xl3: "36px",
        pill: "999px",
      },
      backdropBlur: {
        glass: "22px",
      },
      boxShadow: {
        // Layered "liquid glass" shadow: inner specular highlight + outer drop shadow.
        // Pair with bg-white/[0.15] dark:bg-white/[0.06] and a 1px translucent border.
        glass: `
          inset 0 1px 1px rgba(255,255,255,.9),
          inset 0 -1px 1px rgba(255,255,255,.25),
          0 18px 40px -18px rgba(120,45,20,.28),
          0 2px 8px -2px rgba(90,30,20,.16)
        `,
        glassDark: `
          inset 0 1px 1px rgba(255,255,255,.35),
          inset 0 -1px 1px rgba(255,255,255,.08),
          0 18px 40px -18px rgba(0,0,0,.6),
          0 2px 8px -2px rgba(0,0,0,.4)
        `,
      },
    },
  },
  plugins: [],
};

/*
Dark-theme background/ink overrides (apply via `dark:` variants):
  bg:       #150609
  ink:      #fbeee0
  ink-soft: #d9beb0
  gold:     #e5b866

Glass surface recipe (Tailwind classes):
  bg-white/[0.58] dark:bg-white/[0.15]
  backdrop-blur-glass backdrop-saturate-150
  border border-white/70 dark:border-white/15
  shadow-glass dark:shadow-glassDark
  rounded-xl2 (or xl3 for larger cards, pill for buttons/chips)
*/
