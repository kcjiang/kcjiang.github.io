/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'proxima-soft'", 'Verdana', 'sans-serif']
      },
      animation: {
        scroll: 'scroll 10s linear infinite', // 横向滚动动画
        live: 'live 1s ease-in-out infinite', // 圆点扩散动画
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1.5rem))' },
        },
        live: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
          '100%': { transform: 'translate(-50%, -50%) scale(2.4)', opacity: 0 },
        },
      }
    }
  },
  plugins: []
}
