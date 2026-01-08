/* Tailwind Configuration */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563EB',
          700: '#1d4ed8',
        },
        accent: {
          600: '#0D9488',
        },
        status: {
          positive: '#10B981',
          warning: '#F97316',
          error: '#EF4444',
        },
        neutral: {
          body: '#1E293B',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          border: '#e2e8f0',
        }
      }
    }
  }
};