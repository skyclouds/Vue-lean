const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            //css处理
            {
                test: /\.css$/,
                //css-loader只负责将css文件加载
                //style-loader负责将样式添加到DMO中
                //使用多个loader时是从右向左读
                use: ['style-loader', 'css-loader'],
            },
            //less处理
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' //creates style nodes from JS strings
                }, {
                    loader: 'css-loader'//translates CSS into CommonJS
                }, {
                    loader: 'less-loader'//compiles less to CSS
                }],
            },
            //图片处理
            {
                //早期DOC系统只允许后缀名为3个字符,htm=html,jpg=jpeg
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //当加载当图片,小于limit时,会将图片编译成为base64字符串
                        //当加载当图片,大于limit时,需要使用file-loader加载
                        limit: 40000,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }],
            },
            //ES语法转换
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            //Vue配置
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            }
        ]
    },
    resolve: {
        //省略扩展名后缀
        extensions: ['.js', '.css','.vue', '.less'],
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}