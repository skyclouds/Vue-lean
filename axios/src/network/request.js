import axios from 'axios'

// export function request(config,success,failure){
//     //1.创建axios实例
//     const instance=axios.create({
//         baseURL:'http://v.juhe.cn',
//         timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//         success(res)
//     }).catch(err=>{
//         failure(err)
//     })
// }

// export function request(config){
//     //1.创建axios实例
//     const instance=axios.create({
//         baseURL:'http://v.juhe.cn',
//         timeout:5000
//     })
//     instance(config.baseConfig)
//     .then(res=>{
//         config.success(res)
//     }).catch(err=>{
//         config.failure(err)
//     })
// }


// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://v.juhe.cn',
//             timeout: 5000
//         })
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             }).catch(err => {
//                 reject(err)
//             })
//     })
// }


export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://v.juhe.cn',
        timeout: 5000
    })
    //2.axios的拦截器

    //请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config)
        //使用场景1:在config中变更一些数据
        //使用场景2:在发送网络请求时候增加一些效果(如loading动画)
        //使用场景3:必须携带一些特殊信息(如token)
        return config
    },err=>{
        console.log(err)
    });

    //响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res)
        return res.data
    },err=>{
        console.log(err)
    });

    //3.发送真正的网络请求
    return instance(config)
}