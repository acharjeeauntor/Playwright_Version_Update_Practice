// // import myClass from "./module1.page"
// import {test} from "@playwright/test"
// import {myClass} from "./module1.page"

// test('a',async()=>{
// var x = new myClass()
// await x.myfunc()
// })

// import myClass from "./module1.page"
import {test} from "@playwright/test"
const {myClass} = require("./module2.page")
//const myClass = require("./module2.page")

test('a',async()=>{
var x = new myClass()
await x.myfunc()
})