/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#060504',
          900: '#090807',
          850: '#0d0b09',
          800: '#120f0d',
          700: '#181410',
          600: '#221b16',
        },
        retro: {
          orange: '#ea580c',
          amber: '#f59e0b',
          glow: '#fb923c',
          cream: '#fef3c7',
          dark: '#0e0c0a',
          surface: '#140f0c',
          border: 'rgba(234, 88, 12, 0.35)',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin 22s linear infinite reverse',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(249, 115, 22, 0.4))' },
          '50%': { opacity: '0.85', filter: 'drop-shadow(0 0 25px rgba(249, 115, 22, 0.8))' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.94' },
        }
      }
    },
  },
  plugins: [],
}
