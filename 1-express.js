const express = require('express');

 const app = express()
 const port = 3000
 


// the get = get the url enter and take specific action
 app.get('/', (req, res) => {
   res.status(200).send('Hello World!')
 })

 app.get('/come', (req, res) => {
  res.status(200).send('come page')
})

app.all('*', (req, res) => {
  res.status(404).send('page not found')
})

 app.listen(port,()=>{

  console.log('runing 300')
 })