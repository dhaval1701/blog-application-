module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f6f6f7",
          200: "#e8e8ea",
          300: "#dcdddf",
          500: "#97989f",
          600: "#696a75",
          800: "#3b3c4a",
          900: "#141624",
          "500_01": "#a1a1aa",
          "100_01": "#f4f4f5",
          "900_01": "#181a2a",
          "600_4c": "#696a754c",
          "900_66": "#14162466",
        },
        white: { A700: "#ffffff" },
        indigo: { A200: "#4b6bfb", A200_0c: "#4b6bfb0c" },
      },
      boxShadow: { xs: "0px 1px  2px 0px #0000001e", sm: "0px 12px  24px -6px #181a2a1e" },
      fontFamily: {
        worksans: "Work Sans",
        inter: "Inter",
        plusjakartasans: "Plus Jakarta Sans",
        sourceserifpro: "Source Serif Pro",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
