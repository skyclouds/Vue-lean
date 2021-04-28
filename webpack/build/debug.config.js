const baseConfig=require('./base.config.js')
const webpackMerge = require('webpack-merge')

module.exports=webpackMerge(baseConfig,{
    devServer:{
        contentBase:'../dist',
        inline:true
    }
})