module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed', // purple-600
          light: '#a78bfa',   // purple-400
          dark: '#4c1d95',    // purple-900
        },
        accent: {
          DEFAULT: '#fbbf24', // yellow-400
          light: '#fef3c7',   // yellow-100
          dark: '#b45309',    // yellow-700
        },
        secondary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#60a5fa',   // blue-400
          dark: '#1e3a8a',    // blue-900
        },
        success: '#22c55e',
        warning: '#f59e42',
        error: '#ef4444',
      },
      fontFamily: {
        headline: ['"Fredoka One"', 'cursive'],
        body: ['Geist', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};