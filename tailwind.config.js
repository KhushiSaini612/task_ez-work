/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
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
