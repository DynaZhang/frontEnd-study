// 模拟数组中的map every some

function map(arr, fn) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        const newItem = fn(arr[i])
        res.push(newItem)
    }
    return res
}

function every (arr, fn) {
    let res = true
    for (const value of arr) {
        if (!fn(value)) {
            res = false
            break
        }
    }
    return res
}

function some (arr, fn) {
    let res = false
    for (const value of arr) {
        if (fn(value)) {
            res = true
            break
        }
    }
    return res
}
