// 引入模块
const fs = require("fs");
const path = require("path");
// fs.mkdir() 创建异步目录
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("文件夹已创建...");
// });
// fs.writeFile() 创建异步文件
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world!",
//   (err) => {
//     if (err) throw err;
//     console.log("文件已被写入...");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I love Node!",
//       (err) => {
//         if (err) throw err;
//         console.log("文件已被写入...");
//       }
//     );
//   }
// );
// fs.appendFile() 动态向异步文件中插入内容
// fs.appendFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "I love Node!",
//   (err) => {
//     if (err) throw err;
//     console.log("文件已被写入...");
//   }
// );
// fs.readFile() // 异步读取文件
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("读取到的数据", data);
// });

// fs.rename() 文件重命名
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("文件已被重命名");
  }
);
