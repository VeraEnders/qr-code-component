/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)'
      },
      fontSize: {
        base: ['0.938rem', '1.188rem'],
        xl: ['1.375rem', '1.75rem']
      }
    },
  },
  plugins: [],
}
