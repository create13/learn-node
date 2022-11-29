// 引入模块
const http = require("http");

// 创建服务器
http
  .createServer((req, res) => {
    console.log("req.url", req.url);
    if (req.url === "/") {
      res.write("Hello Node!");
      res.end();
    }
  })
  .listen(5000, () => {
    console.log("服务器已运行...");
  });
