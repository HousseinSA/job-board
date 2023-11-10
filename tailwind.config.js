/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        teal: "#338573",
        black: "#000",
        dimgray: {
          100: "#616161",
          200: "#5f5858",
        },
        mintcream: "#eff6f2",
        darkgray: {
          100: "#aeb0b4",
          200: "#aaa",
        },
        red: "#ff0000",
        lightgray: {
          100: "#d5d5d5",
          200: "#d5d0d0",
          300: "#ccc",
        },
        gainsboro: "#e3e3e3",
        whitesmoke: "#f4f5f7",
        darkslategray: "#353030",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        "noto-sans-hebrew": "'Noto Sans Hebrew'",
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      "4xl": "1.44rem",
      mini: "0.94rem",
      "6xl": "1.56rem",
      base: "1rem",
      "31xl": "3.13rem",
      "11xl": "1.88rem",
      "14xl": "2.06rem",
      "5xl": "1.5rem",
      lg: "1.13rem",
      "51xl": "4.38rem",
      "36xl": "3.44rem",
      "41xl": "3.75rem",
      "17xl": "2.25rem",
      "9xl": "1.75rem",
      "16xl": "2.19rem",
      mid: "1.06rem",
      inherit: "inherit",
    },
    screens: {
      login_query: {
        min: "960px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq580: {
        raw: "screen and (max-width: 580px)",
      },
      "remove-icon": {
        raw: "screen and (max-width: 650px)",
      },
      "job-list-query": {
        raw: "screen and (max-width: 850px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
