/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      backgroundPosition: {
        mobile: "top -4rem right -10rem",
        desktop: "top right, bottom left",
      },
      fontFamily: {
        custom: ["montserrat", "sans-serif"],
      },
      fontSize: {
        customSize: "0.9375rem",
      },
      backgroundImage: {
        imageMobile: "url('/images/bg-top.svg')",
        imagesDesktop:
          "url('/images/bg-top.svg'), url('/images/bg-bottom.svg')",
      },
      colors: {
        colors: {
          veryLightGrayishBlue: "hsl(240, 78%, 98%)",
          lightGrayishBlue: "hsl(234, 14%, 74%)",
          grayishBlue: "hsl(233, 13%, 49%)",
          darkGrayishBlue: "hsl(232, 13%, 33%)",
          gradientStart: "hsl(236, 72%, 79%)",
          gradientEnd: "hsl(237, 63%, 64%)",
        },
      },
    },
  },
  plugins: [],
};
