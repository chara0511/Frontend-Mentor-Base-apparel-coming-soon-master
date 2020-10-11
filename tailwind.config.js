const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/hero-mobile.jpg')",
        "hero-desktop": "url('/images/hero-desktop.jpg')",
        ...defaultTheme.backgroundImage,
      },
      boxShadow: {
        normal: "0px 20px 50px 0px rgba(206, 150, 150)",
        active: "0px 10px 10px 0px rgba(250, 210, 210)",
        ...defaultTheme.boxShadow,
      },
      screens: {
        xs: "375px",
        "2xl": "1440px",
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: {
          desaturated: "#CE9696",
          desaturated_hover: "#FAD2D2",
          desatured_gradient: "#F7BEBE",
          soft: "#F96161",
          soft_gradient: "#ED8B8B",
          dark_grayish: "#403939",
          ...defaultTheme.colors.red,
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
