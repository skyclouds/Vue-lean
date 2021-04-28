const name="ES6-module"
const version="0.0.1"

function print(info){
    console.log(info)
}

function info(){
    console.log(name+":"+version)
}

export{
    name,
    version,
    info,
    print
}