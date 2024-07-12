const express = require('express')
const path = require('path')
const app = express()

// static files are file that does not need to be changed like,css,js images etc
app.use(express.static('./public'))

app.get('/',(req,res)=>{

console.log('welocome home')
res.status(200).sendFile(path.join(__dirname, './index.html'))
//or same reult
//res.status(200).sendFile(__dirname + '/index.html')


})

app.listen('3000')