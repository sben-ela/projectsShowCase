module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-orange': '0 0 40px 4px rgba(255, 165, 0, 0.5)',
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        primary: "Poppins, sans-serif",
        WetPaint: "Rubik Wet Paint",
        DynaPuff : "DynaPuff",
        Rubik : "Rubik"

      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",
      },
    },
  },
  plugins: [],
};
