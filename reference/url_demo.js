// 引入模块
const { URL } = require("url");

const myUrl = new URL(
  "http://www.augusvlo.cn:8000/index.html?id=100&status=active#hash"
);

// 序列化URL
// console.log("myUrl.href", myUrl.href);
// console.log("myUrl.toString()", myUrl.toString());

// // 获取host
// console.log("myUrl.host", myUrl.host);

// // 获取hostname
// console.log("myUrl.hostname", myUrl.hostname);

// // 获取pathname
// console.log("myUrl.pathname", myUrl.pathname);

// // 获取search
// console.log("myUrl.search", myUrl.search);

// // 获取searchParams 获取查询的对象模式
// console.log("myUrl.searchParams", myUrl.searchParams);

// 给searchParams对象中新增键值对 append
myUrl.searchParams.append("abc", 123);
console.log("myUrl.searchParams", myUrl.searchParams);

// forEach
console.log(
  "Array.isArray(myUrl.searchParams)",
  Array.isArray(myUrl.searchParams)
);
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}:${value}`);
});
