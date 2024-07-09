/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B090D",
        secondary: "rgba(26, 26, 26, 0.53)",
        footer: "#190024",
        tagColor: "#1a1a1a",
        recoBg: "rgba(0,240,255,0.13)",
        footerBg: "rgb(25,0,36)",
        clubCardOneBg: "#160020",
        clubCardTwoBg: "#1D1700",
        text: {
          primary: "#AD00FF",
          light: "rgb(210,234,255)",
          secondary: "#747474",
          info: "#00FFA3",
          danger: "#FF6868",
          tableHeader: "rgb(62,65,81)",
          adColor: "rgb(173, 0 ,255)",
          recoColor: "rgba(0,240,255,0.86)",
          inputText: "#323232",
        },
        border: {
          secondary: "rgb(22,23,30)",
          inputBorder: "#323232",
          mainBorder: "rgb(27,28,36)",
        },
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
      },
      order: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  variants: {
    extend: {
      order: ["responsive"],
    },
  },
  plugins: [],
};
