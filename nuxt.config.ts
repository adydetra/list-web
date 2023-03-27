export default defineNuxtConfig({
  app: {
    head: {
      title: 'More Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'More Website Dev Dewa' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],

  headlessui: {
    prefix: 'Headless'
  }
})
