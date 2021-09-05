// 函数组合 (compose)：如果一个函数要经过多个函数处理才能得到最终值，这个时候可以把中间过程的函数合并成一个函数
// 函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果
// 函数组合默认是从右到左执行

function compose(f,g) {
  return function (x) {
    return f(g(x))
  }
}

function first(arr) {
  return arr[0]
}

function reverse(arr) {
  return arr.reverse()
}

let last = compose(first, reverse)
console.log(last([1,2,3]))
