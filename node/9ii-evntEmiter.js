const http = require('http')

//node http server emit it for us when the request is been recive 
const server = http.createServer();
server.on('request', (req, res) => {


  console.log(req.url)
  res.end('hello world')
})



server.listen(5000, () => {
  console.log('listening on port 5000')
})