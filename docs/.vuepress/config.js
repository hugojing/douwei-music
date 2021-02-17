module.exports = {
  theme: '@vuepress/vue',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Dou Wei Music',
      description: 'The world of a self-reflective Chinese musician'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '窦唯音乐',
      description: '一位自省的中国音乐人的音乐世界'
    },
    '/jp/': {
      lang: 'ja-JP',
      title: '竇唯音楽',
      description: 'The world of a self-reflective Chinese musician'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'песни | Доу Вэй',
      description: 'The world of a self-reflective Chinese musician'
    }
  },

  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'hugojing/douwei-music',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'English',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated'
      },
      '/zh/': {
        selectText: '中文',
        label: '中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新'
      },
      '/jp/': {
        selectText: '日本語',
        label: '日本語',
        editLinkText: 'GitHubでこのページを編集',
        lastUpdated: '最終更新'
      },
      '/ru/': {
        selectText: 'русский',
        label: 'русский'
      }
    }
  },

  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-56930228-3'
    },
    disqus: {}
  }
}
