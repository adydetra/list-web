export default defineNuxtConfig({
  app: {
    head: {
      title: 'List Web',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', 'nuxt-icon', '@vite-pwa/nuxt'],

  headlessui: {
    prefix: 'Headless',
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'List Web',
      short_name: 'List Web',
      theme_color: '#0f172a',
      background_color: '#0f172a',
      icons: [
        {
          src: 'pwa/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
});
