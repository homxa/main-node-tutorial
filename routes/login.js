const express = require('express')
const route= express.Router()
const app = express()


// route.get('/', (req, res) => {
//   console.log(req.body);
//   res.status(200).sendFile(__dirname + '/index1.html');
// });


//post methode to add 
route.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  res.send(`Welcome home ${name}`);
});


module.exports = route;
