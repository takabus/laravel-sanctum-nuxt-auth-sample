export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'auth-sample',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  // バックエンドへのアクセスについてはプロキシを使用する
  proxy: {
    // /backendで始まるURLへのアクセスについて設定
    '/backend': {
      // 宛先をhttp://127.0.0.1:8000にする
      target: 'http://127.0.0.1:8000',
      // 先頭の/backendを削除する
      pathRewrite: { '^/backend': '/' }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //プロキシをつかう（CORSにならないようにするためプロキシ経由とする）
    proxy: true,
    // URLの先頭に/backendを付与する（最初の設定で/backendから始まるURLはプロキシ経由としている）
    prefix: '/backend',
    //X-CSRF-TOKENを自動的に送信する（X-CSRF-TOKENがないと拒否される）
    credentials: true,
  },

  router: {
    middleware: ['auth']
    //ページごとにauth:falseを設定すると、そこだけauthが不要になる
  },

  auth: {
    strategies: {
      // ストラテジー名をlaravelSanctumとする
      laravelSanctum: {
        //プロバイダーとしてLaravel Sanctamを指定する
        provider: 'laravel/sanctum',
        //エンドポイントURLを設定（LaravelのURL）
        url: 'http://localhost:8000'
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
