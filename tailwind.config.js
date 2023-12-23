/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('../public/auv_club.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.03)",
          "300": "rgba(217, 217, 217, 0)",
        },
        black: "#000",
        red: "#f91414",
        gray: "rgba(0, 0, 0, 0.2)",
        whitesmoke: "#f5f2f2",
        darkgray: {
          "100": "#b5abab",
          "200": "#a7a6a6",
        },
        dimgray: "#5c585a",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "image-text": "'DM Sans'",
      },
    },
    fontSize: {
      base: "16px",
      "3xs": "10px",
      xs: "12px",
      "9xl": "28px",
      "17xl": "36px",
      xl: "20px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('tailwindcss-gradients'),
    // ... other plugins
  ],
};
