let name="ES6-module"
function print(info){
    console.log(info)
}

//ES6导出
export{
    name,
    print
}

export let age=18

export function sum(a,b){
    return a+b
}

export class User{
    constructor(name){
        this.name=name
    }
    run(){
        console.log("Run")
    }
}

//default只能有一个,外部导入可以自己命名
// const address="福州"
// export default address

export default function(info){
    console.log(info)
}