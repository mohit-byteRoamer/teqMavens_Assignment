export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00475c',
        "apple-green": "#81C341",
        "rhino-gray": "#7b809a",
        'richBlack': '#001121',
        'veryDarkBlue': '#010d19',
        'veryLightGray': "#f6f8f9",
        'gunmetal': '#202f3d'
      },
      fontSize: {
        xxs: '0.7rem',
      },
    },
  },
  plugins: [],
}