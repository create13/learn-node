// const person = require("./module/person");
// console.log("person", person);
// const Person = require("./module/person");
// const newPerson = new Person("Augus", 28);
// newPerson.greeting();

// -----------------------分隔符----------------------------
// 引入模块
const http = require("http");
const path = require("path");
const fs = require("fs");
// 创建变量，存储服务器对象
const server = http.createServer((req, res) => {
  console.log("req.url", req.url);
  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // }
  // if (req.url === "/about") {
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // }
  // if (req.url === "/api/users") {
  //   fs.readFile(path.join(__dirname, "public", "data.json"), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(data);
  //   });
  // }

  // 创建变量 存储文件路径
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log("filePath", filePath);

  // 初始化Content-Type
  let contentType = "text/html";
  // 文件扩展名
  let extname = path.extname(filePath);

  // 通过验证扩展名设置content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // 没有找到页面
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        // 其他服务器错误
        res.writeHead(500);
        res.end("服务器错误");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data, "utf8");
    }
  });
});

// 端口号
const PORT = process.env.PORT || 9999;

// 监听端口
server.listen(PORT, () => console.log(`服务器已经在${PORT}端口号运行...`));
