/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sophisticated Brand Colors
        brand: {
          50: '#fef7ed',
          100: '#fdebd0',
          200: '#fad4a5',
          300: '#f7b670',
          400: '#f59338',
          500: '#f37316',
          600: '#e4590c',
          700: '#bc420c',
          800: '#953511',
          900: '#7a2e11',
          950: '#431506',
        },
        // Modern Primary System
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Food-Inspired Accents
        accent: {
          // Warm Honey Gold
          honey: {
            50: '#fffbeb',
            100: '#fef3c7',
            400: '#f59e0b',
            500: '#d97706',
            600: '#b45309',
          },
          // Rich Espresso
          espresso: {
            50: '#fafaf9',
            100: '#f5f5f4',
            400: '#a8a29e',
            500: '#78716c',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
          },
          // Fresh Sage
          sage: {
            50: '#f0fdf4',
            100: '#dcfce7',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
          },
          // Royal Purple (Chess Elegance)
          royal: {
            50: '#faf5ff',
            100: '#f3e8ff',
            400: '#a855f7',
            500: '#9333ea',
            600: '#7c3aed',
            700: '#6d28d9',
          }
        },
        // Enhanced Surface System
        surface: {
          primary: 'rgb(var(--surface-primary))',
          secondary: 'rgb(var(--surface-secondary))',
          tertiary: 'rgb(var(--surface-tertiary))',
          elevated: 'rgb(var(--surface-elevated))',
          overlay: 'rgba(var(--surface-overlay))',
        },
        // Refined Text System
        text: {
          primary: 'rgb(var(--text-primary))',
          secondary: 'rgb(var(--text-secondary))',
          tertiary: 'rgb(var(--text-tertiary))',
          inverse: 'rgb(var(--text-inverse))',
          accent: 'rgb(var(--text-accent))',
        },
        // Chess-Themed Colors
        chess: {
          board: {
            light: '#f0d9b5',
            dark: '#b58863',
          },
          pieces: {
            light: '#ffffff',
            dark: '#2c2c2c',
          },
          highlight: {
            move: '#7fb800',
            check: '#ff6b6b',
            selected: '#ffd93d',
          }
        },
        // Food-Themed Colors  
        food: {
          crust: '#d4a574',
          herbs: '#7fb069',
          spice: '#d4af37',
          cream: '#faf7f0',
          wine: '#722f37',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        'brand': ['Comfortaa', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.7' }],
        '2xl': ['1.5rem', { lineHeight: '1.6' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.4' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 40px -7px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 30px 60px -12px rgba(0, 0, 0, 0.25)',
        'brand': '0 4px 20px rgba(243, 115, 22, 0.15), 0 8px 40px rgba(243, 115, 22, 0.1)',
        'royal': '0 4px 20px rgba(147, 51, 234, 0.15), 0 8px 40px rgba(147, 51, 234, 0.1)',
        'sage': '0 4px 20px rgba(34, 197, 94, 0.15), 0 8px 40px rgba(34, 197, 94, 0.1)',
        'honey': '0 4px 20px rgba(245, 158, 11, 0.15), 0 8px 40px rgba(245, 158, 11, 0.1)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'floating': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
        'chess-slide': 'chess-slide 0.8s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'chess-slide': {
          '0%': { transform: 'translateX(-100%) scale(0.8)', opacity: '0' },
          '60%': { transform: 'translateX(10%) scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-circ': 'cubic-bezier(0.08, 0.82, 0.17, 1)',
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'chess-pattern': 'linear-gradient(45deg, #f0d9b5 25%, transparent 25%), linear-gradient(-45deg, #f0d9b5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0d9b5 75%), linear-gradient(-45deg, transparent 75%, #f0d9b5 75%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgb(243, 115, 22) 0, transparent 50%), radial-gradient(at 80% 0%, rgb(147, 51, 234) 0, transparent 50%), radial-gradient(at 0% 50%, rgb(34, 197, 94) 0, transparent 50%)',
      },
      backgroundSize: {
        'chess': '20px 20px',
      },
    },
  },
  plugins: [],
}
