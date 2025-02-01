/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px) translateX(-50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) translateX(-50%)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
}; 