// 引入模块
const EventEmitter = require("events");

// 创建MyEmitter类
class MyEmitter extends EventEmitter {}

// 实例化对象
const myEmitter = new MyEmitter();

// 注册事件 同步执行
myEmitter.on("event", (msg) => {
  console.log("注册事件同步", msg);
});
// 注册事件 异步执行
myEmitter.on("event", (msg) => {
  setImmediate(() => {
    console.log("注册事件异步", msg);
  });
});

// 触发事件
myEmitter.emit("event", "实现事件并传递参数到注册事件回调函数中");
console.log(1);
