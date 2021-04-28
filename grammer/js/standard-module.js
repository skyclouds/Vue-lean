//标准导出写法
var module=(function(){
    var obj = {}
    obj.name='Standard-module'
    obj.print=function(info){
        console.log(info)
    }
    return obj
})()