const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"],  
  theme: {
    
    fontFamily: {
      MochiyPopOne: ["Mochiy Pop One", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      "bg-jr": "url('/images/bg-img.jpg')",
      "nature-dark": "url('/nature-dark.jpg')",
    },

    extend: {
      colors: {
        "color-black1": "#262314",
        "green-jr": "#3C4742"
      },
      backgroundImage: {
        "bg-jr": "url('/images/bg-img.jpg')",
        "bg-header": "url('/images/header.jpg')",
        "bg-parallax": "url('/images/imgApollo.jpg')",

      },
      
  
      
    },
      animation: {
        cursor: 'cursor .8s linear infinite alternate',
        type: 'type 2.9s ease-out .8s infinite alternate both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
    },

      keyframes: {
        type: {
        '0%': { width: '0ch' },
        '5%, 10%': { width: '1ch' },
        '15%, 20%': { width: '2ch' },
        '25%, 30%': { width: '3ch' },
        '35%, 40%': { width: '4ch' },
        '45%, 50%': { width: '5ch' },
        '55%, 60%': { width: '6ch' },
        '65%, 70%': { width: '7ch' },
        '75%, 80%': { width: '8ch' },
        '85%, 90%': { width: '9ch' },
        '65%, 70%': { width: '10ch' },
        '75%, 80%': { width: '11ch' },
        '85%, 90%': { width: '12ch' },
        '95%': { width: '13ch' },
      },

      "blink": {
        '50%':{
          border: "transparent"}
      }



  },
  
  },
  darkMode: "class",
  plugins: [nextui()],

  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
};
