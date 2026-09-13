/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAFA',
        'bg-secondary': '#F4F4F5',
        'surface': '#FFFFFF',
        'text-primary': '#09090B',
        'text-secondary': '#52525B',
        'border-subtle': 'rgba(0, 0, 0, 0.08)',
        'accent': '#2563EB',
        'accent-light': '#3B82F6',
      },
      fontFamily: {
        'sans': ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'heading': ['Space Grotesk', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}