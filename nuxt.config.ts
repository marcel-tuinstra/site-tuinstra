// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Site configuration for SEO modules
  $production: {
    site: {
      url: 'https://tuinstra.dev'
    }
  },

  devtools: {
    enabled: true
  },

  // Global app configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/marcel': { prerender: true },
    '/daan': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Robots.txt configuration
  robots: {
    sitemap: '/sitemap.xml'
  }
})
