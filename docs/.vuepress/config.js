module.exports = {
  title: 'LeafRecognitionReport',
  description: 'Report for the Deep Learning Leaf Recognition project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Opleiding', link: 'https://www.vives.be/nl/opleidingen/industriële-wetenschappen-en-technologie/bachelor-elektronica-ict' },
      { text: 'Licentie', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/probleemstelling/', 'Description of the problem'],
      ['/doelstelling/', 'Objective'],
      ['/analyse/', 'Analysis'],
      ['/uitwerking/', 'Result'],
      ['/uitbreiding/', 'Expansion'],
      ['/conclusie/', 'Conclusion'],
      ['/bibliografie/', 'Bibliography']
    ],
    repo: 'https://github.com/AaronVanV/LeafRecognitionReport',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
