export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ensemble pour la France.',
    titleTemplate: 'La Place Publique | %s',
    htmlAttrs: {
      lang: 'fr',
      // amp: true
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Ensemble pour la France.'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@yanniclescure' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.laplacepublique.org'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'La Place Publique'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "Il est plus que temps que les hommes forts et courageux de l'Europe se réunissent pour faire disparaître l'Union Européenne, cette oligarchie des marchés financiers, et instaurer la souveraineté des peuples Européens."
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.laplacepublique.org/la_place_publique_open_graph.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '224876442707056'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'LaPlacePublique' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.laplacepublique.org'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'La Place Publique'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Il est plus que temps que les hommes forts et courageux de l'Europe se réunissent pour faire disparaître l'Union Européenne, cette oligarchie des marchés financiers, et instaurer la souveraineté des peuples Européens."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.laplacepublique.org/la_place_publique_open_graph.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.laplacepublique.org/la_place_publique_open_graph.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'LaPlacePublique'
      }
    ],
    // canonical
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.laplacepublique.org`
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/stylesheet/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
  ],

  googleFonts: {
    // download: true,
    families: {
      Roboto: true,
      Lato: true,
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  fontawesome: {
    icons: {
      solid: ['faCog'],
      brands: ['faTelegram', 'faTelegramPlane']
    }
  },

  optimizedImages: {
    optimizeImages: true
  },

  googleAnalytics: {
    id: 'UA-193183837-1'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
    // https://nuxtjs.org/blog/creating-blog-with-nuxt-content/
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    // options
    path: '/sitemapindex.xml',
    hostname: 'https://www.laplacepublique.org',
  },

  content: {
    nestedProperties: ['author.name']
  },

  googleFonts: {
    // download: true,
    display: 'swap',
    families: {
      Roboto: true,
      'Material+Icons': true
    }
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
