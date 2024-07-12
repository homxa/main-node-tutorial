

//basic on how http work we fist create our server and then listen to requests  then respond

const http = require('http');

console.log('hello')

const server = http.createServer((req,res)=>{
console.log(req)
 if(req.url === '/'){
  res.end('<h1>Home Page</h1>')
 }
 if(req.url === '/get'){
  res.end('<h1>Get</h1>')
 }
 res.end('<h1>0pps npot found</h1>')

});

// is the host we are listing from just like react own of 3000

server.listen(5000);