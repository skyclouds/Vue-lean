const baseConfig=require('./base.config.js')
const UglifyJSWebpackPlugin=require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

module.exports=webpackMerge(baseConfig,{
    plugins: [
        new UglifyJSWebpackPlugin(),
        new webpack.BannerPlugin('最终版权归SoSo所有')
    ]
})