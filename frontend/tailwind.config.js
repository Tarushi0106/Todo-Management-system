/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7856ff',
        primaryDark: '#5c42cc',
        form : '#cdd1e6'
      },
    },
  },
  plugins: [],
};
