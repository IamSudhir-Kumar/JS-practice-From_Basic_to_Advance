const os = require('os')
const {add , subtract, divide, multiply} = require("./MAth")
const path = require('path')
console.log(os.type())
console.log(os.version())

console.log(add(9 , 5))
console.log(subtract(7 , 8))
console.log(divide(4 , 5))
console.log(multiply(4, 7))

console.log(__dirname)
console.log(__filename)
console.log(path.basename(__filename))
console.log(path.parse(__filename))
console.log(path.join(__dirname, 'test', 'hello.html'))