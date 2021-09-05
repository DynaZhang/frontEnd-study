// 纯函数：对于相同的输入永远会得到相同的输出，而且没有任何可观察的副作用
// 副作用让一个函数变的不纯(如上例)，纯函数的根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用。
// 副作用来源：配置文件、数据库、获取用户的输入

// let mini = 18
// function checkAge(age) {
//   return age > mini
// }
function checkAge (age) {
  let mini = 18
  return age >= mini
}

