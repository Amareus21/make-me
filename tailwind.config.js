/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nintendo' : 'url(/wp3677832.png)',
        'minecraft' : 'url(/R.jpeg)',
        'cyberpunk' : 'url(/Cyberpunk.jpg)',
      },
      keyframes:{
        'parpadeo' : {
          '0%' : {opacity : 0},
          '3%' : {opacity: 1},
          '6%' : {opacity: 0},
          '9%' : {opacity: 1},
          '11%' : {opacity: 0},
          '40%' : {opacity: 0},
          '43%' : {opacity : 1},
          '47%' : {opacity: 0},
          '50%' : {opacity: 1},
          '53%' : {opacity: 0},
          '56%' : {opacity: 1},
          '61%' : {opacity: 1},
          '63%' : {opacity: 0},
          '90%' : {opacity: 0},
          '100%' : {opacity: 1},
        },
        'move' : {
          '0%' : {left : '0'},
          '100%' : {left: 'calc(100% - 12rem)'},
        }
      },
      animation : {
        parpadeo: 'parpadeo 3000ms linear 1800ms 1 both',
        move: 'move 2000ms ease-in-out 4600ms infinite alternate both',
        move2: 'move 2000ms ease-in-out infinite alternate both'
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}
