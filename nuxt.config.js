/* const baseURL = process.env.API_BASE_URL || 'http://localhost:3000' */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'serenity_yagupov',
    htmlAttrs: {
      lang: 'ru'
    },
    telemetry: false,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
 telemetry: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/my-api/': { target: 'https://3000-amaranth-minnow-wc1uzdrz.ws-eu03.gitpod.io/messages', pathRewrite: {'^/my-api/': ''} },
  },
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  axios: {
    // proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
