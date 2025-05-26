/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'skill-progress': 'skill-progress 1s ease-out forwards',
      },
      keyframes: {
        'skill-progress': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        },
      },
    },
  },
  plugins: [],
};