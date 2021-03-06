 const path = require('path')
 module.exports = {
     // 导入别名
     // 这些条目可以是精确的请求->请求映射*（精确，无通配符语法）
     // 也可以是请求路径-> fs目录映射。 *使用目录映射时
     // 键**必须以斜杠开头和结尾**
     /*  alias: {
          // 'react': '@pika/react',
          // 'react-dom': '@pika/react-dom'
          // '/@foo/': path.resolve(__dirname, 'some-special-dir'),
      }, */
     alias: {
         '/@/': path.resolve(__dirname, './src')
     },
     // 配置Dep优化行为
     optimizeDeps: {
         // exclude: ['dep-a', 'dep-b'],
     },
     // 转换Vue自定义块的功能。
     vueCustomBlockTransforms: {
         // i18n: src => `export default Comp => { ... }`,
     },
     // 为开发服务器配置自定义代理规则。
     proxy: {
        '/api': {
            target: 'http://v.juhe.cn/',
            changeOrigin: true,
            rewrite: path => path.replace(/\/api/, '')
        },
        '/mock': {
            target: 'http://127.0.0.1:8080/',
            changeOrigin: true,
            rewrite: path => path.replace(/\/mock/, '')
        },



     }
 }