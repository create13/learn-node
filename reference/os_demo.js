//  引入模块 操作系统

const os = require("os");

// os.platform() 返回标识操作系统字符串 windows系统返回win32 mac系统返回darwin
console.log("os.platform()", os.platform());

// os.arch() 返回cpu架构
console.log("os.arch()", os.arch());

// os.cpus() 返回内核信息
console.log("os.cpus()", os.cpus());

// os.freemem() 返回系统空闲内存 (以字节为单位)
console.log("os.freemem()", os.freemem());

// os.totalmem() 返回系统内存总量  (以字节为单位)
console.log("os.totalmem()", os.totalmem());

// os.homedir() 返回用户的主目录的字符串路径
console.log("os.homedir()", os.homedir());

// os.uptime() 返回系统的正常运行时间(以秒为单位)
console.log("os.uptime()", os.uptime());
