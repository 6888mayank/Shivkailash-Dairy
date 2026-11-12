/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#245C38',
          dark: '#173D24',
          deep: '#102918',
          light: '#2E7346',
          soft: '#EAF3EC',
        },
        fresh: {
          DEFAULT: '#76A85B',
          dark: '#5D8B43',
          light: '#93BE79',
          soft: '#F0F7EC',
        },
        warm: {
          DEFAULT: '#FFFDF5',
          cream: '#FAF6EA',
          card: '#FCF9EF',
          border: '#EBE4CF',
          sand: '#ECE4CF',
        },
        gold: {
          DEFAULT: '#E8B84A',
          hover: '#D4A334',
          dark: '#B88219',
          light: '#F8D87E',
          soft: '#FEF9E7',
        },
        earth: {
          dark: '#2C2219',
          body: '#42382D',
          muted: '#75685A',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        hindi: ['var(--font-hindi)', 'Mukta', 'Noto Serif Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(36, 92, 56, 0.08)',
        'elevated': '0 12px 35px -8px rgba(36, 92, 56, 0.15)',
        'gold-glow': '0 4px 20px -2px rgba(232, 184, 74, 0.35)',
      }
    },
  },
  plugins: [],
};
