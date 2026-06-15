/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF9F4',
          100: '#F6F2E9',
          200: '#EFE8D8',
          300: '#E5DAC2',
        },
        forest: {
          50: '#F2F4EE',
          100: '#DDE3D2',
          200: '#B9C4A2',
          300: '#94A574',
          400: '#6F8350',
          500: '#54663A',
          600: '#41512D',
          700: '#364326',
          800: '#2C3720',
          900: '#222A19',
        },
        olive: {
          DEFAULT: '#54663A',
          dark: '#3B4A28',
        },
        sand: '#C9B79C',
        clay: '#A67C52',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
