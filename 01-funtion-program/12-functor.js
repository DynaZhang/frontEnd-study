// 到目前为止已经已经学习了函数式编程的一些基础，但是我们还没有演示在函数式编程中如何把副作用控制在可控的范围内、异常处理、异步操作等。
// 什么是 Functor
// 容器：包含值和值的变形关系(这个变形关系就是函数)
// 函子：是一个特殊的容器，通过一个普通的对象来实现，该对象具有 map 方法，map 方法可以运行一个函数对值进行处理(变形关系)

class Container {
  static of (value) {
    return new Container(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return Container.of(fn(this._value))
  }
}

console.log(Container.of(3).map(x => x + 2).map(x => x * 3));

// 总结：
// 函数式编程的运算不直接操作值，而是由函子完成
// 函子就是一个实现了 map 契约的对象
// 我们可以把函子想象成一个盒子，这个盒子里封装了一个值
// 想要处理盒子中的值，我们需要给盒子的 map 方法传递一个处理值的函数（纯函数），由这
// 个函数来对值进行处理
// 最终 map 方法返回一个包含新值的盒子（函子）
