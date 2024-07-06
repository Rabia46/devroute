// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
        'button-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'zoom-out': 'zoom-out 0.2s ease-in-out',
        'button-hover': 'button-hover 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};


















