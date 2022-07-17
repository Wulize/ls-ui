module.exports = {
    pages: {
        index: {
            // page的入口
            entry: 'src/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在dist/index.html 输出
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        // packages、src加入编译
        config.module
            .rule('js')
            .delete('eslint')
            .include.add(/packages/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })

    }
}