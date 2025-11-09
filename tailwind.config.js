/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          // Use the font family name without extra quotes so Tailwind emits a proper font-family rule
          island: ['Island Moments', 'cursive', 'sans-serif'],
          halant: ['Halant', 'serif', 'sans-serif'],
          instrument: ['Instrument Sans', 'sans-serif'],
        },
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
