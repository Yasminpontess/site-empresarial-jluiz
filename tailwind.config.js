/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // necessário pro Tailwind ler os arquivos React
  ],
  theme: {
    extend: {
      keyframes: {
        // Animação horizontal
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // Velocidade da rolagem (pode ajustar o tempo aqui)
        'scroll-x': 'scroll-x 15s linear infinite',
        'spin-slow': 'spin 10s linear infinite', // usado no texto giratório
      },
    },
  },
  plugins: [],
}
