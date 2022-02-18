module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
