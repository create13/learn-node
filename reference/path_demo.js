const path = require("path");
// path.basename 返回path的最后一部分
const currentPath = __filename;
console.log("basename", path.basename(currentPath));

// path.dirname 返回path的目录名
console.log("dirname", path.dirname(currentPath));

// path.extname() 返回文件的扩展名
console.log("extname", path.extname(currentPath));

// path.parse() 返回一个对象
console.log("parse", path.parse(currentPath));

// path.join() 串联路径
console.log("join", path.join(__dirname, "test", "index.js"));
