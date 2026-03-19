/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
  keyframes: {
    enterLeft: {
      '0%': {
        opacity: '0',
        transform: 'translateX(-150px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
    },
    enterRight: {
      '0%': {
        opacity: '0',
        transform: 'translateX(150px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
    },
  },
  animation: {
    enterLeft: 'enterLeft 0.8s ease-out forwards',
    enterRight: 'enterRight 0.8s ease-out forwards',
  },
}
  },
  plugins: [],
};