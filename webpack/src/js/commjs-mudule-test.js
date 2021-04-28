var { name, version, print } = require("./commjs-mudule.js")

function test() {
    print(name + ":" + version)
}

module.exports = {
    test
}