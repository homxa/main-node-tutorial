
// console.log(__dirname,'here')
// //ReadableStream  =  read data in to chunk or buffer and send it one at a time to keep the user besuy before all arrive
// const fs  = require('fs');

// const readStream = fs.createReadStream('./content/bigFile.txt',{highWaterMark: 1024, encoding:'utf8'});


// readStream.on('data',(chunk)=>{
//   console.log('new one gettent')
// console.log(chunk)

// })


// pipe() methode alllow us to wrte to a stream automatical or present the recive data to the user




const fs  = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
console.log('request is made')
res.writeHead(200,{'Content-Type':	'text/plain'});
const readStream = fs.createReadStream('./content/bigFile.txt',{highWaterMark: 1024, encoding:'utf8'});
//readStream.pipe(res)

readStream.on('open',()=>{
  readStream.pipe(res)


})
})
