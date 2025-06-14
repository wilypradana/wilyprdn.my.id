/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tambahkan bagian ini
      fontFamily: {
        'yuruka': ['yuruka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}