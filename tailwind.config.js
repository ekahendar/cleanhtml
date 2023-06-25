/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/html/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#f50076",
                   
          "secondary": "#8f4263",
                   
          "accent": "#5c7f67",
                   
          "neutral": "#291e00",
                   
          "base-100": "#e9e7e7",
                   
          "info": "#3abff8",
                   
          "success": "#36d399",
                   
          "warning": "#fbbd23",
                   
          "error": "#f87272",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
}

