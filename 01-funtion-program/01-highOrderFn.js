// 高阶函数 函数作为参数
/**
 * 遍历数组
 * @param arr
 * @param fn
 */
function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}
function fn(item) {
    console.log(item)
}
const arr = [1,3,5,7,9]
forEach(arr, fn)

/**
 * 筛选数组元素
 * @param arr
 * @param fn
 * @returns {*[]}
 */
function filter(arr, fn) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
const arr1 = [1,2,3,4,5,7,9]
const res = filter(arr1, (item) => item % 2 === 0 )
console.log(res)
