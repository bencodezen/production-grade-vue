const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Production-Grade Vue',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    'Building applications that can scale and grow is more than simply following a series of rules. In this workshop, you will learn proven patterns for building production Vue.js apps while gaining an understanding of why certain patterns exist. Equipped with this, you will feel more confident in choosing what is best for your application.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/bencodezen/production-grade-vue',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: 'Edit this page',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      '/guide/',
      '/guide/languages',
      '/guide/vue-cli',
      '/guide/components',
      '/guide/reusability-and-composition',
      '/guide/state-management',
      '/guide/routing',
      '/guide/testing',
      '/guide/easy-to-follow-best-practices',
      '/guide/core-principles',
      '/guide/final-thoughts'
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
};
