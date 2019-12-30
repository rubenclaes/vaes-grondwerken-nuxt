import { Configuration } from '@nuxt/types';

import { IS_DEV } from './config';
import axios from 'axios';

//require('dotenv').config();

const nodeExternals = require('webpack-node-externals');

const config: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */

  head: {
    htmlAttrs: {
      lang: 'nl-BE'
    },

    title: process.env.APP_ID,

    titleTemplate: '%s ← ' + process.env.APP_ID,

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Koninklijke Harmonie de Verenige Vrienden Heusden-Zolder web'
      }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://res.cloudinary.com' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982' },

  manifest: {
    name: 'Harmonie De Verenigde Vrienden',
    short_name: 'KH DVV H-Z',
    description:
      'Website Koninklijke Harmonie De Verenige Vrienden Heusden-Zolder',
    theme_color: '#188269'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/vendor/icons/icons.min.css', '@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/vue-toasted.js', mode: 'client' },

    '~plugins/vue-scrollto.js',
    '~/plugins/filters',
    { src: '~/plugins/lazysizes.js', ssr: false },
    '~/plugins/vee-validate',
    '~/plugins/click-outside.js',

    `~/plugins/currency-filter.js`,
    '~/plugins/axios-accessor.ts'
  ],

  env: {
    API_URL: 'https://strapi-de-verenigde-vrienden.herokuapp.com'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',

    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    ['nuxt-buefy', { css: false, materialDesignIcons: true }],

    '@bazzite/nuxt-optimized-images',
    'vue-scrollto/nuxt',
    '@nuxtjs/markdownit',

    '@nuxtjs/google-analytics',
    //Always at the end
    '@nuxtjs/sitemap'
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: true,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 80
    }
  },

  /*
   ** sitemap module configuration
   */
  sitemap: {
    hostname: process.env.HOSTNAME,
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmodrealtime: true
    },
    routes: [
      '/',
      '/nieuws',
      '/dirigent',
      '/geschiedenis',
      '/drumband'
      /* {
        url: '/page/2',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      } */
    ]
  },

  /*
   ** googleAnalytics module configuration
   */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS,
    disabled: () => document.cookie.includes('ga_optout=true'),
    debug: {
      sendHitTask: !IS_DEV
    },
    set: [{ field: 'anonymizeIp', value: true }]
  },

  /*
   ** @nuxtjs/pwa module configuration
   */
  pwa: {
    workbox: {
      /* workbox options */
      offlineAnalytics: true
    }
  },

  /*
   ** markdownit module configuration
   */
  markdownit: {
    injected: true
  },

  /*
   ** sentry module configuration
   */
  sentry: {
    dsn: process.env.SENTRY_DSN,
    publishRelease: true,
    disabled: IS_DEV,
    config: {} // Additional config
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL
  },

  buildModules: ['@nuxtjs/dotenv', '@nuxt/typescript-build'],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],

    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, isServer, loaders: { vue } }) {
      if (isDev && isClient && vue != undefined && vue.transformAssetUrls) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    }
  },

  generate: {
    fallback: true,

    routes: async function() {}
  }
};

export default config;
