/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[

   ["./dist/*.{html,js}"],
   [
    "./node_modules/flowbite/**/*.js"
]
  ],
  theme: {
    extend: {
      colors: {
        'whitiesh': 'rgba(237, 238, 188, 1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

