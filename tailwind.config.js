/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {         
        'blogger500':['Blogger500'],
        'blogger700':['Blogger700'],
        'proximanova400':['Proximanova400']
      },
      colors: {
        'basic-button': ' #FFD324',
        'text-color':'#FFFFFF'
      },
      boxShadow: {
        'button': '0px 0px 29px 0px #FFF95E8A',
        'box':'0px 0px 40px 0px #8EA2AA33'
      },
      dropShadow:{
        'text': '0px 0px 29px 0px #FFF95E8A'
      },
      lineHeight: {        
        'hero1': '143px',
        'hero2': '75px'
      }     
    },
  },
  plugins: [],
}


