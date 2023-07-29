/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'netflixsans': ['netflixsans', 'sans-serif'],
      },
      colors: {
        dark: "#00081d",
        dark1: "#190b27",
        pink: "#3a0821",
        pink1: "#610e1f",
        netRed: "#da0c16",
        b: "#25253a",
        netWhite: "#FCF5F5",
    },
    backgroundImage: {
      'hero': "url('../netflix/netflixBg.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}