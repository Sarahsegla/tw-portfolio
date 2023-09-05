/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[

   ["./dist/*.html"],
   [
    "./node_modules/flowbite/**/*.js"
]
  ],
  theme: {
    extend: { 
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        'whitiesh': 'rgba(237, 238, 188, 1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

