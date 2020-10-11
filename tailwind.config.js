const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
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
