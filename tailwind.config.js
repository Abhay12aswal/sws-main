/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.4s infinite',
        'bounce-medium': 'bounce 1.3s infinite',
        'bounce-fast': 'bounce 1.2s infinite',
      },
    },
  },
  plugins: [],
}

