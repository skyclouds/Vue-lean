import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://apis.juhe.cn',
        timeout: 5000
    })
    //2.axios的拦截器

    //请求拦截
    instance.interceptors.request.use(config => {
        //console.log(config)
        return config
    }, err => {
        console.log(err)
    });

    //响应拦截
    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    }, err => {
        console.log(err)
    });

    //3.发送真正的网络请求
    return instance(config)
}