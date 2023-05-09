/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "button-default": "50px",
      },
      padding: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        "button-default": "14px 24px",
      },
      colors: {
        electric: {
          50: "#E8FFF1",
          100: "#CFFFE3",
          200: "#A8FFCC",
          300: "#78FAAE",
          400: "#72E3A1",
          500: "#59BC87",
          600: "#419468",
          700: "#31694B",
          800: "#2D5540",
          900: "#263E31",
        },
        emerald: {
          50: "#EDF9F5",
          100: "#CFE8E0",
          200: "#9EC8BB",
          300: "#84B5A6",
          400: "#649586",
          500: "#4B7A6C",
          600: "#3A6558",
          700: "#1F5044",
          800: "#0E3A2F",
          900: "#00271D",
        },
        "on-surface": {
          0: "#FFFFFF",
          100: "#D8D8D8",
          200: "#C4C6C7",
          300: "#9E9FA0",
          500: "#7C7D7E",
          600: "#5A5B5C",
          700: "#464748",
          800: "#303132",
          900: "#161718",
        },
      },
    },
  },
  plugins: [],
};
