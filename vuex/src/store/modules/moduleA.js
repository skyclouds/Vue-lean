export default {
    state:{
        name:'linus'
    },
    mutations:{
        updateModuleAName(state,payload){
            state.name=payload
        }
    },
    actions:{
        //这里到context指到是moduleA
        //这里的commit只影响moduleA的mutations
        asyncUpdateModuleName(context,payload){
            console.log(context)
            return new Promise((resolve)=>{
                setTimeout(() => {
                    context.commit('updateModuleAName',payload)
                    resolve()
                }, 1000)
            })
        }
    },
    getters:{
        labelName1(state){
            return 'Hello:'+state.name
        },
        labelName2(state,getters){
            return getters.labelName1+"!"
        },
        labelName3(state,getters,rootState){
            return getters.labelName2+rootState.counter
        }
    }
}