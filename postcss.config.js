const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer({
      cascade: true,
      overrideBrowserslist: [
        'last 4 versions',
        '> 1%',
        'ie 11'
      ]
    }),
    cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true
        },
        normalizeWhitespace: true,
        minifySelectors: true,
        minifyFontValues: true,
        colormin: true
      }]
    })
  ]
};
