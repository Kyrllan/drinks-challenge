import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Roboto': true,
        'Sail': true,
        download: true,
        inject: true
      }
    }]
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
}

export default config


