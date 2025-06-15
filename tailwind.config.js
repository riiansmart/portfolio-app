/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via the `class` strategy
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}', // All your component files
  ],
  theme: {
    extend: {
      // For shadcn/ui compatibility
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Optional for ShadCN transitions
  ],
}
