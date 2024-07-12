const express = require('express')
const product = require('./data.js')
const app = express();
// first basic api
console.log(product.product)
app.get('/',(req,res)=>{


res.json(product.product)



})

app.listen(3000,()=>{

console.log('runing 300')
})