const myurl=process.env.GITPOD_WORKSPACE_URL.split('//')
const apiurl=myurl[0]+'//3000-'+myurl[1]
console.log("!!apiurl=",apiurl)

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
    '/messages': apiurl
  },
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

