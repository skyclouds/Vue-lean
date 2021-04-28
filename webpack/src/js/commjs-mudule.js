var name="CommonJS-module"
var version="0.0.1"

function print(info){
    console.log(info)
}

function info(){
    console.log(name+":"+version)
}

//CommonJS导出写法
module.exports={
    name,
    version,
    info,
    print
}