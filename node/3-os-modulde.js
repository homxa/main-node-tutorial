// os = operating system
// it is use in getting the user operating system info

const os  = require('os')

// current userInfo
const user = os.userInfo()
console.log(user)

// user device uptime how long it has been on

console.log(os.uptime())




console.log(`Hostname: ${os.hostname()}`);
console.log(`Operating System: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU: ${os.cpus().length} cores`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`System Uptime: ${os.uptime()} seconds`);
console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
console.log(`User Info: ${JSON.stringify(os.userInfo(), null, 2)}`);