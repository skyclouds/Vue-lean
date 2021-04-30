export default {
    //这里到context指到是store
    //这里的commit只影响store中的mutations
    asyncUpdateInfo(context,payload){
        console.log(context)
        console.log(payload)
        // setTimeout(() => {
        //     context.commit('updateInfo')
        //     payload.success()
        // }, 1000);

        //推荐到异步写法
        return new Promise((resolve)=>{
            setTimeout(() => {
                context.commit('updateInfo')
                resolve()
            }, 1000)
        })
    }
}