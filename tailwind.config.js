/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './src/components/**/*.{html,js}',],
  theme: {
    extend: {
      spacing: {
        '230px': '14.375rem',
        '312px': '19.5rem',
      },
      height: {
        '74px': '4.625rem',
      }
    }
  },
  plugins: [],
}

