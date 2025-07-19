module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - coffee/warm browns
        primary: {
          DEFAULT: '#8B4513', // Rich coffee brown
          50: '#FAF6F2',
          100: '#F4EDE5',
          200: '#E8DACB',
          300: '#DDC7B1',
          400: '#D1B397',
          500: '#CD853F', // Sandy brown
          600: '#8B4513', // Rich coffee brown
          700: '#654321', // Dark coffee
          800: '#4A2C0A',
          900: '#2E1A05',
        },
        
        // Accent colors - warm orange (dice)
        accent: {
          DEFAULT: '#FF6B35', // Warm orange
          50: '#FFF4F1',
          100: '#FFE8E2',
          200: '#FFD1C5',
          300: '#FFBAA8',
          400: '#FFA38B',
          500: '#FF8C6E',
          600: '#FF6B35', // Warm orange
          700: '#E55100',
          800: '#BF4100',
          900: '#993300',
        },
        
        // Secondary colors - forest green (board games)
        secondary: {
          DEFAULT: '#2E8B57', // Forest green
          50: '#F0F9F4',
          100: '#E1F3E9',
          200: '#C3E7D3',
          300: '#A5DBBD',
          400: '#87CFA7',
          500: '#69C391',
          600: '#2E8B57', // Forest green
          700: '#006400',
          800: '#004D00',
          900: '#003600',
        },
        
        // Neutral colors - café ambiance
        neutral: {
          DEFAULT: '#F5F5DC', // Beige
          50: '#FFFEF7',
          100: '#FFFCEF',
          200: '#FFF8DF',
          300: '#FFF4CF',
          400: '#FFF0BF',
          500: '#FFECAF',
          600: '#F5F5DC', // Beige
          700: '#D2B48C',
          800: '#A0825C',
          900: '#6E502C',
        },
        
        // Functional colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        
        // Additional theme colors
        coffee: {
          light: '#CD853F',
          DEFAULT: '#8B4513',
          dark: '#654321',
        },
        
        dice: {
          light: '#FFB299',
          DEFAULT: '#FF6B35',
          dark: '#E55100',
        },
        
        board: {
          light: '#90EE90',
          DEFAULT: '#2E8B57',
          dark: '#006400',
        },
        
        cafe: {
          light: '#FFFEF7',
          DEFAULT: '#F5F5DC',
          dark: '#D2B48C',
        },
      },
      
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['"Fredoka One"', 'cursive'],
        fun: ['"Comic Neue"', 'cursive'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'full': '9999px',
      },
      
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 35px rgba(0, 0, 0, 0.15)',
        'coffee': '0 4px 20px rgba(139, 69, 19, 0.15)',
        'dice': '0 4px 20px rgba(255, 107, 53, 0.20)',
        'board': '0 4px 20px rgba(46, 139, 87, 0.15)',
        'cafe': '0 2px 10px rgba(245, 245, 220, 0.25)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        'gradient-coffee': 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
        'gradient-forest': 'linear-gradient(135deg, #2E8B57 0%, #32CD32 100%)',
        'gradient-neutral': 'linear-gradient(135deg, #F5F5DC 0%, #FFFEF7 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'dice-roll': 'dice-roll 2s ease-in-out infinite',
        'coffee-steam': 'coffee-steam 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'dice-roll': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'coffee-steam': {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-10px) scaleX(1.2)', opacity: '0.4' },
          '100%': { transform: 'translateY(-20px) scaleX(0.8)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};