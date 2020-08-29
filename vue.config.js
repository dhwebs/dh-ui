module.exports={
  lintOnSave:false,
  chainWebpack: config => {//公共样式
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
            // 要公用的scss的路径
            resources: './src/assets/index.scss'
        })
        .end()
    })
  }
}