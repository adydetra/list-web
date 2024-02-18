import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    extend: {},
  },
  plugins: [],
};
