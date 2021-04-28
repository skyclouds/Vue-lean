//导入对象
import{name,print} from "./es6-module.js"
print("Print "+name)

//导入变量
import{age} from "./es6-module.js"
print("Age: "+age)

//导入function
import{sum} from "./es6-module.js"
print("Sum: "+sum(1,2))

//导入class
import{User} from "./es6-module.js"
print(new User("kobe"))


//导入default
// import add from "./es6-module.js"
// print(add)
import info from "./es6-module.js"
info("default")

//导入全部
import * as module from "./es6-module.js"
console.log(module.age)
module.print("hello")