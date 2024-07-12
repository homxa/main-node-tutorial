const express = require('express')
const product = require('./data.js')
const app = express();
// first basic api
console.log(product.product)
app.get('/',(req,res)=>{


res.send('<h1>Welcome to product page</h1><a href=/api/product>products<a/>')



})
//2nd api to the product page
app.get('/api/product',(req,res)=>{
  const breif = product.product.map((item)=>{
   // console.log(item.id)

    const {id, Image, name} = item;
    return {id,name,Image,}

  })

  res.json(breif)
})


// getting particular item
app.get('/api/:productId',(req,res)=>{
  const breif = product.product.find((item)=>{
   
   return item.id === req.params.productId
  

  })

  res.json(breif)
})




//query allow us to add optional content to our url  such as
//http://localhost:3000/api/product/query?search=c&limit=3



app.get('/api/product/query',(req,res)=>{
 console.log(req.query)
const {search,limit} = req.query
 let sortedProduct = [...product.product]

 if(search){
// searching for perticulal item 

  sortedProduct = sortedProduct.filter((item)=>{
    return item.name.startsWith(search)
  })
 }
if(limit){
  //limiting content to be displayed in each seached
  sortedProduct = sortedProduct.slice(0,Number(limit))
 
}

res.status(200).json(sortedProduct)
})

