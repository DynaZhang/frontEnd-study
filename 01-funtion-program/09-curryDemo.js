/**
 * 模拟lodash中的curry实现
 * @param func
 * @returns {any}
 */
function curry(func) {
  // 判断实参(args)和形参(func.length)的个数
  return function curriedFn(...args) {
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}
