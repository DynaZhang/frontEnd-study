// 高阶函数 函数作为返回值
function makeFn() {
    const msg = 'hello fn'
    return function () {
        console.log(msg)
    }
}
makeFn()()


/**
 * 只执行一次函数
 * @param fn
 * @returns {(function(): (*|undefined))|*}
 */
function once (fn) {
    let flag = false
    return function () {
        if (!flag) {
            flag = true
            return fn.apply(this,arguments)   // 当fn需要传参时，可以使用apply
        }
    }
}
let pay = once(function (money) {console.log('pay' + money)})
pay(5)
pay(10)
