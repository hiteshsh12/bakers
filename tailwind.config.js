/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  theme: {
    screens: {
      'ph': '500px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      '2xl': '1536px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

