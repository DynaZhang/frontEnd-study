// reducer 函数接收4个参数:
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
// 您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

function compose(...fns) {
  return function(value) {
    return fns.reverse().reduce(function(acc, fn) {
      return fn(acc)
    }, value)
  }
}

const compose2 = (...fns) => (value) => fns.reverse().reduce((acc, fn) => fn(acc), value)
