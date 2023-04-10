export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dewa Web',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'More Website Dev Dewa' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vite-pwa/nuxt',
    'nuxt-icon'
  ],

  headlessui: {
    prefix: 'Headless'
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Dewa Web",
      short_name: "Dewa Web",
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
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/");
          },
          handler: "CacheFirst" as const,
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
      // navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  }
})
