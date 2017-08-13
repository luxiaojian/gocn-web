const path = require('path');
const pkg = require('./package.json');

function resolve(...paths) {
  return path.resolve(__dirname, '.', ...paths);
}

module.exports = ({mode}) => ({
  port: 1920,
  entry: './src/forum/entry.js',
  dist: './dist/forum',
  homepage: '/forum',
  presets: [
    require('poi-preset-eslint')({
      mode: '*',
    }),
  ],
  env: require('config'),
  html: {
    template: resolve('src/forum/index.ejs'),
  },
  extendWebpack(config) {
    config.resolve.alias.set('@', resolve('src/forum'));
    config.module.rule('vue')
    .use('vue-loader')
    .tap(vueOptions => {
      vueOptions.loaders.stylus.push({
        loader: 'stylus-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, './src/forum/assets/styles/base/var.styl'),
            path.resolve(__dirname, './src/forum/assets/styles/base/placeholder.styl')
          ]
        }
      });
      return vueOptions;
    });
  },
  production: {
    presets: [],
    sourceMap: false,
    extendWebpack(config) {
      config.resolve.alias.set('@', resolve('src/forum'));
      config.module.rule('vue')
      .use('vue-loader')
      .tap(vueOptions => {
        vueOptions.loaders.stylus.push({
          loader: 'stylus-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, './src/forum/assets/styles/base/var.styl'),
              path.resolve(__dirname, './src/forum/assets/styles/base/placeholder.styl')
            ]
          }
        });
        return vueOptions;
      });
      config.plugin('cdn').use(require('webpack-cdn-plugin'), [
        {
          modules: [
            { 
              name: 'axios', 
              var: 'axios', 
              path: 'dist/axios.min.js'
            },
            { 
              name: 'vue', 
              var: 'Vue', 
              path: 'dist/vue.runtime.min.js'
            },
            {
              name: 'vue-router',
              var: 'VueRouter',
              path: 'dist/vue-router.min.js',
            },
            {  
              name: 'vuex', 
              var: 'Vuex', 
              path: 'dist/vuex.min.js'
            },
            {
              name: 'vue-i18n',
              var: 'VueI18n',
              path: 'dist/vue-i18n.min.js'
            },
            {
              name: 'element-ui',
              var: 'ELEMENT',
              path: 'lib/index.js',
              style: 'lib/theme-default/index.css',
            },
          ],
          prodUrl: '//unpkg.com/:name@:version/:path',
        },
      ]);
      config.externals({
        'element-ui/lib/theme-default/index.css': 'null',
      });
    },
  },
});
