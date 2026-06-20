import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,jjs,jsx}',
    './components/**/*.{ts,tsx,jjs,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A7F64',
        secondary: '#F5C542',
        dark: '#0D1B2A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;