/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        // Custom screen sizes
        '2xs': '360px',
        '2xs-custom': '420px',
        'xs': '480px',
        'xs-custom': '560px',
        'sm-custom': '704px',
        'md-custom': '896px',
        'lg-custom': '1152px',
        'xl-custom': '1408px',
      },
    },
  },
  plugins: [],
};
