const _ = require('lodash')

function getSum(a,b,c) {
  return a + b + c
}
let curried = _.curry(getSum)
console.log(curried(1, 2, 3));
console.log(curried(1, 2)(3));
console.log(curried(1)(2)(3));

const match = _.curry(function (reg, str) {
  return str.match(reg)
})
const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
console.log(haveSpace('hello world'))
console.log(haveNumber('25$'))

const filter = _.curry(function (func, array) {
  return array.filter(func)
})
console.log(filter(haveSpace, ['John Connor', 'John_Donne']))
const findSpace = filter(haveSpace)
console.log(findSpace(['John Connor', 'John_Donne']))
