// 纯函数：相同的输入永远会得到相同的输出，而且没有任何可观察的副作用
// 函数式编程不会保留计算中间的结果，所以变量是不可变的（无状态的）

// 纯函数的好处
// 因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来
// 纯函数让测试更方便
// 在多线程环境下并行操作共享的内存数据很可能会出现意外情况
// 纯函数不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数 (Web Worker)

// 记忆函数
function memorize(pureFn) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || pureFn.apply(pureFn,arguments)
        return cache[key]
    }
}

function getCircleArea(r) {
  return Math.PI * r * r
}


console.log(memorize(getCircleArea)(5))
console.log(memorize(getCircleArea)(10))
console.log(memorize(getCircleArea)(5))
