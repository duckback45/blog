const path = require('path')

module.exports = {
  title: 'duckback45',
  base: '/blog/',

  description: '',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  // theme: 'cool',
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    },
  },

  evergreen: true,

  plugins: [
    'vuepress-plugin-mermaidjs',
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'en-US',

    personalInfo: {
      nickname: 'Baek Sanghun',
      description: '   ',
      email: 'duckback45@gmail.com',

      avatar: './assets/img/1599481511381.jpg',

      sns: {
        github: {
          account: 'duckback45',
          link: 'https://github.com/duckback45',
        },
        reddit: {
          account: 'duckback45',
          link: 'https://www.reddit.com/',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2018-present meteorlxy | MIT License',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Github', link: 'https://github.com/duckback45' },
    ],

    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // comments: {
    //   owner: 'duck45',
    //   repo: 'vuepress-theme-meteorlxy',
    //   clientId: 'cbda894952ba70c00666',
    //   clientSecret: '1ade785ca693bf3092be5e5338720d5ee43672b7',
    //   autoCreateIssue: false,
    // },

    pagination: {
      perPage: 5,
    },
    prevPost: 'Previous Post',
    nextPost: 'Next Post',
  },
}
