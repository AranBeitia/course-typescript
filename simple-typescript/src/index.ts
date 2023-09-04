// import multiply, { multiplyByTwo } from './multiply'
import * as multiplyModule from './multiply'

const a = 4
const b = 4

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`)
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`)
