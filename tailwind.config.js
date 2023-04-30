/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero' : "url('https://img.freepik.com/photos-premium/tache-noire-fond-blanc-taches-encre-noire-feuille-papier_73152-6831.jpg?w=2000')"
      },
      screens : {
        'phone': {'min': '350px', 'max': '670px'},
        'tabDesktop': {'min': '700px', 'max': '865px'},
        'desktop': {'min': '865px', 'max': '1223px'},
      },
    },
  },
  plugins: [],
}
